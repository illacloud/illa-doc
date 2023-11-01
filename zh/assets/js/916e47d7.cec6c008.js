"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[4111],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(8028),a=(n(9496),n(9613));const o={title:"Circle progress",description:"Learn how to use the circle progress component to customize and decorate your app in ILLA Cloud."},l="Circle progress",i={unversionedId:"circle-progress",id:"circle-progress",title:"Circle progress",description:"Learn how to use the circle progress component to customize and decorate your app in ILLA Cloud.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/circle-progress.mdx",sourceDirName:".",slug:"/circle-progress",permalink:"/zh/circle-progress",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/circle-progress.mdx",tags:[],version:"current",frontMatter:{title:"Circle progress",description:"Learn how to use the circle progress component to customize and decorate your app in ILLA Cloud."},sidebar:"tutorialSidebar",previous:{title:"Cascader",permalink:"/zh/cascader"},next:{title:"Container",permalink:"/zh/container"}},p={},s=[{value:"What is Circle progress?",id:"what-is-circle-progress",level:2},{value:"Properties",id:"properties",level:3},{value:"Method",id:"method",level:3},{value:"Data",id:"data",level:3},{value:"Use case",id:"use-case",level:3},{value:"Step 1 Add Components",id:"step-1-add-components",level:4},{value:"Step 2 Configure the component",id:"step-2-configure-the-component",level:4},{value:"Step 4 Test",id:"step-4-test",level:4}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"circle-progress"},"Circle progress"),(0,a.kt)("h2",{id:"what-is-circle-progress"},"What is Circle progress?"),(0,a.kt)("p",null,"Circle Progress component is a visual element used to display progress or completion status in a circular format. It is often used to represent the progress of tasks, projects, or any other measurable value."),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Value"),(0,a.kt)("td",{parentName:"tr",align:null},"the percentage value represents the progress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hide value label"),(0,a.kt)("td",{parentName:"tr",align:null},"whether the value label is hidden")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tooltip"),(0,a.kt)("td",{parentName:"tr",align:null},"Users can enter the component tooltip here. The tooltip will be shown when it is focused. Markdown format is supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hidden"),(0,a.kt)("td",{parentName:"tr",align:null},"Dynamically control whether the component is hidden. You can change the hidden status through a dynamical boolean value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the alignment (align to left or right) of the label")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Theme Color"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows users to specify the button's background color and opacity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Styles"),(0,a.kt)("td",{parentName:"tr",align:null},"the stroke width of the circle represents the progress")))),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,"You can use other components to control the component. We support the following two methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"setValue"))),(0,a.kt)("p",null,'To set the text area input value, for example, {{"value1"}}'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Properties"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Value"),(0,a.kt)("td",{parentName:"tr",align:null},"Input value")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"clearValue"))),(0,a.kt)("p",null,"To clear the value of the selected component"),(0,a.kt)("h3",{id:"data"},"Data"),(0,a.kt)("p",null,"The component has some commonly used data, which can be called via ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"{{componentName.propertyName}}"))," in the app."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alignment"),(0,a.kt)("td",{parentName:"tr",align:null},"control the position of the progress circle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"color"),(0,a.kt)("td",{parentName:"tr",align:null},"color of the circle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"displayName"),(0,a.kt)("td",{parentName:"tr",align:null},"the name of this component (ie button1)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hidden"),(0,a.kt)("td",{parentName:"tr",align:null},"hidden status (true or false)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"strokeWidth"),(0,a.kt)("td",{parentName:"tr",align:null},"width of the circle stroke")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tooltipText"),(0,a.kt)("td",{parentName:"tr",align:null},"value of tooltip text")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"trailColor"),(0,a.kt)("td",{parentName:"tr",align:null},"color of the trail or the unfilled portion of the circle progress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value"),(0,a.kt)("td",{parentName:"tr",align:null},"percentage value of the progress")))),(0,a.kt)("p",null,"Example: {{circleProgress1.value}}"),(0,a.kt)("h3",{id:"use-case"},"Use case"),(0,a.kt)("p",null,"We will demonstrate how to make a form with a circle progress component showing the completion progress of the form."),(0,a.kt)("h4",{id:"step-1-add-components"},"Step 1 Add Components"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"form")),' component with the default text "Form" and a "Submit" button to Canvas.'),(0,a.kt)("p",null,"Add an ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"input"))," component, a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"number input"))," component, and a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"circle progress"))," component from ",(0,a.kt)("inlineCode",{parentName:"p"},"**Insert**")," into the form."),(0,a.kt)("p",null,'Label the input component to be "Name", the number input component to be "Age" and the bar progress component to be "Progress".'),(0,a.kt)("p",null,'Set the placeholder of the input component to "Please put your name here" and the default value of the number input to 0 as shown below.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/cir_layout.jpg",alt:"cir_layout"})),(0,a.kt)("h4",{id:"step-2-configure-the-component"},"Step 2 Configure the component"),(0,a.kt)("p",null,"For the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"input"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"number input"))," components, we can configure them to set the value in ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"circle progress"))," component to reflect the progress of completion."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"input"))," and ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"number input"))," component to open its inspect page. Under ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,a.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"circle progress"))," component that you want to update as the target of the event."),(0,a.kt)("li",{parentName:"ol"},"Choose the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"setValue"))," action and set the value as")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'{\n  {\n    input1.value && numberInput1.value\n      ? "100"\n      : input1.value || numberInput1.value\n      ? "50"\n      : "0";\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/cir_event_config.jpg",alt:"cir_event_config"})),(0,a.kt)("p",null,"Note: need to set the event handler as described above to BOTH input and number input components."),(0,a.kt)("p",null,'For the "Submit" ',(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"button"))," component, we can configure it to submit the form if the form is completed (ie circle progress 100%)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,a.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Control component"))," in action, and select the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"form"))," component that you want to update as the target of the event."),(0,a.kt)("li",{parentName:"ol"},"Choose the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"submit"))," method and put ",(0,a.kt)("inlineCode",{parentName:"li"},"{{circleProgress1.value == 100}}")," in ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Only run when")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/cir_sub_config.jpg",alt:"cir_sub_config"})),(0,a.kt)("p",null,"Similarly, we can configure the button to show warning when the user is trying to submit an uncompleted form."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"button"))," component to open its inspect page. Under ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,a.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Show notification"))," in action, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"title")),' "Error!" and ',(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"description")),' "Please fill out the form before submitting". Choose ',(0,a.kt)("inlineCode",{parentName:"li"},"Error")," for ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"type")),", put ",(0,a.kt)("inlineCode",{parentName:"li"},"{{2000}}")," for the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"duration"))," (2 seconds), and put ",(0,a.kt)("inlineCode",{parentName:"li"},"{{circleProgress1.value<100}}")," for ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Only run when"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/cir_err_config.jpg",alt:"cir_err_config"})),(0,a.kt)("p",null,"We can also configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"**Form**")," component to show a success message when submit."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"form"))," component to open its inspect page. Under ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Event handler")),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"**+ New**"),"."),(0,a.kt)("li",{parentName:"ol"},"In the Edit event handler, select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Show notification"))," in action, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"title")),' "Submitted Successfully". Choose ',(0,a.kt)("inlineCode",{parentName:"li"},"Success")," for ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"type")),", put ",(0,a.kt)("inlineCode",{parentName:"li"},"{{2000}}")," for the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"duration"))," (2 seconds).")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/cir_form_submiy.jpg",alt:"cir_form_submit"})),(0,a.kt)("h4",{id:"step-4-test"},"Step 4 Test"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/official-site/components/cir_test.gif",alt:"cir_test"})))}u.isMDXComponent=!0}}]);