import{M as a}from"./index.599ae7e4.js";import{j as e}from"./jsx-runtime.796aa4d8.js";import{u as i}from"./index.04e75108.js";import"./iframe.45f634c2.js";import"../sb-preview/runtime.mjs";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function d(r={}){const{wrapper:s}=Object.assign({},i(),r.components);return s?e.exports.jsx(s,{...r,children:e.exports.jsx(n,{})}):n();function n(){const o=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},i(),r.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(a,{title:"Docs/Contributing/Writing stories"}),`
`,e.exports.jsx(o.h1,{id:"ui5-web-components-storybook-app",children:"UI5 Web Components Storybook App"}),`
`,e.exports.jsx(o.p,{children:`The UI5 Web Components Storybook app is a playground for testing and documenting the UI5 Web Components library. It allows developers to create stories for each UI component,
capturing its rendered state in various scenarios, and to document all the potential states that a component can display.`}),`
`,e.exports.jsx(o.h2,{id:"running-the-ui5-web-components-storybook-app-locally",children:"Running the UI5 Web Components Storybook App Locally"}),`
`,e.exports.jsxs(o.p,{children:["To run the ",e.exports.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents/",target:"_blank",rel:"nofollow noopener noreferrer",children:"UI5 Web Components Storybook app"})," locally and test your changes and samples, follow the steps below:"]}),`
`,e.exports.jsx(o.h3,{id:"1-in-the-root-folder-of-the-project-run-the-following-command",children:"1. In the root folder of the project, run the following command:"}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"language-bash",children:`yarn build # this step needs to be performed only the first time you run the project, to build the project initially
`})}),`
`,e.exports.jsx(o.h3,{id:"2-go-to-the-playground-package",children:"2. Go to the playground package."}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"language-bash",children:`cd packages/playground
yarn storybook # to run the storybook app
`})}),`
`,e.exports.jsx(o.p,{children:"Note that these steps are required only for running the Storybook app locally and not for general development."}),`
`,e.exports.jsx(o.h2,{id:"whats-a-story",children:"What's a Story"}),`
`,e.exports.jsx(o.p,{children:"A story is a documentation of a UI component that captures its rendered state in various scenarios. Stories are useful for documenting all the potential states that a component can display, and they allow developers to test UI components in isolation."}),`
`,e.exports.jsx(o.p,{children:"UI components can be rendered in various scenarios, such as with different props or state, or in different layouts or contexts. Stories capture these scenarios and provide documentation of the component's behavior in each scenario."}),`
`,e.exports.jsx(o.h2,{id:"where-to-write-stories",children:"Where to write stories"}),`
`,e.exports.jsxs(o.p,{children:["Stories are written in the ",e.exports.jsx(o.code,{children:"_stories"})," folder of the playground package. For example, the stories for the ",e.exports.jsx(o.code,{children:"ui5-button"})," component are located in the ",e.exports.jsx(o.code,{children:"packages/playground/_stories/Button.stories.ts"})," file."]}),`
`,e.exports.jsx(o.h2,{id:"how-to-write-stories",children:"How to write stories"}),`
`,e.exports.jsxs(o.p,{children:["The storybook app uses the ",e.exports.jsx(o.a,{href:"https://storybook.js.org/docs/basics/introduction/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook framework"})," to render the stories. The stories are written in the ",e.exports.jsx(o.a,{href:"https://storybook.js.org/docs/web-components/api/csf",target:"_blank",rel:"nofollow noopener noreferrer",children:"Component Story Format (CSF)"})," format."]}),`
`,e.exports.jsx(o.p,{children:"The args object is used to define the properties of the component, which can be edited in the playground by users. Decorators and parameters can be used to enhance the documentation of stories."}),`
`,e.exports.jsx(o.p,{children:"Here is an example of a story for the ui5-button component:"}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"language-ts",children:`import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export default {
  title: "main/Button",
  component: "ui5-button",
};

export const Default = (args) => html\`
  <ui5-button ?disabled="\${ifDefined(args.disabled)}">\${unsafeHTML(args.default)}</ui5-button>
\`;

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  default: "Disabled",
};

Disabled.decorators = [ ... ];
Disabled.parameters = { ... };
Disabled.storyName = 'So simple!'; // e.g. to rename the story in the sidebar, if not set the name of the const export is used
`})}),`
`,e.exports.jsxs(o.p,{children:["Every property defined in the ",e.exports.jsx(o.code,{children:"args"})," object of the named export will end up as input control in the playground that users can edit."]}),`
`,e.exports.jsx(o.h3,{id:"story-decorators",children:"Story Decorators"}),`
`,e.exports.jsxs(o.p,{children:[e.exports.jsx(o.a,{href:"https://storybook.js.org/docs/web-components/writing-stories/decorators",target:"_blank",rel:"nofollow noopener noreferrer",children:"Decorators"})," are used to wrap stories with extra markup or context. This is useful if you want to include additional script."]}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"language-ts",children:`export const Template = (args) => html\`
  <ui5-dialog id="myDialog">
	\${unsafeHTML(args.default)}
  </ui5-dialog>
\`;

BasicDialog.decorators = [
  (story) => html\`
	<ui5-button id="dialogOpener">Open Dialog</ui5-button>
	\${story()}
	<script>
		document.getElementById("dialogOpener").addEventListener("click", () => {
			document.getElementById("myDialog").open();
		});
	<\/script>
  \`,
];
`})}),`
`,e.exports.jsx(o.h3,{id:"story-parameters",children:"Story parameters"}),`
`,e.exports.jsxs(o.p,{children:[e.exports.jsx(o.a,{href:"https://storybook.js.org/docs/web-components/writing-stories/parameters",target:"_blank",rel:"nofollow noopener noreferrer",children:"Parameters"})," are static, metadata about a story, used to control the behavior of Storybook features and addons."]}),`
`,e.exports.jsx(o.p,{children:"They can be used both on the default export (Component parameters), applicable to all stories of the component:"}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"language-ts",children:`export default {
  title: "main/CheckBox",
  component: "ui5-checkbox",
  parameters: {
	  controls: { include: ["indeterminate", "checked"] }
  }
};
`})}),`
`,e.exports.jsx(o.p,{children:"Or per every named export (Story Parameters), applicable to a specific story:"}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"language-ts",children:`BasicCheckBox.parameters = {
    controls: {
        include: ["indeterminate", "checked"],
    },
};
`})}),`
`,e.exports.jsxs(o.p,{children:["Or globally in the ",e.exports.jsx(o.code,{children:".storybook/preview.ts"})," file."]}),`
`,e.exports.jsxs(o.p,{children:["The above example includes only the ",e.exports.jsx(o.code,{children:"indeterminate"}),", ",e.exports.jsx(o.code,{children:"checked"})," properties in the playground for users to edit."]}),`
`,e.exports.jsx(o.h2,{id:"documentation",children:"Documentation"}),`
`,e.exports.jsxs(o.p,{children:["The documentation for each component is automatically produced using the ",e.exports.jsx(o.code,{children:"custom-elements.json"})," file. Additionally, there is an ",e.exports.jsx(o.code,{children:"argTypes.ts"})," file located beside each ",e.exports.jsx(o.code,{children:".stories.ts"})," file. It is generated during build time and contains extra properties that enhance the documentation beyond what is available in the ",e.exports.jsx(o.code,{children:"custom-elements.json"})," file. This file should not be edited directly, as it can only be modified by the ",e.exports.jsx(o.code,{children:"packages/playground/build-scripts-storybook/samples-prepare.js"})," script."]}),`
`,e.exports.jsx(o.h3,{id:"docs-page",children:"Docs page"}),`
`,e.exports.jsxs(o.p,{children:["Every story has a ",e.exports.jsx(o.code,{children:"docs"})," page in the storybook's sidebar. Usually, this page is generated automatically by storybook but it can be customized by adding a ",e.exports.jsx(o.code,{children:"docs"})," property to the story parameters."]}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{className:"language-ts",children:`export default {
    title: "Main/Button",
    component,
    parameters: {
        docs: {
          page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
} as Meta<Button>;
`})}),`
`,e.exports.jsx(o.h2,{id:"configuration",children:"Configuration"}),`
`,e.exports.jsxs(o.p,{children:["Storybook configuration is located in the ",e.exports.jsx(o.code,{children:".storybook"})," folder."]}),`
`,e.exports.jsxs(o.p,{children:["The ",e.exports.jsx(o.code,{children:"preview.ts"})," file is the main configuration file. It is used to configure the storybook app in terms of UI features, global parameters and decorators."]}),`
`,e.exports.jsxs(o.p,{children:["The ",e.exports.jsx(o.code,{children:"main.js"})," file is used to configure the storybook app in terms of the stories that should be loaded, as well as the addons that should be used. Build time configuration is also done here."]}),`
`,e.exports.jsxs(o.p,{children:["The Manager configured in ",e.exports.jsx(o.code,{children:"manager.tsx"})," file is the UI responsible for rendering the search, the toolbar, registering custom addons, as well as theming the UI."]}),`
`,e.exports.jsx(o.h3,{id:"build-scripts",children:"Build scripts"}),`
`,e.exports.jsxs(o.p,{children:["Several build scripts are used to generate the stories documentation. They are located in the ",e.exports.jsx(o.code,{children:"packages/playground/build-scripts-storybook"})," folder. Ran before every build of the storybook, they are responsible for generating the ",e.exports.jsx(o.code,{children:"argTypes.ts"})," file, to merge the ",e.exports.jsx(o.code,{children:"custom-elements.json"})," files and parse the content of the ",e.exports.jsx(o.code,{children:"docs"})," folder to ",e.exports.jsx(o.code,{children:"mdx"})," format."]}),`
`,e.exports.jsx(o.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.exports.jsx(o.p,{children:"If you encounter an error when running yarn storybook, try the following:"}),`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsxs(o.li,{children:["Make sure you have built the sources by running ",e.exports.jsx(o.code,{children:"yarn build"}),"."]}),`
`,e.exports.jsxs(o.li,{children:["Storybook parses the documentation from the ",e.exports.jsx(o.code,{children:"docs"})," folder. Files are transformed from ",e.exports.jsx(o.code,{children:".md"})," to ",e.exports.jsx(o.code,{children:".mdx"})," format. If you encounter an error, check if it is mdx related, locate the errored file and use the ",e.exports.jsx(o.a,{href:"https://mdxjs.com/playground/",target:"_blank",rel:"nofollow noopener noreferrer",children:"MDX Playground"})," to fix it."]}),`
`]})]})}}const p=()=>{throw new Error("Docs-only story")};p.parameters={docsOnly:!0};const t={title:"Docs/Contributing/Writing stories",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const k=["__page"];export{k as __namedExportsOrder,p as __page,t as default};
//# sourceMappingURL=04-writing-stories.49343b95.js.map
