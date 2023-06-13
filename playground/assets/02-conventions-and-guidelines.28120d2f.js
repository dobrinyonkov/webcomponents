import{j as e}from"./jsx-runtime.796aa4d8.js";import{M as i}from"./index.66e07f1e.js";import{u as r}from"./index.04e75108.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./iframe.c9a514a1.js";import"../sb-preview/runtime.mjs";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";function g(n={}){const{wrapper:t}=Object.assign({},r(),n.components);return t?e.exports.jsx(t,Object.assign({},n,{children:e.exports.jsx(s,{})})):s();function s(){const o=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",br:"br",h3:"h3",ul:"ul",li:"li",h4:"h4",h5:"h5",strong:"strong",pre:"pre"},r(),n.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(i,{title:"Docs/Contributing/Conventions and guidelines"}),`
`,e.exports.jsx(o.h1,{id:"development-conventions-and-guidelines",children:"Development Conventions and Guidelines"}),`
`,e.exports.jsx(o.h2,{id:"javascript-coding-guidelines",children:"JavaScript Coding Guidelines"}),`
`,e.exports.jsxs(o.p,{children:["We enforce code style rules using ",e.exports.jsx(o.a,{href:"https://eslint.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"ESLint"}),". Execute ",e.exports.jsx(o.code,{children:"npm run lint"})," to check your code for style issues.",e.exports.jsx(o.br,{}),`
`,"You may also find an ESLint integration for your favorite IDE ",e.exports.jsx(o.a,{href:"https://eslint.org/docs/user-guide/integrations",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.exports.jsx(o.h2,{id:"testing",children:"Testing"}),`
`,e.exports.jsxs(o.p,{children:["Integration testing is based on ",e.exports.jsx(o.a,{href:"https://webdriver.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Webdriver.io"}),". You can run all tests using ",e.exports.jsx(o.code,{children:"npm run test"}),`.
If reasonable, take the time and write a test for the proposed change or fix. Learn more about testing at the `,e.exports.jsx(o.a,{href:"https://github.com/SAP/ui5-webcomponents/blob/main/docs/5-development/05-testing-UI5-Web-Components.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"Testing UI5 Web Components page"}),"."]}),`
`,e.exports.jsx(o.h2,{id:"git-guidelines",children:"Git Guidelines"}),`
`,e.exports.jsxs(o.p,{children:["We adhere to the ",e.exports.jsx(o.a,{href:"https://conventionalcommits.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"Conventional Commits"})," specification."]}),`
`,e.exports.jsx(o.h3,{id:"commit-message-style",children:"Commit Message Style"}),`
`,e.exports.jsx(o.p,{children:"The commit message consists of three parts:"}),`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsx(o.li,{children:"header"}),`
`,e.exports.jsx(o.li,{children:"body (optional)"}),`
`,e.exports.jsx(o.li,{children:"footer (optional)"}),`
`]}),`
`,e.exports.jsx(o.h4,{id:"commit-header",children:"Commit Header"}),`
`,e.exports.jsx(o.p,{children:"The commit header is the first line of the commit message. It consists of three parts: type, scope and description."}),`
`,e.exports.jsx(o.h5,{id:"commit-type",children:"Commit Type"}),`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsxs(o.li,{children:["It must be one of the following:",`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"fix"})," - a bug fix (note: this will indicate a release). If possible, include a test in your change."]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"feat"})," - a new feature (note: this will indicate a release)"]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"docs"})," - documentation only changes"]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"style"})," - changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"refactor"})," - a code change that neither fixes a bug nor adds a feature"]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"perf"})," - a code change that improves performance"]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"test"})," - adding missing tests"]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"chore"})," - changes to the build process or auxiliary tools and libraries such as documentation generation"]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"revert"})," - revert to a commit"]}),`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"WIP"})," - work in progress"]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(o.h5,{id:"commit-scope-optional",children:"Commit Scope (optional)"}),`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsx(o.li,{children:"It points to a specific component which is affected by the change. For example, ui5-button, ui5-card and ui5-table."}),`
`]}),`
`,e.exports.jsx(o.h5,{id:"commit-description",children:"Commit Description"}),`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsxs(o.li,{children:["Use the ",e.exports.jsx(o.strong,{children:"imperative present tense"}),'. Instead of "I added feature xy" or "Adding tests for" use "Add feature xy" or "Add tests for".']}),`
`,e.exports.jsxs(o.li,{children:["It should be no more than ",e.exports.jsx(o.strong,{children:"100 characters"})," long."]}),`
`]}),`
`,e.exports.jsx(o.h4,{id:"commit-body-optional",children:"Commit Body (optional)"}),`
`,e.exports.jsx(o.p,{children:"After the commit header, there should be an empty line followed by the optional commit body."}),`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsx(o.li,{children:"Describe the intention and reasoning of the change."}),`
`]}),`
`,e.exports.jsx(o.h4,{id:"commit-footer-optional",children:"Commit Footer (optional)"}),`
`,e.exports.jsx(o.p,{children:"After the optional commit body, there should be an empty line followed by the optional footer."}),`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsxs(o.li,{children:["If the change introduces a breaking change, it should start with ",e.exports.jsx(o.strong,{children:"BREAKING CHANGE:"})," followed by a description of the change.",`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsx(o.li,{children:e.exports.jsx(o.code,{children:"BREAKING CHANGE: remove press event"})}),`
`]}),`
`]}),`
`,e.exports.jsxs(o.li,{children:["If the change fixes an issue reported on GitHub, add the following line to the commit message:",`
`,e.exports.jsxs(o.ul,{children:[`
`,e.exports.jsxs(o.li,{children:[e.exports.jsx(o.code,{children:"Fixes #<issueNumber>"})," (e.g. ",e.exports.jsx(o.code,{children:"Fixes #42"}),")"]}),`
`]}),`
`]}),`
`]}),`
`,e.exports.jsx(o.h4,{id:"example",children:"Example"}),`
`,e.exports.jsx(o.pre,{children:e.exports.jsx(o.code,{children:`fix(ui5-button): correct focus with 'tab' key

The button should receive a correct focus outline
when the 'tab' key is pressed.

Fixes #42
`})})]})}}export{g as default};
//# sourceMappingURL=02-conventions-and-guidelines.28120d2f.js.map
