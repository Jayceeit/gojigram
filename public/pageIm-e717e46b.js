import{a as o,e as t,g as r,_ as a,l as s}from"./index-cfdc21d6.js";import{P as l}from"./page-49e139d4.js";const n=()=>(o.managers.appStateManager.pushToState("authState",{_:"authStateSignedIn"}),t.requestedServerLanguage||t.getCacheLangPack().then(e=>{e.local&&t.getLangPack(e.lang_code)}),i.pageEl.style.display="",r(),Promise.all([a(()=>import("./appDialogsManager-12babc1f.js"),["./appDialogsManager-12babc1f.js","./avatar-f4789ea1.js","./button-1a8a4b7d.js","./index-cfdc21d6.js","./index-91acc02b.css","./page-49e139d4.js","./wrapEmojiText-6fc7a0b3.js","./scrollable-3bdaee27.js","./putPreloader-ae29ef38.js","./htmlToSpan-9b520043.js","./countryInputField-90a14697.js","./textToSvgURL-c6ebb454.js","./codeInputField-a48293e4.js","./appDialogsManager-dc588fa7.css"],import.meta.url),s(),"requestVideoFrameCallback"in HTMLVideoElement.prototype?Promise.resolve():a(()=>import("./requestVideoFrameCallbackPolyfill-d3040205.js"),[],import.meta.url)]).then(([e])=>{e.default.start(),setTimeout(()=>{document.getElementById("auth-pages").remove()},1e3)})),i=new l("page-chats",!1,n);export{i as default};
//# sourceMappingURL=pageIm-e717e46b.js.map