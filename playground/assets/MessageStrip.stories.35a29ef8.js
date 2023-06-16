import{x as q}from"./lit-element.57026f9a.js";import{l as d}from"./if-defined.08fba587.js";import{o as c}from"./unsafe-html.5df53a7b.js";import{D as L}from"./docs.32cf2efa.js";import{M as o}from"./MessageStripDesign.440deab2.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.a21dd487.js";import"./iframe.549db545.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.847a85b0.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const N={design:{control:"select",options:["Information","Negative","Positive","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}}},W={package:"@ui5/webcomponents",since:"0.9.0"};var p=Object.freeze,T=Object.defineProperty,_=(e,B)=>p(T(e,"raw",{value:p(B||e.slice())})),g;const u="ui5-message-strip",Y={title:"Main/MessageStrip",component:u,parameters:{docs:{page:L({...W,component:u})}},argTypes:N},a=e=>q`<ui5-message-strip 
    design="${d(e.design)}"
    ?hide-icon="${d(e.hideIcon)}"
    ?hide-close-button="${d(e.hideCloseButton)}"
>
    ${c(e.icon)}
    ${c(e.default)}
</ui5-message-strip>
`,t=a.bind({});t.args={design:o.Information,default:"Information MessageStrip"};const n=a.bind({});n.args={design:o.Positive,hideCloseButton:!0,default:"Positive MessageStrip With No Close Button"};const i=a.bind({});i.args={design:o.Warning,hideIcon:!0,default:"Warning MessageStrip With No Icon"};const r=()=>q(g||(g=_([`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\`New Information Bar of type \${type} \${text}\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
`],[`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\\\`New Information Bar of type \\\${type} \\\${text}\\\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
`]))),s=a.bind({});s.args={design:o.Negative,icon:'<img src="../assets/images/loading.gif" width="16" height="16" slot="icon">',default:"Custom MessageStrip with animated gif"};var m,l,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(f=(l=t.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};var S,M,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(h=(M=n.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var b,v,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var $,w,C;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`() => html\`
<div class="wrapper">
    <ui5-button id="button1">Generate MessageStrip</ui5-button>
</div>
<script>
    const container = document.querySelector(".wrapper");
    const button =  document.querySelector("#button1");
    button.addEventListener("click", function(event) {
        let invisibleMessage =  window["sap-ui-webcomponents-bundle"].invisibleMessage;
        const messageStrip = document.querySelector("#msgStrip");
        const types = ["Information", "Warning", "Negative", "Positive"];
        const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco.";
        let type = types[Math.round(Math.random() * 3)];
        if (messageStrip) {
            container.removeChild(messageStrip);
        }
        let generatedMsgStrip = document.createElement("ui5-message-strip");
        generatedMsgStrip.id = "msgStrip";
        generatedMsgStrip.design = type;
        generatedMsgStrip.textContent = text;
        invisibleMessage.announce(\\\`New Information Bar of type \\\${type} \\\${text}\\\`, "Assertive");
        container.appendChild(generatedMsgStrip);
    });
<\/script>
\``,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var x,I,D;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`<ui5-message-strip 
    design="\${ifDefined(args.design)}"
    ?hide-icon="\${ifDefined(args.hideIcon)}"
    ?hide-close-button="\${ifDefined(args.hideCloseButton)}"
>
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.default)}
</ui5-message-strip>
\``,...(D=(I=s.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const Z=["Basic","MessageStripWithNoCloseButton","MessageStripWithNoIcon","DynamicMessageStrip","CustomMessageStrip"];export{t as Basic,s as CustomMessageStrip,r as DynamicMessageStrip,n as MessageStripWithNoCloseButton,i as MessageStripWithNoIcon,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=MessageStrip.stories.35a29ef8.js.map
