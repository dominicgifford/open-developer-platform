(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=s(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(100)),o={id:"intro",title:"Code Validation"},c={unversionedId:"development-infrastructure/code-validation/intro",id:"development-infrastructure/code-validation/intro",isDocsHomePage:!1,title:"Code Validation",description:"In order to assess Security, Quality and Legal compliance of software hosted by the Foundation, project leads and committers can configure integrations with third-party systems that are provided by the Foundation; the result of these processes can be published in the project's documentation to improve the final consumer experience and when requesting activation.",source:"@site/../docs/development-infrastructure/code-validation/intro.md",slug:"/development-infrastructure/code-validation/intro",permalink:"/docs/development-infrastructure/code-validation/intro",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/code-validation/intro.md",version:"current",sidebar:"mainSidebar",previous:{title:"Python",permalink:"/docs/development-infrastructure/continuous-integration/python"},next:{title:"Bithound",permalink:"/docs/development-infrastructure/code-validation/bithound"}},b=[{value:"Security vulnerabilities responsible disclosure",id:"security-vulnerabilities-responsible-disclosure",children:[]},{value:"Matrix of validation features and supported languages",id:"matrix-of-validation-features-and-supported-languages",children:[]},{value:"Continuous validation",id:"continuous-validation",children:[{value:"CLA bot",id:"cla-bot",children:[]},{value:"Project compliance scan",id:"project-compliance-scan",children:[]}]}],l={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to assess Security, Quality and Legal compliance of software hosted by the Foundation, project leads and committers can configure integrations with third-party systems that are provided by the Foundation; the result of these processes can be published in the project's documentation to improve the final consumer experience and when requesting activation."),Object(i.b)("p",null,"Below is the list of code validation systems currently available, across supported languages and validation features."),Object(i.b)("h2",{id:"security-vulnerabilities-responsible-disclosure"},"Security vulnerabilities responsible disclosure"),Object(i.b)("p",null,"Read the ",Object(i.b)("a",{parentName:"p",href:"https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/1230176257/Security+vulnerabilities+responsible+disclosure"},"FINOS security vulnerabilities responsible disclosure")," document to know how security incidents are managed across FINOS projects. Use ",Object(i.b)("a",{parentName:"p",href:"whitesource"},"WhiteSource")," to configure your FINOS project for automated scanning."),Object(i.b)("h2",{id:"matrix-of-validation-features-and-supported-languages"},"Matrix of validation features and supported languages"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Features"),Object(i.b)("th",{parentName:"tr",align:"center"},"C#"),Object(i.b)("th",{parentName:"tr",align:"center"},"Clojure"),Object(i.b)("th",{parentName:"tr",align:"center"},"Java"),Object(i.b)("th",{parentName:"tr",align:"center"},"Javascript"),Object(i.b)("th",{parentName:"tr",align:"center"},"Python"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Legal compliance")),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Check libraries for problematic/undefined licenses"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Generates legal reports"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Security")),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Scans code for security vulnerabilities"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"coverityscan"},"CoverityScan"),", ",Object(i.b)("a",{parentName:"td",href:"sonarcloud"},"SonarCloud")),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"codeclimate"},"CodeClimate"),", ",Object(i.b)("a",{parentName:"td",href:"coverityscan"},"CoverityScan"),", ",Object(i.b)("a",{parentName:"td",href:"sonarcloud"},"SonarCloud")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"codeclimate"},"CodeClimate"),", ",Object(i.b)("a",{parentName:"td",href:"nodesecurity"},"NodeSecurity"),",",Object(i.b)("a",{parentName:"td",href:"sonarcloud"},"SonarCloud")),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Check libraries for security vulnerabilities"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"),", ",Object(i.b)("a",{parentName:"td",href:"bithound"},"BitHound")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"Quality")),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Measures test coverage"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"sonarcloud"},"SonarCloud")),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"codeclimate"},"CodeClimate"),",",Object(i.b)("a",{parentName:"td",href:"sonarcloud"},"SonarCloud")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"codeclimate"},"CodeClimate"),", ",Object(i.b)("a",{parentName:"td",href:"sonarcloud"},"SonarCloud")),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Check libraries for bugs"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"),", ",Object(i.b)("a",{parentName:"td",href:"bithound"},"BitHound")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Check libraries for outdated versions"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"),", ",Object(i.b)("a",{parentName:"td",href:"bithound"},"BitHound")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Check unused libraries"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"bithound"},"BitHound")),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Check libraries for release activity"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"whitesource"},"WhiteSource"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Scans code for hacks and todos"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"bithound"},"BitHound")),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Scans code for bad practices"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"coverityscan"},"CoverityScan")),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"codeclimate"},"CodeClimate"),", ",Object(i.b)("a",{parentName:"td",href:"coverityscan"},"CoverityScan")),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"codeclimate"},"CodeClimate")),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Scans code for bugs"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"coverityscan"},"CoverityScan")),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("a",{parentName:"td",href:"coverityscan"},"CoverityScan")),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"center"})))),Object(i.b)("h2",{id:"continuous-validation"},"Continuous validation"),Object(i.b)("p",null,"FINOS provides a set of tools, specifically GitHub Apps and Actions, that enforce a continuous scanning across the FINOS GitHub repositories."),Object(i.b)("h3",{id:"cla-bot"},"CLA bot"),Object(i.b)("p",null,"To help project leads validating external contributor's identity and capacity to contribute code to the Foundation, the Foundation team have deployed an instance of cla-bot, which validates all Pull Requests (PRs) across all FINOS repositories and:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Extracts the list of GitHub users who contributed to the PR"),Object(i.b)("li",{parentName:"ol"},"Matches their identities against FINOS internal identity database"),Object(i.b)("li",{parentName:"ol"},"Updates the Pull Request with the result of the validation\na. If ok, adds a cla-signed label\nb. if not ok, posts a comment on the issue and informs 1) the user on how to submit the CLA to FINOS 2) the project lead that the PR cannot be merged.")),Object(i.b)("p",null,"The CLA bot source code can be found on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/finos/cla-bot"},"https://github.com/finos/cla-bot"),"."),Object(i.b)("h4",{id:"pr-validation-failure"},"PR validation failure"),Object(i.b)("p",null,"If the CLA Bot finds something wrong in a PR, it will fail the validation checks, showing a visible red mark and (optionally, if configured), block anyone to merge the Pull Request."),Object(i.b)("h4",{id:"re-summoning-the-bot"},"Re summoning the bot"),Object(i.b)("p",null,"When a Pull Request gets modified, or a contributors CLA gets added, it can be re-summoned simply adding a comment with the text ",Object(i.b)("inlineCode",{parentName:"p"},"@cla-bot[bot] check"),"."),Object(i.b)("h4",{id:"gitlab-version"},"GitLab version"),Object(i.b)("p",null,"There is a GitLab version of this bot that can be found on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ScottLogic/gitlab-cla-bot"},"https://github.com/ScottLogic/gitlab-cla-bot"),"; FINOS uses it to run an internal GitLab instance."),Object(i.b)("h4",{id:"email-validation"},"Email validation"),Object(i.b)("p",null,"In order to allow the CLA bot to validate a Pull Request, every contributor must ensure that commits are signed with a valid email address, properly configured (and verified) on GitHub. Otherwise, the CLA bot will post the following message:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Thank you for your contribution and Welcome to our Open Source Community!\n\nTo make sure your pull request is successful, we need all our contributors to be identifiable, but we couldn't parse the GitHub details of the following people : {{unidentifiedUsers}}\n\nLuckily, resolving the issue is straightforward and you can resolve it by following the instructions below.\n\n1. Check your git client is configured with a user email git config --list | grep email\n\n2. If the user email is missing, run the following command, substituting with your git commit email address git config --global user.email email@example.com\n\n3. Make sure your git commit email is configured on GitHub by Setting your Commit Email Address\n\n4. Then, amend the authors in your commit history by using git commit --amend to change your last commit.\n\nAlternatively, use the slightly more complex git reset --soft and git rebase to checkout your changes, rewrite the commit history locally and (force) push changes to the downstream branch.\n\nIf you have any issues with the steps above, please email [help@finos.org](mailto:help@finos.org) so we can help you resolve before reviewing and accepting your pull request.\n\nThanks once again for the contribution and understanding.\n\n_cc_ @finos-admin\n")),Object(i.b)("h3",{id:"project-compliance-scan"},"Project compliance scan"),Object(i.b)("p",null,"FINOS have developed a tool that scans all the GitHub repositories across all FINOS orgs and generates a report based on the following quality and compliance validations:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"has-admin")," - One or more admin collaborators were found in this GitHub repository. FINOS Governance doesn't allow GitHub users to have Admin rights on repositories, therefore it must be removed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"has-user")," - One or more user collaborators were found in this GitHub repository. FINOS Governance only allows GitHub users to be added via Teams. Please remove it, therefore it must be removed."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"disabled-issues")," - This GitHub repository does not have GitHub Issues enabled; make sure that there is a documented way to submit questions, feature requests and other communications to the project team."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-teams")," - This GitHub repository does not grant permissions to any FINOS Team, although it should be configured to grant access to project maintainers defined as ",Object(i.b)("a",{parentName:"li",href:"https://github.com/orgs/finos/teams"},"GitHub Teams"),". Please email ",Object(i.b)("a",{parentName:"li",href:"mailto:help@finos.org"},"help@finos.org")," and coordinate changes to the repository access permissions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-issue-templates")," - This GitHub repository does not use issue templates; please check the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/tree/master/.github/ISSUE_TEMPLATE"},"issue template blueprints"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-contributing")," - ",Object(i.b)("inlineCode",{parentName:"li"},"CONTRIBUTING.md")," file is missing; check the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING.md template"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-code-conduct")," - ",Object(i.b)("inlineCode",{parentName:"li"},"CODE_OF_CONDUCT.md")," file is missing; check the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/.github/CODE_OF_CONDUCT.md"},"CODE_OF_CONDUCT.md template"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notice-nok")," - ",Object(i.b)("inlineCode",{parentName:"li"},"NOTICE")," file is incomplete; check line 4 of the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/NOTICE"},"NOTICE template"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-notice")," - ",Object(i.b)("inlineCode",{parentName:"li"},"NOTICE")," file is missing; check the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/NOTICE"},"NOTICE template"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-readme")," - ",Object(i.b)("inlineCode",{parentName:"li"},"README.md")," file is missing; check the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/README.template.md"},"README.md template"),".\n",Object(i.b)("inlineCode",{parentName:"li"},"no-description")," - This GitHub repository does not have a general description defined; the ",Object(i.b)("inlineCode",{parentName:"li"},"Edit")," button is seen when on the repositories main page, which is the ",Object(i.b)("inlineCode",{parentName:"li"},"Code")," tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"is-archivable")," - This repository belongs to project ",Object(i.b)("inlineCode",{parentName:"li"},"{{project-name}}")," which is archived, therefore the GitHub repository is expected to be archived too. @finos-staff will get in touch with the project lead to sort it out."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"readme-nok")," - ",Object(i.b)("inlineCode",{parentName:"li"},"README.md")," file is incomplete; check the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/README.template.md"},"README.md template")," and make sure that ",Object(i.b)("inlineCode",{parentName:"li"},"## Contributing")," and ",Object(i.b)("inlineCode",{parentName:"li"},"## License")," sections exist."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-badge")," - ",Object(i.b)("inlineCode",{parentName:"li"},"README.md")," file is missing the FINOS badge; check the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/finos/project-blueprint/blob/master/README.template.md"},"README.md template")," and make sure that it embeds one of SVG FINOS badges."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"wrong-badge")," - Our internal records state that this project is in {{project-state}} state, whereas ",Object(i.b)("inlineCode",{parentName:"li"},"README.md")," states ",Object(i.b)("inlineCode",{parentName:"li"},"{{readme-state}}"),"; make sure that ",Object(i.b)("inlineCode",{parentName:"li"},"README.md"),' embeds the right FINOS badge."\n:repo-not-on-file "We don\'t have this repository on file. We will fix this issue on our side as soon as possible and keep you posted.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no-whitesource")," - WhiteSource configuration was not found; make sure that dependencies are scanned against security vulnerabilities. Read more on ",Object(i.b)("a",{parentName:"li",href:"https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/75530440/WhiteSource"},"the WhiteSource Wiki page"),".")),Object(i.b)("p",null,"Code is publicly available on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/finos/metadata-tool"},"https://github.com/finos/metadata-tool"),", the command to invoke is ",Object(i.b)("inlineCode",{parentName:"p"},"check-project-repos"),"."),Object(i.b)("h4",{id:"reporting-via-github-issues"},"Reporting via GitHub Issues"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Work in progress - follow ",Object(i.b)("a",{parentName:"em",href:"https://github.com/finos/open-developer-platform/issues/31"},"https://github.com/finos/open-developer-platform/issues/31"))),Object(i.b)("p",null,"In order to deliver these reports directly to the teams, the Open Developer Platform have developed a GitHub Action that uses metadata-tool to generate the project reports and submits a GitHub Issue for each GitHub repository where validation problems were spotted; the issue will include a detailed description of the validation done and point the reader on how to resolve it."),Object(i.b)("p",null,"This is an example of ",Object(i.b)("a",{parentName:"p",href:"https://github.com/finos/contrib-toolbox/issues/12"},"auto-generated issue for project compliance"),"."),Object(i.b)("p",null,"GitHub Action can be found in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/finos/open-developer-platform/blob/master/.github/workflows/project-blueprint.yml"},"ODP GitHub repo"),"."),Object(i.b)("h4",{id:"ignoring-validations"},"Ignoring validations"),Object(i.b)("p",null,"There may be corner cases, for example repositories that contain data don't need whitesource integration. In those cases, it is possible to define a ",Object(i.b)("inlineCode",{parentName:"p"},".finos-blueprint.json")," file in the root folder, with the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "ignore" : [\n    "no-whitesource",\n    "readme-nok"\n  ]\n}\n')),Object(i.b)("h4",{id:"exporting-to-csv"},"Exporting to CSV"),Object(i.b)("p",null,"Here's a useful command to transform the metadata-tool JSON output in CSV."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'cat finos-repo-validation.json| jq -r \'.[] | [.org, .["repo-name"], .validations["has-admin"], .validations["has-user"], .validations["no-teams"], .validations["no-issues"], .validations["no-issue-templates"], .validations["no-contributing"], .validations["no-code-conduct"], .validations["notice-nok"], .validations["no-notice"], .validations["no-readme"], .validations["no-description"], .validations["is-archivable"], .validations["readme-nok"], .validations["no-badge"], .validations["wrong-badge"], .validations["repo-not-on-file"], .validations["no-whitesource"]] | @csv\'\n')))}s.isMDXComponent=!0}}]);