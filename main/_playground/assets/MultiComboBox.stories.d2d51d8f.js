import{x as M}from"./lit-element.179636e6.js";import{D as y}from"./docs.400266cf.js";import{o as s}from"./unsafe-html.ff185b2f.js";import{l as i}from"./if-defined.9da98955.js";import{V as v}from"./ValueState.7d8e1d89.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.defbc0ae.js";import"./iframe.7336b0e7.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.a0b4809e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const C={filter:{control:"select",options:["Contains","None","StartsWith","StartsWithPerTerm"]},open:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]}},S={package:"@ui5/webcomponents",since:"0.11.0"},r="ui5-multi-combobox",W={title:"Main/MultiComboBox",component:r,subcomponents:{MultiComboBoxItem:"ui5-mcb-item",MultiComboBoxGroupItem:"ui5-mcb-group-item"},parameters:{docs:{page:y({...S,component:r})}},argTypes:C},n=e=>M`
<ui5-multi-combobox
    value="${i(e.value)}"
    ?no-typeahead="${i(e.noTypeahead)}"
    placeholder="${i(e.placeholder)}"
    ?allow-custom-values="${i(e.allowCustomValues)}"
    ?disabled="${i(e.disabled)}"
    value-state="${i(e.valueState)}"
    ?readonly="${i(e.readonly)}"
    ?required="${i(e.required)}"
    filter="${i(e.filter)}"
    ?open="${i(e.open)}"
    accessible-name="${i(e.accessibleName)}"
    accessible-name-ref="${i(e.accessibleNameRef)}"
>
    ${s(e.default)}
    ${s(e.icon)}
    ${s(e.valueStateMessage)}
</ui5-multi-combobox>`,o=n.bind({});o.args={placeholder:"Type your value",default:'<ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>'};const t=n.bind({});t.args={placeholder:"Choose your countries",default:`
    <ui5-mcb-item selected="" text="Argentina"></ui5-mcb-item>
    <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
    <ui5-mcb-item text="Denmark"></ui5-mcb-item>
    <ui5-mcb-item text="England"></ui5-mcb-item>
    <ui5-mcb-item text="Albania"></ui5-mcb-item>
    <ui5-mcb-item text="Morocco"></ui5-mcb-item>
    <ui5-mcb-item text="Portugal"></ui5-mcb-item>
    <ui5-mcb-item text="Germany"></ui5-mcb-item>
    <ui5-mcb-item text="Philippines"></ui5-mcb-item>
    <ui5-mcb-item text="Paraguay"></ui5-mcb-item>`};t.storyName="Multi Combo Box with items";const a=n.bind({});a.args={placeholder:"Choose your state",valueState:v.Success,allowCustomValues:!0,default:`
    <ui5-mcb-item text="Fortune"></ui5-mcb-item>
    <ui5-mcb-item text="Luck"></ui5-mcb-item>
    <ui5-mcb-item selected="" text="Success"></ui5-mcb-item>
    <ui5-mcb-item text="Attention"></ui5-mcb-item>
    <ui5-mcb-item text="Caution"></ui5-mcb-item>
    <ui5-mcb-item text="Warning"></ui5-mcb-item>
    <ui5-mcb-item text="Fault"></ui5-mcb-item>
    <ui5-mcb-item text="Error"></ui5-mcb-item>
    <ui5-mcb-item text="Mistake"></ui5-mcb-item>`};a.storyName="Multi Combo Box with free text input";const m=n.bind({});m.args={placeholder:"Select a country",default:`
    <ui5-mcb-group-item text="Asia"></ui5-mcb-group-item>
    <ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
    <ui5-mcb-item text="China"></ui5-mcb-item>
    <ui5-mcb-item text="India"></ui5-mcb-item>
    <ui5-mcb-item text="Indonesia"></ui5-mcb-item>
    <ui5-mcb-group-item text="Europe"></ui5-mcb-group-item>
    <ui5-mcb-item text="Austria"></ui5-mcb-item>
    <ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
    <ui5-mcb-item text="Germany"></ui5-mcb-item>
    <ui5-mcb-item text="Italy"></ui5-mcb-item>
    <ui5-mcb-group-item text="North America"></ui5-mcb-group-item>
    <ui5-mcb-item text="Canada"></ui5-mcb-item>
    <ui5-mcb-item text="Granada"></ui5-mcb-item>
    <ui5-mcb-item text="Haiti"></ui5-mcb-item>
    <ui5-mcb-item text="United States"></ui5-mcb-item>`};m.storyName="Multi Combo Box with Grouping of Items";var u,c,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,f,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var p,g,$;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...($=(g=a.parameters)==null?void 0:g.docs)==null?void 0:$.source}}};var x,D,h;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
<ui5-multi-combobox
    value="\${ifDefined(args.value)}"
    ?no-typeahead="\${ifDefined(args.noTypeahead)}"
    placeholder="\${ifDefined(args.placeholder)}"
    ?allow-custom-values="\${ifDefined(args.allowCustomValues)}"
    ?disabled="\${ifDefined(args.disabled)}"
    value-state="\${ifDefined(args.valueState)}"
    ?readonly="\${ifDefined(args.readonly)}"
    ?required="\${ifDefined(args.required)}"
    filter="\${ifDefined(args.filter)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.valueStateMessage)}
</ui5-multi-combobox>\``,...(h=(D=m.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};const _=["BasicMultiComboBox","MultiComboBoxItems","MultiComboBoxFreeTextInput","MultiComboBoxGroupingItems"];export{o as BasicMultiComboBox,a as MultiComboBoxFreeTextInput,m as MultiComboBoxGroupingItems,t as MultiComboBoxItems,_ as __namedExportsOrder,W as default};
//# sourceMappingURL=MultiComboBox.stories.d2d51d8f.js.map
