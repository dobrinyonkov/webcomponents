import { IApiReader, IComponentParsedAPI } from "./ApiReader";
export interface IDataParser {
    parse(apiReader: IApiReader, stories: string[]): Map<string, IComponentParsedAPI[]>;
}
export declare class DataParserProxy implements IDataParser {
    parse(apiReader: IApiReader, stories: string[]): Map<string, IComponentParsedAPI[]>;
}
