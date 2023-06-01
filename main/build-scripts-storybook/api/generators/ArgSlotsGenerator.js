export class ArgSlotsGenerator {
    isMatch(api) {
        return api.fieldName === "slots";
    }
    generate(api) {
        return {
            table: {
                type: {
                    summary: "Slot",
                },
                defaultValue: {
                    summary: api.name,
                },
            },
        };
    }
}
//# sourceMappingURL=ArgSlotsGenerator.js.map