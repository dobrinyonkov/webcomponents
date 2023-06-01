import{x as h}from"./lit-element.179636e6.js";import{l as a}from"./if-defined.9da98955.js";import{o as l}from"./unsafe-html.ff185b2f.js";import{D as S}from"./docs.900f4496.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.0ad8f14d.js";import"./iframe.d2d30c97.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4281e927.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const L={files:{control:{type:!1}},valueState:{control:"select",options:["Error","Information","None","Success","Warning"]}},M={package:"@ui5/webcomponents",since:"1.0.0-rc.6"};var s=Object.freeze,U=Object.defineProperty,T=(e,b)=>s(U(e,"raw",{value:s(b||e.slice())})),d;const o="ui5-file-uploader",z={title:"Main/FileUploader",component:o,parameters:{docs:{page:S({...M,component:o})}},argTypes:L},r=e=>h`<ui5-file-uploader
    accept="${a(e.accept)}"
    ?hide-input="${a(e.hideInput)}"
    ?disabled="${a(e.disabled)}"
    ?multiple="${a(e.multiple)}"
    name="${a(e.name)}"
    placeholder="${a(e.placeholder)}"
    value="${a(e.value)}"
    valueState="${a(e.valueState)}"
    id="${a(e.id)}"
>
    ${l(e.default)}
    ${l(e.valueStateMessage)}
</ui5-file-uploader>`,t=r.bind({});t.args={default:'<ui5-button icon="upload">Upload Single File</ui5-button>'};const n=r.bind({});n.storyName="With Custom Design ";n.args={hideInput:!0,default:"<ui5-badge>Upload File</ui5-badge>"};const i=r.bind({});i.storyName="Image Uploader";i.args={id:"fileuploader",accept:"image/*",default:'<ui5-button icon="upload">Upload Images</ui5-button>',multiple:!0};i.decorators=[e=>h(d||(d=T(["",`
    <div id="result"></div>
    <script>
        var fileUploader = document.querySelector("#fileuploader"),
            resultDiv = document.querySelector("#result");
        fileUploader.addEventListener("change", function(event) {
            var files = event.target.files;
            if (!files.length) {
                resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";
            } else {
                resultDiv.innerHTML = "";
                resultDiv.style.marginTop = "1rem";
                for (var i = 0; i < files.length; i++) {
                    var img = document.createElement("img");
                    img.src = URL.createObjectURL(files[i]);
                    img.width = 100;
                    img.height = 100;
                    img.onload = function() {
                        URL.revokeObjectURL(img.src);
                    }
                    resultDiv.appendChild(img);
                }
            }
        })
    <\/script>`])),e())];i.parameters={docs:{story:{inline:!1}}};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var $,v,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:'args => html`<ui5-file-uploader\n    accept="${ifDefined(args.accept)}"\n    ?hide-input="${ifDefined(args.hideInput)}"\n    ?disabled="${ifDefined(args.disabled)}"\n    ?multiple="${ifDefined(args.multiple)}"\n    name="${ifDefined(args.name)}"\n    placeholder="${ifDefined(args.placeholder)}"\n    value="${ifDefined(args.value)}"\n    valueState="${ifDefined(args.valueState)}"\n    id="${ifDefined(args.id)}"\n>\n    ${unsafeHTML(args.default)}\n    ${unsafeHTML(args.valueStateMessage)}\n</ui5-file-uploader>`',...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const A=["Basic","Custom","Advanced"];export{i as Advanced,t as Basic,n as Custom,A as __namedExportsOrder,z as default};
//# sourceMappingURL=FileUploader.stories.9b8db788.js.map
