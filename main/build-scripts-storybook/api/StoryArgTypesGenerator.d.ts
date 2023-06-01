import type { IApiReader, IComponentParsedAPI } from "./ApiReader";
import type { IGenerator } from "./generators/ArgGenerator";
import type { InputType as IArgType } from "@storybook/types";
export interface IStoryArgTypesGenerator {
    generateArgTypes(parsedApi: Map<string, IComponentParsedAPI[]>, apiReader: IApiReader): void;
    getArgTypes(): Map<string, Map<string, Map<string, IArgType>>>;
    getSlots(componentName: string): Map<string, IArgType>;
    getProperties(componentName: string): Map<string, IArgType>;
    getMethods(componentName: string): Map<string, IArgType>;
}
export declare class StoryArgTypesGenerator implements IStoryArgTypesGenerator {
    private argTypes;
    private generators;
    constructor(generators?: IGenerator[]);
    private generate;
    generateArgTypes(parsedApi: Map<string, IComponentParsedAPI[]>, apiReader: IApiReader): void;
    getArgTypes(): Map<string, Map<string, Map<string, IArgType>>>;
    getSlots(componentName: string): Map<string, IArgType>;
    getProperties(componentName: string): Map<string, IArgType>;
    getMethods(componentName: string): Map<string, IArgType>;
}
