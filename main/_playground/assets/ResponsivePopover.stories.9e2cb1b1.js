import{x as c}from"./lit-element.179636e6.js";import{l as o}from"./if-defined.9da98955.js";import{o as n}from"./unsafe-html.ff185b2f.js";import{D as m}from"./docs.10aac2c6.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.103070d4.js";import"./iframe.cf116cd3.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4fc8c727.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const f={horizontalAlign:{control:"select",options:["Center","Left","Right","Stretch"]},placementType:{control:"select",options:["Bottom","Left","Right","Top"]},verticalAlign:{control:"select",options:["Bottom","Center","Stretch","Top"]},accessibleRole:{control:"select",options:["AlertDialog","Dialog","None"]},close:{description:"Closes the popup.",table:{category:"methods"}},isOpen:{description:"Tells if the component is opened",table:{category:"methods"}},showAt:{description:"Shows the popover.",table:{category:"methods"}},applyFocus:{description:"Focuses the element denoted by <code>initialFocus</code>, if provided, or the first focusable element otherwise.",table:{category:"methods"}}},u={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var i=Object.freeze,v=Object.defineProperty,h=(e,d)=>i(v(e,"raw",{value:i(d||e.slice())})),r;const p="ui5-responsive-popover",F={title:"Main/ResponsivePopover",component:p,parameters:{docs:{page:m({...u,component:p}),story:{inline:!1,iframeHeight:"700px"}}},argTypes:f},g=e=>c`<ui5-responsive-popover
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
</ui5-responsive-popover>`,t=g.bind({});t.args={headerText:"Newsletter subscription",default:`<div class="popover-content">
    <ui5-label for="emailInput" required show-colon>Email</ui5-label>
    <ui5-input id="emailInput" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>
    <ui5-label>Note: If you open the page in mobile, a dialog would be displayed.</ui5-label>
</div>`,footer:`<div slot="footer" class="popover-footer">
    <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
</div>`};t.decorators=[e=>c(r||(r=h([`<style>
    .popover-content {
        width: auto;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .popover-footer {
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
    }
</style>

<ui5-button id="openPopoverButton" design="Emphasized">Open ResponsivePopover</ui5-button>
`,`

<script>
    var popoverOpener = document.getElementById("openPopoverButton");
    var popover = document.querySelector("ui5-responsive-popover");
    var popoverCloser = document.getElementById("closePopoverButton");
    popoverOpener.addEventListener("click", () => {
        popover.showAt(popoverOpener);
    });
    popoverCloser.addEventListener("click", () => {
        popover.close();
    });
<\/script>`])),e())];var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  return html\`<ui5-responsive-popover
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
</ui5-responsive-popover>\`;
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const L=["Basic"];export{t as Basic,L as __namedExportsOrder,F as default};
//# sourceMappingURL=ResponsivePopover.stories.9e2cb1b1.js.map
