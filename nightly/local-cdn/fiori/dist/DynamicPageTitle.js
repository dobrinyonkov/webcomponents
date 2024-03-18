var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DynamicPageTitle_1;
import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import event from "@ui5/webcomponents-base/dist/decorators/event.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import ResizeHandler from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import { isEnter, isSpace } from "@ui5/webcomponents-base/dist/Keys.js";
import ToolbarItemOverflowBehavior from "@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js";
// Template
import DynamicPageTitleTemplate from "./generated/templates/DynamicPageTitleTemplate.lit.js";
// Styles
import DynamicPageTitleCss from "./generated/themes/DynamicPageTitle.css.js";
// Texts
import { DYNAMIC_PAGE_ARIA_DESCR_TOGGLE_HEADER, } from "./generated/i18n/i18n-defaults.js";
/**
 * @class
 *
 * <h3>Overview</h3>
 *
 * Title of the <code>DynamicPage</code>.
 *
 * The <code>DynamicPageTitle</code> component is part of the <code>DynamicPage</code>
 * family and is used to serve as title of the <code>DynamicPage</code>.
 *
 * <h3>Usage</h3>
 *
 * The <code>DynamicPageTitle</code> can hold any component and displays the most important
 * information regarding the object that will always remain visible while scrolling.
 *
 * <b>Note:</b> The <code>actions</code> slot accepts any UI5 web component, but it`s
 * recommended to use <code>ui5-toolbar</code>.
 *
 * The user can switch between the expanded/collapsed states of the
 * <code>DynamicPage</code> by clicking on the <code>DynamicPageTitle</code>
 * or by using the expand/collapse visual indicators, positioned at the bottom of the
 * <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code> inside <code>ui5-dynamic-page-header-actions</code>.
 *
 * <h3>Responsive Behavior</h3>
 *
 * The responsive behavior of the <code>DynamicPageTitle</code> depends on the behavior of the
 * content that is displayed.
 *
 *
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.23.0
 */
let DynamicPageTitle = DynamicPageTitle_1 = class DynamicPageTitle extends UI5Element {
    constructor() {
        super();
        this._handleResize = this.handleResize.bind(this);
    }
    static async onDefine() {
        DynamicPageTitle_1.i18nBundle = await getI18nBundle("@ui5/webcomponents-fiori");
    }
    onEnterDOM() {
        ResizeHandler.register(this, this._handleResize);
    }
    onExitDOM() {
        ResizeHandler.deregister(this, this._handleResize);
    }
    onBeforeRendering() {
        this.prepareLayoutActions();
    }
    get styles() {
        return {
            content: {
                "min-width": `${this.minContentWidth || 0}px`,
            },
            actions: {
                "min-width": `${this.minActionsWidth || 0}px`,
            },
        };
    }
    get hasContent() {
        return !!this.content.length;
    }
    get hasHeading() {
        return !!this.heading.length;
    }
    get headingSlotName() {
        if (this.hasHeading) {
            return "heading";
        }
        if (!this.snapped) {
            return "expandedHeading";
        }
        return "snappedHeading";
    }
    get contentSlotName() {
        return !this.snapped ? "expandedContent" : "snappedContent";
    }
    get _headerExpanded() {
        return !this.snapped;
    }
    get _ariaDescribedbyText() {
        return DynamicPageTitle_1.i18nBundle.getText(DYNAMIC_PAGE_ARIA_DESCR_TOGGLE_HEADER);
    }
    get _ariaLabelledBy() {
        const hasAnyHeading = this[this.headingSlotName].length;
        if (hasAnyHeading) {
            return `${this._id}-heading`;
        }
    }
    prepareLayoutActions() {
        // all navigation/layout actions should have the NeverOverflow behavior
        const navigationActions = this.querySelector("[ui5-toolbar][slot='navigationActions']");
        if (!navigationActions) {
            return;
        }
        navigationActions.items.forEach(action => {
            action.overflowPriority = ToolbarItemOverflowBehavior.NeverOverflow;
        });
    }
    handleResize() {
        this.mobileNavigationActions = this.offsetWidth < 1280;
    }
    onMinContentWidthChange(e) {
        const slotName = e.target?.assignedSlot?.name;
        if (!slotName || slotName === "content") {
            this.minContentWidth = e.detail.minWidth;
        }
        else if (slotName === "actions") {
            this.minActionsWidth = e.detail.minWidth;
        }
    }
    onTitleClick() {
        this.fireEvent("_toggle-title");
    }
    _onfocusout() {
        this.focused = false;
    }
    _onfocusin() {
        this.focused = true;
    }
    _onkeydown(e) {
        if (isEnter(e) || isSpace(e)) {
            e.preventDefault();
            this.fireEvent("_toggle-title");
        }
    }
};
__decorate([
    property({ type: Boolean })
], DynamicPageTitle.prototype, "snapped", void 0);
__decorate([
    property({ type: Boolean })
], DynamicPageTitle.prototype, "mobileNavigationActions", void 0);
__decorate([
    property({ type: Boolean })
], DynamicPageTitle.prototype, "focused", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPageTitle.prototype, "heading", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPageTitle.prototype, "snappedHeading", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPageTitle.prototype, "expandedHeading", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPageTitle.prototype, "actions", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPageTitle.prototype, "navigationActions", void 0);
__decorate([
    slot({ "default": true, type: HTMLElement })
], DynamicPageTitle.prototype, "content", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPageTitle.prototype, "snappedContent", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPageTitle.prototype, "expandedContent", void 0);
__decorate([
    slot({ type: HTMLElement })
], DynamicPageTitle.prototype, "breadcrumbs", void 0);
DynamicPageTitle = DynamicPageTitle_1 = __decorate([
    customElement({
        tag: "ui5-dynamic-page-title",
        fastNavigation: true,
        renderer: litRender,
        styles: DynamicPageTitleCss,
        template: DynamicPageTitleTemplate,
    })
    /**
     * Event is fired when the title is toggled.
     * @private
     */
    ,
    event("_toggle-title")
], DynamicPageTitle);
DynamicPageTitle.define();
export default DynamicPageTitle;
//# sourceMappingURL=DynamicPageTitle.js.map