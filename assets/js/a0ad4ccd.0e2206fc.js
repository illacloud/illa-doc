"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[5013],{9613:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,o(o({ref:e},s),{},{components:a})):n.createElement(k,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7846:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(8028),r=(a(9496),a(9613));const l={title:"Date Range",description:"Learn how to use the Date Range component from ILLA Cloud to let users select a start and end date."},o="Date range",i={unversionedId:"date-range",id:"date-range",title:"Date Range",description:"Learn how to use the Date Range component from ILLA Cloud to let users select a start and end date.",source:"@site/docs/date-range.mdx",sourceDirName:".",slug:"/date-range",permalink:"/date-range",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/docs/date-range.mdx",tags:[],version:"current",frontMatter:{title:"Date Range",description:"Learn how to use the Date Range component from ILLA Cloud to let users select a start and end date."},sidebar:"tutorialSidebar",previous:{title:"Date",permalink:"/date"},next:{title:"Date Time",permalink:"/date-time"}},d={},p=[{value:"What is Date range?",id:"what-is-date-range",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],s={toc:p},m="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"date-range"},"Date range"),(0,r.kt)("h2",{id:"what-is-date-range"},"What is Date range?"),(0,r.kt)("p",null,"Date Range component is a UI component that allows users to select a range of dates from a calendar interface, typically used in forms or data entry interfaces where the user needs to specify a start and end date range."),(0,r.kt)("p",null,"When a Date Range component is added to canvas, it displays two calendar interfaces side by side. One calendar interface is used to select the start date, while the other is used to select the end date. The user can navigate through the calendars by clicking on the previous or next arrows to move to a different month, or by clicking on a specific date to select it. The selected dates will be displayed in the input fields."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("p",null,"Date Range's available properties. JavaScript may be written to read or alter information about components."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start date"),(0,r.kt)("td",{parentName:"tr",align:null},"The default start date value of the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"End date"),(0,r.kt)("td",{parentName:"tr",align:null},"The default end date value of the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Format"),(0,r.kt)("td",{parentName:"tr",align:null},"A valid date format string. See\xa0",(0,r.kt)("a",{parentName:"td",href:"https://day.js.org/docs/en/parse/string-format"},"https://day.js.org/docs/en/parse/string-format"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start Placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"The value will be shown when the start date input field is empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"End Placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"The value will be shown when the end date input field is empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max date"),(0,r.kt)("td",{parentName:"tr",align:null},"set the maximum date that a user can select from the calendar interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Min date"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the earliest date that a user can select from the calendar interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Caption"),(0,r.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,r.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Position"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,r.kt)("td",{parentName:"tr",align:null},"control whether or not a clear button is displayed in the input field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Required field"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Create your validation logic here. The rules should be made in JavaScript and covered by {{}}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,r.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setStartValue"))),(0,r.kt)("p",null,'To set the start date value, for example, {{"value1"}}'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Input start value")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setEndValue"))),(0,r.kt)("p",null,'To set the end date value, for example, {{"value2"}}'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Input end value")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clearValue"))),(0,r.kt)("p",null,"To clear the value of the selected component "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"validate"))),(0,r.kt)("p",null,"To verify that the input information is legal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clearValidate"))),(0,r.kt)("p",null,"To clear the validation message"),(0,r.kt)("h3",{id:"event-handler"},"Event handler"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Change"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user changes the selected date value, perform specific action customized by users.")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"the color property of Date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customRule"),(0,r.kt)("td",{parentName:"tr",align:null},"the custom rule that user specified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dateFormat"),(0,r.kt)("td",{parentName:"tr",align:null},"the formate of date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the disabled status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of this component (ie cascader1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"startPlaceholder"),(0,r.kt)("td",{parentName:"tr",align:null},"placeholder value for start date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endPlaceholder"),(0,r.kt)("td",{parentName:"tr",align:null},"placeholder value for end date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},"an Array value for sequence of events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formDataKey"),(0,r.kt)("td",{parentName:"tr",align:null},"the Form Data Key of Date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the hidden status of button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hideValidationMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate whether the validation message is hidden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"label value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"alignment of cascader label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"position of cascader label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"the integer representing width of label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the readyOnly status of input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the required status of input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showClear"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate wether the date will be shown clear")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"Selected value")))),(0,r.kt)("p",null,"Example: {{dateRange1.value","[0]","}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Next, we will demonstrate how to map the data from the data source to date range and set end value to today's date with a button. "),(0,r.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,r.kt)("p",null,"Let us create a table in REST API called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"promoteCodes"),",")," including 6 columns:\xa0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"code")),",\xa0 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"id")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"createdAt")),",\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"expiredAt")),",\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"startedAt"),", ",(0,r.kt)("inlineCode",{parentName:"strong"},"updatedAt")),". We will use the startedAt and expiredAt time for sample use. "),(0,r.kt)("p",null,"Then we can create a new action for REST API from the action list, listing all data in promoteCodes and named restapi1. "),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,r.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,r.kt)("p",null,"Next, we can add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"date range"))," component and a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to the canvas. For default start date value of the date range component, we use the startedAt time of the first promote code from the rest api data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{{restapi1.data.promoteCodes[0].startedAt}}\n")),(0,r.kt)("p",null,"Similarly, for default end date value, we use expiredAt time of the first promote code from the rest api data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"{{restapi1.data.promoteCodes[0].expiredAt}}\n")),(0,r.kt)("p",null,"We also labeled the button as 'Update' as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/date_range_0.png",alt:"date_range_0"})),(0,r.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to set the end date value in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"date range")),"  component to today's date."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"date range"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setEndValue"))," action and set the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"End date")),"  as  ",(0,r.kt)("inlineCode",{parentName:"li"},"{{currentUserInfo.updatedAt}}")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/date_range_config.png",alt:"date_range_config"})),(0,r.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,r.kt)("p",null,"Now that when you click the 'Update' button, the end date should change to today's date. As for here, we have 2023-5-6 but it may be different when you are testing it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/date_range_1.png",alt:"date_range_1"})))}u.isMDXComponent=!0}}]);