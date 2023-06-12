import{x as p}from"./lit-element.57026f9a.js";import{o as I}from"./unsafe-html.5df53a7b.js";import{l as s}from"./if-defined.08fba587.js";import{D as W}from"./docs.4dc8a165.js";import{W as k}from"./WrappingType.16fc58a8.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.55990814.js";import"./iframe.6b86e3a9.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.4504b959.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const M={wrappingType:{control:"select",options:["None","Normal"]},default:{control:{type:"text"}}},v={package:"@ui5/webcomponents"},d="ui5-label",X={title:"Main/Label",component:d,parameters:{docs:{page:W({...v,component:d})}},argTypes:M},l=e=>p`
<ui5-label
    for="${s(e.for)}"
    ?required="${s(e.required)}"
    ?show-colon="${s(e.showColon)}"
    wrapping-type="${s(e.wrappingType)}"
    class="${s(e.className)}"
>${I(e.default)}</ui5-label>`,u=e=>(r,{args:N})=>p`
${r({args:{...N,for:e}})}
<ui5-input id="${e}"></ui5-input>`,a=l.bind({});a.args={showColon:!0,default:"Simple Label"};a.decorators=[u("myInputSimple")];const i=l.bind({});i.args={showColon:!0,required:!0,default:"Required label with colon"};i.decorators=[u("myInputRequired")];const L=(e,{args:r})=>p`
<style>
    .w200 {
        width: 200px;
    }
</style>
${e({args:{...r,className:"w200"}})}`,o=l.bind({});o.args={showColon:!0,default:"Long labels are truncated by default."};o.decorators=[L,u("myInputTruncation")];const n=l.bind({});n.args={wrappingType:k.Normal,showColon:!0,default:`Long labels can wrap if the text is too long. Set 'wrapping-type="Normal"'. Long labels can wrap if the text is too long`};n.decorators=[L,u("myInputWrapping")];const t=l.bind({});t.args={required:!0,showColon:!0};t.decorators=[(e,{args:r})=>p`
    ${e({args:{...r,for:"myInput",default:"First name"}})}
    <ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>

    ${e({args:{...r,for:"myDatePicker",default:"Date of birth"}})}
    <ui5-date-picker id="myDatePicker" required></ui5-date-picker>

    ${e({args:{...r,for:"mySelect",default:"Job"}})}
    <ui5-select id="mySelect" required>
        <ui5-option>Manager</ui5-option>
        <ui5-option>Sales</ui5-option>
        <ui5-option selected>Developer</ui5-option>
    </ui5-select>

    ${e({args:{...r,for:"myTextArea",default:"Description"}})}
    <ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>

    <div style="display: flex; align-items: center;">
        ${e({args:{...r,for:"myCheckBox",default:"Accept terms of use"}})}
        <ui5-checkbox id="myCheckBox" required></ui5-checkbox>
    </div>
`,e=>p`
<style>
    .f {
        display: flex;
        flex-direction: column;
    }
    .f > :nth-child(2n) {
        margin-bottom: 1.5rem;
    }
</style>

<div class="f">
    ${e()}
</div>`];var c,f,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(m=(f=a.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var g,$,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(h=($=i.parameters)==null?void 0:$.docs)==null?void 0:h.source}}};var w,y,b;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var D,T,q;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(q=(T=n.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var x,C,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return html\`
<ui5-label
    for="\${ifDefined(args.for)}"
    ?required="\${ifDefined(args.required)}"
    ?show-colon="\${ifDefined(args.showColon)}"
    wrapping-type="\${ifDefined(args.wrappingType)}"
    class="\${ifDefined(args.className)}"
>\${unsafeHTML(args.default)}</ui5-label>\`;
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const Y=["Basic","RequiredWithColon","Truncating","WrappingText","UsageWithInputs"];export{a as Basic,i as RequiredWithColon,o as Truncating,t as UsageWithInputs,n as WrappingText,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Label.stories.1bf92d84.js.map
