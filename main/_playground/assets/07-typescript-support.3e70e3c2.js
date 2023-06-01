import{j as e}from"./jsx-runtime.97c1caca.js";import{M as r}from"./index.a0b4809e.js";import{u as o}from"./index.3107f185.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.7336b0e7.js";import"../sb-preview/runtime.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";function n(s){const t=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",a:"a"},o(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(r,{title:"Docs/Getting started/Typescript support"}),`
`,e.exports.jsx(t.h1,{id:"typescript-support",children:"TypeScript Support"}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Note: TypeScript support is experimental and subject to change"}),". If you consume the web components via TypeScript, you might have to adjust your code before the TypeScript definitions become final and officially supported."]}),`
`,e.exports.jsxs(t.p,{children:["Since ",e.exports.jsx(t.code,{children:"1.11.0"})," we are providing ",e.exports.jsx(t.code,{children:"TypeScript definitions"})," (as ",e.exports.jsx(t.code,{children:".d.ts"})," files) for all framework's and components' APIs, available to applications, written in TypeScript. Previously, without definitions, the usage of UI5 Web Components in TypeScript application was not optimal as the types have been missing and inferred by the TS compiler as ",e.exports.jsx(t.code,{children:"any"}),`.
Now, when accessing a public API, you will benefit from static code checks, autocompletion, etc. as expected in a TypeScript app.`]}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Example:"})," usage of ",e.exports.jsx(t.code,{children:"setLanguage"})," from ",e.exports.jsx(t.code,{children:"@ui5/webcomponents-base"})]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-ts",children:`import  { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";

setLanguage("de");

`})}),`
`,e.exports.jsx(t.p,{children:"You will get a proper documentation"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`setLanguage(language: string): Promise<void>

Changes the current language, re-fetches all message bundles, updates all language-aware components and returns a promise that resolves when all rendering is done.

@public
@returns
`})}),`
`,e.exports.jsx(t.p,{children:"When you pass a wrong argument:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-ts",children:`setLanguage(false)
`})}),`
`,e.exports.jsx(t.p,{children:"You will get a TypeScript error:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`Argument of type 'boolean' is not assignable to parameter of type 'string'.
`})}),`
`,e.exports.jsxs(t.p,{children:["Next: ",e.exports.jsx(t.a,{href:"./?path=/docs/docs-getting-started-wrapping-up--docs",children:"Wrapping Up"})]})]})}function j(s={}){const{wrapper:t}=Object.assign({},o(),s.components);return t?e.exports.jsx(t,Object.assign({},s,{children:e.exports.jsx(n,s)})):n(s)}export{j as default};
//# sourceMappingURL=07-typescript-support.3e70e3c2.js.map
