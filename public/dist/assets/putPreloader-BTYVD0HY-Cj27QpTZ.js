import{d as l}from"./index-p16BOqnp.js";function i(e,n=!1){const t=`
  <svg xmlns="http://www.w3.org/2000/svg" class="preloader-circular" viewBox="25 25 50 50">
  <circle class="preloader-path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"/>
  </svg>`;if(n){const r=document.createElement("div");return r.classList.add("preloader"),r.innerHTML=t,e&&e.appendChild(r),r}return e.insertAdjacentHTML("beforeend",t),e.lastElementChild}l.putPreloader=i;function o(e,n="check"){const t=e.querySelector(".tgico");return t==null||t.remove(),e.disabled=!0,i(e),()=>{e.replaceChildren(),t&&e.append(t),e.removeAttribute("disabled")}}export{o as a,i};
