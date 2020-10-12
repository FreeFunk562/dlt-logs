(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(88)),c={id:"reports",title:"Report generation"},l={unversionedId:"reports",id:"reports",isDocsHomePage:!1,title:"Report generation",description:"You can create Graphical time series reports based on event filters. E.g.:",source:"@site/docs/reports.md",slug:"/reports",permalink:"/dlt-logs/docs/reports",editUrl:"https://github.com/mbehr1/dlt-logs/edit/master/docs/dlt-logs/docs/reports.md",version:"current",sidebar:"dltLogsSideBar",previous:{title:"Time sync",permalink:"/dlt-logs/docs/timeSync"},next:{title:"Export and filter DLT files",permalink:"/dlt-logs/docs/exportAndFilter"}},o=[{value:"Example",id:"example",children:[{value:"Identify the log messages",id:"identify-the-log-messages",children:[]},{value:"Define the filter",id:"define-the-filter",children:[]},{value:"Open a dlt file and generate the report",id:"open-a-dlt-file-and-generate-the-report",children:[]},{value:"Zooming in a report",id:"zooming-in-a-report",children:[]},{value:"Ignore lifecycle start range",id:"ignore-lifecycle-start-range",children:[]}]},{value:"Details",id:"details",children:[{value:"Capture group names and types",id:"capture-group-names-and-types",children:[]},{value:"Mapping values to names",id:"mapping-values-to-names",children:[]},{value:"using a function to calculate values",id:"using-a-function-to-calculate-values",children:[]},{value:"Opening one report or multiple reports in one graph",id:"opening-one-report-or-multiple-reports-in-one-graph",children:[]}]}],b={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can create ",Object(i.b)("strong",{parentName:"p"},"Graphical time series reports")," based on event filters. E.g.:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/mbehr1/dlt-logs/raw/master/images/timeSeriesReport1.png",alt:"Graphical time series reports"}))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("h3",{id:"identify-the-log-messages"},"Identify the log messages"),Object(i.b)("p",null,"Assuming you're having log messages like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"MON CPUS info CPU usage in interval : 42.1% cpu since boot : 21.0% Total thread cpu load : 15.5%\n")),Object(i.b)("p",null,"and you do want to create a graph of the three values."),Object(i.b)("h3",{id:"define-the-filter"},"Define the filter"),Object(i.b)("p",null,"Open ",Object(i.b)("strong",{parentName:"p"},"Preferences: Open Settings (JSON)")," and add a filter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"{3,6}","{3,6}":!0}),'"dlt-logs.filters":[\n  {\n      "type": 3,\n      "apid": "MON",\n      "ctid": "CPUS",\n      "payloadRegex": "CPU usage in interval : (?<cpu_usage>.*)% cpu since boot : (?<cpu_since_boot>.*)% Total thread cpu load : (<thread_cpu_load>*)%"\n  }\n]\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The filter will be used on all messages independent whether the messages are hidden by other view-filters (positive or negative)."),Object(i.b)("p",{parentName:"div"},"Exceptions are load-time filters that are already applied at load time of the DLT file and did remove the messages completely."))),Object(i.b)("h3",{id:"open-a-dlt-file-and-generate-the-report"},"Open a dlt file and generate the report"),Object(i.b)("p",null,"todo add picture."),Object(i.b)("h3",{id:"zooming-in-a-report"},"Zooming in a report"),Object(i.b)("p",null,"todo"),Object(i.b)("h3",{id:"ignore-lifecycle-start-range"},"Ignore lifecycle start range"),Object(i.b)("p",null,"todo"),Object(i.b)("h2",{id:"details"},"Details"),Object(i.b)("p",null,"You can define event filters (type: 3), add normal filters like ecu, apid, ctid and use a payloadRegex that captures either one value or even multiple values with named capture groups (?\\<series","_","name",">",".*). "),Object(i.b)("h3",{id:"capture-group-names-and-types"},"Capture group names and types"),Object(i.b)("p",null,"By default all captures needs will be parsed as float numbers. You can change that behaviour by prefixing the capure name with STATE","_"," or INT","_"," (see below)."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"value name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"excected type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"comment"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"STATE_*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to represent distinct states. Will use 2nd axix. Can be ints or strings. See reportOptions/valueMap on how to map to better readable names.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INT_*"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"will use parseInt(). Can be used if e.g. hex values should be converted.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"other"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"will use parseFloat().")))),Object(i.b)("p",null,"Grid lines for lifecycle start/ends are automatically added. "),Object(i.b)("h3",{id:"mapping-values-to-names"},"Mapping values to names"),Object(i.b)("p",null,"It's often desirable to map values to names for to ease readability. E.g."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"low")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"high")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"255"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown")))),Object(i.b)("p",null,"An easy way is to define a ",Object(i.b)("inlineCode",{parentName:"p"},"valueMap")," by adding a it to the ",Object(i.b)("inlineCode",{parentName:"p"},"reportOptions"),"object for the filter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:"{7}","{7}":!0}),'{\n  "type": 3,\n  "apid": "...",\n  "ctid": "...",\n  "payloadRegex": "^value = (?<STATE_a>.*)$",\n  "reportOptions": {\n      "valueMap": {\n          "STATE_a": [\n              {\n                  "1": "high"\n              },\n              {\n                  "0": "low"\n              },\n              {\n                  "255": "unknown"\n              }\n          ]\n      }\n  }\n}\n')),Object(i.b)("h3",{id:"using-a-function-to-calculate-values"},"using a function to calculate values"),Object(i.b)("p",null,"For more versatile changes a ",Object(i.b)("inlineCode",{parentName:"p"},"conversionFunction"),"can be added to the ",Object(i.b)("inlineCode",{parentName:"p"},"reportOptions"),"object:"),Object(i.b)("h4",{id:"conversionfunction-example"},"conversionFunction example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "payloadRegex": "Idle0\\\\s+.*\\\\s(.*)%",\n  "reportOptions": {\n    "conversionFunction": "return { \'cpu_idle0\': matches[1],\'INT_limit\':\'0x64\' }"\n  }\n}\n')),Object(i.b)("p",null,"in this example the ",Object(i.b)("inlineCode",{parentName:"p"},"conversionFunction"),"is returning two values: cpu","_","idle0 as the captured value and a 2nd value INT","_","limit with const value 100."),Object(i.b)("h4",{id:"conversionfunction-prototype-and-parameters"},"conversionFunction prototype and parameters"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"conversionFunction")," should accept two parameters ",Object(i.b)("inlineCode",{parentName:"p"},"matches"),"and ",Object(i.b)("inlineCode",{parentName:"p"},"params")," and return an object. E.g. as typescript prototype:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"(matches: RegExpExecArray | null | undefined, params: {} ) : Object\n")),Object(i.b)("p",null,"it will be created as function like this"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'convValuesFunction = Function("matches,params", filter.reportOptions.conversionFunction);                                        \n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"matches"),"is the return value from the corresponding RegExp.exec(...) (see ...).\n",Object(i.b)("inlineCode",{parentName:"p"},"params"),"is an Object like"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'params = {\n  localObj : {}, // will be exclusive for this filter. Initially empty obj.\n  reportObj : {} // will be shared between all filters for this report\n  msg : { // message object that matched the filter.\n    // currently as "stable api" only the following properties should be accessed:\n    timeStamp : Number // timeStamp of the msg in 0.1ms resolution\n    lifecycle : {} // Object per lifecycle detected (see ...)\n  }\n}\n')),Object(i.b)("h4",{id:"usage"},"usage"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"conversionFunction"),"can be used to modify the captured values for that event or to add new values."),Object(i.b)("p",null,'It can store values/properties in either the localObj to e.g. do calculations like "max" or even reportObj to exchange data between filters and their corresponding conversion functions.'),Object(i.b)("p",null,"It needs to be a JS function returning an array of objects { valueName: value } and gets the regex 'matches' as parameter. Additional parameter is \"params\" which is an object with msg, localObj and reportObj. E.g. \"return {'limit':42};\" for a static value. or \"return {'timeStamp': params.msg.timeStamp/10000};\". "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"localObj")," is initially an empty Object {} that can be used to store properties for that filter (e.g. interims data for calculations).  ",Object(i.b)("inlineCode",{parentName:"p"},"reportObj")," is an Object similar to localObj but shared between all filters."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"As ",Object(i.b)("inlineCode",{parentName:"p"},"reportObj")," is shared between all filters you do need to take care for property name clashes! Use reportObj only if you really want to share data between filters."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Currently the conversionFunction is only called if the payloadRegEx matches the payload. This will be changed in a upcoming version."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Via the params.msg.lifecycle object you can e.g. check whether the msg belongs to a new lifecycle and reset e.g. some variables inside the localObj.\nE.g."),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let lastLc = params.localObj['lifecycle'];\nif (lastLc !== params.msg.lifecycle) {\n  params.localObj['lifecycle'] = params.msg.lifecycle;\n  ... // do other stuff on new lifecycle...\n}\n")))),Object(i.b)("p",null,"todo ... add liveeditor to convert a function into the json string repr."),Object(i.b)("h3",{id:"opening-one-report-or-multiple-reports-in-one-graph"},"Opening one report or multiple reports in one graph"),Object(i.b)("p",null,'To open a report simply press on the "report" icon next to the filter.'),Object(i.b)("p",null,"todo picture"),Object(i.b)("p",null,"You can visualize multiple reports in the same view by simply clicking the 2nd report while keeping the first report view open."),Object(i.b)("p",null,"If you want to open the report as a new view you can hold the alt/options key before clicking the report icon."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Multiple reports share the same y-axis. So if you mix small values (e.g 0-1) with huge values (0-1000) you loose all details from the small values."))))}s.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?r.a.createElement(u,l(l({ref:t},b),{},{components:a})):r.a.createElement(u,l({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);