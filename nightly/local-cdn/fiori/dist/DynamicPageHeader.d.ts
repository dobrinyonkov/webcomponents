import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
/**
 * @class
 *
 * Header of the DynamicPage.
 *
 * <h3>Overview</h3>
 *
 * The DynamicPageHeader <code>ui5-dynamic-page-header</code> is part of the DynamicPage family
 * and is used to serve as header of the <code>DynamicPage</code>.
 *
 * <h3>Usage</h3>
 *
 * The <code>DynamicPageHeader</code> can hold any layout control and has two states - expanded
 * and collapsed (snapped). The switching between these states happens when:
 *
 * <ul><li>the user scrolls below its bottom margin</li>
 * <li>the user clicks on the <code>DynamicPageTitle</code></li>
 * <li>through the <code>DynamicPage</code> property <code>headerSnapped</code></li></ul>
 *
 * <h3>Responsive Behavior</h3>
 *
 * The responsive behavior of the <code>DynamicPageHeader</code> depends on the behavior of the
 * content that is displayed.
 *
 *
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.23.0
 */
declare class DynamicPageHeader extends UI5Element {
    /**
     * Defines the content of the Dynamic Page Header.
     *
     * @public
     */
    content: HTMLElement[];
}
export default DynamicPageHeader;
