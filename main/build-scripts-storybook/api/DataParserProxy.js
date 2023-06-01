const EXCLUDE_LIST = [
    "effectiveDir",
    "isUI5Element",
    "attachInvalidate",
    "define",
    "detachInvalidate",
    "fireEvent",
    "focus",
    "getDomRef",
    "getFocusDomRef",
    "getFocusDomRefAsync",
    "getMetadata",
    "getSlottedNodes",
    "getUniqueDependencies",
    "onAfterRendering",
    "onBeforeRendering",
    "onEnterDOM",
    "onExitDOM",
    "onInvalidation",
    "getStaticAreaItemDomRef",
];
const INCLUDE_API_LIST = [
    "properties",
    "slots",
    "methods",
    "events",
];
export class DataParserProxy {
    parse(apiReader, stories) {
        let parsedStoriesData = new Map();
        stories.forEach((storyName) => {
            let parsed = [];
            const data = apiReader.findApi(storyName);
            if (data) {
                INCLUDE_API_LIST.forEach((fieldName) => {
                    const fieldData = data[fieldName];
                    if (Array.isArray(fieldData)) {
                        parsed = [...parsed, ...fieldData
                                .filter((item) => !EXCLUDE_LIST.includes(item.name) && item.visibility === "public")
                                .map((item) => ({ ...item, fieldName }))];
                    }
                });
                if (data.extends) {
                    const parentData = this.parse(apiReader, [data.extends]);
                    parsed = [...parsed, ...parentData.get(data.extends) || []];
                }
            }
            parsedStoriesData.set(storyName, parsed);
        });
        return parsedStoriesData;
    }
}
//# sourceMappingURL=DataParserProxy.js.map