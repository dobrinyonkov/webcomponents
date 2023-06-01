import{x as B}from"./lit-element.179636e6.js";import{l as i}from"./if-defined.9da98955.js";import{o as c}from"./unsafe-html.ff185b2f.js";import{D as C}from"./docs.400266cf.js";import{C as y}from"./ComboBoxFilter.2b008b60.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.defbc0ae.js";import"./iframe.7336b0e7.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.a0b4809e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const H={filter:{control:"select",options:["Contains","None","StartsWith","StartsWithPerTerm"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]}},L={package:"@ui5/webcomponents",since:"1.0.0-rc.6"},l="ui5-combobox",U={title:"Main/ComboBox",component:l,subcomponents:{ComboBoxItem:"ui5-cb-item",ComboBoxGroupItem:"ui5-cb-group-item"},parameters:{docs:{page:C({...L,component:l})}},argTypes:H},o=e=>B`<ui5-combobox
        value="${i(e.value)}"
        placeholder="${i(e.placeholder)}"
        ?disabled="${i(e.disabled)}"
        ?readonly="${i(e.readonly)}"
        ?required="${i(e.required)}"
        ?loading="${i(e.loading)}"
        filter="${i(e.filter)}"
        value-state="${i(e.valueState)}"
        accessible-name="${i(e.accessibleName)}"
        accessible-name-ref="${i(e.accessibleNameRef)}"
>
        ${c(e.default)}
        ${c(e.valueStateMessage)}
        ${c(e.icon)}
</ui5-combobox>`,a=o.bind({});a.args={placeholder:"Enter value",default:`
        <ui5-cb-item text="Item 1"></ui5-cb-item>
        <ui5-cb-item text="Item 2"></ui5-cb-item>
        <ui5-cb-item text="Item 3"></ui5-cb-item>
    `};const t=o.bind({});t.args={disabled:!0,value:"Disabled"};const r=o.bind({});r.args={placeholder:"Contains Filtering",filter:y.Contains,default:`
        <ui5-cb-item text="Austria"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria"></ui5-cb-item>
        <ui5-cb-item text="Germany"></ui5-cb-item>
        <ui5-cb-item text="United Kingdom"></ui5-cb-item>
        <ui5-cb-item text="Kazakhstan"></ui5-cb-item>
    `};const s=o.bind({});s.args={placeholder:"Two-column layout",default:`
        <ui5-cb-item text="Austria" additional-text="AT"></ui5-cb-item>
        <ui5-cb-item text="Belgium" additional-text="BE"></ui5-cb-item>
        <ui5-cb-item text="Brazil" additional-text="BR"></ui5-cb-item>
        <ui5-cb-item text="Bulgaria" additional-text="BG"></ui5-cb-item>
        <ui5-cb-item text="Canada" additional-text="CA"></ui5-cb-item>
    `};const n=o.bind({});n.args={placeholder:"ComboBox with grouping of suggestions",default:`
        <ui5-cb-group-item text="A"></ui5-cb-group-item>
        <ui5-cb-item text="Argentina"></ui5-cb-item>
        <ui5-cb-item text="Australia"></ui5-cb-item>
        <ui5-cb-item text="Austria"></ui5-cb-item>	
        <ui5-cb-group-item text="B"></ui5-cb-group-item>
        <ui5-cb-item text="Bahrain"></ui5-cb-item>
        <ui5-cb-item text="Belgium"></ui5-cb-item>
        <ui5-cb-item text="Brazil"></ui5-cb-item>
        <ui5-cb-group-item text="C"></ui5-cb-group-item>
        <ui5-cb-item text="Canada"></ui5-cb-item>
        <ui5-cb-item text="Chile"></ui5-cb-item>
    `};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,b,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var $,p,D;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(D=(p=r.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};var x,v,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var M,T,S;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:'args => html`<ui5-combobox\n        value="${ifDefined(args.value)}"\n        placeholder="${ifDefined(args.placeholder)}"\n        ?disabled="${ifDefined(args.disabled)}"\n        ?readonly="${ifDefined(args.readonly)}"\n        ?required="${ifDefined(args.required)}"\n        ?loading="${ifDefined(args.loading)}"\n        filter="${ifDefined(args.filter)}"\n        value-state="${ifDefined(args.valueState)}"\n        accessible-name="${ifDefined(args.accessibleName)}"\n        accessible-name-ref="${ifDefined(args.accessibleNameRef)}"\n>\n        ${unsafeHTML(args.default)}\n        ${unsafeHTML(args.valueStateMessage)}\n        ${unsafeHTML(args.icon)}\n</ui5-combobox>`',...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const j=["Basic","Disabled","Filters","TwoColumns","GroupingItems"];export{a as Basic,t as Disabled,r as Filters,n as GroupingItems,s as TwoColumns,j as __namedExportsOrder,U as default};
//# sourceMappingURL=ComboBox.stories.63ab0c6d.js.map
