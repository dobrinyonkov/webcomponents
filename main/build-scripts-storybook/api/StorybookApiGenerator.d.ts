import { ApiReader } from "./ApiReader";
import { StoryArgTypesGenerator } from "./StoryArgTypesGenerator";
import { StoryArgTypesWriter } from "./StoryArgTypesWriter";
import { StoryReader } from "./StoryReader";
import { DataParserProxy } from "./DataParserProxy";
interface IStorybookApiGenerator {
    generate(apiJsonFiles: string[], storiesFiles: string[], directory: string): Promise<void>;
}
declare class StorybookApiGenerator implements IStorybookApiGenerator {
    private apiReader;
    private storyReader;
    private storyArgTypesGenerator;
    private storyArgTypesWriter;
    private dataParserProxy;
    constructor(apiReader?: ApiReader, storyReader?: StoryReader, storyArgTypesGenerator?: StoryArgTypesGenerator, storyArgTypesWriter?: StoryArgTypesWriter, dataParserProxy?: DataParserProxy);
    generate(apiJsonFiles: string[], storiesFiles: string[], directory: string): Promise<void>;
}
export { StorybookApiGenerator };
