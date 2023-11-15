import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";

// Template
import ScrollContainerTemplate from "./generated/templates/ScrollContainerTemplate.lit.js";

// Styles
import ScrollContainerCss from "./generated/themes/ScrollContainer.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * @constructor
 * @alias sap.ui.webc.main.ScrollContainer
 * @extends sap.ui.webc.base.UI5Element
 * @tagname ui5-scroll-container
 * @public
 */
@customElement({
	tag: "ui5-scroll-container",
	renderer: litRender,
	styles: ScrollContainerCss,
	template: ScrollContainerTemplate,
})

class ScrollContainer extends UI5Element {
	@slot({ "default": true, type: HTMLElement })
	content!: HTMLElement[];

	constructor() {
		super();
	}

	get sections() {
		return this.querySelectorAll("section");
	}

	scrollToSection(sectionIndex: number) {
		const sections = this.querySelectorAll("section");
		const section = sections[sectionIndex];

		section.focus({ preventScroll: true });
		section.scrollIntoView({ behavior: "smooth" });
	}

	_onfocusin(e: FocusEvent) {
		const target = (e.target as HTMLElement).closest("section");

		if (!target) {
			return;
		}

		this.fireEvent("section-change", {
			sectionIndex: Array.from(this.sections).indexOf(target),
		});
	}
}

ScrollContainer.define();

export default ScrollContainer;
