import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as i}from"./index.4b42eb1d.js";import{u as t}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.13acee56.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function b(s={}){const{wrapper:o}=Object.assign({},t(),s.components);return o?e.exports.jsx(o,Object.assign({},s,{children:e.exports.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",ul:"ul",li:"li",code:"code",pre:"pre"},t(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Docs/FAQ"}),`
`,e.exports.jsx(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: How can I play with UI5 Web Components easily?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," Use this ",e.exports.jsx(n.a,{href:"https://codesandbox.io/s/71r1x5o51q?fontsize=14&module=%2Findex.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodeSandBox"}),"."]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: Where is the documentation?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," There are several resources:"]}),`
`,e.exports.jsxs(n.ul,{children:[`
`,e.exports.jsx(n.li,{children:e.exports.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/playground/components",target:"_blank",rel:"nofollow noopener noreferrer",children:"Web Components APIs"})}),`
`,e.exports.jsx(n.li,{children:e.exports.jsx(n.a,{href:"https://blogs.sap.com/2019/04/01/the-fastest-way-to-get-started-with-ui5-web-components/",target:"_blank",rel:"nofollow noopener noreferrer",children:"How to get started?"})}),`
`]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: Is there a CDN to load UI5 Web Components from?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," No. The best practice is to build your own bundle. See ",e.exports.jsx(n.a,{href:"https://blogs.sap.com/2021/05/28/getting-started-with-ui5-web-components-in-2021/",target:"_blank",rel:"nofollow noopener noreferrer",children:"this article"})," for details."]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: Are UI5 Web Components APIs stable?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," Mostly yes since the project is in Release Candidate state, but minor changes may still be expected until the official release."]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: Can I create my own UI5 Web Components?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," Yes, for more information see ",e.exports.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents/blob/main/docs/5-development/01-custom-UI5-Web-Components-Packages.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"Creating a Custom UI5 Web Components Package"})]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: How can I cancustomize UI5 Web Components' styles?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," Read the ",e.exports.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents/blob/main/docs/3-customizing/01-styles.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"Styling UI5 Web Components"})," article."]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: How big is the runtime?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," Currently on main, a simple working Web Component (",e.exports.jsx(n.code,{children:"ui5-label"}),`) and its dependencies equals to around 22K gzipped.
Two simple web components (`,e.exports.jsx(n.code,{children:"ui5-label"})," and ",e.exports.jsx(n.code,{children:"ui5-icon"}),") and their dependencies equal to around 25K gzipped."]}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"Note:"})," The quoted numbers include only a ",e.exports.jsx(n.code,{children:"<ui5-label>"})," (respectively ",e.exports.jsx(n.code,{children:"ui5-label"})," and ",e.exports.jsx(n.code,{children:"ui5-icon"}),`) working on Chrome/FF/Safari with the default settings (theme/language).
Additional features, settings and old browser support will increase bundle size accordingly.`]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: What is the difference between UI5 Web Components and OpenUI5?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," See the project's ",e.exports.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents",target:"_blank",rel:"nofollow noopener noreferrer",children:"readme.md"})," for more on this."]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: Can I use UI5 Web Components in an OpenUI5 application?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," This is not necessary as OpenUI5 already provides equivalents in the form of UI5 Controls."]}),`
`,e.exports.jsx(n.p,{children:e.exports.jsx(n.strong,{children:"Q: How can I hide not yet upgraded Web Components so that users don't see them until styled?"})}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"A:"})," You can place a CSS rule such as:"]}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-CSS",children:`*:not(:defined) {
	display: none;
}
`})}),`
`,e.exports.jsx(n.p,{children:"or:"}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-CSS",children:`*:not(:defined) {
	visibility: hidden;
}
`})}),`
`,e.exports.jsx(n.p,{children:"in your application, depending on your preference."}),`
`,e.exports.jsxs(n.p,{children:["The selector ",e.exports.jsx(n.code,{children:"*:not(:defined)"})," will match all web components that haven't been defined yet."]}),`
`,e.exports.jsx(n.p,{children:"Alternatively, you could only apply this rule for selected web components:"}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-CSS",children:`ui5-button:not(:defined), ui5-label:not(:defined) {
	display: none;
}
`})}),`
`,e.exports.jsxs(n.p,{children:["Please note that the ",e.exports.jsx(n.code,{children:":defined"})," CSS pseudo-selector is not supported by the Edge and Internet Explorer 11 browsers."]})]})}}export{b as default};
//# sourceMappingURL=FAQ.231784e7.js.map
