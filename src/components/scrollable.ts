import { CancellablePromise, deferredPromise } from "../helpers/cancellablePromise";
import { isTouchSupported } from "../helpers/touchSupport";
import { logger, LogLevels } from "../lib/logger";
import smoothscroll, { SCROLL_TIME, SmoothScrollToOptions } from '../vendor/smoothscroll';
(window as any).__forceSmoothScrollPolyfill__ = true;
smoothscroll();
/*
var el = $0;
var height = 0;
var checkUp = false;

do {
  height += el.scrollHeight;
} while(el = (checkUp ? el.previousElementSibling : el.nextElementSibling));
console.log(height);
*/

/*
Array.from($0.querySelectorAll('.bubble__container')).forEach(_el => {
	//_el.style.display = '';	
	//return;

	let el = _el.parentElement;
	let height = el.scrollHeight;
	let width = el.scrollWidth;
	el.style.width = width + 'px';
	el.style.height = height + 'px';
	_el.style.display = 'none';
});
*/

/* const scrollables: Map<HTMLElement, Scrollable> = new Map();
const scrollsIntersector = new IntersectionObserver(entries => {
  for(let entry of entries) {
    const scrollable = scrollables.get(entry.target as HTMLElement);

    if(entry.isIntersecting) {
      scrollable.isVisible = true;
    } else {
      scrollable.isVisible = false;

      if(!isInDOM(entry.target)) {
        scrollsIntersector.unobserve(scrollable.container);
        scrollables.delete(scrollable.container);
      }
    }
  }
}); */

export class ScrollableBase {
  protected log: ReturnType<typeof logger>;

  protected onScroll: () => void;
  public getScrollValue: () => number;

  public scrollLocked = 0;
  public scrollLockedPromise: CancellablePromise<void> = Promise.resolve();

  constructor(public el: HTMLElement, logPrefix = '', public container: HTMLElement = document.createElement('div')) {
    this.container.classList.add('scrollable');

    this.log = logger('SCROLL' + (logPrefix ? '-' + logPrefix : ''), LogLevels.error);

    if(el) {
      Array.from(el.children).forEach(c => this.container.append(c));

      el.append(this.container);
    }
    //this.onScroll();
  }

  protected setListeners() {
    window.addEventListener('resize', this.onScroll);
    this.container.addEventListener('scroll', this.onScroll, {passive: true, capture: true});
  }

  public append(element: HTMLElement) {
    this.container.append(element);
  }

  public scrollTo(value: number, side: 'top' | 'left', smooth = true, important = false, scrollTime = SCROLL_TIME) {
    if(this.scrollLocked && !important) return;

    const scrollValue = this.getScrollValue();
    if(scrollValue == Math.floor(value)) {
      return;
    }

    const wasLocked = !!this.scrollLocked;
    if(wasLocked) clearTimeout(this.scrollLocked);
    if(smooth) {
      if(!wasLocked) {
        this.scrollLockedPromise = deferredPromise<void>();
      }
  
      this.scrollLocked = window.setTimeout(() => {
        this.scrollLocked = 0;
        this.scrollLockedPromise.resolve();
        //this.onScroll();
        this.container.dispatchEvent(new CustomEvent('scroll'));
      }, scrollTime);
    } else if(wasLocked) {
      this.scrollLockedPromise.resolve();
    }

    const options: SmoothScrollToOptions = {
      behavior: smooth ? 'smooth' : 'auto',
      scrollTime
    };

    options[side] = value;

    this.container.scrollTo(options as any);

    if(!smooth) {
      this.container.dispatchEvent(new CustomEvent('scroll'));
    }
  }
}

export type SliceSides = 'top' | 'bottom';
export type SliceSidesContainer = {[k in SliceSides]: boolean};

export default class Scrollable extends ScrollableBase {
  public splitUp: HTMLElement;
  
  public onScrolledTop: () => void = null;
  public onScrolledBottom: () => void = null;

  public onScrollMeasure: number = null;
  
  public lastScrollTop: number = 0;

  public loadedAll: SliceSidesContainer = {top: true, bottom: false};

  constructor(el: HTMLElement, logPrefix = '', public onScrollOffset = 300) {
    super(el, logPrefix);

    this.container.classList.add('scrollable-y');
    this.setListeners();
  }

  public setVirtualContainer(el?: HTMLElement) {
    this.splitUp = el;
    this.log('setVirtualContainer:', el, this);
  }

  public onScroll = () => {
    //if(this.debug) {
      //this.log('onScroll call', this.onScrollMeasure);
    //}

    if(this.onScrollMeasure || ((this.scrollLocked || (!this.onScrolledTop && !this.onScrolledBottom)) && !this.splitUp)) return;
    this.onScrollMeasure = window.requestAnimationFrame(() => {
      this.checkForTriggers();

      this.onScrollMeasure = 0;
    });
  };

  public checkForTriggers() {
    if(this.scrollLocked || (!this.onScrolledTop && !this.onScrolledBottom)) return;

    const container = this.container;
    const scrollHeight = container.scrollHeight;
    if(!scrollHeight) { // незачем вызывать триггеры если блок пустой или не виден
      return;
    }

    const {clientHeight, scrollTop} = container;
    const maxScrollTop = scrollHeight - clientHeight;

    //this.log('checkForTriggers:', scrollTop, maxScrollTop);

    if(this.onScrolledTop && scrollTop <= this.onScrollOffset) {
      this.onScrolledTop();
    }

    if(this.onScrolledBottom && (maxScrollTop - scrollTop) <= this.onScrollOffset) {
      this.onScrolledBottom();
    }
  }

  public prepend(element: HTMLElement) {
    (this.splitUp || this.container).prepend(element);
  }

  public append(element: HTMLElement) {
    (this.splitUp || this.container).append(element);
  }

  public scrollIntoView(element: HTMLElement, smooth = true) {
    if(element.parentElement && !this.scrollLocked) {
      const isFirstUnread = element.classList.contains('is-first-unread');

      let offset = element.getBoundingClientRect().top - this.container.getBoundingClientRect().top;
      offset = this.scrollTop + offset;
      
      if(!smooth && isFirstUnread) {
        this.scrollTo(offset, 'top', false);
        return;
      }

      const clientHeight = this.container.clientHeight;
      const height = element.scrollHeight;
      
      const d = height >= clientHeight ? 0 : (clientHeight - height) / 2;
      offset -= d;
      
      this.scrollTo(offset, 'top', smooth);
    }
  }

  public getScrollValue = () => {
    return this.scrollTop;
  };

  public slice(side: SliceSides, safeCount: number/*  sliceLength: number */) {
    //const isOtherSideLoaded = this.loadedAll[side == 'top' ? 'bottom' : 'top'];
    //const multiplier = 2 - +isOtherSideLoaded;
    const multiplier = 2;
    safeCount *= multiplier;

    const length = this.splitUp.childElementCount;

    if(length <= safeCount) {
      return [];
    }

    const children = Array.from(this.splitUp.children) as HTMLElement[];
    const sliced = side == 'top' ? children.slice(0, length - safeCount) : children.slice(safeCount);
    for(const el of sliced) {
      el.remove();
    }

    this.log.error('slice', side, length, sliced.length, this.splitUp.childElementCount);

    if(sliced.length) {
      this.loadedAll[side] = false;
    }

    return sliced;
  }

  get isScrolledDown() {
    return this.scrollHeight - Math.round(this.scrollTop + this.container.offsetHeight) <= 1;
  }

  set scrollTop(y: number) {
    this.container.scrollTop = y;
  }
  
  get scrollTop() {
    //this.log.trace('get scrollTop');
    return this.container.scrollTop;
  }
  
  get scrollHeight() {
    return this.container.scrollHeight;
  }
}

export class ScrollableX extends ScrollableBase {
  constructor(el: HTMLElement, logPrefix = '', public onScrollOffset = 300, public splitCount = 15, public container: HTMLElement = document.createElement('div')) {
    super(el, logPrefix, container);

    this.container.classList.add('scrollable-x');

    if(!isTouchSupported) {
      const scrollHorizontally = (e: any) => {
        e = window.event || e;
        if(e.which == 1) {
          // maybe horizontal scroll is natively supports, works on macbook
          return;
        }

        const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.container.scrollLeft -= (delta * 20);
        e.preventDefault();
      };
      if(this.container.addEventListener) {
        // IE9, Chrome, Safari, Opera
        this.container.addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        this.container.addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
        // IE 6/7/8
        // @ts-ignore
        this.container.attachEvent("onmousewheel", scrollHorizontally);
      }
    }

    this.setListeners();
  }

  public scrollIntoView(element: HTMLElement, smooth = true, scrollTime?: number) {
    if(element.parentElement && !this.scrollLocked) {
      let offset = element.getBoundingClientRect().left - this.container.getBoundingClientRect().left;
      offset = this.getScrollValue() + offset;

      const clientWidth = this.container.clientWidth;
      const width = element.scrollWidth;
      
      const d = width >= clientWidth ? 0 : (clientWidth - width) / 2;
      offset -= d;
      
      this.scrollTo(offset, 'left', smooth, undefined, scrollTime);
    }
  }

  public getScrollValue = () => {
    return this.container.scrollLeft;
  };
}
