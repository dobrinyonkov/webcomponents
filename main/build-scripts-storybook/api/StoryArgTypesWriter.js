import fs from "fs/promises";
import path from "path";
export class StoryArgTypesWriter {
    writeArgTypes(directory, apiReader, storyReader, storyArgTypesGenerator) {
        const packages = storyReader.getPackages();
        const promises = Object.keys(packages).map(async (packageName) => {
            const stories = packages[packageName];
            for (const story of stories) {
                // write the argTypes to the story file
                const storyPath = path.join(directory, packageName, story, StoryArgTypesWriter.STORIES_WRITE_FILE_NAME);
                const content = await this.generateFile(apiReader, story, storyArgTypesGenerator);
                this.writeFile(storyPath, content, story);
            }
        });
        return Promise.all(promises);
    }
    generateFile(apiReader, story, storyArgTypesGenerator) {
        if (!storyArgTypesGenerator.getArgTypes().get(story)) {
            throw new Error(`No argTypes found for story ${story}`);
        }
        const properties = storyArgTypesGenerator.getProperties(story);
        const methods = storyArgTypesGenerator.getMethods(story);
        const slots = storyArgTypesGenerator.getSlots(story);
        const slotNames = Array.from(slots.keys());
        const info = JSON.stringify(apiReader.findInfo(story), null, 4);
        const args = JSON.stringify({
            ...Object.fromEntries(properties),
            ...Object.fromEntries(methods),
        }, null, 4);
        const content = `export default ${args};
export const componentInfo = ${info};
export type StoryArgsSlots = {
${slotNames.map((slotName) => `${slotName}: string;`).join("\n	")}
}`;
        return content;
    }
    async writeFile(path, data, story) {
        try {
            await fs.writeFile(path, data);
            console.log(`File ${story}/argType.ts written successfully`);
        }
        catch (err) {
            console.error(err);
        }
    }
}
StoryArgTypesWriter.STORIES_WRITE_FILE_NAME = "argTypes.ts";
//# sourceMappingURL=StoryArgTypesWriter.js.map