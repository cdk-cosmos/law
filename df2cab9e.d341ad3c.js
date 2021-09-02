(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{262:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),s=n(6),o=(n(0),n(289)),a={id:"intro",title:"Introduction to the Cosmos",sidebar_label:"Introduction"},i={unversionedId:"intro",id:"intro",isDocsHomePage:!0,title:"Introduction to the Cosmos",description:"Understanding the Cosmos",source:"@site/guides/intro.md",permalink:"/law/guides/",editUrl:"https://github.com/cdk-cosmos/law/edit/master/guides/intro.md",sidebar_label:"Introduction",sidebar:"guides",next:{title:"Quickstart - Bootstrap Cosmos Core",permalink:"/law/guides/quickstart"}},c=[{value:"Understanding the Cosmos",id:"understanding-the-cosmos",children:[{value:"Basic Architecture",id:"basic-architecture",children:[]},{value:"Cosmos Architecture",id:"cosmos-architecture",children:[]}]}],u={rightToc:c};function l(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"understanding-the-cosmos"},"Understanding the Cosmos"),Object(o.b)("p",null,"To understand the cosmos, we should first start with a basic enterprise architecture. Generally enterprise environments want to have isolated locations to deploy applications and services. These environments, which we call App Envs or SolarSystems, are generally labelled dev, tst, stg, or prd. As we move from left to right, the importance and severity of these applications and services increases. Thus we want to work out all the bugs before we deploy to Production, deploying fewer bugs as we move from left to right. Our way of working should also reflect this, from Pipelines to Availability. The cosmos is centred around this design and idea."),Object(o.b)("h3",{id:"basic-architecture"},"Basic Architecture"),Object(o.b)("p",null,"Lets start with a basic enterprise architecture. Here we can see that there are 4 app environments. In Each environment there are docker hosts and containers. The containers are owned by the Applications and the docker hosts are owned by shared infrastructure."),Object(o.b)("p",null,Object(o.b)("img",{src:n(322).default})),Object(o.b)("h3",{id:"cosmos-architecture"},"Cosmos Architecture"),Object(o.b)("p",null,"In cosmos we can express the same idea with 5 Concepts: 2 owner constructs (Core, Extension), and 3 organisational constructs (Cosmos, Galaxy, SolarSystem)."),Object(o.b)("p",null,Object(o.b)("img",{src:n(323).default})),Object(o.b)("h4",{id:"owner-constructs"},"Owner Constructs"),Object(o.b)("p",null,"The owner constructs are ideas around who owns the AWS infrastructure."),Object(o.b)("p",null,"The Core is shared infrastructure. Things like Clusters and ALB's are shared resources that can consumed by applications (Extensions)."),Object(o.b)("p",null,'An Extension is infrastructure owned by an "Application". Things like Containers, Code Repo, and Databases are resources that shouldn\'t be shared and thus other applications should not consume them.'),Object(o.b)("h4",{id:"organisational-constructs"},"Organisational Constructs"),Object(o.b)("p",null,"The organisational constructs are ideas around organising resources, especially considering singleton resources and cross account resources."),Object(o.b)("p",null,"The Cosmos is the root construct that contains resources that you only want to create once and use thoughout Cosmos Galaxies and SolarSystems. This concept potentially spans across multiple AWS accounts (Galaxies), but due to limitations in AWS, resources created at this level are created only in your root AWS account, which we generally refer to as the MGT Account."),Object(o.b)("p",null,"The Galaxy is a construct that has a 1:1 relationship with AWS accounts. Here you can create resources that are required for the account to function, or resources that you might share among multiple SolarSystems within a single AWS account."),Object(o.b)("p",null,Object(o.b)("img",{src:n(324).default})),Object(o.b)("p",null,'The SolarSystem is a construct that defines individual "Deployment Application Environments". This is the lowest organisational construct that the Cosmos supports. Here you can add Clusters (in the Core) and Containers (in the Extensions), etc. Each SolarSystem is designed to be conceptually isolated from other SolarSystems, but in some cases it may make sense to share layers like networking (for cost reasons).'),Object(o.b)("p",null,Object(o.b)("img",{src:n(325).default})),Object(o.b)("p",null,"The result of building the cosmos with multiple AWS accounts looks something like this."),Object(o.b)("p",null,Object(o.b)("img",{src:n(326).default})))}l.isMDXComponent=!0},289:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),s=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=s.a.createContext({}),l=function(e){var t=s.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return s.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,b=d["".concat(a,".").concat(h)]||d[h]||p[h]||o;return n?s.a.createElement(b,i(i({ref:t},u),{},{components:n})):s.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},322:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/slide1-36868665ba7bfa2d94478b7138eaa257.png"},323:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/slide2-49b2f21fbc2ee0eaa86c15ed024b0fe5.png"},324:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/slide3-b48dc1516ee247aedfe56fe639b12a93.png"},325:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/slide4-68fa1140deadbc6b94606b32b859edaf.png"},326:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/slide5-b3f20823909f424d2bf1fd3aa1f613a6.png"}}]);