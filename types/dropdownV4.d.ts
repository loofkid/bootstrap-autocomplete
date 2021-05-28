/// <reference types="jquery" />
/// <reference types="bootstrap" />
export declare class DropdownV4 {
    protected _$el: JQuery;
    protected _dd: JQuery;
    protected initialized: boolean;
    protected shown: boolean;
    protected items: any[];
    protected formatItem: (item: any) => any;
    protected searchText: string;
    protected autoSelect: boolean;
    protected mouseover: boolean;
    protected ddMouseover: boolean;
    protected noResultsText: string;
    constructor(e: JQuery, formatItemCbk: (item: any) => any, autoSelect: boolean, noResultsText: string);
    protected getElPos(): any;
    protected init(): void;
    private checkInitialized;
    get isMouseOver(): boolean;
    get isDdMouseOver(): boolean;
    get haveResults(): boolean;
    focusNextItem(reversed?: boolean): void;
    focusPreviousItem(): void;
    selectFocusItem(): void;
    get isItemFocused(): boolean;
    show(): void;
    isShown(): boolean;
    hide(): void;
    updateItems(items: any[], searchText: string): void;
    private showMatchedText;
    protected refreshItemList(): void;
    protected itemSelectedLaunchEvent(item: any): void;
}
