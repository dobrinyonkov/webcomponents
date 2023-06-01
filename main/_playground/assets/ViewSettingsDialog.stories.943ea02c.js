import{x as u}from"./lit-element.179636e6.js";import{o as i}from"./unsafe-html.ff185b2f.js";import{l as o}from"./if-defined.9da98955.js";import{D as p}from"./docs.400266cf.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.defbc0ae.js";import"./iframe.7336b0e7.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.a0b4809e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const f={setConfirmedSettings:{description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>',table:{category:"methods"}},show:{description:"Shows the dialog.",table:{category:"methods"}}},c={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.16"};var s=Object.freeze,g=Object.defineProperty,v=(t,d)=>s(g(t,"raw",{value:s(d||t.slice())})),r;const n="ui5-view-settings-dialog",E={title:"Fiori/ViewSettingsDialog",component:n,subcomponents:{SortItem:"ui5-sort-item",FilterItem:"ui5-filter-item",FilterItemOption:"ui5-filter-item-option"},parameters:{docs:{page:p({...c,component:n})}},argTypes:f},x=t=>u`<ui5-view-settings-dialog
    id="${o(t.id)}"
    sort-descending="${o(t.sortDescending)}"
>
    ${i(t.sortItems)}
    ${i(t.filterItems)}
</ui5-view-settings-dialog>`,e=x.bind({});e.storyName="Example Usage";e.args={id:"vsd1",sortDescending:!0,sortItems:`<ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Position"></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Company"></ui5-sort-item>
<ui5-sort-item slot="sortItems" text="Department"></ui5-sort-item>`,filterItems:`<ui5-filter-item slot="filterItems" text="Position">
    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Department">
    <ui5-filter-item-option slot="values" text="Sales"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="Management"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="PR"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Location">
    <ui5-filter-item-option slot="values" text="Walldorf"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="New York"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="London"></ui5-filter-item-option>
</ui5-filter-item>
<ui5-filter-item slot="filterItems" text="Reports to">
    <ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
    <ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
</ui5-filter-item>`};e.decorators=[t=>u(r||(r=v([`<ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
    `,`
    <br/>
    <br/>
    <div id="vsdResults"></div>
    <script>
        var vsdResults = document.getElementById("vsdResults");
        btnOpenDialog1.addEventListener("click", function () {
            vsdResults.innerHTML = "";
            vsd1.show();
        });
        vsd1.addEventListener("confirm", function(evt) {
            vsdResults.innerHTML = JSON.stringify(evt.detail);
        });
    <\/script>
    `])),t())];e.parameters={docs:{story:{inline:!1}}};var l,m,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:'args => html`<ui5-view-settings-dialog\n    id="${ifDefined(args.id)}"\n    sort-descending="${ifDefined(args.sortDescending)}"\n>\n    ${unsafeHTML(args.sortItems)}\n    ${unsafeHTML(args.filterItems)}\n</ui5-view-settings-dialog>`',...(a=(m=e.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};const F=["Basic"];export{e as Basic,F as __namedExportsOrder,E as default};
//# sourceMappingURL=ViewSettingsDialog.stories.943ea02c.js.map
