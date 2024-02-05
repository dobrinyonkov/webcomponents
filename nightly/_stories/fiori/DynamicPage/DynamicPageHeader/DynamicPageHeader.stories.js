import argTypes from "./argTypes.js";
import DynamicPageHeaderTemplate from "../DynamicPageHeaderTemplate.js";
export default {
    title: "Fiori/Dynamic Page/ Dynamic Page Header",
    component: "DynamicPageHeader",
    argTypes,
};
const Template = (args) => {
    return DynamicPageHeaderTemplate;
};
export const Basic = Template.bind({});
Basic.tags = ["_hidden_"];
//# sourceMappingURL=DynamicPageHeader.stories.js.map