import type { IComponentMethod, IComponentParsedAPI } from "../ApiReader";
import { IGenerator } from "./ArgGenerator";
import { InputType as IArgType } from "@storybook/types";
export declare class ArgMethodsGenerator implements IGenerator {
    isMatch(api: IComponentParsedAPI): boolean;
    generate(api: IComponentMethod): IArgType;
}
