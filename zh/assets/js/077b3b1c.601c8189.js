"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[5644],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),c=n,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(k,l(l({ref:t},d),{},{components:r})):a.createElement(k,l({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(8028),n=(r(9496),r(9613));const o={title:"WebHook",Description:"You can trigger workflows in ILLA Flow by making an HTTP request to its WebHook and retrieve the returned data."},l=void 0,i={unversionedId:"illa-flow-webhook",id:"illa-flow-webhook",title:"WebHook",description:"What is WebHook",source:"@site/docs/illa-flow-webhook.mdx",sourceDirName:".",slug:"/illa-flow-webhook",permalink:"/zh/illa-flow-webhook",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/illa-flow-webhook.mdx",tags:[],version:"current",frontMatter:{title:"WebHook",Description:"You can trigger workflows in ILLA Flow by making an HTTP request to its WebHook and retrieve the returned data."}},p={},s=[{value:"What is WebHook",id:"what-is-webhook",level:2},{value:"How to use it",id:"how-to-use-it",level:2},{value:"Body params",id:"body-params",level:3},{value:"How to request",id:"how-to-request",level:3},{value:"How to get the response",id:"how-to-get-the-response",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-webhook"},"What is WebHook"),(0,n.kt)("p",null,"WebHook is an event notification mechanism implemented through HTTP requests. ILLA Flow allows users to trigger workflows in ILLA Flow by making an HTTP request to its WebHook and retrieve the returned data."),(0,n.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,n.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,n.kt)("iframe",{src:"https://demo.arcade.software/faXVMk2ISSEK5mtG4o5K?embed&show_copy_link=true",frameborder:"1",loading:"lazy",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,n.kt)("h3",{id:"body-params"},"Body params"),(0,n.kt)("p",null,"Used to set the parameters required in the request body when making a request to this WebHook."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Property name")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Key"),(0,n.kt)("td",{parentName:"tr",align:null},"The parameter names.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to set the data type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Required"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to set whether this parameter is required.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Test value"),(0,n.kt)("td",{parentName:"tr",align:null},"Used to enter test values. If your parameter type is String, you can directly enter the String. If your parameter type is another type, you need to enclose the test value in",(0,n.kt)("inlineCode",{parentName:"td"},"{{}}"),". For example, for a numerical parameter, you need to enter",(0,n.kt)("inlineCode",{parentName:"td"},"{{5}}"),", and for an array parameter, you need to enter",(0,n.kt)("inlineCode",{parentName:"td"},"{{[1,2,3,4]}}"),".")))),(0,n.kt)("h3",{id:"how-to-request"},"How to request"),(0,n.kt)("p",null,"Copy cURL to get the content required when making a request to this WebHook."),(0,n.kt)("p",null,"Here is an example,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'curl -X POST \nhttps://cloud-api.illacloud.com/flow/api/v1/webhook/workflows/ILAex4p1C7Wm/run?webhookToken=xxxxxx\n-H "Content-Type: application/json" \n-d \'{"param":{"a":1,"b":2},"param1":[1,2,3]}\'\n')),(0,n.kt)("p",null,"cURL includes the following content:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Field")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"How to use in the REST API Action of ILLA")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Request method"),(0,n.kt)("td",{parentName:"tr",align:null},"POST"),(0,n.kt)("td",{parentName:"tr",align:null},"Action type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URL"),(0,n.kt)("td",{parentName:"tr",align:null},"The part before the question mark is the requested URL. For example,",(0,n.kt)("inlineCode",{parentName:"td"},"https://cloud-api.illacloud.com/flow/api/v1/webhook/workflows/ILAex4p1C7Wm/run")),(0,n.kt)("td",{parentName:"tr",align:null},"Base URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Query parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"The part after the question mark is the requested URL. For example,",(0,n.kt)("inlineCode",{parentName:"td"},"webhookToken=xxxxxx")),(0,n.kt)("td",{parentName:"tr",align:null},"URL Parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Header"),(0,n.kt)("td",{parentName:"tr",align:null},"Content-Type: application/json"),(0,n.kt)("td",{parentName:"tr",align:null},"Headers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Request body"),(0,n.kt)("td",{parentName:"tr",align:null},"If you have set a request body in the WebHook, the cURL command will include an example of the request body."),(0,n.kt)("td",{parentName:"tr",align:null},"Body, it could be",(0,n.kt)("inlineCode",{parentName:"td"},"x-www-form-urlencoded"),"or",(0,n.kt)("inlineCode",{parentName:"td"},"Raw - JSON"))))),(0,n.kt)("h2",{id:"how-to-get-the-response"},"How to get the response"),(0,n.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,n.kt)("iframe",{src:"https://demo.arcade.software/jLmr2LN2T0cYwvYaeB3C?embed&show_copy_link=true",frameborder:"1",loading:"lazy",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,n.kt)("p",null,"Learn more about response: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.illacloud.com/illa-flow-response"},"https://docs.illacloud.com/illa-flow-response")))}m.isMDXComponent=!0}}]);