export class ArgEventsGenerator {
    constructor() {
        this.fieldName = "events";
    }
    parseData(events) {
        const result = {};
        if (!events) {
            return result;
        }
        events.forEach((event) => {
            if (event.visibility === "public") {
                result[event.name] = {
                    description: event.description,
                    table: {
                        category: this.fieldName,
                    },
                };
            }
        });
        return result;
    }
}
//# sourceMappingURL=ArgEventsGenerator.js.map