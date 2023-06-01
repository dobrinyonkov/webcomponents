import{j as e}from"./jsx-runtime.97c1caca.js";import{M as s}from"./index.4281e927.js";import{u as t}from"./index.3107f185.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.d2d30c97.js";import"../sb-preview/runtime.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";function r(o){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",code:"code",pre:"pre"},t(),o.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(s,{title:"Docs/Contributing/Playground app"}),`
`,e.exports.jsx(n.h1,{id:"running-the-ui5-web-components-playground-app-locally",children:"Running the UI5 Web Components Playground App Locally"}),`
`,e.exports.jsxs(n.p,{children:["The ",e.exports.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/",target:"_blank",rel:"nofollow noopener noreferrer",children:"deployed"}),` playground can be run locally to test your changes and samples.
In order to do so, you have to follow the steps below:`]}),`
`,e.exports.jsx(n.h2,{id:"1-install-ruby",children:"1. Install Ruby."}),`
`,e.exports.jsxs(n.p,{children:["See how to install Ruby depending on your OS ",e.exports.jsx(n.a,{href:"https://www.ruby-lang.org/en/downloads/",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.strong,{children:"Note:"})," Some OS might come with built-in Ruby, so you don't have to install it on your own. (To check if Ruby is installed, run ",e.exports.jsx(n.code,{children:"ruby -v"})," in the terminal.)"]}),`
`,e.exports.jsx(n.h2,{id:"2-install-bundler",children:"2. Install Bundler."}),`
`,e.exports.jsxs(n.p,{children:[e.exports.jsx(n.a,{href:"https://bundler.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bundler"}),` is a tool for managing dependencies in Ruby. You need to install version 2.02 of Bundler.
In order to install it run:`]}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-bash",children:`gem install bundler -v 2.0.2
`})}),`
`,e.exports.jsx(n.h2,{id:"3-go-to-the-playground-package",children:"3. Go to the playground package."}),`
`,e.exports.jsx(n.h2,{id:"4-install-all-of-the-playground-dependencies",children:"4. Install all of the playground dependencies."}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-bash",children:`bundle install
`})}),`
`,e.exports.jsx(n.h2,{id:"5-go-to-the-project-root-folder",children:"5. Go to the project root folder."}),`
`,e.exports.jsx(n.h2,{id:"6-start-the-playground-locally",children:"6. Start the playground locally."}),`
`,e.exports.jsx(n.p,{children:"In your terminal, run the following command:"}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-bash",children:`yarn start:playground
`})}),`
`,e.exports.jsxs(n.p,{children:["This will build all the necessary assets and will start local server on your machine. To access the playground, visit: ",e.exports.jsx(n.a,{href:"http://localhost:4000/",target:"_blank",rel:"nofollow noopener noreferrer",children:"http://localhost:4000/"})]})]})}function j(o={}){const{wrapper:n}=Object.assign({},t(),o.components);return n?e.exports.jsx(n,Object.assign({},o,{children:e.exports.jsx(r,o)})):r(o)}export{j as default};
//# sourceMappingURL=03-playground-app.465a0faa.js.map
