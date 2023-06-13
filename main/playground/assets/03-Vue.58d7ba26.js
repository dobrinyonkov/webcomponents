import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as r}from"./index.599ae7e4.js";import{u as i}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.45f634c2.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function f(n={}){const{wrapper:o}=Object.assign({},i(),n.components);return o?e.exports.jsx(o,Object.assign({},n,{children:e.exports.jsx(s,{})})):s();function s(){const t=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",pre:"pre",code:"code"},i(),n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(r,{title:"Docs/Frameworks/Vue"}),`
`,e.exports.jsx(t.h1,{id:"get-started-with-ui5-web-components--vuejs",children:"Get Started with UI5 Web Components & Vue.js"}),`
`,e.exports.jsx(t.p,{children:"In this tutorial you will learn how to add UI5 Web Components to your application. You can add UI5 Web Components both to new Vue.js applications and to already existing ones."}),`
`,e.exports.jsx(t.h2,{id:"setting-up-a-vite-and-vuejs-project-with-ui5-web-components",children:"Setting up a Vite and Vue.js project with UI5 Web Components"}),`
`,e.exports.jsx("br",{}),`
`,e.exports.jsx(t.h3,{id:"step-1-setup-a-vue-project-with-vite",children:"Step 1. Setup a Vue project with Vite."}),`
`,e.exports.jsxs(t.p,{children:["To initialize a Vue project based on Vite, please follow the instructions provided in the ",e.exports.jsx(t.a,{href:"https://vuejs.org/guide/quick-start.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"official Vue documentation."})]}),`
`,e.exports.jsx(t.h3,{id:"step-2-add-ui5-web-components",children:"Step 2. Add UI5 Web Components"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-bash",children:`npm install @ui5/webcomponents
`})}),`
`,e.exports.jsx(t.h3,{id:"step-3-instruct-the-compiler-to-treat-ui5-web-components-as-custom-elements",children:"Step 3. Instruct the compiler to treat UI5 Web Components as custom elements."}),`
`,e.exports.jsxs(t.p,{children:["To avoid issues, it is recommended to exclude our custom elements from component resolution by specifying ",e.exports.jsx(t.code,{children:"compilerOptions.isCustomElement"})," in our ",e.exports.jsx(t.code,{children:"vite.config"})," file."]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-ts",children:`// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a ui5- as custom elements
          isCustomElement: tag => tag.includes('ui5-')
        }
      }
    })
  ]
})
`})}),`
`,e.exports.jsx(t.h3,{id:"step-4-import-the-components-that-you-are-going-to-use",children:"Step 4. Import the components that you are going to use."}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-js",children:`import "@ui5/webcomponents/dist/Button.js";
`})}),`
`,e.exports.jsx(t.h3,{id:"step-5-use-the-imported-elements-in-your-application",children:"Step 5. Use the imported elements in your application."}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`<ui5-button>Hello world!</ui5-button>
`})}),`
`,e.exports.jsx(t.h3,{id:"step-6-launch-the-application",children:"Step 6. Launch the application"}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-bash",children:`npm run dev
`})}),`
`,e.exports.jsx(t.h2,{id:"additional-info",children:"Additional Info"}),`
`,e.exports.jsx(t.h3,{id:"two-way-data-binding",children:"Two-Way Data Binding"}),`
`,e.exports.jsxs(t.p,{children:[e.exports.jsx(t.code,{children:"v-model"})," binding doesn't work for custom elements. In order to use two-way data binding, you need to bind and update the value yourself like this:"]}),`
`,e.exports.jsx(t.pre,{children:e.exports.jsx(t.code,{className:"language-html",children:`<ui5-input
	:value="inputValue"
	@input="inputValue = $event.target.value">
</ui5-input>
`})})]})}}export{f as default};
//# sourceMappingURL=03-Vue.58d7ba26.js.map
