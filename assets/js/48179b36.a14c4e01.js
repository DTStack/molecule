"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5882],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={},c="Contributing",u={unversionedId:"contributing",id:"version-1.x/contributing",title:"Contributing",description:"Development",source:"@site/versioned_docs/version-1.x/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/molecule/docs/contributing",draft:!1,editUrl:"https://github.com/DTStack/molecule/edit/main/website/versioned_docs/version-1.x/contributing.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Custom Workbench",permalink:"/molecule/docs/advanced/customize-workbench"}},p={},s=[{value:"Development",id:"development",level:2},{value:"Naming",id:"naming",level:2},{value:"Git Work Flow",id:"git-work-flow",level:2},{value:"Reference",id:"reference",level:3}],f={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contributing"},"Contributing"),(0,o.kt)("h2",{id:"development"},"Development"),(0,o.kt)("p",null,"Start to development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn # install dependencies\n\nyarn dev\n")),(0,o.kt)("p",null,"Running a web preview version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\nyarn web\n")),(0,o.kt)("h2",{id:"naming"},"Naming"),(0,o.kt)("p",null,"Unify the Service methods basic prefix naming:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add, prefix for Add sth."),(0,o.kt)("li",{parentName:"ul"},"remove, prefix for Remove sth."),(0,o.kt)("li",{parentName:"ul"},"update, prefix for Update sth."),(0,o.kt)("li",{parentName:"ul"},"get, prefix for Get sth."),(0,o.kt)("li",{parentName:"ul"},"set, prefix for Set sth."),(0,o.kt)("li",{parentName:"ul"},"create, perfix for create sth."),(0,o.kt)("li",{parentName:"ul"},"on, prefix for listen to the event."),(0,o.kt)("li",{parentName:"ul"},"find, prefix for Find sth."),(0,o.kt)("li",{parentName:"ul"},"move, prefix for Move sth."),(0,o.kt)("li",{parentName:"ul"},"append, prefix for Append sth."),(0,o.kt)("li",{parentName:"ul"},"toggle, prefix for Toggle sth.")),(0,o.kt)("h2",{id:"git-work-flow"},"Git Work Flow"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow/"},"Branch-based Workflow")),(0,o.kt)("h3",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ARIA: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"},"Accessible Rich Internet Applications")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/api/get-started/your-first-extension"},"VS Code Extension"),(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/api"},"https://code.visualstudio.com/api"),(0,o.kt)("a",{parentName:"li",href:"https://medium.com/dev-genius/reactjs-manage-your-state-nicely-with-context-1ed3090a6a46"},"https://medium.com/dev-genius/reactjs-manage-your-state-nicely-with-context-1ed3090a6a46"))))}m.isMDXComponent=!0}}]);