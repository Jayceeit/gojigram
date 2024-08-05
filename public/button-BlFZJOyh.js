import{M as w,n as E,j as I,I as y,k,aa as x,f as M,cx as D,i as A}from"./index-9i8nN69_.js";import{i as R,f as O}from"./page-gQlYf77Q.js";class P{constructor(){this.promises={},this.raf=E.bind(null),this.scheduled=!1}do(e,t){let r=this.promises[e];return r||(this.scheduleFlush(),r=this.promises[e]=I()),t!==void 0&&r.then(()=>t()),r}measure(e){return this.do("read",e)}mutate(e){return this.do("write",e)}mutateElement(e,t){const r=R(e),n=r?this.mutate():Promise.resolve();return t!==void 0&&(r?n.then(()=>t()):t()),n}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}}const L=new P;w&&(w.sequentialDom=L);let U=0;function z(a,e=()=>Promise.resolve(),t=null,r=!1,n=a){if(a.querySelector(".c-ripple"))return;a.classList.add("rp");const o=document.createElement("div");o.classList.add("c-ripple"),a.classList.contains("rp-square")&&o.classList.add("is-square"),a[r?"prepend":"append"](o);let l;const g=(i,c)=>{const p=Date.now(),s=document.createElement("div"),_=U++,u=+window.getComputedStyle(o).getPropertyValue("--ripple-duration").replace("s","")*1e3,S=l=()=>{const d=Date.now()-p,f=()=>{L.mutate(()=>{s.remove()}),t?.(_)};if(d<u){const h=Math.max(u-d,u/2);setTimeout(()=>s.classList.add("hiding"),Math.max(h-u/2,0)),setTimeout(f,h)}else s.classList.add("hiding"),setTimeout(f,u/2);y||(window.removeEventListener("contextmenu",l),window.removeEventListener("mousemove",l)),l=null,m=!1};e?.(_),E(()=>{if(S!==l)return;const d=o.getBoundingClientRect();s.classList.add("c-ripple__circle");const f=i-d.left,h=c-d.top,b=Math.sqrt((Math.abs(h-d.height/2)+d.height/2)**2+(Math.abs(f-d.width/2)+d.width/2)**2),q=f-b/2,C=h-b/2;s.style.width=s.style.height=b+"px",s.style.left=q+"px",s.style.top=C+"px",s.style.opacity="0",o.append(s),s.offsetWidth,s.style.opacity=""})},v=i=>i.target!==a&&(["BUTTON","A"].includes(i.target.tagName)||x(i.target,"c-ripple")!==o)&&(n===a||!O(i.target,n))&&!x(i.target,"checkbox-field");let m=!1;if(y){const i=()=>{l?.()},c=p=>{if(!k.isAvailable("animations")||p.touches.length>1||m||v(p))return;m=!0;const{clientX:s,clientY:_}=p.touches[0];g(s,_),n.addEventListener("touchend",i,{once:!0}),window.addEventListener("touchmove",u=>{u.cancelBubble=!0,u.stopPropagation(),i(),n.removeEventListener("touchend",i)},{once:!0})};return n.addEventListener("touchstart",c,{passive:!0}),{dispose:()=>n.removeEventListener("touchstart",c),element:o}}else{const i=c=>{if(![0,2].includes(c.button)||!k.isAvailable("animations")||n.dataset.ripple==="0"||v(c))return;if(m){m=!1;return}const{clientX:p,clientY:s}=c;g(p,s),window.addEventListener("mouseup",l,{once:!0,passive:!0}),window.addEventListener("contextmenu",l,{once:!0,passive:!0})};return n.addEventListener("mousedown",i,{passive:!0}),{dispose:()=>n.removeEventListener("mousedown",i),element:o}}}const B={check:"e900",checks:"e901",activesessions:"e902",add:"e903",add_reaction:"e904",addboost:"e905",addmember_filled:"e906",adduser:"e907",admin:"e908",ads:"e909",animals:"e90a",animations:"e90b",archive:"e90c",arrow_down:"e90d",arrow_next:"e90e",arrow_prev:"e90f",arrowcircle:"e910",arrowhead:"e911",attach:"e912",audio_repeat:"e913",audio_repeat_single:"e914",author_hidden:"e915",avatarnext:"e916",avatarprevious:"e917",binfilled:"e918",bold:"e919",bomb:"e91a",boost:"e91b",boostcircle:"e91c",botcom:"e91d",bots:"e91e",bubblereply:"e91f",bug:"e920",calendar:"e921",calendarfilter:"e922",camera:"e923",cameraadd:"e924",captiondown:"e925",captionup:"e926",car:"e927",card:"e928",card_outline:"e929",channel:"e92a",channelviews:"e92b",chatspinned:"e92c",chatsplaceholder:"e92d",check1:"e92e",checkbox:"e92f",checkboxblock:"e930",checkboxempty:"e931",checkboxon:"e932",checkretract:"e933",checkround:"e934",checkround_filled:"e935",clock:"e936",close:"e937",clouddownload:"e938",collapse:"e939",colorize:"e93a",comments:"e93b",commentssticker:"e93c",copy:"e93d",crossgif:"e93e",crossround:"e93f",crossstar:"e940",darkmode:"e941",data:"e942",delete:"e943",delete_filled:"e944",deletedaccount:"e945",deleteleft:"e946",deleteuser:"e947",devices:"e948",document:"e949",down:"e94a",download:"e94b",dragfiles:"e94c",dragmedia:"e94d",eats:"e94e",edit:"e94f",email:"e950",endcall_filled:"e951",enter:"e952",expand:"e953",eye:"e954",eye1:"e955",eye2:"e956",eyecross_outline:"e957",factcheck:"e958",fast_forward:"e959",fast_rewind:"e95a",favourites:"e95b",flag:"e95c",flip:"e95d",folder:"e95e",fontsize:"e95f",forward:"e960",forward_filled:"e961",fullscreen:"e962",gc_microphone:"e963",gc_microphoneoff:"e964",gifs:"e965",gift:"e966",gift_premium:"e967",group:"e968",group_filled:"e969",groupmedia:"e96a",groupmediaoff:"e96b",hand:"e96c",help:"e96d",hide:"e96e",image:"e96f",info:"e970",info2:"e971",italic:"e972",keyboard:"e973",lamp:"e974",language:"e975",largepause:"e976",largeplay:"e977",left:"e978",limit_chat:"e979",limit_chats:"e97a",limit_file:"e97b",limit_folders:"e97c",limit_link:"e97d",limit_pin:"e97e",link:"e97f",list:"e980",listscreenshare:"e981",livelocation:"e982",location:"e983",lock:"e984",lockoff:"e985",loginlogodesktop:"e986",loginlogomobile:"e987",logout:"e988",mediaspoiler:"e989",mediaspoileroff:"e98a",mention:"e98b",menu:"e98c",message:"e98d",message_jump:"e98e",message_quote:"e98f",messageunread:"e990",microphone:"e991",microphone_crossed:"e992",microphone_crossed_filled:"e993",microphone_filled:"e994",minus:"e995",monospace:"e996",more:"e997",multistories:"e998",mute:"e999",muted:"e99a",mynotes:"e99b",newchannel:"e99c",newchannel_filled:"e99d",newchat_filled:"e99e",newgroup:"e99f",newgroup_filled:"e9a0",newprivate:"e9a1",newprivate_filled:"e9a2",newtab:"e9a3",next:"e9a4",nochannel:"e9a5",noncontacts:"e9a6",nosound:"e9a7",online:"e9a8",passwordoff:"e9a9",pause:"e9aa",permissions:"e9ab",phone:"e9ac",phone_filled:"e9ad",pin:"e9ae",pinlist:"e9af",pinned_filled:"e9b0",pinnedchat:"e9b1",pip:"e9b2",play:"e9b3",playback_05:"e9b4",playback_15:"e9b5",playback_1x:"e9b6",playback_2x:"e9b7",plus:"e9b8",plusround:"e9b9",poll:"e9ba",premium_addone:"e9bb",premium_avatars:"e9bc",premium_badge:"e9bd",premium_colors:"e9be",premium_double:"e9bf",premium_emoji:"e9c0",premium_filesize:"e9c1",premium_lastseen:"e9c2",premium_limits:"e9c3",premium_lock:"e9c4",premium_management:"e9c5",premium_noads:"e9c6",premium_privacy:"e9c7",premium_reactions:"e9c8",premium_restrict:"e9c9",premium_speed:"e9ca",premium_status:"e9cb",premium_stickers:"e9cc",premium_tags:"e9cd",premium_transcription:"e9ce",premium_translate:"e9cf",premium_unlock:"e9d0",premium_wallpaper:"e9d1",previous:"e9d2",promote:"e9d3",quote:"e9d4",quote_outline:"e9d5",radiooff:"e9d6",radioon:"e9d7",reactions:"e9d8",reactions_filled:"e9d9",readchats:"e9da",recent:"e9db",replace:"e9dc",reply:"e9dd",reply_filled:"e9de",restrict:"e9df",revenue:"e9e0",rightpanel:"e9e1",rotate_left:"e9e2",rotate_right:"e9e3",saved:"e9e4",savedmessages:"e9e5",schedule:"e9e6",scheduled:"e9e7",search:"e9e8",select:"e9e9",send:"e9ea",send2:"e9eb",sending:"e9ec",sendingerror:"e9ed",settings:"e9ee",settings_filled:"e9ef",sharescreen_filled:"e9f0",shipping:"e9f1",shuffle:"e9f2",smallscreen:"e9f3",smile:"e9f4",speaker:"e9f5",speakerfilled:"e9f6",speakeroff:"e9f7",speakerofffilled:"e9f8",spoiler:"e9f9",sport:"e9fa",star:"e9fb",star_filled:"e9fc",statistics:"e9fd",stickers:"e9fe",stickers_face:"e9ff",stop:"ea00",stories:"ea01",storyreply:"ea02",storyrepost:"ea03",strikethrough:"ea04",tag:"ea05",tag_add:"ea06",tag_crossed:"ea07",tag_filter:"ea08",tag_name:"ea09",textedit:"ea0a",timer:"ea0b",tip:"ea0c",tools:"ea0d",topics:"ea0e",transcribe:"ea0f",unarchive:"ea10",unclaimed:"ea11",underline:"ea12",unmute:"ea13",unpin:"ea14",unread:"ea15",up:"ea16",user:"ea17",username:"ea18",videocamera:"ea19",videocamera_crossed_filled:"ea1a",videocamera_filled:"ea1b",videochat:"ea1c",volume_down:"ea1d",volume_mute:"ea1e",volume_off:"ea1f",volume_up:"ea20",webview:"ea21",zoomin:"ea22",zoomout:"ea23"},T=new Set(["avatarnext","avatarprevious","arrow_next","channel","chatspinned","fast_forward","fast_rewind","forward","forward_filled","group","group_filled","left","listscreenshare","logout","muted","newchannel_filled","newchannel","newgroup","newgroup_filled","next","nosound","previous","send","send2","reply","reply_filled","sharescreen_filled","transcribe","storyreply","premium_noads","topics","pinlist","deleteleft"]);function N(a){return String.fromCharCode(parseInt(B[a],16))}function j(a,...e){const t=document.createElement("span");return M.isRTL&&T.has(a)&&e.push("icon-reflect"),t.classList.add(D,...e),t.textContent=N(a),t}function H(a,e={}){const t=document.createElement(e.asLink?"a":e.asDiv?"div":"button");return t.className=a,e.noRipple||(e.rippleSquare&&t.classList.add("rp-square"),z(t)),e.icon&&F(t,e.icon,!1),e.onlyMobile&&t.classList.add("only-handhelds"),e.disabled&&t.setAttribute("disabled","true"),e.text&&t.append(A(e.text,e.textArgs)),t}function F(a,e,t=a.querySelector(".button-icon")){const r=j(e,"button-icon");return t?t.replaceWith(r):a.append(r),r}export{H as B,j as I,F as a,N as g,z as r,L as s};
//# sourceMappingURL=button-BlFZJOyh.js.map