export interface IComponentAPI {
    name: string;
    description: string;
    since?: string;
    visibility: string;
    deprecated?: boolean;
}
export interface IComponentParsedAPI extends IComponentAPI {
    fieldName: string;
}
export interface IComponentUI5CustomData {
    parameters?: Record<string, any>;
    returnValue: Record<string, any>;
}
export interface IComponentProperty extends IComponentParsedAPI {
    type: string;
    defaultValue: string;
    readonly: boolean;
}
interface IComponentEvent extends IComponentParsedAPI {
    parameters: Record<string, any>;
}
export interface IComponentMethod extends IComponentParsedAPI {
    parameters: Record<string, any>;
    returnValue: Record<string, any>;
    readonly: boolean;
    type: string;
}
export interface IComponentSlot extends IComponentParsedAPI {
    type: string;
}
export interface IComponentData {
    kind: string;
    name: string;
    basename: string;
    tagname: string;
    resource: string;
    module: string;
    static: boolean;
    visibility: string;
    since: string;
    extends: string;
    implements: string[];
    description: string;
    constructor: {
        visibility: string;
    };
    properties: IComponentProperty[];
    events: IComponentEvent[];
    methods: IComponentMethod[];
    slots: IComponentSlot[];
}
interface IComponentInfo {
    package: string;
    since: string;
}
interface IApiJson {
    symbols: IComponentData[];
}
export interface IApiReader {
    getApi(): Record<string, any>;
    findApi(componentName: string): IComponentData;
    findInfo(componentName: string): IComponentInfo;
    readApiFiles(apiJsonFiles: string[]): Promise<void[]>;
}
export declare class ApiReader implements IApiReader {
    constructor();
    private api;
    getApi(): Record<string, IApiJson>;
    readApiFiles(apiJsonFiles: string[]): Promise<void[]>;
    findApi(componentName: string): IComponentData;
    findInfo(componentName: string): IComponentInfo;
}
export {};
