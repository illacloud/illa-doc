"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[67],{9613:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=d(a),c=r,h=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(h,o(o({ref:e},u),{},{components:a})):n.createElement(h,o({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8143:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(8028),r=(a(9496),a(9613));const l={title:"Text area Input",metaTitle:"Text Area Input Component Doc | ILLA Cloud",desc:"Learn how to use the Text area input component to create and customize text area input fields for your app in ILLA Cloud.",tagCategory:"doc_menu_text_area_input_click",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/371?languages=en&filter=basic&value=0",categoryName:"\ud83e\uddec Assemble components",categoryPriority:6,postPriority:1},o=void 0,i={unversionedId:"text-area-input",id:"text-area-input",title:"Text area Input",description:"What is Text Area Input?",source:"@site/i18n/no/docusaurus-plugin-content-docs/current/text-area-input.mdx",sourceDirName:".",slug:"/text-area-input",permalink:"/no/text-area-input",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/text-area-input.mdx",tags:[],version:"current",frontMatter:{title:"Text area Input",metaTitle:"Text Area Input Component Doc | ILLA Cloud",desc:"Learn how to use the Text area input component to create and customize text area input fields for your app in ILLA Cloud.",tagCategory:"doc_menu_text_area_input_click",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/371?languages=en&filter=basic&value=0",categoryName:"\ud83e\uddec Assemble components",categoryPriority:6,postPriority:1}},p={},d=[{value:"<h2 hidden>What is Text Area Input?</h2>",id:"what-is-text-area-input",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Event handler",id:"event-handler",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add an action",id:"step-1-add-an-action",level:4},{value:"Step 2 Add Components",id:"step-2-add-components",level:4},{value:"Step 3 Configure the component",id:"step-3-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],u={toc:d},m="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-text-area-input"},(0,r.kt)("h2",{hidden:!0},"What is Text Area Input?")),(0,r.kt)("p",null,"The Text area input component is a user interface element that allows users to enter and edit the the text area in a form or input field."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default value"),(0,r.kt)("td",{parentName:"tr",align:null},"The initial value of the component. You can dynamically change the initial value by typing JavaScript in {{}}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"The value will be shown when the input field is empty.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the field displayed to the user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Caption"),(0,r.kt)("td",{parentName:"tr",align:null},"A caption used to describe the field in detail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden label"),(0,r.kt)("td",{parentName:"tr",align:null},"Set whether to display the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Position"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the position of the label relative to the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},"When the label is on the left side of the component, set the width ratio of the label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Handler"),(0,r.kt)("td",{parentName:"tr",align:null},"Trigger queries, control components, or call other APIs in response to component events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is disabled. The component cannot be modified or focused when it is disabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read Only"),(0,r.kt)("td",{parentName:"tr",align:null},"Control the status of whether the component is read-only. A read-only component can be selected and focused but cannot be modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show clear button"),(0,r.kt)("td",{parentName:"tr",align:null},"control whether or not a clear button is displayed in the input field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show character count"),(0,r.kt)("td",{parentName:"tr",align:null},"control whether or not the character count of the input is displayed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Required field"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid only when the switch is on.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Regex"),(0,r.kt)("td",{parentName:"tr",align:null},"specify a regular expression pattern that the input value must match")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max length"),(0,r.kt)("td",{parentName:"tr",align:null},"set the maximum number of characters that can be entered into the input field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Min Length"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the minimum number of characters that the user must enter into the input field in order for the input to be considered valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Create your validation logic here. The rules should be made in JavaScript and covered by {{}}.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hide validation message"),(0,r.kt)("td",{parentName:"tr",align:null},"You can hide the error message by switching the hidden status when the input value is incorrect. You can dynamically change the hidden status by JavaScript.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form Data Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a key of a wrapping form component when constructing the data attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Height"),(0,r.kt)("td",{parentName:"tr",align:null},"specify the vertical size or height of the input field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through dynamical boolean value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")))),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setValue"))),(0,r.kt)("p",null,"To set the text area input value, for example, {{'value1'}}"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"clearValue"))),(0,r.kt)("p",null,"To clear the value of the selected component "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"focus"))),(0,r.kt)("p",null,"When the focus method is called, the text area input field will be highlighted and ready for the user to start typing without the need for the user to click on the number input field"),(0,r.kt)("h3",{id:"event-handler"},"Event handler"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Change"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user changes the input value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Focus"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user moves the mouse cursor on the input component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blur"),(0,r.kt)("td",{parentName:"tr",align:null},"When a user is done inputting value and quit focusing on component")))),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"user input value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"background color of the button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customRule"),(0,r.kt)("td",{parentName:"tr",align:null},"user-defined rule or validation logic that can be applied to the number input component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the disabled status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dynamicHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"allows the height of the text area to adjust dynamically based on the content entered by the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},"generated or triggered when certain actions or events occur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formDataKey"),(0,r.kt)("td",{parentName:"tr",align:null},"the Form Data Key of input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"hidden status (true or false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},"label value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelAlign"),(0,r.kt)("td",{parentName:"tr",align:null},"alignment of input label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"position of input label (left or right)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"labelWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"the integer representing width of label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,r.kt)("td",{parentName:"tr",align:null},"the value of maximum length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minLength"),(0,r.kt)("td",{parentName:"tr",align:null},"the value of minimum length")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"placeholder value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"readOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the readyOnly status of input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a Boolean value indicate the required status of input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resizeDirection"),(0,r.kt)("td",{parentName:"tr",align:null},"allows you to control the resizing behavior of the text area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regex"),(0,r.kt)("td",{parentName:"tr",align:null},"apply pattern-based validation to the input text in the text area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,r.kt)("td",{parentName:"tr",align:null},"value of tooltip text")))),(0,r.kt)("p",null,"Example: {{textarea1.value}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"Next, we will demonstrate how to map the data from the data source to the Text area input with a button. "),(0,r.kt)("h4",{id:"step-1-add-an-action"},"Step 1 Add an action"),(0,r.kt)("p",null,"Let us create a table in Supabase called ",(0,r.kt)("inlineCode",{parentName:"p"},"Project"),".  There are two attributes in Project: ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," is the value we want to map to our text area input."),(0,r.kt)("p",null,"Then we can create a new action for Supabase from the action list, listing all the data in project and names as ",(0,r.kt)("inlineCode",{parentName:"p"},"supabasedb2.")),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Run"))," to activate this action."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/text_area_data.jpg",alt:"text_area_data"})),(0,r.kt)("h4",{id:"step-2-add-components"},"Step 2 Add Components"),(0,r.kt)("p",null,"Next, we can add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"text area input"))," component and a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to the canvas. "),(0,r.kt)("p",null,"We set the default value of text area to be 'None' and labeled the button as 'Set value' as shown below"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/text_area_look.jpg",alt:"text_area_look"})),(0,r.kt)("h4",{id:"step-3-configure-the-component"},"Step 3 Configure the component"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to set the value in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"text area input"))," component to the data of the document we read from supabasedb2."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"textarea1"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as  ",(0,r.kt)("inlineCode",{parentName:"li"},"{{s31.data}}")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/text_area_config.jpg",alt:"text_area_config"})),(0,r.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,r.kt)("p",null,"Now that when you click the 'Set value' button, the value should change to the names."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/text_area_test.jpg",alt:"text_area_test"})))}s.isMDXComponent=!0}}]);