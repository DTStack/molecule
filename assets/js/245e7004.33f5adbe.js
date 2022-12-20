"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76506],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),s=l,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],i={id:"molecule.model.IPanel",title:"Interface: IPanel",sidebar_label:"IPanel",custom_edit_url:null},p=void 0,c={unversionedId:"api/interfaces/molecule.model.IPanel",id:"version-1.x/api/interfaces/molecule.model.IPanel",title:"Interface: IPanel",description:"molecule.model.IPanel",source:"@site/versioned_docs/version-1.x/api/interfaces/molecule.model.IPanel.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.IPanel",permalink:"/molecule/docs/api/interfaces/molecule.model.IPanel",draft:!1,editUrl:null,tags:[],version:"1.x",frontMatter:{id:"molecule.model.IPanel",title:"Interface: IPanel",sidebar_label:"IPanel",custom_edit_url:null},sidebar:"api",previous:{title:"IOutput",permalink:"/molecule/docs/api/interfaces/molecule.model.IOutput"},next:{title:"IPanelItem",permalink:"/molecule/docs/api/interfaces/molecule.model.IPanelItem"}},u={},m=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"current",id:"current",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"data",id:"data",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"toolbox",id:"toolbox",level:3},{value:"Defined in",id:"defined-in-2",level:4}],d={toc:m};function s(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,a.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".IPanel"),(0,a.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../classes/molecule.model.PanelModel"},(0,a.kt)("inlineCode",{parentName:"a"},"PanelModel")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"current"},"current"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"current"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"molecule.model.IPanelItem"},(0,a.kt)("inlineCode",{parentName:"a"},"IPanelItem")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L24"},"model/workbench/panel.tsx:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("a",{parentName:"p",href:"molecule.model.IPanelItem"},(0,a.kt)("inlineCode",{parentName:"a"},"IPanelItem")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L25"},"model/workbench/panel.tsx:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"toolbox"},"toolbox"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"toolbox"),": ",(0,a.kt)("a",{parentName:"p",href:"molecule.component.IActionBarItemProps"},(0,a.kt)("inlineCode",{parentName:"a"},"IActionBarItemProps")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">","[]"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule/blob/927b7d39/src/model/workbench/panel.tsx#L26"},"model/workbench/panel.tsx:26")))}s.isMDXComponent=!0}}]);