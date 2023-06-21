import{x as o}from"./lit-element.57026f9a.js";import{o as O}from"./unsafe-html.5df53a7b.js";import{l}from"./if-defined.08fba587.js";import{D as P}from"./docs.f474eb7d.js";import{M as _,a as U}from"./MediaGalleryMenuHorizontalAlign.a8540e0f.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.16f83639.js";import"./iframe.033ba1f9.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.0212f9d1.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const k={layout:{control:"select",options:["Auto","Horizontal","Vertical"]},menuHorizontalAlign:{control:"select",options:["Left","Right"]},menuVerticalAlign:{control:"select",options:["Bottom","Top"]},default:{control:{type:"text"}},"selection-change":{description:"Fired when selection is changed by user interaction.",table:{category:"events"},UI5CustomData:{parameters:[{name:"item",type:"HTMLElement",description:"the selected item."}]}}},R={package:"@ui5/webcomponents-fiori",since:"1.1.0"};var d=Object.freeze,F=Object.defineProperty,N=(e,E)=>d(F(e,"raw",{value:d(E||e.slice())})),c;const y="ui5-media-gallery",Q=e=>o`
    <style>
        ui5-media-gallery-item:not(:defined) {
            visibility: hidden;
        }

        @media (min-width: 600px) {
            ui5-media-gallery {
                height: 50rem;
            }
        }
    </style>
    ${e()}
`,ce={title:"Fiori/MediaGallery",component:y,subcomponents:{MediaGalleryItem:"ui5-media-gallery-item"},parameters:{docs:{page:P({...R,component:y})}},decorators:[Q],argTypes:k};let Y=0;const i=e=>o` <ui5-media-gallery
        id="media-gallery-${Y++}"
        ?show-all-thumbnails="${l(e.showAllThumbnails)}"
        ?interactive-display-area="${l(e.interactiveDisplayArea)}"
        layout="${l(e.layout)}"
        menu-horizontal-align="${l(e.menuHorizontalAlign)}"
        menu-vertical-align="${l(e.menuVerticalAlign)}"
    >
        ${O(e.default)}
    </ui5-media-gallery>`,t=i.bind({});t.args={showAllThumbnails:!0,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const s=i.bind({});s.args={showAllThumbnails:!0,layout:_.Vertical,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const r=i.bind({});r.args={showAllThumbnails:!0,layout:_.Horizontal,menuHorizontalAlign:U.Right,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};const n=i.bind({});n.args={default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
        <img
            src="../assets/images/HT-1000-small.jpg"
            slot="thumbnail"
        />
    </ui5-media-gallery-item>`};const m=i.bind({});m.args={default:`
    <ui5-media-gallery-item layout="Wide">
        <iframe
            src="https://www.youtube.com/embed/GxGZG2fv6Aw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
        ></iframe>
        <img
            src="../assets/images/sap-logo-square.svg"
            slot="thumbnail"
            alt="SAP Video"
        />
    </ui5-media-gallery-item>`};const g=i.bind({});g.args={default:`
    <ui5-media-gallery-item disabled="">
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>`};const u=i.bind({});u.args={default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item selected="">
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>`};const a=i.bind({});a.decorators=[e=>o(c||(c=N([`
<style>
    @media (min-width: 612px) {
        .container {
            display: grid;
            gap: 1rem;
            grid-template-columns: 1fr 1fr;
        }
    }

    .details {
        background: var(--sapBaseColor);
        padding: 1rem;
    }

    .dialog-footer {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 0px 0.5rem 0px 0px;
    }
</style>
<div class="container">
    `,`
    <div class="details">
            <ui5-title level="H1">Item Details</ui5-title>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            quam lectus, tristique semper mi et, faucibus viverra metus.
            Quisque nec venenatis massa. Ut eu dolor a justo ornare feugiat.
            Morbi congue diam id enim porttitor, sit amet placerat nunc
            pulvinar. Vivamus eu feugiat justo. Ut eu lectus mauris. Aliquam
            erat volutpat. Vestibulum et enim sit amet ipsum tincidunt
            aliquet nec in dui. Sed dui est, hendrerit non sollicitudin
            quis, venenatis vel libero. Suspendisse sit amet lorem posuere,
            egestas neque eget, sodales ipsum. Donec sollicitudin leo ut
            risus tincidunt tincidunt. Ut vel nisl nisl. Cras leo odio,
            viverra a ante nec, cursus volutpat lectus. Cras ac metus nisi.
            Aliquam fermentum nec felis sit amet tristique. Nunc luctus a
            lacus non semper. Curabitur euismod tellus id massa mattis, in
            consectetur mi luctus. Mauris dignissim efficitur lobortis.
            Etiam sit amet nunc commodo, lacinia nisi sagittis, finibus
            nulla. Proin quis elementum eros. Ut facilisis lacinia viverra.
        </div>
    </div>
</div>

<ui5-dialog id="mediaGalleryDialog" header-text="Item" stretch="">
    <ui5-bar design="Header" slot="header">
        <ui5-label>Item</ui5-label>
    </ui5-bar>
    <ui5-media-gallery show-all-thumbnails="">
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1000.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1010.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1022.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-1030.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-2002.jpg" />
        </ui5-media-gallery-item>
        <ui5-media-gallery-item>
            <img src="../assets/images/HT-2026.jpg" />
        </ui5-media-gallery-item>
    </ui5-media-gallery>
    <div slot="footer" class="dialog-footer">
        <div style="flex: 1;"></div>
        <ui5-button id="closeDialogButton">Close</ui5-button>
    </div>
</ui5-dialog>
<script>
    const mediaGalleryDialog = document.getElementById("mediaGalleryDialog");
    const mediaGallery = document.querySelector(".container > ui5-media-gallery");
    const closeDialogButton = document.getElementById("closeDialogButton");
    
    closeDialogButton.addEventListener("click", () => {
        mediaGalleryDialog.close();
    });
    mediaGallery.addEventListener("overflow-click", (event) => {
        mediaGalleryDialog.show();
    });
    mediaGallery.addEventListener(
        "display-area-click",
        (event) => {
            mediaGalleryDialog.show();
        }
    );
<\/script>`])),e())];a.args={interactiveDisplayArea:!0,default:`
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1000.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1010.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1022.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-1030.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2002.jpg" />
    </ui5-media-gallery-item>
    <ui5-media-gallery-item>
        <img src="../assets/images/HT-2026.jpg" />
    </ui5-media-gallery-item>`};a.parameters={docs:{story:{inline:!1,iframeHeight:"800px"}}};var p,f,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,D,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(T=(D=s.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var b,$,H;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(H=($=r.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var A,j,w;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(w=(j=n.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var z,x,V;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(V=(x=m.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var M,G,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(L=(G=g.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var S,W,q;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var I,B,C;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return html\` <ui5-media-gallery
        id="media-gallery-\${index++}"
        ?show-all-thumbnails="\${ifDefined(args.showAllThumbnails)}"
        ?interactive-display-area="\${ifDefined(args.interactiveDisplayArea)}"
        layout="\${ifDefined(args.layout)}"
        menu-horizontal-align="\${ifDefined(args.menuHorizontalAlign)}"
        menu-vertical-align="\${ifDefined(args.menuVerticalAlign)}"
    >
        \${unsafeHTML(args.default)}
    </ui5-media-gallery>\`;
}`,...(C=(B=a.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const ye=["Basic","WithVerticalLayout","WithThumbnailsOnTheRight","WithSeparateImageThumbnail","WithVideoContent","WithDisabledContent","WithInitiallySelected","WithThumbnailOverflow"];export{t as Basic,g as WithDisabledContent,u as WithInitiallySelected,n as WithSeparateImageThumbnail,a as WithThumbnailOverflow,r as WithThumbnailsOnTheRight,s as WithVerticalLayout,m as WithVideoContent,ye as __namedExportsOrder,ce as default};
//# sourceMappingURL=MediaGallery.stories.89d279ea.js.map
