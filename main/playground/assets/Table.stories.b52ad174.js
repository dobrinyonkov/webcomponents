import{x as b}from"./lit-element.57026f9a.js";import{D as _}from"./docs.0dc6c227.js";import{l as n}from"./if-defined.08fba587.js";import{o as d}from"./unsafe-html.5df53a7b.js";import{T as P,a as j}from"./TableGrowingMode.77e95459.js";import"./index.d901690a.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-PCJTTTQV.c1d99bdf.js";import"./iframe.13acee56.js";import"../sb-preview/runtime.mjs";import"./client.6942378e.js";import"./index.4b42eb1d.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d2348c08.js";import"./index.b38f6aa4.js";import"./chunk-R4NKYYJA.15989c7a.js";const K={growing:{control:"select",options:["Button","None","Scroll"]},mode:{control:"select",options:["MultiSelect","None","SingleSelect"]},columns:{control:{type:"text"}},default:{control:{type:"text"}},"popin-change":{description:"Fired when <code>ui5-table-column</code> is shown as a pop-in instead of hiding it.",table:{category:"events"},UI5CustomData:{parameters:[{name:"poppedColumns",type:"Array",description:"popped-in columns."}]}},"row-click":{description:"Fired when a row in <code>Active</code> mode is clicked or <code>Enter</code> key is pressed.",table:{category:"events"},UI5CustomData:{parameters:[{name:"row",type:"HTMLElement",description:"the activated row."}]}},"selection-change":{description:"Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.",table:{category:"events"},UI5CustomData:{parameters:[{name:"selectedRows",type:"Array",description:"An array of the selected rows."},{name:"previouslySelectedRows",type:"Array",description:"An array of the previously selected rows."}]}}},V={package:"@ui5/webcomponents"};var p=Object.freeze,O=Object.defineProperty,E=(l,W)=>p(O(l,"raw",{value:p(W||l.slice())})),m,g;const f="ui5-table";let e=0;const ce={title:"Main/Table",component:f,subcomponents:{TableColumn:"ui5-table-column",TableRow:"ui5-table-row",TableGroupRow:"ui5-table-group-row",TableCell:"ui5-table-cell"},parameters:{docs:{page:_({...V,component:f})}},argTypes:K},i=l=>b`
<ui5-table
    id="table-${++e}"
    no-data-text="${n(l.noDataText)}"
    growing-button-text="${n(l.growingButtonText)}"
    growing-button-subtext="${n(l.growingButtonSubtext)}"
    ?hide-no-data="${n(l.hideNoData)}"
    growing="${n(l.growing)}"
    ?busy="${n(l.busy)}"
    busy-delay="${n(l.busyDelay)}"
    ?sticky-column-header="${n(l.stickyColumnHeader)}"
    mode="${n(l.mode)}"
    accessible-name="${n(l.accessibleName)}"
    accessible-name-ref="${n(l.accessibleNameRef)}"
>
    ${d(l.default)}
    ${d(l.columns)}
</ui5-table>
`,c=i.bind({});c.args={columns:`
<ui5-table-column slot="columns">
    <span style="line-height: 1.4rem">Product</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="800">
    <span style="line-height: 1.4rem">Supplier</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Dimensions</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Weight</span>
</ui5-table-column>
<ui5-table-column slot="columns" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Price</span>
</ui5-table-column>`,default:`
<ui5-table-row>
    <ui5-table-cell>
        <div class="double-line-content">
            <span><b>Notebook Basic 15</b></span>
            <span style="margin-top: 0.5rem">HT-1000</span>
        </div>
    </ui5-table-cell>
    <ui5-table-cell>
        <span>Very Best Screens</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span>30 x 18 x 3cm</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span style="color: #2b7c2b"><b>4.2</b>KG</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span><b>956</b>EUR</span>
    </ui5-table-cell>
</ui5-table-row>`};const u=i.bind({});u.args={columns:`
<ui5-table-column slot="columns">
    <span>Product</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin="">
    <span>Supplier</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="800" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
    <span>Dimensions</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="800" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
    <span>Weight</span>
</ui5-table-column>
<ui5-table-column slot="columns" class="table-header-text-alignment">
    <span>Price</span>
</ui5-table-column>`,default:`
<ui5-table-row>
    <ui5-table-cell>
        <div class="double-line-content">
            <span><b>Notebook Basic 15</b></span>
            <span style="margin-top: 0.5rem">HT-1000</span>
        </div>
    </ui5-table-cell>
    <ui5-table-cell>
        <span>Very Best Screens</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span>30 x 18 x 3cm</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span style="color: #2b7c2b"><b>4.2</b>KG</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span><b>956</b>EUR</span>
    </ui5-table-cell>
</ui5-table-row>
<ui5-table-row>
    <ui5-table-cell>
        <div class="double-line-content">
            <span><b>Notebook Basic 175</b></span>
            <span style="margin-top: 0.5rem">HT-1001</span>
        </div>
    </ui5-table-cell>
    <ui5-table-cell>
        <span>Very Best Screens</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span>29 x 17 x 3.1cm</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span style="color: #2b7c2b"><b>4.5</b>KG</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span><b>1249</b>EUR</span>
    </ui5-table-cell>
</ui5-table-row>
<ui5-table-row>
    <ui5-table-cell>
        <div class="double-line-content">
            <span><b>Notebook Basic 18</b></span>
            <span style="margin-top: 0.5rem">HT-1002</span>
        </div>
    </ui5-table-cell>
    <ui5-table-cell>
        <span>Very Best Screens</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span>28 x 19 x 2.5cm</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span style="color: #2b7c2b"><b>4.2</b>KG</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span><b>1570</b>EUR</span>
    </ui5-table-cell>
</ui5-table-row>`};const s=i.bind({});s.decorators=[l=>b`
<div style="height: 150px; overflow: scroll;">
    ${l()}
</div>
`];s.args={columns:`
<ui5-table-column slot="columns">
    <span style="line-height: 1.4rem">Product</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="800">
    <span style="line-height: 1.4rem">Supplier</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Dimensions</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Weight</span>
</ui5-table-column>
<ui5-table-column slot="columns" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Price</span>
</ui5-table-column>`,stickyColumnHeader:!0,default:`
<ui5-table-row>
    <ui5-table-cell>
        <div class="double-line-content">
            <span><b>Notebook Basic 15</b></span>
            <span style="margin-top: 0.5rem">HT-1000</span>
        </div>
    </ui5-table-cell>
    <ui5-table-cell>
        <span>Very Best Screens</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span>30 x 18 x 3cm</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span style="color: #2b7c2b"><b>4.2</b>KG</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span><b>956</b>EUR</span>
    </ui5-table-cell>
</ui5-table-row>
<ui5-table-row>
    <ui5-table-cell>
        <div class="double-line-content">
            <span><b>Notebook Basic 175</b></span>
            <span style="margin-top: 0.5rem">HT-1001</span>
        </div>
    </ui5-table-cell>
    <ui5-table-cell>
        <span>Very Best Screens</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span>29 x 17 x 3.1cm</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span style="color: #2b7c2b"><b>4.5</b>KG</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span><b>1249</b>EUR</span>
    </ui5-table-cell>
</ui5-table-row>
<ui5-table-row>
    <ui5-table-cell>
        <div class="double-line-content">
            <span><b>Notebook Basic 18</b></span>
            <span style="margin-top: 0.5rem">HT-1002</span>
        </div>
    </ui5-table-cell>
    <ui5-table-cell>
        <span>Very Best Screens</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span>28 x 19 x 2.5cm</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span style="color: #2b7c2b"><b>4.2</b>KG</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span><b>1570</b>EUR</span>
    </ui5-table-cell>
</ui5-table-row>
<ui5-table-row>
    <ui5-table-cell>
        <div class="double-line-content">
            <span><b>Notebook Basic 19</b></span>
            <span style="margin-top: 0.5rem">HT-1003</span>
        </div>
    </ui5-table-cell>
    <ui5-table-cell>
        <span>Smartcards</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span>32 x 21 x 4cm</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span style="color: #2b7c2b"><b>4.2</b>KG</span>
    </ui5-table-cell>
    <ui5-table-cell style="text-align: right">
        <span><b>1650</b>EUR</span>
    </ui5-table-cell>
</ui5-table-row>`};const o=i.bind({});o.args={columns:`
<ui5-table-column slot="columns">
    <span style="line-height: 1.4rem">Product</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="800">
    <span style="line-height: 1.4rem">Supplier</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Dimensions</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Weight</span>
</ui5-table-column>
<ui5-table-column slot="columns" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Price</span>
</ui5-table-column>`,noDataText:"No Data"};o.storyName="Table with No Data";const t=i.bind({});t.args={growing:P.Button,columns:`
<ui5-table-column slot="columns">
    <span style="line-height: 1.4rem">Product</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="800">
    <span style="line-height: 1.4rem">Supplier</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Dimensions</span>
</ui5-table-column>
<ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Weight</span>
</ui5-table-column>
<ui5-table-column slot="columns" class="table-header-text-alignment">
    <span style="line-height: 1.4rem">Price</span>
</ui5-table-column>`};t.decorators=[l=>b(m||(m=E([`
`,`
<script>
    const growingTable`,' = document.getElementById("table-',`");
    const rows`,` = 4;
    let loads`,` = 1;
    let sliceIndex`,` = 0;
    let endSliceIndex`," = sliceIndex"," + rows",`;
    const init`,` = async (rows) => {
        const response = await fetch("../assets/data/products.json");
        const products = await response.json();
        const collectionLength = products.length;
        const loadsAll = Math.ceil(collectionLength / rows);
        const result = products.slice(sliceIndex`,", endSliceIndex",`).map((product, index) => {
            return "<ui5-table-row  id=roll-" + index + ">" +
                "<ui5-table-cell>" +
                "<div class='double-line-content'>" +
                "<span><b>" + product.name +"</b></span>" +
                "<span style='margin-top: 0.5rem'>" + product.productId +"</span>" +
                "</div></ui5-table-cell>" +
                "<ui5-table-cell><span>" + product.supplierName + "</span></ui5-table-cell>" +
                "<ui5-table-cell style='text-align: right'><span>" + product.width + " x " + product.depth + " x " + product.height + product.dimUnit + "</span></ui5-table-cell>" +
                "<ui5-table-cell style='text-align: right'><span style='color: #2b7c2b' class='middle'><b>" + product.weightMeasure + "</b>" + product.weightUnit + "</span></ui5-table-cell>" +
                "<ui5-table-cell style='text-align: right'><span><b> " + product.price + "</b>" + product.currencyCode + "</span></ui5-table-cell></ui5-table-row>";
        }).join("");
        if (loads`,` >= loadsAll) {
            growingTable`,`.growing = "None";
        } else {
            growingTable`,'.setAttribute("growing-button-subtext", loads',` * rows + " of " + collectionLength);
            sliceIndex`,` += rows;
        }
        growingTable`,`.insertAdjacentHTML('beforeend', result);
    }
    const loadMore`,` = () => {
        growingTable`,`.busy = true;
        setTimeout(() => {
            ++loads`,`;
            endSliceIndex`," = sliceIndex"," + rows",`;
            init`,"(rows",`);
            growingTable`,`.busy = false;
        }, 1500);
    }
    growingTable`,'.addEventListener("load-more", loadMore',`);
    init`,"(rows",`);
<\/script>
<style>
    ui5-table ui5-table-column.table-header-text-alignment::part(column) {
        text-align: end;
    }
</style>
`])),l(),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)];t.storyName='Growing Table with "More" button';const a=i.bind({});a.args={growing:P.Scroll,columns:`
<ui5-table-column id="column-1" slot="columns" width="350px">
    <ui5-label>Product</ui5-label>
</ui5-table-column>
<ui5-table-column id="column-2" slot="columns" min-width="800" popin-text="Supplier">
    <ui5-label>Supplier</ui5-label>
</ui5-table-column>
<ui5-table-column id="column-3" slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
    <div class="column-content">
        <ui5-label>Dimensions</ui5-label>
    </div>
</ui5-table-column>
<ui5-table-column id="column-4" slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
    <ui5-label>Weight</ui5-label>
</ui5-table-column>
<ui5-table-column id="column-5" slot="columns" class="table-header-text-alignment">
    <ui5-label>Price</ui5-label>
</ui5-table-column>`};a.decorators=[l=>b(g||(g=E([`
<div style="height: 200px; overflow: scroll;">
    `,`
</div>
<script>
    const growingTableScroll`,' = document.getElementById("table-',`");
    const rowsScroll`,` = 4;
    let sliceIndexScroll`,` = 0;
    let loadsScroll`,` = 1;
    let endSliceIndexScroll`," = sliceIndexScroll"," + rowsScroll",`;
    const fill`,` = async (rowsScroll) => {
        const responseScrollTable = await fetch("../assets/data/products.json");
        const productsScrollTable = await responseScrollTable.json();
        const collectionLengthScroll = productsScrollTable.length;
        let loadsAllScroll = Math.ceil(collectionLengthScroll / rowsScroll);
        const result = productsScrollTable.slice(sliceIndexScroll`,", endSliceIndexScroll",`).map((product, index) => {
            return "<ui5-table-row  id=roll-" + index + ">" +
                "<ui5-table-cell>" +
                "<div class='double-line-content'>" +
                "<span><b>" + product.name +"</b></span>" +
                "<span style='margin-top: 0.5rem'>" + product.productId +"</span>" +
                "</div></ui5-table-cell>" +
                "<ui5-table-cell><span>" + product.supplierName + "</span></ui5-table-cell>" +
                "<ui5-table-cell style='text-align: right'><span>" + product.width + " x " + product.depth + " x " + product.height + product.dimUnit + "</span></ui5-table-cell>" +
                "<ui5-table-cell style='text-align: right'><span style='color: #2b7c2b'><b>" + product.weightMeasure + "</b>" + product.weightUnit + "</span></ui5-table-cell>" +
                "<ui5-table-cell style='text-align: right'><span><b> " + product.price + "</b>" + product.currencyCode + "</span></ui5-table-cell></ui5-table-row>";
        }).join("");
        if (loadsScroll`,` >= loadsAllScroll) {
            growingTableScroll`,`.growing = "None";
        } else {
            sliceIndexScroll`,` += rowsScroll;
        }
        growingTableScroll`,`.insertAdjacentHTML('beforeend', result);
    }
    const growOnScroll`,` = () => {
        let timeout`,`;
        growingTableScroll`,`.busy = true;
        if (timeout`,`) {
            clearTimeout(timeout`,`);
        }
        timeout`,` = setTimeout(() => {
            loadsScroll`,`++
            endSliceIndexScroll`," = sliceIndexScroll"," + rowsScroll",`;
            fill`,"(rowsScroll",`);
            growingTableScroll`,`.busy = false;
        }, 1500);
    }
    growingTableScroll`,'.addEventListener("load-more", growOnScroll',`);
    fill`,"(rowsScroll",`);
<\/script>
<style>
    ui5-table ui5-table-column.table-header-text-alignment::part(column) {
        text-align: end;
    }
</style>
`])),l(),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)];a.storyName="Growing Table on Scroll";const r=i.bind({});r.args={mode:j.SingleSelect,columns:`
    <ui5-table-column id="column-1" slot="columns">
        <ui5-label>City</ui5-label>
    </ui5-table-column>
    <ui5-table-column id="column-2" slot="columns" min-width="500" popin-text="Supplier" demand-popin="">
        <ui5-label>Supplier</ui5-label>
    </ui5-table-column>
    <ui5-table-column id="column-3" slot="columns" min-width="500">
        <ui5-label>Country</ui5-label>
    </ui5-table-column>
    `,default:`
    <ui5-table-group-row>Country: Bulgaria</ui5-table-group-row>
    <ui5-table-row>
        <ui5-table-cell><span>Sofia</span></ui5-table-cell>
        <ui5-table-cell><span>Company 1</span></ui5-table-cell>
        <ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
    </ui5-table-row>
    <ui5-table-row>
        <ui5-table-cell><span>Plovdiv</span></ui5-table-cell>
        <ui5-table-cell><span>Company 2</span></ui5-table-cell>
        <ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
    </ui5-table-row>
    <ui5-table-group-row><span>Country: USA</span></ui5-table-group-row>
    <ui5-table-row>
        <ui5-table-cell><span>Denver</span></ui5-table-cell>
        <ui5-table-cell><span>Company 3</span></ui5-table-cell>
        <ui5-table-cell><span>USA</span></ui5-table-cell>
    </ui5-table-row>
    <ui5-table-row>
        <ui5-table-cell><span>Boston</span></ui5-table-cell>
        <ui5-table-cell><span>Company 4</span></ui5-table-cell>
        <ui5-table-cell><span>USA</span></ui5-table-cell>
    </ui5-table-row>
    `};r.storyName="Table with grouping and select mode";var h,y,w;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,D,$;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...($=(D=u.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var S,T,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(N=(T=s.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var v,B,H;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(H=(B=o.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var M,k,I;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(I=(k=t.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var C,L,R;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(R=(L=a.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var G,U,A;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`args => html\`
<ui5-table
    id="table-\${++index}"
    no-data-text="\${ifDefined(args.noDataText)}"
    growing-button-text="\${ifDefined(args.growingButtonText)}"
    growing-button-subtext="\${ifDefined(args.growingButtonSubtext)}"
    ?hide-no-data="\${ifDefined(args.hideNoData)}"
    growing="\${ifDefined(args.growing)}"
    ?busy="\${ifDefined(args.busy)}"
    busy-delay="\${ifDefined(args.busyDelay)}"
    ?sticky-column-header="\${ifDefined(args.stickyColumnHeader)}"
    mode="\${ifDefined(args.mode)}"
    accessible-name="\${ifDefined(args.accessibleName)}"
    accessible-name-ref="\${ifDefined(args.accessibleNameRef)}"
>
    \${unsafeHTML(args.default)}
    \${unsafeHTML(args.columns)}
</ui5-table>
\``,...(A=(U=r.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const ue=["BasicTable","TableDisplayInline","TableStickyHeader","TableNoData","GrowingTableMoreButton","GrowingTableScroll","GroupingTableSelect"];export{c as BasicTable,r as GroupingTableSelect,t as GrowingTableMoreButton,a as GrowingTableScroll,u as TableDisplayInline,o as TableNoData,s as TableStickyHeader,ue as __namedExportsOrder,ce as default};
//# sourceMappingURL=Table.stories.b52ad174.js.map
