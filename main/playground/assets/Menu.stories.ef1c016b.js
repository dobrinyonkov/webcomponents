import{x as m}from"./lit-element.57026f9a.js";import{o as O}from"./unsafe-html.5df53a7b.js";import{l as o}from"./if-defined.08fba587.js";import{D as M}from"./docs.781bbbf4.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.374a5b2f.js";import"./iframe.307b6ef2.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.c286fd3e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const D={default:{control:{type:"text"}},close:{description:"Closes the Menu.",table:{category:"methods"}},showAt:{description:"Shows the Menu near the opener element.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},"before-close":{description:"Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. <b>This event does not bubble.</b>",table:{category:"events"},UI5CustomData:{parameters:[{name:"escPressed",type:"boolean",description:"Indicates that <code>ESC</code> key has triggered the event."}]}},"before-open":{description:"Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. <b>This event does not bubble.</b> <b>Note:</b> Since 1.14.0 the event is also fired before a sub-menu opens.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The <code>ui5-menu-item</code> that triggers opening of the sub-menu or undefined when fired upon root menu opening. <b>Note:</b> available since 1.14.0."}]}},"item-click":{description:"Fired when an item is being clicked.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The currently clicked menu item."},{name:"text",type:"string",description:"The text of the currently clicked menu item."}]}}},$={package:"@ui5/webcomponents",since:"1.3.0"};var a=Object.freeze,S=Object.defineProperty,r=(e,w)=>a(S(e,"raw",{value:a(w||e.slice())})),s,d,c;const p="ui5-menu",q={title:"Main/Menu",component:p,subcomponents:{MenuItem:"ui5-menu-item"},parameters:{docs:{page:M({...$,component:p})}},argTypes:D},u=e=>m`<ui5-menu
    headerText="${o(e.headerText)}"
    opener="${o(e.opener)}"
    ?open="${o(e.open)}"
    id="${o(e.id)}"
>
    ${O(e.default)}
</ui5-menu>`,t=u.bind({});t.storyName="Basic Menu with Header Text";t.args={id:"menuBasic",headerText:"Basic Menu with Items",default:`<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>`};t.decorators=[e=>m(s||(s=r([`<ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenBasic.addEventListener("click", function(event) {
            menuBasic.showAt(btnOpenBasic);
        });
    <\/script>`])),e())];t.parameters={docs:{story:{inline:!1}}};const n=u.bind({});n.storyName="Menu with Submenu";n.args={id:"menuSubs",default:`<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
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
<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>`};n.decorators=[e=>m(d||(d=r([`<ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenBasic.addEventListener("click", function(event) {
            menuSubs.showAt(btnOpenBasic);
        });
    <\/script>`])),e())];n.parameters={docs:{story:{inline:!1}}};const i=u.bind({});i.storyName="Menu Items with Additional Text";i.args={id:"menuAdditionalText",default:`<ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>
<ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled=""></ui5-menu-item>
<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Close"></ui5-menu-item>
<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
<ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>`};i.decorators=[e=>m(c||(c=r([`<ui5-button id="btnOpenAdditionalText" class="samples-margin">Open Menu</ui5-button> <br/>
    `,`
    <script>
        btnOpenAdditionalText.addEventListener("click", function(event) {
            menuAdditionalText.showAt(btnOpenAdditionalText);
        });
    <\/script>`])),e())];i.parameters={docs:{story:{inline:!1}}};var l,f,b;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:'args => html`<ui5-menu\n    headerText="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,h,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:'args => html`<ui5-menu\n    headerText="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,T,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:'args => html`<ui5-menu\n    headerText="${ifDefined(args.headerText)}"\n    opener="${ifDefined(args.opener)}"\n    ?open="${ifDefined(args.open)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-menu>`',...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const G=["Basic","SubMenu","AditionalText"];export{i as AditionalText,t as Basic,n as SubMenu,G as __namedExportsOrder,q as default};
//# sourceMappingURL=Menu.stories.ef1c016b.js.map
