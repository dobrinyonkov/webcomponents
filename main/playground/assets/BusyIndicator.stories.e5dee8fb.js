import{x as p}from"./lit-element.57026f9a.js";import{o as b}from"./unsafe-html.5df53a7b.js";import{l as n}from"./if-defined.08fba587.js";import{D as g}from"./docs.98fe1799.js";import{B as f}from"./BusyIndicatorSize.0b7bdd59.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.be3d9cdb.js";import"./iframe.6ab1d7e1.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.4239f825.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const x={size:{control:"select",options:["Large","Medium","Small"]},default:{control:{type:"text"}}},$={package:"@ui5/webcomponents",since:"0.12.0"};var r=Object.freeze,z=Object.defineProperty,D=(e,v)=>r(z(e,"raw",{value:r(v||e.slice())})),a;const s="ui5-busy-indicator",w={title:"Main/BusyIndicator",component:s,parameters:{docs:{page:g({...$,component:s})}},argTypes:x},y=e=>p`<ui5-busy-indicator
    text="${n(e.text)}"
    size="${n(e.size)}"
    ?active="${n(e.active)}"
    delay="${n(e.delay)}"
>
    ${b(e.default)}
</ui5-busy-indicator>`,i=y.bind({});i.args={active:!0,size:f.Medium};const t=y.bind({});t.args={size:f.Medium,default:`<ui5-list
    no-data-text="No Data"
    header-text="Available Items"
    >
</ui5-list>`};t.decorators=[e=>p(a||(a=D([`<style>
    .sample {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>

<div class="sample">
    <ui5-button>Fetch List Data</ui5-button>
    `,`
</div>

<script>
    var busyIndicator = document.querySelector("ui5-busy-indicator");
    var list = document.querySelector("ui5-list");
    var fetchBtn = document.querySelector("ui5-button");

    fetchBtn.addEventListener("click", event => {
        busyIndicator.active = true;

        setTimeout(() => {
            ["UI5", "Web", "Components"].forEach(title => {
                const el = document.createElement("ui5-li");
                el.textContent = title;
                list.appendChild(el);
            });

            busyIndicator.active = false;
        }, 3000);
    });
<\/script>`])),e())];t.parameters={docs:{story:{iframeHeight:"500px",inline:!1}}};var o,c,u;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return html\`<ui5-busy-indicator
    text="\${ifDefined(args.text)}"
    size="\${ifDefined(args.size)}"
    ?active="\${ifDefined(args.active)}"
    delay="\${ifDefined(args.delay)}"
>
    \${unsafeHTML(args.default)}
</ui5-busy-indicator>\`;
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return html\`<ui5-busy-indicator
    text="\${ifDefined(args.text)}"
    size="\${ifDefined(args.size)}"
    ?active="\${ifDefined(args.active)}"
    delay="\${ifDefined(args.delay)}"
>
    \${unsafeHTML(args.default)}
</ui5-busy-indicator>\`;
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const k=["Basic","UsageWithComponents"];export{i as Basic,t as UsageWithComponents,k as __namedExportsOrder,w as default};
//# sourceMappingURL=BusyIndicator.stories.e5dee8fb.js.map
