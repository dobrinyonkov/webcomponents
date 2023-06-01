import{x as p}from"./lit-element.179636e6.js";import{D as H}from"./docs.900f4496.js";import{o as w}from"./unsafe-html.ff185b2f.js";import{l as s}from"./if-defined.9da98955.js";import{T as i}from"./TitleLevel.1d8f6598.js";import{W as h}from"./WrappingType.16fc58a8.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.0ad8f14d.js";import"./iframe.d2d30c97.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4281e927.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const D={level:{control:"select",options:["H1","H2","H3","H4","H5","H6"]},wrappingType:{control:"select",options:["None","Normal"]}},y={package:"@ui5/webcomponents"},l="ui5-title",A={title:"Main/Title",component:l,parameters:{docs:{page:H({...y,component:l})}},argTypes:D},r=e=>p`
<ui5-title
    level="${s(e.level)}"
    wrapping-type="${s(e.wrappingType)}"
>${w(e.default)}</ui5-title>`;r.decorators=[(e,{args:t})=>p`
${e({args:{...t,level:i.H1}})}
${e({args:{...t,level:i.H2}})}
${e({args:{...t,level:i.H3}})}
${e({args:{...t,level:i.H4}})}
${e({args:{...t,level:i.H5}})}
${e({args:{...t,level:i.H6}})}`];const a=r.bind({});a.args={default:"Title Text"};a.decorators=[...r.decorators];const o=r.bind({});o.args={default:"Long Title Text Text Text Which Wraps",wrappingType:h.Normal};o.decorators=[...r.decorators,e=>p`
<style>
    ui5-title {
        width: 15ch;
    }
</style>
${e()}`];const n=r.bind({});n.args={default:'<ui5-link design="Default">With Default Link (57)</ui5-link>'};n.decorators=[...r.decorators];var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`
<ui5-title
    level="\${ifDefined(args.level)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>\${unsafeHTML(args.default)}</ui5-title>\`;
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,g,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`
<ui5-title
    level="\${ifDefined(args.level)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>\${unsafeHTML(args.default)}</ui5-title>\`;
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var T,$,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return html\`
<ui5-title
    level="\${ifDefined(args.level)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
>\${unsafeHTML(args.default)}</ui5-title>\`;
}`,...(v=($=n.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};const C=["Basic","Wrapping","WithLink"];export{a as Basic,n as WithLink,o as Wrapping,C as __namedExportsOrder,A as default};
//# sourceMappingURL=Title.stories.2b402c66.js.map
