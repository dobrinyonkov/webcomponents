import { ArgPropertiesGenerator } from "./generators/ArgPropertiesGenerator";
import { ArgSlotsGenerator } from "./generators/ArgSlotsGenerator";
import { ArgMethodsGenerator } from "./generators/ArgMethodsGenerator";
export class StoryArgTypesGenerator {
    constructor(generators = [
        new ArgSlotsGenerator(),
        new ArgPropertiesGenerator(),
        new ArgMethodsGenerator(),
    ]) {
        this.generators = generators;
        this.argTypes = new Map();
    }
    generate(parsedApi, apiReader) {
        const result = new Map();
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
    generateArgTypes(parsedApi, apiReader) {
        parsedApi.forEach((value, key) => {
            this.argTypes.set(key, this.generate(value, apiReader));
        });
    }
    getArgTypes() {
        return this.argTypes;
    }
    getSlots(componentName) {
        const args = this.argTypes.get(componentName)?.get("slots");
        return args ?? new Map();
    }
    getProperties(componentName) {
        const args = this.argTypes.get(componentName)?.get("properties");
        return args ?? new Map();
    }
    getMethods(componentName) {
        const args = this.argTypes.get(componentName)?.get("methods");
        return args ?? new Map();
    }
}
//# sourceMappingURL=StoryArgTypesGenerator.js.map