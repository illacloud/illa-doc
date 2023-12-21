"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[1813],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(8028),o=(n(9496),n(9613));const i={title:"ILLA Cloud V 3.3 Changelog",description:"ILLA Cloud V 3.3 Changelog"},a="V 3.3",l={unversionedId:"3-3",id:"3-3",title:"ILLA Cloud V 3.3 Changelog",description:"ILLA Cloud V 3.3 Changelog",source:"@site/docs/3-3.mdx",sourceDirName:".",slug:"/3-3",permalink:"/zh/3-3",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/3-3.mdx",tags:[],version:"current",frontMatter:{title:"ILLA Cloud V 3.3 Changelog",description:"ILLA Cloud V 3.3 Changelog"}},u={},p=[{value:"\ud83d\ude80 New features",id:"-new-features",level:2},{value:"\ud83d\udc1b Bug fix",id:"-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"-polish",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"v-33"},"V 3.3"),(0,o.kt)("p",null,"2023.10.26"),(0,o.kt)("h2",{id:"-new-features"},"\ud83d\ude80 New features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data grid component",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Supports displaying 100,000 records."),(0,o.kt)("li",{parentName:"ul"},"Supports server-side pagination."),(0,o.kt)("li",{parentName:"ul"},"Supports multiple data types, such as images, tags, buttons, etc."),(0,o.kt)("li",{parentName:"ul"},"Supports column-based filtering or global quick filtering."),(0,o.kt)("li",{parentName:"ul"},"Supports data grouping based on specified columns."),(0,o.kt)("li",{parentName:"ul"},"Supports freezing specified columns to the left or rightmost side."),(0,o.kt)("li",{parentName:"ul"},"Supports drag-and-drop column width adjustment while browsing."))),(0,o.kt)("li",{parentName:"ul"},"Oracle 9i",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Building upon our existing support for Oracle versions 9i above, we have now added support for Oracle databases running versions 9i and below. If you are using one of these versions, rest assured that you can confidently use ILLA Cloud.")))),(0,o.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug fix"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed the issue in the Onboarding app where running an Action would result in an error."),(0,o.kt)("li",{parentName:"ul"},'Fixed the issue in the Event Handler where Boolean value handling was incorrect when the "Only run when" field was left empty.')),(0,o.kt)("h2",{id:"-polish"},"\ud83d\udc85 Polish"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved component copy-paste functionality",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Support copying components to different pages or different Container views."))),(0,o.kt)("li",{parentName:"ul"},"Added WebSocket proxy functionality and optimized the issue of disconnection during collaborative editing in Builder for certain regions.")))}d.isMDXComponent=!0}}]);