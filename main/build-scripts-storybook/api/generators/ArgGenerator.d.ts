import type { IApiReader, IComponentParsedAPI } from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";
export interface IGenerator {
    isMatch(api: IComponentParsedAPI): boolean;
    generate(api: IComponentParsedAPI, apiReader?: IApiReader): IArgType;
}
