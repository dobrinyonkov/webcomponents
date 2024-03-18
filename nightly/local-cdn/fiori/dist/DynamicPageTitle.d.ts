import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type { ResizeObserverCallback } from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import type { ToolbarMinWidthChangeEventDetail } from "@ui5/webcomponents/dist/Toolbar.js";
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
declare class DynamicPageTitle extends UI5Element {
    /**
     * Defines if the title is snapped.
     *
     * @protected
     * @default false
     */
    snapped: boolean;
    /**
     * Defines if the mobileNavigationActions are shown.
     *
     * @private
     */
    mobileNavigationActions: boolean;
    /**
     * Indicates if the elements is on focus
     * @private
     */
    focused: boolean;
    /**
     * Defines the content of the Heading of the Dynamic Page.
     *
     * @public
     */
    heading: HTMLElement[];
    /**
     * Defines the heading that is shown only when the header is snapped.
     *
     * @public
     */
    snappedHeading: HTMLElement[];
    /**
     * Defines the heading that is shown only when the header is expanded.
     *
     * @public
     */
    expandedHeading: HTMLElement[];
    /**
     * Defines the actions in the Dynamic page title.
     *
     * @public
     */
    actions: HTMLElement[];
    /**
     * Defines the navigation actions in the Dynamic page title.
     *
     * @public
     */
    navigationActions: HTMLElement[];
    /**
     * Defines the content of the Dynamic page title.
     *
     * @public
     */
    content: HTMLElement[];
    /**
     * Defines the content of the title that is shown only when the header is snapped.
     *
     * @public
     */
    snappedContent: HTMLElement[];
    /**
     * Defines the content of the title that is shown only when the header is expanded.
     *
     * @public
     */
    expandedContent: HTMLElement[];
    /**
     * Defines the content of the breadcrumbs inside Dynamic Page Title.
     *
     * @public
     */
    breadcrumbs: HTMLElement[];
    static i18nBundle: I18nBundle;
    _handleResize: ResizeObserverCallback;
    minContentWidth?: number;
    minActionsWidth?: number;
    constructor();
    static onDefine(): Promise<void>;
    onEnterDOM(): void;
    onExitDOM(): void;
    onBeforeRendering(): void;
    get styles(): {
        content: {
            "min-width": string;
        };
        actions: {
            "min-width": string;
        };
    };
    get hasContent(): boolean;
    get hasHeading(): boolean;
    get headingSlotName(): "heading" | "expandedHeading" | "snappedHeading";
    get contentSlotName(): "expandedContent" | "snappedContent";
    get _headerExpanded(): boolean;
    get _ariaDescribedbyText(): string;
    get _ariaLabelledBy(): string | undefined;
    prepareLayoutActions(): void;
    handleResize(): void;
    onMinContentWidthChange(e: CustomEvent<ToolbarMinWidthChangeEventDetail>): void;
    onTitleClick(): void;
    _onfocusout(): void;
    _onfocusin(): void;
    _onkeydown(e: KeyboardEvent): void;
}
export default DynamicPageTitle;
