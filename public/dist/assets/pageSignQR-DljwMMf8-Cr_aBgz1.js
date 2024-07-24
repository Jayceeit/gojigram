const __vite__fileDeps=["assets/pageSignIn-B-PYLplq-KiaYOeAk.js","assets/index-p16BOqnp.js","assets/index-B8jL9cEs.css","assets/putPreloader-BTYVD0HY-Cj27QpTZ.js","assets/page-VE9OcG0U-aQMl6CMd.js","assets/countryInputField-Dd2coeyi-CrWpF_Pz.js","assets/button-BD6I5F21-BCIxP22E.js","assets/wrapEmojiText-DJXpRYaz-DsSuZO2C.js","assets/scrollable-DoUmbSw--CLoL6L-W.js","assets/textToSvgURL-Cnw_Q8Rw-CS9KuXZv.js","assets/qr-code-styling-CvBVNv73-D6GK9TVS.js","assets/_commonjsHelpers-Cpj98o6Y-DwXtFsJ3.js","assets/pageIm-B4GzUrmM-D9QjBKom.js","assets/pagePassword-BBck6_oH-C0f6p0tu.js","assets/htmlToSpan-CWT7jaQY-DLinxisR.js","assets/loginPage-fFfFEVsO-BAL91Mrr.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{U as d,w as Q,S as l,z,v as B,G as $,V as w,_ as y,x as j,p as T}from"./index-p16BOqnp.js";import{_ as H,z as F}from"./page-VE9OcG0U-aQMl6CMd.js";import{H as R}from"./button-BD6I5F21-BCIxP22E.js";import{i as D}from"./putPreloader-BTYVD0HY-Cj27QpTZ.js";import{o as U,l as Y}from"./textToSvgURL-Cnw_Q8Rw-CS9KuXZv.js";const G=["./pageSignIn-B-PYLplq.js","./index-Bk6w0QSK.js","./index-jdz_mo9Z.css","./putPreloader-BTYVD0HY.js","./page-VE9OcG0U.js","./countryInputField-Dd2coeyi.js","./button-BD6I5F21.js","./wrapEmojiText-DJXpRYaz.js","./scrollable-DoUmbSw-.js","./textToSvgURL-Cnw_Q8Rw.js","./qr-code-styling-CvBVNv73.js","./_commonjsHelpers-Cpj98o6Y.js","./pageIm-B4GzUrmM.js","./pagePassword-BBck6_oH.js","./htmlToSpan-CWT7jaQY.js","./loginPage-fFfFEVsO.js"],E=e=>e.map(r=>G[r]);let b=!1;function N(){return x||(x=l.managers.apiManager.getConfig().then(e=>e.suggested_lang_code!==d.lastRequestedLangCode?Promise.all([e,d.getStrings(e.suggested_lang_code,["Login.ContinueOnLanguage"]),d.getCacheLangPack()]):[]))}let x;function W(e){b||N().then(([r,s])=>{if(!r)return;const c=[];s.forEach(o=>{const h=d.strings.get(o.key);h&&(c.push(h),d.strings.set(o.key,o))});const i="Login.ContinueOnLanguage",a=R("btn-primary btn-secondary btn-primary-transparent primary",{text:i});a.lastElementChild.classList.remove("i18n"),Q({text:[d.format(i,!0)]}).then(()=>{window.requestAnimationFrame(()=>{e.append(a)})}),l.addEventListener("language_change",()=>{a.remove()},{once:!0}),c.forEach(o=>{d.strings.set(o.key,o)}),H(a,o=>{z(o),b=!0,a.disabled=!0,D(a),d.getLangPack(r.suggested_lang_code)})})}function J(e,r){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,"")}function K(e){let r,s="";for(let c=e.length,i=0,a=0;a<c;++a)r=a%3,i|=e[a]<<(16>>>r&24),(r===2||c-a===1)&&(s+=String.fromCharCode(v(i>>>18&63),v(i>>>12&63),v(i>>>6&63),v(i&63)),i=0);return s.replace(/A(?=A$|$)/g,"=")}function v(e){return e<26?e+65:e<52?e+71:e<62?e-4:e===62?43:e===63?47:65}const O=3,X=async()=>{const e=C.pageEl.querySelector(".auth-image");let r=D(e,!0);const s=document.createElement("div");s.classList.add("input-wrapper");const c=R("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Cancel"});s.append(c),W(s);const i=e.parentElement,a=document.createElement("h4");B(a,"Login.QR.Title");const o=document.createElement("ol");o.classList.add("qr-description"),["Login.QR.Help1","Login.QR.Help2","Login.QR.Help3"].forEach(p=>{const t=document.createElement("li");t.append($(p)),o.append(t)}),i.append(a,o,s),c.addEventListener("click",()=>{w(()=>y(()=>import("./pageSignIn-B-PYLplq-KiaYOeAk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),E([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(p=>p.default.mount()),m=!0});const h=(await Promise.all([w(()=>y(()=>import("./qr-code-styling-CvBVNv73-D6GK9TVS.js"),__vite__mapDeps([10,11])).then(p=>p.q),E([10,11]),import.meta.url)]))[0].default;let m=!1;l.addEventListener("user_auth",()=>{m=!0,_=null},{once:!0});const L={ignoreErrors:!0};let S;const A=async p=>{try{let t=await l.managers.apiManager.invokeApi("auth.exportLoginToken",{api_id:j.id,api_hash:j.hash,except_ids:[]},{ignoreErrors:!0});if(t._==="auth.loginTokenMigrateTo"&&(L.dcId||(L.dcId=t.dc_id,l.managers.apiManager.setBaseDcId(t.dc_id)),t=await l.managers.apiManager.invokeApi("auth.importLoginToken",{token:t.token},L)),t._==="auth.loginTokenSuccess"){const g=t.authorization;return await l.managers.apiManager.setUser(g.user),w(()=>y(()=>import("./pageIm-B4GzUrmM-D9QjBKom.js"),__vite__mapDeps([12,1,2,4])),E([12,1,2,4]),import.meta.url).then(u=>u.default.mount()),!0}if(!S||!U(S,t.token)){S=t.token;const g=K(t.token),u="tg://login?token="+J(g,!0),k=window.getComputedStyle(document.documentElement),I=k.getPropertyValue("--surface-color").trim(),q=k.getPropertyValue("--primary-text-color").trim(),V=k.getPropertyValue("--primary-color").trim(),M=await fetch("assets/img/logo_padded.svg").then(n=>n.text()).then(n=>(n=n.replace(/(fill:).+?(;)/,`$1${V}$2`),Y(n))),f=new h({width:240*window.devicePixelRatio,height:240*window.devicePixelRatio,data:u,image:M,dotsOptions:{color:q,type:"rounded"},cornersSquareOptions:{type:"extra-rounded"},imageOptions:{imageSize:1,margin:0},backgroundOptions:{color:I},qrOptions:{errorCorrectionLevel:"L"}});f.append(e),e.lastChild.classList.add("qr-canvas");let P;f._drawingPromise?P=f._drawingPromise:P=Promise.race([T(1e3),new Promise(n=>{f._canvas._image.addEventListener("load",()=>{window.requestAnimationFrame(()=>n())},{once:!0})})]),await P.then(()=>{if(r){r.style.animation="hide-icon .4s forwards";const n=e.children[1];n.style.display="none",n.style.animation="grow-icon .4s forwards",setTimeout(()=>{n.style.display=""},150),setTimeout(()=>{n.style.animation=""},500),r=void 0}else Array.from(e.children).slice(0,-1).forEach(n=>{n.remove()})})}if(p){const g=Date.now()/1e3,u=t.expires-g-await l.managers.timeManager.getServerTimeOffset();await T(u>O?1e3*O:1e3*u|0)}}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":t.handled=!0,w(()=>y(()=>import("./pagePassword-BBck6_oH-C0f6p0tu.js"),__vite__mapDeps([13,1,2,3,4,6,14,7,15])),E([13,1,2,3,4,6,14,7,15]),import.meta.url).then(g=>g.default.mount()),m=!0,_=null;break;default:console.error("pageSignQR: default error:",t),m=!0;break}return!0}return!1};return async()=>{m=!1;do if(m||await A(!0))break;while(!0)}};let _;const C=new F("page-signQR",!0,()=>_,()=>{_||(_=X()),_.then(e=>{e()}),l.managers.appStateManager.pushToState("authState",{_:"authStateSignQr"})}),re=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{re as a,W as g,C as p};