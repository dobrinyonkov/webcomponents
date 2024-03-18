import argTypes from "./argTypes.js";
import DynamicPageTitleTemplate from "../DynamicPageTitleTemplate.js";
export default {
    title: "Fiori/Dynamic Page/ Dynamic Page Title",
    component: "DynamicPageTitle",
    argTypes,
};
const Template = (args) => {
    return DynamicPageTitleTemplate;
};
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
//# sourceMappingURL=DynamicPageTitle.stories.js.map