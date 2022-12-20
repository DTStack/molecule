"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5330],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52289:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"\u8bbe\u7f6e\uff08Settings\uff09",sidebar_label:"\u8bbe\u7f6e"},l=void 0,p={unversionedId:"guides/extend-settings",id:"version-1.x/guides/extend-settings",title:"\u8bbe\u7f6e\uff08Settings\uff09",description:"Molecule \u5185\u7f6e\u4e86\u4e00\u4e9b\u57fa\u672c\u8bbe\u7f6e\u9879\uff0c\u4f8b\u5982\u7f16\u8f91\u5668\uff08Monaco Editor\uff09\u7684\u57fa\u672c\u8bbe\u7f6e\u3001\u989c\u8272\u4e3b\u9898\uff08colorTheme)\u3001\u672c\u5730\u5316\u7684\u8bed\u8a00\uff08locale) \u7b49\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/guides/extend-settings.md",sourceDirName:"guides",slug:"/guides/extend-settings",permalink:"/molecule/zh-CN/docs/guides/extend-settings",draft:!1,editUrl:"https://github.com/DTStack/molecule/edit/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.x/guides/extend-settings.md",tags:[],version:"1.x",frontMatter:{title:"\u8bbe\u7f6e\uff08Settings\uff09",sidebar_label:"\u8bbe\u7f6e"},sidebar:"docs",previous:{title:"\u56fd\u9645\u5316",permalink:"/molecule/zh-CN/docs/guides/extend-locales"},next:{title:"\u56fe\u6807",permalink:"/molecule/zh-CN/docs/guides/icons"}},c={},m=[{value:"\u6253\u5f00\u8bbe\u7f6e",id:"\u6253\u5f00\u8bbe\u7f6e",level:2},{value:"\u8bbe\u7f6e\u670d\u52a1\uff08SettingsService\uff09\u5bf9\u8c61",id:"\u8bbe\u7f6e\u670d\u52a1settingsservice\u5bf9\u8c61",level:2},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u9879",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u9879",level:2}],d={toc:m};function u(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Molecule \u5185\u7f6e\u4e86\u4e00\u4e9b",(0,r.kt)("strong",{parentName:"p"},"\u57fa\u672c\u8bbe\u7f6e\u9879"),"\uff0c\u4f8b\u5982",(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u5668\uff08Monaco Editor\uff09"),"\u7684\u57fa\u672c\u8bbe\u7f6e\u3001",(0,r.kt)("strong",{parentName:"p"},"\u989c\u8272\u4e3b\u9898\uff08colorTheme)"),"\u3001\u672c",(0,r.kt)("strong",{parentName:"p"},"\u5730\u5316\u7684\u8bed\u8a00\uff08locale)")," \u7b49\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Open Settings",src:n(62479).Z,width:"2878",height:"1644"})),(0,r.kt)("p",null,"\u4e0a\u56fe\u4e2d\uff0c\u663e\u793a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"colorTheme"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"editor.renderWhitespace"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"editor.tabSize"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"editor.fontSize"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," \u8fd9\u4e9b\u914d\u7f6e\u9879\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\uff0c\u5728\u7ebf\u4fee\u6539\u3002\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"colorTheme")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," \u5219\u9700\u8981\u770b\u5f53\u524d\u6269\u5c55\u7684\u652f\u6301\u60c5\u51b5\u3002"),(0,r.kt)("p",null,"Molecule \u9664\u4e86\u53ef\u4ee5\u5728\u7ebf\u4fee\u6539\u914d\u7f6e\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c \u652f\u6301\u5f00\u53d1\u8005\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/molecule/zh-CN/docs/guides/extension"},"\u6269\u5c55"),(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49"),"\u914d\u7f6e\u9879\u3002"),(0,r.kt)("h2",{id:"\u6253\u5f00\u8bbe\u7f6e"},"\u6253\u5f00\u8bbe\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u79cd\u3001\u6700\u5feb\u6377\u7684\u65b9\u5f0f\uff0c\u5c31\u662f\u4f7f\u7528\u5feb\u6377\u952e ",(0,r.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + ,"),"\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u79cd\u3001\u901a\u8fc7",(0,r.kt)("strong",{parentName:"p"},"\u5feb\u901f\u8bbf\u95ee\uff08QuickAccess) "),"\u9762\u677f\uff0c\u901a\u8fc7\u5feb\u6377\u952e",(0,r.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + Shift + P")," \u6253\u5f00\u8bbf\u95ee\u9762\u677f\uff0c\u641c\u7d22 ",(0,r.kt)("strong",{parentName:"p"},"settings")," \u5373\u53ef\uff1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6700\u540e\u4e00\u79cd\u3001\u5c31\u662f\u901a\u8fc7\u8bbf\u95ee ",(0,r.kt)("strong",{parentName:"p"},"ActivityBar")," \u4e0a\u7684",(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u83dc\u5355"),"\u3002"))),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u670d\u52a1settingsservice\u5bf9\u8c61"},"\u8bbe\u7f6e\u670d\u52a1\uff08SettingsService\uff09\u5bf9\u8c61"),(0,r.kt)("p",null,"Molecule \u5185\u7f6e\u4e86",(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ISettingsService"},"\u8bbe\u7f6e\u670d\u52a1\uff08SettingsService\uff09"),"\u5bf9\u8c61\uff0c\u9664\u4e86\u6269\u5c55\u8bbe\u7f6e\u9879\u4ee5\u5916\uff0c\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5229\u7528\u5b83\u505a\u4e00\u4e9b\u57fa\u672c\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Get the setting configuration object\nmolecule.settings.getSettings();\n\n// Update settings configuration\nmolecule.settings.update(settings: ISettings);\n\n")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e\u9879"},"\u81ea\u5b9a\u4e49\u914d\u7f6e\u9879"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u672c\u6587\u5185\u5bb9\u4e2d\u7684\u6240\u6709\u4ee3\u7801\uff0c\u90fd\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start")," \u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," \u9879\u76ee\u4e3a\u57fa\u7840\u6f14\u793a\u3002"))),(0,r.kt)("p",null,"Molecule \u652f\u6301\u5f00\u53d1\u8005\u6269\u5c55\u5f53\u524d\u7684",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u9879"),"\uff0c\u4ee5\u6ee1\u8db3\u6211\u4eec",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49"),"\u7684\u8bc9\u6c42\u3002\u8ba9\u6211\u4eec\u4e00\u8d77\u770b\u4e00\u4e2a\u4f8b\u5b50!"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u589e\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"project.id")," \u5b57\u6bb5\uff0c\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "colorTheme": "Default Dark+",\n    "editor.renderWhitespace": "none",\n    "editor.tabSize": 4,\n    "editor.fontSize": 12,\n    "locale": "zh-CN",\n    "project.id": 1\n}\n')),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5148\u5b9a\u4e49\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"SettingsExtension")," \u5bf9\u8c61\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"customSettings")," \u5bf9\u8c61\u4e0b\uff0c\u5b9a\u4e49\u6211\u4eec\u8981\u6dfb\u52a0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," \u6269\u5c55\u5b57\u6bb5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const customSettings = {\n    project: {\n        id: '1',\n    },\n};\nexport class SettingsExtension implements IExtension {\n    id: string = 'ExtendSettings';\n    name: string = 'Extend Settings';\n\n    appendSettingsItems() {\n        // Append the extended items\n        molecule.settings.append(customSettings);\n    }\n\n    handleSettingsChange() {\n        const panel = molecule.panel;\n        // Listen to the Settings change\n        molecule.settings.onChangeSettings((settings: any) => {\n            alert('Settings changed:' + settings.project?.id);\n            // do something\n        });\n    }\n\n    activate(extensionCtx: IExtensionService): void {\n        this.appendSettingsItems();\n        this.handleSettingsChange();\n    }\n\n    dispose(extensionCtx: IExtensionService): void {}\n}\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5229\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"onChangeSettings")," \u65b9\u6cd5",(0,r.kt)("strong",{parentName:"p"},"\u76d1\u542c\u914d\u7f6e\u9879"),"\u7684\u53d8\u5316\uff0c\u7136\u540e\u53bb\u505a\u76f8\u5e94\u7684\u5904\u7406\u3002\u5b8c\u6574\u793a\u4f8b\u8bf7\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/extensions/settings"},"molecule-example"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u76ee\u524d Molecule \u5e76\u672a\u7f13\u5b58\u7528\u6237\u4fee\u6539\u7684\u8bbe\u7f6e\uff0c\u6240\u6709\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u540e\uff0c\u8fd9\u4e9b\u914d\u7f6e\u4fe1\u606f\u5c31\u597d\u4e22\u5931\u3002\u5982\u679c\u8981\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ef\u4ee5\u81ea\u5df1\u5229\u7528 localeStorage \u4e4b\u7c7b\u7684\u65b9\u6848\uff0c\u5b58\u50a8\u7528\u6237\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u7136\u540e\u5229\u7528 ",(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.ISettingsService"},"SettingsService")," \u53bb\u66f4\u65b0\u914d\u7f6e\u4fe1\u606f\u3002"))))}u.isMDXComponent=!0},62479:function(e,t,n){t.Z=n.p+"assets/images/extend-settings-03a739abf5a18d390d0450ac5e75f59b.png"}}]);