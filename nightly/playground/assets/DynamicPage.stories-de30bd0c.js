import{x as r}from"./lit-element-c5a2b594.js";import{l as o}from"./if-defined-c29cffe1.js";import{o as e}from"./unsafe-html-0ddd83da.js";import{D as l}from"./DynamicPageTitleTemplate-8bbc5649.js";import{D as c}from"./DynamicPageHeaderTemplate-3da8c13a.js";const s={default:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},titleArea:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},headerArea:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}},footer:{control:{type:"text"},table:{type:{summary:"Array<HTMLElement>"}}}},x={package:"@ui5/webcomponents-fiori",since:"1.122",tagName:"ui5-dynamic-page"},u=i=>r`
    <style>
        #root-inner,
        #storybook-root,
        html, body {
            height: 100%;
            padding: 0;
            margin: 0;
        }
    </style>
    ${i()}
`,m={title:"Fiori/Dynamic page",component:"DynamicPage",decorators:[u],argTypes:s},p=i=>r`
    <ui5-dynamic-page id="page"
    ?header-snapped = ${o(i.headerSnapped)}
    ?header-pinned = ${o(i.headerPinned)}
    ?show-footer = ${o(i.showFooter)}
    >
      ${e(i.headerArea)}
      ${e(i.titleArea)}
      ${e(i.default)}
      ${e(i.footer)}
    </ui5-dynamic-page>
`,t=p.bind({});t.args={showFooter:!0,titleArea:l,headerArea:c,default:`
    <ui5-list
    id="col1list"
    header-text="Products (13)"
    mode="SingleSelect"
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="47.00 EUR"
        >10 inch Portable DVD</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="249.00 EUR"
        >7 inch WidescreenPortable DVD Player w MP3</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="947.00 EUR"
        >Astro Laptop 1516</ui5-li
    >
    <ui5-li
        description="HT-1251"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.00 EUR"
        >Astro Phone 6</ui5-li
    >
    <ui5-li
        description="HT-1252"
        icon="slim-arrow-right"
        icon-end
        additional-text="27.99 EUR"
        >Audio/Video Cable Kit - 4m</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="447.90 EUR"
        >Beam Breaker B-1</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="647.50 EUR"
        >Beam Breaker B-2</ui5-li
    >
    <ui5-li
        description="HT-6001"
        icon="slim-arrow-right"
        icon-end
        additional-text="847.80 EUR"
        >Beam Breaker B-3</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,250.00 EUR"
        >Beam Breaker B-4</ui5-li
    >
    <ui5-li
        description="HT-8001"
        icon="slim-arrow-right"
        icon-end
        additional-text="1,288.00 EUR"
        >Camcorder View</ui5-li
    >
    <ui5-li
        description="HT-2001"
        icon="slim-arrow-right"
        icon-end
        additional-text="996.00 EUR"
        >Benda Laptop 1408</ui5-li
    >
    <ui5-li
        description="HT-0003"
        icon="slim-arrow-right"
        icon-end
        additional-text="147.00 EUR"
        >Cepat Tablet 10.5</ui5-li
    >
    <ui5-li
        description="HT-1001"
        icon="slim-arrow-right"
        icon-end
        additional-text="87.90 EUR"
        >Gladiator MX</ui5-li
    >
    </ui5-list>`,footer:`<ui5-bar id="footer" slot="footer" design="FloatingFooter">
    <ui5-button slot="endContent">Edit</ui5-button>
    <ui5-button slot="endContent">Close</ui5-button>
    </ui5-bar>`};t.decorators=[i=>r`
    ${i()}`];t.parameters={docs:{story:{inline:!1,iframeHeight:600}}};var n,a,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return html\`
    <ui5-dynamic-page id="page"
    ?header-snapped = \${ifDefined(args.headerSnapped)}
    ?header-pinned = \${ifDefined(args.headerPinned)}
    ?show-footer = \${ifDefined(args.showFooter)}
    >
      \${unsafeHTML(args.headerArea)}
      \${unsafeHTML(args.titleArea)}
      \${unsafeHTML(args.default)}
      \${unsafeHTML(args.footer)}
    </ui5-dynamic-page>
\`;
}`,...(d=(a=t.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const h=["Basic"],E=Object.freeze(Object.defineProperty({__proto__:null,Basic:t,__namedExportsOrder:h,default:m},Symbol.toStringTag,{value:"Module"}));export{E as C,x as c};
