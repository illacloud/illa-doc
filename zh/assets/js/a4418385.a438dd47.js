"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[2365],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=l,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(h,o(o({ref:t},s),{},{components:a})):n.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7820:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(8028),l=(a(9496),a(9613));const r={title:"Radio group",description:"Displays all options on radio group and supports to select 1 option."},o="Radio group",i={unversionedId:"radio-group",id:"radio-group",title:"Radio group",description:"Displays all options on radio group and supports to select 1 option.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/radio-group.mdx",sourceDirName:".",slug:"/radio-group",permalink:"/zh/radio-group",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/radio-group.mdx",tags:[],version:"current",frontMatter:{title:"Radio group",description:"Displays all options on radio group and supports to select 1 option."},sidebar:"tutorialSidebar",previous:{title:"Radio button",permalink:"/zh/radio-button"},next:{title:"Rate",permalink:"/zh/rate"}},p={},d=[{value:"Properties",id:"properties",level:3},{value:"Manual options",id:"manual-options",level:4},{value:"Mapped options",id:"mapped-options",level:4},{value:"Other properties",id:"other-properties",level:4},{value:"Method",id:"method",level:3},{value:"setValue",id:"setvalue",level:4},{value:"clearValue",id:"clearvalue",level:4},{value:"validate",id:"validate",level:4},{value:"clearValidate",id:"clearvalidate",level:4},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4}],s={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"radio-group"},"Radio group"),(0,l.kt)("p",null,"A radio group, also known as a single-choice group or simply a radio group, is a component that allows users to select only one option from a list of predefined options. Each option in the group is represented by a circular button that can be selected or deselected by users. When one option is selected, any previously selected option in the group is automatically deselected."),(0,l.kt)("p",null,"Radio groups are commonly used in web forms, dialog boxes, and other interactive applications where users need to make a single choice from a set of options. They are useful for preventing errors that can occur when users select multiple options by mistake or confusion. Additionally, radio button groups are easy to use and visually intuitive, making them a popular choice for designers and developers alike."),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/radiogroup1.png",alt:""}),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("h4",{id:"manual-options"},"Manual options"),(0,l.kt)("p",null,"Add new options or delete options manually and configure the options one by one. The properties of options are as follows: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The text displayed for the option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The value associated with the option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the option is disabled for selection")))),(0,l.kt)("h4",{id:"mapped-options"},"Mapped options"),(0,l.kt)("p",null,"You can also add options from a data source by mapping the label and value properties to the corresponding data fields. You can get options dynamically from the database in this way. At the end of this article, we will demonstrate how to use it through an example."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data source"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the data source of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set the label of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set the value of options")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Use {{item}} to set whether the option is disabled for selection")))),(0,l.kt)("h4",{id:"other-properties"},"Other properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Default value"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caption"),(0,l.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Position"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the alignment of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Width"),(0,l.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,l.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,l.kt)("td",{parentName:"tr",align:null},"Set whether to show the clear button")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,l.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Required field"),(0,l.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,l.kt)("td",{parentName:"tr",align:null},"editor.inspect.setter_tooltip.custom_rule")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,l.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Theme color"),(0,l.kt)("td",{parentName:"tr",align:null},"To select the theme color of the component")))),(0,l.kt)("h3",{id:"method"},"Method"),(0,l.kt)("p",null,"You can use other components to control the component. We support the following three methods:"),(0,l.kt)("h4",{id:"setvalue"},"setValue"),(0,l.kt)("p",null,"To set the selected option, for example, {{\u201dvalue1\u201d}}"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Selected value")))),(0,l.kt)("h4",{id:"clearvalue"},"clearValue"),(0,l.kt)("p",null,"To clear the selected options"),(0,l.kt)("h4",{id:"validate"},"validate"),(0,l.kt)("p",null,"To verify that the input information is legal"),(0,l.kt)("h4",{id:"clearvalidate"},"clearValidate"),(0,l.kt)("p",null,"To clear the validation message"),(0,l.kt)("h3",{id:"event-handler"},"Event handler"),(0,l.kt)("p",null,"We support listening to the ",(0,l.kt)("inlineCode",{parentName:"p"},"onChange")," event of the radio group. "),(0,l.kt)("p",null,"When the selected option changes, it can trigger a specified action. This means that when a user selects a different option from a radio group, a particular action can be taken based on the selected option. For example, in a web form, selecting a different option can trigger the display of different form fields or the submission of the form to a different destination. In this way, the option selected by the user can affect the behavior of the software or web application they are using. The ability to trigger specified actions based on user input is an important aspect of interactive software design and can improve the usability and functionality of the software."),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"The component has some commonly used data, which can be called via {{componentName.propertyName}} in the app."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"Selected value")))),(0,l.kt)("h3",{id:"use-case"},"Use case"),(0,l.kt)("p",null,"Next, we will demonstrate how to use the mapped mode to dynamically obtain options. "),(0,l.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,l.kt)("p",null,"We have created a table named ",(0,l.kt)("inlineCode",{parentName:"p"},"selection"),", including 5 columns: ",(0,l.kt)("inlineCode",{parentName:"p"},"options_en"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_jp"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_zh"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"options_kr"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),". We stored the option values in ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and stored options label in different languages in other columns. "),(0,l.kt)("p",null,"Create an actions to list all data in ",(0,l.kt)("inlineCode",{parentName:"p"},"selection")," named ",(0,l.kt)("inlineCode",{parentName:"p"},"postgresql1")),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/radio1.png",alt:""}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"select * from selection\n")),(0,l.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the Data sources to ",(0,l.kt)("inlineCode",{parentName:"p"},"{{postgresql1.data}}")," ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure the label to change the label based on the language. "),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Use {{ item.columnName }} to set the column. "),(0,l.kt)("li",{parentName:"ol"},"Use {{ currentUserInfo.language }} to set the language users use in ILLA.")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"{{currentUserInfo.language=='ja-JP' ? item.options_jp \n: currentUserInfo.language == 'ko-KR' ? item.options_kr \n: currentUserInfo.language == 'zh-CN' ? item.options_zh \n: item.options_en }}\n")))),(0,l.kt)("img",{src:"https://cdn.illacloud.com/official-website/img/docs/assemble/radiogroup2.png",alt:""}))}m.isMDXComponent=!0}}]);