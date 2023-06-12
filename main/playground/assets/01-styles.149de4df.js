import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as a}from"./index.4b42eb1d.js";import{u as r}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.13acee56.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function j(s={}){const{wrapper:n}=Object.assign({},r(),s.components);return n?e.exports.jsx(n,Object.assign({},s,{children:e.exports.jsx(o,{})})):o();function o(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",a:"a"},r(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(a,{title:"Docs/Customizing/Styles"}),`
`,e.exports.jsx(t.h1,{id:"styling-ui5-web-components",children:"Styling UI5 Web Components"}),`
`,e.exports.jsx(t.p,{children:"The current article describes general patterns to style the UI5 Web Components."}),`
`,e.exports.jsx(t.p,{children:"One of the core principles of Web Components is the encapsulation. The HTML and styles are encapsulated in the Shadow DOM. This avoids clashes with any CSS, brought by the rest of the application, but also makes customization harder. However, there are quite some options to apply custom styling."}),`
`,e.exports.jsx(t.h2,{id:"styles-on-tag-level",children:"Styles on tag level"}),`
`,e.exports.jsx(t.p,{children:"We designed some components such as Title, Label, Badge, Button, Input, and few more in such a way, that it is possible to set styles/classes on the custom elements that will take effect."}),`
`,e.exports.jsx("b",{children:"For example:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-css",children:`  ui5-input {
    width: 150px;
    color: yellow;
    background: purple;
  }
`})}),`
`,e.exports.jsxs(t.p,{children:["You can try this yourself on the Input's ",e.exports.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents/main/playground/main/pages/Input/",target:"_blank",rel:"nofollow noopener noreferrer",children:"test page"}),"."]}),`
`,e.exports.jsx(t.p,{children:"Unfortunately, this can't be done for all components, because it depends on the complexity of the DOM structure."}),`
`,e.exports.jsx(t.h2,{id:"usage-of-shadow-parts",children:"Usage of Shadow Parts"}),`
`,e.exports.jsxs(t.p,{children:["For more complex components, the styling on the tag level is not possible, therefore we introduced shadow parts on specific elements in the components\u2019 Shadow DOM, that the user can restyle, using ",e.exports.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",target:"_blank",rel:"nofollow noopener noreferrer",children:"standard CSS syntax"})," for shadow parts."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx("b",{children:"For example:"})," You can change the appearance of the CardHeader\u2019s status with the CSS shadow parts syntax:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`<ui5-card>
	<ui5-card-header
        title-text="Quick Links"
		status="4 of 10"
		slot="header">
	</ui5-card-header>
</ui5-card>
`})}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-css",children:`ui5-card-header::part(status) {
  color: red;
}
`})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx("b",{children:"Note:"}),' All the available shadow parts are described in the API reference, as part of the "Overview" section of each component']}),`
`,e.exports.jsx(t.h2,{id:"changing-css-vars",children:"Changing CSS Vars"}),`
`,e.exports.jsxs(t.p,{children:["The UI5 WebComponents leverage CSS variables, so if you inspect the elements inside the Shadow DOM, you will probably find which variable you need to change. Check the list of all ",e.exports.jsx(t.a,{href:"https://github.com/SAP/theming-base-content/blob/master/content/Base/baseLib/sap_horizon/css_variables.css",target:"_blank",rel:"nofollow noopener noreferrer",children:"Global CSS Variables"})," that we use in the component. Altering them will change the component's appearance."]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx("b",{children:"For example:"})," You can change the button text color by overriding the ",e.exports.jsx(t.code,{children:"--sapButton_TextColor"})," CSS variable as follows."]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`<ui5-button>Press</ui5-button>
`})}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-css",children:`ui5-button {
  --sapButton_TextColor: purple;
}
`})}),`
`,e.exports.jsx(t.h2,{id:"custom-theme-schema",children:"Custom Theme schema"}),`
`,e.exports.jsx(t.p,{children:`To change the entire colour scheme, the users can create a custom theme.
You can find here more info in the next article.`}),`
`,e.exports.jsxs(t.p,{children:["Next: ",e.exports.jsx(t.a,{href:"./?path=/docs/docs-customizing-theme--docs",children:"Custom Theming"})]})]})}}export{j as default};
//# sourceMappingURL=01-styles.149de4df.js.map
