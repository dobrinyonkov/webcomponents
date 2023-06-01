import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import argTypes, { componentInfo } from "./argTypes.js";
import ToastPlacement from "@ui5/webcomponents/dist/types/ToastPlacement.js";
import { DocsPage } from "../../../.storybook/docs";
const component = "ui5-toast";
export default {
    title: "Main/Toast",
    component,
    parameters: {
        docs: {
            page: DocsPage({ ...componentInfo, component })
        },
    },
    argTypes,
};
let index = 0;
const Template = (args) => {
    return html `
<ui5-button id="btn-${++index}">Show Toast</ui5-button>
<ui5-toast
	id="toast-${index}"
	duration="${ifDefined(args.duration)}"
	placement="${ifDefined(args.placement)}"
	>${unsafeHTML(args.default)}</ui5-toast>
<script>
	var toastOpener${index} = document.getElementById("btn-${index}");
	var toast${index} = document.getElementById("toast-${index}"); 

	toastOpener${index}.addEventListener("click", () => {
		toast${index}.show();
	});
</script>`;
};
export const Basic = Template.bind({});
Basic.args = {
    default: "Basic Toast",
};
export const ToastDuration = Template.bind({});
ToastDuration.args = {
    default: "Long Toast",
    duration: 4500,
};
export const ToastPlacements = Template.bind({});
ToastPlacements.args = {
    default: "Middle Center Toast",
    placement: ToastPlacement.MiddleCenter,
};
//# sourceMappingURL=Toast.stories.js.map