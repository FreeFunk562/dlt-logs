(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{119:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(116),s=a(101),o=a(64),c=a.n(o),r=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,u=e.values,b=e.groupId,m=e.className,p=Object(l.a)(),f=p.tabGroupChoices,v=p.setTabGroupChoices,h=Object(n.useState)(o),O=h[0],j=h[1],g=n.Children.toArray(e.children);if(null!=b){var w=f[b];null!=w&&w!==O&&u.some((function(e){return e.value===w}))&&j(w)}var N=function(e){j(e),null!=b&&v(b,e)},x=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case r:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},120:function(e,t,a){"use strict";var n=a(3),i=a(0),l=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),l=(a(0),a(104)),s=a(119),o=a(120),c={id:"installFirstUse",title:"Installation and first use",sidebar_label:"Install and first use",slug:"/"},r={unversionedId:"installFirstUse",id:"installFirstUse",isDocsHomePage:!1,title:"Installation and first use",description:"DLT-Logs is a Visual Studio Code(tm) extension available at the marketplace: Version.",source:"@site/docs/installFirstUse.md",slug:"/",permalink:"/dlt-logs/docs/",editUrl:"https://github.com/mbehr1/dlt-logs/edit/master/docs/dlt-logs/docs/installFirstUse.md",version:"current",sidebar_label:"Install and first use",sidebar:"dltLogsSideBar",next:{title:"dlt-logs settings reference",permalink:"/dlt-logs/docs/genericSettings"}},d=[{value:"Install",id:"install",children:[]},{value:"First use",id:"first-use",children:[{value:"Opening multiple files",id:"opening-multiple-files",children:[]}]}],u={toc:d};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"DLT-Logs is a Visual Studio Code(tm) extension available at the marketplace: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=mbehr1.dlt-logs"}),Object(l.b)("img",Object(n.a)({parentName:"a"},{src:"https://vsmarketplacebadge.apphb.com/version/mbehr1.dlt-logs.svg",alt:"Version"}))),"."),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)("p",null,"At first you do need to have Visual Studio Code installed. It's available for ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/supporting/faq#_is-vs-code-free"}),"free")," from here: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.visualstudio.com"}),"https://code.visualstudio.com")," . It works well under Windows, macOS and Linux."),Object(l.b)("p",null,'Then you can install DLT-Logs like any other extension for Visual Studio Code, e.g. via command "Extensions: Install Extensions" and then enter DLT-Logs and click "Install".'),Object(l.b)("p",null,"(todo add picture)"),Object(l.b)("h2",{id:"first-use"},"First use"),Object(l.b)("p",null,"After installation you can open DLT files via"),Object(l.b)(s.a,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"win",mdxType:"TabItem"},'Use F1 and enter/select command "Open DLT file...".'),Object(l.b)(o.a,{value:"mac",mdxType:"TabItem"},'Use Cmd+P and enter/select command "Open DLT file...".'),Object(l.b)(o.a,{value:"linux",mdxType:"TabItem"},'Use Ctrl+P and enter/select command "Open DLT file...".')),"and select the DLT file to open from the opened file selection dialog.",Object(l.b)("h3",{id:"opening-multiple-files"},"Opening multiple files"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"You can open multiple DLT files one after the other and they will appear in different views."),Object(l.b)("p",{parentName:"div"},"If you want to open multiple DLT files into the same view you do need to use the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"exportAndFilter"}),"export")," feature to merge/export them into one file. "))))}b.isMDXComponent=!0}}]);