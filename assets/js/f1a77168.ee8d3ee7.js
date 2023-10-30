"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[1532],{9613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>h});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,l(l({ref:e},s),{},{components:n})):a.createElement(h,l({ref:e},s))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(8028),r=(n(9496),n(9613));const o={title:"PDF",description:"Learn how to use the PDF component to upload and customize pdf files for your app in ILLA Cloud."},l="PDF",i={unversionedId:"pdf",id:"pdf",title:"PDF",description:"Learn how to use the PDF component to upload and customize pdf files for your app in ILLA Cloud.",source:"@site/docs/pdf.mdx",sourceDirName:".",slug:"/pdf",permalink:"/pdf",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/docs/pdf.mdx",tags:[],version:"current",frontMatter:{title:"PDF",description:"Learn how to use the PDF component to upload and customize pdf files for your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Page",permalink:"/page"},next:{title:"Radio button",permalink:"/radio-button"}},p={},d=[{value:"What is PDF?",id:"what-is-pdf",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add Components",id:"step-1-add-components",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4},{value:"Step 3 Test",id:"step-3-test",level:4}],s={toc:d},m="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pdf"},"PDF"),(0,r.kt)("h2",{id:"what-is-pdf"},"What is PDF?"),(0,r.kt)("p",null,"The PDF component is a feature or element that allows users to view and interact with PDF documents within the application. It provides functionality for rendering, navigating, and manipulating PDF files, enabling users to access and work with PDF content seamlessly."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PDF source"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the source of the pdf to be displayed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show tool bar"),(0,r.kt)("td",{parentName:"tr",align:null},"controls the visibility of the toolbar within the PDF component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"add a tooltip or a descriptive text that appears when the user hovers over the pdf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scale page to"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the scaling behavior of the PDF pages within the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the visibility of the PDF component")))),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"You can use other components to control the component. We support the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setFileUrl"))),(0,r.kt)("p",null,"dynamically change the source or URL of the pdf file."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PDF Source"),(0,r.kt)("td",{parentName:"tr",align:null},"pdf source url")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"A string value that represents the name or title of the pdf.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"the vertical dimension or size of the PDF component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"A boolean value that determines whether the pdf component is hidden from the user interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scaleMode"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies how the PDF document is scaled or fit within the available display area of the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showToolBar"),(0,r.kt)("td",{parentName:"tr",align:null},"whether a toolbar or control panel is displayed along with the PDF component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,r.kt)("td",{parentName:"tr",align:null},"string value that represents the tooltip or hovers text to display when the user hovers over the pdf component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"source of the PDF file to be displayed in the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"the horizontal dimension or size of the PDF component")))),(0,r.kt)("p",null,"Example: {{pdf1.displayName}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Next, we will demonstrate how to control the pdf display with a button."),(0,r.kt)("h4",{id:"step-1-add-components"},"Step 1 Add Components"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PDF"))," component and a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to the canvas."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/pdf_layout.jpg",alt:"pdf_layout"})),(0,r.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to set the image source of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"PDF"))," component to a pdf address."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"**button**")," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"PDF"))," component that you want to change as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setFileUrl"))," action"),(0,r.kt)("li",{parentName:"ol"},"Put the new image address in the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Value"))," field")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/pdf_config.jpg",alt:"pdf_config"})),(0,r.kt)("h4",{id:"step-3-test"},"Step 3 Test"),(0,r.kt)("p",null,'Now that when you click the "Play" button, the image should switch'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/pdf_test.jpg",alt:"pdf_test"})))}c.isMDXComponent=!0}}]);