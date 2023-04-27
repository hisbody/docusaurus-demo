"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:5},i="\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9",s={unversionedId:"tutorial-basics/deploy-your-site",id:"tutorial-basics/deploy-your-site",title:"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9",description:"Docusaurus\u662f\u4e00\u4e2a\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668(\u4e5f\u79f0\u4e3aJamstack)\u3002",source:"@site/docs/tutorial-basics/deploy-your-site.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/deploy-your-site",permalink:"/docs/tutorial-basics/deploy-your-site",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/deploy-your-site.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown \u529f\u80fd",permalink:"/docs/tutorial-basics/markdown-features"},next:{title:"\u606d\u559c\u53d1\u8d22",permalink:"/docs/tutorial-basics/congratulations"}},l={},p=[{value:"\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9",id:"\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9",level:2},{value:"Build your site",id:"build-your-site",level:2},{value:"\u90e8\u7f72\u60a8\u7684\u7ad9\u70b9",id:"\u90e8\u7f72\u60a8\u7684\u7ad9\u70b9",level:2},{value:"Deploy your site",id:"deploy-your-site-1",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9"},"\u90e8\u7f72\u4f60\u7684\u7f51\u7ad9"),(0,n.kt)("h1",{id:"deploy-your-site"},"Deploy your site"),(0,n.kt)("p",null,"Docusaurus\u662f\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668"),"(\u4e5f\u79f0\u4e3a",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","Docusaurus is a ",(0,n.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,n.kt)("p",null,"\u5b83\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9\u4f5c\u4e3a\u7b80\u5355\u7684\u9759\u6001HTML, JavaScript\u548cCSS\u6587\u4ef6",(0,n.kt)("strong",{parentName:"p"},"\u3002",(0,n.kt)("br",{parentName:"strong"}),"It builds your site as simple "),"static HTML, JavaScript and CSS files**."),(0,n.kt)("h2",{id:"\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9"},"\u5efa\u7acb\u4f60\u7684\u7f51\u7ad9"),(0,n.kt)("h2",{id:"build-your-site"},"Build your site"),(0,n.kt)("p",null,"\u5efa\u7acb\u60a8\u7684\u7f51\u7ad9",(0,n.kt)("strong",{parentName:"p"},"\u7528\u4e8e\u751f\u4ea7\u73af\u5883"),":\nBuild your site ",(0,n.kt)("strong",{parentName:"p"},"for production"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("p",null,"\u9759\u6001\u6587\u4ef6\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u4e2d\u751f\u6210\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","The static files are generated in the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,n.kt)("h2",{id:"\u90e8\u7f72\u60a8\u7684\u7ad9\u70b9"},"\u90e8\u7f72\u60a8\u7684\u7ad9\u70b9"),(0,n.kt)("h2",{id:"deploy-your-site-1"},"Deploy your site"),(0,n.kt)("p",null,"\u5728\u672c\u5730\u6d4b\u8bd5\u60a8\u7684\u751f\u4ea7\u6784\u5efa:",(0,n.kt)("br",{parentName:"p"}),"\n","Test your production build locally:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u73b0\u5728\u4f4d\u4e8e",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"\u3002\nThe ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),"."),(0,n.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u8f7b\u677e\u5730\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"build"),"\u6587\u4ef6\u5939\u4ee5",(0,n.kt)("strong",{parentName:"p"},"\u514d\u8d39"),"\u6216\u975e\u5e38\u4f4e\u7684\u6210\u672c\u90e8\u7f72\u5728",(0,n.kt)("strong",{parentName:"p"},"\u51e0\u4e4e\u4efb\u4f55\u5730\u65b9"),"\uff0c(\u9605\u8bfb",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"\u90e8\u7f72\u6307\u5357")),")\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","You can now deploy the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,n.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,n.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}d.isMDXComponent=!0}}]);