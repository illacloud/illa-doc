"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[9855],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(8028),a=(r(9496),r(9613));const o={title:"Transformer",description:"Transformer in ILLA allows user to write JavaScript to refine the application logic"},i="Transformer",l={unversionedId:"transformer",id:"transformer",title:"Transformer",description:"Transformer in ILLA allows user to write JavaScript to refine the application logic",source:"@site/docs/transformer.mdx",sourceDirName:".",slug:"/transformer",permalink:"/transformer",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/docs/transformer.mdx",tags:[],version:"current",frontMatter:{title:"Transformer",description:"Transformer in ILLA allows user to write JavaScript to refine the application logic"},sidebar:"tutorialSidebar",previous:{title:"TiDB",permalink:"/tidb"},next:{title:"Upstash",permalink:"/upstash"}},s={},c=[{value:"Creative Transformers",id:"creative-transformers",level:3},{value:"Query Transformer",id:"query-transformer",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transformer"},"Transformer"),(0,a.kt)("p",null,"We have put a Transformer in ILLA to meet your requirements for writing JavaScript to refine your application logic. In the Transformer, you don't need to code in JavaScript using {{template syntax}} as you do in the character input box, so that you can write long and complex blocks of JS code more fluently. In addition, the Transformer helps developers responsible for page design and logic building to complete their development work more efficiently without being constrained by each other's progress."),(0,a.kt)("p",null,"You can use the Transformer not only for established data operations but also for creating transformer operations when transforming data. It would be better to choose an independent transformer when you have multiple operations involved in transforming data, or need to use complex JavaScript logic to transform data."),(0,a.kt)("h3",{id:"creative-transformers"},"Creative Transformers"),(0,a.kt)("p",null,'Click on the Transformers tab in the Action list, and click on "+ New" to create a transformer. It will be displayed in the action list after creation. You can change the name, write JS code, save and run it in the configuration panel after selection.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can use the 'preview' button to see the results of a transformer. Note that you have to save the transformer for the rest of the app to get the new value.")),(0,a.kt)("p",null,"The insert calls the transformer with a value equal to the data returned within the transformer, this data will change as the data entered into the transformer changes with the code of the transformer. As with the character input box, you can still use the template syntax to call the global variable No. When you are writing JS code to call data, you can find the specific data variable name in the data workspace in the left hand panel to help you write code faster."),(0,a.kt)("p",null,"You can call the transformer variable in the data entry box by using ",(0,a.kt)("inlineCode",{parentName:"p"},"{{transformerName. tagName}}")," to call the transformer variable in the data entry box."),(0,a.kt)("h3",{id:"query-transformer"},"Query Transformer"),(0,a.kt)("p",null,"We have put a Transformer in the query operation to allow you to transform the fetched data into the desired format directly after completing the action You can then simply pass {{actionName.data}} to retrieve the data once you have completed the conversion in the transformer within the action."))}f.isMDXComponent=!0}}]);