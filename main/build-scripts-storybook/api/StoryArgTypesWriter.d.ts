import type { IApiReader } from "./ApiReader";
import type { IStoryArgTypesGenerator } from "./StoryArgTypesGenerator";
import type { IStoryReader } from "./StoryReader";
export interface IStoryArgTypesWriter {
    writeArgTypes(directory: string, apiReader: IApiReader, storyReader: IStoryReader, storyArgTypesGenerator: IStoryArgTypesGenerator): Promise<void[]>;
}
export declare class StoryArgTypesWriter implements IStoryArgTypesWriter {
    private static readonly STORIES_WRITE_FILE_NAME;
    writeArgTypes(directory: string, apiReader: IApiReader, storyReader: IStoryReader, storyArgTypesGenerator: IStoryArgTypesGenerator): Promise<void[]>;
    private generateFile;
    writeFile(path: string, data: string, story: string): Promise<void>;
}
