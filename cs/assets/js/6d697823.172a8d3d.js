"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[308],{9613:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var r=o(9496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return o?r.createElement(y,i(i({ref:t},u),{},{components:o})):r.createElement(y,i({ref:t},u))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5777:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(8028),n=(o(9496),o(9613));const a={title:"About ILLA",metaTitle:"About ILLA Doc | ILLA Cloud",tagCategory:"doc_menu_about_illa_click",desc:"ILLA is an open-source low-code platform for developers to build and deploy internal tools remarkably fast.",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/151?languages=en&filter=basic&value=0",categoryName:"\ud83d\udc4b Introduction",categoryPriority:1,postPriority:1},i=void 0,l={unversionedId:"test",id:"test",title:"About ILLA",description:"*",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/test.mdx",sourceDirName:".",slug:"/test",permalink:"/cs/test",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test.mdx",tags:[],version:"current",frontMatter:{title:"About ILLA",metaTitle:"About ILLA Doc | ILLA Cloud",tagCategory:"doc_menu_about_illa_click",desc:"ILLA is an open-source low-code platform for developers to build and deploy internal tools remarkably fast.",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/151?languages=en&filter=basic&value=0",categoryName:"\ud83d\udc4b Introduction",categoryPriority:1,postPriority:1},sidebar:"tutorialSidebar",previous:{title:"Airtable",permalink:"/cs/airtable"},next:{title:"About ILLA",permalink:"/cs/test"}},s={},c=[{value:"<h2 hidden>About ILLA</h2>",id:"about-illa",level:2},{value:"What is ILLA?",id:"what-is-illa",level:3},{value:"Get Start",id:"get-start",level:3},{value:"Community",id:"community",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"about-illa"},(0,n.kt)("h2",{hidden:!0},"About ILLA")),(0,n.kt)("p",null,"ILLA enables you to build and deploy internal apps quickly. Connect to your databases and APIs, assemble UIs with drag-and-drop building blocks like tables and forms, and write queries to interact with data using SQL and JavaScript."),(0,n.kt)("h3",{id:"what-is-illa"},"What is ILLA?"),(0,n.kt)("p",null,"ILLA is an open-source low-code platform for developers to build and deploy internal tools remarkably fast."),(0,n.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/introduction/about-illa-cloud.png",alt:""}),(0,n.kt)("p",null,"With ILLA, you can easily connect to various data sources such as databases, API/GraphQL endpoints, SaaS tools, and cloud storage services. These include popular options like PostgreSQL, MongoDB, MySQL, Stripe, Google Sheets, and AWS S3. Once connected, ILLA can run queries to fetch and update data from these sources. The user interface (UI) provides convenient components for visualizing and modifying the data, such as tables, charts, and forms."),(0,n.kt)("p",null,"With ILLA, you can quickly and easily build a user interface (UI) using pre-built widgets that you can drag and drop onto a grid-style canvas. This simplifies the integration of the front-end and back-end of your application and optimizes the building process. Additionally, ILLA supports JavaScript inside widgets, queries, and other components, allowing you to add logic, transform data, and define complex workflows. This makes it easy to customize your application to your specific needs."),(0,n.kt)("h3",{id:"get-start"},"Get Start"),(0,n.kt)("p",null,"To try ILLA, the most convenient way is to sign up and log in to ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.illacloud.com/"},"ILLA Cloud"),".\nTo expedite the review process, we invite you to join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/illacloud"},"Discord Community"),", where you can obtain an invitation code faster."),(0,n.kt)("h3",{id:"community"},"Community"),(0,n.kt)("p",null,"To receive more timely support while using ILLA, consider joining our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/illacloud"},"Discord Community"),". This will allow you to get support directly from the community, which can help you resolve any issues more quickly."))}p.isMDXComponent=!0}}]);