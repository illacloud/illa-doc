"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[466],{9613:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(9496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(g,l(l({ref:e},d),{},{components:a})):n.createElement(g,l({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2312:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(8028),r=(a(9496),a(9613));const i={title:"TiDB",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/323?languages=en&filter=basic&value=0",metaTitle:"TiDB Integration Doc | ILLA Cloud",desc:"Use ILLA Cloud to access and work with your TiDB data. Create apps that can query, manipulate, and display data. Follow this guide to get started.",tagCategory:"doc_menu_tidb_click",categoryName:"\ud83d\udd28 Integrations",categoryPriority:3,postPriority:1},l=void 0,o={unversionedId:"tidb",id:"tidb",title:"TiDB",description:"What is TiDB?",source:"@site/docs/tidb.mdx",sourceDirName:".",slug:"/tidb",permalink:"/fi/tidb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tidb.mdx",tags:[],version:"current",frontMatter:{title:"TiDB",crowdinRepo:"https://crowdin.com/multilingual/illacloud-website/323?languages=en&filter=basic&value=0",metaTitle:"TiDB Integration Doc | ILLA Cloud",desc:"Use ILLA Cloud to access and work with your TiDB data. Create apps that can query, manipulate, and display data. Follow this guide to get started.",tagCategory:"doc_menu_tidb_click",categoryName:"\ud83d\udd28 Integrations",categoryPriority:3,postPriority:1},sidebar:"tutorialSidebar",previous:{title:"Text area Input",permalink:"/fi/text-area-input"},next:{title:"Time Picker",permalink:"/fi/time-picker"}},s={},c=[{value:"<h2 hidden>What is TiDB?</h2>",id:"what-is-tidb",level:2},{value:"Create TiDB",id:"create-tidb",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure TiDB",id:"configure-tidb",level:3}],d={toc:c},u="wrapper";function p(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-tidb"},(0,r.kt)("h2",{hidden:!0},"What is TiDB?")),(0,r.kt)("p",null,"TiDB is a database integration that allows you to connect and interact with a TiDB database. It is a distributed, horizontally scalable relational database management system that is designed to handle high-volume, high-concurrency workloads."),(0,r.kt)("p",null,"With the TiDB integration in Illa, you can query, update, and delete data from a TiDB database using SQL commands. You can also create custom SQL queries and run them within Illa. This makes it easy to build data-driven applications and dashboards that display real-time data from a TiDB database."),(0,r.kt)("h3",{id:"create-tidb"},"Create TiDB"),(0,r.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Resources")),(0,r.kt)("p",null,"Sign into your Illa account, select ",(0,r.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TiDB"))," from the database list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,r.kt)("p",null,"Connect to the database with the required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("p",null,"After creating a resource, the ready TiDB will display as shown."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ti_ex_ready.png",alt:"ti_ex_ready"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create in Builder")),(0,r.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TiDB"))," from the database list. Then, connect to the database with required parameters described in ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,r.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,r.kt)("p",null,"Here we need to provide information for connecting to TiDB database."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ti_config.png",alt:"ti_config"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ti_config_1.png",alt:"ti_config_1"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The server host's port number that you should use to connect. If you don't specify a port, default port is '4000'.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"the username you wish to use when logging in to the TiDB server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this password for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSL options"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"decides how high a secure SSL TCP/IP connection is prioritized while negotiating with the server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CA Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"a digital certificate that is used to verify the identity of a server and establish a secure, encrypted connection between a client and a TiDB cluster. If you don't specify it, we have filled in a default certificate for you.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client Key"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"a parameter that is used to establish a secure connection between the TiDB client and the TiDB server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client Certificate"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"a security feature that allows a client to authenticate itself to a TiDB server")))),(0,r.kt)("h3",{id:"create-actions"},"Create Actions"),(0,r.kt)("p",null,"We have created a TiDB resource, we can add the action by selecting TiDB from action list and choosing the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ti_resource_list.png",alt:"ti_resource_list"})),(0,r.kt)("p",null,"Now we have added the TiDB server as an action to our building page."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/ti.png",alt:"ti"})),(0,r.kt)("h3",{id:"configure-tidb"},"Configure TiDB"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Properties"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL query"),(0,r.kt)("td",{parentName:"tr",align:null},"sql commands to fetch (select), insert, update, delete data from database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,r.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using Javascript")))),(0,r.kt)("p",null,"Example usage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM users ORDER BY lastname;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Insert")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO users\n\n    (firstname, lastname, email)\n\nVALUES\n\n    (\n\n        {{ NewUser.data.firstNameInput }},\n\n        {{ NewUser.data.lastNameInput }},\n\n        {{ NewUser.data.emailInput }}\n\n    );\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE users\n  SET firstname = '{{form1.updatedProfile.first}}'\n  WHERE id = {{ form1.updatedProfile.uid}};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Delete")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM users WHERE id = {{ form1.updatedProfile.uid }};\n")))}p.isMDXComponent=!0}}]);