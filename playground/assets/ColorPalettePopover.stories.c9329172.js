import{x as l}from"./lit-element.57026f9a.js";import{o as w}from"./unsafe-html.5df53a7b.js";import{l as r}from"./if-defined.08fba587.js";import{D as b}from"./docs.3e0af3ec.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.0ed22927.js";import"./iframe.c9a514a1.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.66e07f1e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const C={default:{control:{type:"text"}},openPopover:{description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},showAt:{description:"Shows the ColorPalettePopover.",table:{category:"methods"},UI5CustomData:{parameters:[{name:"opener",type:"HTMLElement",optional:!1,description:"the element that the popover is shown at"}]}},"item-click":{description:"Fired when the user selects a color.",table:{category:"events"},UI5CustomData:{parameters:[{name:"color",type:"string",description:"the selected color"}]}}},P={package:"@ui5/webcomponents",since:"1.0.0-rc.16"};var a=Object.freeze,D=Object.defineProperty,v=(e,g)=>a(D(e,"raw",{value:a(g||e.slice())})),i,p;const c="ui5-color-palette-popover",U={title:"Main/ColorPalettePopover",component:c,parameters:{docs:{page:b({...P,component:c})}},argTypes:C},h=e=>l`<ui5-color-palette-popover
    id="${r(e.id)}"
    ?show-recent-colors="${r(e.showRecentColors)}"
    ?show-more-colors="${r(e.showMoreColors)}"
    ?show-default-color="${r(e.showDefaultColor)}"
    default-color="${r(e.defaultColor)}"
>
    ${w(e.default)}
</ui5-color-palette-popover>`,t=h.bind({});t.args={id:"colorPalettePopover",default:`<ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>
<ui5-color-palette-item value="lightpink"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>
<ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>
<ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>
<ui5-color-palette-item value="powderblue"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>
<ui5-color-palette-item value="orange"></ui5-color-palette-item>`};t.decorators=[e=>l(i||(i=v([`<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
    `,`
    <script>
        colorPaletteBtn.addEventListener("click", function(event) {
            colorPalettePopover.showAt(this);
        });
    <\/script>`])),e())];t.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};const o=h.bind({});o.storyName="Default, Recent, and More Colors";o.args={id:"colorPalettePopover",defaultColor:"orange",showDefaultColor:!0,showRecentColors:!0,showMoreColors:!0,default:`<ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>
<ui5-color-palette-item value="lightpink"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(216,124,172)"></ui5-color-palette-item>
<ui5-color-palette-item value="#6c666d"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(55,81,95)"></ui5-color-palette-item>
<ui5-color-palette-item value="#0072bb"></ui5-color-palette-item>
<ui5-color-palette-item value="powderblue"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(143,201,58)"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(195,172,206)"></ui5-color-palette-item>
<ui5-color-palette-item value="orange"></ui5-color-palette-item>
<ui5-color-palette-item value="#ef3054"></ui5-color-palette-item>
<ui5-color-palette-item value="#ff6f59"></ui5-color-palette-item>
<ui5-color-palette-item value="moccasin"></ui5-color-palette-item>
<ui5-color-palette-item value="#07A0C3"></ui5-color-palette-item>
<ui5-color-palette-item value="rgb(8,103,136)"></ui5-color-palette-item>`};o.decorators=[e=>l(p||(p=v([`<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
    `,`
    <script>
        colorPaletteBtn.addEventListener("click", function(event) {
            colorPalettePopover.showAt(this);
        });
    <\/script>`])),e())];o.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var s,u,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:'args => html`<ui5-color-palette-popover\n    id="${ifDefined(args.id)}"\n    ?show-recent-colors="${ifDefined(args.showRecentColors)}"\n    ?show-more-colors="${ifDefined(args.showMoreColors)}"\n    ?show-default-color="${ifDefined(args.showDefaultColor)}"\n    default-color="${ifDefined(args.defaultColor)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-color-palette-popover>`',...(n=(u=t.parameters)==null?void 0:u.docs)==null?void 0:n.source}}};var m,d,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-color-palette-popover\n    id="${ifDefined(args.id)}"\n    ?show-recent-colors="${ifDefined(args.showRecentColors)}"\n    ?show-more-colors="${ifDefined(args.showMoreColors)}"\n    ?show-default-color="${ifDefined(args.showDefaultColor)}"\n    default-color="${ifDefined(args.defaultColor)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-color-palette-popover>`',...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const j=["Basic","DefaultColor"];export{t as Basic,o as DefaultColor,j as __namedExportsOrder,U as default};
//# sourceMappingURL=ColorPalettePopover.stories.c9329172.js.map
