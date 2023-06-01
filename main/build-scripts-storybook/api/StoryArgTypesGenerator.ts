import type { IApiReader, IComponentParsedAPI } from "./ApiReader";
import type { IGenerator } from "./generators/ArgGenerator";
import type { InputType as IArgType } from "@storybook/types";

import { ArgPropertiesGenerator } from "./generators/ArgPropertiesGenerator";
import { ArgSlotsGenerator } from "./generators/ArgSlotsGenerator";
import { ArgMethodsGenerator } from "./generators/ArgMethodsGenerator";

export interface IStoryArgTypesGenerator {
    generateArgTypes(parsedApi: Map<string, IComponentParsedAPI[]>, apiReader: IApiReader): void;
    getArgTypes(): Map<string, Map<string, Map<string, IArgType>>>;
    getSlots(componentName: string): Map<string, IArgType>;
    getProperties(componentName: string): Map<string, IArgType>;
    getMethods(componentName: string): Map<string, IArgType>;
}

export class StoryArgTypesGenerator implements IStoryArgTypesGenerator {
    private argTypes: Map<string, Map<string, Map<string, IArgType>>>;
    private generators: IGenerator[];

    constructor(
        generators: IGenerator[] = [
            new ArgSlotsGenerator(),
            new ArgPropertiesGenerator(),
            new ArgMethodsGenerator(),
        ]
    ) {
        this.generators = generators;
        this.argTypes = new Map();
    }

     private generate(parsedApi: IComponentParsedAPI[], apiReader: IApiReader): Map<string, Map<string, IArgType>> {
        const result: Map<string, Map<string, IArgType>> = new Map();

        for (const api of parsedApi) {
            if (!result.has(api.fieldName)) {
                result.set(api.fieldName, new Map());
            }

            for (const generator of this.generators) {
                if (generator.isMatch(api)) {
                    const generated = generator.generate(api, apiReader);
                    if (generated && Object.keys(generated).length > 0) {
                        result.get(api.fieldName)?.set(api.name, generated);
                    }
                }
            }
        }

        return result;
    }

    public generateArgTypes(parsedApi: Map<string, IComponentParsedAPI[]>, apiReader: IApiReader) {
        parsedApi.forEach((value, key) => {
            this.argTypes.set(key, this.generate(value, apiReader));
        });
    }

    public getArgTypes(): Map<string, Map<string, Map<string, IArgType>>> {
        return this.argTypes;
    }

    public getSlots(componentName: string): Map<string, IArgType> {
        const args = this.argTypes.get(componentName)?.get("slots");

        return args ?? new Map();
    }

    public getProperties(componentName: string): Map<string, IArgType> {
        const args = this.argTypes.get(componentName)?.get("properties");

        return args ?? new Map();
    }

    public getMethods(componentName: string): Map<string, IArgType> {
        const args = this.argTypes.get(componentName)?.get("methods");

        return args ?? new Map();
    }
}
