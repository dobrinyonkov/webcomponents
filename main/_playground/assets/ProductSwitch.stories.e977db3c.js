import{x as m}from"./lit-element.179636e6.js";import{o as w}from"./unsafe-html.ff185b2f.js";import{D as x}from"./docs.10aac2c6.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.103070d4.js";import"./iframe.cf116cd3.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4fc8c727.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const g={},b={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.5"};var o=Object.freeze,f=Object.defineProperty,v=(t,h)=>o(f(t,"raw",{value:o(h||t.slice())})),c;const r="ui5-product-switch",I={title:"Fiori/ProductSwitch",component:r,subcomponents:{ProductSwitchItem:"ui5-product-switch-item"},parameters:{docs:{page:x({...b,component:r})}},argTypes:g},d=t=>m`
    <ui5-product-switch> ${w(t.default)} </ui5-product-switch>
`,i=d.bind({});i.args={default:`
    <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
    <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
`};const e=d.bind({});e.decorators=[t=>m(c||(c=v([`
        <ui5-shellbar
            id="shellbar"
            primary-title="Corporate Portal"
            secondary-title="home"
            logo="../assets/images/sap-logo-svg.svg"
            show-product-switch=""
            show-co-pilot=""
        >
        </ui5-shellbar>
        <ui5-popover id="productswitch-popover" placement-type="Bottom">
            `,`
        </ui5-popover>
        <script>
            var shellBar = document.getElementById("shellbar");
            var popover = document.getElementById("productswitch-popover");
            shellbar.addEventListener("product-switch-click", (event) => {
                if (popover.opened) {
                    popover.close();
                } else {
                    event.preventDefault();
                    popover.showAt(event.detail.targetRef);
                }
            });
        <\/script>
    `])),t())];e.args={default:`
    <ui5-product-switch-item
        title-text="Home"
        subtitle-text="Central Home"
        icon="home"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Analytics Cloud"
        subtitle-text="Analytics Cloud"
        icon="business-objects-experience"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Catalog"
        subtitle-text="Ariba"
        icon="contacts"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Guided Buying"
        icon="credit-card"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Strategic Procurement"
        icon="cart-3"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Travel &amp; Expense"
        subtitle-text="Concur"
        icon="flight"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Vendor Management"
        subtitle-text="Fieldglass"
        icon="shipping-status"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Human Capital Management"
        icon="customer"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Sales Cloud"
        subtitle-text="Sales Cloud"
        icon="sales-notification"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Commerce Cloud"
        subtitle-text="Commerce Cloud"
        icon="retail-store"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Marketing Cloud"
        subtitle-text="Marketing Cloud"
        icon="marketing-campaign"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Service Cloud"
        icon="family-care"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="Customer Data Cloud"
        icon="customer-briefing"
    ></ui5-product-switch-item>
    <ui5-product-switch-item
        title-text="S/4HANA"
        icon="batch-payments"
    ></ui5-product-switch-item>
    </ui5-product-switch>`};var s,u,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:"args => html`\n    <ui5-product-switch> ${unsafeHTML(args.default)} </ui5-product-switch>\n`",...(a=(u=i.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};var p,n,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"args => html`\n    <ui5-product-switch> ${unsafeHTML(args.default)} </ui5-product-switch>\n`",...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const L=["Basic","ProductSwitchWithShellBar"];export{i as Basic,e as ProductSwitchWithShellBar,L as __namedExportsOrder,I as default};
//# sourceMappingURL=ProductSwitch.stories.e977db3c.js.map
