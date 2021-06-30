window.Coveo = window.Coveo || {};var c4sf =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.Coveo;

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SalesforceFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SalesforceUtilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Id; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Defines well-known Salesforce fields.
 */
var SalesforceFields;
(function (SalesforceFields) {
    SalesforceFields["Id"] = "sfid";
    SalesforceFields["OrganizationId"] = "sforganizationid";
})(SalesforceFields || (SalesforceFields = {}));
var SalesforceUtilities = /** @class */ (function () {
    function SalesforceUtilities() {
    }
    SalesforceUtilities.isInSalesforce = function () {
        return window.sforce != undefined;
    };
    SalesforceUtilities.isInLightning = function () {
        // Check if the aura framework is loaded.
        return window['$A'] !== undefined;
    };
    SalesforceUtilities.isInSalesforceConsole = function () {
        return SalesforceUtilities.isInSalesforce() && window.sforce.console != undefined && window.sforce.console.isInConsole();
    };
    SalesforceUtilities.isValidSalesforceResult = function (result, organizationId) {
        return [result.raw[SalesforceFields.Id], result.raw[SalesforceFields.OrganizationId], organizationId].every(Id.isId);
    };
    SalesforceUtilities.isLocalSalesforceResult = function (result, organizationId) {
        return this.isValidSalesforceResult(result, organizationId) && Id.equal(result.raw[SalesforceFields.OrganizationId], organizationId);
    };
    SalesforceUtilities.isRemoteSalesforceResult = function (result, organizationId) {
        return this.isValidSalesforceResult(result, organizationId) && !Id.equal(result.raw[SalesforceFields.OrganizationId], organizationId);
    };
    SalesforceUtilities.focusOrOpenTab = function (url, tabText, openInPrimaryTab) {
        if (openInPrimaryTab === void 0) { openInPrimaryTab = false; }
        url = typeof url !== 'undefined' ? url : '';
        var originalUrl = url;
        url = url.split('#')[0].split('?')[0];
        var urlId = this.getSfIdFromUrl(url);
        var endsWith = function (str, suffix) {
            if (!(str && suffix))
                return false;
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        };
        var resultError = function (result) {
            if (!result.success) {
                openSubtab(focusedPrimaryTabId, url);
                return true;
            }
            return false;
        };
        // For helper message
        var outputConsoleDomainErrorMessage = function () {
            console.log("Unexpected Behaviour? Please check your Domain is set in your Salesforce App's 'Whitelist Domains' section.");
            console.log('Settings are located in Build > Apps > ‘App Name’ (edit) > Whitelist Domains');
        };
        // Open in subtab
        var subtabCount = 0;
        var tabFocused = false;
        var subtabIndex = 0;
        var focusedPrimaryTabId = null;
        var openSubtab = function (primaryTabId, url) {
            window.sforce.console.openSubtab(primaryTabId, originalUrl, true, tabText, null, function openSuccess(result) {
                // `result.success` comes from the window.sforce.console object and will be set to FALSE when `openSubtab` fails
                if (!result.success) {
                    window.open(originalUrl);
                    outputConsoleDomainErrorMessage();
                }
            });
        };
        var handleGetSubtabInfo = function (result, id) {
            if (!resultError(result)) {
                subtabIndex++;
                if (!tabFocused) {
                    var tabUrl = $.parseJSON(result.pageInfo).url;
                    tabUrl = tabUrl ? tabUrl.split('#')[0].split('?')[0] : tabUrl;
                    var tabUrlId = $.parseJSON(result.pageInfo).objectId;
                    tabUrlId = tabUrlId ? tabUrlId.substr(0, 15) : tabUrl;
                    if (tabUrlId == urlId || endsWith(url, tabUrl) || endsWith(tabUrl, url)) {
                        window.sforce.console.focusSubtabById(id);
                        tabFocused = true;
                    }
                    subtabCount--;
                    if (!tabFocused && subtabCount == 0) {
                        openSubtab(focusedPrimaryTabId, url);
                    }
                }
            }
        };
        var handleGetSubTabIds = function (result) {
            if (!resultError(result)) {
                subtabCount = result.ids.length;
                for (var i = 0; i < result.ids.length; i++) {
                    window.sforce.console.getPageInfo(result.ids[i], function (newResult) {
                        handleGetSubtabInfo(newResult, result.ids[subtabIndex]);
                    });
                }
            }
        };
        var handleGetFocusedPrimaryTabId = function (result) {
            if (!resultError(result)) {
                focusedPrimaryTabId = result.id;
                window.sforce.console.getSubtabIds(result.id, handleGetSubTabIds);
            }
        };
        if (!openInPrimaryTab) {
            window.sforce.console.getFocusedPrimaryTabId(handleGetFocusedPrimaryTabId);
        }
        // Open in primary tab
        var primaryTabCount = 0;
        var primaryTabIndex = 0;
        var openPrimaryTab = function (url) {
            window.sforce.console.openPrimaryTab(null, originalUrl, true, tabText, function openSuccess(result) {
                // `result.success` comes from the window.sforce.console object and will be set to FALSE when `openPrimaryTab` fails
                if (!result.success) {
                    window.open(originalUrl);
                    outputConsoleDomainErrorMessage();
                }
            });
        };
        var handleGetPrimaryTabInfo = function (result, id) {
            if (!resultError(result)) {
                primaryTabIndex++;
                if (!tabFocused) {
                    var tabUrl = $.parseJSON(result.pageInfo).url;
                    tabUrl = tabUrl ? tabUrl.split('#')[0].split('?')[0] : tabUrl;
                    var tabUrlId = $.parseJSON(result.pageInfo).objectId;
                    tabUrlId = tabUrlId ? tabUrlId.substr(0, 15) : tabUrl;
                    if (tabUrlId == urlId || endsWith(url, tabUrl) || endsWith(tabUrl, url)) {
                        window.sforce.console.focusPrimaryTabById(id);
                        tabFocused = true;
                    }
                    primaryTabCount--;
                    if (!tabFocused && primaryTabCount == 0) {
                        openPrimaryTab(url);
                    }
                }
            }
        };
        var handleGetPrimaryTabIds = function (result) {
            if (!resultError(result)) {
                primaryTabCount = result.ids.length;
                for (var i = 0; i < result.ids.length; i++) {
                    window.sforce.console.getPageInfo(result.ids[i], function (newResult) {
                        handleGetPrimaryTabInfo(newResult, result.ids[primaryTabIndex]);
                    });
                }
            }
        };
        if (openInPrimaryTab) {
            window.sforce.console.getPrimaryTabIds(handleGetPrimaryTabIds);
        }
    };
    SalesforceUtilities.getSfIdFromUrl = function (url) {
        var id = url.substr(url.lastIndexOf('/') + 1, 18);
        var idIsValid = /^\w+$/.test(id);
        if (!idIsValid) {
            return url.split('#')[0].split('?')[0];
        }
        return id.substr(0, 15);
    };
    SalesforceUtilities.expandStringUsingRecord = function (value, record) {
        if (value != null) {
            var matches = value.match(/\{!(>?)(.*?)\}/g);
            if (matches != null) {
                for (var i = 0; i < matches.length; i++) {
                    var match = matches[i];
                    var groups = /\{!(>?)(.*?)\}/g.exec(match);
                    var cleanup = groups[1] === '>';
                    var fieldName = groups[2].toLowerCase();
                    var fieldValue = '';
                    if (record[fieldName] != null) {
                        fieldValue = record[fieldName].toString();
                        if (cleanup) {
                            fieldValue = SalesforceUtilities.cleanSentenceForQuery(fieldValue);
                        }
                    }
                    value = value.replace(groups[0], fieldValue);
                }
            }
        }
        return value;
    };
    SalesforceUtilities.expandStringUsingExpert = function (value, expert) {
        if (value != null) {
            var matches = value.match(/%(\w+)%/g);
            if (matches != null) {
                for (var i = 0; i < matches.length; i++) {
                    var match = matches[i];
                    var groups = /%(\w+)%/g.exec(match);
                    var fieldName = groups[1].toLowerCase();
                    var fieldValue = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Utils"].getFieldValue(expert, fieldName);
                    if (fieldValue != null) {
                        fieldValue = SalesforceUtilities.cleanSentenceForQuery(fieldValue);
                    }
                    else {
                        fieldValue = '';
                    }
                    value = value.replace(groups[0], fieldValue);
                }
            }
        }
        return value;
    };
    SalesforceUtilities.cleanSentenceForQuery = function (sentence) {
        return sentence.replace(/[\[\]"'\(\),\.@=<>:]/g, '');
    };
    /*
     * Allow to parse a template an inject the fields.
     * This is based of https://github.com/coveo/search-ui/blob/984d014639f09c61aca77b57bcc7ec804e30dbb2/src/ui/ResultLink/ResultLink.ts#L501
     */
    SalesforceUtilities.parseStringTemplate = function (template, result) {
        return coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].buildStringTemplateFromResult(template, result);
    };
    /*
     * Allow to parse a template an inject the fields.
     * This is based of https://github.com/coveo/search-ui/blob/984d014639f09c61aca77b57bcc7ec804e30dbb2/src/ui/ResultLink/ResultLink.ts#L501
     */
    SalesforceUtilities.readFromObject = function (object, key) {
        if (object && key.indexOf('.') !== -1) {
            var newKey = key.substring(key.indexOf('.') + 1);
            key = key.substring(0, key.indexOf('.'));
            return this.readFromObject(object[key], newKey);
        }
        return object ? object[key] : undefined;
    };
    /**
     * Show a toast event indicating that an error has occurred.
     * @param message The message to show in the toast event.
     * @param error Optional. The error to log.
     * @param logger Optional. If provided, the error will be logged.
     */
    SalesforceUtilities.showToastError = function (message, error, logger) {
        if (typeof $A !== 'undefined') {
            var toastEvent = $A.get('e.force:showToast');
            toastEvent.setParams({
                title: 'Error',
                type: 'error',
                message: message,
            });
            toastEvent.fire();
        }
        if (logger && error) {
            logger.error(message, error);
        }
    };
    return SalesforceUtilities;
}());

/**
 * Helper class to deal with Salesforce IDs
 */
var Id = /** @class */ (function () {
    function Id() {
    }
    /**
     * Returns true if the ID is a valid Salesforce ID, in short or long form.
     * @param id The ID
     */
    Id.isId = function (id) {
        var cleanedId = id !== null && id !== void 0 ? id : '';
        return Id.isShort(cleanedId) || Id.isLong(cleanedId);
    };
    /**
     * Returns true if the ID is a "short" ID
     * @param id The ID
     */
    Id.isShort = function (id) {
        return id.length === Id.SHORT_ID_LENGTH;
    };
    /**
     * Returns true if the ID is a "long" ID
     * @param id The ID
     */
    Id.isLong = function (id) {
        return id.length === Id.LONG_ID_LENGTH;
    };
    /**
     * Takes in a short or long ID, and returns a capitalized long ID
     * @param id The ID
     */
    Id.toLongForm = function (id) {
        // Already a long ID, capitalize and return.
        if (Id.isLong(id)) {
            return id.toUpperCase();
        }
        // Must have a short ID to continue
        if (!Id.isShort(id)) {
            throw Error("Invalid Id " + id);
        }
        var suffix = '';
        /**
         * The last 3 digits of the long ID are a checksum of the capitalizations of the first 15 characters.
         */
        for (var block = 0; block < 3; block++) {
            var blockSuffixByte = 0;
            for (var position = 0; position < 5; position++) {
                var currentChar = id.charAt(block * 5 + position);
                if (currentChar >= 'A' && currentChar <= 'Z') {
                    blockSuffixByte += 1 << position;
                }
            }
            suffix += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345'.charAt(blockSuffixByte);
        }
        return (id + suffix).toUpperCase();
    };
    /**
     * Compares 2 ID and returns true if they are equal.
     * @param a The first ID
     * @param b The second ID
     */
    Id.equal = function (a, b) {
        return Id.toLongForm(a) === Id.toLongForm(b);
    };
    Id.SHORT_ID_LENGTH = 15;
    Id.LONG_ID_LENGTH = 18;
    return Id;
}());



/***/ }),

/***/ 20:
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"<svg viewbox=\\\"0 0 20 20\\\"><path d=\\\"M0 10c0 5.52 4.466 10 9.989 10 5.53 0 10.01-4.478 10.01-10 0-5.52-4.478-10-10.01-10C4.469 0 0 4.478 0 10m10.04-8c4.44 0 8.05 3.589 8.05 8s-3.612 8-8.05 8c-4.428 0-8.03-3.589-8.03-8s3.603-8 8.03-8\\\"/><path d=\\\"M9 5.991C9 5.451 9.45 5 10.01 5c.559 0 1 .444 1 .991l-.009 4.596 2.742 2.742a.994.994 0 0 1-.005 1.409.997.997 0 0 1-1.409.005L9 11.414V5.991\\\"/></svg>\",\"b\":\"<svg viewbox=\\\"0 0 22 22\\\"><path d=\\\"M.818 2.232L2.232.818l19.02 19.02-1.413 1.415z\\\"/><path d=\\\"M.818 19.768L19.838.748l1.415 1.413L2.232 21.182z\\\"/></svg>\",\"c\":\"<svg viewbox=\\\"0 0 20 20\\\"><path d=\\\"M1 4c0-.553.446-1 .997-1h8v2h-7s.019 11.933 0 12h12v-7h2v8a.997.997 0 0 1-1 .997H1.999c-.553 0-1-.445-1-1V4\\\"/><path d=\\\"M14.5 3.5l-7 7L6 14l3.5-1.5 7-7zM17.848.848a.495.495 0 0 0-.697 0L15.499 2.5l2 2 1.652-1.652a.495.495 0 0 0 0-.697L17.848.848\\\"/></svg>\",\"d\":\"<svg viewbox=\\\"0 0 20 20\\\"><path d=\\\"M1 4c0-.553.446-1 .997-1h8v2h-7s.019 11.933 0 12h12v-7h2v8a.997.997 0 0 1-1 .998H1.999c-.553 0-1-.445-1-1V4\\\"/><path d=\\\"M15.5 3L8.707 9.792a.999.999 0 0 0 0 1.414l.086.086a.999.999 0 0 0 1.414 0L17 4.5v2a1 1 0 0 0 2 0V2.001a1 1 0 0 0-1-1h-4.499a1 1 0 0 0 0 2h2\\\"/></svg>\"}");

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullSearchHelper; });
/* harmony import */ var _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var FullSearchHelper = /** @class */ (function () {
    function FullSearchHelper() {
    }
    FullSearchHelper.openFullSearchPage = function (button) {
        return __awaiter(this, void 0, void 0, function () {
            var pageRef, workspace, options, focusedTabId, tabId, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pageRef = {
                            type: 'standard__component',
                            attributes: {
                                componentName: button.options.fullSearchComponentName || 'CoveoV2__FullSearch',
                            },
                            state: FullSearchHelper.getPageReferenceState(button),
                        };
                        workspace = button.options.workspaceAPI;
                        options = { pageReference: pageRef, focus: true };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, FullSearchHelper.getFocusedTabId(button.options.openInSubtab, options, workspace)];
                    case 2:
                        focusedTabId = _a.sent();
                        return [4 /*yield*/, workspace.setTabLabel({
                                tabId: focusedTabId,
                                label: 'Search',
                            })];
                    case 3:
                        tabId = (_a.sent()).tabId;
                        return [4 /*yield*/, workspace.setTabIcon({
                                tabId: tabId,
                                icon: 'standard:search',
                                iconAlt: 'Search',
                            })];
                    case 4:
                        _a.sent();
                        button.bindings.usageAnalytics.logCustomEvent(Coveo.analyticsActionCauseList.expandToFullUI, {
                            fullSearchComponentName: button.options.fullSearchComponentName,
                            triggeredBy: button.id,
                        }, button.element);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        return [2 /*return*/, button.options.navigator
                                .generateUrl(pageRef)
                                .then(function (url) {
                                window.open(url);
                            })
                                .catch(function (e) {
                                _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_0__[/* SalesforceUtilities */ "c"].showToastError('An error occurred while performing the desired action.', e, button.logger);
                            })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FullSearchHelper.getPageReferenceState = function (button) {
        /**
         * Keys in the page reference state must only contain URI characters but cannot be
         * URI encoded.
         */
        var customKeyPrefix = 'c__';
        var facetKeyUrlPrefix = 'f-';
        var facetKeyStatePrefix = 'f:@';
        // Add the search's state to the page reference state to carry it over to the full search page.
        var searchState = button.queryStateModel.getAttributes();
        var pageReferenceState = __assign({}, button.options.pageState);
        if (!searchState) {
            return pageReferenceState;
        }
        for (var key in searchState) {
            var keyInPageRef = customKeyPrefix + key.replace(facetKeyStatePrefix, facetKeyUrlPrefix);
            pageReferenceState[keyInPageRef] = searchState[key];
        }
        // If the query is blank update the PageReferenceState Query to also be blank
        if (!searchState.q) {
            pageReferenceState['c__q'] = '';
        }
        return pageReferenceState;
    };
    FullSearchHelper.getFocusedTabId = function (openInSubtab, tabOptions, workspace) {
        return __awaiter(this, void 0, void 0, function () {
            var focusedTabId, currentTab;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!openInSubtab) return [3 /*break*/, 3];
                        return [4 /*yield*/, workspace.getFocusedTabInfo()];
                    case 1:
                        currentTab = _a.sent();
                        return [4 /*yield*/, workspace.openSubtab(__assign(__assign({}, tabOptions), { parentTabId: currentTab.tabId }))];
                    case 2:
                        focusedTabId = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, workspace.openTab(tabOptions)];
                    case 4:
                        focusedTabId = _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, focusedTabId];
                }
            });
        });
    };
    return FullSearchHelper;
}());



/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateArticleHelper; });
/* harmony import */ var _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var CreateArticleHelper = /** @class */ (function () {
    function CreateArticleHelper() {
    }
    CreateArticleHelper.createArticle = function (button, useDefault, articleApiName) {
        return __awaiter(this, void 0, void 0, function () {
            var URL, currentTab, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        URL = "/lightning/o/" + articleApiName + "/new" + (useDefault ? '' : '?useRecordTypeCheck=1');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!button.options.openInSubtab) return [3 /*break*/, 3];
                        return [4 /*yield*/, button.options.workspaceAPI.getFocusedTabInfo()];
                    case 2:
                        currentTab = _a.sent();
                        button.options.workspaceAPI.openSubtab({
                            parentTabId: currentTab.tabId,
                            url: URL,
                            focus: true,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        button.options.workspaceAPI.openTab({
                            url: URL,
                            focus: true,
                        });
                        _a.label = 4;
                    case 4:
                        button.bindings.usageAnalytics.logCustomEvent({ name: 'createArticle', type: 'createArticle' }, {
                            articleType: articleApiName,
                            triggeredBy: button.id,
                        }, button.element);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_0__[/* SalesforceUtilities */ "c"].showToastError('An error occurred while performing the desired action.', e_1, button.logger);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return CreateArticleHelper;
}());



/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionButton; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * The _ActionButton_ component is a simple button allowing to show an icon, text, and tooltip.
 *
 * ```html
 * <button class='CoveoActionButton'></button>
 * ```
 */
var ActionButton = /** @class */ (function (_super) {
    __extends(ActionButton, _super);
    function ActionButton(element, options, bindings) {
        var _this = _super.call(this, element, ActionButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ActionButton, options);
        if (_this.options.icon || _this.options.title) {
            _this.render();
        }
        else {
            console.warn('The action button cannot render since no icon nor title is defined.');
            Coveo.$$(_this.element).hide();
        }
        if (_this.options.click) {
            Coveo.$$(element).on('click', function () { return _this.options.click(); });
        }
        return _this;
    }
    /**
     * Updates the button icon.
     * @param icon Markup of the SVG icon to set.
     */
    ActionButton.prototype.updateIcon = function (icon) {
        var iconElement = this.element.querySelector('.coveo-actionbutton_icon');
        if (iconElement && icon && icon != iconElement.innerHTML) {
            iconElement.innerHTML = icon;
        }
    };
    /**
     * Updates the button tooltip.
     * @param tooltip The tooltip to set.
     */
    ActionButton.prototype.updateTooltip = function (tooltip) {
        if (tooltip && tooltip != this.element.title) {
            this.element.title = tooltip;
        }
    };
    ActionButton.prototype.render = function () {
        this.applyButtonStyles();
        if (this.options.icon) {
            this.appendIcon();
        }
        if (this.options.title) {
            this.appendTitle();
        }
        if (this.options.tooltip) {
            this.appendTooltip();
        }
    };
    ActionButton.prototype.applyButtonStyles = function () {
        this.element.classList.add('coveo-actionbutton');
        if (this.options.icon && !this.options.title) {
            this.element.classList.add('coveo-actionbutton-icononly');
        }
    };
    ActionButton.prototype.createIconElement = function () {
        var iconElement = document.createElement('span');
        iconElement.classList.add('coveo-icon', 'coveo-actionbutton_icon');
        iconElement.innerHTML = this.options.icon;
        return iconElement;
    };
    ActionButton.prototype.createTitleElement = function () {
        var titleElement = document.createElement('span');
        titleElement.classList.add('coveo-actionbutton_title');
        titleElement.innerText = this.options.title;
        return titleElement;
    };
    ActionButton.prototype.appendIcon = function () {
        this.element.appendChild(this.createIconElement());
    };
    ActionButton.prototype.appendTitle = function () {
        this.element.appendChild(this.createTitleElement());
    };
    ActionButton.prototype.appendTooltip = function () {
        this.element.title = this.options.tooltip;
    };
    return ActionButton;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

ActionButton.ID = 'ActionButton';
/**
 * The possible options for _ActionButton_.
 * @componentOptions
 */
ActionButton.options = {
    /**
     * Specifies the button label. The text is displayed on a single line, next to the icon.
     *
     * Default is the empty string.
     *
     * ```html
     * <button class='CoveoActionButton' data-title='My Button'></button>
     * ```
     */
    title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
    /**
     * Specifies the button tooltip text.
     *
     * Default is the empty string.
     *
     * ```html
     * <button class='CoveoActionButton' data-tooltip='My button tooltip'></button>
     * ```
     */
    tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
    /**
     * Specifies the button SVG icon.
     * Note: The SVG markup has to be HTML encoded when set using the HTML attributes.
     *
     * Default is the empty string.
     *
     * For example, with this SVG markup:
     *
     * ```xml
     * <svg width="1em" height="1em">...</svg>
     * ```
     *
     * The attribute would be set like this:
     *
     * ```html
     * <button class='CoveoActionButton' data-icon='&lt;svg width=&quot;1em&quot; height=&quot;1em&quot;&gt;...&lt;/svg&gt;'></button>
     * ```
     */
    icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
    /**
     * Specifies the handler called when the button is clicked.
     *
     * Default is `null`.
     *
     * This option must be set in JavaScript when initializing the component.
     */
    click: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }, { required: true }),
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ActionButton);



/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateArticleButton; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
var _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(20, 1);
/* harmony import */ var _CreateArticleHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * The _CreateArticleButton_ component allows you to create a knowledge article from the current page.
 *
 * ```html
 * <button class='CoveoCreateArticleButton'></button>
 * ```
 */
var CreateArticleButton = /** @class */ (function (_super) {
    __extends(CreateArticleButton, _super);
    function CreateArticleButton(element, options, bindings, result) {
        var _this = _super.call(this, element, CreateArticleButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, CreateArticleButton, options);
        _this.createInnerButton();
        return _this;
    }
    Object.defineProperty(CreateArticleButton.prototype, "id", {
        get: function () {
            return CreateArticleButton.ID;
        },
        enumerable: true,
        configurable: true
    });
    CreateArticleButton.prototype.createInnerButton = function () {
        var _this = this;
        new coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_1__[/* ActionButton */ "a"](this.element, {
            tooltip: this.options.tooltip,
            icon: _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_2__[/* edit */ "c"],
            click: function () { return _CreateArticleHelper__WEBPACK_IMPORTED_MODULE_3__[/* CreateArticleHelper */ "a"].createArticle(_this, false, _this.options.articleApiName); },
        }, this.bindings);
    };
    CreateArticleButton.ID = 'CreateArticleButton';
    CreateArticleButton.DEFAULT_ARTICLE_API_NAME = 'Knowledge__kav';
    /**
     * The available options for _CreateArticleButton_.
     * @componentOptions
     */
    CreateArticleButton.options = {
        /**
         * Specifies the button tooltip.
         *
         * Default is `Create a knowledge article`
         *
         * ```html
         * <button class='CoveoCreateArticleButton' data-tooltip='Create a knowledge article'></button>
         * ```
         */
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'Create a knowledge article' }),
        /**
         * Specifies the Article type to create. Use the API name.
         *
         * Default is `Knowledge__kav`
         *
         * ```html
         * <button class='CoveoCreateArticleButton' data-article-api-name='Topic__kav'></button>
         * ```
         */
        articleApiName: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: CreateArticleButton.DEFAULT_ARTICLE_API_NAME }),
        /**
         * Specifies whether to create the knowledge article in a subtab.
         * Setting this option to `false` opens in a primary tab instead.
         *
         * Default is `true`
         *
         * ```html
         * <button class='CoveoCreateArticleButton' data-open-in-subtab='true'></button>
         * ```
         */
        openInSubtab: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        workspaceAPI: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
    };
    return CreateArticleButton;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(CreateArticleButton);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ FullSearch_FullSearch; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/search-ui/FullSearch/ResponsiveFullSearch.ts


/**
 * ResponsiveFullSearch is responsible to display a responsive button
 * for the FullSearch.
 */
var ResponsiveFullSearch_ResponsiveFullSearch = /** @class */ (function () {
    /**
     * Constructor for ResponsiveFullSearch
     * @param root Root Component
     * @param ID Component identification
     */
    function ResponsiveFullSearch(root, ID) {
        this.root = root;
        this.ID = ID;
    }
    /**
     * Init the FullSearch Componenent to the ResponsiveComponentManager
     * @param root Root component
     * @param Component The full search componenet
     * @param options ResponsiveComponent options
     */
    ResponsiveFullSearch.init = function (root, Component, options) {
        external_window_Coveo_["ResponsiveComponentsManager"].register(ResponsiveFullSearch, Object(external_window_Coveo_["$$"])(root), FullSearch_FullSearch.ID, Component, options);
    };
    /**
     * Register the component to the ResponsiveFullSearch component.
     * @param component The component
     */
    ResponsiveFullSearch.prototype.registerComponent = function (component) {
        if (component.type !== 'FullSearch' || this.fullSearch === component) {
            return false;
        }
        this.fullSearch = component;
        this.buildDropDownHeader();
        return true;
    };
    /**
     * Handle resize events
     */
    ResponsiveFullSearch.prototype.handleResizeEvent = function () {
        var wrapper = Object(external_window_Coveo_["$$"])(this.root).find("." + external_window_Coveo_["ResponsiveComponentsManager"].DROPDOWN_HEADER_WRAPPER_CSS_CLASS);
        if (wrapper !== null) {
            Object(external_window_Coveo_["$$"])(wrapper).append(this.dropDownHeader.element.el);
        }
    };
    ResponsiveFullSearch.prototype.buildDropDownHeader = function () {
        var _this = this;
        var button = Object(external_window_Coveo_["$$"])('a');
        var buttonTitle = Object(external_window_Coveo_["$$"])('p');
        buttonTitle.text(this.fullSearch.options.title);
        button.append(buttonTitle.el);
        this.dropDownHeader = new external_window_Coveo_["ResponsiveDropdownHeader"]('full-search', Object(external_window_Coveo_["$$"])(button));
        button.on('click', function () {
            var dropdown = Object(external_window_Coveo_["$$"])('ol');
            dropdown.addClass('coveo-full-search-dropdown-content');
            _this.fullSearch.create();
        });
    };
    /**
     * As this component exposes a button this option must always return true.
     * The ResponsiveComponentManager will thus create a dropdown wrapper where the button will be inserted.
     */
    ResponsiveFullSearch.prototype.needDropdownWrapper = function () {
        return true;
    };
    return ResponsiveFullSearch;
}());


// EXTERNAL MODULE: ./src/components/search-ui/FullSearch/FullSearchHelper.ts
var FullSearchHelper = __webpack_require__(23);

// CONCATENATED MODULE: ./src/components/search-ui/FullSearch/FullSearch.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * The _FullSearch_ component allows your users access to a full length Coveo search page inside the Lightning experience.
 *
 * ```html
 * 	<div class="CoveoFullSearch"></div>
 * ```
 */
var FullSearch_FullSearch = /** @class */ (function (_super) {
    __extends(FullSearch, _super);
    function FullSearch(element, options, bindings, result) {
        var _this = _super.call(this, element, FullSearch.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, FullSearch, options);
        external_window_Coveo_["Assert"].isNotNull(_this.options.workspaceAPI);
        if (_this.options.visible) {
            ResponsiveFullSearch_ResponsiveFullSearch.init(_this.root, _this, {});
        }
        return _this;
    }
    Object.defineProperty(FullSearch.prototype, "id", {
        get: function () {
            return FullSearch.ID;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the markup name for search-ui
     */
    FullSearch.getMarkup = function () {
        var markup = Coveo.$$('div');
        markup.addClass('CoveoFullSearch');
        return markup;
    };
    /**
     * Redirects to the "create" page for the desired Full Search Component Object.
     */
    FullSearch.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, FullSearchHelper["a" /* FullSearchHelper */].openFullSearchPage(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FullSearch.ID = 'FullSearch';
    /**
     * The possible options for _FullSearch_
     * @componentOptions
     */
    FullSearch.options = {
        /**
         * Specifies the title of the FullSearch button.
         *
         *  Default is `Full Search`
         *
         *  ```html
         *    <div data-title='My Full Search' />
         *  ```
         *
         */
        title: external_window_Coveo_["ComponentOptions"].buildStringOption({ defaultValue: 'Full Search' }),
        /**
         * Whether to open the new page in a subtab.
         *
         *  Default is `true`
         *
         *  ```html
         *    <div data-open-in-subtab='false' />
         *  ```
         *
         */
        openInSubtab: external_window_Coveo_["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies the name of the component to open when clicked
         *
         * 	Default is `CoveoV2__FullSearch`
         *
         *  ```html
         *    <div data-full-search-component='CoveoV2__FullSearch' />
         *  ```
         */
        fullSearchComponentName: external_window_Coveo_["ComponentOptions"].buildStringOption({ defaultValue: 'CoveoV2__FullSearch' }),
        /**
         * Specifies the visibility of the component
         *
         *  Default is `true`
         *
         *  ```html
         *    <div data-visible='false'/>
         *  ```
         */
        visible: external_window_Coveo_["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        pageState: external_window_Coveo_["ComponentOptions"].buildJsonOption({ required: true }),
        workspaceAPI: external_window_Coveo_["ComponentOptions"].buildCustomOption(function (s) { return null; }),
        navigator: external_window_Coveo_["ComponentOptions"].buildCustomOption(function (s) { return null; }),
    };
    return FullSearch;
}(external_window_Coveo_["Component"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(FullSearch_FullSearch);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullSearchButton; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FullSearchHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
var _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(20, 1);
/* harmony import */ var coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * The _FullSearchButton_ component allows to open a full length Coveo search page inside the Lightning experience.
 *
 * ```html
 *   <button class='CoveoFullSearchButton'></button>
 * ```
 */
var FullSearchButton = /** @class */ (function (_super) {
    __extends(FullSearchButton, _super);
    function FullSearchButton(element, options, bindings, result) {
        var _this = _super.call(this, element, FullSearchButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, FullSearchButton, options);
        _this.createInnerButton();
        return _this;
    }
    Object.defineProperty(FullSearchButton.prototype, "id", {
        get: function () {
            return FullSearchButton.ID;
        },
        enumerable: true,
        configurable: true
    });
    FullSearchButton.prototype.createInnerButton = function () {
        var _this = this;
        new coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_3__[/* ActionButton */ "a"](this.element, {
            tooltip: this.options.tooltip,
            icon: _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_2__[/* external */ "d"],
            click: function () { return _FullSearchHelper__WEBPACK_IMPORTED_MODULE_1__[/* FullSearchHelper */ "a"].openFullSearchPage(_this); },
        }, this.bindings);
    };
    FullSearchButton.ID = 'FullSearchButton';
    /**
     * The possible options for _FullSearchButton_
     * @componentOptions
     */
    FullSearchButton.options = {
        /**
         * Specifies the tooltip to display with the button.
         *
         * Default is: `Open search in a new tab`
         *
         * ```html
         *   <button class='CoveoFullSearchButton' data-tooltip='Open search in a new tab'></button>
         * ```
         */
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'Open search in a new tab' }),
        /**
         * Whether to open the full search in a subtab.
         *
         * Default is: `true`
         *
         * ```html
         *  <button class='CoveoFullSearchButton' data-open-in-subtab='true'></button>
         * ```
         */
        openInSubtab: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies the name of the component to open when clicked
         *
         * 	Default is: `CoveoV2__FullSearch`
         *
         *  ```html
         *    <button class='CoveoFullSearchButton' data-full-search-component='CoveoV2__FullSearch'></button>
         *  ```
         */
        fullSearchComponentName: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'CoveoV2__FullSearch' }),
        pageState: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildJsonOption({ required: true }),
        workspaceAPI: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
        navigator: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
    };
    return FullSearchButton;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(FullSearchButton);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CreateArticle_CreateArticle; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/search-ui/CreateArticle/ResponsiveCreateArticle.ts


/**
 * ResponsiveCreateArticle is responsible to display a responsive button
 * for the CreateArticle.
 */
var ResponsiveCreateArticle_ResponsiveCreateArticle = /** @class */ (function () {
    function ResponsiveCreateArticle(root, ID) {
        this.root = root;
        this.ID = ID;
        this.createArticles = {};
        this.dropdownHeader = [];
    }
    /**
     * Init the CreateArticle component to the ResponsiveComponentManager.
     * @param root Root component
     * @param component The CreateArticle component
     * @param options ResponsiveComponent options
     */
    ResponsiveCreateArticle.init = function (root, component, options) {
        external_window_Coveo_["ResponsiveComponentsManager"].register(ResponsiveCreateArticle, Object(external_window_Coveo_["$$"])(root), CreateArticle_CreateArticle.ID, component, options);
    };
    /**
     * Register the component to the ResponsiveCreateArticle component.
     * @param accept The component
     */
    ResponsiveCreateArticle.prototype.registerComponent = function (component) {
        var COMPONENT_ID = component.options && component.options.title ? component.options.title.trim() : '';
        if (component instanceof CreateArticle_CreateArticle && !this.createArticles[COMPONENT_ID]) {
            this.createArticles[COMPONENT_ID] = component;
            this.buildDropdownHeader(this.createArticles[COMPONENT_ID]);
            return true;
        }
        return false;
    };
    /**
     * Handle resize events.
     */
    ResponsiveCreateArticle.prototype.handleResizeEvent = function () {
        var wrapper = Object(external_window_Coveo_["$$"])(this.root).find("." + external_window_Coveo_["ResponsiveComponentsManager"].DROPDOWN_HEADER_WRAPPER_CSS_CLASS);
        if (wrapper != null && this.dropdownHeader != null) {
            this.dropdownHeader.map(function (x) { return Object(external_window_Coveo_["$$"])(wrapper).append(x.element.el); });
        }
    };
    /**
     * Builds the dropdown button when required.
     * The button will not have a dropdown if there's only 1 article type.
     */
    ResponsiveCreateArticle.prototype.buildDropdownHeader = function (component) {
        var button = Object(external_window_Coveo_["$$"])('a');
        var buttonTitle = Object(external_window_Coveo_["$$"])('p');
        buttonTitle.text(component.options.title);
        button.append(buttonTitle.el);
        var dropdownHeader = new external_window_Coveo_["ResponsiveDropdownHeader"]('create-article', Object(external_window_Coveo_["$$"])(button));
        this.dropdownHeader.push(dropdownHeader);
        button.on('click', function () {
            var objectTypes = component.options.objectTypes;
            // Only 1 article, nothing special to do.
            if (objectTypes.length == 1) {
                component.create(objectTypes[0].apiName);
                return;
            }
            var dropdown = Object(external_window_Coveo_["$$"])('ol');
            dropdownHeader.element.append(dropdown.el);
            // For each article type, create a link and a handler.
            dropdown.addClass('coveo-create-article-dropdown-content');
            objectTypes.forEach(function (type) {
                var ELEM = Object(external_window_Coveo_["$$"])('li');
                var ELEM_LINK = Object(external_window_Coveo_["$$"])('a');
                ELEM.append(ELEM_LINK.el);
                ELEM_LINK.text(type.name);
                ELEM.on('click', function (e) {
                    e.stopPropagation();
                    component.create(type.apiName);
                    dropdown.remove();
                });
                dropdown.el.appendChild(ELEM.el);
            });
            // To hide the popup when we leave without click.
            dropdown.on('mouseleave', function () {
                dropdown.remove();
            });
        });
    };
    return ResponsiveCreateArticle;
}());


// EXTERNAL MODULE: ./src/components/search-ui/CreateArticle/CreateArticleHelper.ts
var CreateArticleHelper = __webpack_require__(24);

// CONCATENATED MODULE: ./src/components/search-ui/CreateArticle/CreateArticle.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * The _CreateArticle_ component allows you to create an Article from the current page using Salesforce.
 *
 * ```html
 * <div class="CoveoCreateArticle"></div>
 * ```
 *
 * You can also specify multiple type of Article to create using the `articleTypes` property.
 *
 * ```javascript
 *  Coveo.option(root, {
 *    CreateArticle: {
 *      articleTypes: [
 *          {name: "Knowledge", apiName: "Knowledge__kav"},
 *          {name: "Documentation", apiName: "Documentation__kav"}
 *      ]
 *    }
 *  })
 * ```
 */
var CreateArticle_CreateArticle = /** @class */ (function (_super) {
    __extends(CreateArticle, _super);
    function CreateArticle(element, options, bindings, result) {
        var _this = _super.call(this, element, CreateArticle.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, CreateArticle, options);
        external_window_Coveo_["Assert"].isNotNull(_this.options.workspaceAPI);
        external_window_Coveo_["Assert"].isLargerThan(0, _this.options.objectTypes.length);
        ResponsiveCreateArticle_ResponsiveCreateArticle.init(_this.root, _this, {});
        return _this;
    }
    Object.defineProperty(CreateArticle.prototype, "id", {
        get: function () {
            return CreateArticle.ID;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Redirects to the "create" page for the desired KB Object.
     * @param apiName API Name of the KB Object.
     */
    CreateArticle.prototype.create = function (apiName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CreateArticleHelper["a" /* CreateArticleHelper */].createArticle(this, this.options.useDefault, apiName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateArticle.ID = 'CreateArticle';
    /**
     * The possible options for _CreateArticle_
     * @componentOptions
     */
    CreateArticle.options = {
        /**
         * Specifies the title of the CreateArticle button.
         *
         * Default is `Create Article`
         *
         * ```html
         *   <div data-title='New Article' />
         *  ```
         */
        title: external_window_Coveo_["ComponentOptions"].buildStringOption({ defaultValue: 'Create Article' }),
        /**
         * Whether to open the new page in a subtab.
         *
         * Default is `true`
         *
         * ```html
         *   <div data-open-in-subtab='true' />
         *  ```
         */
        openInSubtab: external_window_Coveo_["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Whether to use the default article type.
         *
         * Default is `false`
         *
         * ```html
         *   <div data-use-default='true' />
         *  ```
         */
        useDefault: external_window_Coveo_["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies the list of objects that the component can create.
         *
         * Default is `[{ "name": "Knowledge", "apiName": "Knowledge__kav" }]`
         *
         * ```html
         *   <div data-object-types="[{ &#x22;name&#x22;: &#x22;Knowledge&#x22;, &#x22;apiName&#x22;: &#x22;Knowledge__kav&#x22; }]" />
         *  ```
         */
        objectTypes: external_window_Coveo_["ComponentOptions"].buildCustomOption(function (s) { return JSON.parse(s); }, {
            defaultValue: [{ name: 'Knowledge', apiName: 'Knowledge__kav' }],
        }),
        workspaceAPI: external_window_Coveo_["ComponentOptions"].buildCustomOption(function (s) { return null; }),
    };
    return CreateArticle;
}(external_window_Coveo_["Component"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(CreateArticle_CreateArticle);


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FullSearch", function() { return /* reexport */ FullSearch["a" /* FullSearch */]; });
__webpack_require__.d(__webpack_exports__, "FullSearchButton", function() { return /* reexport */ FullSearchButton["a" /* FullSearchButton */]; });
__webpack_require__.d(__webpack_exports__, "CreateArticle", function() { return /* reexport */ CreateArticle["a" /* CreateArticle */]; });
__webpack_require__.d(__webpack_exports__, "CreateArticleButton", function() { return /* reexport */ CreateArticleButton["a" /* CreateArticleButton */]; });
__webpack_require__.d(__webpack_exports__, "resizeAllComponents", function() { return /* reexport */ resizeAllComponents; });

// EXTERNAL MODULE: ./src/components/search-ui/FullSearch/FullSearch.ts + 1 modules
var FullSearch = __webpack_require__(55);

// EXTERNAL MODULE: ./src/components/search-ui/FullSearch/FullSearchButton.ts
var FullSearchButton = __webpack_require__(59);

// EXTERNAL MODULE: ./src/components/search-ui/CreateArticle/CreateArticle.ts + 1 modules
var CreateArticle = __webpack_require__(67);

// EXTERNAL MODULE: ./src/components/search-ui/CreateArticle/CreateArticleButton.ts
var CreateArticleButton = __webpack_require__(53);

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/modules/agentPanel/ts/agentPanelUtils.ts

/**
 * Force all responsive search-ui component to resize.
 * (Due to a limitation in LockerService, static method of classes can't be used.
 * Here we export a function that can be used in the AgentPanel.)
 */
function resizeAllComponents() {
    external_window_Coveo_["ResponsiveComponentsManager"].resizeAllComponentsManager();
}

// CONCATENATED MODULE: ./src/modules/agentPanel/ts/index.ts







/***/ })

/******/ });(function(e, a) { for(var i in a) e[i] = a[i]; }(window.Coveo, c4sf))