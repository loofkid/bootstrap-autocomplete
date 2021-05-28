/// <reference types="jquery" />
/// <reference types="bootstrap" />
export interface AutoCompleteSettings {
    resolver: string;
    resolverSettings: any;
    minLength: number;
    valueKey: string;
    formatResult: (item: any) => {};
    autoSelect: boolean;
    noResultsText: string;
    bootstrapVersion: string;
    preventEnter: boolean;
    events: {
        typed: (newValue: string, el: JQuery<HTMLElement>) => string;
        searchPre: (searchText: string, el: JQuery<HTMLElement>) => string;
        search: (searchText: string, cbk: (results: any) => void, el: JQuery<HTMLElement>) => void;
        searchPost: (results: any, el: JQuery<HTMLElement>) => any;
        select: () => void;
        focus: () => void;
    };
}
export declare class AutoComplete {
    static NAME: string;
    private _el;
    private _$el;
    private _dd;
    private _searchText;
    private _selectedItem;
    private _defaultValue;
    private _defaultText;
    private _isSelectElement;
    private _selectHiddenField;
    private _settings;
    private resolver;
    constructor(element: HTMLElement, options?: {});
    private manageInlineDataAttributes;
    private getSettings;
    private getBootstrapVersion;
    private convertSelectToText;
    private init;
    private bindDefaultEventListeners;
    private handlerTyped;
    private handlerPreSearch;
    private handlerDoSearch;
    private postSearchCallback;
    private handlerStartShow;
    protected itemSelectedDefaultHandler(item: any): void;
    private defaultFormatResult;
    manageAPI(APICmd: any, params: any): void;
}
