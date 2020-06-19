(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{208:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return a})),o.d(t,"rightToc",(function(){return i})),o.d(t,"default",(function(){return u}));var s=o(2),n=o(9),r=(o(0),o(254)),c={id:"README",title:"@cosmos-building-blocks/common",sidebar_label:"README"},a={id:"@cosmos-building-blocks/common/README",title:"@cosmos-building-blocks/common",description:"@cosmos-building-blocks/common \u203a Globals",source:"@site/docs/@cosmos-building-blocks/common/README.md",permalink:"/law/docs/@cosmos-building-blocks/common/README",editUrl:"https://github.com/cdk-cosmos/law/edit/master/docs/@cosmos-building-blocks/common/README.md",sidebar_label:"README",sidebar:"docs",previous:{title:"CrossAccountExportsProps",permalink:"/law/docs/@cosmos-building-blocks/common/interfaces/crossaccountexportsprops"},next:{title:"ImportedResolverRule",permalink:"/law/docs/@cosmos-building-blocks/network/classes/importedresolverrule"}},i=[{value:"Why use Cosmos?",id:"why-use-cosmos",children:[]},{value:"Highly customisable",id:"highly-customisable",children:[]},{value:"How it works",id:"how-it-works",children:[{value:"Core and Extension",id:"core-and-extension",children:[]}]},{value:"Getting Started",id:"getting-started",children:[{value:"The Big Bang",id:"the-big-bang",children:[]}]}],l={rightToc:i};function u(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(s.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/law/docs/@cosmos-building-blocks/common/README"}),"@cosmos-building-blocks/common")," \u203a ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"/law/docs/@cosmos-building-blocks/common/globals"}),"Globals")),Object(r.b)("h1",{id:"cosmos-cosmos-coverage"},"Cosmos ",Object(r.b)("img",Object(s.a)({parentName:"h1"},{src:"https://raw.githubusercontent.com/cdk-cosmos/cosmos/master/shields/coverage.svg",alt:"Cosmos Coverage"}))),Object(r.b)("p",null,Object(r.b)("img",Object(s.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/cdk-cosmos/law/master/static/img/cosmos-logo.png",alt:"Cosmos Logo"}))),Object(r.b)("p",null,"Cosmos builds an opinionated layer on top of the AWS CDK, providing smart defaults for enterprise infrastructure. "),Object(r.b)("h2",{id:"why-use-cosmos"},"Why use Cosmos?"),Object(r.b)("p",null,"While the CDK provides constructs to leverage hundreds of AWS resources, it doesn't support commonly used patterns for enterprise infrastructure out of the box. Cosmos gives you high-level constructs to easily implement a multiple-account architecture across your AWS portfolio. It provides configuration for a CI/CD account that manages deployments to development, test, and production accounts in whatever combination is required. It also delivers a range of pre-built strategies to manage ECS clusters, CI/CD pipelines, ALBs, cross-account roles, shared VPCs, and much more."),Object(r.b)("h2",{id:"highly-customisable"},"Highly customisable"),Object(r.b)("p",null,"Although Cosmos is opinionated, as a consumer you're able to access and modify the underlying CDK. This means you can customise and tune the constructs however you want. And as Cosmos is open source, if you can't find the exact construct you need, you're encouraged to create it yourself and contribute back to the project so others can make use of your work. "),Object(r.b)("h2",{id:"how-it-works"},"How it works"),Object(r.b)("p",null,"To organise resources, Cosmos uses a cosmological naming scheme. "),Object(r.b)("p",null,"At the top level, scoped to multiple accounts, there is the Cosmos itself. Here we put resources required by all accounts, for example a hosted zone for the top-level domain, and a CodeCommit repository to store the CDK code of your Cosmos."),Object(r.b)("p",null,"Nested in the Cosmos are the Galaxy constructs. Galaxies are scoped to a single account. Here we put resources shared across different application environments within one account, for example VPCs, s3 buckets, and ECR."),Object(r.b)("p",null,"Nested in the Galaxies are Solar System constructs. Solar Systems are scoped to an application environment such as development, test, or production. Here we put what's necessary to deploy an application, for example ECS clusters or s3 buckets for static web sites. "),Object(r.b)("h3",{id:"core-and-extension"},"Core and Extension"),Object(r.b)("p",null,"Core and Extension are two different categories of Cosmos/CDK code stored in different repositories. They both define resources using Cosmos and CDK constructs, but they're separated to ensure the critical resources of the accounts (Core) are decoupled from the resources scoped to individual applications (Extensions). "),Object(r.b)("p",null,"Basically, the Core contains the essential resources and configurations you don't want most people getting their hands on and changing, while Extensions can be more freely configured without the risk of impacting other applications within the same Cosmos."),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("h3",{id:"the-big-bang"},"The Big Bang"),Object(r.b)("p",null,"Cosmos provides code templates for both the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/cdk-cosmos/cosmos-core-cdk"}),"Core")," and ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/cdk-cosmos/cosmos-extension-cdk"}),"Extensions"),". These templates define the minimal infrastructure needed to get started with Cosmos, such as a hosted zone for the top-level domain, the CDK master role, and more. These templates also define the CI/CD pipelines needed to deploy themselves, which presents a problem: the pipelines won't exist until the template is deployed, but the template can't be automatically deployed until the pipeline exists. To solve this, Cosmos needs to be manually deployed once \u2014 a process we call the Big Bang."),Object(r.b)("p",null,"Follow the getting started instructions in the ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/cdk-cosmos/cosmos-core-cdk"}),"Core")," and ",Object(r.b)("a",Object(s.a)({parentName:"p"},{href:"https://github.com/cdk-cosmos/cosmos-extension-cdk"}),"Extensions")," templates to trigger the Big Bang and begin using Cosmos."))}u.isMDXComponent=!0},254:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return b}));var s=o(0),n=o.n(s);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(o),p=s,b=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return o?n.a.createElement(b,a(a({ref:t},l),{},{components:o})):n.a.createElement(b,a({ref:t},l))}));function b(e,t){var o=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=o.length,c=new Array(r);c[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,c[1]=a;for(var l=2;l<r;l++)c[l]=o[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);