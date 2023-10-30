"use strict";(self.webpackChunkilla_doc=self.webpackChunkilla_doc||[]).push([[6594],{9613:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(9496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=d(n),c=l,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||r;return n?a.createElement(g,o(o({ref:e},u),{},{components:n})):a.createElement(g,o({ref:e},u))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:l,o[1]=i;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2543:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(8028),l=(n(9496),n(9613));const r={title:"MongoDB",description:"Learn how to use ILLA Cloud to build apps with MongoDB. Explore data querying, manipulation, and visualization features."},o="MongoDB",i={unversionedId:"mongodb",id:"mongodb",title:"MongoDB",description:"Learn how to use ILLA Cloud to build apps with MongoDB. Explore data querying, manipulation, and visualization features.",source:"@site/docs/mongodb.mdx",sourceDirName:".",slug:"/mongodb",permalink:"/mongodb",draft:!1,editUrl:"https://github.com/illacloud/illa-doc/edit/main/docs/mongodb.mdx",tags:[],version:"current",frontMatter:{title:"MongoDB",description:"Learn how to use ILLA Cloud to build apps with MongoDB. Explore data querying, manipulation, and visualization features."},sidebar:"tutorialSidebar",previous:{title:"Microsoft SQL",permalink:"/microsoft-sql"},next:{title:"MySQL",permalink:"/mysql"}},p={},d=[{value:"Create MongoDB",id:"create-mongodb",level:3},{value:"Connection Settings",id:"connection-settings",level:3},{value:"Create Actions",id:"create-actions",level:3},{value:"Configure MongoDB",id:"configure-mongodb",level:3},{value:"Overview",id:"overview",level:4},{value:"Aggregate",id:"aggregate",level:4},{value:"Bulkwrite",id:"bulkwrite",level:4},{value:"Count",id:"count",level:4},{value:"deleteMany",id:"deletemany",level:4},{value:"deleteOne",id:"deleteone",level:4},{value:"distinct",id:"distinct",level:4},{value:"find",id:"find",level:4},{value:"findOne",id:"findone",level:4}],u={toc:d},s="wrapper";function m(t){let{components:e,...n}=t;return(0,l.kt)(s,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mongodb"},"MongoDB"),(0,l.kt)("p",null,"MongoDB is a popular NoSQL document-oriented database that is widely used for web applications and other data-driven software. MongoDB is designed to be flexible, scalable, and fast, and is particularly well-suited for handling large amounts of unstructured or semi-structured data."),(0,l.kt)("p",null,"In Illa, you can connect to a MongoDB database using the MongoDB Query Resource. This resource allows you to execute MongoDB queries directly from Illa, without having to write any code. You can use the query editor to write queries in MongoDB's native query language, which is based on JavaScript and uses a JSON-like syntax for working with documents."),(0,l.kt)("h3",{id:"create-mongodb"},"Create MongoDB"),(0,l.kt)("p",null,"There are two ways to create a resource in Illa after signing into your Illa account."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create in Resources")),(0,l.kt)("p",null,"Sign into your Illa account, select ",(0,l.kt)("inlineCode",{parentName:"p"},"**Resources**")," on the top of the page, and click ",(0,l.kt)("inlineCode",{parentName:"p"},"**Create New**")," button."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/external_resource.png",alt:"external_resource"})),(0,l.kt)("p",null,"Select ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"MongoDB"))," from the database list."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/action_list.png",alt:"action_list"})),(0,l.kt)("p",null,"Connect to the database with the required parameters described in ",(0,l.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,l.kt)("p",null,"After creating a resource, the ready MongoDB will display as shown."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_ex_ready.png",alt:"mongo_ex_ready"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create in Builder")),(0,l.kt)("p",null,"Sign into your Illa account, create a project in Illa Builder in the ",(0,l.kt)("inlineCode",{parentName:"p"},"**App**")," page, and navigate to the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Action List"))," at the bottom of the page. Click ",(0,l.kt)("inlineCode",{parentName:"p"},"**new**"),", then select ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"MongoDB"))," from the database list. Then, connect to the database with required parameters described in ",(0,l.kt)("inlineCode",{parentName:"p"},"Connection Settings")," below."),(0,l.kt)("p",null,"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"**Test Connection**")," to see if we can successfully connect to the database. If yes, click ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Save Resources")),", else, double check the hostname, port, username, and password is correct."),(0,l.kt)("h3",{id:"connection-settings"},"Connection Settings"),(0,l.kt)("p",null,"Here we need to provide information for connecting to MongoDB database."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_config.png",alt:"mongo_config"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The name for resource when creating actions in the ILLA.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Config Type"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"a type of collection used to store configuration data for sharded clusters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL or IP address for your database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Connection format"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"the syntax used to specify the connection string for connecting to a MongoDB database or cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The server host's port number that you should use to connect. If you don't specify a port, default port is '3306'.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Database"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"the username you wish to use when logging in to the MongoDB server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"Use this password for authentication.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL options"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"decides how high a secure SSL TCP/IP connection is prioritized while negotiating with the server.")))),(0,l.kt)("h3",{id:"create-actions"},"Create Actions"),(0,l.kt)("p",null,"We have created a MongoDB resource, we can add the action by selecting MongoDB from action list and choosing the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Create action"))," button."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_resource_list.png",alt:"mongo_resource_list"})),(0,l.kt)("p",null,"Now we have added the MongoDB server as an action to our building page."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongodb.png",alt:"mongodb"})),(0,l.kt)("h3",{id:"configure-mongodb"},"Configure MongoDB"),(0,l.kt)("h4",{id:"overview"},"Overview"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Action Type"),(0,l.kt)("td",{parentName:"tr",align:null},"aggregate, bulkwrite, count, deleteMany. deleteOne, distinct, find, findOne")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Collection"),(0,l.kt)("td",{parentName:"tr",align:null},"group of related documents that are stored together in a database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transformer"),(0,l.kt)("td",{parentName:"tr",align:null},"transforming data into the style you like using JavaScript")))),(0,l.kt)("h4",{id:"aggregate"},"Aggregate"),(0,l.kt)("p",null,"process multiple documents and return computed results."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Aggregation"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"defines the operations to be performed on the data")))),(0,l.kt)("p",null,"For example, to get all the results whose size is medium=>group the results by type=>Calculate the sum of prices in each type for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Aggregation")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'[\n    {\n        "$match": { "size": "medium" }\n    },\n    {\n        "$group": { "_id": "$type", "totalQuantity": { "$sum": "$price" } }\n    }\n]\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"An array of the computed results."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_agg_data.png",alt:"mongo_agg_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{mongodb1.data[0].result}}")," to get all."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_agg_code.png",alt:"mongo_agg_code"})),(0,l.kt)("h4",{id:"bulkwrite"},"Bulkwrite"),(0,l.kt)("p",null,"perform multiple write operations (insert, update, and delete) in a single request to the server"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Operations"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"an object that specifies the type of operation to perform and the data to be written")))),(0,l.kt)("p",null,"An example for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Operations")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'[\n    { "insertOne": { "document": { "_id": 3, "type": "beef", "size": "medium", "price": 6 } } },\n    { "insertOne": { "document": { "_id": 4, "type": "sausage", "size": "large", "price": 10 } } },\n    { "updateOne": {\n            "filter": { "type": "cheese" },\n            "update": { "$set": { "price": 8 } }\n        }\n    }\n]\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"The updated message is showing below."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_bulk_data.png",alt:"mongo_bulk_data"})),(0,l.kt)("p",null,"Since this method make changes but does not return anything. There is no output data to access."),(0,l.kt)("h4",{id:"count"},"Count"),(0,l.kt)("p",null,"count the number of documents that match a given query in a collection"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the selection criteria for the count operation")))),(0,l.kt)("p",null,"For example, to count the number of item with type \u201cbeef\u201d, we may put below code into ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Query")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'{"type":"beef"}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"The number of matching documents."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_count_data.png",alt:"mongo_count_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{mongodb1.data}}")," to get it."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_count_code.png",alt:"mongo_count_code"})),(0,l.kt)("h4",{id:"deletemany"},"deleteMany"),(0,l.kt)("p",null,"delete multiple documents that match a given filter in a collection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the selection criteria for the delete operation, If not specified, all documents in this collection will be deleted.")))),(0,l.kt)("p",null,"For example, to delete apples from items. We may put code below to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Filter")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},' {"type":"apple"}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"The number of matching documents."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_delete2_data.png",alt:"mongo_delete2_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{mongodb1.data[0].result.DeletedCount}}")," to get it. If no files are matched, the returned value will be 0."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_delete2_code.png",alt:"mongo_delete2_code"})),(0,l.kt)("h4",{id:"deleteone"},"deleteOne"),(0,l.kt)("p",null,"delete one document that match a given filter in a collection."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Filter"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the selection criteria for the delete operation")))),(0,l.kt)("p",null,"For example, to delete an apple from items. We may put code below to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Filter")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},' {"type":"apple"}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"Delete result."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_delete1_data.png",alt:"mongo_delete1_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{mongodb1.data[0].result.DeletedCount}}")," to get it. If no files are matched, the returned value will be 0 (Since we deleted all the apples in ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"deleteMany")),", there is no apple left, thus return 0)."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_delete1_code.png",alt:"mongo_delete1_code"})),(0,l.kt)("h4",{id:"distinct"},"distinct"),(0,l.kt)("p",null,"retrieve an array of unique values for a specified field in a collection"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the selection criteria for the distinct operation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the field to retrieve the distinct values from.")))),(0,l.kt)("p",null,"For example, we may have ",(0,l.kt)("inlineCode",{parentName:"p"},'{"type":"orange"}')," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Query"))," and ",(0,l.kt)("inlineCode",{parentName:"p"},"_id")," for ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Field")),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"an array of distinct values"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_dist_data.png",alt:"mongo_dist_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},'{{mongodb1.data[0].result.map(item =>({"result":item}))}}')," to get the array."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_dist_code.png",alt:"mongo_dist_code"})),(0,l.kt)("h4",{id:"find"},"find"),(0,l.kt)("p",null,"retrieve documents from a collection that match a specified set of criteria"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the selection criteria for the find operation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Projection"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies which fields to include or exclude in the query results")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sort By"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the sorting order of the returned documents")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Limit"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"limit the number of documents that are returned, default no limit. A limit of 0 is equivalent to no limit.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Skip"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the number of documents to skip, default to 0.")))),(0,l.kt)("p",null,"For example, to find the id, price, and type of all oranges sorted by their id."),(0,l.kt)("p",null,"For ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Query")),", ",(0,l.kt)("inlineCode",{parentName:"p"},'{"type": "orange"}')),(0,l.kt)("p",null,"For ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Projection")),", ",(0,l.kt)("inlineCode",{parentName:"p"},'{"_id": 1, "type": 1, "price": 1}'),"\nFor ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Sort By")),", ",(0,l.kt)("inlineCode",{parentName:"p"},'{"_id":1}')),(0,l.kt)("p",null,"Note: replace \u201c1\u201d with \u201ctrue\u201d still do it!"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"An array of objects of documents"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_find_data.png",alt:"mongo_find_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{mongodb1.data[0].result}}")," to get the array."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_find_code.png",alt:"mongo_find_code"})),(0,l.kt)("h4",{id:"findone"},"findOne"),(0,l.kt)("p",null,"retrieve the first document from a collection that match a specified set of criteria"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Input ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Properties"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies the selection criteria for the find operation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Projection"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specifies which fields to include or exclude in the query results")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Skip"),(0,l.kt)("td",{parentName:"tr",align:null},"optional"),(0,l.kt)("td",{parentName:"tr",align:null},"specify the number of documents to skip, default to 0.")))),(0,l.kt)("p",null,"For example, to find the id, price, and type of all oranges sorted by their id."),(0,l.kt)("p",null,"For ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Query")),", ",(0,l.kt)("inlineCode",{parentName:"p"},'{"type": "orange"}')),(0,l.kt)("p",null,"For ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Projection")),", ",(0,l.kt)("inlineCode",{parentName:"p"},'{"_id": 1, "type": 1, "price": 1}')),(0,l.kt)("p",null,"Note: replace \u201c1\u201d with \u201ctrue\u201d still do it!"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Output ")),(0,l.kt)("p",null,"An array of objects of documents"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_find1_data.png",alt:"mongo_find1_data"})),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"{{[mongodb1.data[0].result]}}")," to get the array."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.illacloud.com/official-website/img/docs/mongo_find1_code.png",alt:"mongo_find1_code"})))}m.isMDXComponent=!0}}]);