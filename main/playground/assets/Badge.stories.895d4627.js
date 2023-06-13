import{x as y}from"./lit-element.57026f9a.js";import{l as c}from"./if-defined.08fba587.js";import{o as l}from"./unsafe-html.5df53a7b.js";import{D}from"./docs.781bbbf4.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.374a5b2f.js";import"./iframe.307b6ef2.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.c286fd3e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const L={default:{control:{type:"text"}},icon:{control:{type:"text"}}},M={package:"@ui5/webcomponents",since:"0.12.0"},d="ui5-badge",F={title:"Main/Badge",component:d,parameters:{docs:{page:D({...M,component:d})}},argTypes:L},s=e=>y`
<ui5-badge
    color-scheme="${c(e.colorScheme)}"
    style="${c(e.style)}"
>
    ${l(e.icon)}
    ${l(e.default)}
</ui5-badge>`,r=s.bind({});r.args={colorScheme:"6",icon:'<ui5-icon name="pending" slot="icon"></ui5-icon>',default:"Pending"};const n=s.bind({});n.args={default:"This would truncate as it is too long",style:"width: 200px"};const o=e=>`<ui5-icon name="${e}" slot="icon"></ui5-icon>`,H=[{icon:o("accept"),default:""},{icon:o("sap-ui5"),default:""},{icon:o("add-equipment"),default:"In progress"},{icon:o("lab"),default:""},{icon:o("email-read"),default:""},{icon:"",default:"Pending"},{icon:o("lightbulb"),default:"New idea"},{icon:o("locked"),default:"Locked"},{icon:o("flight"),default:"En route"},{icon:"",default:"Archived"}],a=s.bind({});a.decorators=[(e,t)=>y`
            ${H.map((i,T)=>e({args:{colorScheme:t.args.colorScheme||(T+1).toString(),icon:t.args.icon||i.icon,default:t.args.default||i.default}}))}`];var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,f,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var $,b,S;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  return html\`
<ui5-badge
    color-scheme="\${ifDefined(args.colorScheme)}"
    style="\${ifDefined(args.style)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-badge>\`;
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const G=["Basic","Truncating","AllColorSchemes"];export{a as AllColorSchemes,r as Basic,n as Truncating,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Badge.stories.895d4627.js.map
