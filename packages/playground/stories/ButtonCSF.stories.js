import { html } from 'lit-html';

import "../../main/dist/Button.js";

export default {
    title: "CSF/Button",
    component: "ui5-button",
    argsTypes: {
        disabled: {
            description:
                "Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",
            control: "boolean",
            table: { defaultValue: { summary: "false" } },
        },
        text: {
            description:
                "Defines the text of the component. <br /><br /> <b>Note:</b> Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.",
            control: "text",
        },
    }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => html`<ui5-button ?disabled=${args.disabled}>${args.default}</ui5-button>`;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { default: 'Button', disabled: false };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, default: '😄👍😍💯' };

export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, default: '📚📕📈🤓', disabled: true };