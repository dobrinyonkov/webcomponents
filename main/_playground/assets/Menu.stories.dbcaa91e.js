import{x as m}from"./lit-element.179636e6.js";import{o as M}from"./unsafe-html.ff185b2f.js";import{l as u}from"./if-defined.9da98955.js";import{D as w}from"./docs.10aac2c6.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.103070d4.js";import"./iframe.cf116cd3.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4fc8c727.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const D={close:{description:"Closes the Menu.",table:{category:"methods"}},showAt:{description:"Shows the Menu near the opener element.",table:{category:"methods"}}},y={package:"@ui5/webcomponents",since:"1.3.0"};var a=Object.freeze,S=Object.defineProperty,o=(e,$)=>a(S(e,"raw",{value:a($||e.slice())})),s,d,c;const p="ui5-menu",q={title:"Main/Menu",component:p,subcomponents:{MenuItem:"ui5-menu-item"},parameters:{docs:{page:w({...y,component:p})}},argTypes:D},r=e=>m`<ui5-menu
    headerText="${u(e.headerText)}"
    opener="${u(e.opener)}"
    ?open="${u(e.open)}"
    id="${u(e.id)}"
>
    ${M(e.default)}
</ui5-menu>`,t=r.bind({});t.storyName="Basic Menu with Header Text";t.args={id:"menuBasic",headerText:"Basic Menu with Items",default:`<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>`};t.decorators=[e=>m(s||(s=o([`<ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenBasic.addEventListener("click", function(event) {
            menuBasic.showAt(btnOpenBasic);
        });
    <\/script>`])),e())];t.parameters={docs:{story:{inline:!1}}};const i=r.bind({});i.storyName="Menu with Submenu";i.args={id:"menuSubs",default:`<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section="">
    <ui5-menu-item text="Open Locally" icon="open-folder">
        <ui5-menu-item text="Open from C"></ui5-menu-item>
        <ui5-menu-item text="Open from D"></ui5-menu-item>
        <ui5-menu-item text="Open from E"></ui5-menu-item>
    </ui5-menu-item>
    <ui5-menu-item text="Open from Cloud"></ui5-menu-item>
</ui5-menu-item>
<ui5-menu-item text="Save" icon="save">
    <ui5-menu-item text="Save Locally" icon="save">
        <ui5-menu-item text="Save on C" icon="save"></ui5-menu-item>
        <ui5-menu-item text="Save on D" icon="save"></ui5-menu-item>
        <ui5-menu-item text="Save on E" icon="save"></ui5-menu-item>
    </ui5-menu-item>
    <ui5-menu-item text="Save on Cloud" icon="upload-to-cloud"></ui5-menu-item>
</ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>`};i.decorators=[e=>m(d||(d=o([`<ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenBasic.addEventListener("click", function(event) {
            menuSubs.showAt(btnOpenBasic);
        });
    <\/script>`])),e())];i.parameters={docs:{story:{inline:!1}}};const n=r.bind({});n.storyName="Menu Items with Additional Text";n.args={id:"menuAdditionalText",default:`<ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>`};n.decorators=[e=>m(c||(c=o([`<ui5-button id="btnOpenAdditionalText" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenAdditionalText.addEventListener("click", function(event) {
            menuAdditionalText.showAt(btnOpenAdditionalText);
        });
    <\/script>`])),e())];n.parameters={docs:{story:{inline:!1}}};var l,f,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:'args => html`<ui5-menu\n    headerText="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,g,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:'args => html`<ui5-menu\n    headerText="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,O,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:'args => html`<ui5-menu\n    headerText="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(T=(O=n.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const G=["Basic","SubMenu","AditionalText"];export{n as AditionalText,t as Basic,i as SubMenu,G as __namedExportsOrder,q as default};
//# sourceMappingURL=Menu.stories.dbcaa91e.js.map
