"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[109],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(8028),a=(n(9496),n(9613));const o={title:"Response",Description:"Use the Response node to send data back to a WebHook request"},l=void 0,i={unversionedId:"illa-flow-response",id:"illa-flow-response",title:"Response",description:"Introduction",source:"@site/docs/illa-flow-response.mdx",sourceDirName:".",slug:"/illa-flow-response",permalink:"/illa-flow-response",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/docs/illa-flow-response.mdx",tags:[],version:"current",frontMatter:{title:"Response",Description:"Use the Response node to send data back to a WebHook request"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Parameters",id:"parameters",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"When you expect to return data after a certain node has finished executing, you can use the Response node."),(0,a.kt)("p",null,"You can add different responses for different scenarios, which will be returned based on the actual execution result."),(0,a.kt)("p",null,"In the case of the same execution conditions (such as several parallel running links that all succeed), when adding Response nodes separately, we will only return the data from the first Response node that has finished running."),(0,a.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,a.kt)("iframe",{src:"https://demo.arcade.software/jLmr2LN2T0cYwvYaeB3C?embed&show_copy_link=true",frameborder:"1",loading:"lazy",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Property name")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Status code"),(0,a.kt)("td",{parentName:"tr",align:null},"It will be returned as the status of the request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Location"),(0,a.kt)("td",{parentName:"tr",align:null},"In the case of a 307 or 308 status code, you can set the redirect URL in the Location header. When the browser receives this status code, it will automatically redirect to the specified URL.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response body"),(0,a.kt)("td",{parentName:"tr",align:null},"You can configure it to return JSON, Text, or not return any data. JSON, such as",(0,a.kt)("inlineCode",{parentName:"td"},'{"a":1, "b":2}'),"; Text, can be used to return String or numeric values. For string values, it can be a simple text like",(0,a.kt)("inlineCode",{parentName:"td"},"Hello world"),". For numeric values, they need to be enclosed in double curly braces, like",(0,a.kt)("inlineCode",{parentName:"td"},"{{5}}"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response headers"),(0,a.kt)("td",{parentName:"tr",align:null},"Used to set parameters in response headers.")))))}d.isMDXComponent=!0}}]);