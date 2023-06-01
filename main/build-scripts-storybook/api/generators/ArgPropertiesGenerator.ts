import type { IApiReader, IComponentParsedAPI, IComponentProperty } from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";
import { IGenerator } from "./ArgGenerator";

export class ArgPropertiesGenerator implements IGenerator {

    public isMatch(api: IComponentParsedAPI): boolean {
        return api.fieldName === "properties";
    }

    public generate(api: IComponentProperty, apiReader: IApiReader): IArgType {
        let result = {};
        if (api.visibility === "public") {
            const typeEnum = apiReader.findApi(api.type);
            if (api.readonly) {
                result = {
                    control: {
                        type: false,
                    },
                };
            } else if (Array.isArray(typeEnum?.properties)) {
                result = {
                    control: "select",
                    options: typeEnum.properties.map((a) => a.type),
                };
            }
        }

        return result;
    }
}
