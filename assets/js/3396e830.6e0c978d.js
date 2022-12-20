"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77525],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61993:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Workbench",sidebar_label:"Workbench"},s=void 0,p={unversionedId:"guides/extend-workbench",id:"version-0.9.0-beta.2/guides/extend-workbench",title:"Workbench",description:"Workbench is the most core partial in Molecule, we imitate the wonderful design of VSCode Workbench based on React, and provide a simple Workbench UI to support extend, by which it could be fully customized.",source:"@site/versioned_docs/version-0.9.0-beta.2/guides/extend-workbench.md",sourceDirName:"guides",slug:"/guides/extend-workbench",permalink:"/molecule/docs/0.9.0-beta.2/guides/extend-workbench",draft:!1,editUrl:"https://github.com/DTStack/molecule/edit/main/website/versioned_docs/version-0.9.0-beta.2/guides/extend-workbench.md",tags:[],version:"0.9.0-beta.2",frontMatter:{title:"Workbench",sidebar_label:"Workbench"},sidebar:"docs",previous:{title:"Extension",permalink:"/molecule/docs/0.9.0-beta.2/guides/extension"},next:{title:"Built-in Parts",permalink:"/molecule/docs/0.9.0-beta.2/guides/extend-builtin-ui"}},c={},m=[{value:"Core Conception",id:"core-conception",level:2},{value:"Extend Workbench",id:"extend-workbench",level:2},{value:"ActivityBar",id:"activitybar",level:3},{value:"SideBar",id:"sidebar",level:3},{value:"Editor",id:"editor",level:3},{value:"Panel",id:"panel",level:3},{value:"StatusBar",id:"statusbar",level:3},{value:"MenuBar",id:"menubar",level:3}],d={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../api/namespaces/molecule#workbench"},"Workbench")," is the most core partial in Molecule, we imitate the wonderful design of ",(0,i.kt)("strong",{parentName:"p"},"VSCode Workbench")," based on ",(0,i.kt)("strong",{parentName:"p"},"React"),", and provide a simple ",(0,i.kt)("strong",{parentName:"p"},"Workbench UI")," to support extend, by which it could be fully ",(0,i.kt)("strong",{parentName:"p"},"customized"),"."),(0,i.kt)("h2",{id:"core-conception"},"Core Conception"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"molecule",src:n(99442).Z,width:"1169",height:"655"})),(0,i.kt)("p",null,"We divide the Workbench UI into ",(0,i.kt)("strong",{parentName:"p"},"six")," modules, including ",(0,i.kt)("a",{parentName:"p",href:"#menubar"},"MenuBar"),", ",(0,i.kt)("a",{parentName:"p",href:"#activitybar"},"ActivityBar"),", ",(0,i.kt)("a",{parentName:"p",href:"#sidebar"},"Sidebar"),", ",(0,i.kt)("a",{parentName:"p",href:"#editor"},"Editor"),", ",(0,i.kt)("a",{parentName:"p",href:"#panel"},"Panel"),", ",(0,i.kt)("a",{parentName:"p",href:"#statusbar"},"StatusBar"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MenuBar"),": For managing the menu bar in workbench, like ",(0,i.kt)("strong",{parentName:"li"},"File"),", ",(0,i.kt)("strong",{parentName:"li"},"Edit"),", ",(0,i.kt)("strong",{parentName:"li"},"Selection"),", ",(0,i.kt)("strong",{parentName:"li"},"View")," and so on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ActivityBar"),": For showing the ",(0,i.kt)("strong",{parentName:"li"},"active bar")," in workbench, like ",(0,i.kt)("a",{parentName:"li",href:"./extend-builtin-ui#explorer"},"Explorer"),", ",(0,i.kt)("a",{parentName:"li",href:"./extend-builtin-ui#search"},"Search")," and other bars. It's noticed that the ActivityBar should ",(0,i.kt)("strong",{parentName:"li"},"cooperate")," with other modules in general. For example, the Sidebar is going to show the correspond panel when switching the ActivityBar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sidebar"),": In general, it's as a significant navigator part placed in the left of workbench like the built-in ",(0,i.kt)("a",{parentName:"li",href:"./extend-builtin-ui#explorer"},"Explorer"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Editor"),": For editing some data in tabs. In general, we can ",(0,i.kt)("strong",{parentName:"li"},"edit the codes")," in Editor. Or you can render your own editor UI. Molecule will have an ",(0,i.kt)("strong",{parentName:"li"},"Entry")," in ",(0,i.kt)("strong",{parentName:"li"},"Editor")," when without the tabs. Obviously, the Entry Page supports ",(0,i.kt)("strong",{parentName:"li"},"customized"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Panel"),": In general, it's placed on the below of the Editor for rendering some panels like ",(0,i.kt)("a",{parentName:"li",href:"./extend-builtin-ui#problems"},"Problems"),", ",(0,i.kt)("a",{parentName:"li",href:"extend-builtin-ui#output"},"Output"),", ",(0,i.kt)("strong",{parentName:"li"},"Terminal"),", and so on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"StatusBar"),": It's placed on the bottom of Workbench for rendering the ",(0,i.kt)("strong",{parentName:"li"},"status infomations"),". For example, the ",(0,i.kt)("strong",{parentName:"li"},"Language")," informations of current file in Editor, or the informations about the ",(0,i.kt)("strong",{parentName:"li"},"Columns")," and ",(0,i.kt)("strong",{parentName:"li"},"Line")," of cursor, or the ",(0,i.kt)("a",{parentName:"li",href:"./extend-builtin-ui#notification"},"Notification"),".")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is do not real function with the isolated module, which is only for pure rendering. If you want to achieve some specific commerial scenarios, you should integrate one with other modules, like integrating ",(0,i.kt)("strong",{parentName:"p"},"ActivityBar")," with ",(0,i.kt)("strong",{parentName:"p"},"Sidebar"),", or intergrating ",(0,i.kt)("strong",{parentName:"p"},"FolderTree")," with ",(0,i.kt)("strong",{parentName:"p"},"Editor")," and so on."),(0,i.kt)("p",{parentName:"div"},"Besides, for reducing the work of developing in UI, we have a majority of ",(0,i.kt)("a",{parentName:"p",href:"./extend-builtin-ui"},(0,i.kt)("strong",{parentName:"a"},"built-in components")),", refer to ",(0,i.kt)("a",{parentName:"p",href:"./extend-builtin-ui"},"\u53c2\u8003")," about the detail usage."))),(0,i.kt)("h2",{id:"extend-workbench"},"Extend Workbench"),(0,i.kt)("p",null,"We will thoroughly indicate how to extend ",(0,i.kt)("strong",{parentName:"p"},"Workbench")," via ",(0,i.kt)("strong",{parentName:"p"},"Extension")," and the built-in ",(0,i.kt)("strong",{parentName:"p"},"API"),"s in this part."),(0,i.kt)("p",null,"To begin with a scenario:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Extend Workbench",src:n(82841).Z,width:"2880",height:"1642"})),(0,i.kt)("p",null,"As the picture indicated, we imitate a simple UI for ",(0,i.kt)("strong",{parentName:"p"},"managing databse"),". In this scenario, we will respectively extend the six modules, including the ",(0,i.kt)("a",{parentName:"p",href:"#menubar"},"MenuBar"),", ",(0,i.kt)("a",{parentName:"p",href:"#activitybar"},"ActivityBar"),", ",(0,i.kt)("a",{parentName:"p",href:"#sidebar"},"Sidebar"),", ",(0,i.kt)("a",{parentName:"p",href:"#editor"},"Editor"),", ",(0,i.kt)("a",{parentName:"p",href:"#panel"},"Panel"),", ",(0,i.kt)("a",{parentName:"p",href:"#statusbar"},"StatusBar"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The code demos in this part are all based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," in ",(0,i.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start"),"."))),(0,i.kt)("p",null,"First of all, we create a directory named ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSource")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions"),", which for storing some code related to this extension. And create the files named ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"base.tsx"),", for declaring the ",(0,i.kt)("strong",{parentName:"p"},"entry of extension")," and defining the ",(0,i.kt)("strong",{parentName:"p"},"public code"),". The directory is like following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"src/extensions/dataSource\n\u251c\u2500\u2500 base.tsx\n\u2514\u2500\u2500 index.ts\n")),(0,i.kt)("p",null,"The code in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," is following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/extensions/dataSource/index.ts"',title:'"src/extensions/dataSource/index.ts"'},"export class DataSourceExtension implements IExtension {\n    id: string = DATA_SOURCE_ID;\n    name: string = 'Data Source';\n\n    activate(extensionCtx: IExtensionService): void {\n        this.initUI();\n    }\n\n    initUI() {\n        molecule.sidebar.add(dataSourceSidebar);\n        molecule.activityBar.add(dataSourceActivityBar);\n    }\n\n    dispose(extensionCtx: IExtensionService): void {\n        molecule.sidebar.remove(dataSourceSidebar.id);\n        molecule.activityBar.remove(dataSourceActivityBar.id);\n    }\n}\n")),(0,i.kt)("p",null,"As the above, we delcare a ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSourceExtension")," implemented the ",(0,i.kt)("inlineCode",{parentName:"p"},"IExtension"),", and in the ",(0,i.kt)("inlineCode",{parentName:"p"},"initUI")," method, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"molecule.sidebar.add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"molecule.activityBar.add")," respectively to add a new UI component. And in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispose")," method, we ",(0,i.kt)("strong",{parentName:"p"},"remove")," the UI component added in ",(0,i.kt)("inlineCode",{parentName:"p"},"initUI"),"."),(0,i.kt)("p",null,"After that, let's see how to extend the ActivityBar."),(0,i.kt)("h3",{id:"activitybar"},(0,i.kt)("a",{parentName:"h3",href:"../api/interfaces/molecule.IActivityBarService"},"ActivityBar")),(0,i.kt)("p",null,"We can add activity bar through the ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IActivityBarService#add"},(0,i.kt)("inlineCode",{parentName:"a"},"molecule.activityBar.add"))," method. First, we define an ",(0,i.kt)("a",{parentName:"p",href:"../api/namespaces/molecule#iactivitybaritem"},(0,i.kt)("inlineCode",{parentName:"a"},"IActivityBarItem"))," object in ",(0,i.kt)("inlineCode",{parentName:"p"},"base.tsx"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/dataSource/base.tsx"',title:'"src/extensions/dataSource/base.tsx"'},"export const DATA_SOURCE_ID = 'DataSource';\n\nexport const dataSourceActivityBar: IActivityBarItem = {\n    id: DATA_SOURCE_ID,\n    sortIndex: 1, // sorting the dataSource to the first position\n    name: 'Data Source',\n    title: 'Data Source Management',\n    icon: 'database',\n};\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceActivityBar")," is ",(0,i.kt)("strong",{parentName:"p"},"DataSource"),", whose ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," is ",(0,i.kt)("strong",{parentName:"p"},"databse"),", and define a ",(0,i.kt)("inlineCode",{parentName:"p"},"sortIndex")," property for adjusting the order of ",(0,i.kt)("strong",{parentName:"p"},"activityBar"),"."),(0,i.kt)("h3",{id:"sidebar"},(0,i.kt)("a",{parentName:"h3",href:"../api/interfaces/molecule.ISidebarService"},"SideBar")),(0,i.kt)("p",null,"Same as ActivityBar, we declare an ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.ISidebarPane"},(0,i.kt)("inlineCode",{parentName:"a"},"ISidebarPane"))," object named ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceSidebar")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"base.tsx"),", and use the ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ISidebarService#add"},(0,i.kt)("inlineCode",{parentName:"a"},"molecule.sidebar.add"))," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/dataSource/base.tsx"',title:'"src/extensions/dataSource/base.tsx"'},"import DataSourceView from '../../views/dataSource/dataSourceSidebar';\n\nexport const DATA_SOURCE_ID = 'DataSource';\n\nexport const dataSourceSidebar: ISidebarPane = {\n    id: DATA_SOURCE_ID,\n    title: 'DataSourcePane',\n    render: () => {\n        return <DataSourceView />;\n    },\n};\n")),(0,i.kt)("p",null,"The differencies with the ",(0,i.kt)("inlineCode",{parentName:"p"},"IActivityBarItem")," object is that we define a ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," function in Sidebar, which should return a ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactNode")," component. The ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSourceView")," component is a ",(0,i.kt)("strong",{parentName:"p"},"business component")," defined by our business."),(0,i.kt)("p",null,"The complete example can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/dataSource"},"molecule-examples")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The id property of ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceSidebar")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceActivityBar")," in example are both used the ",(0,i.kt)("inlineCode",{parentName:"p"},"DATA_SOURCE_ID"),", which mainly for rendering the content of ",(0,i.kt)("inlineCode",{parentName:"p"},"dataSourceSidebar")," correctly in ",(0,i.kt)("strong",{parentName:"p"},"Sidebar")," when switching ",(0,i.kt)("strong",{parentName:"p"},"ActivityBar"),"."))),(0,i.kt)("h3",{id:"editor"},(0,i.kt)("a",{parentName:"h3",href:"../api/interfaces/molecule.IEditorService"},"Editor")),(0,i.kt)("p",null,"As the picture indicted, we open a tab named ",(0,i.kt)("strong",{parentName:"p"},"Create Data Source")," in Editor, but the content of this tab is a form for adding database. Same as above, we declare an ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IEditorTab"},"IEditorTab")," object, and open it via ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IEditorService#open"},"molecule.editor.open"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/dataSource/base.tsx"',title:'"src/extensions/dataSource/base.tsx"'},"import CreateDataSourceView from '../../views/dataSource/createDataSource';\n\nexport const createDataSourceTab: IEditorTab = {\n    id: DATA_SOURCE_ID,\n    name: 'Create Data Source',\n    renderPane: () => {\n        return <CreateDataSourceView />;\n    },\n};\n\nexport function openCreateDataSourceView() {\n    molecule.editor.open(createDataSourceTab);\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"renderPane")," belonged to ",(0,i.kt)("inlineCode",{parentName:"p"},"createDataSourceTab")," is a customize ",(0,i.kt)("strong",{parentName:"p"},"render function")," for ",(0,i.kt)("strong",{parentName:"p"},"tab content"),", which returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateDataSourceView")," component here. It's noticed that the default render of Editor is a ",(0,i.kt)("strong",{parentName:"p"},"monaco-editor")," view. If we want to modify a ",(0,i.kt)("strong",{parentName:"p"},"SQL")," text, we can execute like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"molecule.editor.open({\n    id: 'test',\n    name: 'test.sql',\n    data: {\n        value: 'select * from test',\n        language: 'sql',\n    },\n});\n")),(0,i.kt)("p",null,"We did't set the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderPane")," function here. You can refer to ",(0,i.kt)("a",{parentName:"p",href:"../the-first-extension"},"The first extension")," about how to open a code language."),(0,i.kt)("h3",{id:"panel"},(0,i.kt)("a",{parentName:"h3",href:"../api/interfaces/molecule.IPanelService"},"Panel")),(0,i.kt)("p",null,"As for Panel, we take a simple ",(0,i.kt)("strong",{parentName:"p"},"Terminal")," as example. We can create a folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"terminal")," inside ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," for distinguishing the ",(0,i.kt)("strong",{parentName:"p"},"database")," example above."),(0,i.kt)("p",null,"First, we declare an ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IEditorTab"},"IPanelItem")," object named ",(0,i.kt)("inlineCode",{parentName:"p"},"terminalPanel"),";"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/terminal/base.tsx"',title:'"src/extensions/terminal/base.tsx"'},"import { localize } from '@dtinsight/molecule/esm/i18n/localize';\nimport { IPanelItem } from '@dtinsight/molecule/esm/model';\nimport { Terminal } from '../../views/terminal/terminalPanelView';\n\nexport const TERMINAL_ID = 'terminalID';\n\nexport const terminalPanel: IPanelItem = {\n    id: TERMINAL_ID,\n    name: localize('demo.terminal', 'Terminal'),\n    title: 'Terminal',\n    sortIndex: 1,\n    renderPane: () => {\n        return <Terminal />;\n    },\n};\n")),(0,i.kt)("p",null,"And then, we declare an implemented object named ",(0,i.kt)("inlineCode",{parentName:"p"},"TerminalExtension")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/extensions/terminal/base.tsx"',title:'"src/extensions/terminal/base.tsx"'},"import molecule from '@dtinsight/molecule';\nimport { IExtension } from '@dtinsight/molecule/esm/model/extension';\nimport { IExtensionService } from '@dtinsight/molecule/esm/services';\nimport { terminalPanel } from './base';\n\nexport class TerminalExtension implements IExtension {\n    id: string = 'Terminal';\n    name: string = 'Terminal';\n\n    activate(extensionCtx: IExtensionService): void {\n        molecule.panel.add(terminalPanel);\n    }\n\n    dispose(extensionCtx: IExtensionService): void {\n        molecule.panel.remove(terminalPanel.id);\n    }\n}\n")),(0,i.kt)("p",null,"We can add ",(0,i.kt)("inlineCode",{parentName:"p"},"terminalPanel")," into Panel view via ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IPanelService#add"},(0,i.kt)("inlineCode",{parentName:"a"},"molecule.panel.add"))," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"activate")," method."),(0,i.kt)("p",null,"The complete example can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/terminal"},"Terminal"),"."),(0,i.kt)("h3",{id:"statusbar"},(0,i.kt)("a",{parentName:"h3",href:"../api/interfaces/molecule.IStatusBarService"},"StatusBar")),(0,i.kt)("p",null,"The whole ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IStatusBarService"},"StatusBar")," is just used for operating on the ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IStatusBarItem"},"IStatusBarItem")," data like ",(0,i.kt)("strong",{parentName:"p"},"creating, updating, deleting"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { IStatusBarItem, Float } from '@dtinsight/molecule/esm/model';\n\nconst languageBar: IStatusBarItem = {\n    id: 'languageBar',\n    name: 'Javascript',\n};\n// Add language bar to the StatusBar right\nmolecule.statusBar.add(languageBar, Float.right); // Float.left/Float.right\n\n// Get the language bar\nconst existLanguageBar = molecule.statusBar.getStatusBarItem(\n    languageBar.id,\n    Float.right\n);\n\n// Update the language bar\nmolecule.statusBar.update({ ...existLanguageBar, name: 'HTML' }, Float.right);\n\n// Remove the language bar which the id is `languageBar`\nmolecule.statusBar.remove(languageBar.id, Float.right);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Float.left/Float.right")," in code is used for setting the rendering position in the ",(0,i.kt)("strong",{parentName:"p"},"left")," or ",(0,i.kt)("strong",{parentName:"p"},"right")," of status bar."),(0,i.kt)("p",null,"We can ",(0,i.kt)("strong",{parentName:"p"},"customize Statusbar"),"'s content by ",(0,i.kt)("inlineCode",{parentName:"p"},"render")," function, such as ",(0,i.kt)("a",{parentName:"p",href:"./icons"},(0,i.kt)("strong",{parentName:"a"},"icons")),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { IStatusBarItem, Float } from '@dtinsight/molecule/esm/model';\n\nconst languageBar: IStatusBarItem = {\n    id: 'languageBar',\n    name: 'Javascript',\n    render: () => <Icon onClick={onClick} type=\"bell\" />,\n};\n")),(0,i.kt)("h3",{id:"menubar"},(0,i.kt)("a",{parentName:"h3",href:"../api/interfaces/molecule.IMenuBarService"},"MenuBar")),(0,i.kt)("p",null,"We are integrate basic ",(0,i.kt)("strong",{parentName:"p"},"File"),", ",(0,i.kt)("strong",{parentName:"p"},"Edit"),", ",(0,i.kt)("strong",{parentName:"p"},"Selection"),", ",(0,i.kt)("strong",{parentName:"p"},"View"),", ",(0,i.kt)("strong",{parentName:"p"},"Run"),", and ",(0,i.kt)("strong",{parentName:"p"},"Help")," menus in ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IMenuBarService"},"MenuBar)")," as default. In general, we can extend something based on these menus directly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"activate(extensionCtx: IExtensionService): void {\n    molecule.menuBar.append({\n        id: 'menu.createDataSource',\n        name: localize('menu.createDataSource', 'Create Data Source'),\n        icon: ''\n    }, 'File');\n}\ndispose(extensionCtx: IExtensionService): void {\n    // Remove the menuItem which name is `menu.createDataSource`\n    molecule.menuBar.remove('menu.createDataSource');\n}\n")),(0,i.kt)("p",null,"As the code indicated above, we add a new menu item named ",(0,i.kt)("strong",{parentName:"p"},"Create Data Source")," inside ",(0,i.kt)("strong",{parentName:"p"},"File"),". By the way, we can remove it via the ",(0,i.kt)("inlineCode",{parentName:"p"},"molecule.menuBar.remove")," method. If we want to reset all data in MenuBar, we can use the ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IMenuBarService#setmenus"},(0,i.kt)("inlineCode",{parentName:"a"},"molecule.menuBar.setMenus()")," ")," method."),(0,i.kt)("p",null,"The layout of Menubar is in ",(0,i.kt)("inlineCode",{parentName:"p"},"vertical")," mode as default. We can change it to ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontal")," mode by click ",(0,i.kt)("strong",{parentName:"p"},"View"),"-> ",(0,i.kt)("strong",{parentName:"p"},"Appearance"),"-> ",(0,i.kt)("strong",{parentName:"p"},"Menu Bar Horizontal Mode"),". In ",(0,i.kt)("inlineCode",{parentName:"p"},"horizontal")," mode, we can set the logo in MenuBar by the logo property of MenuBar component."),(0,i.kt)("p",null,"The more detail about Menubar, please refer to ",(0,i.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IMenuBarService"},"MenuBar API"),"."))}u.isMDXComponent=!0},82841:function(e,t,n){t.Z=n.p+"assets/images/extend-workbench-8bb66bc475d969d9a3f488dc48f0f90f.png"},99442:function(e,t,n){t.Z=n.p+"assets/images/workbench-ui-7b35d92826a4711f2cdf36312b3e2173.png"}}]);