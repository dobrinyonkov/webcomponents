import{x as r}from"./lit-element.179636e6.js";import{o as w}from"./unsafe-html.ff185b2f.js";import{l}from"./if-defined.9da98955.js";import{D as b}from"./docs.900f4496.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.0ad8f14d.js";import"./iframe.d2d30c97.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4281e927.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const P={openPopover:{description:"Shows the ColorPalettePopover. <b>Note:</b> The method is deprecated and will be removed in future, use <code>showAt</code> instead.",table:{category:"methods"}},showAt:{description:"Shows the ColorPalettePopover.",table:{category:"methods"}}},C={package:"@ui5/webcomponents",since:"1.0.0-rc.16"};var i=Object.freeze,D=Object.defineProperty,v=(e,g)=>i(D(e,"raw",{value:i(g||e.slice())})),a,c;const p="ui5-color-palette-popover",z={title:"Main/ColorPalettePopover",component:p,parameters:{docs:{page:b({...C,component:p})}},argTypes:P},h=e=>r`<ui5-color-palette-popover
    id="${l(e.id)}"
    ?show-recent-colors="${l(e.showRecentColors)}"
    ?show-more-colors="${l(e.showMoreColors)}"
    ?show-default-color="${l(e.showDefaultColor)}"
    default-color="${l(e.defaultColor)}"
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
<ui5-color-palette-item value="orange"></ui5-color-palette-item>`};t.decorators=[e=>r(a||(a=v([`<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
    `,`
    <script>
        colorPaletteBtn.addEventListener("click", function(event) {
            colorPalettePopover.showAt(this);
        });
    <\/script>`])),e())];t.parameters={docs:{story:{inline:!1}}};const o=h.bind({});o.storyName="Default, Recent, and More Colors";o.args={id:"colorPalettePopover",defaultColor:"orange",showDefaultColor:!0,showRecentColors:!0,showMoreColors:!0,default:`<ui5-color-palette-item value="lightsalmon"></ui5-color-palette-item>
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
<ui5-color-palette-item value="rgb(8,103,136)"></ui5-color-palette-item>`};o.decorators=[e=>r(c||(c=v([`<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
    `,`
    <script>
        colorPaletteBtn.addEventListener("click", function(event) {
            colorPalettePopover.showAt(this);
        });
    <\/script>`])),e())];o.parameters={docs:{story:{inline:!1}}};var u,s,n;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-color-palette-popover\n    id="${ifDefined(args.id)}"\n    ?show-recent-colors="${ifDefined(args.showRecentColors)}"\n    ?show-more-colors="${ifDefined(args.showMoreColors)}"\n    ?show-default-color="${ifDefined(args.showDefaultColor)}"\n    default-color="${ifDefined(args.defaultColor)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-color-palette-popover>`',...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,d,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:'args => html`<ui5-color-palette-popover\n    id="${ifDefined(args.id)}"\n    ?show-recent-colors="${ifDefined(args.showRecentColors)}"\n    ?show-more-colors="${ifDefined(args.showMoreColors)}"\n    ?show-default-color="${ifDefined(args.showDefaultColor)}"\n    default-color="${ifDefined(args.defaultColor)}"\n>\n    ${unsafeHTML(args.default)}\n</ui5-color-palette-popover>`',...(f=(d=o.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const H=["Basic","DefaultColor"];export{t as Basic,o as DefaultColor,H as __namedExportsOrder,z as default};
//# sourceMappingURL=ColorPalettePopover.stories.ece2c395.js.map
