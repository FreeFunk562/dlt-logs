(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),l=(a(0),a(87)),i={id:"reports",title:"Report generation"},o={unversionedId:"reports",id:"reports",isDocsHomePage:!1,title:"Report generation",description:"You can create Graphical time series reports based on event filters. E.g.:",source:"@site/docs/reports.md",slug:"/reports",permalink:"/dlt-logs/docs/reports",editUrl:"https://github.com/mbehr1/dlt-logs/edit/master/docs/dlt-logs/docs/reports.md",version:"current",sidebar:"someSidebar",previous:{title:"Time sync",permalink:"/dlt-logs/docs/timeSync"},next:{title:"File transfer plugin",permalink:"/dlt-logs/docs/fileTransfer"}},c=[{value:"Example",id:"example",children:[{value:"Identify the log messages",id:"identify-the-log-messages",children:[]},{value:"Define the filter",id:"define-the-filter",children:[]},{value:"Open a dlt file and generate the report",id:"open-a-dlt-file-and-generate-the-report",children:[]},{value:"Zooming in a report",id:"zooming-in-a-report",children:[]},{value:"Ignore lifecycle start range",id:"ignore-lifecycle-start-range",children:[]}]},{value:"Details",id:"details",children:[{value:"Capture group names and types",id:"capture-group-names-and-types",children:[]},{value:"Mapping values to names",id:"mapping-values-to-names",children:[]},{value:"using a function to calculate values",id:"using-a-function-to-calculate-values",children:[]},{value:"Opening one report or multiple reports in one graph",id:"opening-one-report-or-multiple-reports-in-one-graph",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"You can create ",Object(l.b)("strong",{parentName:"p"},"Graphical time series reports")," based on event filters. E.g.:"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/mbehr1/dlt-logs/raw/master/images/timeSeriesReport1.png",alt:"Graphical time series reports"}))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("h3",{id:"identify-the-log-messages"},"Identify the log messages"),Object(l.b)("p",null,"Assuming you're having log messages like:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"MON CPUS info CPU usage in interval : 42.1% cpu since boot : 21.0% Total thread cpu load : 15.5%\n")),Object(l.b)("p",null,"and you do want to create a graph of the three values."),Object(l.b)("h3",{id:"define-the-filter"},"Define the filter"),Object(l.b)("p",null,"Open ",Object(l.b)("strong",{parentName:"p"},"Preferences: Open Settings (JSON)")," and add a filter:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'"dlt-logs.filters":[\n  {\n      "type": 3,\n      "apid": "MON",\n      "ctid": "CPUS",\n      "payloadRegex": "CPU usage in interval : (?<cpu_usage>.*)% cpu since boot : (?<cpu_since_boot>.*)% Total thread cpu load : (<thread_cpu_load>*)%"\n  }\n]\n')),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The filter will be used on all messages independent whether the messages are hidden by other view-filters (positive or negative)."),Object(l.b)("p",{parentName:"div"},"Exceptions are load-time filters that are already applied at load time of the DLT file and did remove the messages completely."))),Object(l.b)("h3",{id:"open-a-dlt-file-and-generate-the-report"},"Open a dlt file and generate the report"),Object(l.b)("p",null,"todo add picture."),Object(l.b)("h3",{id:"zooming-in-a-report"},"Zooming in a report"),Object(l.b)("p",null,"todo"),Object(l.b)("h3",{id:"ignore-lifecycle-start-range"},"Ignore lifecycle start range"),Object(l.b)("p",null,"todo"),Object(l.b)("h2",{id:"details"},"Details"),Object(l.b)("p",null,"You can define event filters (type: 3), add normal filters like ecu, apid, ctid and use a payloadRegex that captures either one value or even multiple values with named capture groups (?\\<series","_","name",">",".*). "),Object(l.b)("h3",{id:"capture-group-names-and-types"},"Capture group names and types"),Object(l.b)("p",null,"By default all captures needs will be parsed as float numbers. You can change that behaviour by prefixing the capure name with STATE","_"," or INT","_"," (see below)."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"value name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"excected type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"comment"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"STATE_*"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Used to represent distinct states. Will use 2nd axix. Can be ints or strings. See reportOptions/valueMap on how to map to better readable names.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"INT_*"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"will use parseInt(). Can be used if e.g. hex values should be converted.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"other"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"will use parseFloat().")))),Object(l.b)("p",null,"Grid lines for lifecycle start/ends are automatically added. "),Object(l.b)("h3",{id:"mapping-values-to-names"},"Mapping values to names"),Object(l.b)("p",null,"It's often desirable to map values to names for to ease readability. E.g."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"low")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"high")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"255"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unknown")))),Object(l.b)("p",null,"An easy way is to define a ",Object(l.b)("inlineCode",{parentName:"p"},"valueMap")," by adding a it to the ",Object(l.b)("inlineCode",{parentName:"p"},"reportOptions"),"object for the filter:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'{\n  "type": 3,\n  "apid": "...",\n  "ctid": "...",\n  "payloadRegex": "^value =  (?<STATE_a>.*)$",\n  "reportOptions": {\n      "valueMap": {\n          "STATE_a": [\n              {\n                  "1": "high"\n              },\n              {\n                  "0": "low"\n              },\n              {\n                  "255": "unknown"\n              }\n          ]\n      }\n  }\n}\n')),Object(l.b)("h3",{id:"using-a-function-to-calculate-values"},"using a function to calculate values"),Object(l.b)("p",null,"todo ... incl. liveeditor"),Object(l.b)("h3",{id:"opening-one-report-or-multiple-reports-in-one-graph"},"Opening one report or multiple reports in one graph"),Object(l.b)("p",null,'To open a report simply press on the "report" icon next to the filter.'),Object(l.b)("p",null,"todo picture"),Object(l.b)("p",null,"You can visualize multiple reports in the same view by simply clicking the 2nd report while keeping the first report view open."),Object(l.b)("p",null,"If you want to open the report as a new view you can hold the alt/options key before clicking the report icon."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Multiple reports share the same y-axis. So if you mix small values (e.g 0-1) with huge values (0-1000) you loose all details from the small values."))))}p.isMDXComponent=!0}}]);