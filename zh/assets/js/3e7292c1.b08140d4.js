"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2727],{9613:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=m(a),c=r,h=u["".concat(d,".").concat(c)]||u[c]||s[c]||i;return a?n.createElement(h,l(l({ref:e},p),{},{components:a})):n.createElement(h,l({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2186:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(8028),r=(a(9496),a(9613));const i={title:"Grid list",description:"Display your items as a grid rather than a normal list of items that come one after the next"},l="Data Grid",o={unversionedId:"grid-list",id:"grid-list",title:"Grid list",description:"Display your items as a grid rather than a normal list of items that come one after the next",source:"@site/docs/grid-list.mdx",sourceDirName:".",slug:"/grid-list",permalink:"/zh/grid-list",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/grid-list.mdx",tags:[],version:"current",frontMatter:{title:"Grid list",description:"Display your items as a grid rather than a normal list of items that come one after the next"},sidebar:"tutorialSidebar",previous:{title:"List",permalink:"/zh/list"},next:{title:"Menu",permalink:"/zh/menu"}},d={},m=[{value:"What is Data Grid",id:"what-is-data-grid",level:2},{value:"How-to",id:"how-to",level:2},{value:"Configure the appearance of the Grid list",id:"configure-the-appearance-of-the-grid-list",level:3},{value:"Connect to data source",id:"connect-to-data-source",level:3},{value:"Data",id:"data",level:2},{value:"Configurable properties",id:"configurable-properties",level:2},{value:"Data",id:"data-1",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Pagination",id:"pagination",level:3},{value:"Layout",id:"layout",level:3},{value:"Dynamic number of columns",id:"dynamic-number-of-columns",level:5},{value:"Fixed number of columns",id:"fixed-number-of-columns",level:5},{value:"Event handler",id:"event-handler",level:2}],p={toc:m},u="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-grid"},"Data Grid"),(0,r.kt)("h2",{id:"what-is-data-grid"},"What is Data Grid"),(0,r.kt)("p",null,"In some cases, you might want to display your items as a grid rather than a normal list of items that come one after the next. For this task, use the Grid List component."),(0,r.kt)("p",null,"The editing method of the Grid List component is the same as that of the container. You can drag and drop components into the Grid List to customize the display format of the items."),(0,r.kt)("h2",{id:"how-to"},"How-to"),(0,r.kt)("h3",{id:"configure-the-appearance-of-the-grid-list"},"Configure the appearance of the Grid list"),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,r.kt)("iframe",{src:"https://demo.arcade.software/tC0CRZJ1jDRhjrwybsn9?embed",frameborder:"1",loading:"lazy",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,r.kt)("h3",{id:"connect-to-data-source"},"Connect to data source"),(0,r.kt)("div",{style:{position:"relative",paddingBottom:"calc(56.81216931216932% + 41px)",height:0}},(0,r.kt)("iframe",{src:"https://demo.arcade.software/7uJzTvMIuRxuFazesbmt?embed",frameborder:"1",loading:"lazy",allowfullscreen:"true",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Property name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},"Use example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectedItem"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"You can select an item in the Grid List and retrieve its data using the",(0,r.kt)("inlineCode",{parentName:"td"},"selectedItem"),"property. When you select the nth item, the value of the",(0,r.kt)("inlineCode",{parentName:"td"},"selectedItem"),"property will be the nth item in the data source array that you have set for the Grid List. For example, if your data source (referred to as dataSource) is as follows:",(0,r.kt)("inlineCode",{parentName:"td"},'[{"name":"Andrew"},{"name":"Mike"},{"name":"Emma"}]'),", and you select the third item, the",(0,r.kt)("inlineCode",{parentName:"td"},"selectedItem"),"property will actually be",(0,r.kt)("inlineCode",{parentName:"td"},"dataSource[2]"),", which is",(0,r.kt)("inlineCode",{parentName:"td"},'{"name":"Emma"}'),". Therefore, you can further access the value corresponding to a specific key by using",(0,r.kt)("inlineCode",{parentName:"td"},"gridList1.selectedItem.name"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{gridList1.selectedItem.name}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currentItem"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"This property can",(0,r.kt)("strong",{parentName:"td"},"only be used in the component of Grid List in the configuration"),"and ",(0,r.kt)("strong",{parentName:"td"},"does not need to be called via displayName")," . When you add a Text component to the Grid List component, it is expected that this Text component will display the name of this segment in the Data source. To achieve this, you can set it as",(0,r.kt)("inlineCode",{parentName:"td"},"{{currentItem.name}}"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{currentItem.name}}"))))),(0,r.kt)("h2",{id:"configurable-properties"},"Configurable properties"),(0,r.kt)("h3",{id:"data-1"},"Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Property name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Example")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data source"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of objects"),(0,r.kt)("td",{parentName:"tr",align:null},"This is used to set the data source for the Grid List component. The expected data format is",(0,r.kt)("inlineCode",{parentName:"td"},' [{ "key": "value", "key": "value" }, { "key": "value", "key": "value" },... { "key": "value", "key": "value" }]'),". You can query your data source using the Action, and the return value of the action will be used as the data source. Alternatively, you can directly input into the data source. When inputting, please make sure to use",(0,r.kt)("inlineCode",{parentName:"td"},"{{}}"),"to enclose the array."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{mysql1.data}}"))))),(0,r.kt)("h3",{id:"interaction"},"Interaction"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Property name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Loading"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"You can configure the Grid list component to display a Loading state under certain circumstances. For example, during the execution of an Action, you can show a loading state by using the",(0,r.kt)("inlineCode",{parentName:"td"},"{{mysql1.isRunning}}"),"setting."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{mysql1.isRunning}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"You can configure the Grid list component to be disabled under certain conditions. For example, if there is no input value in the",(0,r.kt)("inlineCode",{parentName:"td"},"input1"),"component, it should be disabled. You can achieve this by using the",(0,r.kt)("inlineCode",{parentName:"td"},'{{input1.value===null \\|\\| input1.value==="" \\|\\| input1.value===undefined}}'),"condition."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{{input1.value===null\\|\\|input1.value===""\\|\\|input1.value===undefined}}'))))),(0,r.kt)("h3",{id:"pagination"},"Pagination"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Property name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pagination"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"You can configure whether to display data in a paginated manner. If pagination is not enabled, all the data will be displayed on a single page."),(0,r.kt)("td",{parentName:"tr",align:null},"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Page size"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"To display multiple data items per page, you need to enable pagination. When you enable pagination, you can configure the number of items to be displayed per page."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{30}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable server side pagination"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Please refer to this documentation for reference:",(0,r.kt)("a",{parentName:"td",href:"https://docs.illacloud.com/server-side-pagination"},"Server-side pagination")),(0,r.kt)("td",{parentName:"tr",align:null},"--")))),(0,r.kt)("h3",{id:"layout"},"Layout"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Property name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Column adaption"),(0,r.kt)("td",{parentName:"tr",align:null},"Selection"),(0,r.kt)("td",{parentName:"tr",align:null},"We offer two modes: Fixed and Dynamic. In",(0,r.kt)("inlineCode",{parentName:"td"},"Fixed"),"mode, the list is fixed. Resizing the browser window will only change the width of each column. In",(0,r.kt)("inlineCode",{parentName:"td"},"Dynamic"),"mode, the list is not fixed, resizing the browser window will change both the width and the number of columns. Below this table, there are also illustrations of the two modes, which can provide a more visual understanding of the differences between the two modes."),(0,r.kt)("td",{parentName:"tr",align:null},"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number of columns"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"In Fixed mode, the configuration displays a fixed number of columns."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{3}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Min width of columns"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"In the Dynamic mode, the configuration sets the minimum column width. We will use the component width/minimum column width to calculate the maximum number of columns that can be displayed currently. If it can not be evenly divided, the excess value will be distributed evenly to supplement each column width."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{300}}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Item spacing"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Spacing between each column and row."),(0,r.kt)("td",{parentName:"tr",align:null},"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Height"),(0,r.kt)("td",{parentName:"tr",align:null},"Selection"),(0,r.kt)("td",{parentName:"tr",align:null},"To configure the height of a component, we provide two types of formatting options: Fixed and Auto. In the Fixed mode, you need to manually adjust the height of the component and item. In the Auto mode, the height of the component and the length of the list will be dynamically adjusted based on the height of the items."),(0,r.kt)("td",{parentName:"tr",align:null},"--")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to hide a component under certain conditions. For example, the component is not displayed when there are no results from",(0,r.kt)("inlineCode",{parentName:"td"},"mysql1"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"{{!mysql1.data}}"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{{!mysql1.data}}"))))),(0,r.kt)("h5",{id:"dynamic-number-of-columns"},"Dynamic number of columns"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/grid-list/dynamic.gif",alt:"dynamic"})),(0,r.kt)("h5",{id:"fixed-number-of-columns"},"Fixed number of columns"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/new-doc/grid-list/fixed.gif",alt:"fixed"})),(0,r.kt)("h2",{id:"event-handler"},"Event handler"),(0,r.kt)("p",null,"Event handler\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://docs.illacloud.com/event-handler"},"https://docs.illacloud.com/event-handler")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Event name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Click item"),(0,r.kt)("td",{parentName:"tr",align:null},'When clicking on an item, trigger the corresponding event. For example, if one of the data in your data source is a URL, you can expect that clicking on the item will navigate to the URL associated with that item. In the event handler, you can select "go to URL" and set the value of the URL to',(0,r.kt)("inlineCode",{parentName:"td"},"{{currentItem.url}}"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Page change"),(0,r.kt)("td",{parentName:"tr",align:null},"During page switching, events are triggered. This is commonly used in the server-side pagination scenario. When the page changes, the action is executed again, immediately fetching the next or previous page of data.")))))}s.isMDXComponent=!0}}]);