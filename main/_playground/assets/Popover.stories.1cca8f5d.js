import{x as c}from"./lit-element.179636e6.js";import{l as o}from"./if-defined.9da98955.js";import{o as n}from"./unsafe-html.ff185b2f.js";import{D as m}from"./docs.900f4496.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.0ad8f14d.js";import"./iframe.d2d30c97.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4281e927.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const f={horizontalAlign:{control:"select",options:["Center","Left","Right","Stretch"]},placementType:{control:"select",options:["Bottom","Left","Right","Top"]},verticalAlign:{control:"select",options:["Bottom","Center","Stretch","Top"]},accessibleRole:{control:"select",options:["AlertDialog","Dialog","None"]},showAt:{description:"Shows the popover.",table:{category:"methods"}},applyFocus:{description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise.",table:{category:"methods"}},close:{description:"Closes the popup.",table:{category:"methods"}},isOpen:{description:"Tells if the component is opened",table:{category:"methods"}}},u={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var r=Object.freeze,v=Object.defineProperty,h=(e,d)=>r(v(e,"raw",{value:r(d||e.slice())})),i;const a="ui5-popover",F={title:"Main/Popover",component:a,parameters:{docs:{page:m({...u,component:a}),story:{inline:!1,iframeHeight:"700px"}}},argTypes:f},g=e=>c`<ui5-popover
    initial-focus="${o(e.initialFocus)}"
    ?prevent-focus-restore="${o(e.preventFocusRestore)}"
    ?open="${o(e.open)}"
    accessible-name="${o(e.accessibleName)}"
    accessible-name-ref="${o(e.accessibleNameRef)}"
    accessible-role="${o(e.accessibleRole)}"
    header-text="${o(e.headerText)}"
    placement-type="${o(e.placementType)}"
    horizontal-align="${o(e.horizontalAlign)}"
    vertical-align="${o(e.verticalAlign)}"
    ?modal="${o(e.modal)}"
    ?hide-backdrop="${o(e.hideBackdrop)}"
    ?hire-arrow="${o(e.hideArrow)}"
    ?allow-target-overlap="${o(e.allowTargetOverlap)}"
    opener="${o(e.opener)}"
    >
    ${n(e.header)}
    ${n(e.default)}
    ${n(e.footer)}
</ui5-popover>`,t=g.bind({});t.args={headerText:"Newsletter subscription",default:`<div class="popover-content">
    <div class="flex-column">
        <ui5-label for="emailInput" required show-colon>Email</ui5-label>
        <ui5-input id="emailInput" style="min-width: 150px; margin-top: 1rem;" placeholder="Enter Email"></ui5-input>
    </div>
</div>`,footer:`<div slot="footer" class="popover-footer">
    <div style="flex: 1;"></div>
    <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
</div>`};t.decorators=[e=>c(i||(i=h([`<style>
    .popover-content {
        margin: 0.5rem;
        height: 100px;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }

    .flex-column {
        display: flex;
        flex-direction: column;
    }

    .popover-footer {
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
    }
</style>

<ui5-button id="openPopoverButton" design="Emphasized">Open Popover</ui5-button>
`,`

<script>
    var popoverOpener = document.getElementById("openPopoverButton");
    var popover = document.querySelector("ui5-popover");
    var popoverCloser = document.getElementById("closePopoverButton");
    popoverOpener.addEventListener("click", () => {
        popover.showAt(popoverOpener);
    });
    popoverCloser.addEventListener("click", () => {
        popover.close();
    });
<\/script>`])),e())];var p,l,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\`<ui5-popover
    initial-focus="\${ifDefined(args.initialFocus)}"
    ?prevent-focus-restore="\${ifDefined(args.preventFocusRestore)}"
    ?open="\${ifDefined(args.open)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
    accessible-role="\${ifDefined(args.accessibleRole)}"
    header-text="\${ifDefined(args.headerText)}"
    placement-type="\${ifDefined(args.placementType)}"
    horizontal-align="\${ifDefined(args.horizontalAlign)}"
    vertical-align="\${ifDefined(args.verticalAlign)}"
    ?modal="\${ifDefined(args.modal)}"
    ?hide-backdrop="\${ifDefined(args.hideBackdrop)}"
    ?hire-arrow="\${ifDefined(args.hideArrow)}"
    ?allow-target-overlap="\${ifDefined(args.allowTargetOverlap)}"
    opener="\${ifDefined(args.opener)}"
    >
    \${unsafeHTML(args.header)}
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.footer)}
</ui5-popover>\`;
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const L=["Basic"];export{t as Basic,L as __namedExportsOrder,F as default};
//# sourceMappingURL=Popover.stories.1cca8f5d.js.map
