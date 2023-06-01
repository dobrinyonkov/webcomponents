import fs from "fs/promises";
import path from "path";
export class StoryReader {
    constructor() {
        this.stories = {};
    }
    async readStories(directories) {
        if (!directories || !directories.length) {
            throw new Error("Directories are required");
        }
        const promises = directories.map(async (directory) => {
            const storiesFolders = await fs.readdir(directory);
            const packageName = directory.split(path.sep).at(-1);
            if (!packageName) {
                throw new Error("Package name is required");
            }
            this.stories[packageName] = storiesFolders;
        });
        return Promise.all(promises);
    }
    getStories() {
        return Object.values(this.stories).flat();
    }
    getPackages() {
        return this.stories;
    }
}
//# sourceMappingURL=StoryReader.js.map