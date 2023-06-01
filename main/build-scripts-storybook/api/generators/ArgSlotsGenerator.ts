import type { IComponentSlot } from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";
import { IGenerator } from "./ArgGenerator";

export class ArgSlotsGenerator implements IGenerator {
    public isMatch(api: IComponentSlot): boolean {
        return api.fieldName === "slots";
    }

    public generate(api: IComponentSlot): IArgType {
        return {
            table: {
                type: {
                    summary: "Slot",
                },
                defaultValue: {
                    summary: api.name,
                },
            },
        }
    }
}
