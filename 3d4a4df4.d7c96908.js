(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{117:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return p}));var n=o(2),a=o(6),s=(o(0),o(292)),r={id:"getting_started_extension",title:"Getting Started with Extensions",sidebar_label:"Extensions"},i={unversionedId:"getting_started_extension",id:"getting_started_extension",isDocsHomePage:!1,title:"Getting Started with Extensions",description:"CDK Cosmos provides high level resources in the core that can be shared among your various apps, in order to minimise cost and maximise efficiency. These core resources are consumed through a Cosmos concept known as the Portal. The Portal gives access to the cluster and listeners/ALB from the core in a decoupled import/export pattern to use in ECS.",source:"@site/guides/getting_started_extension.md",permalink:"/law/guides/getting_started_extension",editUrl:"https://github.com/cdk-cosmos/law/edit/master/guides/getting_started_extension.md",sidebar_label:"Extensions",sidebar:"guides",previous:{title:"Getting Started with the Core",permalink:"/law/guides/getting_started_core"},next:{title:"Getting Started - Hello World App",permalink:"/law/guides/getting_started_app"}},c=[{value:"Edit the Extension Template",id:"edit-the-extension-template",children:[]},{value:"Bootstrap an Extension",id:"bootstrap-an-extension",children:[]},{value:"Solar Systems",id:"solar-systems",children:[]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Next Step: Deploying Cosmos App",id:"next-step-deploying-cosmos-app",children:[]}],l={rightToc:c};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"CDK Cosmos provides high level resources in the core that can be shared among your various apps, in order to minimise cost and maximise efficiency. These core resources are consumed through a Cosmos concept known as the Portal. The Portal gives access to the cluster and listeners/ALB from the core in a decoupled import/export pattern to use in ECS."),Object(s.b)("p",null,"This import/export pattern is the main benefit of CDK Cosmos, as although extensions are dependent on the core, they are kept separate from one another despite existing in the same AWS account. This means that an error or deleted stack in one extension won't have any effect on other extensions sharing the same Cosmos core."),Object(s.b)("p",null,"This has all been patternised in CDK Cosmos. To use the portal to target a specific account to add or deploy resources into those galaxies/solar systems, you simply need to align to the naming scheme in the core across your extensions. E.g. ",Object(s.b)("inlineCode",{parentName:"p"},"new AppGalaxyStack(cosmos, 'Mgt')")," must use ",Object(s.b)("strong",{parentName:"p"},"Mgt")," in both core and extensions. Cosmos will do the rest!"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Note: You will need to have a Cosmos Core in your management account before you deploy an extension. You will also need to have a solar system set up to you have access to thosee resources for your extension.")),Object(s.b)("h3",{id:"edit-the-extension-template"},"Edit the Extension Template"),Object(s.b)("p",null,"Bootstrapping an extension is similar to setting up your core Cosmos. Again, the easiest way to get started with an extension is to clone a template to your local machine and run ",Object(s.b)("inlineCode",{parentName:"p"},"npm install"),". ",Object(s.b)("strong",{parentName:"p"},"To avoid errors, make sure you are running the same package versions as Core Cosmos.")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/cdk-cosmos/cosmos-extension-cdk"}),"Cosmos ECS Extension Template"),": used in this guide"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/cdk-cosmos/cosmos-blank-extension-cdk"}),"Cosmos Blank Extension Template"),": used to build out different types of extensions")),Object(s.b)("h3",{id:"bootstrap-an-extension"},"Bootstrap an Extension"),Object(s.b)("p",null,"As with core cosmos, fill out ",Object(s.b)("inlineCode",{parentName:"p"},"bin/main.ts")," with your account configuration and app name. Then, simply export your AWS CLI master account credentials in the terminal and run the below command. You will need to be using an IAM role with (operator permissions))."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'npx cdk --app "node_modules/@cosmos-building-blocks/common/lib/cdk-toolkit/bootstrap-app.js" deploy\n')),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"As with core, if you hit ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/cdk-cosmos/cosmos/issues/304"}),"issue #304"),' where this step doesn\'t deploy the resources needed, use STACKS="--all" npx cdk --app "node_modules/@cosmos-building-blocks/common/lib/cdk-toolkit/bootstrap-app.js" deploy ')),Object(s.b)("p",null,"This will archive this Extension and pass it as an asset to the Cosmos CDK Toolkit s3 bucket in your master account, and trigger the CodeBuild job to bootstrap your Extension. You can watch the CodeBuild project logs (cdk-toolkit-bootstrap-project) and CloudFormation to see what resources are being created."),Object(s.b)("p",null,"A CodeCommit repository to house this newly customised Extension was created as part of the bootstrapping process above. Update the git repository in this Extension to point to the new CodeCommit respository. Replacing the ",Object(s.b)("strong",{parentName:"p"},"your-region")," section with the region you selected in Step 3 and the ",Object(s.b)("strong",{parentName:"p"},"your-app")," section with the name you gave your project in ",Object(s.b)("inlineCode",{parentName:"p"},"bin/main.ts "),", run the following command:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),'git remote set-url origin "https://git-codecommit.your-region.amazonaws.com/v1/repos/app-your-app-cdk-repo"\n')),Object(s.b)("p",null,"You can also find the repository url in CodeCommit. Then:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Add the changes made to this template by running ",Object(s.b)("inlineCode",{parentName:"li"},"git add .")),Object(s.b)("li",{parentName:"ul"},"Commit the changes by running ",Object(s.b)("inlineCode",{parentName:"li"},'git commit -m "inital commit"')," "),Object(s.b)("li",{parentName:"ul"},"Push the changes to CodeCommit by running ",Object(s.b)("inlineCode",{parentName:"li"},"git push"))),Object(s.b)("p",null,"Your Extension now has a CDK & Code Pipeline. Any further changes may be deployed using the Extension's own CDK Pipeline."),Object(s.b)("h3",{id:"solar-systems"},"Solar Systems"),Object(s.b)("p",null,"As with core, the Solar Systems need to be deployed after bootstrapping as they are dependent on Cosmos and Galaxy resources created on the initial run of the pipeline. To deploy, uncomment the solar system, push up your changes and re-run the App CDK pipeline. "),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"If you get an error 'AppDemoDevDevSolarSystem failed: Error ","[ValidationError]",": Unable to fetch parameters ","[/App/Demo/Dev/Dev/VersionState]"," from parameter store for this account.' when running the cdk pipeline to add the solar systems, run the code pipeline first.")),Object(s.b)("h4",{id:"deploy-stages"},"Deploy Stages"),Object(s.b)("p",null,"This template includes a separate deploy stage in the code pipeline for each new solar system. The below code would deploy the ",Object(s.b)("inlineCode",{parentName:"p"},"dev")," and ",Object(s.b)("inlineCode",{parentName:"p"},"tst")," stacks."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"ciCd.addCdkDeployEnvStageToCodePipeline({\n    name: 'DeployDev',\n    stacks: [dev, tst],\n});\n")),Object(s.b)("p",null,"This is optional. The template includes a final deploy stage that will deploy all stacks, however, separating out stacks allows you to retry sections - for example, you may wish to run the dev stack to test your changes before approving a roll out to prod. It is also recommended to include a CiCd stage at the start of the pipeline, to minimise additional runs of the pipeline. You can add stages to both the Code pipeline (",Object(s.b)("inlineCode",{parentName:"p"},"ciCd.addCdkDeployEnvStageToCodePipeline"),") and the CDK pipeline (",Object(s.b)("inlineCode",{parentName:"p"},"ciCd.addCdkDeployEnvStageToCdkPipeline"),") for your extension, if you have defined those functions in ",Object(s.b)("inlineCode",{parentName:"p"},"lib/ci-cd-solar-system.ts"),". See (cosmos-blank-extension-cdk)","[https://github.com/cdk-cosmos/cosmos-blank-extension-cdk/blob/master/lib/ci-cd-solar-system.ts]"," for an example of this if your template does not include it."),Object(s.b)("h3",{id:"next-steps"},"Next Steps"),Object(s.b)("p",null,"Once you've bootstrapped your Cosmos extension, you can continue on to deploy a sample Hello World app."),Object(s.b)("hr",null),Object(s.b)("h2",{id:"next-step-deploying-cosmos-app"},Object(s.b)("a",Object(n.a)({parentName:"h2"},{href:"/law/guides/getting_started_app"}),"Next Step: Deploying Cosmos App")))}p.isMDXComponent=!0},292:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,b=d["".concat(r,".").concat(m)]||d[m]||u[m]||s;return o?a.a.createElement(b,i(i({ref:t},l),{},{components:o})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<s;l++)r[l]=o[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);