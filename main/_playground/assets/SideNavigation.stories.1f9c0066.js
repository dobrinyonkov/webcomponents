import{x as m}from"./lit-element.179636e6.js";import{o as t}from"./unsafe-html.ff185b2f.js";import{l as c}from"./if-defined.9da98955.js";import{D as l}from"./docs.400266cf.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.defbc0ae.js";import"./iframe.7336b0e7.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.a0b4809e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const g={},p={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.8"};var n=Object.freeze,v=Object.defineProperty,f=(i,u)=>n(v(i,"raw",{value:n(u||i.slice())})),a;const o="ui5-side-navigation",N={title:"Fiori/SideNavigation",component:o,subcomponents:{SideNavigationItem:"ui5-side-navigation-item",SideNavigationSubItem:"ui5-side-navigation-sub-item"},parameters:{docs:{page:l({...p,component:o})}},argTypes:g},b=i=>m`
<ui5-side-navigation ?collapsed="${c(i.collapsed)}">
    ${i.header?t(i.header):null}
    ${t(i.default)}
    ${t(i.fixedItems)}
</ui5-side-navigation>`,e=b.bind({});e.args={default:`<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="People" expanded="" icon="group">
        <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item text="Locations" icon="locate-me" selected=""></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Events" icon="calendar">
        <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>`,fixedItems:`<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
    <ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>`};e.decorators=[i=>m(a||(a=f([`<style>
    ui5-side-navigation {
        height: 600px;
    }

    ui5-shellbar::part(root) {
        padding-inline-start: 0.5rem;
    }
</style>

<ui5-shellbar primary-title="UI5 Web Components" secondary-title="The Best Run SAP" show-co-pilot>
    <ui5-button icon="menu" slot="startButton" id="toggle"></ui5-button>
</ui5-shellbar>

`,`

<script>
    const sidenav = document.querySelector("ui5-side-navigation");
    document.getElementById("toggle").addEventListener("click", () => {
        sidenav.toggleAttribute("collapsed");
    });
<\/script>`])),i())];e.parameters={docs:{story:{iframeHeight:"700px",inline:!1}}};var s,r,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  return html\`
<ui5-side-navigation ?collapsed="\${ifDefined(args.collapsed)}">
    \${args.header ? unsafeHTML(args.header) : null}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.fixedItems)}
</ui5-side-navigation>\`;
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const k=["Basic"];export{e as Basic,k as __namedExportsOrder,N as default};
//# sourceMappingURL=SideNavigation.stories.1f9c0066.js.map
