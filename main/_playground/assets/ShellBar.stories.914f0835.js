import{x as A}from"./lit-element.179636e6.js";import{l as e}from"./if-defined.9da98955.js";import{o as t}from"./unsafe-html.ff185b2f.js";import{D as S}from"./docs.900f4496.js";import"./index.bdfa8201.js";import"./_commonjsHelpers.b8add541.js";import"./chunk-S4VUQJ4A.0ad8f14d.js";import"./iframe.d2d30c97.js";import"../sb-preview/runtime.js";import"./client.69b06123.js";import"./index.4281e927.js";import"./index.5ca63ce8.js";import"./index.5f460d07.js";import"./index.d612502e.js";import"./index.b38f6aa4.js";const H={copilotDomRef:{control:{type:!1}},logoDomRef:{control:{type:!1}},notificationsDomRef:{control:{type:!1}},overflowDomRef:{control:{type:!1}},productSwitchDomRef:{control:{type:!1}},profileDomRef:{control:{type:!1}},closeOverflow:{description:"Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event",table:{category:"methods"}}},I={package:"@ui5/webcomponents-fiori",since:"0.8.0"};var c=Object.freeze,L=Object.defineProperty,B=(i,P)=>c(L(i,"raw",{value:c(P||i.slice())})),u;const p="ui5-shellbar",q={title:"Fiori/ShellBar",component:p,subcomponents:{ShellBarItem:"ui5-shellbar-item"},parameters:{docs:{page:S({...I,component:p})}},argTypes:H},l=i=>A`<ui5-shellbar
    primary-title="${e(i.primaryTitle)}"
    secondary-title="${e(i.secondaryTitle)}"
    notifications-count="${e(i.notificationsCount)}"
    ?show-notifications="${e(i.showNotifications)}"
    ?show-product-switch="${e(i.showProductSwitch)}"
    ?show-co-pilot="${e(i.showCoPilot)}"
    ?show-search-field="${e(i.showSearchField)}"
    .accessibilityRoles="${e(i.accessibilityRoles)}"
    .accessibilityTexts="${e(i.accessibilityTexts)}"
    .accessibilityAttributes="${e(i.accessibilityAttributes)}"
>
    ${t(i.default)} 
    ${t(i.profile)}
    ${t(i.logo)} 
    ${t(i.menuItems)}
    ${t(i.searchField)} 
    ${t(i.startButton)}
</ui5-shellbar>`,o=l.bind({});o.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",profile:'<ui5-avatar slot="profile" icon="customer"></ui5-avatar>',logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />',startButton:'<ui5-button icon="nav-back" slot="startButton"></ui5-button>'};const n=l.bind({});n.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",showNotifications:!0,notificationsCount:"99+",profile:`
    <ui5-avatar slot="profile">
        <img src="../assets/images/avatars/woman_avatar_5.png" />
    </ui5-avatar>`,logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />',searchField:'<ui5-input slot="searchField" placeholder="Enter service..."></ui5-input>'};const a=l.bind({});a.args={primaryTitle:"Corporate Portal",secondaryTitle:"secondary title",showCoPilot:!0,profile:`
    <ui5-avatar slot="profile">
        <img src="../assets/images/avatars/woman_avatar_5.png" />
    </ui5-avatar>`,logo:'<img slot="logo" src="../assets/images/sap-logo-svg.svg" />'};let s=0;const r=()=>(s++,A(u||(u=B([`
        <ui5-shellbar
            id="shellbar-`,`"
            primary-title="Corporate Portal"
            secondary-title="secondary title"
            notifications-count="99+"
            show-notifications=""
            show-product-switch=""
            show-co-pilot=""
        >
            <ui5-avatar slot="profile">
                <img src="../assets/images/avatars/woman_avatar_5.png" />
            </ui5-avatar>
            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
            <ui5-button icon="nav-back" slot="startButton"></ui5-button>

            <ui5-input slot="searchField"></ui5-input>
            <ui5-li slot="menuItems">Application 1</ui5-li>
            <ui5-li slot="menuItems">Application 2</ui5-li>
            <ui5-li slot="menuItems">Application 3</ui5-li>
            <ui5-li slot="menuItems">Application 4</ui5-li>
            <ui5-li slot="menuItems">Application 5</ui5-li>
        </ui5-shellbar>
        <ui5-popover id="action-popover-`,`" placement-type="Bottom">
            <div class="action-popover-header">
                <ui5-title style="padding: 0.25rem 1rem 0rem 1rem"
                    >An Kimura</ui5-title
                >
            </div>
            <div class="action-popover-content" style="margin-top: 1rem;">
                <ui5-list separators="None">
                    <ui5-li icon="sys-find">App Finder</ui5-li>
                    <ui5-li icon="settings">Settings</ui5-li>
                    <ui5-li icon="edit">Edit Home Page</ui5-li>
                    <ui5-li icon="sys-help">Help</ui5-li>
                    <ui5-li icon="log">Sign out</ui5-li>
                </ui5-list>
            </div>
        </ui5-popover>
        <script>
            (function () {
                const shellbar = document.getElementById("shellbar-`,`");
                const actionPopover = document.getElementById(
                    "action-popover-`,`"
                );
                shellbar.addEventListener(
                    "ui5-profile-click",
                    function (event) {
                        actionPopover.showAt(event.detail.targetRef);
                    }
                );
            })();
        <\/script>
    `])),s,s,s,s));var f,d,m;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,b,$;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:'args => html`<ui5-shellbar\n    primary-title="${ifDefined(args.primaryTitle)}"\n    secondary-title="${ifDefined(args.secondaryTitle)}"\n    notifications-count="${ifDefined(args.notificationsCount)}"\n    ?show-notifications="${ifDefined(args.showNotifications)}"\n    ?show-product-switch="${ifDefined(args.showProductSwitch)}"\n    ?show-co-pilot="${ifDefined(args.showCoPilot)}"\n    ?show-search-field="${ifDefined(args.showSearchField)}"\n    .accessibilityRoles="${ifDefined(args.accessibilityRoles)}"\n    .accessibilityTexts="${ifDefined(args.accessibilityTexts)}"\n    .accessibilityAttributes="${ifDefined(args.accessibilityAttributes)}"\n>\n    ${unsafeHTML(args.default)} \n    ${unsafeHTML(args.profile)}\n    ${unsafeHTML(args.logo)} \n    ${unsafeHTML(args.menuItems)}\n    ${unsafeHTML(args.searchField)} \n    ${unsafeHTML(args.startButton)}\n</ui5-shellbar>`',...($=(b=a.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var w,T,D;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  index++;
  return html\`
        <ui5-shellbar
            id="shellbar-\${index}"
            primary-title="Corporate Portal"
            secondary-title="secondary title"
            notifications-count="99+"
            show-notifications=""
            show-product-switch=""
            show-co-pilot=""
        >
            <ui5-avatar slot="profile">
                <img src="../assets/images/avatars/woman_avatar_5.png" />
            </ui5-avatar>
            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />
            <ui5-button icon="nav-back" slot="startButton"></ui5-button>

            <ui5-input slot="searchField"></ui5-input>
            <ui5-li slot="menuItems">Application 1</ui5-li>
            <ui5-li slot="menuItems">Application 2</ui5-li>
            <ui5-li slot="menuItems">Application 3</ui5-li>
            <ui5-li slot="menuItems">Application 4</ui5-li>
            <ui5-li slot="menuItems">Application 5</ui5-li>
        </ui5-shellbar>
        <ui5-popover id="action-popover-\${index}" placement-type="Bottom">
            <div class="action-popover-header">
                <ui5-title style="padding: 0.25rem 1rem 0rem 1rem"
                    >An Kimura</ui5-title
                >
            </div>
            <div class="action-popover-content" style="margin-top: 1rem;">
                <ui5-list separators="None">
                    <ui5-li icon="sys-find">App Finder</ui5-li>
                    <ui5-li icon="settings">Settings</ui5-li>
                    <ui5-li icon="edit">Edit Home Page</ui5-li>
                    <ui5-li icon="sys-help">Help</ui5-li>
                    <ui5-li icon="log">Sign out</ui5-li>
                </ui5-list>
            </div>
        </ui5-popover>
        <script>
            (function () {
                const shellbar = document.getElementById("shellbar-\${index}");
                const actionPopover = document.getElementById(
                    "action-popover-\${index}"
                );
                shellbar.addEventListener(
                    "ui5-profile-click",
                    function (event) {
                        actionPopover.showAt(event.detail.targetRef);
                    }
                );
            })();
        <\/script>
    \`;
}`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const G=["Basic","SearchAndNotifications","WithCoPilot","Advanced"];export{r as Advanced,o as Basic,n as SearchAndNotifications,a as WithCoPilot,G as __namedExportsOrder,q as default};
//# sourceMappingURL=ShellBar.stories.914f0835.js.map
