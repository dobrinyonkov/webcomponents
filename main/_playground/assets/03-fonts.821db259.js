import{j as e}from"./jsx-runtime.97c1caca.js";import{M as r}from"./index.4281e927.js";import{u as s}from"./index.3107f185.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.d2d30c97.js";import"../sb-preview/runtime.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";function n(o){const t=Object.assign({h1:"h1",h2:"h2",code:"code",p:"p",pre:"pre",strong:"strong",ul:"ul",li:"li"},s(),o.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(r,{title:"Docs/Customizing/Fonts"}),`
`,e.exports.jsx(t.h1,{id:"custom-fonts",children:"Custom Fonts"}),`
`,e.exports.jsxs(t.h2,{id:"the-data-ui5-font-face-font-face-style-tag",children:["The ",e.exports.jsx(t.code,{children:"data-ui5-font-face"})," Font-Face ",e.exports.jsx(t.code,{children:"style"})," Tag"]}),`
`,e.exports.jsxs(t.p,{children:["Upon ",e.exports.jsx(t.code,{children:"boot"}),", the UI5 Web Components framework creates a ",e.exports.jsx(t.code,{children:"<style data-ui5-font-face>"})," tag in the ",e.exports.jsx(t.code,{children:"<head>"})," in order to load the necessary fonts."]}),`
`,e.exports.jsx(t.p,{children:"For example:"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`<style type="text/css" data-ui5-font-face="">
	@font-face {
		font-family: "72";
		font-style: normal;
		font-weight: 400;
		src: local("72"),
			url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2");
	}
	
	................
</style>
`})}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.strong,{children:"Important:"})," Notice the ",e.exports.jsx(t.code,{children:"data-ui5-font-face"})," attribute. It is unique and recognized by UI5 Web Components."]}),`
`,e.exports.jsx(t.h2,{id:"customizing-fonts",children:"Customizing Fonts"}),`
`,e.exports.jsx(t.p,{children:"You might need to customize fonts for several reasons:"}),`
`,e.exports.jsxs(t.ul,{children:[`
`,e.exports.jsx(t.li,{children:"To provide different paths for the fonts (e.g. no public internet connection on the server)."}),`
`,e.exports.jsxs(t.li,{children:["To provide additional declarations inside ",e.exports.jsx(t.code,{children:"@font-face"}),"."]}),`
`,e.exports.jsxs(t.li,{children:["To download additional fonts, such as e.g. ",e.exports.jsx(t.code,{children:"72-Light"}),"."]}),`
`,e.exports.jsx(t.li,{children:"Not to download any of the default fonts."}),`
`]}),`
`,e.exports.jsxs(t.p,{children:["To do that, just create a ",e.exports.jsx(t.code,{children:'<style type="text/css" data-ui5-font-face="">'})," tag in the ",e.exports.jsx(t.code,{children:"head"}),` of your HTML page and
provide arbitrary content for it.`]}),`
`,e.exports.jsxs(t.p,{children:["Then, when the UI5 Web Components framework boots, it will detect the existence of this tag by the ",e.exports.jsx(t.code,{children:"data-ui5-font-face"}),`
attribute, and will not create it. The one you provided will be used instead.`]}),`
`,e.exports.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.exports.jsxs(t.p,{children:["In order to use the ",e.exports.jsx(t.code,{children:"72-Light"})," font in your app and have an additional setting (",e.exports.jsx(t.code,{children:"font-display"}),"), you could add the following markup in the ",e.exports.jsx(t.code,{children:"<head>"})," of your HTML page:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`    <style type="text/css" data-ui5-font-face="">
        @font-face {
            font-family: "72";
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: local("72-Light"),
            url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_fiori_3/fonts/72-Light.woff2?ui5-webcomponents) format("woff2");
        }
    </style>
`})})]})}function j(o={}){const{wrapper:t}=Object.assign({},s(),o.components);return t?e.exports.jsx(t,Object.assign({},o,{children:e.exports.jsx(n,o)})):n(o)}export{j as default};
//# sourceMappingURL=03-fonts.821db259.js.map
