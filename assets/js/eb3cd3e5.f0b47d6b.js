"use strict";(self.webpackChunkelegantota_docs=self.webpackChunkelegantota_docs||[]).push([[784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"Firmware Version",sidebar_label:"Firmware Version (Pro)",sidebar_position:10},o=void 0,s={unversionedId:"firmware-version",id:"firmware-version",title:"Firmware Version",description:"This feature is only available in ElegantOTA Pro.",source:"@site/docs/firmware-version.md",sourceDirName:".",slug:"/firmware-version",permalink:"/firmware-version",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Firmware Version",sidebar_label:"Firmware Version (Pro)",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Hardware ID (Pro)",permalink:"/hardware-id"},next:{title:"Branding (Pro)",permalink:"/branding"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Example Usage:",id:"example-usage",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Best Practices",id:"best-practices",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"pro-label"},(0,a.kt)("i",null,(0,a.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is only available in ",(0,a.kt)("a",{target:"_blank",style:{color:"red"},href:"https://elegantota.pro"},"ElegantOTA Pro"),"."))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The Firmware Version feature in ElegantOTA allows you to specify and manage the version of the firmware running on your Internet of Things (IoT) devices. By setting a firmware version, you can easily track and control the software running on your devices, making it simpler to perform updates, monitor compatibility, and manage your IoT ecosystem effectively."),(0,a.kt)("p",null,"You can set the Firmware Version for your device using the ",(0,a.kt)("inlineCode",{parentName:"p"},'ElegantOTA.setFWVersion("version");')," function."),(0,a.kt)("h3",{id:"example-usage"},"Example Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <ElegantOTA.h>\n\nvoid setup() {\n  // Initialize your hardware and other configurations here\n\n  // Set the Firmware Version\n  ElegantOTA.setFWVersion("v1.0.0");\n\n  // Additional setup code\n}\n\nvoid loop() {\n  // Your main loop code here\n}\n')),(0,a.kt)("p",null,"In the above example, the ",(0,a.kt)("inlineCode",{parentName:"p"},'ElegantOTA.setFWVersion("v1.0.0");'),' function call assigns the firmware version "v1.0.0" to the device.'),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"The Firmware Version feature can be beneficial in various scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Firmware Updates"),": When new firmware versions become available, the Firmware Version identifier helps you check if an update is necessary. It also allows you to verify that devices have received the correct update.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Compatibility"),": By knowing the firmware version of each device, you can ensure that all components of your IoT network are compatible. This is especially important when devices communicate or interact with each other.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Historical Tracking"),": You can maintain a history of firmware versions installed on each device, which can be useful for troubleshooting issues or understanding the evolution of your firmware.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Remote Diagnostics"),": When diagnosing issues remotely, having access to the firmware version can help you identify potential problems related to specific software releases."))),(0,a.kt)("h2",{id:"best-practices"},"Best Practices"),(0,a.kt)("p",null,"To make the most of the Firmware Version feature, consider the following best practices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Follow a consistent versioning scheme for your firmware, such as Semantic Versioning (SemVer), to ensure clarity and compatibility tracking.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the firmware version during the device's initialization phase, such as in the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup()")," function, to guarantee that it accurately reflects the installed firmware.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When updating firmware, always ensure that the new version is correctly set using ",(0,a.kt)("inlineCode",{parentName:"p"},"ElegantOTA.setFWVersion()")," to maintain accurate version information."))))}m.isMDXComponent=!0}}]);