(self.webpackChunkdlt_logs=self.webpackChunkdlt_logs||[]).push([[521],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=i,N=u["".concat(d,".").concat(k)]||u[k]||s[k]||r;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},251:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var n=a(2122),i=a(9756),r=a(7294),l=a(3905);function o(){var e=(0,r.useState)(""),t=e[0],a=e[1],n=(0,r.useState)(JSON.stringify("")),i=n[0],l=n[1];return(0,r.useEffect)((function(){var e=JSON.stringify(t);e!==i&&l(e)}),[t]),(0,r.useEffect)((function(){try{var e=JSON.parse(i);e!==t&&a(e)}catch(n){}}),[i]),r.createElement("form",null,r.createElement("label",null,"payloadRegex:",r.createElement("br",null),r.createElement("input",{size:50,value:t,placeholder:"enter your payload regular expression here",type:"text",name:"payloadRegex",onChange:function(e){return a(e.target.value)}})),r.createElement("div",null),r.createElement("label",null,"escaped as JSON:",r.createElement("br",null),r.createElement("input",{size:50,type:"text",value:i,onChange:function(e){return l(e.target.value)}})))}var d={id:"filterReference",title:"Filter reference"},p={unversionedId:"filterReference",id:"filterReference",isDocsHomePage:!1,title:"Filter reference",description:"Overview",source:"@site/docs/filterReference.mdx",sourceDirName:".",slug:"/filterReference",permalink:"/dlt-logs/docs/filterReference",editUrl:"https://github.com/mbehr1/dlt-logs/edit/master/docs/dlt-logs/docs/filterReference.mdx",version:"current",frontMatter:{id:"filterReference",title:"Filter reference"},sidebar:"dltLogsSideBar",previous:{title:"DLT-Logs settings reference",permalink:"/dlt-logs/docs/genericSettings"},next:{title:"dlt-logs.configs reference",permalink:"/dlt-logs/docs/configsReference"}},m=[{value:"Overview",id:"overview",children:[{value:"When is a DLT message shown in a view?",id:"when-is-a-dlt-message-shown-in-a-view",children:[]}]},{value:"Details",id:"details",children:[{value:"Filter match attributes",id:"filter-match-attributes",children:[]},{value:"Additional filter attributes",id:"additional-filter-attributes",children:[]},{value:"Log levels",id:"log-levels",children:[]},{value:"How to interpret the autogenerated filter name",id:"how-to-interpret-the-autogenerated-filter-name",children:[]}]}],s={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"In general DLT-Filter can be used to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"add messages passing the filter to the current view (",(0,l.kt)("inlineCode",{parentName:"li"},"positive"),")"),(0,l.kt)("li",{parentName:"ul"},"remove messages passing the filter from the current view (",(0,l.kt)("inlineCode",{parentName:"li"},"negative"),")"),(0,l.kt)("li",{parentName:"ul"},"mark messages passing the filter with a specific background color (",(0,l.kt)("inlineCode",{parentName:"li"},"marker"),").")),(0,l.kt)("p",null,"Additionally they can be used to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"generate events (",(0,l.kt)("inlineCode",{parentName:"li"},"event"),") that are used to ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"generate a graphical report or"),(0,l.kt)("li",{parentName:"ul"},"used for ",(0,l.kt)("strong",{parentName:"li"},"timesync")," feature to synchronise time stamps between logs.")))),(0,l.kt)("p",null,"For generation reports from filters see ",(0,l.kt)("a",{parentName:"p",href:"/dlt-logs/docs/reports"},"features: report generation"),"."),(0,l.kt)("h3",{id:"when-is-a-dlt-message-shown-in-a-view"},"When is a DLT message shown in a view?"),(0,l.kt)("p",null,"The rules that determine whether a message is shown are similar to DLT-Viewer:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If no filter is active all messages are shown."),(0,l.kt)("li",{parentName:"ol"},"If no positive filter is active all messages are shown that are not filtered out by negative filters."),(0,l.kt)("li",{parentName:"ol"},"If any positive filter is active only those messages passing:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"any (",(0,l.kt)("inlineCode",{parentName:"li"},"or"),") of the positive filters ",(0,l.kt)("inlineCode",{parentName:"li"},"and")),(0,l.kt)("li",{parentName:"ul"},"are not filtered out by any of the negative filters.")),(0,l.kt)("p",null,"todo: add plantuml chart"),(0,l.kt)("h2",{id:"details"},"Details"),(0,l.kt)("h3",{id:"filter-match-attributes"},"Filter match attributes"),(0,l.kt)("p",null,"A filter has the following attributes that determine the matching criteria:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"attribute name"),(0,l.kt)("th",{parentName:"tr",align:null},"expected type"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Mandatory type. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," for positive, ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," for negative, ",(0,l.kt)("inlineCode",{parentName:"td"},"2")," for marker and ",(0,l.kt)("inlineCode",{parentName:"td"},"3")," for event based filter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mstp")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Message type. ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," for ",(0,l.kt)("inlineCode",{parentName:"td"},"TYPE_LOG"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),"for ",(0,l.kt)("inlineCode",{parentName:"td"},"TYPE_APP_TRACE"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"2")," for ",(0,l.kt)("inlineCode",{parentName:"td"},"TYPE_NW_TRACE"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"3")," for ",(0,l.kt)("inlineCode",{parentName:"td"},"TYPE_CONTROL"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ecu")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"ECU identifier / ECU. Up to 4 characters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apid")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Application identifier / APID . Up to 4 characters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ctid")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Context identifier / CTID. Up to 4 characters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"logLevelMin")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum log-level. I.e. log-level of the message has to be >= to match. If specified ",(0,l.kt)("inlineCode",{parentName:"td"},"mstp"),"is automatically set to 0. See ",(0,l.kt)("a",{parentName:"td",href:"#log-levels"},"Log levels")," for values and examples.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"logLevelMax")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Same as ",(0,l.kt)("inlineCode",{parentName:"td"},"logLevelMin"),"but for the maximum log-level, i.e. log-level of the message has to be <= ",(0,l.kt)("inlineCode",{parentName:"td"},"logLevelMax")," to match. See ",(0,l.kt)("a",{parentName:"td",href:"#log-levels"},"Log levels")," for values and examples.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"verbose")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"verbose")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"non-verbose")," messages. Verbose flag is part of the extended header of a DLT msg and defaults to false if the ext. header doesn't exist.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"payload")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"String that is searched in the (textual) representation of the message payload. Matches if the string is contained within the payload.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"payloadRegex")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular expression that the full (textual) representation of the message payload has to match against. This is in general faster than payload if e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"^")," for the begin of the text is used. E.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"^Exception:")," is faster than ",(0,l.kt)("inlineCode",{parentName:"td"},"payload"),"=",(0,l.kt)("inlineCode",{parentName:"td"},'"Exception:"'),' as the search can be stopped at the first characters already if the payload doesn\'t start with "Exc..."')))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"undefined attributes")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Undefined attributes are ignored."))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"all defined attributes need to match")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"For a message to match all defined attributes have to match (logical ",(0,l.kt)("inlineCode",{parentName:"p"},"and"),"). See ",(0,l.kt)("inlineCode",{parentName:"p"},"not")," below to negate the match result."))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Filter performance")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"In general all available log messages - which can easily be more than 10 million messages in larger log files - have to be matched against the filters.\nTo speed up the match-comparision it's usually a good practice to specify as many attributes as possible. E.g. typically ",(0,l.kt)("inlineCode",{parentName:"p"},"apid")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ctid"),"."),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"ecu")," should only be used in cases when you deal with DLT-files that have multiple ECUs logs in the same file. See ",(0,l.kt)("a",{parentName:"p",href:"configsReference"},"configs")," for an alternative way to quickly disable filters not relevant for the current ECU."),(0,l.kt)("p",{parentName:"div"},"Payload text checks should use ",(0,l.kt)("inlineCode",{parentName:"p"},"payloadRegex")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"payload")," except for the cases where you really do want to search simply for substring somewhere in the payload. The amount of necessary steps during regex comparision are nicely shown on pages like ",(0,l.kt)("a",{parentName:"p",href:"https://regex101.com"},"regex101"),"."),(0,l.kt)("p",{parentName:"div"},"E.g. to match for messages with"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"Operation (any name) failed")," but not ",(0,l.kt)("inlineCode",{parentName:"p"},"Operation (any name) succeeded")," messages a regex like"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"^Operation .*? failed")," (53 steps) is faster than ",(0,l.kt)("inlineCode",{parentName:"p"},"Operation .* failed")," (70 steps for 3 test strings)."))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Especially the ",(0,l.kt)("inlineCode",{parentName:"p"},"payloadRegex")," consists frequently of characters that need to be escaped in JSON.\nIf using the DLT filter assistant to create filters this is done automatically. If you modify the JSON settings manually please keep this in mind and escape the strings properly.\nYou can use the following code snippet to quickly escape/unescape your string:"),(0,l.kt)(o,{mdxType:"EscapePayload"}))),(0,l.kt)("h3",{id:"additional-filter-attributes"},"Additional filter attributes"),(0,l.kt)("p",null,"Additionaly a filter has the following attributes:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"attribute name"),(0,l.kt)("th",{parentName:"tr",align:null},"expected type"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional name for the filter. If not specified an autogenerated name based on the attributes is used, see ",(0,l.kt)("a",{parentName:"td",href:"#how-to-interpret-the-autogenerated-filter-name"},"autogenerated filter name"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"If this is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," the filter will never match any message, i.e. is not active.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Negate the match result expect for ",(0,l.kt)("inlineCode",{parentName:"td"},"enabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"atLoadTime")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"This filter is evaluated during initial file opening. This is useful to reduce the load times and size of large DLT-files. Any changes to the filter are only applied after the file is closed and newly opened.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"filterColour")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"only for ",(0,l.kt)("inlineCode",{parentName:"td"},"type=2"),"(MARKER): specifies the background color to be used for the marker.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"decorationId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"only for ",(0,l.kt)("inlineCode",{parentName:"td"},"type=2"),'(MARKER). Specified the "decorationId" (todo... see ... ) fo the be used for the marker.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeSyncId")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"only in conjunction with ",(0,l.kt)("inlineCode",{parentName:"td"},"payloadRegex"),"and ",(0,l.kt)("inlineCode",{parentName:"td"},"timeSyncPrio"),". See ",(0,l.kt)("a",{parentName:"td",href:"timeSync"},"Time Sync"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeSyncPrio")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"only in conjunction with ",(0,l.kt)("inlineCode",{parentName:"td"},"timeSyncId"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reportOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"JSON object"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"see ",(0,l.kt)("a",{parentName:"td",href:"reports"},"Report generation"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"configs")),(0,l.kt)("td",{parentName:"tr",align:null},"JSON object"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"see ",(0,l.kt)("a",{parentName:"td",href:"configsReference"},"Configs"))))),(0,l.kt)("h3",{id:"log-levels"},"Log levels"),(0,l.kt)("p",null,"DLT specifies the following log-levels:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"log-level"),(0,l.kt)("th",{parentName:"tr",align:null},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOG_FATAL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOG_ERROR")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOG_WARN")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOG_INFO")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOG_DEBUG")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LOG_VERBOSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6"))))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"To add all messages with warnings, error or fatal messages use a positive filter with ",(0,l.kt)("inlineCode",{parentName:"p"},"logLevelMax = 3"),"."),(0,l.kt)("p",{parentName:"div"},"To remove all messages with INFO, DEBUG or VERBOSE even from other matching filters add ",(0,l.kt)("inlineCode",{parentName:"p"},"negative"),"filter with ",(0,l.kt)("inlineCode",{parentName:"p"},"logLevelMin = 4"),"."))),(0,l.kt)("h3",{id:"how-to-interpret-the-autogenerated-filter-name"},"How to interpret the autogenerated filter name"),(0,l.kt)("p",null,"The filter name shows the following information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disabled"),": if the filter is currently not enabled."),(0,l.kt)("li",{parentName:"ul"},"name: the optional name attribute it available"),(0,l.kt)("li",{parentName:"ul"},"type: ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," (positive), ",(0,l.kt)("inlineCode",{parentName:"li"},"-")," (negative), ",(0,l.kt)("inlineCode",{parentName:"li"},"*")," (marker), ",(0,l.kt)("inlineCode",{parentName:"li"},"@")," (event)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(load time)"),": for load time filters"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"!"),': for "not" / negate filter'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mstp"),": if specified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},">= log-level"),": if logLevelMin is specified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<= log-level"),": if logLevelMax is specified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"VERB"),": if filter for verbose msgs is specified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NON-VERB"),": if filter for non-verbose msgs is specified"),(0,l.kt)("li",{parentName:"ul"},"ECU:.., APID:..., CTID:...: if specified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payload contains '...'"),": if payload is specified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"payload matches '...'"),": if payloadRegex is specified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"in .. LCs"),": if lifecycles is specified (todo see ...)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeSyncId: ... prio:... "),": if timeSync is specified.")))}u.isMDXComponent=!0}}]);