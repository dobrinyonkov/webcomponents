import type { IComponentMethod } from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";
export declare class ArgEventsGenerator {
    fieldName: string;
    protected parseData(events: IComponentMethod[]): Record<string, IArgType>;
}
