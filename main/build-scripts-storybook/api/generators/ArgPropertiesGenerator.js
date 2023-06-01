export class ArgPropertiesGenerator {
    isMatch(api) {
        return api.fieldName === "properties";
    }
    generate(api, apiReader) {
        let result = {};
        if (api.visibility === "public") {
            const typeEnum = apiReader.findApi(api.type);
            if (api.readonly) {
                result = {
                    control: {
                        type: false,
                    },
                };
            }
            else if (Array.isArray(typeEnum?.properties)) {
                result = {
                    control: "select",
                    options: typeEnum.properties.map((a) => a.type),
                };
            }
        }
        return result;
    }
}
//# sourceMappingURL=ArgPropertiesGenerator.js.map