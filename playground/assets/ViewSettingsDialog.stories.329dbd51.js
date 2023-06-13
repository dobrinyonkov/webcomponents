import{x as d}from"./lit-element.57026f9a.js";import{o as i}from"./unsafe-html.5df53a7b.js";import{l as o}from"./if-defined.08fba587.js";import{D as p}from"./docs.95e49ae5.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.e99f3c67.js";import"./iframe.84be3029.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.fa8fbb2b.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const u={filterItems:{control:{type:"text"}},sortItems:{control:{type:"text"}},setConfirmedSettings:{description:'Sets a JavaScript object, as settings to the <code>ui5-view-settings-dialog</code>. This method can be used after the dialog is initially open, as the dialog need to set its initial settings. The <code>ui5-view-settings-dialog</code> throws an event called "before-open", this can be used as trigger point. The object should have the following format: <code> {sortOrder: "Ascending", sortBy: "Name", filters: [{"Filter 1": ["Some filter 1", "Some filter 2"]}, {"Filter 2": ["Some filter 4"]}]} </code>',table:{category:"methods"},UI5CustomData:{parameters:[{name:"settings",type:"Object",optional:!1,parameterProperties:{sortOrder:{name:"sortOrder",type:"string",optional:!1,description:"sort order"},sortBy:{name:"sortBy",type:"string",optional:!1,description:"sort by"},filters:{name:"filters",type:"Object[]",optional:!1,description:"filters"}},description:"predefined settings."}]}},show:{description:"Shows the dialog.",table:{category:"methods"}},cancel:{description:"Fired when cancel button is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"sortOrder",type:"String",description:"The current sort order selected."},{name:"sortBy",type:"String",description:"The currently selected <code>ui5-sort-item</code> text attribute."},{name:"sortByItem",type:"HTMLElement",description:"The currently selected <code>ui5-sort-item</code>."},{name:"sortDescending",type:"Boolean",description:"The selected sort order (true = descending, false = ascending)."},{name:"filters",type:"Array",description:"The selected filters items."}]}},confirm:{description:"Fired when confirmation button is activated.",table:{category:"events"},UI5CustomData:{parameters:[{name:"sortOrder",type:"String",description:"The current sort order selected."},{name:"sortBy",type:"String",description:"The currently selected <code>ui5-sort-item</code> text attribute."},{name:"sortByItem",type:"HTMLElement",description:"The currently selected <code>ui5-sort-item</code>."},{name:"sortDescending",type:"Boolean",description:"The selected sort order (true = descending, false = ascending)."},{name:"filters",type:"Array",description:"The selected filters items."}]}}},f={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.16"};var s=Object.freeze,g=Object.defineProperty,v=(t,c)=>s(g(t,"raw",{value:s(c||t.slice())})),r;const n="ui5-view-settings-dialog",F={title:"Fiori/ViewSettingsDialog",component:n,subcomponents:{SortItem:"ui5-sort-item",FilterItem:"ui5-filter-item",FilterItemOption:"ui5-filter-item-option"},parameters:{docs:{page:p({...f,component:n})}},argTypes:u},y=t=>d`<ui5-view-settings-dialog
    id="${o(t.id)}"
    sort-descending="${o(t.sortDescending)}"
>
    ${i(t.sortItems)}
    ${i(t.filterItems)}
</ui5-view-settings-dialog>`,e=y.bind({});e.storyName="Example Usage";e.args={id:"vsd1",sortDescending:!0,sortItems:`<ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>
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
</ui5-filter-item>`};e.decorators=[t=>d(r||(r=v([`<ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
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
    `])),t())];e.parameters={docs:{story:{inline:!1,iframeHeight:"500px"}}};var l,a,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:'args => html`<ui5-view-settings-dialog\n    id="${ifDefined(args.id)}"\n    sort-descending="${ifDefined(args.sortDescending)}"\n>\n    ${unsafeHTML(args.sortItems)}\n    ${unsafeHTML(args.filterItems)}\n</ui5-view-settings-dialog>`',...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const H=["Basic"];export{e as Basic,H as __namedExportsOrder,F as default};
//# sourceMappingURL=ViewSettingsDialog.stories.329dbd51.js.map
