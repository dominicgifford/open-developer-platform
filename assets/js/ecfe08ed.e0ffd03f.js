(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return n?i.a.createElement(d,s(s({ref:t},l),{},{components:n})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(100)),o={id:"contributing",title:"Contributing"},s={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"Contributor License Agreement (CLA)",source:"@site/../docs/contributing.md",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/contributing.md",version:"current",sidebar:"mainSidebar",previous:{title:"Continuous Delivery",permalink:"/docs/development-infrastructure/continuous-delivery"},next:{title:"Project Team",permalink:"/docs/team"}},c=[{value:"Contributor License Agreement (CLA)",id:"contributor-license-agreement-cla",children:[]},{value:"Contributing Issues",id:"contributing-issues",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Raising an Issue",id:"raising-an-issue",children:[]}]},{value:"Contributing Pull Requests (Code &amp; Docs)",id:"contributing-pull-requests-code--docs",children:[{value:"Commit and PR Messages",id:"commit-and-pr-messages",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"contributor-license-agreement-cla"},"Contributor License Agreement (CLA)"),Object(a.b)("p",null,"A CLA is a document that specifies how a project is allowed to use your\ncontribution; they are commonly used in many open source projects."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"All")," contributions to ",Object(a.b)("em",{parentName:"strong"},"all")," projects hosted by ",Object(a.b)("a",{parentName:"strong",href:"https://www.finos.org/"},"FINOS"),"\nmust be made with a\n",Object(a.b)("a",{parentName:"strong",href:"https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/83034172/Contribute"},"Foundation CLA"),"\nin place, and there are ",Object(a.b)("a",{parentName:"strong",href:"https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Legal+Requirements"},"additional legal requirements"),"\nthat must also be met.")),Object(a.b)("p",null,"Commits and pull requests to FINOS repositories such as Open Developer Platform will only be accepted from those contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS OR who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS ",Object(a.b)("a",{parentName:"p",href:"https://github.com/finos/cla-bot"},'"CLA Bot" tool'),". Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA."),Object(a.b)("p",null,"As a result, PRs submitted to the Open Developer Platform project cannot be accepted until you have a CLA in place with the Foundation."),Object(a.b)("p",null,"Need an ICLA? Unsure if you are covered under an existing CCLA? Email ",Object(a.b)("a",{parentName:"p",href:"mailto:help@finos.org?subject=CLA"},"help@finos.org")),Object(a.b)("h2",{id:"contributing-issues"},"Contributing Issues"),Object(a.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(a.b)("ul",{className:"contains-task-list"},Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Have you ",Object(a.b)("a",{parentName:"li",href:"https://github.com/finos/open-developer-platform/issues?utf8=%E2%9C%93&q="},"searched for duplicates"),"?  A simple search for exception error messages or a summary of the unexpected behaviour should suffice."),Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Are you running the latest version?"),Object(a.b)("li",{parentName:"ul",className:"task-list-item"},Object(a.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Are you sure this is a bug or missing capability?")),Object(a.b)("h3",{id:"raising-an-issue"},"Raising an Issue"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create your issue ",Object(a.b)("a",{parentName:"li",href:"https://github.com/finos/open-developer-platform/issues/new"},"here"),"."),Object(a.b)("li",{parentName:"ul"},"New issues contain two templates in the description: bug report and enhancement request. Please pick the most appropriate for your issue, ",Object(a.b)("strong",{parentName:"li"},"then delete the other"),".",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'Please also tag the new issue with either "Bug" or "Enhancement".'))),Object(a.b)("li",{parentName:"ul"},"Please use ",Object(a.b)("a",{parentName:"li",href:"https://help.github.com/categories/writing-on-github/"},"Markdown formatting"),"\nliberally to assist in readability.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://help.github.com/articles/creating-and-highlighting-code-blocks/"},"Code fences")," for exception stack traces and log entries, for example, massively improve readability.")))),Object(a.b)("h2",{id:"contributing-pull-requests-code--docs"},"Contributing Pull Requests (Code & Docs)"),Object(a.b)("p",null,"To make review of PRs easier, please:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Please make sure your PRs will merge cleanly - PRs that don't are unlikely to be accepted."),Object(a.b)("li",{parentName:"ul"},"For code contributions, follow the existing code layout."),Object(a.b)("li",{parentName:"ul"},"For documentation contributions, follow the general structure, language, and tone of the ",Object(a.b)("a",{parentName:"li",href:"https://odp.finos.org"},"existing docs"),"."),Object(a.b)("li",{parentName:"ul"},"Keep commits small and cohesive - if you have multiple contributions, please submit them as independent commits (and ideally as independent PRs too)."),Object(a.b)("li",{parentName:"ul"},"Reference issue #s if your PR has anything to do with an issue (even if it doesn't address it)."),Object(a.b)("li",{parentName:"ul"},"Minimise non-functional changes (e.g. whitespace)."),Object(a.b)("li",{parentName:"ul"},"Ensure all new files include a header comment block containing the ",Object(a.b)("a",{parentName:"li",href:"http://www.apache.org/licenses/LICENSE-2.0#apply"},"Apache License v2.0 and your copyright information"),"."),Object(a.b)("li",{parentName:"ul"},"If necessary (e.g. due to 3rd party dependency licensing requirements), update the ",Object(a.b)("a",{parentName:"li",href:"https://github.com/finos/open-developer-platform/blob/master/NOTICE"},"NOTICE file")," with any new attribution or other notices")),Object(a.b)("h3",{id:"commit-and-pr-messages"},"Commit and PR Messages"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Reference issues, wiki pages, and pull requests liberally!")),Object(a.b)("li",{parentName:"ul"},'Use the present tense ("Add feature" not "Added feature")'),Object(a.b)("li",{parentName:"ul"},'Use the imperative mood ("Move button left..." not "Moves button left...")'),Object(a.b)("li",{parentName:"ul"},"Limit the first line to 72 characters or less")))}u.isMDXComponent=!0}}]);