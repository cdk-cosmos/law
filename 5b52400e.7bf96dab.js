(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(6),r=(n(0),n(268)),c={id:"README",title:"@cdk-cosmos/core",sidebar_label:"README"},s={unversionedId:"@cdk-cosmos/core/README",id:"@cdk-cosmos/core/README",isDocsHomePage:!1,title:"@cdk-cosmos/core",description:"@cdk-cosmos/core \u203a Globals",source:"@site/docs/@cdk-cosmos/core/README.md",permalink:"/law/docs/@cdk-cosmos/core/README",sidebar_label:"README",sidebar:"docs",previous:{title:"Subdomain",permalink:"/law/docs/@cdk-cosmos/core/classes/subdomain"},next:{title:"custom-resource-provider",permalink:"/law/docs/@cosmos-building-blocks/common/modules/_custom_resource_provider_"}},l=[{value:"Basic Understanding",id:"basic-understanding",children:[]},{value:"Cosmos Core",id:"cosmos-core",children:[{value:"Example",id:"example",children:[]}]},{value:"Cosmos Extensions",id:"cosmos-extensions",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Further Use",id:"further-use",children:[]}],i={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/law/docs/@cdk-cosmos/core/README"}),"@cdk-cosmos/core")," \u203a ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/law/docs/@cdk-cosmos/core/globals"}),"Globals")),Object(r.b)("h1",{id:"cosmos-core-package"},"Cosmos Core Package"),Object(r.b)("p",null,"This Library contains the base components for the CDK Cosmos. It defiles the Core Classes and the Extension Classes for the Core.\nAll other @cdk-cosmos packages will build on top of this core concept."),Object(r.b)("h2",{id:"basic-understanding"},"Basic Understanding"),Object(r.b)("p",null,"Cosmos is broken down into 3 scopes (Bubbles)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Cosmos: Top level scope of the entire infrastructure, mostly singleton shared resources."),Object(r.b)("li",{parentName:"ul"},"Galaxy: Account level scope that defines infrastructure for an aws account."),Object(r.b)("li",{parentName:"ul"},"SolarSystem: Environment level scope that defines infrastructure for an environment with in an aws account (Dev, Tst, Prd).")),Object(r.b)("h2",{id:"cosmos-core"},"Cosmos Core"),Object(r.b)("p",null,"The Cosmos core contains infrastructure that will be shared by consumers building apps (extensions)."),Object(r.b)("p",null,"The Core Cosmos is composed of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CosmosStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"TLD Zone"),Object(r.b)("li",{parentName:"ul"},"CDK Repo - for the core cdk code"),Object(r.b)("li",{parentName:"ul"},"CDK Master Role - for builds of the cdk deployments"))),Object(r.b)("li",{parentName:"ul"},"GalaxyStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If Cross Account, create Cross Account CDK Role for master to assume"))),Object(r.b)("li",{parentName:"ul"},"SolarSystemStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"VPC (Created on the Galaxy scope, so that it can be shared by many SolarSystems in the same Galaxy)"),Object(r.b)("li",{parentName:"ul"},"Zone"))),Object(r.b)("li",{parentName:"ul"},"EcsSolarSystemStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Cluster"),Object(r.b)("li",{parentName:"ul"},"Alb"),Object(r.b)("li",{parentName:"ul"},"HttpListener"))),Object(r.b)("li",{parentName:"ul"},"CiCdSolarSystemStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"VPC"),Object(r.b)("li",{parentName:"ul"},"Zone"),Object(r.b)("li",{parentName:"ul"},"Cluster"),Object(r.b)("li",{parentName:"ul"},"Alb"),Object(r.b)("li",{parentName:"ul"},"HttpListener"),Object(r.b)("li",{parentName:"ul"},"CDK Pipeline + Code Build for Deployment of the core")))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const cosmos = new CosmosStack(app, 'Demo', {\n  tld: 'cosmos.com',\n  cidr: '10.0.0.0/22',\n});\n\nconst mgtGalaxy = new GalaxyStack(cosmos, 'Mgt');\n\nconst ciCd = new CiCdSolarSystemStack(mgtGalaxy);\n\nconst dev = new EcsSolarSystemStack(mgtGalaxy, 'Dev');\n")),Object(r.b)("h2",{id:"cosmos-extensions"},"Cosmos Extensions"),Object(r.b)("p",null,"The Extensions are a way of consuming and adding resources in an isolated way. Each Extension has a Portal Property that is used to consume that core infrastructure for that same bubble."),Object(r.b)("p",null,"The Extension of the core are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CosmosExtensionStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Imports Core Cosmos"),Object(r.b)("li",{parentName:"ul"},"CDK Repo - for the app cdk code"))),Object(r.b)("li",{parentName:"ul"},"GalaxyExtensionStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Imports Core Galaxy"))),Object(r.b)("li",{parentName:"ul"},"SolarSystemExtensionStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Imports Core SolarSystem"))),Object(r.b)("li",{parentName:"ul"},"EcsSolarSystemExtensionStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Imports Core EcsSolarSystem"))),Object(r.b)("li",{parentName:"ul"},"CiCdSolarSystemExtensionStack",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Imports Core CiCdSolarSystem"),Object(r.b)("li",{parentName:"ul"},"CDK Pipeline + Code Build for Deployment of the app")))),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const cosmos = new CosmosExtensionStack(app, 'Demo');\n\nconst mgtGalaxy = new GalaxyExtensionStack(cosmos, 'Mgt');\n\nconst ciCd = new CiCdSolarSystemExtensionStack(mgtGalaxy);\n\nconst dev = new EcsSolarSystemExtensionStack(mgtGalaxy, 'Dev');\n")),Object(r.b)("p",null,"What is included in the above is just enough for the extension (App) to host its own code and deploy it self. From here we expect consumer to add their own infrastructure to extends from the core, into the respective bubbles."),Object(r.b)("h2",{id:"further-use"},"Further Use"),Object(r.b)("p",null,"For more extensive understanding and usage, please look at the docs, aka the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/cdk-cosmos/law"}),"law of the cosmos")))}b.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=b(n),p=o,d=m["".concat(c,".").concat(p)]||m[p]||u[p]||r;return n?a.a.createElement(d,s(s({ref:t},i),{},{components:n})):a.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<r;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);