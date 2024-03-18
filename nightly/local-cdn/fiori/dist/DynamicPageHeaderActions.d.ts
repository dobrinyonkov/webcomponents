import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Button from "@ui5/webcomponents/dist/Button.js";
import ToggleButton from "@ui5/webcomponents/dist/ToggleButton.js";
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>DynamicPageHeaderActions</code> component is part of the <code>DynamicPage</code>
 * family and is holding the action buttons behind the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>.
 *
 * The "pin" action is used to attach the header to a certain state (expanded/collapsed).
 * The expand/collapse action is used to switch between the two states of <code>DynamicPageHeader</code>.
 *
 *
 * @constructor
 * @extends UI5Element
 * @private
 * @since 1.23.0
 */
declare class DynamicPageHeaderActions extends UI5Element {
    /**
     * Defines whether the header is pinned.
     *
     * @protected
     * @default false
     */
    pinned: boolean;
    /**
     * Defines whether the header is snapped.
     *
     * @protected
     * @default false
     */
    snapped: boolean;
    /**
     * Contains attributes to be added to HTML to gain accessibility.
     *
     * @protected
     * @default {}
     */
    accessibilityAttributes: {
        controls: string;
    };
    static i18nBundle: I18nBundle;
    static onDefine(): Promise<void>;
    get arrowButtonIcon(): "slim-arrow-down" | "slim-arrow-up";
    get pinButtonIcon(): "pushpin-on" | "pushpin-off";
    get expandButton(): Button | null;
    get pinButton(): ToggleButton | null;
    get pinLabel(): string;
    get expandLabel(): string;
    focusExpandButton(): void;
    focusPinButton(): void;
    onExpandClick(): void;
    onPinClick(): void;
}
export default DynamicPageHeaderActions;
