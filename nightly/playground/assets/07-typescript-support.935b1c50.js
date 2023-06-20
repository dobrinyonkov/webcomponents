import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as p}from"./index.ed786ae5.js";import{u as r}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.a9f3eb87.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function f(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.exports.jsx(n,Object.assign({},t,{children:e.exports.jsx(o,{})})):o();function o(){const s=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",pre:"pre",a:"a"},r(),t.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(p,{title:"Docs/Getting started/Typescript support"}),`
`,e.exports.jsx(s.h1,{id:"typescript-support",children:"TypeScript Support"}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Note: TypeScript support is experimental and subject to change"}),". If you consume the web components via TypeScript, you might have to adjust your code before the TypeScript definitions become final and officially supported."]}),`
`,e.exports.jsxs(s.p,{children:["Since ",e.exports.jsx(s.code,{children:"1.11.0"})," we are providing ",e.exports.jsx(s.code,{children:"TypeScript definitions"})," (as ",e.exports.jsx(s.code,{children:".d.ts"})," files) for all framework's and components' APIs, available to applications, written in TypeScript. Previously, without definitions, the usage of UI5 Web Components in TypeScript application was not optimal as the types have been missing and inferred by the TS compiler as ",e.exports.jsx(s.code,{children:"any"}),`.
Now, when accessing a public API, you will benefit from static code checks, autocompletion, etc. as expected in a TypeScript app.`]}),`
`,e.exports.jsxs(s.p,{children:[e.exports.jsx(s.strong,{children:"Example:"})," usage of ",e.exports.jsx(s.code,{children:"setLanguage"})," from ",e.exports.jsx(s.code,{children:"@ui5/webcomponents-base"})]}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-ts",children:`import  { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";

setLanguage("de");

`})}),`
`,e.exports.jsx(s.p,{children:"You will get a proper documentation"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-html",children:`setLanguage(language: string): Promise<void>

Changes the current language, re-fetches all message bundles, updates all language-aware components and returns a promise that resolves when all rendering is done.

@public
@returns
`})}),`
`,e.exports.jsx(s.p,{children:"When you pass a wrong argument:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-ts",children:`setLanguage(false)
`})}),`
`,e.exports.jsx(s.p,{children:"You will get a TypeScript error:"}),`
`,e.exports.jsx(s.pre,{children:e.exports.jsx(s.code,{className:"language-html",children:`Argument of type 'boolean' is not assignable to parameter of type 'string'.
`})}),`
`,e.exports.jsxs(s.p,{children:["Next: ",e.exports.jsx(s.a,{href:"./?path=/docs/docs-getting-started-wrapping-up--docs",children:"Wrapping Up"})]})]})}}export{f as default};
//# sourceMappingURL=07-typescript-support.935b1c50.js.map
