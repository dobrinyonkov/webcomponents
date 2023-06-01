import type { IComponentSlot } from "../ApiReader";
import { InputType as IArgType } from "@storybook/types";
import { IGenerator } from "./ArgGenerator";
export declare class ArgSlotsGenerator implements IGenerator {
    isMatch(api: IComponentSlot): boolean;
    generate(api: IComponentSlot): IArgType;
}
