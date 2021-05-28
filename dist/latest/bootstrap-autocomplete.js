/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return /* binding */ main_AutoComplete; });

// CONCATENATED MODULE: C:/Users/kloofbourrow/OneDrive - Brinly-Hardy Company/Documents/source/Repos/bootstrap-autocomplete/src/resolvers.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseResolver = /** @class */ (function () {
    function BaseResolver(options) {
        this._settings = $.extend(true, {}, this.getDefaults(), options);
    }
    BaseResolver.prototype.getDefaults = function () {
        return {};
    };
    BaseResolver.prototype.getResults = function (limit, start, end) {
        return this.results;
    };
    BaseResolver.prototype.search = function (q, cbk) {
        cbk(this.getResults());
    };
    return BaseResolver;
}());

// tslint:disable-next-line: max-classes-per-file
var AjaxResolver = /** @class */ (function (_super) {
    __extends(AjaxResolver, _super);
    function AjaxResolver(options) {
        return _super.call(this, options) || this;
        // console.log('resolver settings', this._settings);
    }
    AjaxResolver.prototype.getDefaults = function () {
        return {
            url: '',
            method: 'get',
            queryKey: 'q',
            extraData: {},
            timeout: undefined,
            requestThrottling: 500
        };
    };
    AjaxResolver.prototype.search = function (q, cbk) {
        var _this = this;
        if (this.jqXHR != null) {
            this.jqXHR.abort();
        }
        var data = {};
        data[this._settings.queryKey] = q;
        $.extend(data, this._settings.extraData);
        // request throttling
        if (this.requestTID) {
            window.clearTimeout(this.requestTID);
        }
        this.requestTID = window.setTimeout(function () {
            _this.jqXHR = $.ajax(_this._settings.url, {
                method: _this._settings.method,
                data: data,
                timeout: _this._settings.timeout
            });
            _this.jqXHR.done(function (result) {
                cbk(result);
            });
            _this.jqXHR.fail(function (err) {
                var _a;
                // console.log(err);
                // this._settings.fail && this._settings.fail(err);
                (_a = _this._settings) === null || _a === void 0 ? void 0 : _a.fail(err);
            });
            _this.jqXHR.always(function () {
                _this.jqXHR = null;
            });
        }, this._settings.requestThrottling);
    };
    return AjaxResolver;
}(BaseResolver));


// CONCATENATED MODULE: C:/Users/kloofbourrow/OneDrive - Brinly-Hardy Company/Documents/source/Repos/bootstrap-autocomplete/src/dropdownV4.ts
/*
 *	Dropdown class. Manages the dropdown drawing
 */
var DropdownV4 = /** @class */ (function () {
    function DropdownV4(e, formatItemCbk, autoSelect, noResultsText) {
        this.initialized = false;
        this.shown = false;
        this.items = [];
        this.ddMouseover = false;
        this._$el = e;
        this.formatItem = formatItemCbk;
        this.autoSelect = autoSelect;
        this.noResultsText = noResultsText;
        // initialize it in lazy mode to deal with glitches like modals
        // this.init();
    }
    DropdownV4.prototype.getElPos = function () {
        var pos = $.extend({}, this._$el.position(), {
            height: this._$el[0].offsetHeight
        });
        return pos;
    };
    DropdownV4.prototype.init = function () {
        var _this = this;
        // Initialize dropdown
        var pos = this.getElPos();
        // create element
        this._dd = $('<div />');
        // add our class and basic dropdown-menu class
        this._dd.addClass('bootstrap-autocomplete dropdown-menu');
        this._dd.insertAfter(this._$el);
        this._dd.css({ top: pos.top + this._$el.outerHeight(), left: pos.left, width: this._$el.outerWidth() });
        // click event on items
        this._dd.on('click', '.dropdown-item', function (evt) {
            // console.log('clicked', evt.currentTarget);
            // console.log($(evt.currentTarget));
            var item = $(evt.currentTarget).data('item');
            _this.itemSelectedLaunchEvent(item);
            // stop default event on mouse click.
            evt.preventDefault();
        });
        this._dd.on('keyup', function (evt) {
            if (_this.shown) {
                switch (evt.which) {
                    case 27:
                        // ESC
                        _this.hide();
                        _this._$el.focus();
                        break;
                }
                return false;
            }
        });
        this._dd.on('mouseenter', function (evt) {
            _this.ddMouseover = true;
        });
        this._dd.on('mouseleave', function (evt) {
            _this.ddMouseover = false;
        });
        this._dd.on('mouseenter', '.dropdown-item', function (evt) {
            if (_this.haveResults) {
                $(evt.currentTarget).closest('div').find('.dropdown-item.active').removeClass('active');
                $(evt.currentTarget).addClass('active');
                _this.mouseover = true;
            }
        });
        this._dd.on('mouseleave', '.dropdown-item', function (evt) {
            _this.mouseover = false;
        });
        this.initialized = true;
    };
    DropdownV4.prototype.checkInitialized = function () {
        // Lazy init
        if (!this.initialized) {
            // if not already initialized
            this.init();
        }
    };
    Object.defineProperty(DropdownV4.prototype, "isMouseOver", {
        get: function () {
            return this.mouseover;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DropdownV4.prototype, "isDdMouseOver", {
        get: function () {
            return this.ddMouseover;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DropdownV4.prototype, "haveResults", {
        get: function () {
            return (this.items.length > 0);
        },
        enumerable: false,
        configurable: true
    });
    DropdownV4.prototype.focusNextItem = function (reversed) {
        if (this.haveResults) {
            // get selected
            var currElem = this._dd.find('.dropdown-item.active');
            var nextElem = reversed ? currElem.prev() : currElem.next();
            if (nextElem.length === 0) {
                // first
                nextElem = reversed ? this._dd.find('.dropdown-item').last() : this._dd.find('.dropdown-item').first();
            }
            currElem.removeClass('active');
            nextElem.addClass('active');
        }
    };
    DropdownV4.prototype.focusPreviousItem = function () {
        this.focusNextItem(true);
    };
    DropdownV4.prototype.selectFocusItem = function () {
        this._dd.find('.dropdown-item.active').trigger('click');
    };
    Object.defineProperty(DropdownV4.prototype, "isItemFocused", {
        get: function () {
            if (this._dd && this.isShown() && (this._dd.find('.dropdown-item.active').length > 0)) {
                return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    DropdownV4.prototype.show = function () {
        if (!this.shown) {
            var pos = this.getElPos();
            // this._dd.css({ top: pos.top + this._$el.outerHeight(), left: pos.left, width: this._$el.outerWidth() });
            this._dd.addClass('show');
            this.shown = true;
            this._$el.trigger('autocomplete.dd.shown');
        }
    };
    DropdownV4.prototype.isShown = function () {
        return this.shown;
    };
    DropdownV4.prototype.hide = function () {
        if (this.shown) {
            this._dd.removeClass('show');
            this.shown = false;
            this._$el.trigger('autocomplete.dd.hidden');
        }
    };
    DropdownV4.prototype.updateItems = function (items, searchText) {
        // console.log('updateItems', items);
        this.items = items;
        this.searchText = searchText;
        this.refreshItemList();
    };
    DropdownV4.prototype.showMatchedText = function (text, qry) {
        var startIndex = text.toLowerCase().indexOf(qry.toLowerCase());
        if (startIndex > -1) {
            var endIndex = startIndex + qry.length;
            return text.slice(0, startIndex) + '<b>'
                + text.slice(startIndex, endIndex) + '</b>'
                + text.slice(endIndex);
        }
        return text;
    };
    DropdownV4.prototype.refreshItemList = function () {
        var _this = this;
        this.checkInitialized();
        this._dd.empty();
        var liList = [];
        if (this.items.length > 0) {
            this.items.forEach(function (item) {
                var itemFormatted = _this.formatItem(item);
                if (typeof itemFormatted === 'string') {
                    itemFormatted = { text: itemFormatted };
                }
                var itemText;
                var itemHtml;
                itemText = _this.showMatchedText(itemFormatted.text, _this.searchText);
                if (itemFormatted.html !== undefined) {
                    itemHtml = itemFormatted.html;
                }
                else {
                    itemHtml = itemText;
                }
                var disabledItem = itemFormatted.disabled;
                var li = $('<a >');
                li.addClass('dropdown-item')
                    .css({ 'overflow': 'hidden', 'text-overflow': 'ellipsis' })
                    .html(itemHtml)
                    .data('item', item);
                if (disabledItem) {
                    li.addClass('disabled');
                }
                liList.push(li);
            });
            this._dd.append(liList);
            this.show();
        }
        else {
            // No results
            if (this.noResultsText === '') {
                // hide the dropdown
                this.hide();
            }
            else {
                // show no results message
                var li = $('<a >');
                li.addClass('dropdown-item disabled')
                    .html(this.noResultsText);
                liList.push(li);
                this._dd.append(liList);
                this.show();
            }
        }
    };
    DropdownV4.prototype.itemSelectedLaunchEvent = function (item) {
        // launch selected event
        // console.log('itemSelectedLaunchEvent', item);
        this._$el.trigger('autocomplete.select', item);
    };
    return DropdownV4;
}());


// CONCATENATED MODULE: C:/Users/kloofbourrow/OneDrive - Brinly-Hardy Company/Documents/source/Repos/bootstrap-autocomplete/src/main.ts
/* =============================================================
 * bootstrap-autocomplete.js v2.3.4
 * https://github.com/xcash/bootstrap-autocomplete
 * =============================================================
 * Forked from bootstrap3-typeahead.js v3.1.0
 * https://github.com/bassjobsen/Bootstrap-3-Typeahead
 * =============================================================
 * Original written by @mdo and @fat
 * =============================================================
 * Copyright 2018-2020 Paolo Casciello @xcash666 and contributors
 *
 * Licensed under the MIT License (the 'License');
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


var main_AutoComplete = /** @class */ (function () {
    function AutoComplete(element, options) {
        this._selectedItem = null;
        this._defaultValue = null;
        this._defaultText = null;
        this._isSelectElement = false;
        this._settings = {
            resolver: 'ajax',
            resolverSettings: {},
            minLength: 3,
            valueKey: 'value',
            formatResult: this.defaultFormatResult,
            autoSelect: true,
            noResultsText: 'No results',
            bootstrapVersion: 'auto',
            preventEnter: false,
            events: {
                typed: null,
                searchPre: null,
                search: null,
                searchPost: null,
                select: null,
                focus: null,
            }
        };
        this._el = element;
        this._$el = $(this._el);
        // element type
        if (this._$el.is('select')) {
            this._isSelectElement = true;
        }
        // inline data attributes
        this.manageInlineDataAttributes();
        // constructor options
        if (typeof options === 'object') {
            this._settings = $.extend(true, {}, this.getSettings(), options);
        }
        if (this._isSelectElement) {
            this.convertSelectToText();
        }
        // console.log('initializing', this._settings);
        this.init();
    }
    AutoComplete.prototype.manageInlineDataAttributes = function () {
        // updates settings with data-* attributes
        var s = this.getSettings();
        if (this._$el.data('url')) {
            s.resolverSettings.url = this._$el.data('url');
        }
        if (this._$el.data('default-value')) {
            this._defaultValue = this._$el.data('default-value');
        }
        if (this._$el.data('default-text')) {
            this._defaultText = this._$el.data('default-text');
        }
        if (this._$el.data('noresults-text') !== undefined) {
            s.noResultsText = this._$el.data('noresults-text');
        }
    };
    AutoComplete.prototype.getSettings = function () {
        return this._settings;
    };
    AutoComplete.prototype.getBootstrapVersion = function () {
        var versionArray;
        if (this._settings.bootstrapVersion === 'auto') {
            // @ts-ignore
            var versionString = $.fn.button.Constructor.VERSION;
            versionArray = versionString.split('.').map(parseInt);
        }
        else if (this._settings.bootstrapVersion === '4') {
            versionArray = [4];
        }
        else if (this._settings.bootstrapVersion === '3') {
            versionArray = [3];
        }
        else {
            // tslint:disable-next-line: no-console
            console.error("INVALID value for 'bootstrapVersion' settings property: " + this._settings.bootstrapVersion + " defaulting to 4");
            versionArray = [4];
        }
        return versionArray;
    };
    AutoComplete.prototype.convertSelectToText = function () {
        // create hidden field
        var hidField = $('<input>');
        hidField.attr('type', 'hidden');
        hidField.attr('name', this._$el.attr('name'));
        if (this._defaultValue) {
            hidField.val(this._defaultValue);
        }
        this._selectHiddenField = hidField;
        hidField.insertAfter(this._$el);
        // create search input element
        var searchField = $('<input>');
        // copy all attributes
        // searchField.attr('type', 'search');
        // searchField.attr('name', this._$el.attr('name') + '_text');
        // searchField.attr('id', this._$el.attr('id'));
        // searchField.attr('disabled', this._$el.attr('disabled'));
        // searchField.attr('placeholder', this._$el.attr('placeholder'));
        // searchField.attr('autocomplete', 'off');
        // searchField.addClass(this._$el.attr('class'));
        for (var i = 0; i < this._$el[0].attributes.length; i++) {
            var attr = this._$el[0].attributes[i];
            searchField.attr(attr.name, attr.value);
        }
        if (this._defaultText) {
            searchField.val(this._defaultText);
        }
        var requiredAttribute = this._$el.attr('required');
        if (requiredAttribute) {
            searchField.attr('required', requiredAttribute);
        }
        // attach class
        searchField.data(AutoComplete.NAME, this);
        // replace original with searchField
        this._$el.replaceWith(searchField);
        this._$el = searchField;
        this._el = searchField.get(0);
    };
    AutoComplete.prototype.init = function () {
        // bind default events
        this.bindDefaultEventListeners();
        // RESOLVER
        if (this._settings.resolver === 'ajax') {
            // configure default resolver
            this.resolver = new AjaxResolver(this._settings.resolverSettings);
        }
        // Dropdown
        if (this.getBootstrapVersion()[0] === 4) {
            // v4
            this._dd = new DropdownV4(this._$el, this._settings.formatResult, this._settings.autoSelect, this._settings.noResultsText);
        }
    };
    AutoComplete.prototype.bindDefaultEventListeners = function () {
        var _this = this;
        this._$el.on('keydown', function (evt) {
            // console.log('keydown', evt.which, evt);
            switch (evt.which) {
                case 9: // TAB
                    // if (this._settings.autoSelect) {
                    //   // if autoSelect enabled selects on blur the currently selected item
                    //   this._dd.selectFocusItem();
                    // }
                    if (_this._dd.isItemFocused) {
                        _this._dd.selectFocusItem();
                    }
                    else if (!_this._selectedItem) {
                        // if we haven't selected an item (thus firing the corresponding event) we fire the free value
                        // related to issue #71
                        if (_this._$el.val() !== '') {
                            _this._$el.trigger('autocomplete.freevalue', _this._$el.val());
                        }
                    }
                    _this._dd.hide();
                    break;
                case 13: // ENTER
                    if (_this._dd.isItemFocused) {
                        _this._dd.selectFocusItem();
                    }
                    else if (!_this._selectedItem) {
                        if (_this._$el.val() !== '') {
                            _this._$el.trigger('autocomplete.freevalue', _this._$el.val());
                        }
                    }
                    _this._dd.hide();
                    if (_this._settings.preventEnter) {
                        // console.log('preventDefault');
                        evt.preventDefault();
                    }
                    break;
                case 40:
                    // arrow DOWN (here for usability - issue #80)
                    _this._dd.focusNextItem();
                    break;
                case 38: // up arrow (here for usability - issue #80)
                    _this._dd.focusPreviousItem();
                    break;
            }
        });
        this._$el.on('keyup', function (evt) {
            // console.log('keyup', evt.which, evt);
            // check key
            switch (evt.which) {
                case 16: // shift
                case 17: // ctrl
                case 18: // alt
                case 39: // right
                case 37: // left
                case 36: // home
                case 35: // end
                    break;
                case 13:
                    // ENTER
                    _this._dd.hide();
                    break;
                case 27:
                    // ESC
                    _this._dd.hide();
                    break;
                case 40:
                    // arrow DOWN
                    // this._dd.focusNextItem();
                    break;
                case 38: // up arrow
                    // this._dd.focusPreviousItem();
                    break;
                default:
                    // reset selectedItem as we modified input value (related to issue #71)
                    _this._selectedItem = null;
                    var newValue = _this._$el.val();
                    _this.handlerTyped(newValue);
            }
        });
        this._$el.on('blur', function (evt) {
            // console.log(evt);
            if (!_this._dd.isMouseOver && _this._dd.isDdMouseOver && _this._dd.isShown()) {
                // Firefox Workaround
                setTimeout(function () { _this._$el.focus(); });
                // Other browsers
                _this._$el.focus();
            }
            else if (!_this._dd.isMouseOver) {
                if (_this._isSelectElement) {
                    // if it's a select element
                    if (_this._dd.isItemFocused) {
                        _this._dd.selectFocusItem();
                    }
                    else if ((_this._selectedItem !== null) && (_this._$el.val() !== '')) {
                        // reselect it
                        _this._$el.trigger('autocomplete.select', _this._selectedItem);
                    }
                    else if ((_this._$el.val() !== '') && (_this._defaultValue !== null)) {
                        // select Default
                        _this._$el.val(_this._defaultText);
                        _this._selectHiddenField.val(_this._defaultValue);
                        _this._selectedItem = null;
                        _this._$el.trigger('autocomplete.select', _this._selectedItem);
                    }
                    else {
                        // empty the values
                        _this._$el.val('');
                        _this._selectHiddenField.val('');
                        _this._selectedItem = null;
                        _this._$el.trigger('autocomplete.select', _this._selectedItem);
                    }
                }
                else {
                    // It's a text element, we accept custom value.
                    // Developers may subscribe to `autocomplete.freevalue` to get notified of this
                    if (_this._selectedItem === null) {
                        _this._$el.trigger('autocomplete.freevalue', _this._$el.val());
                    }
                }
                _this._dd.hide();
            }
        });
        // selected event
        // @ts-ignore - Ignoring TS type checking
        this._$el.on('autocomplete.select', function (evt, item) {
            _this._selectedItem = item;
            _this.itemSelectedDefaultHandler(item);
        });
        // Paste event
        // The event occurs before the value is pasted. safe behaviour should be triggering `keyup`
        this._$el.on('paste', function (evt) {
            setTimeout(function () {
                _this._$el.trigger('keyup', evt);
            }, 0);
        });
    };
    AutoComplete.prototype.handlerTyped = function (newValue) {
        // field value changed
        // custom handler may change newValue
        if (this._settings.events.typed !== null) {
            newValue = this._settings.events.typed(newValue, this._$el);
            if (!newValue) {
                return;
            }
        }
        // if value >= minLength, start autocomplete
        if (newValue.length >= this._settings.minLength) {
            this._searchText = newValue;
            this.handlerPreSearch();
        }
        else {
            this._dd.hide();
        }
    };
    AutoComplete.prototype.handlerPreSearch = function () {
        // do nothing, start search
        // custom handler may change newValue
        if (this._settings.events.searchPre !== null) {
            var newValue = this._settings.events.searchPre(this._searchText, this._$el);
            if (!newValue)
                return;
            this._searchText = newValue;
        }
        this.handlerDoSearch();
    };
    AutoComplete.prototype.handlerDoSearch = function () {
        var _this = this;
        // custom handler may change newValue
        if (this._settings.events.search !== null) {
            this._settings.events.search(this._searchText, function (results) {
                _this.postSearchCallback(results);
            }, this._$el);
        }
        else {
            // Default behaviour
            // search using current resolver
            if (this.resolver) {
                this.resolver.search(this._searchText, function (results) {
                    _this.postSearchCallback(results);
                });
            }
        }
    };
    AutoComplete.prototype.postSearchCallback = function (results) {
        // console.log('callback called', results);
        // custom handler may change newValue
        if (this._settings.events.searchPost) {
            results = this._settings.events.searchPost(results, this._$el);
            if ((typeof results === 'boolean') && !results)
                return;
        }
        this.handlerStartShow(results);
    };
    AutoComplete.prototype.handlerStartShow = function (results) {
        // console.log("defaultEventStartShow", results);
        // for every result, draw it
        this._dd.updateItems(results, this._searchText);
    };
    AutoComplete.prototype.itemSelectedDefaultHandler = function (item) {
        // this is a coerce check (!=) to cover null or undefined
        if (item != null) {
            // default behaviour is set elment's .val()
            var itemFormatted = this._settings.formatResult(item);
            if (typeof itemFormatted === 'string') {
                itemFormatted = { text: itemFormatted };
            }
            this._$el.val(itemFormatted.text);
            // if the element is a select
            if (this._isSelectElement) {
                this._selectHiddenField.val(itemFormatted.value);
            }
        }
        else {
            // item is null -> clear the value
            this._$el.val('');
            if (this._isSelectElement) {
                this._selectHiddenField.val('');
            }
        }
        // save selected item
        this._selectedItem = item;
        // and hide
        this._dd.hide();
    };
    AutoComplete.prototype.defaultFormatResult = function (item) {
        if (typeof item === 'string') {
            return { text: item };
        }
        else if (item.text) {
            return item;
        }
        else {
            // return a toString of the item as last resort
            // console.error('No default formatter for item', item);
            return { text: item.toString() };
        }
    };
    AutoComplete.prototype.manageAPI = function (APICmd, params) {
        // manages public API
        if (APICmd === 'set') {
            this.itemSelectedDefaultHandler(params);
        }
        else if (APICmd === 'clear') {
            // shortcut
            this.itemSelectedDefaultHandler(null);
        }
        else if (APICmd === 'show') {
            // shortcut
            this._$el.trigger('keyup');
        }
        else if (APICmd === 'updateResolver') {
            // update resolver
            this.resolver = new AjaxResolver(params);
        }
    };
    AutoComplete.NAME = 'autoComplete';
    return AutoComplete;
}());

(function ($, window, document) {
    // @ts-ignore
    $.fn[main_AutoComplete.NAME] = function (optionsOrAPI, optionalParams) {
        return this.each(function () {
            var pluginClass;
            pluginClass = $(this).data(main_AutoComplete.NAME);
            if (!pluginClass) {
                pluginClass = new main_AutoComplete(this, optionsOrAPI);
                $(this).data(main_AutoComplete.NAME, pluginClass);
            }
            pluginClass.manageAPI(optionsOrAPI, optionalParams);
        });
    };
})(jQuery, window, document);


/***/ })
/******/ ]);