"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[5386],{9613:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9405:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(8028),r=(n(9496),n(9613));const o={title:"Form",description:"Learn how to use the form component to customize your app in ILLA Cloud."},l="Form",i={unversionedId:"form",id:"form",title:"Form",description:"Learn how to use the form component to customize your app in ILLA Cloud.",source:"@site/docs/form.mdx",sourceDirName:".",slug:"/form",permalink:"/no/form",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/form.mdx",tags:[],version:"current",frontMatter:{title:"Form",description:"Learn how to use the form component to customize your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Event calendar",permalink:"/no/event-calendar"},next:{title:"Icon",permalink:"/no/icon"}},p={},m=[{value:"What is Form?",id:"what-is-form",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add Components",id:"step-1-add-components",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],s={toc:m},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form"},"Form"),(0,r.kt)("h2",{id:"what-is-form"},"What is Form?"),(0,r.kt)("p",null,"The form component is a visual element that represents the progress or completion of a task or process. It displays a horizontal bar that fills up or shrinks based on the specified progress value."),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event handler"),(0,r.kt)("td",{parentName:"tr",align:null},"detecting and responding to specific user actions or events, such as clicks, keypresses, or form submissions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"non-interactive and cannot be modified or triggered by the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disable submit"),(0,r.kt)("td",{parentName:"tr",align:null},"disabling the form submission functionality.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Validate inputs on submit"),(0,r.kt)("td",{parentName:"tr",align:null},"the form inputs should be validated for correctness or completeness when the form is submitted.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reset after successful submit"),(0,r.kt)("td",{parentName:"tr",align:null},"automatically resets its values and state to their initial or default values after a successful submission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"a small pop-up or informational message that appears when the user hovers over or interacts with a specific element, such as a form component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show header"),(0,r.kt)("td",{parentName:"tr",align:null},"whether a form component should display a header or title section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show footer"),(0,r.kt)("td",{parentName:"tr",align:null},"whether a form component should display a footer section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,r.kt)("td",{parentName:"tr",align:null},"hides the form component from the user's view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Border Color"),(0,r.kt)("td",{parentName:"tr",align:null},"color of the border that surrounds a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Border Radius"),(0,r.kt)("td",{parentName:"tr",align:null},"curvature of the corners of a form component's border")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Border Width"),(0,r.kt)("td",{parentName:"tr",align:null},"thickness or width of the border surrounding a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Background"),(0,r.kt)("td",{parentName:"tr",align:null},"defines the color or image that fills the content area of a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shadow"),(0,r.kt)("td",{parentName:"tr",align:null},'visual effect of adding a subtle, offset "shadow" to a form component, making it appear slightly raised or floating above the background')))),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"submit"))),(0,r.kt)("p",null,"To submit the information filled in the form field"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reset"))),(0,r.kt)("p",null,"reset all input fields in the form component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"setValue"))),(0,r.kt)("p",null,'To set the text area input value, for example, {{"value1"}}'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"validate")),(0,r.kt)("p",null,"To verify that the input information is legal"),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the background color of a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderColor"),(0,r.kt)("td",{parentName:"tr",align:null},"defines the color of the border surrounding a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderWidth"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the thickness or width of the border surrounding a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"whether a form component is disabled or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayName"),(0,r.kt)("td",{parentName:"tr",align:null},"represents the name or label assigned to a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"footerHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies the height or size of the footer section of a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formData"),(0,r.kt)("td",{parentName:"tr",align:null},"holds the data or values entered by the user in a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headerHeight"),(0,r.kt)("td",{parentName:"tr",align:null},"determines the height or size of the header section of a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invalid"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the input or value of a form component is considered invalid or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"radius"),(0,r.kt)("td",{parentName:"tr",align:null},"defines the border radius or curvature of the corners of a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resetAfterSuccessful"),(0,r.kt)("td",{parentName:"tr",align:null},"indicates that a form component should automatically reset its values and state to their initial or default values after a successful submission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shadow"),(0,r.kt)("td",{parentName:"tr",align:null},"controls the presence and appearance of a shadow effect on a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showFooter"),(0,r.kt)("td",{parentName:"tr",align:null},"determines whether the footer section of a form component should be displayed or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"visibility of the header section of a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,r.kt)("td",{parentName:"tr",align:null},"holds the text or content of a tooltip associated with a form component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validateInputOnSubmit"),(0,r.kt)("td",{parentName:"tr",align:null},"specifies that the input values of a form component should be validated for correctness or completeness when the form is submitted")))),(0,r.kt)("p",null,"Example: {{form1.disabled}}"),(0,r.kt)("h3",{id:"use-case"},"Use case"),(0,r.kt)("p",null,"We will demonstrate how to make a form with name and age as input, as well as bar progress to show the completion progress of the form."),(0,r.kt)("h4",{id:"step-1-add-components"},"Step 1 Add Components"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"form")),' component with the default text "Form" and a "Submit" button to canvas.'),(0,r.kt)("p",null,"Add an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"input"))," component, a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"number input"))," component, and a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bar progress"))," component from ",(0,r.kt)("inlineCode",{parentName:"p"},"**Insert**")," into the form."),(0,r.kt)("p",null,'Label the input component to be "Name", the number input component to be "Age" and the bar progress component to be "Progress".'),(0,r.kt)("p",null,'Set the placeholder of the input component to "Please put your name here" and the default value of the number input to 0 as shown below.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_layout.jpg",alt:"bar_layout"})),(0,r.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"input"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"number input"))," components, we can configure them to set the value in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bar progress"))," component to reflect the progress of completion."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"input"))," and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"number input"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"bar progress"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n  {\n    input1.value && numberInput1.value\n      ? "100"\n      : input1.value || numberInput1.value\n      ? "50"\n      : "0";\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_input_num_config.jpg",alt:"bar_input_num_config"})),(0,r.kt)("p",null,"Note: need to set the event handler as described above to BOTH input and number input components."),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to submit the form if the form is completed (ie bar progress 100%)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"form"))," component that you want to update as the target of the event."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"submit"))," method and put ",(0,r.kt)("inlineCode",{parentName:"li"},"{{barProgress1.value == 100}}")," in ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Only run when")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_button_submit_config.jpg",alt:"bar_button_submit_config"})),(0,r.kt)("p",null,"Similarly, we can configure the button to show warning when the user is trying to submit an uncompleted form."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,r.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Show notification"))," in action, ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"title")),' "Error!" and ',(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"description")),' "Please fill out the form before submitting". Choose ',(0,r.kt)("inlineCode",{parentName:"li"},"Error")," for ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"type")),", put ",(0,r.kt)("inlineCode",{parentName:"li"},"{{2000}}")," for the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"duration"))," (2 seconds), and put ",(0,r.kt)("inlineCode",{parentName:"li"},"{{barProgress1.value<100}}")," for ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Only run when"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_button_show_config.jpg",alt:"bar_button_show_config"})),(0,r.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/bar_test.gif",alt:"bar_test"})))}u.isMDXComponent=!0}}]);