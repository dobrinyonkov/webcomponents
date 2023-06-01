import type { IComponentMethod } from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";

export class ArgEventsGenerator {
    public fieldName = "events";

    protected parseData(events: IComponentMethod[]): Record<string, IArgType> {
        const result: Record<string, any> = {};

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
