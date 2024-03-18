import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type { ResizeObserverCallback } from "@ui5/webcomponents-base/dist/delegate/ResizeHandler.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import DynamicPageHeader from "./DynamicPageHeader.js";
import DynamicPageTitle from "./DynamicPageTitle.js";
import DynamicPageHeaderActions from "./DynamicPageHeaderActions.js";
/**
 * @class
 *
 * <h3>Overview</h3>
 *
 * A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.
 *
 * The component consist of several components:
 *
 * <ul><li><code>DynamicPageTitle</code> consists of a heading
 * on the left side, content in the middle, and actions on the right. The displayed
 * content changes based on the current mode of the DynamicPageHeader.</li>
 * <li><code>DynamicPageHeader</code> is a generic container, which
 * can contain a single layout component. The header works in two modes - expanded and snapped and its
 * behavior can be adjusted with the help of different properties.</li>
 * <li><code>Content area</code> is a generic container, which can have a single UI5 layout.</li>
 * <li><code>Footer</code> is positioned at the bottom with a small offset and used for additional
 * actions, the footer floats above the content.</li></ul>
 *
 * <h3>Usage</h3>
 *
 * Use the <code>DynamicPage</code> if you need to have a title, that is always visible
 * and a header, that has configurable Expanding/Snapping functionality.
 * If you don't need the Expanding/Snapping functionality it is better to use the
 * <code>ui5-page</code> as a lighter component.
 *
 * The app can add to the <code>default</code> slot of the ui5-dynamic-page either content that is designed to fit its container (e.g. has 100% height),
 * or content with own height that may overflow its container. In the second case the <code>DynamicPage</code> will show a scrollbar that allows the user
 * scroll through the content.
 *
 * <ul><b>Notes:</b>
 * <li>Snapping of the <code>DynamicPageTitle</code> is not supported in the following case:
 * When the <code>DynamicPage</code> has a scroll bar, the component usually scrolls to the snapping point - the point,
 * where the <code>DynamicPageHeader</code> is scrolled out completely.
 * However, when there is a scroll bar, but not enough content to reach the snapping point,
 * the snapping is not possible using scrolling.</li>
 * </ul>
 *
 * <h3>Responsive Behavior</h3>
 *
 * Dynamic page web component implements the resposive paddings design.
 *
 * <h3>Keyboard Handling</h3>
 *
 * <h4>Basic Navigation</h4>
 * <ul>
 * <li>[SPACE, ENTER, RETURN] - If focus is on a button inside DynamicPageTitle its action is being triggered, once activated.
 * If focus is on the snap header button (arrow button), or on the header itself, once activated, it triggers the associated action (such as snap/expand the header).
 * If focus is on pin button (the button with pin icon on the bottom of the header), once activated, it triggers the associated action (pinning of the header). </li>
 * </ul>
 *
 * <h4>Fast Navigation</h4>
 * <ul>
 * <li>This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up</code>.
 * In order to use this functionality, you need to import the following module:
 * <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code></li>
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents-fiori/dist/DynamicPage.js";</code>
 *
 * @constructor
 * @extends UI5Element
 * @since 1.23.0
 * @public
 */
declare class DynamicPage extends UI5Element {
    /**
     * Defines if the header is snapped.
     *
     * @default false
     * @public
     */
    headerSnapped: boolean;
    /**
     * Defines if the header is pinned.
     *
     * @default false
     * @public
     */
    headerPinned: boolean;
    /**
     * Defines if the footer is shown.
     *
     * @default false
     * @public
     */
    showFooter: boolean;
    /**
     * Defines the current media query size.
     *
     * @private
     */
    mediaRange: string;
    /**
     * Defines the content of the Dynamic Page.
     *
     * @public
     */
    content: HTMLElement[];
    /**
     * Defines the title HTML Element.
     *
     * @public
     */
    titleArea: Array<DynamicPageTitle>;
    /**
     * Defines the header HTML Element.
     *
     * @public
     */
    headerArea: Array<DynamicPageHeader>;
    /**
     * Defines the footer HTML Element.
     *
     * @public
     */
    footerArea: HTMLElement[];
    static i18nBundle: I18nBundle;
    skipSnapOnScroll: boolean;
    showHeaderInStickArea: boolean;
    _updateMediaRange: ResizeObserverCallback;
    constructor();
    static onDefine(): Promise<void>;
    onEnterDOM(): void;
    onExitDOM(): void;
    onBeforeRendering(): void;
    get dynamicPageTitle(): DynamicPageTitle | null;
    get dynamicPageHeader(): DynamicPageHeader | null;
    get scrollContainer(): HTMLElement | null;
    get headerActions(): DynamicPageHeaderActions | null;
    get actionsInTitle(): boolean;
    get headerInTitle(): boolean;
    get headerInContent(): boolean;
    get _headerLabel(): string;
    get _headerExpanded(): boolean;
    get _accAttributesForHeaderActions(): {
        controls: string;
    };
    snapOnScroll(): void;
    snapTitleByScroll(): void;
    onExpandClick(): Promise<void>;
    onPinClick(): Promise<void>;
    onToggleTitle(): Promise<void>;
    _toggleHeader(): void;
    updateMediaRange(): void;
}
export default DynamicPage;
