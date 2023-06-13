import{x as v}from"./lit-element.57026f9a.js";import{l as i}from"./if-defined.08fba587.js";import{o}from"./unsafe-html.5df53a7b.js";import{D as H}from"./docs.95e49ae5.js";import{P as s}from"./PanelAccessibleRole.57662edc.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.e99f3c67.js";import"./iframe.84be3029.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.fa8fbb2b.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const L={accessibleRole:{control:"select",options:["Complementary","Form","Region"]},headerLevel:{control:"select",options:["H1","H2","H3","H4","H5","H6"]},default:{control:{type:"text"}},header:{control:{type:"text"}}},T={package:"@ui5/webcomponents"},d="ui5-panel",j={title:"Main/Panel",component:d,parameters:{docs:{page:H({...T,component:d})}},argTypes:L},l=e=>v`
<ui5-panel
    accessible-role="${i(e.accessibleRole)}"
    header-text="${i(e.headerText)}"
    ?fixed="${i(e.fixed)}"
    ?collapsed="${i(e.collapsed)}"
    ?no-animation="${i(e.noAnimation)}"
    header-level="${i(e.headerLevel)}"
    accessible-name="${i(e.accessibleName)}"
>
    ${o(e.header)}
    ${o(e.default)}
</ui5-panel>`,r=l.bind({});r.args={default:`
    <h1 class="content-color">I am a native heading!</h1>
    <ui5-label wrapping-type="Normal">Short text.</ui5-label>
    <br/>
    <ui5-label wrapping-type="Normal">Another text.</ui5-label>
    <p class="content-color">Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna.
        Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore
        commodo Lorem laboris nisi Lorem.
    </p>`,headerText:"Both expandable and expanded"};const t=l.bind({});t.args={default:`
    <ui5-list mode="MultiSelect">
        <ui5-li key="country1">Argentina</ui5-li>
        <ui5-li key="country2">Bulgaria</ui5-li>
        <ui5-li key="country3">China</ui5-li>
        <ui5-li key="country4">Germany</ui5-li>
        <ui5-li key="country5">Hungary</ui5-li>
        <ui5-li key="country6">England</ui5-li>
        <ui5-li key="country7">USA</ui5-li>
        <ui5-li key="country8">Canada</ui5-li>
    </ui5-list>`,headerText:"Select your country",accessibleRole:s.Complementary};const n=l.bind({});n.args={default:`
    <ui5-list mode="SingleSelectBegin">
        <ui5-li key="country1">Argentina</ui5-li>
        <ui5-li key="country2">Bulgaria</ui5-li>
        <ui5-li key="country3">China</ui5-li>
        <ui5-li key="country4">Germany</ui5-li>
    </ui5-list>`,headerText:"Country Of Birth",accessibleRole:s.Complementary,fixed:!0};n.storyName="Fixed Panel (Can't be Collapsed/Expanded)";const a=l.bind({});a.decorators=[e=>v`
<style>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
</style>
    ${e()}`];a.args={header:`
    <div slot="header" class="header">
        <ui5-title>Countries</ui5-title>
        <div>
            <ui5-button>Edit</ui5-button>
            <ui5-button design="Emphasized">Add</ui5-button>
            <ui5-button design="Negative">Remove</ui5-button>
        </div>
    </div>`,default:`
    <ui5-list mode="MultiSelect">
        <ui5-li key="country1">Argentina</ui5-li>
        <ui5-li key="country2">Bulgaria</ui5-li>
        <ui5-li key="country3">China</ui5-li>
    </ui5-list>`,accessibleRole:s.Complementary};a.storyName="Panel with Custom Header";var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => html\`
<ui5-panel
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,p,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`args => html\`
<ui5-panel
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,y,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => html\`
<ui5-panel
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var $,x,D;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
<ui5-panel
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    ?fixed="\${ifDefined(args.fixed)}"
    ?collapsed="\${ifDefined(args.collapsed)}"
    ?no-animation="\${ifDefined(args.noAnimation)}"
    header-level="\${ifDefined(args.headerLevel)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
>
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
</ui5-panel>\``,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const z=["BasicPanel","PanelWithList","FixedPanel","PanelCustomHeader"];export{r as BasicPanel,n as FixedPanel,a as PanelCustomHeader,t as PanelWithList,z as __namedExportsOrder,j as default};
//# sourceMappingURL=Panel.stories.d3ea3e6a.js.map
