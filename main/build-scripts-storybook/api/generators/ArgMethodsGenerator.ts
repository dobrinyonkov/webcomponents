import type { IComponentMethod, IComponentParsedAPI } from "../ApiReader";
import { IGenerator } from "./ArgGenerator";
import { InputType as IArgType } from "@storybook/types";

export class ArgMethodsGenerator implements IGenerator {
    isMatch(api: IComponentParsedAPI): boolean {
        return api.fieldName === "methods";
    }

    public generate(api: IComponentMethod): IArgType {
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
