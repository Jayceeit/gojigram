(this.webpackJsonp=this.webpackJsonp||[]).push([[15,17],{10:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));const n=s(49).a.debug,i="undefined"!=typeof window?window:self;e.b=n},19:function(t,e,s){"use strict";function n(t,e,s=!0,n=!0){let i=null;return(...r)=>{i?(clearTimeout(i),i=null):s&&t(...r),i=setTimeout(()=>{n&&t(...r),i=null},e)}}function i(t,e,s=!0){let n,i,r=null;return(...o)=>{n=!0,i=o,r||(s&&(n=!1,t(...i)),r=window.setInterval(()=>{if(!n)return window.clearInterval(r),void(r=null);n=!1,t(...i)},e))}}s.d(e,"a",(function(){return n})),s.d(e,"e",(function(){return i})),s.d(e,"d",(function(){return r})),s.d(e,"c",(function(){return l})),s.d(e,"b",(function(){return c}));const r=t=>new Promise(e=>{setTimeout(e,t)});let o;function l(t){o?o.push(t):(o=[t],requestAnimationFrame(()=>{const t=o;o=void 0,t.forEach(t=>t())}))}function c(){return new Promise(t=>{l(()=>{l(t)})})}},30:function(t,e,s){"use strict";function n(){let t={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...e)=>{t.lastNotify=e,t.listeners.forEach(t=>t(...e))},lastNotify:void 0,listeners:[],addNotifyListener:e=>{t.lastNotify&&e(...t.lastNotify),t.listeners.push(e)}},e=new Promise((s,n)=>{t.resolve=t=>{e.isFulfilled||(e.isFulfilled=!0,s(t))},t.reject=(...t)=>{e.isRejected||(e.isRejected=!0,n(...t))}});return e.finally(()=>{e.notify=null,e.listeners.length=0,e.lastNotify=null,e.cancel&&(e.cancel=()=>{})}),Object.assign(e,t),e}s.d(e,"a",(function(){return n}))},46:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));class n{constructor(t){this._constructor(t)}_constructor(t=!1){this.reuseResults=t,this.listeners={},this.listenerResults={}}addEventListener(t,e,s){var n;this.listenerResults.hasOwnProperty(t)&&(e(...this.listenerResults[t]),s)||(null!==(n=this.listeners[t])&&void 0!==n?n:this.listeners[t]=[]).push({callback:e,once:s})}removeEventListener(t,e){this.listeners[t]&&this.listeners[t].findAndSplice(t=>t.callback===e)}dispatchEvent(t,...e){this.reuseResults&&(this.listenerResults[t]=e);const s=[],n=this.listeners[t];if(n){n.slice().forEach(i=>{-1!==n.findIndex(t=>t.callback===i.callback)&&(s.push(i.callback(...e)),i.once&&this.removeEventListener(t,i.callback))})}return s}cleanup(){this.listeners={},this.listenerResults={}}}},49:function(t,e,s){"use strict";const n={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};e.a=n},9:function(t,e,s){"use strict";s.r(e),s.d(e,"RootScope",(function(){return r}));var n=s(46),i=s(10);class r extends n.a{constructor(){super(),this._overlayIsActive=!1,this.myId=0,this.idle={isIDLE:!0},this.connectionStatus={},this.broadcast=(t,e)=>{this.dispatchEvent(t,e)},this.on=(t,e,s)=>{super.addEventListener(t,e,s)},this.addEventListener=this.on,this.off=(t,e)=>{super.removeEventListener(t,e)},this.removeEventListener=this.off,this.on("user_auth",t=>{this.myId=t}),this.on("connection_status_change",t=>{const e=t;this.connectionStatus[t.name]=e})}get overlayIsActive(){return this._overlayIsActive}set overlayIsActive(t){this._overlayIsActive=t,this.broadcast("overlay_toggle",t)}}const o=new r;i.a.rootScope=o,e.default=o,o.addEventListener("album_edit",t=>{}),o.addEventListener("album_edit",t=>{})}}]);
//# sourceMappingURL=15.d2ff912bb93d8715c3ec.chunk.js.map