(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(6505)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(6495).Z,n=i(2648).Z,a=i(1598).Z,l=i(7273).Z,o=a(i(7294)),s=n(i(3121)),c=i(2675),d=i(139),u=i(8730);i(7238);var f=n(i(9824));let A={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,n,a,l,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&l(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let m=o.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:n,widthInt:a,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:A,placeholder:h,loading:g,srcString:m,config:v,unoptimized:b,loader:w,onLoadRef:j,onLoadingCompleteRef:C,setBlurComplete:y,setShowAltText:x,onLoad:N,onError:B}=e,E=l(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},E,i,{width:a,height:n,decoding:"async","data-nimg":A?"fill":"1",className:c,loading:g,style:r({},d,u),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(B&&(e.src=e.src),e.complete&&p(e,m,h,j,C,y,b))},[m,h,j,C,y,B,b,t]),onLoad:e=>{let t=e.currentTarget;p(t,m,h,j,C,y,b)},onError:e=>{x(!0),"blur"===h&&y(!0),B&&B(e)}})))}),v=o.forwardRef((e,t)=>{let i,n;var a,{src:p,sizes:v,unoptimized:b=!1,priority:w=!1,loading:j,className:C,quality:y,width:x,height:N,fill:B,style:E,onLoad:U,onLoadingComplete:I,placeholder:P="empty",blurDataURL:z,layout:O,objectFit:G,objectPosition:L,lazyBoundary:T,lazyRoot:R}=e,V=l(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let S=o.useContext(u.ImageConfigContext),K=o.useMemo(()=>{let e=A||S||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:i})},[S]),D=V,F=D.loader||f.default;delete D.loader;let Y="__next_img_default"in F;if(Y){if("custom"===K.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:i}=t,r=l(t,["config"]);return e(r)}}if(O){"fill"===O&&(B=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(E=r({},E,e));let t={responsive:"100vw",fill:"100vw"}[O];t&&!v&&(v=t)}let X="",k=g(x),J=g(N);if("object"==typeof(a=p)&&(h(a)||void 0!==a.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,n=e.blurHeight,z=z||e.blurDataURL,X=e.src,!B){if(k||J){if(k&&!J){let t=k/e.width;J=Math.round(e.height*t)}else if(!k&&J){let t=J/e.height;k=Math.round(e.width*t)}}else k=e.width,J=e.height}}let W=!w&&("lazy"===j||void 0===j);((p="string"==typeof p?p:X).startsWith("data:")||p.startsWith("blob:"))&&(b=!0,W=!1),K.unoptimized&&(b=!0),Y&&p.endsWith(".svg")&&!K.dangerouslyAllowSVG&&(b=!0);let[Q,Z]=o.useState(!1),[q,M]=o.useState(!1),H=g(y),_=Object.assign(B?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:G,objectPosition:L}:{},q?{}:{color:"transparent"},E),$="blur"===P&&z&&!Q?{backgroundSize:_.objectFit||"cover",backgroundPosition:_.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:k,heightInt:J,blurWidth:i,blurHeight:n,blurDataURL:z}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:r,width:n,quality:a,sizes:l,loader:o}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:a,kind:"x"}}(t,n,l),d=s.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:s.map((e,r)=>"".concat(o({config:t,src:i,quality:a,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:o({config:t,src:i,quality:a,width:s[d]})}}({config:K,src:p,unoptimized:b,width:k,quality:H,sizes:v,loader:F}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:D.crossOrigin},er=o.useRef(U);o.useEffect(()=>{er.current=U},[U]);let en=o.useRef(I);o.useEffect(()=>{en.current=I},[I]);let ea=r({isLazy:W,imgAttributes:ee,heightInt:J,widthInt:k,qualityInt:H,className:C,imgStyle:_,blurStyle:$,loading:j,config:K,fill:B,unoptimized:b,placeholder:P,loader:F,srcString:et,onLoadRef:er,onLoadingCompleteRef:en,setBlurComplete:Z,setShowAltText:M},D);return o.default.createElement(o.default.Fragment,null,o.default.createElement(m,Object.assign({},ea,{ref:t})),w?o.default.createElement(s.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:a}=e,l=r||t,o=n||i,s=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},3617:function(e,t,i){"use strict";i.d(t,{CL:function(){return s},h4:function(){return o},eL:function(){return d}});var r=i(5893),n=i(5675),a=i.n(n);let l=e=>{let{children:t,href:i}=e;return(0,r.jsx)("a",{href:i,children:(0,r.jsx)("div",{className:"iconWrapper",children:t})})},o=()=>(0,r.jsxs)("div",{className:"headerLayout",children:[(0,r.jsx)("div",{className:"imageWrapper",children:(0,r.jsx)(a(),{src:"https://media.licdn.com/dms/image/C5603AQE7QxE9uJ7ZbA/profile-displayphoto-shrink_800_800/0/1516991327140?e=1680134400&v=beta&t=yCq0hQx00r8Uwwv2Krt6mAncK2Z6xUuGBvSScDPnP-c",alt:"Ridvan Demirci",width:200,height:200})}),(0,r.jsxs)("div",{className:"headerDetail",children:[(0,r.jsx)("h1",{children:"RIDVAN DEMİRCİ"}),(0,r.jsxs)("div",{className:"iconsContainer",children:[(0,r.jsx)(l,{href:"https://www.instagram.com/demirci.r/",children:(0,r.jsx)(a(),{width:20,height:20,alt:"Instagram",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAEwklEQVR42s1Zf2hVVRx/m7acZSsyGWoag6UILfpBv0hTlmQ/lAhiA1ejQbPAIEorkLl+gmyGrAWttNbm7ud7O0GsJ4Ui+gjXD3OYW1tJtXSGhTXTWUGU88Xuu/d7z3nv3nfv9Z336H7/uud8z/l+zjnf8/11YrH/8ycWoJ7asJP24zCNRKZ+JLCN1hm3JqZGFt09izbQICU10e/UYdwQft1l9BL+0CbcpY96rgkh3riLjudBeIr+wYtZj6O5GC04lz4MJ2mQ9mF3IPVRv0Lf0Z8eIPYYM/22voTeUwSfpTjqxbyc1LgMK+h1nFTmHRbl3qsniekcuo1KXbep+yJaT+PS7N90XprBhJclhlFzmfYrPQd7pX2IJ4uUbroNZ7nzs+5Z+bAqian0lrTIp9Xt/5o7vtx+Sb4MW7II7zCEcWmZVMPNY2JOPm3rxxfSF7zUdvf8+xjAQzrFGTPRSnHaGJ8utVXiX2cPRKnVtH0uTdhNQ83F+sT3zsARR6vEFEnfOpzlmrWp9Td4KkbOH56UVG6V1F7FrZ2phnZmvForgHYfnY9h1G4fSG3JHpvpdNrdDL7ZN2MV1ZhLjIVvXpDZT40uAPNOBYBwfIPlGXDI/h0MrVw30WZ8r5jXMxCo65yWpvEH7P4P0qC1OeOMyyYB/GhP0hdq3YsYfyb9RI2yunVOo8epDXXpqk0bnRGWp8ExG0Ai2JDQBr4xfrQv2I5SE3NfFQGAKM2y9qTiSa7NA4BkEb2viDkNk9Ya99PdqEcLfauAOGFNrBcAXlFClHW2FXMV8w58LkEYEBdrBYDrpLP/qme+zx49L8VTm/UC+MT1lrJlz5h6PfP97X8MkQFQtXu6nuGUDNVg3q36ALD7wGPBGQXOOJriFwFHBNBcjF9sjl/D5Dj0Gk+/VAsAYyGvf1sYW0lLmf8FLQBwL7M3hjLWpcwPLQDM1cx+X0hHbOcB2KkHQC37rpXhANCYPeMOPUewggGsCXcEbI469ChhBbO/G00JqUmTHeDgckyURLmGahyUiyHiCAZPBCrgbM6JT3kFaucFwLidB/yG2QEA3BT3bZ3OaBcPOZDVGT3nOiOjQieAqmB3LKZgk+uO0ao7IGlWAxI1Ao7FsJz6pYBksHdGgUIy4x7zEdqiBul0wnuPChSU0tG8BKX2LjQFheXY61uEyh1AUGKCUTUxyQsAyz3dglfTTv0UiGrC2EkPAHQ0KgB7L+ZhufmgWUuLjcpo1WD3RlmpGScVBwtVBKctDKBs8ne//ftzoQCwuZ6w0lZ0Ob/iigIBOGwf+g9ppRTUF0J8z3zHYEOkdPp6BrC7IBrg3oG1TpP7NFGd91eYMidipAl27fQUAxjKltVqWf9WlvWhbOWP8TGIaKWqiOrXINXjb5Q76iSr9obOcqViQR92S+J2jdAzq01ih1W90lwlRqvsMS0TJH/x6Vyum6TjZq3OfaBqGpI9h+fzlSjHsPq0Qs+KRbmK7rocDUrxJknj5hL/3P7TDBd7BLvQhRZsikrUBhPDXBvnWiKqst3SErRnvpvpI/SGMPe0mAbyIn7EXB36aYUeQCKwJhqFDhpr/PKkbAHHo+jBIfx13mInaAQCz4gFOb/7iXKjIhrRldkyA/f7D4B3Tt/SItWeAAAAAElFTkSuQmCC"})}),(0,r.jsx)(l,{href:"https://github.com/ridvandmrc",children:(0,r.jsx)(a(),{width:20,height:20,alt:"Instagram",src:"data:image/png;base64,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"})}),(0,r.jsx)(l,{href:"https://www.linkedin.com/in/r%C4%B1dvan-demirci-324a37108/",children:(0,r.jsx)(a(),{width:20,height:20,alt:"Instagram",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFUlEQVR4nO2bXUhcRxTHQ1Pa0OaltG8JhbaEtA99yFsLBUlaqKE+qKvxG+NXRFG0NCiKuioqASWCIKL4ICoapSCISlutjV8Ii4rfSimEPKQfIf1IAknbpJ38z2XHnKx79+5dr51bMgf+rHt378w5v5k7c2ZmPXJE21NLTEw8HhcXV+rxeL6FfoYeQb/Ex8d/h9fP6XPVPh6aIchPodsIVIQQQflYta+OG4I672/tvWBzcnJEcXGx8cqvA9Lf0CeqfXbMYmNjX0dgv8sAa2pqxPz8vNjd3d3T7OysqKys5CB+TE9Pf1W1744YgqmWgdXV1YmdnZ1ngpei6xUVFbwnFKn23RFDMD4KKCEhQfh8vqDB857AAHyt2ndHDIH8RgHl5+eHDF4qMzNTQrih2ndHDADuU0CFhYVhAcjNzZU94CfVvjtiCGSXAkpKShIbGxshg19ZWRHIBWQP8Kn23REDgHb5XHd2doYE0NraymeCJtW+O2IA8K7MAah1e3p69s0Em5uboqOjwxgo/d3/Ib77pmrfHTNqTZ7s0HPe2NhotDhNjWzgM0TpsmqfHTWv1/sCAmu1SIOp5R9DFar9PTRDcGdpfof+Cgj8PjSMv8+o9vE/MVr1Qe9DHyFVfg+vL6n2SdthGnV9jPC5NpRoVhYtklDepUgUHR39slm56IVH8Z23aSVK9UNZGIwTqJfi2qmoqKgXIwaAZ/ua1QAYoB/MyoJTJ22WtSc8bu/wslJSUt5AeYX47CvonsUATRntOF4v2l6pugUAtaYMHIFckWm6XeG+XyFvTEzMK7YBUDbY398fVMnJybYA0IZKX19fSNXW1nLnL8BxD3Q3MKisrCxjT4Jyk66uLtHb2yu6u7uN97SHgVYPBuIm/DlnC8Di4qJpKpyRkWELADlmtbgaGhriDm/i9V/5Hj3BCHB6etqynO3tbTE+Pi6qq6v3MlZ/mf9AZa4FMDExEbQbNzQ0iOXl5bBWqIGanJwUpaWlgb3hiisBzM3NBY4DxqMRSeBcW1tbRjrPyzZN4VUCWFtbe8ZJer4PGjwXLeJY+Y8A+ENXASDRs07fp0HObE/yIGpubuYQvt+X2aoGcNii5XxRURGHcPm5AkCigZHtZ9zGEv/YcwWAVFVVxWeFi64FsLS0JAYGBkRLS4vwer2G4+Xl5cbmDOUFY2Njxrxvt9yAKfcb1wFYXV0VTU1NfOPVVJQZDg4O2ho06bvyqI+O+FJTU19zDQCqNy8vz3beT6dV6+vrYdfDZwT4+pkrAFAuUFBQwAO7gxaqp8URlUctRcL7t3A9Fp+PeFjKXFJSYrmlLzU8PMzraXAFgLa2Nu7UBgI9YVY+q+ccP86vr68Pq66FhQVe15fKAdCAR4cy/ufyQeCeQCgDqNO09JX1jYyMWNZHgycbY5aVA6BzCDY1NYcbPKsvTt5PyU44g2J2dras85ZyAHw/APd+YBcAGcDNyjKmpqYs65TjDe77QzkAlqL+Gem+HiU1ss729nbLOmmjRk6FygGwnRzTMq2M10lJk1WdNGv4ATxWCoAGJPb8z0UKgE62qDXllPi/AUCrNAbgeqQAyORsEM4PPTQADUAD0AA0AA1AA9AANAANQAPQADQADUAD0AA0AA1AA3gKYHR0VMzMzARVWlqaLQBlZWXGT9zMRD9acBoAHXqEqpPEzgX2AwhTjv9S1CkANuvUAOTNl3Ch24ZM/2GKjrHxeaddwYcvDgjgagR1djwBv5aIUwL+mikAAAAASUVORK5CYII="})})]})]})]}),s=()=>(0,r.jsxs)("div",{className:"aboutWrapper",children:[(0,r.jsxs)("h4",{className:"aboutMe",children:["About ",(0,r.jsx)("span",{style:{color:"#2e8b57"},children:"Me!"})]}),(0,r.jsx)("p",{children:"Hello, I was born in Kocaeli on 08/03/1995 and I am sitting there. I had some opportunities to develop myself in research and self-learning about the issues that I did not know. I also had opportunities to work and adapt in a team with the projects given."}),(0,r.jsx)("a",{href:"https://drive.google.com/file/d/1WkS-RZej3S8aKJpi9WIPXLJJx1yjT5nf/view?usp=sharing",children:"Download Resume"})]}),c=e=>{let{title:t,value:i}=e;return(0,r.jsxs)("div",{className:"indicatorWrapper",children:[(0,r.jsxs)("span",{className:"indicatorKey",children:[t,":"]}),(0,r.jsx)("span",{className:"indicatorValue",children:i})]})},d=()=>(0,r.jsxs)("div",{className:"infoIndicator",children:[(0,r.jsx)(c,{title:"Age",value:27}),(0,r.jsx)(c,{title:"Bachelor",value:"Gebze Teknical University"}),(0,r.jsx)(c,{title:"Address",value:"Kocaeli, Gebze"}),(0,r.jsx)(c,{title:"E-mail",value:(0,r.jsx)("a",{style:{color:"#2e8b57",textDecoration:"none",fontWeight:700},href:"mailto:rdvndmrc@gmail.com",children:"rdvndmrc@gmail.com"})}),(0,r.jsx)(c,{title:"Hobbies",value:"Football, Music, film and video Game"}),(0,r.jsx)(c,{title:"Note",value:"If you need help something that I interested before, feel free to reach me !"})]})},7117:function(e,t,i){"use strict";i.d(t,{D:function(){return l},Z:function(){return n}});var r=i(5893);let n=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"mainLayout",children:(0,r.jsx)("div",{className:"mainContent",children:t})})};var a=i(3617);let l=()=>(0,r.jsxs)("div",{className:"contentWrapper",children:[(0,r.jsx)(a.CL,{}),(0,r.jsx)("div",{className:"divider",children:" "}),(0,r.jsx)(a.eL,{})]})},6505:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var r=i(5893),n=i(7117);function a(e){let{Component:t,pageProps:i}=e,a=t.pageLayout||(e=>e);return a((0,r.jsx)(n.Z,{children:(0,r.jsx)(t,{...i})}))}i(7599),i(4595),i(9194),i(5452),i(8613),i(1263)},4595:function(){},8613:function(){},7599:function(){},9194:function(){},5452:function(){},1263:function(){},5675:function(e,t,i){e.exports=i(9749)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);