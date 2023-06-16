import{x as I}from"./lit-element.57026f9a.js";import{D as H}from"./docs.4e9aeeb2.js";import{l as a}from"./if-defined.08fba587.js";import{o}from"./unsafe-html.5df53a7b.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.dcb7c208.js";import"./iframe.094de0a1.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.59fad42e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const S={tokens:{control:{type:"text"}},"token-delete":{description:"Fired when a token is about to be deleted.",table:{category:"events"},UI5CustomData:{parameters:[{name:"token",type:"HTMLElement",description:"deleted token."}]}},previewItem:{control:{type:!1}},type:{control:"select",options:["Email","Number","Password","Tel","Text","URL"]},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]},default:{control:{type:"text"}},icon:{control:{type:"text"}},valueStateMessage:{control:{type:"text"}},openPicker:{description:"Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.",table:{category:"methods"}},"suggestion-item-preview":{description:"Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The previewed suggestion item."},{name:"targetRef",type:"HTMLElement",description:"The DOM ref of the suggestion item."}]}},"suggestion-item-select":{description:"Fired when a suggestion item, that is displayed in the suggestion popup, is selected.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"The selected item."}]}}},L={package:"@ui5/webcomponents",since:"1.0.0-rc.9"};var l=Object.freeze,b=Object.defineProperty,D=(e,y)=>l(b(e,"raw",{value:l(y||e.slice())})),g;const m="ui5-multi-input",q={title:"Main/MultiInput",component:m,subcomponents:{Token:"ui5-token"},parameters:{docs:{page:H({...L,component:m})}},argTypes:S};let r=0;const u=e=>I`
<ui5-multi-input
    id="multi-input-${++r}"
    value="${a(e.value)}"
    ?show-value-help-icon="${a(e.showValueHelpIcon)}"
    ?show-suggestions="${a(e.showSuggestions)}"
>
    ${o(e.default)}
    ${o(e.valueStateMessage)}
    ${o(e.icon)}
    ${o(e.tokens)}
</ui5-multi-input>`,s=u.bind({});s.args={value:"basic input"};const n=u.bind({});n.args={value:"value help icon",showValueHelpIcon:!0};n.storyName="Basic Multi Input with Value Help Dialog icon";const i=u.bind({});i.args={tokens:`
    <ui5-token slot="tokens" text="Argentina"></ui5-token>
    <ui5-token slot="tokens" text="Bulgaria"></ui5-token>
    <ui5-token slot="tokens" text="England"></ui5-token>
    <ui5-token slot="tokens" text="Finland"></ui5-token>
    <ui5-token slot="tokens" text="Germany"></ui5-token>
    <ui5-token slot="tokens" text="Hungary"></ui5-token>
    <ui5-token slot="tokens" text="Italy"></ui5-token>
    <ui5-token slot="tokens" text="Luxembourg"></ui5-token>
    <ui5-token slot="tokens" text="Mexico"></ui5-token>
    <ui5-token slot="tokens" text="Philippines"></ui5-token>
    <ui5-token slot="tokens" text="Sweden"></ui5-token>
    <ui5-token slot="tokens" text="USA"></ui5-token>`};i.storyName="Multi Input with tokens";const t=u.bind({});t.args={default:`
    <ui5-suggestion-item text="Argentina"></ui5-suggestion-item>
    <ui5-suggestion-item text="Bulgaria"></ui5-suggestion-item>
    <ui5-suggestion-item text="England"></ui5-suggestion-item>
    <ui5-suggestion-item text="Finland"></ui5-suggestion-item>
    <ui5-suggestion-item text="Germany"></ui5-suggestion-item>
    <ui5-suggestion-item text="Hungary"></ui5-suggestion-item>
    <ui5-suggestion-item text="Italy"></ui5-suggestion-item>
    <ui5-suggestion-item text="Luxembourg"></ui5-suggestion-item>
    <ui5-suggestion-item text="Mexico"></ui5-suggestion-item>
    <ui5-suggestion-item text="Philippines"></ui5-suggestion-item>
    <ui5-suggestion-item text="Sweden"></ui5-suggestion-item>
    <ui5-suggestion-item text="USA"></ui5-suggestion-item>`,valueStateMessage:'<div slot="valueStateMessage">Token is already in the list</div>',showSuggestions:!0};t.decorators=[e=>I(g||(g=D([`
    `,`
<script>
    let createTokenFromText = function (text) {
        let token = document.createElement("ui5-token");
        token.setAttribute("text", text);
        token.setAttribute("slot", "tokens");
        return token;
    };
    document.getElementById("multi-input-`,`").addEventListener("token-delete", function (event) {
        const token = event.detail?.token;
        token && token.remove();
    });
    document.getElementById("multi-input-`,`").addEventListener("change", function (event) {
        if (!event.target.value) {
            return;
        }
        let isDuplicate = event.target.tokens.some(function(token) {
            return token.text === event.target.value
        });
        if (isDuplicate) {
            event.target.valueState = "Error";
            setTimeout(function () {
                event.target.valueState = "Normal";
            }, 2000);
            return;
        }
        event.target.appendChild(createTokenFromText(event.target.value));
        event.target.value = "";
    });
<\/script>`])),e(),r,r)];t.storyName="Multi Input and token creation onChange";var p,c,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    value="\${ifDefined(args.value)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var k,f,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    value="\${ifDefined(args.value)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,x,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    value="\${ifDefined(args.value)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var $,T,w;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`args => html\`
<ui5-multi-input
    id="multi-input-\${++index}"
    value="\${ifDefined(args.value)}"
    ?show-value-help-icon="\${ifDefined(args.showValueHelpIcon)}"
    ?show-suggestions="\${ifDefined(args.showSuggestions)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.valueStateMessage)}
    \${unsafeHTML(args.icon)}
    \${unsafeHTML(args.tokens)}
</ui5-multi-input>\``,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const J=["BasicMultiInput","BasicMultiInputVHDIcon","MultiInputTokens","MultiInputTokenCreation"];export{s as BasicMultiInput,n as BasicMultiInputVHDIcon,t as MultiInputTokenCreation,i as MultiInputTokens,J as __namedExportsOrder,q as default};
//# sourceMappingURL=MultiInput.stories.43927767.js.map
