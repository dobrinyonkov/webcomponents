export interface IStoryReader {
    readStories(directories: string[]): Promise<void[]>;
    getStories(): string[];
    getPackages(): Record<string, string[]>;
}
export declare class StoryReader implements IStoryReader {
    private stories;
    constructor();
    readStories(directories: string[]): Promise<void[]>;
    getStories(): string[];
    getPackages(): Record<string, string[]>;
}
