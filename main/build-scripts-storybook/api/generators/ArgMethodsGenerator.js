export class ArgMethodsGenerator {
    isMatch(api) {
        return api.fieldName === "methods";
    }
    generate(api) {
        if (api.visibility === "public") {
            return {
                description: api.description,
                table: {
                    category: api.fieldName,
                },
            };
        }
        return {};
    }
}
//# sourceMappingURL=ArgMethodsGenerator.js.map