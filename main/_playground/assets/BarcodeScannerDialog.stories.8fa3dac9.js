import{x as i}from"./lit-element.179636e6.js";import{D as l}from"./docs.400266cf.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.defbc0ae.js";import"./iframe.7336b0e7.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.a0b4809e.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const m={close:{description:"Closes the dialog and the scan session.",table:{category:"methods"}},show:{description:"Shows a dialog with the camera videostream. Starts a scan session.",table:{category:"methods"}}},p={package:"@ui5/webcomponents-fiori",since:"1.0.0-rc.15"};var a=Object.freeze,g=Object.defineProperty,u=(e,d)=>a(g(e,"raw",{value:a(d||e.slice())})),t;const r="ui5-barcode-scanner-dialog",R={title:"Fiori/BarcodeScannerDialog",component:r,parameters:{docs:{page:l({...p,component:r})}},argTypes:m},b=e=>i`
    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>
`,n=b.bind({});n.decorators=[e=>i(t||(t=u([" ",`
        <ui5-button id="btnScan" icon="camera" tooltip="Start Camera"
            >Scan</ui5-button
        >
        <div>
            <ui5-label id="scanResult"></ui5-label>
            <ui5-label id="scanError"></ui5-label>
        </div>
        <script>
            const btnScan = document.getElementById("btnScan");
            const dlgScan = document.getElementById("dlgScan");
            const scanResult = document.getElementById("scanResult");
            const scanError = document.getElementById("scanError");

            btnScan.addEventListener("click", (event) => {
                dlgScan.show();
            });

            dlgScan.addEventListener("scan-success", (event) => {
                scanResult.innerHTML = event.detail.text;
                dlgScan.close();
            });

            dlgScan.addEventListener("scan-error", (event) => {
                scanError.innerHTML = event.detail.message;
                dlgScan.close();
            });
        <\/script>`])),e())];var o,c,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:'args => html`\n    <ui5-barcode-scanner-dialog id="dlgScan"> </ui5-barcode-scanner-dialog>\n`',...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const T=["Basic"];export{n as Basic,T as __namedExportsOrder,R as default};
//# sourceMappingURL=BarcodeScannerDialog.stories.8fa3dac9.js.map
