"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47163],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"molecule.model.IStatusBar",title:"Interface: IStatusBar",sidebar_label:"IStatusBar",custom_edit_url:null},u=void 0,c={unversionedId:"api/interfaces/molecule.model.IStatusBar",id:"version-1.x/api/interfaces/molecule.model.IStatusBar",title:"Interface: IStatusBar",description:"molecule.model.IStatusBar",source:"@site/versioned_docs/version-1.x/api/interfaces/molecule.model.IStatusBar.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.IStatusBar",permalink:"/molecule/docs/api/interfaces/molecule.model.IStatusBar",draft:!1,editUrl:null,tags:[],version:"1.x",frontMatter:{id:"molecule.model.IStatusBar",title:"Interface: IStatusBar",sidebar_label:"IStatusBar",custom_edit_url:null},sidebar:"api",previous:{title:"ISimpleKeybinding",permalink:"/molecule/docs/api/interfaces/molecule.model.ISimpleKeybinding"},next:{title:"IStatusBarItem",permalink:"/molecule/docs/api/interfaces/molecule.model.IStatusBarItem"}},m={},s=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"contextMenu",id:"contextmenu",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"leftItems",id:"leftitems",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"rightItems",id:"rightitems",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".IStatusBar"),(0,l.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../classes/molecule.model.StatusBarModel"},(0,l.kt)("inlineCode",{parentName:"a"},"StatusBarModel")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"contextmenu"},"contextMenu"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"contextMenu"),": ",(0,l.kt)("a",{parentName:"p",href:"molecule.component.IMenuItemProps"},(0,l.kt)("inlineCode",{parentName:"a"},"IMenuItemProps")),"[]"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L22"},"model/workbench/statusBar.tsx:22")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"leftitems"},"leftItems"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"leftItems"),": ",(0,l.kt)("a",{parentName:"p",href:"molecule.model.IStatusBarItem"},(0,l.kt)("inlineCode",{parentName:"a"},"IStatusBarItem")),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L21"},"model/workbench/statusBar.tsx:21")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rightitems"},"rightItems"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"rightItems"),": ",(0,l.kt)("a",{parentName:"p",href:"molecule.model.IStatusBarItem"},(0,l.kt)("inlineCode",{parentName:"a"},"IStatusBarItem")),"<",(0,l.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/statusBar.tsx#L20"},"model/workbench/statusBar.tsx:20")))}d.isMDXComponent=!0}}]);