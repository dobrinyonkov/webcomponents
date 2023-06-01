import type { IApiReader, IComponentParsedAPI, IComponentProperty } from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";
import { IGenerator } from "./ArgGenerator";
export declare class ArgPropertiesGenerator implements IGenerator {
    isMatch(api: IComponentParsedAPI): boolean;
    generate(api: IComponentProperty, apiReader: IApiReader): IArgType;
}
