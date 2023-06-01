import { ApiReader } from "./ApiReader";
import { StoryArgTypesGenerator } from "./StoryArgTypesGenerator";
import { StoryArgTypesWriter } from "./StoryArgTypesWriter";
import { StoryReader } from "./StoryReader";
import { DataParserProxy } from "./DataParserProxy";
class StorybookApiGenerator {
    constructor(apiReader = new ApiReader(), storyReader = new StoryReader(), storyArgTypesGenerator = new StoryArgTypesGenerator(), storyArgTypesWriter = new StoryArgTypesWriter(), dataParserProxy = new DataParserProxy()) {
        this.apiReader = apiReader;
        this.storyReader = storyReader;
        this.storyArgTypesGenerator = storyArgTypesGenerator;
        this.storyArgTypesWriter = storyArgTypesWriter;
        this.dataParserProxy = dataParserProxy;
    }
    async generate(apiJsonFiles, storiesFiles, directory) {
        await this.apiReader.readApiFiles(apiJsonFiles);
        await this.storyReader.readStories(storiesFiles);
        const stories = this.storyReader.getStories();
        const parsedData = this.dataParserProxy.parse(this.apiReader, stories);
        this.storyArgTypesGenerator.generateArgTypes(parsedData, this.apiReader);
        await this.storyArgTypesWriter.writeArgTypes(directory, this.apiReader, this.storyReader, this.storyArgTypesGenerator);
    }
}
export { StorybookApiGenerator };
//# sourceMappingURL=StorybookApiGenerator.js.map