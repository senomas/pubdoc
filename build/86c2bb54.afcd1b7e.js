(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return a})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return l}));var t=n(3),o=n(7),c=(n(0),n(86)),a={id:"docker",title:"Docker Snippets",sidebar:"Snippets"},i={unversionedId:"snippets/docker",id:"snippets/docker",isDocsHomePage:!1,title:"Docker Snippets",description:"Clean up",source:"@site/docs/snippets/docker.md",slug:"/snippets/docker",permalink:"/docs/snippets/docker",version:"current",sidebar:"sidebar",previous:{title:"Tools",permalink:"/docs/tool"},next:{title:"GIT Snippets",permalink:"/docs/snippets/git"}},p=[{value:"Clean up",id:"clean-up",children:[]}],u={toc:p};function l(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"clean-up"},"Clean up"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"docker builder prune -f && \\\n  docker image prune -f && \\\n  docker container prune -f\n")))}l.isMDXComponent=!0},86:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=t,b=s["".concat(a,".").concat(f)]||s[f]||d[f]||c;return n?o.a.createElement(b,i(i({ref:r},u),{},{components:n})):o.a.createElement(b,i({ref:r},u))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);