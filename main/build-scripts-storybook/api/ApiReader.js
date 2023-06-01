import fs from "fs/promises";
import path from "path";
export class ApiReader {
    constructor() {
        this.api = {};
    }
    getApi() {
        return this.api;
    }
    async readApiFiles(apiJsonFiles) {
        if (!apiJsonFiles || !apiJsonFiles.length) {
            throw new Error("Api json files are required");
        }
        const promises = apiJsonFiles.map(async (apiJsonFile) => {
            const jsonData = await fs.readFile(apiJsonFile, "utf8");
            const apiJson = JSON.parse(jsonData);
            // get the package name from the path
            // ../**/**/main/dist/api.json => main at index -3
            const packageName = apiJsonFile.split(path.sep).at(-3);
            if (packageName) {
                this.api[packageName] = apiJson;
            }
        });
        return Promise.all(promises);
    }
    findApi(componentName) {
        if (!componentName) {
            throw new Error("Component name is required");
        }
        if (Object.keys(this.api).length === 0) {
            throw new Error("No api files found");
        }
        let componentData = {};
        for (const packageName in this.api) {
            const packageData = this.api[packageName];
            const symbols = packageData.symbols;
            const index = symbols.findIndex((s) => s.basename === componentName || s.name === componentName);
            if (index !== -1) {
                componentData = symbols[index];
                break;
            }
        }
        return componentData;
    }
    findInfo(componentName) {
        if (!componentName) {
            throw new Error("Component name is required");
        }
        if (Object.keys(this.api).length === 0) {
            throw new Error("No api files found");
        }
        let componentData = {};
        for (const packageName in this.api) {
            const packageData = this.api[packageName];
            const symbols = packageData.symbols;
            const index = symbols.findIndex((s) => s.basename === componentName || s.name === componentName);
            if (index !== -1) {
                componentData = {
                    package: `@ui5/webcomponents${packageName !== "main" ? `-${packageName}` : ""}`,
                    since: symbols[index].since,
                };
                break;
            }
        }
        return componentData;
    }
}
//# sourceMappingURL=ApiReader.js.map