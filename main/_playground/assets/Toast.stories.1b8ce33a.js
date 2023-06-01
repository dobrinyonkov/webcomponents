import{x as v}from"./lit-element.179636e6.js";import{l as s}from"./if-defined.9da98955.js";import{o as E}from"./unsafe-html.ff185b2f.js";import{T as h}from"./ToastPlacement.9918037e.js";import{D as B}from"./docs.400266cf.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.defbc0ae.js";import"./iframe.7336b0e7.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.a0b4809e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const w={placement:{control:"select",options:["BottomCenter","BottomEnd","BottomStart","MiddleCenter","MiddleEnd","MiddleStart","TopCenter","TopEnd","TopStart"]},show:{description:"Shows the component.",table:{category:"methods"}}},y={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var i=Object.freeze,O=Object.defineProperty,S=(e,T)=>i(O(e,"raw",{value:i(T||e.slice())})),d;const c="ui5-toast",K={title:"Main/Toast",component:c,parameters:{docs:{page:B({...y,component:c})}},argTypes:w};let t=0;const r=e=>v(d||(d=S([`
<ui5-button id="btn-`,`">Show Toast</ui5-button>
<ui5-toast
    id="toast-`,`"
    duration="`,`"
    placement="`,`"
    >`,`</ui5-toast>
<script>
    var toastOpener`,' = document.getElementById("btn-',`");
    var toast`,' = document.getElementById("toast-',`"); 

    toastOpener`,`.addEventListener("click", () => {
        toast`,`.show();
    });
<\/script>`])),++t,t,s(e.duration),s(e.placement),E(e.default),t,t,t,t,t,t),n=r.bind({});n.args={default:"Basic Toast"};const o=r.bind({});o.args={default:"Long Toast",duration:4500};const a=r.bind({});a.args={default:"Middle Center Toast",placement:h.MiddleCenter};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,f,$;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...($=(f=o.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var g,x,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return html\`
<ui5-button id="btn-\${++index}">Show Toast</ui5-button>
<ui5-toast
    id="toast-\${index}"
    duration="\${ifDefined(args.duration)}"
    placement="\${ifDefined(args.placement)}"
    >\${unsafeHTML(args.default)}</ui5-toast>
<script>
    var toastOpener\${index} = document.getElementById("btn-\${index}");
    var toast\${index} = document.getElementById("toast-\${index}"); 

    toastOpener\${index}.addEventListener("click", () => {
        toast\${index}.show();
    });
<\/script>\`;
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const N=["Basic","ToastDuration","ToastPlacements"];export{n as Basic,o as ToastDuration,a as ToastPlacements,N as __namedExportsOrder,K as default};
//# sourceMappingURL=Toast.stories.1b8ce33a.js.map
