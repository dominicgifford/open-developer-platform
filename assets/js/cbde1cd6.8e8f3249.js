(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{100:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return o?r.a.createElement(f,c(c({ref:t},s),{},{components:o})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},101:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var n=o(16),r=o(102);function a(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!o)return o;if(o.startsWith("#"))return o;if(Object(r.b)(o))return o;if(c)return t+o;var u=o.startsWith(t)?o:t+o.replace(/^\//,"");return s?e+u:u}(a,o,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},102:function(e,t,o){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}))},90:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),a=(o(0),o(100)),i=o(101),c={id:"what-is-odp",title:"What is ODP"},l={unversionedId:"what-is-odp",id:"what-is-odp",isDocsHomePage:!1,title:"What is ODP",description:"The Open Developer Platform (ODP) is a collection of services, tools and best practices that deliver a secure and compliant collaboration across all FINOS hosted projects.",source:"@site/../docs/what-is-odp.mdx",slug:"/what-is-odp",permalink:"/docs/what-is-odp",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/what-is-odp.mdx",version:"current",sidebar:"mainSidebar",next:{title:"Project Collaboration",permalink:"/docs/project-collaboration"}},s=[{value:"How to use ODP",id:"how-to-use-odp",children:[]},{value:"How to contribute",id:"how-to-contribute",children:[]}],u={toc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"Open Developer Platform (ODP)")," is a collection of services, tools and best practices that deliver a secure and compliant collaboration across all FINOS hosted projects."),Object(a.b)("p",null,"ODP leverages ",Object(a.b)("a",{parentName:"p",href:"https://guides.github.com/activities/hello-world/#what"},"GitHub.com")," as project collaboration platform to deliver a software development workflow with continuous legal, security, quality scanning and a set of communication tools that comply with financial institutions regulations."),Object(a.b)("img",{alt:"odp-landscape",src:Object(i.a)("img/odp-landscape-2020.png")}),Object(a.b)("h2",{id:"how-to-use-odp"},"How to use ODP"),Object(a.b)("p",null,"The onboarding process on ODP is composed by the following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Sign up to GitHub.com and get a GitHub username."),Object(a.b)("li",{parentName:"ol"},"Sign and submit the ",Object(a.b)("a",{parentName:"li",href:"https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements"},"FINOS Contributor License Agreement"),", in order to become part of the GitHub FINOS."),Object(a.b)("li",{parentName:"ol"},"Start ",Object(a.b)("a",{parentName:"li",href:"project-collaboration"},"collaborating on FINOS projects"))),Object(a.b)("h2",{id:"how-to-contribute"},"How to contribute"),Object(a.b)("p",null,"To submit a new feature or request to the ODP backlog, feel free to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/finos/open-developer-platform/issues"},Object(a.b)("strong",{parentName:"a"},"create a new issue in GitHub")),"."),Object(a.b)("p",null,"If you're a software vendor providing build automation for open source software that can help solve friction points many developers at financial institutions face, we'd be happy to work together and host your technology on ODP."),Object(a.b)("p",null,"If you are an API provider, working with some of our members or other firms in the financial world, we can host your API on ODP: the full FINOS Community can get to know your technology, and contributors will get free and preferred access to the API, delivering a first-class onramp experience for developers."),Object(a.b)("p",null,"Everyone is welcome to listen and submit feedback to the group; all our content and conversations are (and will be) public."))}p.isMDXComponent=!0}}]);