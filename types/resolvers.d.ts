/// <reference types="jquery" />
export declare class BaseResolver {
    protected results: any[];
    protected _settings: any;
    constructor(options: any);
    protected getDefaults(): {};
    protected getResults(limit?: number, start?: number, end?: number): any[];
    search(q: string, cbk: (results: any[]) => void): void;
}
export declare class AjaxResolver extends BaseResolver {
    protected jqXHR: JQueryXHR;
    protected requestTID: number;
    constructor(options: any);
    protected getDefaults(): {};
    search(q: string, cbk: (results: any[]) => void): void;
}
