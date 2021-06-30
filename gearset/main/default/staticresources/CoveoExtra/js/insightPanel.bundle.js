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
/******/ 	return __webpack_require__(__webpack_require__.s = 83);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.Coveo;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),
/* 2 */
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
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProfilingEndpoint; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * User Actions posible type.
 */
var UserActionType;
(function (UserActionType) {
    UserActionType["Search"] = "SEARCH";
    UserActionType["Click"] = "CLICK";
    UserActionType["PageView"] = "VIEW";
    UserActionType["Custom"] = "CUSTOM";
})(UserActionType || (UserActionType = {}));
/**
 * Class that handle interaction with the endpoint.
 */
var UserProfilingEndpoint = /** @class */ (function () {
    /**
     * Create a `UserProfilingEndpoint` instance.
     * Create [`EndpointCaller`]{@link EndpointCaller} instance and uses it to communicate with the endpoint internally.
     *
     * @param options The options to initialize the component.
     */
    function UserProfilingEndpoint(options) {
        this.options = options;
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(this.options.accessToken);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(this.options.organization);
        this.options.uri = this.options.uri ? this.options.uri : UserProfilingEndpoint.DEFAULT_URI;
        this.options.accessToken.subscribeToRenewal(this.buildEndpointCaller.bind(this));
        this.buildEndpointCaller(this.options.accessToken.token);
    }
    UserProfilingEndpoint.prototype.buildEndpointCaller = function (token) {
        this.caller = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["EndpointCaller"]({ accessToken: token });
    };
    /**
     * Get the list of actions a user has performed.
     *
     * @param userId Id from which action history will be retrieve. (either visitId or user email).
     */
    UserProfilingEndpoint.prototype.getActions = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(userId);
                        return [4 /*yield*/, this.caller.call({
                                method: 'POST',
                                url: this.options.uri + "/rest/organizations/" + this.options.organization + "/machinelearning/user/actions",
                                queryString: [],
                                responseType: 'json',
                                requestDataType: 'application/json',
                                requestData: { objectId: userId },
                                errorsAsSuccess: false,
                            })];
                    case 1:
                        response = _a.sent();
                        if (this.isResponseEmpty(response)) {
                            throw new Error("Response has no values: " + JSON.stringify(response));
                        }
                        return [2 /*return*/, this.parseResponse(response.data)];
                }
            });
        });
    };
    UserProfilingEndpoint.prototype.parseResponse = function (response) {
        return response.value.map(function (v) {
            return {
                time: parseInt(v.time),
                value: JSON.parse(v.value),
                name: v.name,
            };
        });
    };
    UserProfilingEndpoint.prototype.isResponseEmpty = function (response) {
        return !response || !response.data || !response.data.value || !Array.isArray(response.data.value) || !(response.data.value.length > 0);
    };
    return UserProfilingEndpoint;
}());

/**
 * Default platform uri.
 */
UserProfilingEndpoint.DEFAULT_URI = 'https://platform.cloud.coveo.com';



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return duplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return view; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dot; });
/* unused harmony export paperclipIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return user; });
/* unused harmony export wait */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return copy; });
var ARROW_DOWN = '<svg xmlns="http://www.w3.org/2000/svg" width=".5em" height=".5em" enable-background="new 0 0 10 6" viewBox="0 0 10 6"><g fill="black"><path d="m5 5.932c-.222 0-.443-.084-.612-.253l-4.134-4.134c-.338-.338-.338-.886 0-1.224s.886-.338 1.224 0l3.522 3.521 3.523-3.521c.336-.338.886-.338 1.224 0s .337.886-.001 1.224l-4.135 4.134c-.168.169-.39.253-.611.253z"/></g></svg>';
var DUPLICATE = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="#004990" viewBox="0 0 30 30"><circle cx="15" cy="15" r="15" fill="#f7f8f9"/><g transform="translate(6, 5)"><path d="M4 5h7v1H4V5m0 3h7v1H4V8m0 3h7v1H4v-1"/><path d="M15 1c.009-.525.066-1-1-1H1.002c-.651 0-1 .33-1 1v15c0 .66.351 1 1 1H3v2c.075.546.383 1 1 1h13c.718 0 1-.295 1-1V3c.001-.468-.406-.99-1-1h-2V1M2 15V2h11v13H2m14 3H5v-.995L14 17c.5.005.976-.428 1-1l.021-12H16v14"/></g></svg>';
var SEARCH = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="#004990" viewBox="0 0 25 25"><circle cx="12.5" cy="12.5" r="12.5" fill="#f7f8f9"/><g transform="translate(5, 5)"><path d="M2.01 6.03a4.025 4.025 0 0 1 4.02-4.02 4.025 4.025 0 0 1 4.02 4.02 4.025 4.025 0 0 1-4.02 4.02 4.024 4.024 0 0 1-4.02-4.02m12.696 7.256l-3.769-3.768a5.991 5.991 0 0 0 1.12-3.487 6.036 6.036 0 0 0-6.03-6.03 6.036 6.036 0 0 0-6.03 6.03 6.036 6.036 0 0 0 6.03 6.03c1.3 0 2.502-.418 3.487-1.12l3.769 3.769a1.001 1.001 0 0 0 1.42 0 1.005 1.005 0 0 0 0-1.422"/></g></svg>';
var VIEW = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="#004990" viewBox="0 0 800 800"><circle cx="400" cy="400" r="400" fill="#f7f8f9"/><g transform="translate(112, 144)"><path d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"/></g></svg>';
var DOT = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="#004990" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#f7f8f9"/><circle cx="5" cy="5" r="3"/></svg>';
var PAPER_CLIP = '<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 75" enable-background="new 0 0 80 75" xml:space="preserve"><path d="M73.844,6.458c-8.208-8.611-21.558-8.611-29.766,0L4.389,48.092c-5.853,6.14-5.853,16.164,0,22.304&#xA;&#x9;&#x9;&#x9;c5.853,6.14,15.409,6.14,21.262,0l39.688-41.634c3.497-3.668,3.497-9.714,0-13.382c-3.497-3.668-9.26-3.668-12.757,0&#xA;&#x9;&#x9;&#x9;L18.564,51.065c-0.777,0.793-1.088,1.964-0.812,3.064c0.276,1.1,1.095,1.959,2.143,2.249c1.049,0.289,2.165-0.036,2.921-0.852&#xA;&#x9;&#x9;&#x9;L56.835,19.84c1.215-1.274,3.038-1.274,4.252,0c1.215,1.274,1.215,3.187,0,4.461L21.399,65.935c-3.571,3.745-9.187,3.745-12.757,0&#xA;&#x9;&#x9;&#x9;c-3.57-3.745-3.57-9.637,0-13.382L48.33,10.919c5.926-6.217,15.335-6.217,21.262,0c5.926,6.217,5.926,16.087,0,22.304&#xA;&#x9;&#x9;&#x9;L35.573,68.908c-0.778,0.793-1.089,1.964-0.814,3.065c0.276,1.101,1.095,1.96,2.145,2.25c1.049,0.289,2.166-0.037,2.922-0.854&#xA;&#x9;&#x9;&#x9;l34.018-35.686C82.052,29.072,82.052,15.069,73.844,6.458z"/></svg>';
var USER = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 15 15"><path d="M 7.5,15 A 7.5,7.5 0 1 1 15,7.5 7.5,7.5 0 0 1 7.5,15 Z M 7.5,1 A 6.5,6.5 0 1 0 14,7.5 6.51,6.51 0 0 0 7.5,1 Z"/><path d="M 3.39,12.5 A 6.48,6.48 0 0 0 11.5,12.6 7.08,7.08 0 0 0 8.98,11.6 8,8 0 0 1 8.6,10.25 4,4 0 0 0 11,6.5 3.78,3.78 0 0 0 7.5,2.5 3.78,3.78 0 0 0 4,6.5 4,4 0 0 0 6.37,10.29 8.25,8.25 0 0 1 6.01,11.61 7.2,7.2 0 0 0 3.39,12.5 Z"/></svg>';
var WAIT = '<svg enable-background="new 0 0 18 18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g><path d="m16.76 8.051c-.448 0-.855-.303-.969-.757-.78-3.117-3.573-5.294-6.791-5.294s-6.01 2.177-6.79 5.294c-.134.537-.679.861-1.213.727-.536-.134-.861-.677-.728-1.212 1.004-4.009 4.594-6.809 8.731-6.809 4.138 0 7.728 2.8 8.73 6.809.135.536-.191 1.079-.727 1.213-.081.02-.162.029-.243.029z"/><path d="m9 18c-4.238 0-7.943-3.007-8.809-7.149-.113-.541.234-1.071.774-1.184.541-.112 1.071.232 1.184.773.674 3.222 3.555 5.56 6.851 5.56s6.178-2.338 6.852-5.56c.113-.539.634-.892 1.184-.773.54.112.887.643.773 1.184-.866 4.142-4.57 7.149-8.809 7.149z"/></g></svg>';
var COPY_PASTE = '<svg width=".5em" height=".5em" viewBox="0 0 20 20"><path d="M4 5h7v1H4V5m0 3h7v1H4V8m0 3h7v1H4v-1"/><path d="M15 1c.009-.525.066-1-1-1H1.002c-.651 0-1 .33-1 1v15c0 .66.351 1 1 1H3v2c.075.546.383 1 1 1h13c.718 0 1-.295 1-1V3c.001-.468-.406-.99-1-1h-2V1M2 15V2h11v13H2m14 3H5v-.995L14 17c.5.005.976-.428 1-1l.021-12H16v14"/></svg>';
var arrowDown = ARROW_DOWN;
var duplicate = DUPLICATE;
var search = SEARCH;
var view = VIEW;
var dot = DOT;
var paperclipIcon = PAPER_CLIP;
var user = USER;
var wait = WAIT;
var copy = COPY_PASTE;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Translation; });
var Translation = /** @class */ (function () {
    function Translation() {
    }
    Translation.merge = function (language, values) {
        Object.keys(values)
            .filter(function (key) { return typeof values[key][language] === 'string'; })
            .forEach(function (key) {
            String['locales'] = String['locales'] || {};
            String['locales'][language] = String['locales'][language] || {};
            String['locales'][language][key] = values[key][language];
        });
    };
    Translation.register = function (language, values) {
        Translation.merge(language, values);
        String['toLocaleString'].call(this, { en: String['locales']['en'] });
    };
    return Translation;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSalesforceContext; });
function getSalesforceContext() {
    return window['SalesforceContext'];
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserActionEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActionCause; });
var UserActionEvents = /** @class */ (function () {
    function UserActionEvents() {
    }
    UserActionEvents.enterOnSearchbox = 'enterOnSearchbox';
    UserActionEvents.quickviewLoaded = 'quickviewLoaded';
    UserActionEvents.openQuickview = 'openQuickview';
    UserActionEvents.attachToCase = 'attachToCase';
    UserActionEvents.detachFromCase = 'detachFromCase';
    UserActionEvents.attachedResultChange = 'attachedResultChange';
    UserActionEvents.attachToCaseStateChanged = 'attachToCaseStateChanged';
    UserActionEvents.sendAsEmail = 'sendAsEmail';
    UserActionEvents.postToFeed = 'postToFeed';
    UserActionEvents.sendToLiveAgent = 'sendToLiveAgent';
    return UserActionEvents;
}());

var UserActionCause = /** @class */ (function () {
    function UserActionCause() {
    }
    UserActionCause.sendAsEmail = {
        name: UserActionEvents.sendAsEmail,
        type: 'resultAction',
    };
    UserActionCause.postToFeed = {
        name: UserActionEvents.postToFeed,
        type: 'resultAction',
    };
    UserActionCause.sendToLiveAgent = {
        name: UserActionEvents.sendToLiveAgent,
        type: 'resultAction',
    };
    return UserActionCause;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Translation; });
/**
 * Supported languages.
 */
var Language;
(function (Language) {
    Language["English"] = "en";
})(Language || (Language = {}));
/**
 * Translation utilities.
 */
var Translation = /** @class */ (function () {
    function Translation() {
    }
    /**
     * Register translations for a language.
     *
     * @param language Language of the dictionary.
     * @param translationDictionary Key-Value dictionary that contain all traslation for a language.
     */
    Translation.register = function (language, translationDictionary) {
        var _a;
        Object.keys(translationDictionary).forEach(function (key) {
            String['locales'] = String['locales'] || {};
            String['locales'][language] = String['locales'][language] || {};
            String['locales'][language][key] = translationDictionary[key];
        });
        String['toLocaleString'].call(this, (_a = {}, _a[language] = String['locales'][language], _a));
    };
    return Translation;
}());




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultActionsEvents; });
var ResultActionsEvents = /** @class */ (function () {
    function ResultActionsEvents() {
    }
    ResultActionsEvents.onPostToFeed = 'ResultActionsEvents.onPostToFeed';
    ResultActionsEvents.onSendAsEmail = 'ResultActionsEvents.onSendAsEmail';
    ResultActionsEvents.onSendToLiveAgent = 'ResultActionsEvents.onSendToLiveAgent';
    ResultActionsEvents.onChatEnded = 'ResultActionsEvents.onChatEnded';
    ResultActionsEvents.onTabFocused = 'ResultActionsEvents.onTabFocused';
    return ResultActionsEvents;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesforceResultLink; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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


/*
 * This class is, as it's name implied, used only in the salesforce integration to handle
 * results link that can be opened in the console correctly.
 * When the page is created in salesforce (interface editor) all CoveoResultLink are replaced with CoveoSalesforceResultLink.
 */
/**
 * The _SalesforceResultLink_ component is used to open result links as Salesforce tabs.
 *
 * It inherits from the [ResultLink Component](https://coveo.github.io/search-ui/components/resultlink.html).
 *
 * ```html
 * <a class='CoveoSalesforceResultLink'></a>
 * ```
 */
var SalesforceResultLink = /** @class */ (function (_super) {
    __extends(SalesforceResultLink, _super);
    function SalesforceResultLink(element, options, bindings, result) {
        var _this = _super.call(this, element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, SalesforceResultLink, options), bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        return _this;
    }
    SalesforceResultLink.prototype.bindEventToOpen = function () {
        var _this = this;
        if (utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceUtilities */ "c"].isInSalesforceConsole()) {
            var eventWasBinded = false;
            // Note: For Salesforce Tabs to work, check that your Domains are whitelisted in your App's "Whitelist Domains" section.
            if (this.options.openInPrimaryTab) {
                Coveo.$$(this.element).on('click', function () {
                    utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceUtilities */ "c"].focusOrOpenTab(decodeURIComponent(_this.result.clickUri), _this.result.title, true);
                });
                eventWasBinded = true;
            }
            else if (this.options.openInSubTab) {
                Coveo.$$(this.element).on('click', function () {
                    utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceUtilities */ "c"].focusOrOpenTab(decodeURIComponent(_this.result.clickUri), _this.result.title, false);
                });
                eventWasBinded = true;
            }
            if (!eventWasBinded) {
                eventWasBinded = _super.prototype.bindEventToOpen.call(this);
            }
            return eventWasBinded;
            /*
             * Bind lightning aura actions instead of redirecting to another URL.
             * If we want to open in a new window, it will use the ResultLink logic to open it.
             */
        }
        else if (utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceUtilities */ "c"].isInLightning() && this.areOptionsSupportedInLightning()) {
            this.bindEventToOpenInLightning();
        }
        else {
            // Fallback on the result link logic.
            return _super.prototype.bindEventToOpen.call(this);
        }
    };
    SalesforceResultLink.prototype.areOptionsSupportedInLightning = function () {
        // Those options are not supported in lightning. Fallback on the ResultLink.
        return !this.options.alwaysOpenInNewWindow && !this.options.openInOutlook && !this.options.openQuickview;
    };
    SalesforceResultLink.prototype.bindEventToOpenInLightning = function () {
        var _this = this;
        Coveo.$$(this.element).on('click', function () {
            // Create the lightning event.
            var auraClickEvent = _this.createLightningClickEvent();
            coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotNull(auraClickEvent);
            // Fire the aura event.
            auraClickEvent.fire();
        });
    };
    SalesforceResultLink.prototype.createLightningClickEvent = function () {
        var auraClickEvent;
        // If the result is a Salesforce object, we'll use the navigateToSObject action.
        if (this.result.raw.sfid !== undefined) {
            // Is any other Salesforce objects.
            auraClickEvent = $A.get('e.force:navigateToSObject');
            auraClickEvent.setParams({
                recordId: this.getIdForNavigateToSObject(),
            });
        }
        else {
            // Is non salesforce items.
            auraClickEvent = $A.get('e.force:navigateToURL');
            auraClickEvent.setParams({
                url: this.result.clickUri,
            });
        }
        return auraClickEvent;
    };
    SalesforceResultLink.prototype.getIdForNavigateToSObject = function () {
        var idToUse = this.result.raw.sfid;
        // Knowledge article uses the knowledge article version id to navigate.
        if (this.result.raw.sfkbid !== undefined && this.result.raw.sfkavid !== undefined) {
            idToUse = this.result.raw.sfkavid;
        }
        return idToUse;
    };
    SalesforceResultLink.ID = 'SalesforceResultLink';
    /**
     * The possible options for SalesforceResultLink
     * @componentOptions
     */
    SalesforceResultLink.options = {
        /**
         * Specifies that the result link should try to open as a primary console tab. If it fails, it instead opens in a new browser tab.
         *
         * Default is `true`.
         *
         * ```html
         * <a class='CoveoSalesforceResultLink' data-open-in-primary-tab='true'/>
         * ```
         */
        openInPrimaryTab: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies that the result link should try to open as a secondary console tab. If it fails, it instead opens in a new browser tab.
         *
         * Default is `false`.
         *
         * ```html
         * <a class='CoveoSalesforceResultLink' data-open-in-sub-tab='true'/>
         * ```
         */
        openInSubTab: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
    };
    return SalesforceResultLink;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultLink"]));

// The options are extended here to ensure TypeDoc builds the documentation properly.
SalesforceResultLink.options = _.extend({}, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultLink"].options, SalesforceResultLink.options);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(SalesforceResultLink);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerComponentFields(SalesforceResultLink.ID, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].getRegisteredFieldsComponentForQuery(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultLink"].ID).concat(['sfid', 'sfkbid', 'sfkavid']));


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isKnowledgeArticleToAttach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isAttached; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getExpressions; });
/* unused harmony export handleAttachToCaseEvent */
/* unused harmony export handleDetachFromCase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createResultToAttach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return handleEndpointDataPromise; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


/**
 * Check if a given result is a Knowledge Article.
 * @param result {ResultToAttach} the result to check.
 */
function isKnowledgeArticleToAttach(result) {
    return (result.knowledgeArticleId !== undefined &&
        result.knowledgeArticleId !== null &&
        result.articleLanguage !== undefined &&
        result.articleLanguage !== null);
}
/**
 * Checks if a result is attached from the list of attachedResults
 * @param attachedResults The list of ResultToAttach
 * @param result The result
 */
function isAttached(attachedResults, result) {
    var attached = function (r) {
        // Has the same uriHash
        return (r === null || r === void 0 ? void 0 : r.uriHash) === (result === null || result === void 0 ? void 0 : result.raw.urihash) ||
            // Or has the same kbid and kblang
            ((result === null || result === void 0 ? void 0 : result.raw.sfkbid) !== undefined && (r === null || r === void 0 ? void 0 : r.knowledgeArticleId) === (result === null || result === void 0 ? void 0 : result.raw.sfkbid) && (r === null || r === void 0 ? void 0 : r.articleLanguage) === (result === null || result === void 0 ? void 0 : result.raw.sflanguage));
    };
    return (attachedResults === null || attachedResults === void 0 ? void 0 : attachedResults.filter(attached)[0]) !== undefined;
}
/**
 * Return the filtering expression to show only attached results.
 */
function getExpressions(attachedResults) {
    if (!(attachedResults === null || attachedResults === void 0 ? void 0 : attachedResults.length))
        return 'NOT @uri';
    var builder = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ExpressionBuilder"]();
    var _a = attachedResults.reduce(splitDocumentsFromArticles, { articles: [], sysurihashs: [] }), articles = _a.articles, sysurihashs = _a.sysurihashs;
    addDocumentsExpression(builder, sysurihashs);
    addKnowledgeArticlesExpression(builder, articles);
    return builder.build(' OR ');
}
/**
 * Store the result in either `articles` or `sysurihashs`.
 * @param accumulator Storage object.
 * @param result The result to store.
 */
function splitDocumentsFromArticles(accumulator, result) {
    if (result.uriHash) {
        accumulator.sysurihashs.push(result.uriHash);
    }
    else if (result.knowledgeArticleId) {
        accumulator.articles.push({ sfkbid: result.knowledgeArticleId, sflang: result.articleLanguage });
    }
    return accumulator;
}
/**
 * Include knowledge articles from the current org.
 * @param builder An expression builder
 * @param articles knowledge articles from the current org to include.
 */
function addKnowledgeArticlesExpression(builder, articles) {
    if (articles.length > 0) {
        builder.add(articles.map(function (kb) { return "(@sfkbid=" + kb.sfkbid + " AND @sflanguage=" + kb.sflang + ")"; }).join(' OR '));
    }
}
/**
 * Include document that are not knowledge articles from the current org.
 * @param builder An expression builder
 * @param documentsUriHashes uri hashes of documents to include.
 * @param articles knowledge articles to exclude from the documents to include.
 */
function addDocumentsExpression(builder, documentsUriHashes) {
    if (documentsUriHashes.length > 0) {
        builder.add("@urihash==(" + documentsUriHashes.join(',') + ")");
    }
}
/**
 * Handle incoming AttachToCase events from other components
 *
 * @param endpoint The local attachToCaseEndpoint
 * @param args The AttachToCase event argument
 * @param onChange A function to be called if the state changed
 */
function handleAttachToCaseEvent(endpoint, args, onChange) {
    if (endpoint && modules_search_ts__WEBPACK_IMPORTED_MODULE_1__[/* Id */ "a"].equal(endpoint.caseId, args.dataToAttach.caseId)) {
        var data = endpoint.data;
        var hasModification = false;
        if (data.succeeded) {
            // Add the document ID to our list of attached results since it was attached elsewhere.
            if (data.attachedResults.indexOf(args.dataToAttach) === -1) {
                data.attachedResults.push(args.dataToAttach);
                hasModification = true;
            }
        }
        if (hasModification) {
            onChange(data);
        }
    }
}
/**
 * Handle incoming DetachFromCase events from other components
 *
 * @param endpoint The local attachToCaseEndpoint
 * @param args The DetachFromCase event arguments
 * @param onChange A function to be called if the state changed
 */
function handleDetachFromCase(endpoint, args, onChange) {
    if (endpoint && endpoint.caseId == args.caseId) {
        var data = endpoint.data;
        var hasModification = false;
        if (data.succeeded) {
            // Remove the document ID to our list of attached results since it was detached elsewhere.
            var urihashs = data.attachedResults.map(function (a) { return a.uriHash; });
            if (urihashs.indexOf(args.result.raw.urihash) > -1) {
                data.attachedResults.splice(urihashs.indexOf(args.result.raw.urihash), 1);
                hasModification = true;
            }
            // Remove the article ID to our list of attached results since it was detached elsewhere.
            var kbid = args.result.raw.sfkbid;
            var sfkbids = data.attachedResults.map(function (a) { return a.knowledgeArticleId; });
            if (kbid && sfkbids.indexOf(kbid) > -1) {
                data.attachedResults.splice(sfkbids.indexOf(kbid), 1);
                hasModification = true;
            }
        }
        if (hasModification) {
            onChange(data);
        }
    }
}
/**
 * Creates a "ResultToAttach" object from a Result
 * @param result The result
 */
function createResultToAttach(result, caseId) {
    return {
        resultUrl: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["StringAndHoles"].shortenString(result.clickUri, 250, '...').value,
        source: result.raw.source,
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["StringAndHoles"].shortenString(result.title, 250, '...').value,
        name: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["StringAndHoles"].shortenString(result.title, 80, '...').value,
        uriHash: result.raw.urihash,
        knowledgeArticleId: result.raw.sfkbid,
        articleLanguage: result.raw.sflanguage,
        articleVersionNumber: result.raw.sfversionnumber,
        articlePublishStatus: result.raw.sfpublishstatus,
        caseId: caseId,
        customs: {},
    };
}
/**
 * Handle the data promise resolution.
 *
 * @param endpoint The local endpoint
 */
function handleEndpointDataPromise(endpoint) {
    var dataPromise = endpoint.data;
    var data = endpoint.data;
    if (dataPromise && dataPromise.then) {
        return dataPromise.then(function (d) {
            endpoint.data = d;
            return d;
        });
    }
    else if (data && data.succeeded) {
        return Promise.resolve(data);
    }
}


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileModel; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UserActions_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * Represent an action that a user has made.
 */
var UserAction = /** @class */ (function () {
    function UserAction(type, timestamp, raw, document, query) {
        this.type = type;
        this.timestamp = timestamp;
        this.raw = raw;
        this.document = document;
        this.query = query;
    }
    return UserAction;
}());

/**
 * Model that store each user profile informations such as actions made by them,
 */
var UserProfileModel = /** @class */ (function (_super) {
    __extends(UserProfileModel, _super);
    /**
     * Create a `UserProfileModel` and bound it to `element`.
     * Also create a `UserProfilingEndpoint` that will be use to fetch actions made by a user.
     *
     * @param element An element on which the model will be bound on.
     * @param options A set of options necessary for the component creation.
     */
    function UserProfileModel(element, options) {
        var _this = _super.call(this, element, UserProfileModel.ID, {}) || this;
        _this.options = options;
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(_this.options.restUri);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(_this.options.organizationId);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(_this.options.searchEndpoint);
        _this.getOrFetchCache = {};
        _this.endpoint = new _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__[/* UserProfilingEndpoint */ "b"]({
            uri: _this.options.restUri,
            accessToken: _this.options.accessToken || _this.options.searchEndpoint.accessToken,
            organization: _this.options.organizationId,
        });
        return _this;
    }
    /**
     * Get all actions related to a user.
     *
     * @param userId The identifier of a user.
     */
    UserProfileModel.prototype.getActions = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        actions = this.get(userId);
                        if (!Array.isArray(actions)) return [3 /*break*/, 1];
                        _f = actions;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.fetchActions(userId)];
                    case 2:
                        _f = _g.sent();
                        _g.label = 3;
                    case 3:
                        actions = _f;
                        this.set(userId, actions, UserProfileModel.MODEL_CONFIG);
                        return [2 /*return*/, actions];
                }
            });
        });
    };
    /**
     * Delete all actions related to a user from the model.
     *
     * @param userId The identifier of a user.
     */
    UserProfileModel.prototype.deleteActions = function (userId) {
        this.set(userId, undefined, UserProfileModel.MODEL_CONFIG);
        this.getOrFetchCache[userId] = undefined;
    };
    UserProfileModel.prototype.fetchActions = function (userId) {
        var _this = this;
        var pendingFetch = this.getOrFetchCache[userId];
        var doFetch = function () {
            _this.getOrFetchCache[userId] = _this.endpoint.getActions(userId).then(function (actions) { return _this.parseGetActionsResponse(userId, actions); });
            return _this.getOrFetchCache[userId];
        };
        return pendingFetch || doFetch();
    };
    UserProfileModel.prototype.parseGetActionsResponse = function (userId, actions) {
        var userActions = this.buildUserActions(actions);
        this.registerNewAttribute(userId, userActions);
        return userActions;
    };
    UserProfileModel.prototype.fetchDocuments = function (urihashes) {
        return __awaiter(this, void 0, void 0, function () {
            var builder, query, searchRequest, documentsDict;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (urihashes.length === 0) {
                            return [2 /*return*/, Promise.resolve({})];
                        }
                        builder = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryBuilder"]();
                        builder.advancedExpression.addFieldExpression('@urihash', '==', urihashes.filter(function (x) { return x; }));
                        // Ensure we fetch the good amount of document.
                        builder.numberOfResults = urihashes.length;
                        query = builder.build();
                        return [4 /*yield*/, this.options.searchEndpoint.search(query)];
                    case 1:
                        searchRequest = _f.sent();
                        // Here we directly send the event using the Analytics Endpoint to prevent any unwanted side effects.
                        this.sendUserActionLoad(query, searchRequest);
                        documentsDict = searchRequest.results.reduce(function (acc, result) {
                            var _f;
                            return (Object.assign(Object.assign({}, acc), (_f = {}, _f[result.raw.urihash] = result, _f)));
                        }, {});
                        return [2 /*return*/, documentsDict];
                }
            });
        });
    };
    UserProfileModel.prototype.buildUserActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var documents, urihashes, error_1;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        documents = {};
                        urihashes = actions
                            .filter(this.isClick)
                            .map(function (action) { return action.value.uri_hash; })
                            // Remove duplicates.
                            .filter(function (value, index, list) { return list.indexOf(value) === index; });
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fetchDocuments(urihashes)];
                    case 2:
                        documents = _f.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _f.sent();
                        console.log(error_1);
                        this.logger.error(UserProfileModel.ERROR_MESSAGE.FETCH_CLICKED_DOCUMENT_FAIL, error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, actions.map(function (action) {
                            return new UserAction(action.name, new Date(action.time), action.value, _this.isClickOrView(action) ? documents[action.value.uri_hash] : undefined, _this.isSearch(action) ? action.value.query_expression : undefined);
                        })];
                }
            });
        });
    };
    UserProfileModel.prototype.isClick = function (action) {
        return action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__[/* UserActionType */ "a"].Click;
    };
    UserProfileModel.prototype.isClickOrView = function (action) {
        return this.isClick(action) || action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__[/* UserActionType */ "a"].PageView;
    };
    UserProfileModel.prototype.isSearch = function (action) {
        return action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__[/* UserActionType */ "a"].Search;
    };
    UserProfileModel.prototype.sendUserActionLoad = function (query, result) {
        var _a, _b, _c, _d, _e;
        var uaClient = (_a = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].get(this.element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"], true)) === null || _a === void 0 ? void 0 : _a.usageAnalytics;
        (_b = uaClient) === null || _b === void 0 ? void 0 : _b.logSearchEvent(_components_UserActions_Events__WEBPACK_IMPORTED_MODULE_1__[/* UserActionEvents */ "a"].load, {});
        (_c = uaClient) === null || _c === void 0 ? void 0 : _c.endpoint.sendSearchEvents([
            Object.assign(Object.assign({}, uaClient.getPendingSearchEvent().templateSearchEvent), {
                queryPipeline: result.pipeline,
                splitTestRunName: result.splitTestRun,
                splitTestRunVersion: result.splitTestRun ? result.pipeline : undefined,
                queryText: (_d = query.q, (_d !== null && _d !== void 0 ? _d : '')),
                advancedQuery: (_e = query.aq, (_e !== null && _e !== void 0 ? _e : '')),
                didYouMean: query.enableDidYouMean,
                numberOfResults: result.totalCount,
                responseTime: result.duration,
                pageNumber: query.firstResult / query.numberOfResults,
                resultsPerPage: query.numberOfResults,
                searchQueryUid: result.searchUid,
                contextual: false,
            }),
        ]);
    };
    return UserProfileModel;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Model"]));

/**
 * Identifier of the Search-UI component.
 */
UserProfileModel.ID = 'UserProfileModel';
UserProfileModel.ERROR_MESSAGE = Object.freeze({
    FETCH_CLICKED_DOCUMENT_FAIL: 'Fetching clicked documents details failed',
});
UserProfileModel.MODEL_CONFIG = {
    customAttribute: true,
    silent: true,
};
/**
 * Expose the UserProfileModel so a user action implementation can use it.
 */
window['Coveo'] && (window['Coveo']['UserProfileModel'] = UserProfileModel);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USER_ACTION_EVENT_TYPE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActionEvents; });
var USER_ACTION_EVENT_TYPE = 'User Actions';
var UserActionEvents = /** @class */ (function () {
    function UserActionEvents() {
    }
    return UserActionEvents;
}());

UserActionEvents.load = Object.freeze({
    name: 'userActionLoad',
    type: USER_ACTION_EVENT_TYPE,
});
UserActionEvents.submit = Object.freeze({
    name: 'userActionsSubmit',
    type: USER_ACTION_EVENT_TYPE,
});
UserActionEvents.open = Object.freeze({
    name: 'openUserActions',
    type: USER_ACTION_EVENT_TYPE,
});



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultAction; });
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
 * The base class for all ResultAction components.
 * Its main responsibility is handling the visual elements of the Result Action.
 */
var ResultAction = /** @class */ (function (_super) {
    __extends(ResultAction, _super);
    /**
     * Construct a ResultAction component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     * @param queryResult The result of the query in which this resultAction exists.
     */
    function ResultAction(element, options, bindings, queryResult) {
        var _this = _super.call(this, element, ResultAction.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.queryResult = queryResult;
        _this.isInitialized = false;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ResultAction, options);
        _this.queryResult = _this.queryResult || _this.resolveResult();
        // Hide until initialized.
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).addClass('coveo-hidden');
        _this.bind.on(_this.element, 'click', function () { return _this.doAction(); });
        return _this;
    }
    /**
     * Initializes the component if it is not already initialized.
     */
    ResultAction.prototype.init = function () {
        if (!this.isInitialized) {
            this.show();
            this.isInitialized = true;
        }
        else {
            this.logger.debug('Attempted to initialize ResultAction that was already initialized.');
        }
    };
    /**
     * Deactivate the component if it is initialized.
     * @param e The reason for the deactivation.
     */
    ResultAction.prototype.deactivate = function (e) {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).remove();
        this.logger.warn(e);
        this.isInitialized = false;
    };
    /**
     * Make the result action button visible.
     */
    ResultAction.prototype.show = function () {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).removeClass('coveo-hidden');
        if (this.options.icon) {
            var icon = document.createElement('span');
            icon.innerHTML = this.options.icon;
            icon.className = 'coveo-icon';
            this.element.appendChild(icon);
        }
        if (this.options.tooltip) {
            var tooltip = document.createElement('span');
            tooltip.innerText = this.options.tooltip;
            tooltip.className = 'coveo-caption-for-icon';
            this.element.appendChild(tooltip);
        }
    };
    /**
     * Make the result action button invisible.
     */
    ResultAction.prototype.hide = function () {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).addClass('coveo-hidden');
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element)
            .children()
            .forEach(function (el) { return el.remove(); });
    };
    ResultAction.ID = 'ResultAction';
    /**
     * The possible options for _ResultAction_.
     * @componentOptions
     */
    ResultAction.options = {
        /**
         * See {@link IResultActionOptions.icon}
         * Optional. You may instead provide the icon by appending it as a child element.
         */
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * See {@link IResultActionOptions.tooltip}
         * Optional. If no tooltip is provided, the tooltip popup will not appear.
         */
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
    };
    return ResultAction;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachToCase; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _common_ts_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var modules_common_ts_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var utils_Translation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34);
var _strings_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(34, 1);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
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








// Enforce the use of strings.json as a JSON object and not an ESM (see SFINT-2703).
var strings = _strings_json__WEBPACK_IMPORTED_MODULE_6__ ? _strings_json__WEBPACK_IMPORTED_MODULE_6__ : _strings_json__WEBPACK_IMPORTED_MODULE_6___namespace;
/**
 * The _AttachToCase_ component is a Result Templates component that allows you to link a result to a Salesforce case.
 *
 * **Note:**
 * > When wanting to attach Knowledge articles, ensure that the `sfkbid`, `sfkbversionnumber` (legacy), `sfversionnumber` (express), and `sflanguage` fields are properly populated on the article
 * (see [Add/Edit Mapping](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=285) for Cloud V2 and [Managing Fields for a Source](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=190) for Cloud V1).
 *
 * ```html
 * <div class="CoveoAttachToCase"></div>
 * ```
 */
var AttachToCase = /** @class */ (function (_super) {
    __extends(AttachToCase, _super);
    function AttachToCase(element, options, bindings, result) {
        var _this = _super.call(this, element, AttachToCase.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, AttachToCase, options);
        _this.result = _this.result || _this.resolveResult();
        _this.searchInterface = _this.searchInterface || _this.resolveSearchInterface();
        _this.attached = false;
        _this.loading = false;
        _this.initialized = false;
        _this.attachedResults = [];
        var attachToCaseEndpoint = _this.options.attachToCaseEndpoint();
        if (attachToCaseEndpoint != null) {
            _this.setAttachToCaseEndpoint(attachToCaseEndpoint);
        }
        else {
            _this.logger.warn('No endpoint detected, make sure to set one using the SetAttachToCaseEndpoint method.');
            Coveo.$$(_this.element).remove();
        }
        return _this;
    }
    AttachToCase.prototype.initialize = function () {
        var _this = this;
        if (this.attachToCaseEndpoint != null) {
            // AttachToCaseEndpoint.data can either be a promise or just the data.
            var attachToCaseEndpointPromise = this.attachToCaseEndpoint.data;
            if (attachToCaseEndpointPromise.then) {
                // If the data is a promise, set state to loading, render button and wait for Promise competion.
                this.loading = true;
                attachToCaseEndpointPromise
                    .then(function (data) {
                    _this.attachToCaseEndpoint.data = data;
                    _this.handleData(_this.attachToCaseEndpoint.data);
                    _this.initialized = true;
                    _this.loading = false;
                    _this.updateButton();
                })
                    .catch(function (error) {
                    _this.logger.error('An error occured while getting attached results', error.message);
                });
            }
            else {
                this.attachToCaseEndpoint.data = this.attachToCaseEndpoint.data;
                if (this.attachToCaseEndpoint.data.succeeded) {
                    this.handleData(this.attachToCaseEndpoint.data);
                    this.initialized = true;
                }
                else {
                    this.logger.error('An error occured while getting attached results', this.attachToCaseEndpoint.data.message);
                }
            }
            this.bind.on(window, modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_1__[/* UserActionEvents */ "b"].attachedResultChange, function (args) {
                return _this.handleAttachedResultChangeEvent(args);
            });
            this.bind.onRootElement(modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_1__[/* UserActionEvents */ "b"].attachToCaseStateChanged, function (arg) {
                return _this.handleStateChanged(arg);
            });
            this.renderButton();
        }
        else {
            this.logger.warn('No endpoint detected, make sure to set one using the SetAttachToCaseEndpoint method.');
        }
    };
    /**
     * Attaches the result to the current Case.
     *
     * ```js
     * $('#myAttachToCase').coveo('attach')
     * ```
     */
    AttachToCase.prototype.attach = function () {
        var _this = this;
        if (this.isAttached() && this.initialized && !this.loading) {
            return;
        }
        this.loading = true;
        this.updateButton();
        // Check for empty *attachedResultRecord* fields ( Note: caseId comes from !{caseId} in AttachToCase.component )
        var requiredFields = ['uriHash', 'source'];
        var requiredFieldsMissing = [];
        // Temporary variable so we don't modify *this.result.raw.sfkbversionnumber*
        var actualSfkbVersionNumber = this.result.raw.sfkbversionnumber || this.result.raw.sfversionnumber;
        // If we have an article ... also check articleLanguage and articleVersionNumber
        if (this.result.raw.sfkbid && actualSfkbVersionNumber) {
            requiredFields.push('articleLanguage');
            // Make sure *sfkbversionnumber* is a Number
            actualSfkbVersionNumber = Number(actualSfkbVersionNumber);
            if (_.isNaN(actualSfkbVersionNumber)) {
                var errorMessage = 'The field sfkbversionnumber is not a valid Number.';
                this.logger.error(errorMessage);
                this.displayModalBoxHelper(errorMessage);
                return;
            }
        }
        // If there is no clickUri we fallback on the uri.
        if (!this.result.clickUri) {
            this.result.clickUri = this.result.uri;
        }
        // If there is no title we fallback on the clickUri
        if (!this.result.title) {
            this.result.title = this.result.clickUri;
        }
        var resultToAttach = Object(_AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_3__[/* createResultToAttach */ "a"])(this.result, this.attachToCaseEndpoint.caseId);
        // Check fields for empty values
        requiredFields.forEach(function (field) {
            if (_.isEmpty(resultToAttach[field])) {
                requiredFieldsMissing.push(field);
            }
        });
        // If we have missing fields, show error + abort attach()
        if (requiredFieldsMissing.length > 0) {
            var errorMessage = "You're missing the " + requiredFieldsMissing.join(', ') + ' field(s).';
            this.logger.error(errorMessage);
            this.displayModalBoxHelper(errorMessage);
            return;
        }
        var args = {
            result: this.result,
            dataToAttach: resultToAttach,
        };
        Coveo.$$(window).trigger(modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_1__[/* UserActionEvents */ "b"].attachToCase, args);
        this.logger.info('Attaching result to case', args);
        this.attachToCaseEndpoint.attachToCase(args.dataToAttach, function (arg) { return _this.handleAttachCallback(arg); });
    };
    /**
     * Detaches the result from the current Case.
     *
     * ```js
     * $('#myAttachToCase').coveo('detach')
     * ```
     */
    AttachToCase.prototype.detach = function () {
        var _this = this;
        if (!this.isAttached() && this.initialized && !this.loading) {
            return false;
        }
        this.loading = true;
        this.updateButton();
        var args = {
            result: this.result,
            caseId: this.attachToCaseEndpoint.caseId,
        };
        Coveo.$$(window).trigger(modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_1__[/* UserActionEvents */ "b"].detachFromCase, args);
        this.logger.info('Detaching result from case', args);
        this.attachToCaseEndpoint.detachFromCase(this.result.raw.urihash, this.result.raw.sfkbid, this.attachToCaseEndpoint.caseId, function (arg) { return _this.handleDetachCallback(arg); });
    };
    AttachToCase.prototype.setAttachToCaseEndpoint = function (endpoint) {
        if (endpoint != null) {
            this.attachToCaseEndpoint = endpoint;
            this.initialize();
        }
    };
    /**
     * Returns whether or not the result is attached.
     *
     * ```js
     * $('#myAttachToCase').coveo('isAttached')
     * ```
     */
    AttachToCase.prototype.isAttached = function () {
        return this.attached;
    };
    AttachToCase.prototype.handleClick = function () {
        if (!this.loading) {
            this.isAttached() ? this.detach() : this.attach();
        }
    };
    AttachToCase.prototype.handleData = function (arg) {
        this.attachedResults = arg.attachedResults;
        this.attached = Object(_AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_3__[/* isAttached */ "d"])(this.attachedResults, this.result);
    };
    AttachToCase.prototype.getCustomMetadata = function () {
        var _a;
        return _a = {},
            _a[this.options.recordType === 'Case' ? 'caseID' : 'recordID'] = this.attachToCaseEndpoint.caseId,
            _a.articleID = this.result.raw.sfkbid,
            _a.resultUriHash = this.result.raw.urihash,
            _a.author = this.result.raw.author,
            _a;
    };
    AttachToCase.prototype.getActionCause = function (causeName) {
        if (this.options.recordType !== 'Case') {
            return {
                name: causeName,
                type: this.options.recordType.toLowerCase(),
            };
        }
        return causeName === 'attach' ? coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseAttach : coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseDetach;
    };
    AttachToCase.prototype.handleAttachCallback = function (arg) {
        if (arg != null) {
            if (arg.succeeded) {
                this.attached = true;
                if (arg.message) {
                    this.logger.warn(arg.message);
                }
                this.attachedResults.push(Object(_AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_3__[/* createResultToAttach */ "a"])(this.result, this.attachToCaseEndpoint.caseId));
                Coveo.$$(window).trigger('attachedResultChange', {
                    attachedResults: this.attachedResults.slice(0),
                    caseId: this.attachToCaseEndpoint.caseId,
                });
                var customData = this.getCustomMetadata();
                this.usageAnalytics.logClickEvent(this.getActionCause('attach'), __assign({ documentTitle: this.result.title, documentURL: this.result.clickUri, author: this.result.raw.author }, customData), this.result, this.root);
                this.usageAnalytics.logCustomEvent(this.getActionCause('attach'), customData, this.root);
            }
            else {
                // Display errors ...
                this.logger.error('Attach failed', arg.message);
                this.displayModalBoxHelper(arg.message);
            }
        }
        this.loading = false;
        this.updateButton();
    };
    AttachToCase.prototype.handleDetachCallback = function (arg) {
        if (arg != null) {
            if (arg.succeeded) {
                this.attached = false;
                if (arg.message) {
                    this.logger.warn(arg.message);
                }
                this.logger.debug('Array before delete', this.attachedResults);
                this.deleteFromResults();
                this.logger.debug('Array after delete', this.attachedResults);
                Coveo.$$(window).trigger('attachedResultChange', {
                    attachedResults: this.attachedResults.slice(0),
                    caseId: this.attachToCaseEndpoint.caseId,
                });
                var customData = this.getCustomMetadata();
                this.usageAnalytics.logCustomEvent(this.getActionCause('detach'), customData, this.root);
            }
            else {
                this.logger.error('Detach failed', arg.message);
            }
        }
        this.loading = false;
        this.updateButton();
    };
    AttachToCase.prototype.deleteFromResults = function () {
        var _this = this;
        this.attachedResults = this.attachedResults.filter(function (result) {
            return !(Object(_AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_3__[/* isKnowledgeArticleToAttach */ "e"])(result)
                ? result.knowledgeArticleId === _this.result.raw.sfkbid && result.articleLanguage === _this.result.raw.sflanguage
                : result.uriHash === _this.result.raw.urihash);
        });
    };
    AttachToCase.prototype.handleStateChanged = function (arg) {
        if (arg.target != this.element && arg.urihash == this.result.raw.urihash) {
            this.attached = Object(_AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_3__[/* isAttached */ "d"])(this.attachedResults, this.result);
            this.loading = arg.loading;
            this.updateButton(false);
        }
    };
    AttachToCase.prototype.handleAttachedResultChangeEvent = function (args) {
        if (modules_search_ts__WEBPACK_IMPORTED_MODULE_7__[/* Id */ "a"].equal(this.attachToCaseEndpoint.caseId, args.caseId)) {
            var data = this.attachToCaseEndpoint.data;
            this.attachedResults = args.attachedResults;
            data.attachedResults = this.attachedResults;
            this.attached = Object(_AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_3__[/* isAttached */ "d"])(this.attachedResults, this.result);
            this.updateButton(false);
        }
    };
    AttachToCase.prototype.displayModalBoxHelper = function (message) {
        var content = document.createElement('p');
        content.innerText = message;
        Coveo.ModalBox.open(content, {
            title: 'An error occured',
            overlayClose: true,
            buttons: Coveo.ModalBox.BUTTON.OK,
        });
    };
    AttachToCase.prototype.renderButton = function () {
        var _this = this;
        this.element.innerHTML = '';
        this.buttonElement = document.createElement('div');
        var iconElement = document.createElement('span');
        iconElement.classList.add('coveo-attach-to-case-icon');
        Coveo.$$(this.buttonElement).append(iconElement);
        this.appendSvgIconToElement(iconElement, _common_ts_Icons__WEBPACK_IMPORTED_MODULE_2__[/* Icons */ "a"].attachIcon, 'coveo-attach-icon');
        this.appendSvgIconToElement(iconElement, _common_ts_Icons__WEBPACK_IMPORTED_MODULE_2__[/* Icons */ "a"].waitIcon, 'coveo-loading-icon');
        if (this.options.displayTooltip) {
            this.tooltipElement = document.createElement('div');
            this.tooltipElement.classList.add('coveo-caption-for-icon');
            Coveo.$$(iconElement).append(this.tooltipElement);
        }
        if (this.options.displayText) {
            this.textElement = document.createElement('span');
            this.textElement.classList.add('coveo-attach-to-case-text');
            Coveo.$$(this.buttonElement).append(this.textElement);
        }
        Coveo.$$(this.element).append(this.buttonElement);
        if (!this.options.readonly) {
            Coveo.$$(this.element).on('click', function () { return _this.handleClick(); });
            Coveo.$$(this.element).on('mouseenter', function () { return _this.handleHover(true); });
            Coveo.$$(this.element).on('mouseleave', function () { return _this.handleHover(false); });
        }
        this.updateButton();
    };
    AttachToCase.prototype.handleHover = function (isIn) {
        if (this.isAttached() && this.options.displayText) {
            var label = isIn ? Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Detach') : Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Attached');
            this.textElement.innerText = label;
        }
    };
    AttachToCase.prototype.sendStateChangedEvent = function () {
        var arg = {
            target: this.element,
            urihash: this.result.raw.urihash,
            loading: this.loading,
        };
        Coveo.$$(this.root).trigger(modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_1__[/* UserActionEvents */ "b"].attachToCaseStateChanged, arg);
    };
    AttachToCase.prototype.updateButton = function (sendEvent) {
        if (sendEvent === void 0) { sendEvent = true; }
        if (!this.buttonElement) {
            return;
        }
        this.buttonElement.className = '';
        if (this.loading) {
            this.buttonElement.classList.add('coveo-loading');
        }
        else if (this.isAttached()) {
            this.buttonElement.classList.add('coveo-attached');
        }
        else if (!this.options.readonly) {
            this.buttonElement.classList.add('coveo-attach');
        }
        if (this.options.readonly) {
            this.buttonElement.classList.add('coveo-readonly');
        }
        if (this.options.displayText) {
            this.textElement.innerText = this.isAttached() ? Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Attached') : Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Attach');
        }
        if (this.options.displayTooltip) {
            this.tooltipElement.innerText = this.isAttached() ? Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Attached_tooltip') : Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Attach_tooltip');
        }
        if (sendEvent) {
            this.sendStateChangedEvent();
        }
    };
    AttachToCase.prototype.appendSvgIconToElement = function (element, svgIconName, svgIconClass) {
        var iconElement = Object(modules_common_ts_Utils__WEBPACK_IMPORTED_MODULE_4__[/* parseHTML */ "a"])(svgIconName)[0];
        /**
         * SVGElement.classList is not supported in IE.
         * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
         * SVGElement.classList is an SVGAnimatedString, so we must set the `baseVal` property.
         */
        iconElement.className.baseVal = svgIconClass;
        /**
         * IE does not support SVGElement.outerHTML because SVG are not part of the HTML specification.
         * https://stackoverflow.com/questions/12592417/outerhtml-of-an-svg-element
         */
        var iconHtml = new XMLSerializer().serializeToString(iconElement);
        element.innerHTML += iconHtml;
    };
    AttachToCase.ID = 'AttachToCase';
    AttachToCase.fields = ['sfkbid', 'sfkbversionnumber', 'sfversionnumber', 'sflanguage'];
    /**
     * The possible options for AttachToCase
     * @componentOptions
     */
    AttachToCase.options = {
        /**
         * Specifies if the component should include the Attach/Detach text.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-display-text='true'/>
         * ```
         */
        displayText: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies if the component should include the Attach/Detach tooltip.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-display-tooltip='true'/>
         * ```
         */
        displayTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies if the component should be in read only mode. When in read only mode, you cannot Attach or Detach results.
         *
         * The default value is `false`.
         *
         * ```html
         * <div data-readonly='true'/>
         * ```
         */
        readonly: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specified the current record type.
         */
        recordType: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'Case' }),
        attachToCaseEndpoint: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (name) { return function () { return window[name]; }; }, {
            defaultFunction: function () { return function () { return window['attachToCaseEndpoint']; }; },
        }),
    };
    return AttachToCase;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerComponentFields(AttachToCase.ID, AttachToCase.fields);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(AttachToCase);
// Load strings and format 'description' ones for the tooltips.
utils_Translation__WEBPACK_IMPORTED_MODULE_5__[/* Translation */ "a"].register('en', strings);


/***/ }),
/* 20 */
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"<svg viewbox=\\\"0 0 20 20\\\"><path d=\\\"M0 10c0 5.52 4.466 10 9.989 10 5.53 0 10.01-4.478 10.01-10 0-5.52-4.478-10-10.01-10C4.469 0 0 4.478 0 10m10.04-8c4.44 0 8.05 3.589 8.05 8s-3.612 8-8.05 8c-4.428 0-8.03-3.589-8.03-8s3.603-8 8.03-8\\\"/><path d=\\\"M9 5.991C9 5.451 9.45 5 10.01 5c.559 0 1 .444 1 .991l-.009 4.596 2.742 2.742a.994.994 0 0 1-.005 1.409.997.997 0 0 1-1.409.005L9 11.414V5.991\\\"/></svg>\",\"b\":\"<svg viewbox=\\\"0 0 22 22\\\"><path d=\\\"M.818 2.232L2.232.818l19.02 19.02-1.413 1.415z\\\"/><path d=\\\"M.818 19.768L19.838.748l1.415 1.413L2.232 21.182z\\\"/></svg>\",\"c\":\"<svg viewbox=\\\"0 0 20 20\\\"><path d=\\\"M1 4c0-.553.446-1 .997-1h8v2h-7s.019 11.933 0 12h12v-7h2v8a.997.997 0 0 1-1 .997H1.999c-.553 0-1-.445-1-1V4\\\"/><path d=\\\"M14.5 3.5l-7 7L6 14l3.5-1.5 7-7zM17.848.848a.495.495 0 0 0-.697 0L15.499 2.5l2 2 1.652-1.652a.495.495 0 0 0 0-.697L17.848.848\\\"/></svg>\",\"d\":\"<svg viewbox=\\\"0 0 20 20\\\"><path d=\\\"M1 4c0-.553.446-1 .997-1h8v2h-7s.019 11.933 0 12h12v-7h2v8a.997.997 0 0 1-1 .998H1.999c-.553 0-1-.445-1-1V4\\\"/><path d=\\\"M15.5 3L8.707 9.792a.999.999 0 0 0 0 1.414l.086.086a.999.999 0 0 0 1.414 0L17 4.5v2a1 1 0 0 0 2 0V2.001a1 1 0 0 0-1-1h-4.499a1 1 0 0 0 0 2h2\\\"/></svg>\"}");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleResultLink; });
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

var ConsoleResultLink = /** @class */ (function (_super) {
    __extends(ConsoleResultLink, _super);
    function ConsoleResultLink(element, options, bindings, result) {
        var _this = _super.call(this, element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ConsoleResultLink, options), bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        return _this;
    }
    ConsoleResultLink.prototype.bindEventToOpen = function () {
        if (!this.options.workspaceAPI) {
            console.log('ConsoleResultLink: workspaceAPI is null, binding ResultLink open instead.');
            return _super.prototype.bindEventToOpen.call(this);
        }
        return this.bindClickForLightningConsole();
    };
    ConsoleResultLink.prototype.bindClickForLightningConsole = function () {
        // Open the result as a primary tab by default.
        var actionOnClick = (this.options.openInSubTab ? this.openInSubTab : this.openInPrimaryTab).bind(this);
        $(this.element).click(function () {
            actionOnClick().catch(function (err) {
                console.log(err);
            });
        });
        return true;
    };
    ConsoleResultLink.prototype.openInPrimaryTab = function () {
        if (this.options.hrefTemplate) {
            return this.openUrlInPrimaryTab(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].buildStringTemplateFromResult(this.options.hrefTemplate, this.result));
        }
        return this.openRecordInPrimaryTab(this.getResultSfId());
    };
    ConsoleResultLink.prototype.openInSubTab = function () {
        if (this.options.hrefTemplate) {
            return this.openUrlInSubTab(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].buildStringTemplateFromResult(this.options.hrefTemplate, this.result));
        }
        return this.openRecordIdInSubTab(this.getResultSfId());
    };
    ConsoleResultLink.prototype.openRecordInPrimaryTab = function (recordId) {
        if (!recordId) {
            console.log('ConsoleResultLink: Could not find a Salesforce ID to navigate to, doing nothing.');
            return Promise.resolve();
        }
        return this.options.workspaceAPI.openTab({
            recordId: recordId,
            focus: true,
        });
    };
    ConsoleResultLink.prototype.openUrlInPrimaryTab = function (url) {
        return this.options.workspaceAPI.openTab({
            url: url,
            focus: true,
        });
    };
    ConsoleResultLink.prototype.openRecordIdInSubTab = function (recordId) {
        var _this = this;
        if (!recordId) {
            console.log('ConsoleResultLink: Could not find a Salesforce ID to navigate to, doing nothing.');
            return Promise.resolve();
        }
        return this.options.workspaceAPI.getFocusedTabInfo().then(function (response) {
            return _this.options.workspaceAPI.openSubtab({
                parentTabId: response.tabId,
                recordId: recordId,
                focus: true,
            });
        });
    };
    ConsoleResultLink.prototype.openUrlInSubTab = function (url) {
        var _this = this;
        return this.options.workspaceAPI.getFocusedTabInfo().then(function (response) {
            return _this.options.workspaceAPI.openSubtab({
                parentTabId: response.tabId,
                url: url,
                focus: true,
            });
        });
    };
    ConsoleResultLink.prototype.getResultSfId = function () {
        var idToUse = this.result.raw.sfid;
        // TODO: Make sure this works with Lightning Knowledge...
        // Knowledge article uses the knowledge article version id to navigate.
        if (this.result.raw.sfkbid !== undefined && this.result.raw.sfkavid !== undefined) {
            idToUse = this.result.raw.sfkavid;
        }
        return idToUse || '';
    };
    ConsoleResultLink.ID = 'ConsoleResultLink';
    ConsoleResultLink.fields = ['sfkbid', 'sfkavid', 'sfid'];
    ConsoleResultLink.options = {
        /**
         * Specifies a template literal from which to generate the `ResultLink` `href` attribute value (see
         * [Template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)).
         *
         * This option overrides the [`field`]{@link ResultLink.options.field} option value.
         *
         * The template literal can reference any number of fields from the parent result. It can also reference global
         * scope properties.
         *
         * **Examples:**
         *
         * - The following markup generates an `href` value such as `http://uri.com?id=itemTitle`:
         *
         * ```html
         * <a class='CoveoResultLink' data-href-template='${clickUri}?id=${raw.title}'></a>
         * ```
         *
         * - The following markup generates an `href` value such as `localhost/fooBar`:
         *
         * ```html
         * <a class='CoveoResultLink' data-href-template='${window.location.hostname}/{Foo.Bar}'></a>
         * ```
         *
         * Default value is `undefined`.
         */
        hrefTemplate: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies a template literal from which to generate the `ResultLink` display title (see
         * [Template literals](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)).
         *
         * This option overrides the default `ResultLink` display title behavior.
         *
         * The template literal can reference any number of fields from the parent result. However, if the template literal
         * references a key whose value is undefined in the parent result fields, the `ResultLink` title displays the
         * name of this key instead.
         *
         * This option is ignored if the `ResultLink` innerHTML contains any value.
         *
         * **Examples:**
         *
         * - The following markup generates a `ResultLink` display title such as `Case number: 123456` if both the
         * `raw.objecttype` and `raw.objectnumber` keys are defined in the parent result fields:
         *
         * ```html
         * <a class="CoveoResultLink" data-title-template="${raw.objecttype} number: ${raw.objectnumber}"></a>
         * ```
         *
         * - The following markup generates `${myField}` as a `ResultLink` display title if the `myField` key is undefined
         * in the parent result fields:
         *
         * ```html
         * <a class="CoveoResultLink" data-title-template="${myField}"></a>
         * ```
         *
         * - The following markup generates `Foobar` as a `ResultLink` display title, because the `ResultLink` innterHTML is
         * not empty:
         *
         * ```html
         * <a class="CoveoResultLink" data-title-template="${will} ${be} ${ignored}">Foobar</a>
         * ```
         *
         * Default value is `undefined`.
         */
        titleTemplate: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Open links as sub tabs in the Salesforce Console instead of primary tabs.
         *
         * **Examples:**
         *
         * `<a class="CoveoConsoleResultLink" data-open-in-sub-tab="true"></a>
         *
         * Default value is `false`.
         */
        openInSubTab: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        workspaceAPI: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function () { return null; }, { defaultValue: null, required: true }),
    };
    return ConsoleResultLink;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultLink"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerComponentFields(ConsoleResultLink.ID, ConsoleResultLink.fields);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ConsoleResultLink);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultQuickAction; });
/* harmony import */ var _ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
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



/**
 * The _ResultQuickAction_ component is a Result Template component designed to work
 * with the _ResultActionsMenu_ Result Template component.
 *
 * It can be customized to perform any Salesforce Quick Action.
 *
 * ```html
 * <div class="CoveoResultActionsMenu">
 *  <div class="CoveoResultQuickAction"></div>
 * </div>
 * ```
 */
var ResultQuickAction = /** @class */ (function (_super) {
    __extends(ResultQuickAction, _super);
    /**
     * Construct a ResultQuickAction component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     * @param queryResult The result of the query in which this ResultQuickAction exists.
     */
    function ResultQuickAction(element, options, bindings, queryResult) {
        var _this = _super.call(this, element, options, bindings, queryResult) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.queryResult = queryResult;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, ResultQuickAction, options);
        _super.prototype.init.call(_this);
        return _this;
    }
    /**
     * Construct quick action arguments and perform the action.
     * @override
     */
    ResultQuickAction.prototype.doAction = function () {
        var _this = this;
        if (!this.options.quickActionAPI) {
            throw new Error('The QuickAction Lightning API is required.');
        }
        var QUICK_ACTION_ERROR_MESSAGE = 'This action is unavailable.';
        // Acquire fields from component options and insert query result values into the templates.
        var fields = __assign(__assign({}, this.getActionFields()), this.options.targetFields);
        Object.keys(fields).forEach(function (key) {
            fields[key].value = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].buildStringTemplateFromResult(fields[key].value, _this.queryResult);
        });
        var args = {
            actionName: this.options.actionName,
            targetFields: fields,
            submitOnSuccess: this.options.autoSubmit || false,
        };
        // This is used to allow clients to hook and edit the arg before sending to Salesforce.
        if (this.options.onSendActionEvent) {
            var onSendAction = { result: this.queryResult, args: args };
            this.bind.trigger(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["$$"])(this.root), this.options.onSendActionEvent, onSendAction);
        }
        /**
         * Log a usage analytics event with event name corresponding to the action name.
         * This allows clients to check usage analytics for even custom result actions.
         */
        var actionCause = {
            name: this.options.actionName,
            type: 'resultAction',
        };
        this.usageAnalytics.logClickEvent(actionCause, null, this.queryResult, this.root);
        this.options.quickActionAPI.setActionFieldValues(args).then(function (data) {
            if (data.success) {
                _this.logger.info('Action sent', args, data);
            }
            else {
                modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* SalesforceUtilities */ "c"].showToastError(QUICK_ACTION_ERROR_MESSAGE, data, _this.logger);
            }
        }, function (error) { return modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* SalesforceUtilities */ "c"].showToastError(QUICK_ACTION_ERROR_MESSAGE, error, _this.logger); });
    };
    /**
     * Override this function in implementation classes to provide the required fields.
     */
    ResultQuickAction.prototype.getActionFields = function () {
        return {};
    };
    ResultQuickAction.ID = 'ResultQuickAction';
    /**
     * The possible options for _ResultQuickAction_.
     * @componentOptions
     */
    ResultQuickAction.options = {
        quickActionAPI: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildCustomOption(function () { return null; }, { required: true }),
        /**
         * Specifies the name of the Quick Action bound to this result action.
         * This field is required.
         *
         * ```html
         * <div data-action-name='FeedItem.TextPost' />
         * ```
         */
        actionName: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ required: true }),
        /**
         * Specifies the fields that will be sent in the arguments of the quick action.
         * This argument must be provided as a JSON object. Fields from the query result
         * can be inserted by placing ${FieldName} in a string value.
         *
         * This field is required.
         *
         * ```html
         * <div data-target-fields='{"Body":{"value":"<b>${title}</b>(${ClickUri})<br/><p><i>\"${Excerpt}\"</i></p>"}}'/>
         * ```
         *
         */
        targetFields: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildJsonOption(),
        /**
         * Specify the name of the event that will be fired to allow modification
         * of the arguments before sending the action.
         *
         * This field is optional. If left empty, no event will be fired.
         *
         * ```html
         * <div data-on-send-action-event='ResultActionsEvents.onPostToFeed' />
         * ```
         */
        onSendActionEvent: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies if the component should perform the action right away.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-auto-submit='true'/>
         * ```
         */
        autoSubmit: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * The icon that will be displayed on the button.
         * If text is provided, the button will contain that text.
         * If the HTML of an image is provided, that image will be displayed in the button.
         */
        icon: _ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_0__[/* ResultAction */ "a"].options.icon,
        /**
         * The tooltip that displays on hovering the component.
         *
         * ```html
         * <div data-tooltip='Post to Feed'/>
         * ```
         */
        tooltip: _ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_0__[/* ResultAction */ "a"].options.tooltip,
    };
    return ResultQuickAction;
}(_ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_0__[/* ResultAction */ "a"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(ResultQuickAction);


/***/ }),
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getSearchParams */
/* unused harmony export stringifySearchParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseHTML; });
/**
 * Parse the search string of the current page into a map.
 * @returns a map with the key corresponding to the left side of the = and the value corresponding to the right side.
 */
function getSearchParams() {
    var params = window.location.search
        .substring(1)
        .split('&')
        .reduce(function (params, param) {
        var _a = param.split('='), key = _a[0], value = _a[1];
        params[key] = value;
        return params;
    }, {});
    return params;
}
/**
 * Build the query from a Map of strings.
 * @param params The params to set, as a map with it's key being the string before the = and the value being the string after it.
 * @returns the query to append to the URL.
 */
function stringifySearchParams(params) {
    var paramString = '?';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var value = params[key];
            paramString += key + "=" + value + "&";
        }
    }
    return paramString.substr(0, paramString.length - 1);
}
/**
 * Create HTMLElements the same way that jQuery.parseHtml does.
 * @param htmlText some HTML markup
 */
function parseHTML(htmlText) {
    /**
     * Passing a title to `createHTMLDocument` is mandatory for IE.
     * https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument
     */
    var tmp = document.implementation.createHTMLDocument('');
    tmp.body.innerHTML = htmlText;
    return tmp.body.children;
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

_utils_translation__WEBPACK_IMPORTED_MODULE_0__[/* Translation */ "b"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__[/* Language */ "a"].English, {
    UserActions_no_actions: 'No actions available for this user',
    UserActions_enable_prompt: 'The User Action feature is not activated for your organization.\nTo activate it, contact Coveo Support.',
    QueryList_more: 'Show More',
    QueryList_less: 'Show Less',
    QueryList_no_queries: 'No queries made by this user',
    ClickedDocumentList_more: 'Show More',
    ClickedDocumentList_less: 'Show Less',
    ClickedDocumentList_no_clicked_documents: 'No document clicked by this user',
    UserActivity_start_date: 'Start Date',
    UserActivity_start_time: 'Start Time',
    UserActivity_duration: 'Duration',
    UserActivity_other_event: 'Other Event',
    UserActivity_other_events: 'Other Events',
    UserActivity_search: 'Query',
    UserActivity_query: 'User Query',
    UserActivity_click: 'Clicked Document',
    UserActivity_view: 'Page View',
    UserActivity_custom: 'Custom Action',
});



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Display a list that expand when click on the more button.
 */
var ExpandableList = /** @class */ (function () {
    /**
     * Create an instance of the **ExpandableList** class.
     *
     * @param element Element on which to bind the component
     * @param items List of items to display.
     * @param options Initialization options.
     */
    function ExpandableList(element, items, options) {
        this.element = element;
        this.items = items;
        this.options = options;
        this.isOpen = false;
        this.options = this.parseOptions(options);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(this.options.transform);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotNull(this.options.transform);
        this.proccessedItem = items.slice(0, this.options.maximumItemsShown).map(this.options.transform);
        this.visibleItems = this.proccessedItem.slice(0, this.options.minimumItemsShown);
        this.hiddenItems = this.proccessedItem.slice(this.options.minimumItemsShown, this.options.maximumItemsShown);
        this.render();
    }
    ExpandableList.prototype.buildMoreButton = function () {
        var button = document.createElement('button');
        button.type = 'button';
        button.classList.add('coveo-more-less');
        button.addEventListener('click', this.toggleExpansion.bind(this));
        this.button = button;
        return button;
    };
    ExpandableList.prototype.isSomeItemsHidden = function () {
        return !(this.options.maximumItemsShown === this.options.minimumItemsShown || this.hiddenItems.length === 0);
    };
    ExpandableList.prototype.parseOptions = function (options) {
        var moreOrEqualThan = function (mininum, value) { return (value >= mininum ? value : mininum); };
        var parsedOptions = Object.assign({}, options);
        parsedOptions.showLessMessage = parsedOptions.showLessMessage || ExpandableList.DEFAULTS.LESS_LABEL;
        parsedOptions.showMoreMessage = parsedOptions.showMoreMessage || ExpandableList.DEFAULTS.MORE_LABEL;
        parsedOptions.minimumItemsShown = parsedOptions.minimumItemsShown || ExpandableList.DEFAULTS.MINIMUM_ITEMS_SHOWN;
        parsedOptions.maximumItemsShown = parsedOptions.maximumItemsShown || ExpandableList.DEFAULTS.MAXIMUM_ITEMS_SHOWN;
        parsedOptions.minimumItemsShown = moreOrEqualThan(parsedOptions.minimumItemsShown, 1);
        parsedOptions.maximumItemsShown = moreOrEqualThan(parsedOptions.maximumItemsShown, parsedOptions.minimumItemsShown);
        parsedOptions.listLabel = parsedOptions.listLabel || ExpandableList.DEFAULTS.LIST_LABEL;
        return parsedOptions;
    };
    ExpandableList.prototype.render = function () {
        this.element.classList.add(ExpandableList.COMPONENT_CLASS);
        var header = document.createElement('h2');
        header.classList.add('coveo-title');
        header.innerText = this.options.listLabel;
        var list = document.createElement('ol');
        list.classList.add('coveo-list');
        this.element.appendChild(header);
        this.element.appendChild(list);
        if (this.isSomeItemsHidden()) {
            this.element.appendChild(this.buildMoreButton());
        }
        if (this.items.length === 0) {
            this.renderEmpty();
        }
        else {
            this.fold();
        }
    };
    ExpandableList.prototype.renderEmpty = function () {
        var list = this.element.querySelector('.coveo-list');
        var li = document.createElement('li');
        li.classList.add(ExpandableList.EMPTY_CLASS);
        li.innerText = this.options.messageWhenEmpty || '';
        list.appendChild(li);
    };
    ExpandableList.prototype.toggleExpansion = function () {
        if (this.isOpen) {
            this.fold();
        }
        else {
            this.unfold();
        }
        this.isOpen = !this.isOpen;
    };
    ExpandableList.prototype.fold = function () {
        this.update(this.visibleItems, this.options.showMoreMessage);
    };
    ExpandableList.prototype.unfold = function () {
        this.update(__spreadArrays(this.visibleItems, this.hiddenItems), this.options.showLessMessage);
    };
    ExpandableList.prototype.update = function (items, buttonText) {
        return __awaiter(this, void 0, void 0, function () {
            var list, listItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = this.element.querySelector('.coveo-list');
                        return [4 /*yield*/, Promise.all(items)];
                    case 1:
                        listItems = (_a.sent()).map(function (itemElement) {
                            var listItem = document.createElement('li');
                            listItem.appendChild(itemElement);
                            return listItem;
                        });
                        list.innerHTML = '';
                        listItems.forEach(function (itemElement) {
                            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(list).append(itemElement);
                        });
                        if (this.button) {
                            this.button.innerText = buttonText;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ExpandableList;
}());

ExpandableList.DEFAULTS = Object.freeze({
    LESS_LABEL: 'Show Less',
    MORE_LABEL: 'Show More',
    LIST_LABEL: 'Items',
    MAXIMUM_ITEMS_SHOWN: 8,
    MINIMUM_ITEMS_SHOWN: 4,
});
ExpandableList.COMPONENT_CLASS = 'coveo-expandable-list';
ExpandableList.EMPTY_CLASS = 'coveo-empty';



/***/ }),
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ UserActions_UserActions; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ResponsiveUserActions.js


/**
 * Handle the responsive button creation and positionning.
 */
var ResponsiveUserActions_ResponsiveUserActions = /** @class */ (function () {
    /**
     * Create a **ResponsiveUserActions** instance.
     *
     * @param root The root of the interface.
     * @param ID Identifier of the **ResponsiveUserActions**.
     * @param _options _unused parameter_.
     */
    function ResponsiveUserActions(root, ID, _options) {
        this.root = root;
        this.ID = ID;
    }
    /**
     * Register the **component** to the **ResponsiveComponentsManager**.
     *
     * @param root The root of the interface.
     * @param component The component to register as a responsive component.
     */
    ResponsiveUserActions.init = function (root, component) {
        external_window_Coveo_["ResponsiveComponentsManager"].register(ResponsiveUserActions, Object(external_window_Coveo_["$$"])(root), UserActions_UserActions.ID, component, {});
    };
    /**
     * Register the user action component as a responsive component.
     *
     * @param component The component to register as a responsive component.
     */
    ResponsiveUserActions.prototype.registerComponent = function (component) {
        if (!this.userActions && component.constructor.ID === UserActions_UserActions.ID) {
            this.userActions = component;
            this.buildDropdownHeader(this.userActions.options.buttonLabel);
            return true;
        }
        return false;
    };
    /**
     * On resize, will place the user actions button in the Dropdown Header Wrapper Section.
     */
    ResponsiveUserActions.prototype.handleResizeEvent = function () {
        var wrapper = Object(external_window_Coveo_["$$"])(this.root).find("." + external_window_Coveo_["ResponsiveComponentsManager"].DROPDOWN_HEADER_WRAPPER_CSS_CLASS);
        if (wrapper != null) {
            Object(external_window_Coveo_["$$"])(wrapper).append(this.dropdownHeader.element.el);
        }
    };
    /**
     * Always return true because the component always need a button.
     */
    ResponsiveUserActions.prototype.needDropdownWrapper = function () {
        return true;
    };
    ResponsiveUserActions.prototype.buildDropdownHeader = function (label) {
        var _this = this;
        // Create a button.
        var button = document.createElement('a');
        var content = document.createElement('p');
        content.innerText = label;
        button.appendChild(content);
        this.dropdownHeader = new external_window_Coveo_["ResponsiveDropdownHeader"]('user-actions', Object(external_window_Coveo_["$$"])(button));
        this.dropdownHeader.element.on('click', function () {
            _this.userActions.toggle();
        });
    };
    return ResponsiveUserActions;
}());



// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js
var icons = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ClickedDocumentList.js
var ClickedDocumentList = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/QueryList.js
var QueryList = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActivity.js + 2 modules
var UserActivity = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/models/UserProfileModel.js
var UserProfileModel = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Strings.js
var Strings = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/ViewedByCustomer.js + 1 modules
var ViewedByCustomer = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Events.js
var Events = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActions.js
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










var ResultLayoutType;
(function (ResultLayoutType) {
    ResultLayoutType["LIST"] = "list";
    ResultLayoutType["TABLE"] = "table";
    ResultLayoutType["CARD"] = "card";
})(ResultLayoutType || (ResultLayoutType = {}));
/**
 * Display a panel that contains a summary of a user session and that also contains detailed information about user actions.
 */
var UserActions_UserActions = /** @class */ (function (_super) {
    __extends(UserActions, _super);
    /**
     * Create an instance of the **UserActions** class. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function UserActions(element, options, bindings) {
        var _this = _super.call(this, element, UserActions.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, UserActions, options);
        if (!_this.options.userId) {
            _this.disable();
            return _this;
        }
        if (_this.options.viewedByCustomer) {
            _this.showViewedByCustomer();
        }
        _this.tagViewsOfUser();
        if (!options.hidden) {
            if (options.useResponsiveManager) {
                ResponsiveUserActions_ResponsiveUserActions.init(_this.root, _this);
            }
            _this.bind.onRootElement(external_window_Coveo_["QueryEvents"].newQuery, function () { return _this.hide(); });
            _this.hide();
        }
        return _this;
    }
    /**
     * Collapse the panel.
     */
    UserActions.prototype.hide = function () {
        if (this.isOpened) {
            this.isOpened = false;
            Object(external_window_Coveo_["get"])(this.root, UserProfileModel["a" /* UserProfileModel */]).deleteActions(this.options.userId);
            this.root.classList.remove(UserActions.USER_ACTION_OPENED);
            this.element.dispatchEvent(new CustomEvent(UserActions.Events.Hide));
        }
    };
    /**
     * Open the panel.
     */
    UserActions.prototype.show = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var userActions, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.isOpened) return [3 /*break*/, 4];
                        this.isOpened = true;
                        this.element.dispatchEvent(new CustomEvent(UserActions.Events.Show));
                        this.bindings.usageAnalytics.logCustomEvent(Events["a" /* UserActionEvents */].open, {}, this.element);
                        this.root.classList.add(UserActions.USER_ACTION_OPENED);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(external_window_Coveo_["get"])(this.root, UserProfileModel["a" /* UserProfileModel */]).getActions(this.options.userId)];
                    case 2:
                        userActions = _b.sent();
                        if (userActions.length > 0) {
                            this.render();
                        }
                        else {
                            this.renderNoActions();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        if (((_a = e_1) === null || _a === void 0 ? void 0 : _a.statusCode) === 404) {
                            this.renderEnablePrompt();
                        }
                        else {
                            this.renderNoActions();
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Toggle the visibility of the panel.
     */
    UserActions.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isOpened) return [3 /*break*/, 1];
                        this.hide();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.show()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserActions.prototype.buildAccordionHeader = function (title) {
        var div = document.createElement('div');
        div.classList.add('coveo-accordion-header');
        var headerTitle = document.createElement('div');
        headerTitle.classList.add('coveo-accordion-header-title');
        headerTitle.innerText = title;
        var arrow = document.createElement('div');
        arrow.classList.add('coveo-arrow-down');
        arrow.innerHTML = icons["a" /* arrowDown */];
        div.appendChild(headerTitle);
        div.appendChild(arrow);
        return div;
    };
    UserActions.prototype.buildAccordion = function (title, elements) {
        var div = document.createElement('div');
        div.classList.add('coveo-accordion');
        var header = this.buildAccordionHeader(title);
        var foldable = document.createElement('div');
        foldable.classList.add('coveo-accordion-foldable');
        elements.forEach(function (el) { return foldable.appendChild(el); });
        div.appendChild(header);
        div.appendChild(foldable);
        header.addEventListener('click', function () {
            if (div.classList.contains('coveo-folded')) {
                div.classList.remove('coveo-folded');
            }
            else {
                div.classList.add('coveo-folded');
            }
        });
        return div;
    };
    UserActions.prototype.buildCoveoElement = function (klass) {
        var el = document.createElement('div');
        el.classList.add("Coveo" + klass.ID);
        return el;
    };
    /**
     * Initialize child Search-UI component and pass down critical options.
     *
     * @param element Parent element of each child that would be initialize.
     */
    UserActions.prototype.initializeSearchUIComponents = function (element) {
        var originalOptions = this.searchInterface.options.originalOptionsObject;
        external_window_Coveo_["Initialization"].automaticallyCreateComponentsInside(element, {
            options: Object.assign(Object.assign({}, originalOptions), { QueryList: Object.assign(Object.assign({}, originalOptions.QueryList), { userId: this.options.userId }), ClickedDocumentList: Object.assign(Object.assign({}, originalOptions.ClickedDocumentList), { userId: this.options.userId }), UserActivity: Object.assign(Object.assign({}, originalOptions.UserActivity), { userId: this.options.userId }) }),
            bindings: this.bindings,
        });
    };
    UserActions.prototype.render = function () {
        var element = document.createElement('div');
        var summarySection = this.buildAccordion(this.options.summaryLabel, [
            this.buildCoveoElement(ClickedDocumentList["a" /* ClickedDocumentList */]),
            this.buildCoveoElement(QueryList["a" /* QueryList */]),
        ]);
        summarySection.classList.add("coveo-summary");
        var detailsSection = this.buildAccordion(this.options.activityLabel, [this.buildCoveoElement(UserActivity["a" /* UserActivity */])]);
        detailsSection.classList.add('coveo-details');
        element.appendChild(summarySection);
        element.appendChild(detailsSection);
        this.initializeSearchUIComponents(element);
        this.element.innerHTML = '';
        this.element.appendChild(element);
    };
    UserActions.prototype.renderNoActions = function () {
        var element = document.createElement('div');
        element.classList.add('coveo-no-actions');
        element.innerText = Object(external_window_Coveo_["l"])(UserActions.ID + "_no_actions");
        this.element.innerHTML = '';
        this.element.appendChild(element);
    };
    UserActions.prototype.renderEnablePrompt = function () {
        var element = document.createElement('div');
        element.classList.add('coveo-enable-prompt');
        element.innerText = Object(external_window_Coveo_["l"])(UserActions.ID + "_enable_prompt");
        this.element.innerHTML = '';
        this.element.appendChild(element);
    };
    UserActions.prototype.showViewedByCustomer = function () {
        var _this = this;
        this.bind.onRootElement(external_window_Coveo_["ResultListEvents"].newResultDisplayed, function (args) {
            if (Boolean(args.item.getElementsByClassName('CoveoViewedByCustomer').length)) {
                return;
            }
            if (_this.inferResultListLayout() !== ResultLayoutType.TABLE) {
                var resultLastRow = '.coveo-result-row:last-child';
                args.item
                    .querySelector(resultLastRow)
                    .parentNode.appendChild(ViewedByCustomer["a" /* ViewedByCustomer */].getViewedByCustomerResultRowDom(_this.bindings, args.result));
            }
        });
    };
    UserActions.prototype.tagViewsOfUser = function () {
        var _this = this;
        Coveo.$$(this.root).on('buildingQuery', function (e, args) {
            try {
                args.queryBuilder.userActions = {
                    tagViewsOfUser: _this.options.userId,
                };
            }
            catch (e) {
                _this.logger.warn("CreatedBy Email wasn't found", e);
            }
        });
    };
    UserActions.prototype.inferResultListLayout = function () {
        var resultLists = this.root.querySelectorAll(external_window_Coveo_["Component"].computeSelectorForType(external_window_Coveo_["ResultList"].ID) + ":not(.coveo-hidden)");
        var resultListLayoutTypes = [ResultLayoutType.CARD, ResultLayoutType.TABLE, ResultLayoutType.LIST];
        if (resultLists.length > 0 && resultListLayoutTypes.indexOf(resultLists[0].dataset.layout) !== -1) {
            return resultLists[0].dataset.layout;
        }
        return ResultLayoutType.LIST;
    };
    return UserActions;
}(external_window_Coveo_["Component"]));

/**
 * Identifier of the Search-UI component.
 */
UserActions_UserActions.ID = 'UserActions';
UserActions_UserActions.Events = {
    Hide: 'userActionsPanelHide',
    Show: 'userActionsPanelShow',
};
/**
 * Default initialization options of the **UserActions** class.
 */
UserActions_UserActions.options = {
    userId: external_window_Coveo_["ComponentOptions"].buildStringOption({ required: true }),
    buttonLabel: external_window_Coveo_["ComponentOptions"].buildStringOption({
        defaultValue: 'User Actions',
    }),
    summaryLabel: external_window_Coveo_["ComponentOptions"].buildStringOption({
        defaultValue: 'Session Summary',
    }),
    activityLabel: external_window_Coveo_["ComponentOptions"].buildStringOption({
        defaultValue: "User's Recent Activity",
    }),
    viewedByCustomer: external_window_Coveo_["ComponentOptions"].buildBooleanOption({
        defaultValue: true,
    }),
    hidden: external_window_Coveo_["ComponentOptions"].buildBooleanOption({
        defaultValue: false,
    }),
    useResponsiveManager: external_window_Coveo_["ComponentOptions"].buildBooleanOption({
        defaultValue: true,
    }),
};
UserActions_UserActions.USER_ACTION_OPENED = 'coveo-user-actions-opened';
external_window_Coveo_["Initialization"].registerAutoCreateComponent(UserActions_UserActions);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return closeIcon; });
/* harmony import */ var _svg_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _svg_close_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_svg_close_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_attach_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _svg_attach_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_attach_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_wait_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _svg_wait_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_wait_svg__WEBPACK_IMPORTED_MODULE_2__);



/*
 * Underscore template options containing all SVGs
 */
var Icons = {
    closeIcon: _svg_close_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
    attachIcon: _svg_attach_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    waitIcon: _svg_wait_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
};
var closeIcon = _svg_close_svg__WEBPACK_IMPORTED_MODULE_0___default.a;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\"><path d=\"M.818 2.232L2.232.818l19.02 19.02-1.413 1.415z\"></path><path d=\"M.818 19.768L19.838.748l1.415 1.413L2.232 21.182z\"></path></svg>"

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArgWithQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExtensionBuilder; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);

var ArgWithQuote;
(function (ArgWithQuote) {
    /* Keep the withQuote behaviour from the ExtensionBuilder. */
    ArgWithQuote[ArgWithQuote["DEFAULT"] = 0] = "DEFAULT";
    /* Overrides the behaviour of the ExtensionBuilder to add quotes. */
    ArgWithQuote[ArgWithQuote["WITH_QUOTES"] = 1] = "WITH_QUOTES";
    /* Overrides the behaviour of the ExtensionBuilder to not add quotes. */
    ArgWithQuote[ArgWithQuote["WITHOUT_QUOTES"] = 2] = "WITHOUT_QUOTES";
})(ArgWithQuote || (ArgWithQuote = {}));
var ExtensionBuilder = /** @class */ (function () {
    function ExtensionBuilder(name, withQuote) {
        if (withQuote === void 0) { withQuote = true; }
        this.name = name;
        this.withQuote = withQuote;
        this.params = [];
    }
    /*
     * Add a new parameter to the extension.
     * @param key Name of the argument.
     * @param value Value of the argument.
     * @param argWithQuote If given, overrides the behaviour of the extension builder.
     */
    ExtensionBuilder.prototype.withParam = function (key, value, argWithQuote) {
        if (argWithQuote === void 0) { argWithQuote = ArgWithQuote.DEFAULT; }
        this.params.push({
            key: key,
            value: value,
            argWithQuote: argWithQuote,
        });
        return this;
    };
    /*
     * Builds the extension string by combining all the parts together.
     */
    ExtensionBuilder.prototype.build = function () {
        var _this = this;
        var defaultQuote = this.withQuote ? "'" : '';
        return ('$' +
            this.name +
            '(' +
            underscore__WEBPACK_IMPORTED_MODULE_0__["map"](this.params, function (param) {
                if (param.value.replace != undefined) {
                    param.value = param.value.replace(/\'/g, '');
                }
                return param.key + ': ' + _this.argumentToString(param, defaultQuote);
            }).join(', ') +
            ')');
    };
    ExtensionBuilder.prototype.argumentToString = function (arg, defaultQuote) {
        var quote = defaultQuote;
        if (arg.argWithQuote != ArgWithQuote.DEFAULT) {
            // Overrides the behaviour of the ExtensionBuilder for this argument.
            quote = arg.argWithQuote == ArgWithQuote.WITH_QUOTES ? "'" : '';
        }
        return quote + arg.value + quote;
    };
    return ExtensionBuilder;
}());



/***/ }),
/* 34 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Attached_tooltip\":{\"en\":\"Attached\"},\"Attach_tooltip\":{\"en\":\"Attach\"},\"AttachToCase_displayTooltip\":{\"en\":\"Display tooltip\"},\"AttachToCase_attachToCaseEndpoint\":{\"en\":\"Endpoint\"},\"AttachToCase_readonly\":{\"en\":\"Read only\"}}");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxStateModel; });
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

var BoxStateModel = /** @class */ (function (_super) {
    __extends(BoxStateModel, _super);
    function BoxStateModel(element, attributes, bindings) {
        var _this = this;
        var merged = _.extend({}, BoxStateModel.defaultAttributes, attributes);
        _this = _super.call(this, element, BoxStateModel.ID, merged) || this;
        return _this;
    }
    BoxStateModel.prototype.getSimpleEvent = function (name) {
        return this.getEventName(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Model"].eventTypes.changeOne + name);
    };
    /**
     * Validates whether at least one facet is currently active (has selected or excluded values) in the interface.
     *
     * @returns {boolean} `true` if at least one facet is active; `false` otherwise.
     */
    BoxStateModel.prototype.atLeastOneFacetIsActive = function () {
        var _this = this;
        return !_.isUndefined(_.find(this.attributes, function (value, key) {
            return key.indexOf('f:') == 0 && !coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Utils"].arrayEqual(_this.getDefault(key), value);
        }));
    };
    BoxStateModel.ID = 'boxstate';
    BoxStateModel.defaultAttributes = {
        enableNonContextualSearch: false,
        t: '',
    };
    BoxStateModel.attributesEnum = {
        enableNonContextualSearch: 'enableNonContextualSearch',
        t: 't',
    };
    return BoxStateModel;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Model"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerNamedMethod('boxstate', function (element) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(element);
    var model = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].resolveBinding(element, BoxStateModel);
    return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["setState"])(model, args);
});


/***/ }),
/* 36 */
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
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"quick_text\"><path d=\"M12 1.5C5.8 1.5.7 6.2.7 11.9c0 1.8.5 3.5 1.4 5 .1.3.2.5.1.8l-1.5 4c-.1.4.2.7.6.6l4.1-1.5c.2-.1.5-.1.7.1 1.7.9 3.8 1.5 6 1.5 6.2-.1 11.3-4.7 11.3-10.4 0-5.8-5.1-10.5-11.4-10.5zm-5.2 10c0-.2.2-.4.4-.4h7.4c.2 0 .4.2.4.4v1c0 .2-.1.4-.4.4H7.2c-.2 0-.5-.2-.5-.4v-1zM17.4 16c0 .2-.2.4-.5.4H7.2c-.2 0-.5-.2-.5-.4v-.9c0-.2.2-.5.5-.5h9.7c.2 0 .5.2.5.5v.9zm0-7.1c0 .2-.2.5-.5.5H7.2c-.2 0-.5-.2-.5-.5V8c0-.2.2-.4.5-.4h9.7c.2 0 .5.2.5.4v.9z\"></path></svg>"

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SalesforceEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SalesforceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesforceAdaptiveResultLink; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
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
 * Defines the Salesforce environment in which the search interface is currently running.
 */
var SalesforceEnvironment;
(function (SalesforceEnvironment) {
    SalesforceEnvironment["Classic"] = "classic";
    SalesforceEnvironment["LightningConsole"] = "lightning-console";
    SalesforceEnvironment["LightningApp"] = "lightning-app";
    SalesforceEnvironment["LightningCommunity"] = "lightning-community";
    SalesforceEnvironment["Other"] = "other";
    SalesforceEnvironment["NotSet"] = "";
})(SalesforceEnvironment || (SalesforceEnvironment = {}));
/**
 * Defines the Coveo for Salesforce component which is hosting the search interface.
 */
var SalesforceComponent;
(function (SalesforceComponent) {
    SalesforceComponent["AttachedResults"] = "Internal_AttachedResults";
    SalesforceComponent["CaseDeflection"] = "Community_CaseDeflection";
    SalesforceComponent["FullSearch"] = "Internal_FullSearch";
    SalesforceComponent["InsightPanel"] = "Internal_InsightPanel";
    SalesforceComponent["Search"] = "Community_Search";
    SalesforceComponent["Other"] = "other";
    SalesforceComponent["NotSet"] = "";
})(SalesforceComponent || (SalesforceComponent = {}));
/**
 * The _SalesforceAdaptiveResultLink_ is a factory component that chooses which of the _ConsoleResultLink_, _SalesforceResultLink_, or the _ResultLink_ should be used in a given context. The Salesforce environment, the hosting component, and the location of the search result are all taken into consideration to render the component that is best suited to open the result.
 *
 * ```html
 * <a class='CoveoSalesforceAdaptiveResultLink'></a>
 * ```
 */
var SalesforceAdaptiveResultLink = /** @class */ (function (_super) {
    __extends(SalesforceAdaptiveResultLink, _super);
    function SalesforceAdaptiveResultLink(element, options, bindings, result) {
        var _this = _super.call(this, element, SalesforceAdaptiveResultLink.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, SalesforceAdaptiveResultLink, options);
        var createComponent = _this.validateContextOptions(_this.options)
            ? _this.resolveComponentGenerator(_this.options, result)
            : _this.createResultLink;
        _this.innerResultLink = createComponent(element, _this.options, bindings, result);
        return _this;
    }
    SalesforceAdaptiveResultLink.prototype.validateContextOptions = function (options) {
        var invalidOptions = [];
        if (!options.component) {
            invalidOptions.push('component');
        }
        if (!options.environment) {
            invalidOptions.push('environment');
        }
        if (!modules_search_ts__WEBPACK_IMPORTED_MODULE_1__[/* Id */ "a"].isId(options.sfOrganizationId)) {
            invalidOptions.push('sfOrganizationId');
        }
        if (invalidOptions.length > 0) {
            console.warn("The 'SalesforceAdaptiveResultLink' component has invalid context option values. Please set: " + invalidOptions.join(', '));
        }
        return invalidOptions.length === 0;
    };
    SalesforceAdaptiveResultLink.prototype.resolveComponentGenerator = function (options, result) {
        var generator;
        if (this.shouldCreateConsoleResultLink(options, result)) {
            generator = this.createConsoleResultLink;
        }
        else if (this.shouldCreateSalesforceResultLink(options, result)) {
            generator = this.createSalesforceResultLink;
        }
        else {
            generator = this.createResultLink;
        }
        return generator;
    };
    SalesforceAdaptiveResultLink.prototype.shouldCreateConsoleResultLink = function (options, result) {
        var isInLightningConsole = options.environment === SalesforceEnvironment.LightningConsole;
        var isLocalSalesforceResult = modules_search_ts__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceUtilities */ "c"].isLocalSalesforceResult(result, options.sfOrganizationId);
        return isInLightningConsole && isLocalSalesforceResult;
    };
    SalesforceAdaptiveResultLink.prototype.shouldCreateSalesforceResultLink = function (options, result) {
        var isInSalesforce = options.environment !== SalesforceEnvironment.Other;
        var isClassicFullSearch = options.environment === SalesforceEnvironment.Classic && options.component === SalesforceComponent.FullSearch;
        var isLocalSalesforceResult = modules_search_ts__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceUtilities */ "c"].isLocalSalesforceResult(result, options.sfOrganizationId);
        var isRemoteSalesforceResult = modules_search_ts__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceUtilities */ "c"].isRemoteSalesforceResult(result, options.sfOrganizationId);
        return isInSalesforce && (isLocalSalesforceResult || (isRemoteSalesforceResult && isClassicFullSearch));
    };
    SalesforceAdaptiveResultLink.prototype.createConsoleResultLink = function (element, options, bindings, result) {
        var innerOptions = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* ConsoleResultLink */ "a"]);
        innerOptions.workspaceAPI = options.workspaceAPI;
        element.classList.add(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassName(modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* ConsoleResultLink */ "a"]));
        return new modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* ConsoleResultLink */ "a"](element, innerOptions, bindings, result);
    };
    SalesforceAdaptiveResultLink.prototype.createSalesforceResultLink = function (element, options, bindings, result) {
        element.classList.add(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassName(modules_search_ts__WEBPACK_IMPORTED_MODULE_3__[/* SalesforceResultLink */ "a"]));
        return new modules_search_ts__WEBPACK_IMPORTED_MODULE_3__[/* SalesforceResultLink */ "a"](element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, modules_search_ts__WEBPACK_IMPORTED_MODULE_3__[/* SalesforceResultLink */ "a"]), bindings, result);
    };
    SalesforceAdaptiveResultLink.prototype.createResultLink = function (element, options, bindings, result) {
        return new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultLink"](element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultLink"]), bindings);
    };
    SalesforceAdaptiveResultLink.ID = 'SalesforceAdaptiveResultLink';
    SalesforceAdaptiveResultLink.options = {
        /**
         * Specifies the Salesforce organization ID. It is used to detect if the search result belongs to the current Salesforce organization.
         *
         * ```html
         * <a class='CoveoSalesforceAdaptiveResultLink' data-sf-organization-id='0123456789abcde'></a>
         * ```
         */
        sfOrganizationId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '' }),
        /**
         * Specifies the Salesforce environment in which the search interface is running.
         *
         * Default is the empty string. The option must be set explicitly.
         *
         * Allowed values are: `classic`, `lightning-console`, `lightning-app`, `lightning-community`, `other`
         *
         * ```html
         * <a class='CoveoSalesforceAdaptiveResultLink' data-environment='lightning-console'></a>
         * ```
         *
         */
        environment: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: SalesforceEnvironment.NotSet }),
        /**
         * Specified the Coveo for Salesforce component which is hosting the search interface.
         *
         * Default is the empty string. The option must be set explicitly.
         *
         * Allowed values are: `Community_CaseDeflection`, `Community_Search`, `Internal_AttachedResults`, `Internal_FullSearch`, `Internal_InsightPanel`, `other`
         */
        component: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: SalesforceComponent.NotSet }),
    };
    return SalesforceAdaptiveResultLink;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(SalesforceAdaptiveResultLink);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerComponentFields(SalesforceAdaptiveResultLink.ID, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].getRegisteredFieldsComponentForQuery(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultLink"].ID)
    .concat(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].getRegisteredFieldsComponentForQuery(modules_search_ts__WEBPACK_IMPORTED_MODULE_3__[/* SalesforceResultLink */ "a"].ID))
    .concat(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].getRegisteredFieldsComponentForQuery(modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* ConsoleResultLink */ "a"].ID))
    .concat([modules_search_ts__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceFields */ "b"].Id, modules_search_ts__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceFields */ "b"].OrganizationId]));


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 78.905 77.861\" enable-background=\"new 0 0 78.905 77.861\"><g transform=\"translate(0,-952.36218)\" id=\"g4\"><path d=\"m 71.828,957.626 c 8.674,7.675 9.487,20.969 1.813,29.643 l -37.107,41.941 c -1.098,1.241 -2.994,1.357 -4.235,0.259 -1.241,-1.098 -1.357,-2.994 -0.259,-4.235 l 37.107,-41.941 c 5.541,-6.263 4.968,-15.633 -1.295,-21.174 -6.263,-5.541 -15.633,-4.968 -21.174,1.295 l -38.433,43.439 c -3.338,3.773 -2.996,9.366 0.777,12.704 3.773,3.338 9.366,2.996 12.704,-0.777 l 29.100468,-33.05767 c 1.13279,-1.28683 0.800246,-3.29785 -0.259,-4.235 -1.059246,-0.93715 -3.099,-1.025 -4.235,0.259 0,0 -9.944868,9.86376 -18.793868,20.71177 -1.04,1.275 -3.505,4.666 -6.064,2.563 -2.657,-2.184 0.427,-5.30501 1.57,-6.53801 9.517,-10.268 18.793868,-20.71176 18.793868,-20.71176 3.269,-3.695 9.009,-4.046 12.704,-0.777 3.695,3.27 4.046,9.009 0.777,12.704 L 26.219,1022.756 c -5.472,6.185 -14.989,6.767 -21.174,1.295 -6.185,-5.472 -6.767,-14.989 -1.295,-21.174 l 38.432,-43.439 c 7.678,-8.673 20.972,-9.486 29.646,-1.812 z\"></path></g></svg>"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<svg enable-background=\"new 0 0 18 18\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"m16.76 8.051c-.448 0-.855-.303-.969-.757-.78-3.117-3.573-5.294-6.791-5.294s-6.01 2.177-6.79 5.294c-.134.537-.679.861-1.213.727-.536-.134-.861-.677-.728-1.212 1.004-4.009 4.594-6.809 8.731-6.809 4.138 0 7.728 2.8 8.73 6.809.135.536-.191 1.079-.727 1.213-.081.02-.162.029-.243.029z\"></path><path d=\"m9 18c-4.238 0-7.943-3.007-8.809-7.149-.113-.541.234-1.071.774-1.184.541-.112 1.071.232 1.184.773.674 3.222 3.555 5.56 6.851 5.56s6.178-2.338 6.852-5.56c.113-.539.634-.892 1.184-.773.54.112.887.643.773 1.184-.866 4.142-4.57 7.149-8.809 7.149z\"></path></g></svg>"

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickedDocumentList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _ExpandableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






/**
 * Display the list of the most recent clicked documents of a user.
 */
var ClickedDocumentList = /** @class */ (function (_super) {
    __extends(ClickedDocumentList, _super);
    /**
     * Create an instance of **ClickedDocumentList**. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function ClickedDocumentList(element, options, bindings) {
        var _this = _super.call(this, element, ClickedDocumentList.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ClickedDocumentList, options);
        if (!_this.options.userId) {
            _this.disable();
            return _this;
        }
        _this.userProfileModel = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(_this.root, _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__[/* UserProfileModel */ "a"]);
        _this.userProfileModel.getActions(_this.options.userId).then(function (actions) {
            _this.sortedDocumentsList = actions
                .filter(function (action) { return action.document && action.type === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_3__[/* UserActionType */ "a"].Click; })
                .sort(function (a, b) { return a.timestamp.getTime() - b.timestamp.getTime(); })
                .reverse()
                .reduce(_this.filterDuplicatesClickAction, [])
                .map(function (action) {
                action.document.searchInterface = _this.searchInterface;
                return action.document;
            });
            _this.render();
        }, _this.logger.error.bind(_this.logger));
        return _this;
    }
    ClickedDocumentList.prototype.filterDuplicatesClickAction = function (accumulator, action) {
        return !accumulator.find(function (existing) { return existing.raw.uri_hash === action.raw.uri_hash; }) ? __spreadArrays(accumulator, [action]) : accumulator;
    };
    ClickedDocumentList.prototype.render = function () {
        var _this = this;
        new _ExpandableList__WEBPACK_IMPORTED_MODULE_2__[/* ExpandableList */ "a"](this.element, this.sortedDocumentsList, {
            maximumItemsShown: this.sortedDocumentsList.length,
            minimumItemsShown: this.options.numberOfItems,
            transform: function (result) {
                coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryUtils"].setStateObjectOnQueryResult(_this.queryStateModel.get(), result);
                coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryUtils"].setSearchInterfaceObjectOnQueryResult(_this.searchInterface, result);
                return _this.options.template.instantiateToElement(result, {
                    wrapInDiv: true,
                    checkCondition: true,
                    currentLayout: 'list',
                    responsiveComponents: _this.searchInterface.responsiveComponents,
                }).then(function (element) {
                    coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].automaticallyCreateComponentsInsideResult(element, result);
                    return element;
                });
            },
            listLabel: this.options.listLabel,
            messageWhenEmpty: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(ClickedDocumentList.ID + "_no_clicked_documents"),
            showMoreMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(ClickedDocumentList.ID + "_more"),
            showLessMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(ClickedDocumentList.ID + "_less"),
        });
    };
    return ClickedDocumentList;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * Identifier of the Search-UI component.
 */
ClickedDocumentList.ID = 'ClickedDocumentList';
/**
 * Default initialization options of the **ClickedDocumentList** class.
 */
ClickedDocumentList.options = {
    numberOfItems: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({
        defaultValue: 4,
        min: 1,
    }),
    listLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: 'Recent Clicked Documents',
    }),
    userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
    template: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildTemplateOption({
        defaultValue: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["HtmlTemplate"].fromString("<div class=\"coveo-list-row\">\n                    <div class=\"coveo-row-icon\">" + _utils_icons__WEBPACK_IMPORTED_MODULE_4__[/* duplicate */ "d"] + "</div>\n                    <a class=\"CoveoResultLink\"/a>\n                </div>", {
            layout: 'list',
        }),
    }),
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ClickedDocumentList);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _ExpandableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var DEFAULT_TRANSFORMATION = function () { return function (query) {
    var container = document.createElement('div');
    container.classList.add('coveo-list-row');
    var icon = document.createElement('div');
    icon.classList.add('coveo-row-icon');
    icon.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_3__[/* search */ "e"];
    var link = document.createElement('a');
    link.classList.add('coveo-link');
    link.innerHTML = query;
    container.appendChild(icon);
    container.appendChild(link);
    return Promise.resolve(container);
}; };
/**
 * Display the list of the most recent queries of a user.
 */
var QueryList = /** @class */ (function (_super) {
    __extends(QueryList, _super);
    /**
     * Create an instance of **QueryList**. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function QueryList(element, options, bindings) {
        var _this = _super.call(this, element, QueryList.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, QueryList, options);
        if (!_this.options.userId) {
            _this.disable();
            return _this;
        }
        _this.userProfileModel = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(_this.root, _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__[/* UserProfileModel */ "a"]);
        _this.userProfileModel.getActions(_this.options.userId).then(function (actions) {
            _this.sortedQueryList = __spreadArrays(actions).filter(function (action) { return action.query; })
                .sort(function (a, b) { return a.timestamp.getTime() - b.timestamp.getTime(); })
                .reverse()
                .map(function (action) { return action.query; })
                .reduce(_this.removeDuplicateQueries, []);
            _this.render();
        }, _this.logger.error.bind(_this.logger));
        return _this;
    }
    QueryList.prototype.removeDuplicateQueries = function (acc, query) {
        return acc.indexOf(query) === -1 ? __spreadArrays(acc, [query]) : acc;
    };
    QueryList.prototype.render = function () {
        var _this = this;
        new _ExpandableList__WEBPACK_IMPORTED_MODULE_2__[/* ExpandableList */ "a"](this.element, this.sortedQueryList, {
            maximumItemsShown: this.sortedQueryList.length,
            minimumItemsShown: this.options.numberOfItems,
            transform: function (query) { return _this.options.transform(query).then(_this.makeClickable.bind(_this, query)); },
            listLabel: this.options.listLabel,
            messageWhenEmpty: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(QueryList.ID + "_no_queries"),
            showMoreMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(QueryList.ID + "_more"),
            showLessMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(QueryList.ID + "_less"),
        });
    };
    /**
     * Make a list item element generate a query when click if an omnibox is present.
     * @param query The query to generate.
     * @param listItem  The list item element.
     */
    QueryList.prototype.makeClickable = function (query, listItem) {
        var _this = this;
        var omniboxElement = this.root.querySelector('.CoveoOmnibox');
        if (omniboxElement != null) {
            listItem.addEventListener('click', function () {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(omniboxElement, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"], true).setText(query);
                _this.usageAnalytics.logSearchEvent(_Events__WEBPACK_IMPORTED_MODULE_5__[/* UserActionEvents */ "a"].submit, {});
                _this.queryController.executeQuery();
            });
            listItem.style.cursor = 'pointer';
        }
        return listItem;
    };
    return QueryList;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/**
 * Identifier of the Search-UI component.
 */
QueryList.ID = 'QueryList';
/**
 * Default initialization options of the **QueryList** class.
 */
QueryList.options = {
    numberOfItems: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({
        defaultValue: 4,
        min: 1,
        required: true,
    }),
    listLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: 'Recent Queries',
    }),
    transform: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(DEFAULT_TRANSFORMATION, {
        defaultValue: DEFAULT_TRANSFORMATION(),
    }),
    userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(QueryList);



/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 90 78.58\" enable-background=\"new 0 0 90 78.58\" xml:space=\"preserve\"><g><path fill=\"none\" d=\"M66.024,56.591c-0.014-0.199,0.001-0.395,0.014-0.592c0.006-0.093-0.001-0.188,0.011-0.279 c0.02-0.148,0.064-0.289,0.099-0.433c0.031-0.131,0.05-0.267,0.094-0.394c0.031-0.092,0.082-0.177,0.119-0.267 c0.07-0.167,0.133-0.337,0.223-0.492c0.068-0.119,0.159-0.225,0.238-0.338c0.081-0.114,0.151-0.236,0.242-0.341 c0.078-0.091,0.175-0.167,0.262-0.252c0.116-0.114,0.225-0.233,0.353-0.334c0.069-0.054,0.15-0.094,0.223-0.144 c0.166-0.114,0.331-0.228,0.513-0.319c0.01-0.005,0.018-0.013,0.028-0.018c8.246-4.05,13.281-12.595,12.827-21.768 C80.666,18.417,70.621,8.828,58.404,8.788L31.757,8.701c-0.024,0-0.051,0-0.075,0c-12.521,0-22.815,10.163-22.966,22.692 L8.704,32.39c-0.076,6.337,2.376,12.267,6.906,16.698c4.53,4.432,10.521,6.773,16.845,6.536l22.463-0.768 c0.076-0.002,0.148,0.015,0.224,0.017c0.212,0.004,0.424,0.013,0.634,0.048c0.027,0.005,0.053,0.014,0.08,0.019 c0.765,0.141,1.504,0.475,2.124,1.033l8.585,7.739l-0.542-7.088C66.022,56.613,66.025,56.603,66.024,56.591z\"></path><path d=\"M89.961,30.191C89.127,13.366,75.278,0.142,58.431,0.088L31.785,0c-0.034,0-0.069,0-0.104,0 C14.419,0,0.223,14.015,0.014,31.291l-0.012,0.996C-0.103,41.024,3.279,49.2,9.525,55.31c5.979,5.847,13.793,9.031,22.109,9.031 c0.372,0,0.745-0.006,1.119-0.019l20.706-0.708l15.36,13.846c0.817,0.736,1.86,1.12,2.915,1.12c0.651,0,1.308-0.147,1.917-0.446 c1.598-0.785,2.556-2.462,2.42-4.236l-1.16-15.169C84.698,52.712,90.537,41.825,89.961,30.191z M57.98,55.974 c-0.62-0.559-1.359-0.892-2.124-1.033c-0.027-0.005-0.053-0.015-0.08-0.019c-0.21-0.035-0.422-0.044-0.634-0.048 c-0.076-0.002-0.148-0.019-0.224-0.017l-22.463,0.768c-6.324,0.237-12.315-2.104-16.845-6.536 c-4.529-4.43-6.982-10.361-6.906-16.698l0.012-0.996C8.867,18.866,19.161,8.703,31.682,8.703c0.024,0,0.051,0,0.075,0L58.404,8.79 c12.218,0.039,22.262,9.629,22.866,21.832c0.454,9.173-4.581,17.718-12.827,21.768c-0.01,0.005-0.018,0.013-0.028,0.018 c-0.182,0.091-0.347,0.205-0.513,0.319c-0.073,0.05-0.154,0.09-0.223,0.144c-0.128,0.1-0.237,0.22-0.353,0.334 c-0.086,0.085-0.183,0.161-0.262,0.252c-0.091,0.106-0.162,0.227-0.242,0.341c-0.079,0.113-0.17,0.219-0.238,0.338 c-0.089,0.156-0.153,0.326-0.223,0.492c-0.037,0.09-0.088,0.174-0.119,0.267c-0.043,0.127-0.062,0.262-0.094,0.394 c-0.035,0.144-0.079,0.286-0.099,0.433c-0.012,0.091-0.005,0.186-0.011,0.279c-0.014,0.197-0.028,0.393-0.014,0.592 c0.001,0.011-0.002,0.022-0.001,0.033l0.542,7.088L57.98,55.974z\"></path></g></svg>"

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("{\"ResultActionsPostToFeed_body\":{\"en\":\"Body\"},\"ResultActionsPostToFeed_insertType\":{\"en\":\"Insert Type\"},\"ResultActionsPostToFeed_autoSubmit\":{\"en\":\"Auto Submit\"}}");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 52 36\" enable-background=\"new 0 0 52 36\" xml:space=\"preserve\"><g><path d=\"M50,0H2C0.896,0,0,0.896,0,2v32c0,1.104,0.896,2,2,2h48c1.104,0,2-0.896,2-2V2C52,0.896,51.104,0,50,0z M44.476,4 L26,19.396L7.524,4H44.476z M4,32V6.27l20.72,17.266C25.09,23.846,25.545,24,26,24c0.455,0,0.91-0.154,1.28-0.464L48,6.27V32H4z\"></path></g></svg>"

/***/ }),
/* 47 */
/***/ (function(module) {

module.exports = JSON.parse("{\"ResultActionsSendEmail_htmlBody\":{\"en\":\"HTML Body\"},\"ResultActionsSendEmail_insertType\":{\"en\":\"Insert Type\"}}");

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ UserActivity_UserActivity; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/utils/time.js

/**
 * Format a date object to a date string that follow the format describe below.
 * > Ex: `Mon, Apr 29, 2019`
 * @param date The date that will be formated.
 * @returns A string formated version of the date.
 */
function formatDate(date) {
    return date.toLocaleDateString('default', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
}
/**
 * Format a date object to a short date string that follow the format describe below.
 * > Ex: `Apr 29`
 * @param date The date that will be formated.
 * @returns A string formated version of the date.
 */
function formatDateShort(date) {
    return date.toLocaleDateString('default', {
        day: '2-digit',
        month: 'short',
    });
}
/**
 * Format a date object to a time string that follow the format describe below.
 * > Ex: `12:00:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the time.
 */
function formatTime(date) {
    return date.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}
/**
 * Format a date object to a short time string that follow the format describe below.
 * > Ex: `12:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the time.
 */
function formatTimeShort(date) {
    return date.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
    });
}
/**
 * Format a date object to a date and time string that follow the format describe below.
 * > Ex: `Mon, Apr 29, 2019 - 12:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the date and time.
 */
function formatDateAndTime(date) {
    return formatDate(date) + " - " + formatTimeShort(date);
}
/**
 * Format a date object to a date and time string that follow the format describe below.
 * > Ex: `Apr 29 - 12:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the date and time.
 */
function formatDateAndTimeShort(date) {
    return formatDateShort(date) + " - " + formatTimeShort(date);
}
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
/**
 * Format a time interval to a user friendly string format.
 * > Ex: `5 minutes 10 seconds`
 * @param interval The time interval in milliseconds to format in a user friendly fashion.
 */
function formatTimeInterval(interval) {
    var string_index = 1;
    var nb_seconds = Math.floor(Math.round((interval % MINUTE) / SECOND));
    var nb_minutes = Math.floor((interval % HOUR) / MINUTE);
    var nb_hour = Math.floor((interval % DAY) / HOUR);
    var nb_day = Math.floor((interval % WEEK) / DAY);
    var nb_week = Math.floor(interval / WEEK);
    var formater = function (nb, unit) { return nb + " " + unit + (nb === 1 ? '' : 's'); };
    var seconds_str = formater(nb_seconds, Object(external_window_Coveo_["l"])('second'));
    var minutes_str = formater(nb_minutes, Object(external_window_Coveo_["l"])('minute'));
    var hour_str = formater(nb_hour, Object(external_window_Coveo_["l"])('hour'));
    var day_str = formater(nb_day, Object(external_window_Coveo_["l"])('day'));
    var week_str = formater(nb_week, Object(external_window_Coveo_["l"])('week'));
    var time_per_unit = [
        [nb_week, "" + week_str + (nb_day > 0 ? " " + day_str : '')],
        [nb_day, "" + day_str + (nb_hour > 0 ? " " + hour_str : '')],
        [nb_hour, "" + hour_str + (nb_minutes > 0 ? " " + minutes_str : '')],
        [nb_minutes, "" + minutes_str + (nb_seconds > 0 ? " " + seconds_str : '')],
        [nb_seconds, seconds_str],
    ];
    var first_meaningful_tuple = time_per_unit.find(function (_a) {
        var amount = _a[0], _ = _a[1];
        return amount > 0;
    }) || [0, '0 seconds'];
    return first_meaningful_tuple[string_index];
}


// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/models/UserProfileModel.js
var UserProfileModel = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js
var icons = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/rest/UserProfilingEndpoint.js
var UserProfilingEndpoint = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/utils/events.js
var MANUAL_SEARCH_EVENT_CAUSE = Object.freeze([
    'omniboxAnalytics',
    'userActionsSubmit',
    'omniboxFromLink',
    'searchboxAsYouType',
    'searchboxSubmit',
    'searchFromLink',
]);


// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Strings.js
var Strings = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActivity.js
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};







var MAIN_CLASS = 'coveo-user-activity';
var CELL_CLASS = 'coveo-cell';
var TITLE_CLASS = 'coveo-title';
var DATA_CLASS = 'coveo-data';
var ORIGIN_CLASS = 'coveo-footer';
var ACTIVITY_TITLE_SECTION = 'coveo-activity-title-section';
var ACTIVITY_TITLE_CLASS = 'coveo-activity-title';
var ACTIVIY_TIMESTAMP_CLASS = 'coveo-activity-timestamp';
var HEADER_CLASS = 'coveo-header';
var ACTIVITY_CLASS = 'coveo-activity';
var CLICK_EVENT_CLASS = 'coveo-click';
var SEARCH_EVENT_CLASS = 'coveo-search';
var CUSTOM_EVENT_CLASS = 'coveo-custom';
var VIEW_EVENT_CLASS = 'coveo-view';
var FOLDED_CLASS = 'coveo-folded';
var TEXT_CLASS = 'coveo-text';
var ICON_CLASS = 'coveo-icon';
var BUBBLE_CLASS = 'coveo-bubble';
var WIDTH_CUTOFF = 350;
var UserActivity_UserActivity = /** @class */ (function (_super) {
    __extends(UserActivity, _super);
    /**
     * Create an instance of the **UserActivity** class. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function UserActivity(element, options, bindings) {
        var _this = _super.call(this, element, UserActivity.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, UserActivity, options);
        if (!_this.options.userId) {
            _this.disable();
            return _this;
        }
        _this.userProfileModel = Object(external_window_Coveo_["get"])(_this.root, UserProfileModel["a" /* UserProfileModel */]);
        _this.userProfileModel.getActions(_this.options.userId).then(function (actions) {
            _this.actions = actions.sort(function (a, b) { return a.timestamp.getTime() - b.timestamp.getTime(); });
            _this.foldedActions = _this.actions.filter(function (action) { return !_this.isUnfoldByDefault(action); });
            _this.render();
        });
        return _this;
    }
    UserActivity.prototype.isUnfoldByDefault = function (action) {
        var isCustom = action.type === UserProfilingEndpoint["a" /* UserActionType */].Custom;
        var isSearch = action.type === UserProfilingEndpoint["a" /* UserActionType */].Search;
        var isClick = action.type === UserProfilingEndpoint["a" /* UserActionType */].Click;
        var cause = (isCustom && action.raw.event_value) || (isSearch && action.raw.cause) || '';
        var useInclude = this.options.unfoldInclude && this.options.unfoldInclude.length > 0;
        var isExcluded = (isSearch || isCustom) && this.options.unfoldExclude.indexOf(cause) !== -1;
        var isIncluded = (isSearch || isCustom) && this.options.unfoldInclude.indexOf(cause) !== -1;
        return isClick || (useInclude && isIncluded) || (!useInclude && !isExcluded);
    };
    UserActivity.prototype.render = function () {
        var panel = document.createElement('div');
        panel.classList.add(MAIN_CLASS);
        var timestampSection = document.createElement('div');
        timestampSection.classList.add(HEADER_CLASS);
        this.buildTimestampSection().forEach(function (el) { return timestampSection.appendChild(el); });
        var activitySection = this.buildActivitySection();
        activitySection.classList.add(ACTIVITY_CLASS);
        panel.appendChild(timestampSection);
        panel.appendChild(activitySection);
        this.element.innerHTML = '';
        this.element.appendChild(panel);
    };
    UserActivity.prototype.buildActivitySection = function () {
        var _this = this;
        var list = document.createElement('ol');
        this.buildListItems(this.actions).forEach(function (listItem, index, array) {
            list.appendChild(listItem);
            if (index < array.length - 1) {
                list.appendChild(_this.buildBubble());
            }
        });
        return list;
    };
    UserActivity.prototype.buildBubble = function () {
        var li = document.createElement('li');
        li.classList.add(BUBBLE_CLASS);
        return li;
    };
    UserActivity.prototype.buildListItems = function (actions) {
        var _this = this;
        var nbUnfoldedActions = this.actions.length - this.foldedActions.length;
        return actions
            .reduce(function (acc, action) {
            var last = acc[acc.length - 1];
            if (_this.foldedActions.indexOf(action) !== -1 && nbUnfoldedActions > 0) {
                if (Array.isArray(last)) {
                    last.push(action);
                    return __spreadArrays(acc);
                }
                else {
                    return __spreadArrays(acc, [[action]]);
                }
            }
            else {
                return __spreadArrays(acc, [action]);
            }
        }, [])
            .map(function (item) {
            if (Array.isArray(item)) {
                return _this.buildFolded(item);
            }
            else {
                return _this.buildListItem(item);
            }
        });
    };
    UserActivity.prototype.buildListItem = function (action) {
        var li;
        switch (action.type) {
            case UserProfilingEndpoint["a" /* UserActionType */].Click:
                li = this.buildClickEvent(action);
                break;
            case UserProfilingEndpoint["a" /* UserActionType */].Search:
                li = this.buildSearchEvent(action);
                break;
            case UserProfilingEndpoint["a" /* UserActionType */].PageView:
                li = this.buildViewEvent(action);
                break;
            default:
            case UserProfilingEndpoint["a" /* UserActionType */].Custom:
                li = this.buildCustomEvent(action);
                break;
        }
        return li;
    };
    UserActivity.prototype.buildFolded = function (actions) {
        var _this = this;
        var li = document.createElement('li');
        li.classList.add(FOLDED_CLASS);
        var hr = document.createElement('hr');
        var span = document.createElement('span');
        span.classList.add(TEXT_CLASS);
        span.innerText = actions.length + " " + (actions.length > 1 ? Object(external_window_Coveo_["l"])(UserActivity.ID + "_other_events") : Object(external_window_Coveo_["l"])(UserActivity.ID + "_other_event"));
        hr.appendChild(span);
        li.addEventListener('click', function () {
            _this.foldedActions = _this.foldedActions.filter(function (action) { return actions.indexOf(action) === -1; });
            _this.render();
        });
        li.appendChild(hr);
        return li;
    };
    UserActivity.prototype.buildClickEvent = function (action) {
        var li = document.createElement('li');
        li.classList.add(CLICK_EVENT_CLASS);
        var dataElement = document.createElement('a');
        dataElement.classList.add(DATA_CLASS);
        dataElement.innerText = (action.document && action.document.title) || '';
        dataElement.href = (action.document && action.document.clickUri) || '';
        document.createAttributeNS('svg', 'svg');
        li.appendChild(this.buildTitleSection(action));
        if (action.document) {
            li.appendChild(dataElement);
        }
        li.appendChild(this.buildOriginElement(action));
        li.appendChild(this.buildIcon(icons["d" /* duplicate */]));
        return li;
    };
    UserActivity.prototype.buildSearchEvent = function (action) {
        var li = document.createElement('li');
        li.classList.add(SEARCH_EVENT_CLASS);
        li.appendChild(this.buildTitleSection(action));
        if (action.query) {
            var dataElement = document.createElement('div');
            dataElement.classList.add(DATA_CLASS);
            dataElement.innerText = action.query || '';
            li.appendChild(dataElement);
        }
        li.appendChild(this.buildOriginElement(action));
        li.appendChild(this.buildIcon(icons["e" /* search */]));
        return li;
    };
    UserActivity.prototype.buildViewEvent = function (action) {
        var li = document.createElement('li');
        li.classList.add(VIEW_EVENT_CLASS);
        var dataElement = document.createElement('div');
        dataElement.classList.add(DATA_CLASS);
        dataElement.innerText = action.raw.content_id_key + ": " + action.raw.content_id_value;
        li.appendChild(this.buildTitleSection(action));
        li.appendChild(dataElement);
        li.appendChild(this.buildOriginElement(action));
        li.appendChild(this.buildIcon(icons["g" /* view */]));
        return li;
    };
    UserActivity.prototype.buildCustomEvent = function (action) {
        var li = document.createElement('li');
        li.classList.add(CUSTOM_EVENT_CLASS);
        var titleElem = document.createElement('div');
        titleElem.classList.add(ACTIVITY_TITLE_CLASS);
        titleElem.innerText = "" + Object(external_window_Coveo_["l"])(action.raw.event_type || UserActivity.ID + "_custom");
        var titleSection = this.buildTitleSection(action);
        titleSection.querySelector("." + ACTIVITY_TITLE_CLASS).remove();
        titleSection.insertBefore(titleElem, titleSection.firstChild);
        var dataElement = document.createElement('div');
        dataElement.classList.add(DATA_CLASS);
        dataElement.innerText = action.raw.event_value || '';
        li.appendChild(titleSection);
        li.appendChild(dataElement);
        li.appendChild(this.buildOriginElement(action));
        li.appendChild(this.buildIcon(icons["c" /* dot */]));
        return li;
    };
    UserActivity.prototype.buildOriginElement = function (action) {
        var el = document.createElement('div');
        el.classList.add(ORIGIN_CLASS);
        el.innerText = action.raw.origin_level_1 || '';
        return el;
    };
    UserActivity.prototype.buildTimestampElement = function (action) {
        var el = document.createElement('div');
        el.classList.add(ACTIVIY_TIMESTAMP_CLASS);
        el.innerText = this.element.offsetWidth > WIDTH_CUTOFF ? formatDateAndTime(action.timestamp) : formatDateAndTimeShort(action.timestamp);
        return el;
    };
    UserActivity.prototype.buildTitleElement = function (action) {
        var title = this.isManualSubmitAction(action) ? 'query' : action.type.toLowerCase();
        var el = document.createElement('div');
        el.classList.add(ACTIVITY_TITLE_CLASS);
        el.innerText = Object(external_window_Coveo_["l"])(UserActivity.ID + "_" + title);
        return el;
    };
    UserActivity.prototype.buildTitleSection = function (action) {
        var titleSection = document.createElement('div');
        titleSection.classList.add(ACTIVITY_TITLE_SECTION);
        titleSection.appendChild(this.buildTitleElement(action));
        titleSection.appendChild(this.buildTimestampElement(action));
        return titleSection;
    };
    UserActivity.prototype.buildIcon = function (icon) {
        var el = document.createElement('div');
        el.classList.add(ICON_CLASS);
        el.innerHTML = icon;
        return el;
    };
    UserActivity.prototype.buildTimestampSection = function () {
        var startDate = this.actions[0];
        var endDate = this.actions[this.actions.length - 1];
        var duration = endDate.timestamp.getTime() - startDate.timestamp.getTime();
        return [
            this.buildTimestampCell({ title: Object(external_window_Coveo_["l"])(UserActivity.ID + "_start_date"), data: formatDate(startDate.timestamp) }),
            this.buildTimestampCell({ title: Object(external_window_Coveo_["l"])(UserActivity.ID + "_start_time"), data: formatTime(startDate.timestamp) }),
            this.buildTimestampCell({ title: Object(external_window_Coveo_["l"])(UserActivity.ID + "_duration"), data: formatTimeInterval(duration) }),
        ];
    };
    UserActivity.prototype.buildTimestampCell = function (_a) {
        var title = _a.title, data = _a.data;
        var cell = document.createElement('div');
        cell.classList.add(CELL_CLASS);
        var titleElement = document.createElement('div');
        titleElement.classList.add(TITLE_CLASS);
        titleElement.innerText = title;
        var dataElement = document.createElement('div');
        dataElement.classList.add(DATA_CLASS);
        dataElement.innerText = data;
        cell.appendChild(titleElement);
        cell.appendChild(dataElement);
        return cell;
    };
    /**
     * Dertermine if an action is a manual search submit.
     * A manual search submit is a Search event that has a query expression and that the cause is one of the above:
     * + **omniboxAnalytics**
     * + **userActionsSubmit**
     * + **omniboxFromLink**
     * + **searchboxAsYouType**
     * + **searchboxSubmit**
     * + **searchFromLink**
     * @param action Action that will be tested.
     */
    UserActivity.prototype.isManualSubmitAction = function (action) {
        return action.type === UserProfilingEndpoint["a" /* UserActionType */].Search && action.raw.query_expression && MANUAL_SEARCH_EVENT_CAUSE.indexOf(action.raw.cause) !== -1;
    };
    return UserActivity;
}(external_window_Coveo_["Component"]));

UserActivity_UserActivity.ID = 'UserActivity';
UserActivity_UserActivity.options = {
    userId: external_window_Coveo_["ComponentOptions"].buildStringOption({ required: true }),
    unfoldInclude: external_window_Coveo_["ComponentOptions"].buildListOption({
        defaultValue: [
            'didyoumeanAutomatic',
            'didyoumeanClick',
            'omniboxAnalytics',
            'omniboxFromLink',
            'searchboxSubmit',
            'searchFromLink',
            'userActionsSubmit',
        ],
        required: true,
    }),
    unfoldExclude: external_window_Coveo_["ComponentOptions"].buildListOption({
        defaultValue: [],
        required: true,
    }),
};
external_window_Coveo_["Initialization"].registerAutoCreateComponent(UserActivity_UserActivity);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ViewedByCustomer_ViewedByCustomer; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActions.js + 1 modules
var UserActions = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js
var icons = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js
var translation = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/Strings.js

translation["b" /* Translation */].register(translation["a" /* Language */].English, {
    ViewedByCustomer_DefaultLabel: 'Viewed by Customer',
});


// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/ViewedByCustomer.js
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
 * The _ViewedByCustomer_  component allows your agents to see, within the Salesforce Lightning console, every result which the user clicked. It displays an icon and a label on each result, if already viewed by the customer who created the case (see [Coveo Component ViewedByCustomer](https://docs.coveo.com/en/3073/coveoforsalesforce/viewedbycustomercomponent)).
 * ```html
 * <div class="CoveoViewedByCustomer"></div>
 * ```
 */
var ViewedByCustomer_ViewedByCustomer = /** @class */ (function (_super) {
    __extends(ViewedByCustomer, _super);
    /**
     * Create an instance of {@link ViewedByCustomer}.
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function ViewedByCustomer(element, options, bindings, result) {
        var _this = _super.call(this, element, ViewedByCustomer.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        if (_this.root.getElementsByClassName(external_window_Coveo_["Component"].computeCssClassNameForType(UserActions["a" /* UserActions */].ID)).length === 0) {
            _this.logger.warn('The ViewedByCustomer component has been detected without a UserActions component. You may encounter issues with the former.');
        }
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, ViewedByCustomer, options);
        result = result ? result : _this.resolveResult();
        if (!result) {
            throw new Error('No result found on result component ViewedByCustomer.');
        }
        if (result.isUserActionView) {
            _this.render();
        }
        return _this;
    }
    ViewedByCustomer.prototype.render = function () {
        if (this.options.showIcon) {
            var iconElement = document.createElement('span');
            iconElement.classList.add(ViewedByCustomer.ICON_CLASS);
            iconElement.innerHTML = icons["f" /* user */];
            this.element.appendChild(iconElement);
        }
        var labelElement = document.createElement('span');
        labelElement.classList.add(ViewedByCustomer.LABEL_CLASS);
        labelElement.innerText = this.options.label;
        this.element.appendChild(labelElement);
    };
    /**
     * Generate a ViewedByCustomer in a preformated Dom ready to be inserted in a result
     * @param bindings bindings to be used by the {@link ViewedByCustomer}
     * @param result result to be used by the {@link ViewedByCustomer}
     */
    ViewedByCustomer.getViewedByCustomerResultRowDom = function (bindings, result) {
        var viewedByCustomerRow = document.createElement('div');
        viewedByCustomerRow.classList.add('coveo-result-row');
        var viewedByCustomerCell = document.createElement('div');
        viewedByCustomerCell.classList.add('coveo-result-cell');
        var viewedByCustomerElement = document.createElement('span');
        new ViewedByCustomer(viewedByCustomerElement, undefined, bindings, result);
        viewedByCustomerCell.appendChild(viewedByCustomerElement);
        viewedByCustomerRow.appendChild(viewedByCustomerCell);
        return viewedByCustomerRow;
    };
    return ViewedByCustomer;
}(external_window_Coveo_["Component"]));

/**
 * Unique Identifier used by the Search-UI.
 */
ViewedByCustomer_ViewedByCustomer.ID = 'ViewedByCustomer';
/**
 * Default options used by the component.
 */
ViewedByCustomer_ViewedByCustomer.options = {
    showIcon: external_window_Coveo_["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    label: external_window_Coveo_["ComponentOptions"].buildStringOption({ defaultValue: Object(external_window_Coveo_["l"])(ViewedByCustomer_ViewedByCustomer.ID + "_DefaultLabel") }),
};
// Internal CSS selectors.
ViewedByCustomer_ViewedByCustomer.ICON_CLASS = 'viewed-by-customer-icon';
ViewedByCustomer_ViewedByCustomer.LABEL_CLASS = 'viewed-by-customer-label';
external_window_Coveo_["Initialization"].registerAutoCreateComponent(ViewedByCustomer_ViewedByCustomer);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultActionsPostToFeed; });
/* harmony import */ var _ResultActionsMenu_ResultActionsEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var utils_Translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
var _strings_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(45, 1);
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
 * The _ResultActionsPostToFeed_ component is a Result Template component designed to work
 * with the _ResultActionsMenu_ Result Template component.
 *
 * Its main purpose is to insert the current result in a Salesforce Chatter "Post".
 *
 * ```html
 * <div class="CoveoResultActionsMenu">
 *  <div class="CoveoResultActionsPostToFeed"></div>
 * </div>
 * ```
 */
var ResultActionsPostToFeed = /** @class */ (function (_super) {
    __extends(ResultActionsPostToFeed, _super);
    function ResultActionsPostToFeed(element, options, bindings, result) {
        var _this = _super.call(this, element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, ResultActionsPostToFeed, options), bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        // Build the target fields from the component options.
        _this.options.targetFields = {
            Body: {
                value: _this.options.body,
                insertType: _this.options.insertType,
            },
        };
        return _this;
    }
    ResultActionsPostToFeed.ID = 'ResultActionsPostToFeed';
    // The Salesforce quick action name for PostToFeed.
    ResultActionsPostToFeed.actionName = 'FeedItem.TextPost';
    /**
     * The possible options for _ResultActionsPostToFeed_
     * @componentOptions
     */
    ResultActionsPostToFeed.options = {
        quickActionAPI: modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* ResultQuickAction */ "a"].options.quickActionAPI,
        /**
         * Specifies the template that will be inserted in the "body" of the post.
         *
         * Default value is `<b>${title}</b> (${ClickUri})<br /><p><i>"${Excerpt}"</i></p>`.
         *
         * ```html
         * <div data-body='<b>${title}</b> (${ClickUri})<br /><p><i>"${Excerpt}"</i></p>'/>
         * ```
         */
        body: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({
            defaultValue: '<b>${title}</b> (${ClickUri})<br /><p><i>"${Excerpt}"</i></p>',
        }),
        /**
         * Specifies if the component should submit the post right away.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-auto-submit='true'/>
         * ```
         */
        autoSubmit: modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* ResultQuickAction */ "a"].options.autoSubmit,
        /**
         * Specifies how the component should insert the text in the post.
         * Possible values are `begin`, `end`, `cursor` and `replace`.
         *
         * Default value is `replace`.
         *
         * ```html
         * <div data-insert-type='cursor'/>
         * ```
         */
        insertType: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: 'replace' }),
        actionName: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: ResultActionsPostToFeed.actionName }),
        onSendActionEvent: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: _ResultActionsMenu_ResultActionsEvents__WEBPACK_IMPORTED_MODULE_0__[/* ResultActionsEvents */ "a"].onPostToFeed }),
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: _icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a }),
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildCustomOption(function (tooltip) { return tooltip; }, { defaultFunction: function () { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('PostToFeed_tooltip'); } }),
    };
    return ResultActionsPostToFeed;
}(modules_search_ts__WEBPACK_IMPORTED_MODULE_2__[/* ResultQuickAction */ "a"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(ResultActionsPostToFeed);
// Load strings

utils_Translation__WEBPACK_IMPORTED_MODULE_3__[/* Translation */ "a"].register('en', _strings_json__WEBPACK_IMPORTED_MODULE_5___namespace);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultActionsSendEmail; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var components_search_ui_ResultActionsMenu_ResultActionsEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var utils_Translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
var _strings_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(47, 1);
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
 * The _ResultActionsSendEmail_ component is a Result Template component designed to work
 * with the _ResultActionsMenu_ Result Template component.
 *
 * Its main purpose is to insert the current result in a Salesforce "Email".
 *
 * ```html
 * <div class="CoveoResultActionsMenu">
 *  <div class="ResultActionsSendEmail"></div>
 * </div>
 * ```
 */
var ResultActionsSendEmail = /** @class */ (function (_super) {
    __extends(ResultActionsSendEmail, _super);
    function ResultActionsSendEmail(element, options, bindings, result) {
        var _this = _super.call(this, element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ResultActionsSendEmail, options), bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        // Set the action name to case default if in case and no custom action was specified.
        if (_this.options.actionName === ResultActionsSendEmail.actionName && _this.options.recordType === 'Case') {
            _this.options.actionName = ResultActionsSendEmail.caseActionName;
        }
        // Build the target fields from the component options.
        _this.options.targetFields = {
            HtmlBody: {
                value: _this.options.htmlBody,
                insertType: _this.options.insertType,
            },
        };
        return _this;
    }
    ResultActionsSendEmail.ID = 'ResultActionsSendEmail';
    // The Salesforce quick action name for SendEmail.
    ResultActionsSendEmail.actionName = 'SendEmail';
    ResultActionsSendEmail.caseActionName = 'Case.SendEmail';
    /**
     * The possible options for _ResultActionsSendEmail_
     * @componentOptions
     */
    ResultActionsSendEmail.options = {
        quickActionAPI: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function () { return null; }, { required: true }),
        /**
         * Specifies the template that will be inserted in the "htmlBody" of the Email.
         *
         * Default value is `<a href="${ClickUri}">${title}</a>.`.
         *
         * ```html
         * <div data-html-body='<a href="${ClickUri}">${title}</a>.'/>
         * ```
         */
        htmlBody: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '<a href="${ClickUri}">${title}</a>.' }),
        /**
         * Specifies how the component should insert the text in the email.
         * Possible values are `begin`, `end`, `cursor` and `replace`.
         *
         * Default value is `replace`.
         *
         * ```html
         * <div data-insert-type='cursor'/>
         * ```
         */
        insertType: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'replace' }),
        actionName: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: ResultActionsSendEmail.actionName }),
        onSendActionEvent: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: components_search_ui_ResultActionsMenu_ResultActionsEvents__WEBPACK_IMPORTED_MODULE_2__[/* ResultActionsEvents */ "a"].onSendAsEmail }),
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: _icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a }),
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (tooltip) { return tooltip; }, { defaultFunction: function () { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('SendAsEmail_tooltip'); } }),
        recordType: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'Case' }),
    };
    return ResultActionsSendEmail;
}(modules_search_ts__WEBPACK_IMPORTED_MODULE_1__[/* ResultQuickAction */ "a"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ResultActionsSendEmail);
// Load strings.

utils_Translation__WEBPACK_IMPORTED_MODULE_3__[/* Translation */ "a"].register('en', _strings_json__WEBPACK_IMPORTED_MODULE_5___namespace);


/***/ }),
/* 52 */,
/* 53 */
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultActionsSendLiveAgent; });
/* harmony import */ var components_search_ui_ResultActionsMenu_ResultActionsEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var utils_Translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
var _strings_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(57, 1);
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







/**
 * The _ResultActionsSendLiveAgent_ component is a Result Template component designed to work
 * with the _ResultActionsMenu_ Result Template component.
 *
 * Its main purpose is to insert the current result in a Salesforce Live Agent chat window.
 *
 * ```html
 * <div class="CoveoResultActionsMenu">
 *  <div class="CoveoResultActionsSendLiveAgent"></div>
 * </div>
 * ```
 */
var ResultActionsSendLiveAgent = /** @class */ (function (_super) {
    __extends(ResultActionsSendLiveAgent, _super);
    function ResultActionsSendLiveAgent(element, options, bindings, result) {
        var _this = _super.call(this, element, __assign(__assign({}, options), { tooltip: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('LiveAgent_tooltip'), icon: _icon_svg__WEBPACK_IMPORTED_MODULE_6___default.a }), bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = __assign(__assign({}, coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, ResultActionsSendLiveAgent, options)), { tooltip: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('LiveAgent_tooltip'), icon: _icon_svg__WEBPACK_IMPORTED_MODULE_6___default.a });
        // Refresh the component on tab focus
        _this.bind.onRootElement(components_search_ui_ResultActionsMenu_ResultActionsEvents__WEBPACK_IMPORTED_MODULE_0__[/* ResultActionsEvents */ "a"].onTabFocused, _this.checkActionExist.bind(_this));
        // In case somebody is trying to put that outside of the InsightPanel.
        if (!_this.options.conversationToolkit) {
            _this.logger.warn('You need to provide the Salesforce ConversationToolkit API for this component to work.');
        }
        else {
            /*
             * Detects if the component should initialize.
             * RecordId should be a LiveChatTranscript object and "getChatLog" should return something (live session).
             */
            if (_this.options.recordId && _this.options.recordId.substr(0, 3) === ResultActionsSendLiveAgent.LiveChatTranscriptObjectPrefix) {
                _this.checkActionExist();
            }
            else {
                _this.deactivate("Unsupported ID prefix " + _this.options.recordId.substr(0, 3));
            }
        }
        return _this;
    }
    /*
     * Detects if the component should initialize.
     * Checks that the action exists
     */
    ResultActionsSendLiveAgent.prototype.checkActionExist = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.options.conversationToolkit.getChatLog({ recordId: this.options.recordId })];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            throw new Error('Chat log action not found.');
                        }
                        this.init();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.logger.warn(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ResultActionsSendLiveAgent.prototype.init = function () {
        this.bindEvent();
        _super.prototype.init.call(this);
    };
    ResultActionsSendLiveAgent.prototype.bindEvent = function () {
        this.bind.onRootElement(components_search_ui_ResultActionsMenu_ResultActionsEvents__WEBPACK_IMPORTED_MODULE_0__[/* ResultActionsEvents */ "a"].onChatEnded, this.handleChatEnded.bind(this));
    };
    ResultActionsSendLiveAgent.prototype.handleChatEnded = function () {
        this.logger.info('Chat ended, removing the component.');
        this.element.remove();
        /*
         * We have no way of validate afterward if the chat was ended.
         * (Salesforce let us access de log en send message event when the chat has ended)
         * At least those button will be hidden.
         */
        var ENDED_CHAT = 'coveo-chat-ended';
        if (!this.searchInterface.element.classList.contains(ENDED_CHAT)) {
            this.searchInterface.element.classList.add(ENDED_CHAT);
        }
    };
    ResultActionsSendLiveAgent.prototype.doAction = function () {
        var _this = this;
        var args = {
            recordId: this.options.recordId,
            message: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].buildStringTemplateFromResult(this.options.text, this.result),
        };
        // This is used to allow clients to hook and edit the arg before sending to Salesforce.
        this.bind.trigger(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["$$"])(this.root), components_search_ui_ResultActionsMenu_ResultActionsEvents__WEBPACK_IMPORTED_MODULE_0__[/* ResultActionsEvents */ "a"].onSendToLiveAgent, { result: this.result, args: args });
        this.usageAnalytics.logClickEvent(modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_2__[/* UserActionCause */ "a"].sendToLiveAgent, null, this.result, this.root);
        /**
         * In Spring 19 salesforce update, the arguments format for the *SendMessage* method has change from
         * ```typescript
         * interface arguments {
         *   recordId: string;
         *   message: string;
         * }
         * ```
         *
         * to
         *
         * ```typescript
         * interface ISendMessageArgs {
         *   recordId: string;
         *   message: {
         *     text: string;
         *   }
         * }
         * ```
         *
         * Because using the conversation toolkit api before spring 19 was a beta feature, they have the right to break it.
         * To support existing client that are using the live agent with a pre spring 19 salesforce org, we must offer the ability to route to the previous behaviors.
         */
        if (!this.options.useBetaConversationToolkit) {
            args = {
                recordId: args.recordId,
                message: {
                    text: args.message,
                },
            };
        }
        var SEND_LIVE_AGENT_ERROR_MESSAGE = 'An error occured while performing the desired action.';
        this.options.conversationToolkit.sendMessage(args).then(function (result) {
            if (result || _this.options.useBetaConversationToolkit)
                _this.logger.info('Action sent', args);
            else {
                utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_3__[/* SalesforceUtilities */ "c"].showToastError(SEND_LIVE_AGENT_ERROR_MESSAGE, 'Failed to send message', _this.logger);
            }
        }, function (error) { return utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_3__[/* SalesforceUtilities */ "c"].showToastError(SEND_LIVE_AGENT_ERROR_MESSAGE, error, _this.logger); });
    };
    ResultActionsSendLiveAgent.ID = 'ResultActionsSendLiveAgent';
    /**
     * The possible options for _ResultActionsSendLiveAgent_
     * @componentOptions
     */
    ResultActionsSendLiveAgent.options = {
        conversationToolkit: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildCustomOption(function () { return null; }, { required: true }),
        recordId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: null, required: true }),
        useBetaConversationToolkit: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies the template that will be inserted in the "text" of the message.
         *
         * Default value is `${title} ${ClickUri}`.
         *
         * ```html
         * <div data-text='${title} ${ClickUri}'/>
         * ```
         */
        text: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({
            defaultValue: '${title} ${ClickUri}',
        }),
    };
    ResultActionsSendLiveAgent.LiveChatTranscriptObjectPrefix = '570';
    return ResultActionsSendLiveAgent;
}(modules_search_ts__WEBPACK_IMPORTED_MODULE_5__[/* ResultAction */ "a"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(ResultActionsSendLiveAgent);
// Load strings

utils_Translation__WEBPACK_IMPORTED_MODULE_4__[/* Translation */ "a"].register('en', _strings_json__WEBPACK_IMPORTED_MODULE_7___namespace);


/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataStore; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_insightPanel_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var modules_insightPanel_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var modules_insightPanel_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var modules_agentPanel_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var modules_agentPanel_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony import */ var modules_agentPanel_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);
/* harmony import */ var modules_agentPanel_ts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53);
/* harmony import */ var coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30);
/* harmony import */ var coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75);
/* harmony import */ var modules_search_interfaceEditor_InterfaceEditorExtension__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50);
/* harmony import */ var modules_search_interfaceEditor_InterfaceEditorExtension__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51);
/* harmony import */ var modules_search_interfaceEditor_InterfaceEditorExtension__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54);
var _a;





var getComponentSelector = function (component) { return coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeSelectorForType(component.ID); };
var getNumberOf = function (node, selector) { return node.querySelectorAll(selector).length; };
var exist = function (node, selector) { return node.querySelector(selector) != null; };
var FACET_CSS_SELECTOR = [coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Facet"], coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["FacetRange"], coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["FacetSlider"], coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["DynamicFacet"], coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["DynamicFacetRange"], coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["DynamicHierarchicalFacet"]]
    .map(getComponentSelector)
    .join(', ');
var TAB_CSS_SELECTOR = getComponentSelector(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Tab"]);
var TEMPLATE_CSS_SELECTOR = '.result-template';
var BOX_ATTACH_TO_CASE_SELECTOR = getComponentSelector(modules_insightPanel_ts__WEBPACK_IMPORTED_MODULE_1__[/* BoxAttachToCase */ "a"]);
var BOX_CREATE_ARTICLE_SELECTOR = getComponentSelector(modules_insightPanel_ts__WEBPACK_IMPORTED_MODULE_2__[/* BoxCreateArticle */ "a"]) + ":not([data-hidden=\"true\"])";
var USER_ACTIONS_SELECTOR = getComponentSelector(coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_8__[/* UserActions */ "a"]);
var FULLSEARCH_SELECTOR = getComponentSelector(modules_agentPanel_ts__WEBPACK_IMPORTED_MODULE_4__[/* FullSearch */ "a"]);
var FULLSEARCH_BUTTON_SELECTOR = getComponentSelector(modules_agentPanel_ts__WEBPACK_IMPORTED_MODULE_5__[/* FullSearchButton */ "a"]);
var CREATE_ARTICLE_SELECTOR = getComponentSelector(modules_agentPanel_ts__WEBPACK_IMPORTED_MODULE_6__[/* CreateArticle */ "a"]);
var CREATE_ARTICLE_BUTTON_SELECTOR = getComponentSelector(modules_agentPanel_ts__WEBPACK_IMPORTED_MODULE_7__[/* CreateArticleButton */ "a"]);
var COPY_TO_CLIPBOARD_SELECTOR = getComponentSelector(coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_9__[/* CopyToClipboard */ "a"]);
var POST_TO_FEED_SELECTOR = getComponentSelector(modules_search_interfaceEditor_InterfaceEditorExtension__WEBPACK_IMPORTED_MODULE_10__[/* ResultActionsPostToFeed */ "a"]);
var SEND_EMAIL_SELECTOR = getComponentSelector(modules_search_interfaceEditor_InterfaceEditorExtension__WEBPACK_IMPORTED_MODULE_11__[/* ResultActionsSendEmail */ "a"]);
var ATTACH_TO_CASE_SELECTOR = getComponentSelector(modules_insightPanel_ts__WEBPACK_IMPORTED_MODULE_3__[/* AttachToCase */ "a"]);
var SEND_LIVE_AGENT_SELECTOR = getComponentSelector(modules_search_interfaceEditor_InterfaceEditorExtension__WEBPACK_IMPORTED_MODULE_12__[/* ResultActionsSendLiveAgent */ "a"]);
var SEARCH_INTERFACE_SELECTOR = getComponentSelector(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"]);
/**
 * Metadata store use to store and analyze search interfaces.
 */
var MetadataStore = /** @class */ (function () {
    /**
     * Attach a event listener that add telemetry metadata to the first interfaceLoad event or the first input change event.
     * @param root The root of the search interface to analyze.
     */
    function MetadataStore(root) {
        var _this = this;
        this.root = root;
        this.parser = new DOMParser();
        this.logger = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Logger"](this);
        this.store = new Map();
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(root).one(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["AnalyticsEvents"].changeAnalyticsCustomData, function (_, args) {
            if (!_this.isLandingEvent(args.actionCause)) {
                return;
            }
            _this.store.forEach(function (value, key) {
                args.metaObject[key] = "" + value;
            });
        });
    }
    MetadataStore.prototype.isLandingEvent = function (actionCause) {
        var isCaseCreation = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.root).hasClass('CoveoCaseCreationInterface');
        var isInterfaceLoad = actionCause === coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].interfaceLoad.name;
        var isSearchFromLink = actionCause === coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].searchFromLink.name;
        var isInputChange = actionCause === coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseCreationInputChange.name;
        return (isCaseCreation && isInputChange) || isInterfaceLoad || isSearchFromLink;
    };
    /**
     * Analyze a template to extract some metadata.
     *
     * @param root The root HTMLElement to analyze from.
     * @param metrics The metrics to measure.
     */
    MetadataStore.prototype.analyze = function (template, metrics) {
        var _this = this;
        metrics.forEach(function (metric) { var _a, _b; return _this.put(metric, (_b = (_a = MetadataStore.metricDefinitions[metric]) === null || _a === void 0 ? void 0 : _a.calculation) === null || _b === void 0 ? void 0 : _b.call(_a, template)); });
    };
    /**
     * Analyze a template string to extract some metadata.
     *
     * @param root The root HTMLElement to analyze from.
     * @param metrics The metrics to measure.
     */
    MetadataStore.prototype.analyzeString = function (template, metrics) {
        var _this = this;
        metrics.forEach(function (metric) { var _a, _b; return _this.put(metric, (_b = (_a = MetadataStore.metricDefinitions[metric]) === null || _a === void 0 ? void 0 : _a.calculation) === null || _b === void 0 ? void 0 : _b.call(_a, _this.buildDocument(template))); });
    };
    /**
     * Put a metadata key/value pair in the store.
     * @param key The metadata key.
     * @param value The metadata value.
     */
    MetadataStore.prototype.put = function (key, value) {
        var _a;
        if (this.doesMetricExist(key) && this.doesValueMatchType(key, value)) {
            if (typeof value === 'boolean') {
                this.store.set(key, value || ((_a = this.get(key)) !== null && _a !== void 0 ? _a : false));
            }
            else {
                this.store.set(key, value);
            }
        }
    };
    /**
     * Get a metadata key/value pair in the store.
     * @param key The metadata key.
     */
    MetadataStore.prototype.get = function (key) {
        return this.store.get(key);
    };
    MetadataStore.prototype.doesMetricExist = function (metric) {
        var result = MetadataStore.metricDefinitions[metric] != undefined;
        if (!result) {
            this.logger.error(metric, 'Metric does not exist.');
        }
        return result;
    };
    MetadataStore.prototype.doesValueMatchType = function (metric, value) {
        var _a;
        var metricType = (_a = MetadataStore.metricDefinitions[metric]) === null || _a === void 0 ? void 0 : _a.type;
        var result = typeof value === metricType;
        if (!result) {
            this.logger.warn(metric, value, "Value is not a '" + metricType + "'.");
        }
        return result;
    };
    MetadataStore.prototype.buildDocument = function (html) {
        return this.parser.parseFromString("<div>" + html + "</div>", 'application/xml');
    };
    MetadataStore.CLASSIC_METRICS = [
        "nb_of_facets" /* NbOfFacets */,
        "nb_of_tabs" /* NbOfTabs */,
        "nb_of_templates" /* NbOfTemplates */,
        "box_create_article_enabled" /* BoxCreateArticleEnabled */,
        "box_user_actions_enabled" /* BoxUserActionsEnabled */,
    ];
    MetadataStore.CLASSIC_TEMPLATE_METRICS = ["box_attach_to_case_enabled" /* BoxAttachToCaseEnabled */];
    MetadataStore.LIGHTNING_TEMPLATE_METRICS = [
        "copy_to_clipboard_enabled" /* CopyToClipboardEnabled */,
        "post_to_feed_enabled" /* PostToFeedEnabled */,
        "send_email_enabled" /* SendEmailEnabled */,
        "attach_to_case_enabled" /* AttachToCaseEnabled */,
        "send_live_agent_enabled" /* SendLiveAgent */,
    ];
    MetadataStore.LIGHTNING_PAGE_METRICS = [
        "nb_of_facets" /* NbOfFacets */,
        "nb_of_tabs" /* NbOfTabs */,
        "nb_of_templates" /* NbOfTemplates */,
        "fullsearch_enabled" /* FullSearchEnabled */,
        "create_article_enabled" /* CreateArticleEnabled */,
        "user_actions_enabled" /* UserActionsEnabled */,
        "agent_panel_design" /* AgentPanelDesign */,
    ];
    MetadataStore.LIGHTNING_CUSTOM_SCRIPT_METRIC = "is_custom_script_used" /* IsCustomScriptUsed */;
    MetadataStore.metricDefinitions = (_a = {},
        _a["nb_of_facets" /* NbOfFacets */] = { type: 'number', calculation: function (root) { return getNumberOf(root, FACET_CSS_SELECTOR); } },
        _a["nb_of_tabs" /* NbOfTabs */] = { type: 'number', calculation: function (root) { return getNumberOf(root, TAB_CSS_SELECTOR); } },
        _a["nb_of_templates" /* NbOfTemplates */] = { type: 'number', calculation: function (root) { return getNumberOf(root, TEMPLATE_CSS_SELECTOR); } },
        _a["box_attach_to_case_enabled" /* BoxAttachToCaseEnabled */] = { type: 'boolean', calculation: function (root) { return exist(root, BOX_ATTACH_TO_CASE_SELECTOR); } },
        _a["box_create_article_enabled" /* BoxCreateArticleEnabled */] = { type: 'boolean', calculation: function (root) { return exist(root, BOX_CREATE_ARTICLE_SELECTOR); } },
        _a["box_user_actions_enabled" /* BoxUserActionsEnabled */] = { type: 'boolean', calculation: function (root) { return exist(root, USER_ACTIONS_SELECTOR); } },
        _a["is_custom_script_used" /* IsCustomScriptUsed */] = { type: 'boolean' },
        _a["fullsearch_enabled" /* FullSearchEnabled */] = {
            type: 'boolean',
            calculation: function (root) { return exist(root, FULLSEARCH_SELECTOR) || exist(root, FULLSEARCH_BUTTON_SELECTOR); },
        },
        _a["create_article_enabled" /* CreateArticleEnabled */] = {
            type: 'boolean',
            calculation: function (root) { return exist(root, CREATE_ARTICLE_SELECTOR) || exist(root, CREATE_ARTICLE_BUTTON_SELECTOR); },
        },
        _a["user_actions_enabled" /* UserActionsEnabled */] = { type: 'boolean', calculation: function (root) { return exist(root, USER_ACTIONS_SELECTOR); } },
        _a["copy_to_clipboard_enabled" /* CopyToClipboardEnabled */] = { type: 'boolean', calculation: function (root) { return exist(root, COPY_TO_CLIPBOARD_SELECTOR); } },
        _a["post_to_feed_enabled" /* PostToFeedEnabled */] = { type: 'boolean', calculation: function (root) { return exist(root, POST_TO_FEED_SELECTOR); } },
        _a["send_email_enabled" /* SendEmailEnabled */] = { type: 'boolean', calculation: function (root) { return exist(root, SEND_EMAIL_SELECTOR); } },
        _a["attach_to_case_enabled" /* AttachToCaseEnabled */] = { type: 'boolean', calculation: function (root) { return exist(root, ATTACH_TO_CASE_SELECTOR); } },
        _a["send_live_agent_enabled" /* SendLiveAgent */] = { type: 'boolean', calculation: function (root) { return exist(root, SEND_LIVE_AGENT_SELECTOR); } },
        _a["agent_panel_design" /* AgentPanelDesign */] = {
            type: 'string',
            calculation: function (root) {
                var _a;
                return ((_a = (root instanceof HTMLElement ? root : root.querySelector(SEARCH_INTERFACE_SELECTOR))) === null || _a === void 0 ? void 0 : _a.getAttribute('data-sf-design')) ||
                    'design undefined';
            },
        },
        _a);
    return MetadataStore;
}());



/***/ }),
/* 57 */
/***/ (function(module) {

module.exports = JSON.parse("{\"ResultActionsSendLiveAgent_text\":{\"en\":\"Text\"}}");

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxHeader; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoxEditLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var _BoxExpandLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87);
/* harmony import */ var _BoxStateModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _BoxQuerySummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95);
/* harmony import */ var _SalesforceContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
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
 * The _BoxHeader_ component takes care of instantiating a `Searchbox` component with preconfigured options and a placeholder (see [Coveo Searchbox Component](https://coveo.github.io/search-ui/components/searchbox.html)).
 *
 * Optionally, this component can also display a **Remove context** checkbox. You should normally place this component at the top of your box.
 *
 * ```html
 * <div class='CoveoBoxHeader'></div>
 * ```
 */
var BoxHeader = /** @class */ (function (_super) {
    __extends(BoxHeader, _super);
    function BoxHeader(element, options, bindings, id) {
        if (id === void 0) { id = BoxHeader.ID; }
        var _this = _super.call(this, element, id, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.id = id;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, BoxHeader, options);
        _this.buildSubSection();
        if (_this.options.allowNonContextualSearch) {
            _this.buildContextualSearchInput();
        }
        /*
         * We need to preprocess the non contextual search attribute
         * Here is the desired behavior :
         * On page load, the state of the non contextual search is loaded from local storage
         * BUT : We only want to apply it if the search box is empty
         * If it's enabled at page load and the query is empty, we set it to false, but execute the swap
         * the next time that a query is performed in the search box
         */
        var bindOnce = _.once(function () {
            var eventOnNextQChange = _this.queryStateModel.getEventName(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Model"].eventTypes.changeOne + coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryStateModel"].attributesEnum.q);
            _this.bind.onRootElement(eventOnNextQChange, function (args) {
                if (args.value) {
                    _this.bindings.boxStateModel.set(_BoxStateModel__WEBPACK_IMPORTED_MODULE_4__[/* BoxStateModel */ "a"].attributesEnum.enableNonContextualSearch, true);
                }
            });
        });
        var preprocessContextualSearch = _this.bindings.boxStateModel.getEventName(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Model"].eventTypes.preprocess);
        _this.bind.onRootElement(preprocessContextualSearch, function (args) {
            if (!_this.options.allowNonContextualSearch) {
                args.enableNonContextualSearch = false;
            }
            else if (args.enableNonContextualSearch && _this.queryStateModel.get(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryStateModel"].attributesEnum.q) == '') {
                args.enableNonContextualSearch = false;
                bindOnce();
            }
        });
        _this.buildSearchBoxSection();
        return _this;
    }
    BoxHeader.getMarkup = function () {
        var expandLink = _BoxExpandLink__WEBPACK_IMPORTED_MODULE_3__[/* BoxExpandLink */ "a"].getMarkup();
        var editLink = _BoxEditLink__WEBPACK_IMPORTED_MODULE_2__[/* BoxEditLink */ "a"].getMarkup();
        var ret = jquery__WEBPACK_IMPORTED_MODULE_0__("<div class='CoveoBoxHeader'></div>");
        ret.append(editLink);
        ret.append(expandLink);
        return ret;
    };
    BoxHeader.prototype.buildContextualSearchInput = function () {
        var _this = this;
        var querySummary = this.subSection.find(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"].computeSelectorForType(_BoxQuerySummary__WEBPACK_IMPORTED_MODULE_5__[/* BoxQuerySummary */ "a"].ID));
        this.nonContextualSearchToggle = jquery__WEBPACK_IMPORTED_MODULE_0__('<div class="coveo-contextual-results-toggle"><label>' +
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('RemoveContext') +
            '<input type="checkbox" /><div class="coveo-switch"></div></label></div>').addClass('coveo-hidden');
        if (querySummary.length != 0) {
            this.nonContextualSearchToggle.insertAfter(querySummary);
        }
        else {
            this.nonContextualSearchToggle.appendTo(this.subSection);
        }
        this.bind.onRootElement(this.queryStateModel.getEventName(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Model"].eventTypes.changeOne + coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryStateModel"].attributesEnum.q), function (args) {
            if (args.value) {
                _this.nonContextualSearchToggle.removeClass('coveo-hidden');
            }
            else {
                _this.nonContextualSearchToggle.addClass('coveo-hidden');
            }
        });
        this.bind.onRootElement(this.bindings.boxStateModel.getSimpleEvent(_BoxStateModel__WEBPACK_IMPORTED_MODULE_4__[/* BoxStateModel */ "a"].attributesEnum.enableNonContextualSearch), function (args) {
            _this.nonContextualSearchToggle.find('input:checkbox').prop('checked', args.value);
            _this.toggleFancySwitch(args.value);
        });
        this.nonContextualSearchToggle.find('input:checkbox').change(function (e) {
            var checked = jquery__WEBPACK_IMPORTED_MODULE_0__(e.target).prop('checked');
            _this.bindings.boxStateModel.set(_BoxStateModel__WEBPACK_IMPORTED_MODULE_4__[/* BoxStateModel */ "a"].attributesEnum.enableNonContextualSearch, checked);
            if (checked) {
                _this.usageAnalytics.logSearchEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["analyticsActionCauseList"].casecontextAdd, {
                    caseID: Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_6__[/* getSalesforceContext */ "a"])().record.id,
                });
            }
            else {
                _this.usageAnalytics.logSearchEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["analyticsActionCauseList"].casecontextRemove, {
                    caseID: Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_6__[/* getSalesforceContext */ "a"])().record.id,
                });
            }
            _this.toggleFancySwitch(checked);
            _this.queryController.executeQuery();
        });
    };
    BoxHeader.prototype.toggleFancySwitch = function (activate) {
        this.nonContextualSearchToggle.find('.coveo-switch').toggleClass('coveo-active', activate);
    };
    BoxHeader.prototype.buildSubSection = function () {
        var subSectionWrapper = jquery__WEBPACK_IMPORTED_MODULE_0__('<div></div>').addClass('coveo-box-header-sub-section-wrapper');
        this.subSection = jquery__WEBPACK_IMPORTED_MODULE_0__('<div></div>').addClass('coveo-box-header-sub-section');
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).children().appendTo(this.subSection);
        subSectionWrapper.append(this.subSection);
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(subSectionWrapper);
    };
    BoxHeader.prototype.buildSearchbox = function (container) {
        var searchboxDiv = jquery__WEBPACK_IMPORTED_MODULE_0__('<div class="' + coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"].computeCssClassNameForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Searchbox"].ID) + '"></div>');
        jquery__WEBPACK_IMPORTED_MODULE_0__(container).append(searchboxDiv);
        var searchboxOptions = _.extend({}, this.options, this.bindings.container.originalOptionsObject.Searchbox);
        if (searchboxOptions == undefined) {
            searchboxOptions = {};
        }
        if (searchboxOptions.enableSearchAsYouType == undefined) {
            searchboxOptions.enableSearchAsYouType = true;
        }
        if (searchboxOptions.autoFocus == undefined) {
            searchboxOptions.autoFocus = false;
        }
        if (searchboxOptions.enableOmnibox == undefined) {
            searchboxOptions.enableOmnibox = false;
        }
        var searchbox = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Searchbox"](searchboxDiv.get(0), searchboxOptions, this.bindings);
        jquery__WEBPACK_IMPORTED_MODULE_0__(searchbox.element).find('input').attr('placeholder', this.options.placeholder);
        return searchbox;
    };
    BoxHeader.prototype.buildSettings = function (container) {
        var settingsDiv = document.createElement('div');
        jquery__WEBPACK_IMPORTED_MODULE_0__(container).append(settingsDiv);
        var settingsOptions = _.extend({}, this.options, this.bindings.container.originalOptionsObject.Settings);
        var settings = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Settings"](settingsDiv, settingsOptions, this.bindings);
        return settings;
    };
    BoxHeader.prototype.buildSearchBoxSection = function () {
        var sectionDiv = document.createElement('div');
        sectionDiv.className = 'coveo-box-header-searchbox-section-wrapper';
        if (this.options.includeSearchbox) {
            this.searchbox = this.buildSearchbox(sectionDiv);
        }
        if (this.options.includeSettings) {
            var settingsContainer = document.createElement('div');
            settingsContainer.className = 'coveo-box-header-settings-section-wrapper';
            this.settings = this.buildSettings(settingsContainer);
            jquery__WEBPACK_IMPORTED_MODULE_0__(sectionDiv).append(settingsContainer);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).prepend(sectionDiv);
    };
    BoxHeader.ID = 'BoxHeader';
    /**
     * The possible options for BoxHeader
     * @componentOptions
     */
    BoxHeader.options = {
        /**
         * Specifies whether to initialize a Searchbox component.
         *
         * Default value is `true`.
         *
         * When this option is set to `true`, the component initializes a Searchbox component with the `enableSearchAsYouType` and `searchAsYouTypeDelay` options.
         *
         * ```html
         * <div data-include-search-box='true'></div>
         * ```
         */
        includeSearchbox: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Whether to include the settings icon, which is usually to the right of the search box.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-include-settings="false"></div>
         * ```
         */
        includeSettings: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * When the `includeSearchbox` option is enabled, activates the search-as-you-type feature for the search box.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-enable-search-as-you-type="true"></div>
         * ```
         */
        enableSearchAsYouType: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * When `includeSearchbox` is `true`, specifies the placeholder to set in the `Searchbox`.
         *
         * Default value is the localized string for `Search`.
         *
         * ```html
         * <div data-placeholder='Enter your query here'></div>
         * ```
         */
        placeholder: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildLocalizedStringOption({ defaultValue: 'Search'.toLocaleString() }),
        /**
         * When `includeSearchbox` is `true`, specifies whether to display a **Remove context** checkbox when the end user starts typing in the search box.
         *
         * When checked, this checkbox removes the part of the query expression that was added by the query components.
         *
         * **Example:**
         *
         * > When a user opens a case about a `Power Generator`, items related to the `Power Generator` are shown. When the user starts typing the search box while `allowNonContextualSearch` is `true`, a checkbox will appear to allow them to disable the query and show items outside of the `Power Generator` scope.
         *
         * Default is `false`.
         *
         * ```html
         * <div data-allow-non-contextual-search='true'></div>
         * ```
         */
        allowNonContextualSearch: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * When the `includeSearchbox` and `enableSearchAsYouType` options are enabled, specifies the amount of time, in miliseconds, before refreshing the query based on what the user has typed.
         *
         * Minimum value is `0`.
         *
         * Default value is `300`.
         *
         * ```html
         * <div data-search-as-you-type-delay="300"></div>
         * ```
         */
        searchAsYouTypeDelay: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildNumberOption({ defaultValue: 300, min: 0 }),
    };
    return BoxHeader;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

// The options are extended here to ensure TypeDoc builds the documentation properly.
BoxHeader.options = _.extend({}, coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Searchbox"].options, BoxHeader.options);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(BoxHeader);


/***/ }),
/* 59 */
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
/* 60 */,
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxCreateArticle; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SalesforceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
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
/* istanbul ignore file */




/**
 * The _BoxCreateArticle_ component allows the use of the Create Article button in the Coveo Insight Panel (see [Adding a Create Article Button to the Insight Panel](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=243)).
 *
 * Use this component inside the `coveo-box-settings` div.
 *
 * ```html
 * <div class="coveo-box-settings">
 *     <a class="CoveoBoxCreateArticle" target="_blank">
 *     </a>
 *     ...
 * </div>
 * ```
 */
var BoxCreateArticle = /** @class */ (function (_super) {
    __extends(BoxCreateArticle, _super);
    function BoxCreateArticle(element, options, bindings) {
        var _this = _super.call(this, element, BoxCreateArticle.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.createArticlePage = '/knowledge/publishing/articleEdit.apexp';
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, BoxCreateArticle, options);
        if (bindings.isWaitingForRecord) {
            _this.logger.info('Disabling component : No record found', _this);
            jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).remove();
            return _this;
        }
        if (Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_2__[/* getSalesforceContext */ "a"])().knowledgeArticleInfos.isKnowledgeEnabled) {
            if (_this.options.articleTypeFilter.length == 0)
                _this.articleTypes = Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_2__[/* getSalesforceContext */ "a"])().knowledgeArticleInfos.types;
            else
                _this.articleTypes = Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_2__[/* getSalesforceContext */ "a"])().knowledgeArticleInfos.types.filter(function (type) {
                    return _.contains(_this.options.articleTypeFilter, type.type);
                });
            _this.renderElement();
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).remove();
        }
        return _this;
    }
    BoxCreateArticle.prototype.bindAction = function (element, articleType) {
        var _this = this;
        this.bindAnalyticsEvent(element);
        if (utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_3__[/* SalesforceUtilities */ "c"].isInSalesforceConsole()) {
            element.click(function (e) {
                e.preventDefault();
                utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_3__[/* SalesforceUtilities */ "c"].focusOrOpenTab(_this.buildHref(articleType), Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('BoxCreateArticle'), _this.options.openInPrimaryTab);
            });
        }
    };
    BoxCreateArticle.prototype.bindAnalyticsEvent = function (element) {
        var _this = this;
        element.click(function () {
            _this.bindings.usageAnalytics.logCustomEvent({ name: 'createArticle', type: 'box' }, {}, _this.element);
        });
    };
    BoxCreateArticle.prototype.renderElement = function () {
        var _this = this;
        var title = jquery__WEBPACK_IMPORTED_MODULE_0__('<span>').text(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('BoxCreateArticle')).appendTo(this.element);
        var icon = jquery__WEBPACK_IMPORTED_MODULE_0__('<span class="coveo-icon coveo-sprites-checkbox-more-values"></span>').appendTo(this.element);
        if (this.articleTypes.length == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).addClass('coveo-box-create-article-disabled');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).click(function (e) {
                e.preventDefault();
                _this.logger.error('No ArticleTypes provided');
            });
            return;
        }
        if (this.articleTypes.length == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).attr('href', this.buildHref(this.articleTypes[0].type));
            this.bindAction(jquery__WEBPACK_IMPORTED_MODULE_0__(this.element), this.articleTypes[0].type);
        }
        else {
            var container_1 = jquery__WEBPACK_IMPORTED_MODULE_0__('<div class="coveo-box-create-article-container"></div>').appendTo(this.element);
            var closeTimeout_1;
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).mouseenter(function () {
                if (closeTimeout_1) {
                    clearTimeout(closeTimeout_1);
                }
                container_1.addClass('coveo-box-create-article-container-open');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).mouseleave(function () {
                closeTimeout_1 = setTimeout(function () {
                    container_1.removeClass('coveo-box-create-article-container-open');
                }, 100);
            });
            _.each(this.articleTypes, function (articleType, key) {
                var el = jquery__WEBPACK_IMPORTED_MODULE_0__('<a class="coveo-box-create-article-container-link" target="_blank">')
                    .text(articleType.label)
                    .attr('href', _this.buildHref(articleType.type))
                    .appendTo(container_1);
                _this.bindAction(el, articleType.type);
            });
            var leftValue = (jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).width() + 5 - container_1.width()) / 2;
            container_1.css('left', leftValue);
        }
        if (this.options.hidden) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).addClass('coveo-hidden');
        }
    };
    BoxCreateArticle.prototype.buildHref = function (articleType) {
        return (this.createArticlePage +
            '?retURL=' +
            Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_2__[/* getSalesforceContext */ "a"])().record.id +
            '&sourceId=' +
            Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_2__[/* getSalesforceContext */ "a"])().record.id +
            '&sfdc.override=1&type=' +
            articleType);
    };
    /**
     * Changes the page to redirect to when selecting the create article button.
     *
     * By default, the component redirects to `/knowledge/publishing/articleEdit.apexp`.
     *
     * @param page The redirect page URL­.
     *
     * ```js
     * $('.CoveoBoxCreateArticle').coveo('setCreateArticlePage', '/knowledge/publishing/articleEdit.apexp')
     * ```
     */
    BoxCreateArticle.prototype.setCreateArticlePage = function (page) {
        this.createArticlePage = page;
    };
    BoxCreateArticle.ID = 'BoxCreateArticle';
    /**
     * The possible options for BoxCreateArticle
     * @componentOptions
     */
    BoxCreateArticle.options = {
        /**
         * Specifies the Knowledge Article types to offer as options when creating an article.
         *
         * By default, all the available Knowledge Article types are displayed.
         *
         * ```html
         * <a class="CoveoBoxCreateArticle" data-article-type-filter="knowledge__kav,troubleshooting__kav"></a>
         * ```
         */
        articleTypeFilter: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildListOption({ defaultValue: [] }),
        /**
         * Specifies if the component should be hidden from the display.
         *
         * Default value is `true`.
         *
         * ```html
         * <a class="CoveoBoxCreateArticle" data-hidden="true"></a>
         * ```
         */
        hidden: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Whether to open the created article in a primary tab or, when set to false, to open it in a sub tab.
         *
         * Default value is `true`.
         *
         * ```html
         * <a class="CoveoBoxCreateArticle" data-open-in-primary-tab="false"></a>
         * ```
         */
        openInPrimaryTab: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return BoxCreateArticle;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(BoxCreateArticle);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxAttachToCase; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var modules_attachToCase_ts_AttachToCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var modules_common_ts_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
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
/* istanbul ignore file */



/**
 * The _BoxAttachToCase_ component allows you to attach a result to the current Salesforce object. This component normally renders itself inside the {@link BoxResultAction} Component.
 *
 * **Note:**
 * > Your Salesforce users must have `Attached Result` object permissions to be able to use this component (see [Granting Access to Attach to Case Users](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=159)).
 */
var BoxAttachToCase = /** @class */ (function (_super) {
    __extends(BoxAttachToCase, _super);
    function BoxAttachToCase(element, options, bindings, result) {
        var _this = _super.call(this, element, options, bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        $(element).removeClass(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassNameForType(modules_attachToCase_ts_AttachToCase__WEBPACK_IMPORTED_MODULE_1__[/* AttachToCase */ "a"].ID));
        return _this;
    }
    BoxAttachToCase.getMarkup = function () {
        return $('<div class="CoveoBoxAttachToCase"></div>');
    };
    BoxAttachToCase.prototype.getTitle = function (displayedInline) {
        this.displayedInline = displayedInline;
        this.renderButton();
        if (this.buttonElement != null) {
            return this.buttonElement;
        }
    };
    BoxAttachToCase.prototype.renderButton = function () {
        var _this = this;
        $(this.element).empty();
        this.buttonElement = Object(modules_common_ts_Utils__WEBPACK_IMPORTED_MODULE_2__[/* parseHTML */ "a"])('<div class="coveo-box-attachToCase-view-in-menu"></div>')[0];
        this.textElement = Object(modules_common_ts_Utils__WEBPACK_IMPORTED_MODULE_2__[/* parseHTML */ "a"])('<div class="coveo-caption"></div>')[0];
        this.buttonElement.appendChild(this.textElement);
        this.iconElement = $('<div class="coveo-icon"></div>');
        this.buttonElement.appendChild(this.iconElement[0]);
        Coveo.$$(this.buttonElement).on('click', function () { return _this.handleClick(); });
        this.updateButton();
    };
    BoxAttachToCase.prototype.updateButton = function (sendEvent) {
        if (sendEvent === void 0) { sendEvent = true; }
        this.iconElement.removeClass();
        if (this.loading) {
            this.iconElement.addClass('coveo-icon coveo-attach-to-case-loading');
        }
        else {
            this.iconElement.addClass('coveo-icon coveo-sprites-attach');
        }
        if (this.displayedInline && !this.loading) {
            if (this.isAttached()) {
                this.iconElement.removeClass('coveo-sprites-attach');
                this.iconElement.addClass('coveo-sprites-attached');
            }
            else {
                this.iconElement.removeClass('coveo-sprites-attached');
                this.iconElement.addClass('coveo-sprites-attach');
            }
            this.textElement.innerHTML = '';
        }
        else if (!this.displayedInline) {
            this.textElement.innerText = this.isAttached() ? Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Detach') : Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Attach');
            this.iconElement.removeClass('coveo-sprites-attach');
            this.iconElement.removeClass('coveo-sprites-attached');
        }
        if (sendEvent) {
            this.sendStateChangedEvent();
        }
    };
    BoxAttachToCase.ID = 'BoxAttachToCase';
    return BoxAttachToCase;
}(modules_attachToCase_ts_AttachToCase__WEBPACK_IMPORTED_MODULE_1__[/* AttachToCase */ "a"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(BoxAttachToCase);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionSome; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExtensionBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
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


var ExtensionSome = /** @class */ (function (_super) {
    __extends(ExtensionSome, _super);
    function ExtensionSome(element, options, bindings) {
        var _this = _super.call(this, element, ExtensionSome.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ExtensionSome, options);
        if (!_.isUndefined(_this.options.keywords) && _this.options.bindOnQuery) {
            _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        }
        return _this;
    }
    ExtensionSome.fromStringArrayToStringKeywords = function (array, bindings) {
        return _.chain(array)
            .map(function (includeInQuery) {
            return bindings.container.options.record[includeInQuery.toLowerCase()];
        })
            .compact()
            .value()
            .join(' ');
    };
    ExtensionSome.prototype.getBuilder = function () {
        var builder = new _ExtensionBuilder__WEBPACK_IMPORTED_MODULE_1__[/* ExtensionBuilder */ "b"]('some').withParam('keywords', this.options.keywords);
        if (!_.isUndefined(this.options.best)) {
            builder.withParam('best', this.options.best);
        }
        if (!_.isUndefined(this.options.match)) {
            builder.withParam('match', this.options.match);
        }
        if (!_.isUndefined(this.options.removeStopWords)) {
            builder.withParam('removeStopWords', this.options.removeStopWords);
        }
        if (!_.isUndefined(this.options.maximum)) {
            builder.withParam('maximum', this.options.maximum);
        }
        return builder;
    };
    ExtensionSome.prototype.handleBuildingQuery = function (args) {
        args.queryBuilder.advancedExpression.add(this.getBuilder().build());
    };
    ExtensionSome.ID = 'ExtensionSome';
    ExtensionSome.options = {
        keywords: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        best: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({ defaultValue: 5 }),
        match: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({ defaultValue: 2 }),
        removeStopWords: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        maximum: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption(),
        bindOnQuery: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return ExtensionSome;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ExtensionSome);


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
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
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SupportedBoxQueryExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxQueryExtensions; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BoxStateModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _SalesforceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _ExtensionQRE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
/* harmony import */ var _ExtensionQRF__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97);
/* harmony import */ var _ExtensionQF__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98);
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







var SupportedBoxQueryExtension;
(function (SupportedBoxQueryExtension) {
    SupportedBoxQueryExtension[SupportedBoxQueryExtension["QRE"] = 0] = "QRE";
    SupportedBoxQueryExtension[SupportedBoxQueryExtension["QRF"] = 1] = "QRF";
    SupportedBoxQueryExtension[SupportedBoxQueryExtension["QF"] = 2] = "QF";
})(SupportedBoxQueryExtension || (SupportedBoxQueryExtension = {}));
var BoxQueryExtensions = /** @class */ (function (_super) {
    __extends(BoxQueryExtensions, _super);
    function BoxQueryExtensions(element, options, bindings) {
        var _this = _super.call(this, element, BoxQueryExtensions.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.extensions = [];
        _this.isDisabledFromContextualQuery = false;
        if (bindings.isWaitingForRecord) {
            _this.logger.info('Disabling component : No record found to expand query', _this);
            return _this;
        }
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, BoxQueryExtensions, options);
        _this.options.configurations = _.extend({}, options.configurations, BoxQueryExtensions.getConfigFromContent(_this.element));
        _.each(_this.options.configurations, function (configuration) {
            if (configuration) {
                if (configuration.extension == SupportedBoxQueryExtension.QRE) {
                    _this.buildQREExtension(configuration.definition);
                }
                else if (configuration.extension == SupportedBoxQueryExtension.QRF) {
                    _this.buildQRFExtension(configuration.definition);
                }
                else if (configuration.extension == SupportedBoxQueryExtension.QF) {
                    _this.buildQFExtension(configuration.definition);
                }
            }
        });
        if (_this.options.disableOnNonContextualSearch) {
            _this.bind.onRootElement(_this.bindings.boxStateModel.getSimpleEvent(_BoxStateModel__WEBPACK_IMPORTED_MODULE_1__[/* BoxStateModel */ "a"].attributesEnum.enableNonContextualSearch), function (args) {
                _this.isDisabledFromContextualQuery = args.value;
                if (args.value) {
                    _.each(_this.extensions, function (e) { return e.disable(); });
                }
                else if (!_this.disabled) {
                    _.each(_this.extensions, function (e) { return e.enable(); });
                }
            });
        }
        return _this;
    }
    BoxQueryExtensions.getMarkup = function () {
        return $("<script class='CoveoBoxQueryExtensions' type='text/x-query-configuration' ></script>");
    };
    BoxQueryExtensions.getConfigFromContent = function (content) {
        if (content instanceof HTMLElement) {
            content = content.innerHTML;
        }
        var configFromJson = [];
        if (content != '') {
            try {
                // Can be HTML Encoded to escape special char is SF
                configFromJson = JSON.parse(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Utils"].decodeHTMLEntities(content));
            }
            catch (e) {
                try {
                    configFromJson = JSON.parse(content);
                }
                catch (e) {
                    configFromJson = [];
                }
            }
        }
        return configFromJson;
    };
    BoxQueryExtensions.prototype.buildQREExtension = function (qreConfiguration) {
        this.extensions.push(new _ExtensionQRE__WEBPACK_IMPORTED_MODULE_4__[/* ExtensionQRE */ "a"]($('<div />').get(0), {
            expression: utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_2__[/* SalesforceUtilities */ "c"].expandStringUsingRecord(qreConfiguration.expression, Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_3__[/* getSalesforceContext */ "a"])().record),
            modifier: qreConfiguration.modifier,
        }, this.bindings));
    };
    BoxQueryExtensions.prototype.buildQRFExtension = function (qrfConfiguration) {
        this.extensions.push(new _ExtensionQRF__WEBPACK_IMPORTED_MODULE_5__[/* ExtensionQRF */ "a"]($('<div />').get(0), {
            expression: utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_2__[/* SalesforceUtilities */ "c"].expandStringUsingRecord(qrfConfiguration.expression, Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_3__[/* getSalesforceContext */ "a"])().record),
            normalizeWeight: qrfConfiguration.normalizeWeight,
        }, this.bindings));
    };
    BoxQueryExtensions.prototype.buildQFExtension = function (qfConfiguration) {
        this.extensions.push(new _ExtensionQF__WEBPACK_IMPORTED_MODULE_6__[/* ExtensionQF */ "a"]($('<div />').get(0), {
            func: utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_2__[/* SalesforceUtilities */ "c"].expandStringUsingRecord(qfConfiguration.func, Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_3__[/* getSalesforceContext */ "a"])().record),
            fieldName: qfConfiguration.fieldName,
        }, this.bindings));
    };
    BoxQueryExtensions.prototype.enable = function () {
        if (!this.isDisabledFromContextualQuery) {
            _.each(this.extensions, function (e) { return e.enable(); });
        }
        _super.prototype.enable.call(this);
    };
    BoxQueryExtensions.prototype.disable = function () {
        _.each(this.extensions, function (e) { return e.disable(); });
        _super.prototype.disable.call(this);
    };
    BoxQueryExtensions.ID = 'BoxQueryExtensions';
    BoxQueryExtensions.options = {
        disableOnNonContextualSearch: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return BoxQueryExtensions;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(BoxQueryExtensions);


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPopup; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoxHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
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
 * The _BoxPopup_ component is only a container inside of which you can drop any other content or component.
 *
 * Since the {@link Box} component is designed to be included in the Salesforce console sidebar with a limited amount of space, it might be useful to add section that can be hidden or shown when the user clicks on them.
 *
 * The HTML content inside the `BoxPopup` div is used to determine what is shown or hidden when the panel is opened and closed.
 *
 * ```html
 * <div class='CoveoBoxPopup'>
 *   <div class='coveo-facet-column'>
 *     <div class='CoveoFacet' data-field='@myfirstfacet'></div>
 *     <div class='CoveoFacet' data-field='@mysecondfacet'></div>
 *     <div class='CoveoFacet' data-field='@mythirdfacet'></div>
 *   </div>
 * </div>
 * ```
 */
var BoxPopup = /** @class */ (function (_super) {
    __extends(BoxPopup, _super);
    function BoxPopup(element, options, bindings, id) {
        if (id === void 0) { id = BoxPopup.ID; }
        var _this = _super.call(this, element, id, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.id = id;
        _this.isOpen = false;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, BoxPopup, options);
        _this.popupWrapper = jquery__WEBPACK_IMPORTED_MODULE_0__('<div></div>').addClass('coveo-box-popup-wrapper').appendTo(_this.element);
        jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).children().appendTo(_this.popupWrapper);
        _this.buildToggleButton();
        _this.close();
        if (_this.options.hidden) {
            _this.toggleButton.addClass('coveo-hidden');
        }
        jquery__WEBPACK_IMPORTED_MODULE_0__(_this.root).on('click', function (e) {
            if (!_this.disabled && e.target != _this.element && jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).find(jquery__WEBPACK_IMPORTED_MODULE_0__(e.target)).length == 0) {
                _this.close();
            }
        });
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryEvents"].querySuccess, function () {
            _this.setTopPosition();
            _this.setToggleHeight();
            _this.setToggleWidth();
        });
        return _this;
    }
    BoxPopup.getMarkup = function () {
        return jquery__WEBPACK_IMPORTED_MODULE_0__("<div class='CoveoBoxPopup'></div>");
    };
    /**
     * Sets the title displayed in the popup container.
     *
     * @param title The title to display
     *
     * ```js
     * $('.CoveoBoxPopup').coveo('setTitle', 'Your New Title');
     * ```
     */
    BoxPopup.prototype.setTitle = function (title) {
        this.logger.trace('Setting title', title);
        var toSet = jquery__WEBPACK_IMPORTED_MODULE_0__('<span></span>');
        if (_.isString(title)) {
            toSet.text(title);
        }
        else {
            toSet.append(jquery__WEBPACK_IMPORTED_MODULE_0__(title));
        }
        this.buildTitle(toSet);
    };
    BoxPopup.prototype.getTopPosition = function () {
        var header = jquery__WEBPACK_IMPORTED_MODULE_0__(this.root).find('.' + coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"].computeCssClassNameForType(_BoxHeader__WEBPACK_IMPORTED_MODULE_2__[/* BoxHeader */ "a"].ID));
        if (header.length != 0) {
            this.top = header.position().top + header.outerHeight();
        }
        else {
            this.top = 0;
        }
        return this.top;
    };
    BoxPopup.prototype.setTopPosition = function () {
        this.top = this.getTopPosition();
    };
    BoxPopup.prototype.setToggleHeight = function () {
        if (this.options.fullHeight) {
            this.popupWrapper.css({
                bottom: 0,
                top: jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).offset().top + jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).outerHeight() - 5,
                position: 'fixed',
                height: 'auto',
                'max-height': 'inherit',
            });
        }
        else {
            this.popupWrapper.css({
                top: jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).offset().top + jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).outerHeight() - 5,
                position: 'fixed',
            });
        }
    };
    BoxPopup.prototype.setToggleWidth = function () {
        if (this.options.fullWidth) {
            this.popupWrapper.css({
                right: 0,
                left: 0,
                position: 'fixed',
                width: 'auto',
                'max-width': 'inherit',
            });
        }
    };
    /**
     * Opens the popup.
     *
     * ```js
     * $('.CoveoBoxPopup').coveo('open');
     * ```
     */
    BoxPopup.prototype.open = function () {
        this.setTopPosition();
        this.setToggleWidth();
        this.setToggleHeight();
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).trigger('onPopupOpen');
        this.logger.trace('Opening popup');
        this.isOpen = true;
        if (this.top == undefined) {
            this.setTopPosition();
        }
        this.setClasses();
        jquery__WEBPACK_IMPORTED_MODULE_0__(window).trigger('resize');
    };
    /**
     * Closes the popup.
     *
     * ```js
     * $('.CoveoBoxPopup').coveo('close');
     * ```
     */
    BoxPopup.prototype.close = function () {
        this.logger.trace('Closing popup');
        this.isOpen = false;
        this.setClasses();
    };
    /**
     * Opens or closse the popup depending on its current state.
     *
     * ```js
     * $('.CoveoBoxPopup').coveo('toggle');
     * ```
     */
    BoxPopup.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    };
    BoxPopup.prototype.setClasses = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).toggleClass('coveo-opened', this.isOpen);
        if (this.options.withAnimation) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).addClass('coveo-with-animation');
        }
    };
    BoxPopup.prototype.buildTitle = function (title) {
        if (title === void 0) { title = this.buildBasicTitle(); }
        if (this.titleElement) {
            this.titleElement.remove();
        }
        this.titleElement = title.addClass('coveo-box-popup-title').appendTo(this.toggleButton);
    };
    BoxPopup.prototype.buildBasicTitle = function () {
        var element = jquery__WEBPACK_IMPORTED_MODULE_0__('<span></span>');
        var title = jquery__WEBPACK_IMPORTED_MODULE_0__('<span></span>').text(this.options.title).appendTo(element);
        if (this.options.icon !== undefined && this.options.icon != '') {
            jquery__WEBPACK_IMPORTED_MODULE_0__('<span></span>').addClass('coveo-icon').addClass(this.options.icon).prependTo(element);
        }
        return element;
    };
    BoxPopup.prototype.buildToggleButton = function () {
        var _this = this;
        this.toggleButton = jquery__WEBPACK_IMPORTED_MODULE_0__('<div class="coveo-box-popup-toggle"></div>');
        this.buildTitle();
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).prepend(this.toggleButton);
        this.toggleButton.click(function () { return _this.toggle(); });
    };
    BoxPopup.ID = 'BoxPopup';
    /**
     * The possible options for BoxPopup
     * @componentOptions
     */
    BoxPopup.options = {
        /**
         * Specifies the static title to display.
         *
         * Default value is `Click here to open`.
         *
         * **Note:**
         * > Since this component exposes methods to set its title, it is possible that other components contained inside this container dynamically set it.
         *
         * ```html
         * <div data-title='Click here to open'></div>
         * ```
         */
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: 'Click here to open' }),
        /**
         * Specifies the CSS class used for your icon.
         *
         * ```html
         * <div data-icon='custom-icon-class'></div>
         * ```
         */
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildIconOption(),
        /**
         * Specifies if the popup should open with an animation.
         *
         * The animation is completely CSS based. To modify the animation itself, modify the CSS rules that apply to the relevant elements.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-with-animation='true'></div>
         * ```
         */
        withAnimation: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies if the popup should open with the fully available width of the page.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-full-width='false'></div>
         * ```
         */
        fullWidth: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies if the popup should open with the fully available height of the page.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-full-height='false'></div>
         * ```
         */
        fullHeight: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies whether the component should be hidden.
         *
         * Defaut value is `false`.
         *
         * ```html
         * <div data-hidden='false'></div>
         * ```
         */
        hidden: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
    };
    return BoxPopup;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(BoxPopup);


/***/ }),
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CopyToClipboard_CopyToClipboard; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultAction/ResultAction.js
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
 * The base class for all ResultAction components.
 * Its main responsibility is handling the visual elements of the Result Action.
 */
var ResultAction_ResultAction = /** @class */ (function (_super) {
    __extends(ResultAction, _super);
    /**
     * Construct a ResultAction component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     * @param queryResult The result of the query in which this resultAction exists.
     */
    function ResultAction(element, options, bindings, queryResult) {
        var _this = _super.call(this, element, ResultAction.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.queryResult = queryResult;
        _this.isInitialized = false;
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, ResultAction, options);
        _this.queryResult = _this.queryResult || _this.resolveResult();
        // Hide until initialized.
        Object(external_window_Coveo_["$$"])(_this.element).addClass('coveo-hidden');
        _this.bind.on(_this.element, 'click', function () { return _this.doAction(); });
        return _this;
    }
    /**
     * Initializes the component if it is not already initialized.
     */
    ResultAction.prototype.init = function () {
        if (!this.isInitialized) {
            this.show();
            this.isInitialized = true;
        }
        else {
            this.logger.debug('Attempted to initialize ResultAction that was already initialized.');
        }
    };
    /**
     * Deactivate the component if it is initialized.
     * @param e The reason for the deactivation.
     */
    ResultAction.prototype.deactivate = function (e) {
        Object(external_window_Coveo_["$$"])(this.element).remove();
        this.logger.warn(e);
        this.isInitialized = false;
    };
    /**
     * Make the result action button visible.
     */
    ResultAction.prototype.show = function () {
        Object(external_window_Coveo_["$$"])(this.element).removeClass('coveo-hidden');
        if (this.options.icon) {
            var icon = document.createElement('span');
            icon.innerHTML = this.options.icon;
            icon.className = 'coveo-icon';
            this.element.appendChild(icon);
        }
        if (this.options.tooltip) {
            var tooltip = document.createElement('span');
            tooltip.innerText = this.options.tooltip;
            tooltip.className = 'coveo-caption-for-icon';
            this.element.appendChild(tooltip);
        }
    };
    return ResultAction;
}(external_window_Coveo_["Component"]));

ResultAction_ResultAction.ID = 'ResultAction';
/**
 * The possible options for _ResultAction_.
 * @componentOptions
 */
ResultAction_ResultAction.options = {
    /**
     * See {@link IResultActionOptions.icon}
     * Optional. You may instead provide the icon by appending it as a child element.
     */
    icon: external_window_Coveo_["ComponentOptions"].buildStringOption(),
    /**
     * See {@link IResultActionOptions.tooltip}
     * Optional. If no tooltip is provided, the tooltip popup will not appear.
     */
    tooltip: external_window_Coveo_["ComponentOptions"].buildStringOption(),
};


// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js
var icons = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js
var translation = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/CopyToClipboard/Strings.js

translation["b" /* Translation */].register(translation["a" /* Language */].English, {
    CopyToClipboard_copy: 'Copy',
    CopyToClipboard_copied: 'Copied!',
});


// CONCATENATED MODULE: ./node_modules/coveo-search-ui-extensions/bin/es6/components/CopyToClipboard/CopyToClipboard.js
var CopyToClipboard_extends = (undefined && undefined.__extends) || (function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




var CopyToClipboard_CopyToClipboard = /** @class */ (function (_super) {
    CopyToClipboard_extends(CopyToClipboard, _super);
    /**
     * Construct a ResultAction component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     * @param result The result of the query in which this resultAction exists.
     */
    function CopyToClipboard(element, options, bindings, result) {
        var _this = _super.call(this, element, external_window_Coveo_["ComponentOptions"].initComponentOptions(element, CopyToClipboard, options), bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _super.prototype.init.call(_this);
        return _this;
    }
    CopyToClipboard.prototype.doAction = function () {
        this.usageAnalytics.logClickEvent({ name: 'copyToClipboard', type: 'resultAction' }, {}, this.result, this.element);
        this.copyToClipboard(external_window_Coveo_["StringUtils"].buildStringTemplateFromResult(this.options.template, this.result));
    };
    CopyToClipboard.prototype.copyToClipboard = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(navigator && navigator.clipboard && navigator.clipboard.writeText)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.clipboard.writeText(text)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.logger.error('Copy to clipboard failed.', text, err_1);
                        this.copyToClipboardFallback(text);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.copyToClipboardFallback(text);
                        _a.label = 6;
                    case 6:
                        this.setToolipText(this.options.successTooltip);
                        this.refreshTooltip();
                        return [2 /*return*/];
                }
            });
        });
    };
    CopyToClipboard.prototype.refreshTooltip = function () {
        var _this = this;
        setTimeout(function () { return _this.setToolipText(_this.options.tooltip); }, 500);
    };
    CopyToClipboard.prototype.setToolipText = function (text) {
        var tooltipElement = this.element.querySelector('.coveo-caption-for-icon');
        if (tooltipElement && text) {
            tooltipElement.innerText = text;
        }
    };
    /**
     * Sadly that's the only way of doing in in IE11 and in lockerservice.
     */
    CopyToClipboard.prototype.copyToClipboardFallback = function (text) {
        var el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    return CopyToClipboard;
}(ResultAction_ResultAction));

CopyToClipboard_CopyToClipboard.ID = 'CopyToClipboard';
/**
 * The possible options for _ResultAction_.
 * @componentOptions
 */
CopyToClipboard_CopyToClipboard.options = {
    icon: external_window_Coveo_["ComponentOptions"].buildStringOption({ defaultValue: icons["b" /* copy */] }),
    tooltip: external_window_Coveo_["ComponentOptions"].buildCustomOption(function (tooltip) { return tooltip; }, { defaultFunction: function () { return Object(external_window_Coveo_["l"])('CopyToClipboard_copy'); } }),
    successTooltip: external_window_Coveo_["ComponentOptions"].buildCustomOption(function (tooltip) { return tooltip; }, { defaultFunction: function () { return Object(external_window_Coveo_["l"])('CopyToClipboard_copied'); } }),
    template: external_window_Coveo_["ComponentOptions"].buildStringOption({ defaultValue: '${title}\n${clickUri}' }),
};
external_window_Coveo_["Initialization"].registerComponentFields(CopyToClipboard_CopyToClipboard.ID, ['title', 'clickUri']);
external_window_Coveo_["Initialization"].registerAutoCreateComponent(CopyToClipboard_CopyToClipboard);



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachedResultsTab; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var modules_search_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
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




var AttachedResultsTab = /** @class */ (function (_super) {
    __extends(AttachedResultsTab, _super);
    function AttachedResultsTab(element, options, bindings) {
        var _this = _super.call(this, element, options, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, AttachedResultsTab, options);
        $(_this.root).on(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].doneBuildingQuery, $.proxy(_this.handleDoneBuildingQueryForAttachedResults, _this));
        _this.attachToCaseEndpoint = _this.options.attachToCaseEndpoint();
        _this.bind.on(window, modules_common_ts_UserActionEvents__WEBPACK_IMPORTED_MODULE_2__[/* UserActionEvents */ "b"].attachedResultChange, function (args) {
            return _this.handleAttachedResultChangeEvent(args);
        });
        return _this;
    }
    AttachedResultsTab.prototype.setAttachToCaseEndpoint = function (endpoint) {
        if (endpoint != null) {
            this.attachToCaseEndpoint = endpoint;
        }
    };
    AttachedResultsTab.prototype.handleAttachedResultChangeEvent = function (args) {
        if (modules_search_ts__WEBPACK_IMPORTED_MODULE_3__[/* Id */ "a"].equal(this.attachToCaseEndpoint.caseId, args.caseId)) {
            var data = this.attachToCaseEndpoint.data;
            data.attachedResults = args.attachedResults;
        }
    };
    AttachedResultsTab.prototype.handleDoneBuildingQueryForAttachedResults = function (e, args) {
        var _a;
        if (!this.disabled && this.isSelected() && ((_a = this.attachToCaseEndpoint) === null || _a === void 0 ? void 0 : _a.data)) {
            var data = this.attachToCaseEndpoint.data;
            var expressionBuilder = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ExpressionBuilder"]();
            expressionBuilder.add(_AttachToCaseUtils__WEBPACK_IMPORTED_MODULE_1__[/* getExpressions */ "b"](data.attachedResults));
            if (this.options.expression) {
                expressionBuilder.add(this.options.expression);
            }
            /*
             * We need to clean the constant and advanced expression in
             * order to remove the context and other customizations
             * that would prevent this component from working.
             */
            if (this.options.constant) {
                args.queryBuilder.constantExpression = expressionBuilder;
                args.queryBuilder.advancedExpression = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ExpressionBuilder"]();
            }
            else {
                args.queryBuilder.constantExpression = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ExpressionBuilder"]();
                args.queryBuilder.advancedExpression = expressionBuilder;
            }
        }
    };
    AttachedResultsTab.ID = 'AttachedResultsTab';
    /**
     * The possible options for AttachedResultsTab
     * @componentOptions
     */
    AttachedResultsTab.options = {
        attachToCaseEndpoint: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function () { return window['attachToCaseEndpoint']; }, {
            defaultFunction: function () { return function () { return window['attachToCaseEndpoint']; }; },
        }),
    };
    return AttachedResultsTab;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Tab"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(AttachedResultsTab);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BoxStateModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
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
 * The _Box_ component represents the container that includes all the other `box` components.
 *
 * It inherits from a [SearchInterface Component](https://coveo.github.io/search-ui/components/searchinterface.html) and supports all of its options.
 *
 * ```html
 * <div class='CoveoBox'></div>
 * ```
 */
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box(element, options, analyticsOptions, originalOptionsObject) {
        var _this = _super.call(this, element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].initComponentOptions(element, Box, options), analyticsOptions, originalOptionsObject) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].initComponentOptions(element, Box, options);
        _this.salesforceContext = window['SalesforceContext'];
        if (!_this.options.record) {
            // Coveo.record will be populated when inside Salesforce, or by a mock variable in a dev/test environment
            if (_this.salesforceContext.record != undefined) {
                _this.options.record = _this.salesforceContext.record;
            }
        }
        if (!_this.options.type) {
            // Coveo.type will be populated when inside Salesforce, or by a mock variable in a dev/test environment
            if (_this.salesforceContext.type != undefined) {
                _this.options.type = _this.salesforceContext.type;
            }
        }
        if (_this.usageAnalytics) {
            _this.usageAnalytics.setOriginContext('AgentSearch');
        }
        _this.boxStateModel = new _BoxStateModel__WEBPACK_IMPORTED_MODULE_3__[/* BoxStateModel */ "a"](element);
        if (_this.options.enableBoxStateHistory) {
            if (_this.options.useLocalStorageForBoxState) {
                new coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["LocalStorageHistoryController"](element, window, _this.boxStateModel, _this.queryController);
            }
            else {
                new coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["HistoryController"](element, window, _this.boxStateModel, _this.queryController);
            }
            var eventFromQueryState_1 = _this.queryStateModel.getEventName(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["Model"].eventTypes.changeOne + coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["QueryStateModel"].attributesEnum.t);
            var eventFromBoxState_1 = _this.boxStateModel.getSimpleEvent(_BoxStateModel__WEBPACK_IMPORTED_MODULE_3__[/* BoxStateModel */ "a"].attributesEnum.t);
            jquery__WEBPACK_IMPORTED_MODULE_1__(_this.element).on(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["InitializationEvents"].restoreHistoryState, function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__(_this.element).on(eventFromQueryState_1, function (e, args) {
                    // Hack to get the good args, related to JSUI-2304
                    if (!args && (!e || !e.originalEvent)) {
                        console.warn("No data found in the " + eventFromBoxState_1 + " event trigger");
                        return;
                    }
                    args = args ? args : e.originalEvent.detail;
                    _this.boxStateModel.set(_BoxStateModel__WEBPACK_IMPORTED_MODULE_3__[/* BoxStateModel */ "a"].attributesEnum.t, args.value);
                });
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(_this.element).on(eventFromBoxState_1, function (e, args) {
                // Hack to get the good args, related to JSUI-2304
                if (!args && (!e || !e.originalEvent)) {
                    console.warn("No data found in the " + eventFromBoxState_1 + " event trigger");
                    return;
                }
                args = args ? args : e.originalEvent.detail;
                _this.queryStateModel.set(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["QueryStateModel"].attributesEnum.t, args.value);
            });
        }
        _this.resize();
        _this.resizeHandler = function () { return _this.resize(); };
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).resize(_this.resizeHandler);
        jquery__WEBPACK_IMPORTED_MODULE_1__(_this.element).on(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["InitializationEvents"].nuke, function () { return _this.handleNuke(); });
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["Assert"].exists(_this.options.type);
        jquery__WEBPACK_IMPORTED_MODULE_1__(_this.element).addClass(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["Component"].computeCssClassNameForType(Box.ID));
        return _this;
    }
    /**
     * Triggers a resize of the box so that it occupies the full page height and width. This is automatically called whenever the page is resized.
     *
     * ```js
     * $('#MyCoveoBox').coveo('resize')
     * ```
     */
    Box.prototype.resize = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(this.element).outerHeight(jquery__WEBPACK_IMPORTED_MODULE_1__(window).height() - 10);
    };
    Box.prototype.initializeAnalytics = function () {
        var analyticsClass = coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["Component"].computeCssClassNameForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["Analytics"].ID);
        if (this.options.withAnalytics && jquery__WEBPACK_IMPORTED_MODULE_1__(this.element).find('.' + analyticsClass).length == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_1__('<div/>').addClass(analyticsClass).appendTo(this.element);
        }
        else if (!this.options.withAnalytics) {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this.element)
                .find('.' + analyticsClass)
                .remove();
        }
        return _super.prototype.initializeAnalytics.call(this);
    };
    Box.prototype.getBindings = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_0__["extend"](_super.prototype.getBindings.call(this), {
            boxStateModel: this.boxStateModel,
            isWaitingForRecord: this.options.record == undefined,
        });
    };
    Box.prototype.handleNuke = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).off('resize', this.resizeHandler);
    };
    Box.ID = 'Box';
    /**
     * The possible options for Box
     * @componentOptions
     */
    Box.options = {
        type: coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies if the box should automatically include an `analytics` component.
         *
         * If you already have one on the page, then it is not added twice. However, setting it to `false` removes it from the page on initialization.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-with-analytics="true"></div>
         * ```
         */
        withAnalytics: coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].buildBooleanOption({
            defaultValue: true,
        }),
        /**
         * Specifies if you wish to use the local storage to save the box state. This means that the query state is only loaded on page load.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-use-local-storage-for-box-state="true"></div>
         * ```
         */
        useLocalStorageForBoxState: coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies if you wish to save and reload the `Box` state when the page is closed and reopened.
         *
         * This saves the current state of the current tab that is selected.
         *
         * If set to `false`, the tab reverts to the default one on each page load.
         *
         * If set to `true`, each time you reload the page, the last tab that you selected will be automatically selected.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-enable-box-state-history="true"></div>
         * ```
         */
        enableBoxStateHistory: coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies the length (in characters) of the result text (excerpt) to display.
         *
         * Default value is `80`.
         *
         * Minimum value is `0`.
         *
         * ```html
         * <div data-excerpt-length="80"></div>
         * ```
         */
        excerptLength: coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].buildNumberOption({ defaultValue: 80, min: 0 }),
        /**
         * Specifies the number of results you want per page.
         *
         * Default value is `20`.
         *
         * Minimum value is `0`.
         *
         * ```html
         * <div data-results-per-page="20"></div>
         * ```
         */
        resultsPerPage: coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].buildNumberOption({ defaultValue: 20, min: 0 }),
        // Change after Box can support the automatic responsive mode correctly
        /**
         * Whether the component should automatically adapt to the screen size.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-enable-automatic-reponsive-mode="true"></div>
         * ```
         */
        enableAutomaticResponsiveMode: coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
    };
    return Box;
}(_Container__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "a"]));

// The options are extended here to ensure TypeDoc builds the documentation properly.
Box.options = underscore__WEBPACK_IMPORTED_MODULE_0__["extend"]({}, _Container__WEBPACK_IMPORTED_MODULE_4__[/* Container */ "a"].options, Box.options);


/***/ }),
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionQRE; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExtensionBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
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


var ExtensionQRE = /** @class */ (function (_super) {
    __extends(ExtensionQRE, _super);
    function ExtensionQRE(element, options, bindings) {
        var _this = _super.call(this, element, ExtensionQRE.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ExtensionQRE, options);
        if (!_.isUndefined(_this.options.expression) && !_.isUndefined(_this.options.modifier) && _this.options.bindOnQuery) {
            _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        }
        return _this;
    }
    ExtensionQRE.prototype.getBuilder = function () {
        return new _ExtensionBuilder__WEBPACK_IMPORTED_MODULE_1__[/* ExtensionBuilder */ "b"]('qre', this.options.quotedExpression)
            .withParam('expression', this.options.expression)
            .withParam('modifier', this.options.modifier);
    };
    ExtensionQRE.prototype.handleBuildingQuery = function (args) {
        args.queryBuilder.advancedExpression.add(this.getBuilder().build());
    };
    ExtensionQRE.ID = 'ExtensionQRE';
    ExtensionQRE.options = {
        expression: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        modifier: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption(),
        bindOnQuery: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        quotedExpression: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return ExtensionQRE;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ExtensionQRE);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BoxRelatedContextImportance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxRelatedContext; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExtensionSome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _ExtensionQRE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80);
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



var BoxRelatedContextImportance;
(function (BoxRelatedContextImportance) {
    BoxRelatedContextImportance[BoxRelatedContextImportance["LOWEST"] = 0] = "LOWEST";
    BoxRelatedContextImportance[BoxRelatedContextImportance["LOW"] = 1] = "LOW";
    BoxRelatedContextImportance[BoxRelatedContextImportance["AVERAGE"] = 2] = "AVERAGE";
    BoxRelatedContextImportance[BoxRelatedContextImportance["HIGH"] = 3] = "HIGH";
    BoxRelatedContextImportance[BoxRelatedContextImportance["HIGHEST"] = 4] = "HIGHEST";
    BoxRelatedContextImportance[BoxRelatedContextImportance["MANDATORY"] = 5] = "MANDATORY";
})(BoxRelatedContextImportance || (BoxRelatedContextImportance = {}));
var BoxRelatedContext = /** @class */ (function (_super) {
    __extends(BoxRelatedContext, _super);
    function BoxRelatedContext(element, options, bindings) {
        var _this = _super.call(this, element, BoxRelatedContext.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.importanceDescription = [
            {
                importance: BoxRelatedContextImportance.LOWEST,
                modifier: 10,
                match: '10%',
            },
            {
                importance: BoxRelatedContextImportance.LOW,
                modifier: 30,
                match: '30%',
            },
            {
                importance: BoxRelatedContextImportance.AVERAGE,
                modifier: 50,
                match: '50%',
            },
            {
                importance: BoxRelatedContextImportance.HIGH,
                modifier: 70,
                match: '70%',
            },
            {
                importance: BoxRelatedContextImportance.HIGHEST,
                modifier: 100,
                match: '100%',
            },
            {
                importance: BoxRelatedContextImportance.MANDATORY,
                modifier: 100,
                match: '100%',
            },
        ];
        if (bindings.isWaitingForRecord) {
            _this.logger.info('Disabling component : No record found to expand query', _this);
            return _this;
        }
        _this.options.configurations = _.extend({}, options.configurations, BoxRelatedContext.getConfigFromContent(_this.element));
        var expressions = [];
        _.each(_this.options.configurations, function (config) {
            if (config.include) {
                var modifierDescription = _.findWhere(_this.importanceDescription, { importance: config.importance });
                if (!_.isUndefined(modifierDescription)) {
                    /*
                     * First , get a $some expression with the provided context field
                     * The match parameters depends on the importance of the field configured
                     * This is not added 'directly' to the query, but serves for other part
                     * of the expression
                     */
                    var someExpression = new _ExtensionSome__WEBPACK_IMPORTED_MODULE_1__[/* ExtensionSome */ "a"](element, {
                        keywords: _ExtensionSome__WEBPACK_IMPORTED_MODULE_1__[/* ExtensionSome */ "a"].fromStringArrayToStringKeywords(config.include, bindings),
                        best: BoxRelatedContext.BestKeywordsToMatch,
                        bindOnQuery: false,
                        match: modifierDescription.match,
                    }, bindings)
                        .getBuilder()
                        .build();
                    /*
                     * The first expression we add is a $some paired with @uri if it's not mandatory
                     * (so basically : ($some of the keywords OR anything) if it's not mandatory)
                     */
                    var firstExpression = void 0;
                    if (modifierDescription.importance != BoxRelatedContextImportance.MANDATORY) {
                        firstExpression = '( ' + someExpression + 'OR @uri )';
                    }
                    else {
                        firstExpression = '( ' + someExpression + ')';
                    }
                    /*
                     * The second expression is a $qre for $some of the keywords
                     * Will boost document with $some keywords according to the configured importance/modifier
                     */
                    var secondExpression = new _ExtensionQRE__WEBPACK_IMPORTED_MODULE_2__[/* ExtensionQRE */ "a"](element, {
                        expression: someExpression,
                        modifier: modifierDescription.modifier,
                        bindOnQuery: false,
                        quotedExpression: false,
                    }, bindings)
                        .getBuilder()
                        .build();
                    /*
                     * At the end we get something like :
                     * ($some(keywords, 70%) OR @uri) $qre($some(keywords, 70%)) -> non mandatory context field
                     * ($some(keywords, 70%)) $qre($some(keywords, 70%)) -> mandatory context field with 70% match
                     */
                    expressions.push('(' + firstExpression + ' ' + secondExpression + ')');
                }
            }
        });
        if (!_.isEmpty(expressions)) {
            _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) {
                _this.handleBuildingQuery(args, expressions.join(' '));
            });
        }
        return _this;
    }
    BoxRelatedContext.getMarkup = function () {
        return $("<script class='CoveoBoxRelatedContext' type='text/x-query-related-object' ></script>");
    };
    BoxRelatedContext.getConfigFromContent = function (content) {
        if (content instanceof HTMLElement) {
            content = content.innerHTML;
        }
        var configFromJson;
        try {
            configFromJson = JSON.parse(content);
        }
        catch (e) {
            configFromJson = [];
        }
        return configFromJson;
    };
    BoxRelatedContext.prototype.handleBuildingQuery = function (args, expression) {
        args.queryBuilder.advancedExpression.add(expression);
    };
    BoxRelatedContext.ID = 'BoxRelatedContext';
    // This number has been chosen after a 5 year PHD thesis analysis
    BoxRelatedContext.BestKeywordsToMatch = 5;
    return BoxRelatedContext;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(BoxRelatedContext);


/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SalesforceEnvironment", function() { return /* reexport */ SalesforceAdaptiveResultLink["c" /* SalesforceEnvironment */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceComponent", function() { return /* reexport */ SalesforceAdaptiveResultLink["b" /* SalesforceComponent */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceAdaptiveResultLink", function() { return /* reexport */ SalesforceAdaptiveResultLink["a" /* SalesforceAdaptiveResultLink */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceResultLink", function() { return /* reexport */ SalesforceResultLink["a" /* SalesforceResultLink */]; });
__webpack_require__.d(__webpack_exports__, "AttachedResultsTab", function() { return /* reexport */ AttachedResultsTab["a" /* AttachedResultsTab */]; });
__webpack_require__.d(__webpack_exports__, "AttachToCase", function() { return /* reexport */ AttachToCase["a" /* AttachToCase */]; });
__webpack_require__.d(__webpack_exports__, "UserActions", function() { return /* reexport */ UserAction_UserActions; });
__webpack_require__.d(__webpack_exports__, "SalesforceFields", function() { return /* reexport */ SalesforceUtils["b" /* SalesforceFields */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceUtilities", function() { return /* reexport */ SalesforceUtils["c" /* SalesforceUtilities */]; });
__webpack_require__.d(__webpack_exports__, "Id", function() { return /* reexport */ SalesforceUtils["a" /* Id */]; });
__webpack_require__.d(__webpack_exports__, "Box", function() { return /* reexport */ Box["a" /* Box */]; });
__webpack_require__.d(__webpack_exports__, "BoxAttachToCase", function() { return /* reexport */ BoxAttachToCase["a" /* BoxAttachToCase */]; });
__webpack_require__.d(__webpack_exports__, "BoxBody", function() { return /* reexport */ BoxBody["a" /* BoxBody */]; });
__webpack_require__.d(__webpack_exports__, "BoxCreateArticle", function() { return /* reexport */ BoxCreateArticle["a" /* BoxCreateArticle */]; });
__webpack_require__.d(__webpack_exports__, "BoxCurrentSort", function() { return /* reexport */ BoxCurrentSort_BoxCurrentSort; });
__webpack_require__.d(__webpack_exports__, "BoxCurrentTab", function() { return /* reexport */ BoxCurrentTab_BoxCurrentTab; });
__webpack_require__.d(__webpack_exports__, "BoxEditLink", function() { return /* reexport */ BoxEditLink["a" /* BoxEditLink */]; });
__webpack_require__.d(__webpack_exports__, "BoxExpandLink", function() { return /* reexport */ BoxExpandLink["a" /* BoxExpandLink */]; });
__webpack_require__.d(__webpack_exports__, "BoxFieldTable", function() { return /* reexport */ BoxFieldTable["a" /* BoxFieldTable */]; });
__webpack_require__.d(__webpack_exports__, "BoxFollowItem", function() { return /* reexport */ BoxFollowItem; });
__webpack_require__.d(__webpack_exports__, "BoxHeader", function() { return /* reexport */ BoxHeader["a" /* BoxHeader */]; });
__webpack_require__.d(__webpack_exports__, "BoxPipelineContext", function() { return /* reexport */ BoxPipelineContext["a" /* BoxPipelineContext */]; });
__webpack_require__.d(__webpack_exports__, "BoxPopup", function() { return /* reexport */ BoxPopup["a" /* BoxPopup */]; });
__webpack_require__.d(__webpack_exports__, "SupportedBoxQueryExtension", function() { return /* reexport */ BoxQueryExtensions["b" /* SupportedBoxQueryExtension */]; });
__webpack_require__.d(__webpack_exports__, "BoxQueryExtensions", function() { return /* reexport */ BoxQueryExtensions["a" /* BoxQueryExtensions */]; });
__webpack_require__.d(__webpack_exports__, "BoxQueryGeneric", function() { return /* reexport */ BoxQueryGeneric["a" /* BoxQueryGeneric */]; });
__webpack_require__.d(__webpack_exports__, "BoxQuerySome", function() { return /* reexport */ BoxQuerySome["a" /* BoxQuerySome */]; });
__webpack_require__.d(__webpack_exports__, "BoxQuerySummary", function() { return /* reexport */ BoxQuerySummary["a" /* BoxQuerySummary */]; });
__webpack_require__.d(__webpack_exports__, "BoxQuickview", function() { return /* reexport */ BoxQuickview["a" /* BoxQuickview */]; });
__webpack_require__.d(__webpack_exports__, "BoxRelatedContextImportance", function() { return /* reexport */ BoxRelatedContext["b" /* BoxRelatedContextImportance */]; });
__webpack_require__.d(__webpack_exports__, "BoxRelatedContext", function() { return /* reexport */ BoxRelatedContext["a" /* BoxRelatedContext */]; });
__webpack_require__.d(__webpack_exports__, "BoxResultAction", function() { return /* reexport */ BoxResultAction["a" /* BoxResultAction */]; });
__webpack_require__.d(__webpack_exports__, "BoxResultLink", function() { return /* reexport */ BoxResultLink; });
__webpack_require__.d(__webpack_exports__, "BoxSearchAlerts", function() { return /* reexport */ BoxSearchAlerts_BoxSearchAlerts; });
__webpack_require__.d(__webpack_exports__, "BoxStateModel", function() { return /* reexport */ BoxStateModel["a" /* BoxStateModel */]; });
__webpack_require__.d(__webpack_exports__, "Container", function() { return /* reexport */ Container["a" /* Container */]; });
__webpack_require__.d(__webpack_exports__, "ContainerInjection", function() { return /* reexport */ ContainerInjection_ContainerInjection; });
__webpack_require__.d(__webpack_exports__, "ArgWithQuote", function() { return /* reexport */ ExtensionBuilder["a" /* ArgWithQuote */]; });
__webpack_require__.d(__webpack_exports__, "ExtensionBuilder", function() { return /* reexport */ ExtensionBuilder["b" /* ExtensionBuilder */]; });
__webpack_require__.d(__webpack_exports__, "ExtensionQF", function() { return /* reexport */ ExtensionQF["a" /* ExtensionQF */]; });
__webpack_require__.d(__webpack_exports__, "ExtensionQRE", function() { return /* reexport */ ExtensionQRE["a" /* ExtensionQRE */]; });
__webpack_require__.d(__webpack_exports__, "ExtensionQRF", function() { return /* reexport */ ExtensionQRF["a" /* ExtensionQRF */]; });
__webpack_require__.d(__webpack_exports__, "ExtensionRefinedQuery", function() { return /* reexport */ ExtensionRefinedQuery["a" /* ExtensionRefinedQuery */]; });
__webpack_require__.d(__webpack_exports__, "ExtensionSome", function() { return /* reexport */ ExtensionSome["a" /* ExtensionSome */]; });
__webpack_require__.d(__webpack_exports__, "getSalesforceContext", function() { return /* reexport */ SalesforceContext["a" /* getSalesforceContext */]; });
__webpack_require__.d(__webpack_exports__, "MetadataStore", function() { return /* reexport */ metadata["a" /* MetadataStore */]; });
__webpack_require__.d(__webpack_exports__, "initBoxInterface", function() { return /* binding */ initBoxInterface; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/Box.ts
var Box = __webpack_require__(77);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxHeader.ts
var BoxHeader = __webpack_require__(58);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxBody.ts
var BoxBody = __webpack_require__(85);

// EXTERNAL MODULE: ./src/components/search-ui/SalesforceAdaptiveResultLink/SalesforceAdaptiveResultLink.ts
var SalesforceAdaptiveResultLink = __webpack_require__(39);

// EXTERNAL MODULE: ./src/components/search-ui/SalesforceResultLink/SalesforceResultLink.ts
var SalesforceResultLink = __webpack_require__(11);

// EXTERNAL MODULE: ./src/modules/attachToCase/ts/AttachedResultsTab.ts
var AttachedResultsTab = __webpack_require__(76);

// EXTERNAL MODULE: ./src/modules/attachToCase/ts/AttachToCase.ts
var AttachToCase = __webpack_require__(19);

// CONCATENATED MODULE: ./src/modules/userActions/ts/UserAction.ts
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
 * The _UserActions_ component allows your agents to see the actions performed by the end-user before or after the creation of a case within the Salesforce console.
 *
 * The component takes the information from the Coveo Usage Analytics events performed during the visit in which the case was created,
 * as seen from the Visit Browser page of the Coveo Cloud Administration Console (see [Reviewing User Visits With the Visit Browser](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=138)).
 *
 * You can configure which events the component displays.
 *
 * The component typically appears in a tab of the Insight Panel, but can also be included as a standalone component in a Visualforce page (see [Implementing the UserActions Component](https://developers.coveo.com/x/J4CpAQ)).
 *
 * In an Insight Panel, the component would look like this:
 *
 * ```html
 * <div class="CoveoBoxPopup" data-title="User actions" data-full-width="true" data-full-height="true" data-icon="coveo-sprites-tab-people">
 *   <div class="CoveoUserActions"></div>
 * </div>
 * ```
 *
 * To add the UserActions component as a standalone component, you need to add the UserActions Visualforce Component in your Visualforce page (see [UserActions Visualforce Component](https://developers.coveo.com/x/TICpAQ)).
 *
 * You also need to create a custom handler to open/close the component, or you can simply use the `showButton` property.
 *
 * ```html
 * <div class="CoveoUserActions" data-bind-on-box="false" data-show-button="true"></div>
 * ```
 */
var UserAction_UserActions = /** @class */ (function (_super) {
    __extends(UserActions, _super);
    function UserActions(element, options, bindings) {
        var _this = _super.call(this, element, UserActions.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, UserActions, options);
        $(_this.root).on(external_window_Coveo_["AnalyticsEvents"].changeAnalyticsCustomData, $.proxy(_this.handleChangeAnalyticsEvents, _this));
        if (typeof userActionsHandler != 'undefined') {
            _this.setHandler(userActionsHandler);
        }
        _this.render();
        if (_this.options.enableBindOnBox) {
            $(element)
                .closest('.CoveoBoxPopup')
                .on('onPopupOpen', function () {
                _this.open();
            });
        }
        return _this;
    }
    UserActions.prototype.setHandler = function (handler) {
        this.handler = handler;
    };
    UserActions.prototype.setFilters = function (filters) {
        this.options.filters = filters;
    };
    UserActions.prototype.handleChangeAnalyticsEvents = function (e, args) {
        if (args.actionType == external_window_Coveo_["analyticsActionCauseList"].getUserHistory.type ||
            args.actionType == external_window_Coveo_["analyticsActionCauseList"].userActionDocumentClick.type) {
            args.originLevel2 = UserActions.ID;
        }
    };
    UserActions.prototype.render = function () {
        var _this = this;
        if (this.options.showButton) {
            var button = this.renderButton()
                .appendTo(this.element)
                .click(function () {
                _this.toggle();
            });
        }
        this.loadingBox = $(external_window_Coveo_["DomUtils"].getBasicLoadingAnimation()).hide().appendTo(this.element);
        this.eventListBox = $('<div>').addClass('coveo-useractions-events-list').hide().appendTo(this.element);
    };
    /**
     * This method opens the `UserActions` component.
     *
     * ```js
     * $('#myUserAction').coveo('open');
     * ```
     */
    UserActions.prototype.open = function () {
        var _this = this;
        if (this.eventListBox.is(':empty') && this.handler != null) {
            this.loadingBox.show();
            this.usageAnalytics.logCustomEvent(external_window_Coveo_["analyticsActionCauseList"].getUserHistory, null, this.element);
            this.handler.getDataFromUA(function (sessions) {
                _this.renderEvents(sessions);
            });
        }
        else {
            this.eventListBox.slideDown();
        }
    };
    /**
     * This method opens or closes the `UserActions` component, depending on its current state.
     *
     * ```js
     * $('#myUserAction').coveo('toggle');
     * ```
     */
    UserActions.prototype.toggle = function () {
        if (this.eventListBox.is(':visible')) {
            this.close();
        }
        else {
            this.open();
        }
    };
    /**
     * This method closes the `UserActions` component.
     *
     * ```js
     * $('#myUserAction').coveo('toggle');
     * ```
     */
    UserActions.prototype.close = function () {
        if (this.eventListBox.is(':visible')) {
            this.eventListBox.slideUp();
        }
    };
    UserActions.prototype.renderEvents = function (visits) {
        var _this = this;
        this.eventListBox.empty();
        if (visits.message != null) {
            this.logger.info(visits.message, visits.type, visits);
            if (visits.type == 'NoVisitIdError') {
                $('<span>').text(Object(external_window_Coveo_["l"])('UserActionsNoVisitId')).addClass('coveo-useractions-nodata').appendTo(this.eventListBox);
            }
            else if (visits.type == 'DateRangeUnavailable') {
                $('<span>').text(visits.message).addClass('coveo-useractions-nodata').appendTo(this.eventListBox);
            }
            else {
                $('<span>').text(Object(external_window_Coveo_["l"])('UserActionsErrorOccured')).addClass('coveo-useractions-nodata').appendTo(this.eventListBox);
            }
        }
        else if (visits.totalNumberOfVisits > 0) {
            if (visits.visits[0].numberOfEvents > 0) {
                this.renderHeaderBox(visits.visits[0]).appendTo(this.eventListBox);
                _.each(visits.visits[0].events, function (event) {
                    if (_.contains(_this.options.filters, event.eventMetadata.actionCause) ||
                        _.contains(_this.options.filters, event.eventMetadata.customEventValue)) {
                        _this.renderEvent(event).appendTo(_this.eventListBox);
                    }
                });
            }
        }
        else {
            $('<span>').text(Object(external_window_Coveo_["l"])('NoData')).addClass('coveo-useractions-nodata').appendTo(this.eventListBox);
        }
        this.loadingBox.hide();
        this.eventListBox.slideToggle();
    };
    UserActions.prototype.renderEvent = function (event) {
        var box = $('<div>').addClass('coveo-useractions-event');
        var rightBox = $('<div>').addClass('coveo-useractions-event-right').appendTo(box);
        var leftBox = $('<div>').addClass('coveo-useractions-event-left').appendTo(box);
        this.renderField(Object(external_window_Coveo_["l"])('Time'), new Date(event.dateTime).toLocaleTimeString()).appendTo(leftBox);
        if (event.eventMetadata.documentTitle && event.eventMetadata.documentURL) {
            this.renderLinkField(Object(external_window_Coveo_["l"])('Document'), event.eventMetadata.documentTitle, event.eventMetadata.documentURL).appendTo(rightBox);
        }
        if (event.eventMetadata.queryExpression) {
            this.renderField(Object(external_window_Coveo_["l"])('UserQuery'), event.eventMetadata.queryExpression).appendTo(rightBox);
        }
        if (event.eventMetadata.customEventValue == 'pageView') {
            this.renderLinkField(event.type, event.eventMetadata.originLevel3, event.eventMetadata.originLevel3).appendTo(rightBox);
        }
        else if (event.eventMetadata.customEventValue) {
            this.renderField(event.type, event.eventMetadata.customEventValue).appendTo(rightBox);
        }
        if (rightBox.is(':empty')) {
            this.renderField(Object(external_window_Coveo_["l"])('EventType'), event.type + (event.eventMetadata.actionCause ? ', ' + event.eventMetadata.actionCause : '')).appendTo(rightBox);
        }
        return box;
    };
    UserActions.prototype.renderField = function (fieldTitle, fieldValue) {
        var fieldBox = $('<div>');
        if (fieldValue) {
            $('<span>').addClass('coveo-useractions-event-title').text(fieldTitle).appendTo(fieldBox);
            $('<span>').addClass('coveo-useractions-event-value-expand').text(fieldValue).appendTo(fieldBox);
        }
        return fieldBox;
    };
    UserActions.prototype.renderLinkField = function (fieldTitle, fieldValue, fieldLink) {
        var _this = this;
        var fieldBox = $('<div>');
        if (fieldValue) {
            $('<span>').addClass('coveo-useractions-event-title').text(fieldTitle).appendTo(fieldBox);
            $('<a>')
                .addClass('coveo-useractions-event-value-expand CoveoResultLink')
                .text(fieldValue)
                .attr('href', fieldLink)
                .attr('target', '_blanc')
                .appendTo(fieldBox)
                .click(function () {
                _this.usageAnalytics.logCustomEvent(external_window_Coveo_["analyticsActionCauseList"].userActionDocumentClick, {
                    author: null,
                    documentTitle: fieldValue,
                    documentURL: fieldLink,
                }, _this.element);
            });
        }
        return fieldBox;
    };
    UserActions.prototype.renderHeaderBox = function (session) {
        var box = $('<div>').addClass('coveo-useractions-event').addClass('coveo-useractions-event-header');
        var rightBox = $('<div>').addClass('coveo-useractions-event-right').appendTo(box);
        var leftBox = $('<div>').addClass('coveo-useractions-event-left').appendTo(box);
        var startDate = new Date(session.events[0].dateTime).toDateString();
        var startTime = new Date(session.events[0].dateTime).toLocaleTimeString();
        var duration = external_window_Coveo_["DateUtils"].timeBetween(new Date(session.events[0].dateTime), new Date(session.events[session.numberOfEvents - 1].dateTime));
        this.renderField(Object(external_window_Coveo_["l"])('StartDate'), startDate).appendTo(leftBox);
        this.renderField(Object(external_window_Coveo_["l"])('StartTime'), startTime).css('float', 'left').appendTo(rightBox);
        this.renderField(Object(external_window_Coveo_["l"])('DurationTitle'), duration).css('float', 'right').appendTo(rightBox);
        return box;
    };
    UserActions.prototype.renderButton = function () {
        return $('<div>')
            .addClass('coveo-useractions-button')
            .append($('<span>').text(Object(external_window_Coveo_["l"])('ShowUserActions').toUpperCase()));
    };
    UserActions.ID = 'UserActions';
    UserActions.DEFAULT_FILTERS = ['searchboxSubmit', 'documentOpen', 'documentQuickview', 'pageVisit', 'pageView', 'createCase'];
    /**
     * The available options for UserAction
     * @componentOptions
     */
    UserActions.options = {
        /**
         * Specifies if the component should render a button to open/close itself.
         *
         * Default value is `false`.
         *
         * ```html
         * <div class="CoveoUserActions" data-show-button="true"></div>
         * ```
         */
        showButton: external_window_Coveo_["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies if the component should listen to the `onPopupOpen` event fired by the closest `BoxPopup` component to open itself.
         *
         * Default value is `true`.
         *
         * ```html
         * <div class="CoveoUserActions" data-enable-bind-on-box="false"></div>
         * ```
         */
        enableBindOnBox: external_window_Coveo_["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies which events the `UserActions` component should display.
         *
         * You typically want to include only events that are manually performed by the end-users, including appropriate custom events, and omitting the ones that are generated automatically by the components.
         *
         * These typically are the `Click`, `Search`, and `Custom` dimension causes (see [Usage Analytics Dimensions](http://www.coveo.com/go?dest=cloudhelp&lcid=9&context=106)).
         */
        filters: external_window_Coveo_["ComponentOptions"].buildListOption({ defaultValue: UserActions.DEFAULT_FILTERS }),
    };
    return UserActions;
}(external_window_Coveo_["Component"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(UserAction_UserActions);

// EXTERNAL MODULE: ./src/utils/SalesforceUtils.ts
var SalesforceUtils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxAttachToCase.ts
var BoxAttachToCase = __webpack_require__(62);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxCreateArticle.ts
var BoxCreateArticle = __webpack_require__(61);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxPopup.ts
var BoxPopup = __webpack_require__(72);

// CONCATENATED MODULE: ./src/modules/insightPanel/ts/BoxCurrentSort.ts
var BoxCurrentSort_extends = (undefined && undefined.__extends) || (function () {
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
 * The _BoxCurrentSort_ component is only meant as a utility to set the title on its {@link BoxPopup} Component container.
 * Whenever the current sort changes, for instance when a user clicks on a new [Sort Component](https://coveo.github.io/search-ui/components/sort.html), this component takes care of setting a new title on the BoxPopup Component.
 *
 * This component must be included inside a BoxPopup component.
 *
 * ```html
 * <div class='CoveoBoxPopup'>
 *     <div class='CoveoBoxCurrentSort'></div>
 *     <div class="coveo-sort-section">
 *         [[sorts]]
 *     </div>
 * </div>
 * ```
 */
var BoxCurrentSort_BoxCurrentSort = /** @class */ (function (_super) {
    BoxCurrentSort_extends(BoxCurrentSort, _super);
    function BoxCurrentSort(element, options, bindings) {
        var _this = _super.call(this, element, BoxCurrentSort.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        var eventName = _this.queryStateModel.getEventName(external_window_Coveo_["Model"].eventTypes.changeOne + external_window_Coveo_["QueryStateModel"].attributesEnum.sort);
        var foundNearestBoxSidePanel = $(_this.element)
            .parentsUntil('.' + external_window_Coveo_["Component"].computeCssClassNameForType(BoxPopup["a" /* BoxPopup */].ID))
            .parent();
        _this.bind.onRootElement(external_window_Coveo_["InitializationEvents"].afterComponentsInitialization, function () {
            if (foundNearestBoxSidePanel.length != 0) {
                _this.nearestBoxSidePanel = Coveo.get(foundNearestBoxSidePanel.get(0));
                _this.bind.onRootElement(eventName, function (args) { return _this.handleSortChange(args); });
            }
        });
        return _this;
    }
    BoxCurrentSort.prototype.handleSortChange = function (args) {
        var _this = this;
        var selectedSort = args.value;
        if (external_window_Coveo_["Utils"].isNonEmptyString(selectedSort)) {
            $(this.root)
                .find(external_window_Coveo_["Component"].computeSelectorForType(external_window_Coveo_["Sort"].ID))
                .each(function (index, elem) {
                var sort = external_window_Coveo_["Component"].get(elem, external_window_Coveo_["Sort"]);
                if (sort && sort.options.sortCriteria.toString().indexOf(selectedSort) != -1) {
                    _this.nearestBoxSidePanel.setTitle(_this.createSortTitleElement(sort));
                    _this.nearestBoxSidePanel.close();
                }
            });
        }
    };
    BoxCurrentSort.prototype.createSortTitleElement = function (currentSort) {
        return $(currentSort.element.outerHTML)
            .clone(false, false)
            .removeAttr('coveo-uid')
            .removeClass(external_window_Coveo_["Component"].computeCssClassNameForType(external_window_Coveo_["Sort"].ID))
            .addClass('CoveoDisplayedSortInContainer')
            .show();
    };
    BoxCurrentSort.ID = 'BoxCurrentSort';
    return BoxCurrentSort;
}(external_window_Coveo_["Component"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(BoxCurrentSort_BoxCurrentSort);

// CONCATENATED MODULE: ./src/modules/insightPanel/ts/BoxCurrentTab.ts
var BoxCurrentTab_extends = (undefined && undefined.__extends) || (function () {
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
 * The _BoxCurrentTab_ component is only meant as a utility to set the title on its {@link BoxPopup} Component container.
 * Whenever the current tab changes, for instance when a user clicks on a new [Tab Component](https://coveo.github.io/search-ui/components/tab.html), this component takes care of setting a new title on the BoxPopup Component.
 *
 * This component must be included inside a BoxPopup component.
 *
 * ```html
 * <div class='CoveoBoxPopup'>
 *     <div class='CoveoBoxCurrentTab'></div>
 *     <div class="coveo-tab-section">
 *         [[sorts]]
 *     </div>
 * </div>
 * ```
 */
var BoxCurrentTab_BoxCurrentTab = /** @class */ (function (_super) {
    BoxCurrentTab_extends(BoxCurrentTab, _super);
    function BoxCurrentTab(element, options, bindings) {
        var _this = _super.call(this, element, BoxCurrentTab.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        var eventName = _this.queryStateModel.getEventName(external_window_Coveo_["Model"].eventTypes.changeOne + external_window_Coveo_["QueryStateModel"].attributesEnum.t);
        var foundNearestBoxSidePanel = $(_this.element)
            .parentsUntil('.' + external_window_Coveo_["Component"].computeCssClassNameForType(BoxPopup["a" /* BoxPopup */].ID))
            .parent();
        _this.bind.onRootElement(external_window_Coveo_["InitializationEvents"].afterComponentsInitialization, function () {
            if (foundNearestBoxSidePanel.length == 1) {
                _this.nearestBoxSidePanel = Coveo.get(foundNearestBoxSidePanel.get(0));
                _this.bind.onRootElement(eventName, function (args) { return _this.handleTabChange(args); });
            }
        });
        return _this;
    }
    BoxCurrentTab.prototype.handleTabChange = function (args) {
        var _this = this;
        var selectedTabId = args.value;
        if (external_window_Coveo_["Utils"].isNonEmptyString(selectedTabId)) {
            $(this.root)
                .find(external_window_Coveo_["Component"].computeSelectorForType(external_window_Coveo_["Tab"].ID))
                .each(function (index, elem) {
                var tab = external_window_Coveo_["Component"].get(elem, external_window_Coveo_["Tab"]);
                if (tab.options.id == selectedTabId) {
                    _this.nearestBoxSidePanel.setTitle($(tab.element).text());
                    _this.nearestBoxSidePanel.close();
                }
            });
        }
    };
    BoxCurrentTab.ID = 'BoxCurrentTab';
    return BoxCurrentTab;
}(external_window_Coveo_["Component"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(BoxCurrentTab_BoxCurrentTab);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxEditLink.ts
var BoxEditLink = __webpack_require__(88);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxExpandLink.ts
var BoxExpandLink = __webpack_require__(87);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxFieldTable.ts
var BoxFieldTable = __webpack_require__(96);

// CONCATENATED MODULE: ./src/modules/insightPanel/ts/BoxFollowItem.ts
var BoxFollowItem_extends = (undefined && undefined.__extends) || (function () {
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

var BoxFollowItem = /** @class */ (function (_super) {
    BoxFollowItem_extends(BoxFollowItem, _super);
    function BoxFollowItem(element, options, bindings, result) {
        var _this = _super.call(this, element, options, bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        return _this;
    }
    BoxFollowItem.getMarkup = function () {
        return $('<div class="CoveoBoxFollowItem"></div>');
    };
    BoxFollowItem.prototype.getTitle = function (displayedInline) {
        var _this = this;
        this.menuDiv = $('<div class="coveo-box-follow-item-in-menu">' + this.getText() + '</div>').get(0);
        $(this.menuDiv).click(function () {
            _this.toggleFollow();
        });
        return this.menuDiv;
    };
    BoxFollowItem.prototype.setFollowed = function (subscription) {
        _super.prototype.setFollowed.call(this, subscription);
        this.menuDiv.innerText = this.getText();
    };
    BoxFollowItem.prototype.setNotFollowed = function () {
        _super.prototype.setNotFollowed.call(this);
        this.menuDiv.innerText = this.getText();
    };
    BoxFollowItem.ID = 'BoxFollowItem';
    return BoxFollowItem;
}(external_window_Coveo_["FollowItem"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(BoxFollowItem);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxPipelineContext.ts
var BoxPipelineContext = __webpack_require__(101);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxQueryExtensions.ts
var BoxQueryExtensions = __webpack_require__(68);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxQueryGeneric.ts
var BoxQueryGeneric = __webpack_require__(90);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxQuerySome.ts
var BoxQuerySome = __webpack_require__(91);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxQuerySummary.ts
var BoxQuerySummary = __webpack_require__(95);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxQuickview.ts
var BoxQuickview = __webpack_require__(116);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxRelatedContext.ts
var BoxRelatedContext = __webpack_require__(81);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxResultAction.ts
var BoxResultAction = __webpack_require__(100);

// CONCATENATED MODULE: ./src/modules/insightPanel/ts/BoxResultLink.ts
var BoxResultLink_extends = (undefined && undefined.__extends) || (function () {
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


var BoxResultLink = /** @class */ (function (_super) {
    BoxResultLink_extends(BoxResultLink, _super);
    function BoxResultLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxResultLink.ID = 'BoxResultLink';
    return BoxResultLink;
}(SalesforceResultLink["a" /* SalesforceResultLink */]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(BoxResultLink);

// CONCATENATED MODULE: ./src/modules/insightPanel/ts/BoxSearchAlerts.ts
var BoxSearchAlerts_extends = (undefined && undefined.__extends) || (function () {
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

var BoxSearchAlerts_BoxSearchAlerts = /** @class */ (function (_super) {
    BoxSearchAlerts_extends(BoxSearchAlerts, _super);
    function BoxSearchAlerts(element, options, bindings) {
        var _this = _super.call(this, element, external_window_Coveo_["ComponentOptions"].initComponentOptions(element, BoxSearchAlerts, options), bindings) || this;
        _this.element = element;
        _this.options = options;
        $(_this.root).find('.coveo-box-header-sub-section-wrapper').css('margin-top', '40px');
        return _this;
    }
    BoxSearchAlerts.getMarkup = function () {
        return $('<div class="CoveoBoxSearchAlerts"></div>');
    };
    BoxSearchAlerts.prototype.openPanel = function () {
        var _this = this;
        return this.queryController
            .getEndpoint()
            .listSubscriptions()
            .then(function (subscriptions) {
            if (subscriptions.length > 0) {
                _this.redirectToManageAlertsPage(subscriptions[0].user);
            }
            else {
                _this.message.showMessage(Object(external_window_Coveo_["$$"])(_this.findQueryBoxDom()), Object(external_window_Coveo_["l"])('SearchAlerts_PanelNoSearchAlerts'), true);
            }
        });
    };
    BoxSearchAlerts.prototype.redirectToManageAlertsPage = function (subscriptionUser) {
        var url = this.queryController.getEndpoint().getBaseAlertsUri() +
            '/subscriptions/email?email=' +
            encodeURIComponent(subscriptionUser.email) +
            '&manageToken=' +
            encodeURIComponent(subscriptionUser.manageToken);
        // Todo : It would be nice to try to open this in a console subtab, but unfortunately the coveo platform set X-frame option : Deny.
        window.open(url);
    };
    BoxSearchAlerts.ID = 'BoxSearchAlerts';
    return BoxSearchAlerts;
}(external_window_Coveo_["SearchAlerts"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(BoxSearchAlerts_BoxSearchAlerts);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/BoxStateModel.ts
var BoxStateModel = __webpack_require__(35);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/Container.ts
var Container = __webpack_require__(89);

// CONCATENATED MODULE: ./src/modules/insightPanel/ts/ContainerInjection.ts

var ContainerInjection_ContainerInjection = /** @class */ (function () {
    function ContainerInjection() {
        this.editableAttributes = {};
        this.logger = new external_window_Coveo_["Logger"](this);
    }
    ContainerInjection.prototype.withHeader = function (headerKlass) {
        if (this.headerKlass) {
            this.loggerInfo('ContainerHeader', headerKlass, this.headerKlass);
        }
        this.headerKlass = headerKlass;
        var toSetAsEditable = this.fromComponentOptionsToContainerInjectionEditable(headerKlass.options);
        if (toSetAsEditable) {
            if (this.editableAttributes['header']) {
                this.loggerInfo('ContainerHeaderEditAttribute', this.editableAttributes['header'], toSetAsEditable);
            }
            this.editableAttributes['header'] = toSetAsEditable;
        }
        return this;
    };
    ContainerInjection.prototype.withBody = function (bodyKlass) {
        if (this.bodyKlass) {
            this.loggerInfo('ContainerBody', bodyKlass, this.bodyKlass);
        }
        this.bodyKlass = bodyKlass;
        var toSetAsEditable = this.fromComponentOptionsToContainerInjectionEditable(bodyKlass.options);
        if (toSetAsEditable) {
            if (this.editableAttributes['body']) {
                this.loggerInfo('ContainerBodyEditAttribute', this.editableAttributes['body'], toSetAsEditable);
            }
            this.editableAttributes['body'] = toSetAsEditable;
        }
        return this;
    };
    ContainerInjection.prototype.withFooter = function (footerKlass) {
        if (this.footerKlass) {
            this.loggerInfo('ContainerFooter', footerKlass, this.footerKlass);
        }
        this.footerKlass = footerKlass;
        var toSetAsEditable = this.fromComponentOptionsToContainerInjectionEditable(footerKlass.options);
        if (toSetAsEditable) {
            if (this.editableAttributes['footer']) {
                this.loggerInfo('ContainerFooterEditAttribute', this.editableAttributes['footer'], toSetAsEditable);
            }
            this.editableAttributes['footer'] = toSetAsEditable;
        }
        return this;
    };
    ContainerInjection.prototype.withQuery = function (queryKlass) {
        if (this.queryKlass) {
            this.loggerInfo('ContainerQuery', queryKlass, this.queryKlass);
        }
        this.queryKlass = queryKlass;
        var toSetAsEditable = this.fromComponentOptionsToContainerInjectionEditable(queryKlass.options);
        if (toSetAsEditable) {
            if (this.editableAttributes['query']) {
                this.loggerInfo('ContainerQueryEditAttribute', this.editableAttributes['query'], toSetAsEditable);
            }
            this.editableAttributes['query'] = toSetAsEditable;
        }
        return this;
    };
    ContainerInjection.prototype.withOptions = function (options) {
        var toSet = this.fromComponentOptionsToContainerInjectionEditable(options);
        if (this.editableAttributes['options']) {
            this.loggerInfo('ContainerEditAttribute', this.editableAttributes['options'], toSet);
        }
        this.editableAttributes['options'] = toSet;
        return this;
    };
    ContainerInjection.prototype.withContext = function (contextKlass) {
        if (this.contextKlass) {
            this.loggerInfo('ContainerFooter', contextKlass, this.contextKlass);
        }
        this.contextKlass = contextKlass;
        var toSetAsEditable = this.fromComponentOptionsToContainerInjectionEditable(contextKlass.options);
        if (toSetAsEditable) {
            if (this.editableAttributes['context']) {
                this.loggerInfo('ContainerContextEditAttribute', this.editableAttributes['context'], toSetAsEditable);
            }
            this.editableAttributes['context'] = toSetAsEditable;
        }
        return this;
    };
    ContainerInjection.prototype.getAttributes = function () {
        return _.chain(this.editableAttributes)
            .map(function (v) {
            return _.map(v, function (attr) {
                return attr;
            });
        })
            .flatten()
            .value();
    };
    ContainerInjection.prototype.loggerInfo = function (part, oldPart, newPart) {
        this.logger.info(part + ' is already added for this container. Overwriting current one.', oldPart, newPart);
    };
    ContainerInjection.prototype.fromComponentOptionsToContainerInjectionEditable = function (options) {
        var ret = {};
        _.each(options, function (v, k) {
            ret[k] = { name: k, defaultValue: v.defaultValue };
        });
        if (_.isEmpty(ret)) {
            return undefined;
        }
        return ret;
    };
    return ContainerInjection;
}());


// EXTERNAL MODULE: ./src/modules/insightPanel/ts/ExtensionBuilder.ts
var ExtensionBuilder = __webpack_require__(33);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/ExtensionQF.ts
var ExtensionQF = __webpack_require__(98);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/ExtensionQRE.ts
var ExtensionQRE = __webpack_require__(80);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/ExtensionQRF.ts
var ExtensionQRF = __webpack_require__(97);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/ExtensionRefinedQuery.ts
var ExtensionRefinedQuery = __webpack_require__(99);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/ExtensionSome.ts
var ExtensionSome = __webpack_require__(63);

// EXTERNAL MODULE: ./src/modules/insightPanel/ts/SalesforceContext.ts
var SalesforceContext = __webpack_require__(7);

// EXTERNAL MODULE: ./src/modules/search/ts/metadata/metadata.ts
var metadata = __webpack_require__(56);

// EXTERNAL MODULE: ./src/modules/insightPanel/strings.json
var strings = __webpack_require__(119);
var strings_namespaceObject = /*#__PURE__*/__webpack_require__.t(strings, 2);

// EXTERNAL MODULE: ./src/utils/Translation.ts
var Translation = __webpack_require__(6);

// CONCATENATED MODULE: ./src/modules/insightPanel/ts/index.ts
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




// Components






// Box Related Stuff

































function initBoxInterface(element, options, type, injectMarkup) {
    if (options === void 0) { options = {}; }
    if (type === void 0) { type = 'Standard'; }
    if (injectMarkup === void 0) { injectMarkup = true; }
    options = external_window_Coveo_["Initialization"].resolveDefaultOptions(element, options);
    var box = new Box["a" /* Box */](element, options.Box, options.Analytics, options);
    box.options.originalOptionsObject = options;
    var initParameters = { options: options, bindings: box.getBindings() };
    return external_window_Coveo_["Initialization"].automaticallyCreateComponentsInside(element, initParameters);
}
external_window_Coveo_["Initialization"].registerNamedMethod('initInsightPanel', function (element, options) {
    if (options === void 0) { options = {}; }
    external_window_Coveo_["Initialization"].initializeFramework(element, options, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return initBoxInterface(element, options);
    });
});
// Format a string so it can be used as a tooltip.
var formatOptionName = function (raw) {
    raw = raw.replace(/_+/g, '.').replace(/[\s-]+/g, '');
    var name = raw.substring(0, raw.indexOf('.'));
    return raw
        .replace(/\.options\./, '.')
        .replace("" + name, "_" + name)
        .toLowerCase();
};
// Takes all the locales of the tooltips from some JSUI components and copy them to their 'Box' equivalent with the good prefixes.
var searchInterfaceToBox = [
    {
        from: '_searchinterface.',
        to: "_" + Box["a" /* Box */].ID.toLowerCase(),
        matcher: new RegExp('^_searchinterface.'),
    },
    {
        from: '_omnibox.',
        to: "_" + BoxHeader["a" /* BoxHeader */].ID.toLowerCase(),
        matcher: new RegExp('^_omnibox.'),
    },
    {
        from: '_querybox.',
        to: "_" + BoxHeader["a" /* BoxHeader */].ID.toLowerCase(),
        matcher: new RegExp('^_querybox.'),
    },
    {
        from: '_searchbox.',
        to: "_" + BoxHeader["a" /* BoxHeader */].ID.toLowerCase(),
        matcher: new RegExp('^_searchbox.'),
    },
    {
        from: '_resultlist.',
        to: "_" + BoxBody["a" /* BoxBody */].ID.toLowerCase(),
        matcher: new RegExp('^_resultlist.'),
    },
];
var _loop_1 = function (element) {
    Object.keys(String['locales']['en'])
        .filter(function (key) { return element.matcher.test(key); })
        .forEach(function (key) {
        String['locales']['en'][element.to + "." + key.substr(element.from.length)] = String['locales']['en'][key];
    });
};
for (var _i = 0, searchInterfaceToBox_1 = searchInterfaceToBox; _i < searchInterfaceToBox_1.length; _i++) {
    var ts_element = searchInterfaceToBox_1[_i];
    _loop_1(ts_element);
}
// Load strings and format 'description' ones for the tooltips.


var descriptionPostfix = '_description';
var descriptionMatcher = new RegExp(descriptionPostfix + "$");
var formatDescriptionKey = function (key) {
    return descriptionMatcher.test(key) ? formatOptionName(key.substring(0, key.length - descriptionPostfix.length)) : key;
};
var normalizedStrings = Object.keys(strings_namespaceObject).reduce(function (result, key) {
    var _a;
    return (__assign(__assign({}, result), (_a = {}, _a[formatDescriptionKey(key)] = strings_namespaceObject[key], _a)));
}, {});
Translation["a" /* Translation */].register('en', normalizedStrings);


/***/ }),
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxBody; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
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
 * The _BoxBody_ component takes care of appending a [ResultList Component](https://coveo.github.io/search-ui/components/resultlist.html) and ensuring the correct CSS styles are applied so that infinite scrolling works properly.
 *
 * By default, the _ResultList_ component is initialized with the following option:
 *
 * ```
 * enableInfiniteScroll: true;
 * ```
 *
 * When you wish to modify other options on the _ResultList_ component, when initializing the framework, add the following code.
 *
 * Remember to change `#MyBox` with the id of your `CoveoBoxBody` component, and `20` with the page size you wish to modify.
 *
 * ```js
 * $('#MyBox').coveo('initBox', {
 *     BoxBody : {
 *         infiniteScrollPageSize : 20
 *     }
 * })
 * ```
 *
 * Use this component on your page this way:
 *
 * ```html
 * <div class='CoveoBoxBody'></div>
 * ```
 */
var BoxBody = /** @class */ (function (_super) {
    __extends(BoxBody, _super);
    function BoxBody(element, options, bindings) {
        var _this = _super.call(this, element, BoxBody.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, BoxBody, options);
        _this.appendResultList();
        /*
         * To get a simple to use scrollable result list, we need
         * to set a max height on the body whenever a query arrives.
         * This is because there can be elements in the page that appear or dissapear depending on what the query returns
         * eg: Did you mean, error report, or any custom components
         */
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryEvents"].deferredQuerySuccess, function () { return _this.resize(); });
        _this.resizeHandler = function () { return _this.resize(); };
        jquery__WEBPACK_IMPORTED_MODULE_0__(window).resize(_this.resizeHandler);
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["InitializationEvents"].nuke, _this.handleNuke);
        _this.resize();
        return _this;
    }
    BoxBody.getMarkup = function () {
        return jquery__WEBPACK_IMPORTED_MODULE_0__("<div class='CoveoBoxBody'></div>");
    };
    /**
     * Returns the height of the component. It is used mostly for the `resize` method.
     *
     * ```js
     * $('#myBoxBody').coveo('getHeight')
     * ```
     */
    BoxBody.prototype.getHeight = function () {
        var _this = this;
        var otherHeight = _.chain(jquery__WEBPACK_IMPORTED_MODULE_0__(this.root).children())
            .reject(function (elem) {
            return jquery__WEBPACK_IMPORTED_MODULE_0__(elem).get(0) == jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).get(0);
        })
            .reduce(function (memo, elem) {
            if (jquery__WEBPACK_IMPORTED_MODULE_0__(elem).css('display') == 'none') {
                return memo + 0;
            }
            else {
                return memo + jquery__WEBPACK_IMPORTED_MODULE_0__(elem).outerHeight();
            }
        }, 0)
            .value();
        return otherHeight;
    };
    /**
     * Calculates the current required height for the body so that infinite scrolling works correctly.
     *
     * It is called once when the component is first initialized and after every query, but you might need to call it again if you have something in your box that changes the header or footer height.
     *
     * ```js
     * $('#myBoxBody').coveo('resize')
     * ```
     */
    BoxBody.prototype.resize = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).height(jquery__WEBPACK_IMPORTED_MODULE_0__(window).height() - parseInt(this.getHeight().toString()));
    };
    BoxBody.prototype.appendResultList = function () {
        var resultListDiv = jquery__WEBPACK_IMPORTED_MODULE_0__('<div></div>').addClass(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"].computeCssClassNameForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].ID));
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(resultListDiv);
        var resultListOptions = _.extend({}, this.bindings.container.options.originalOptionsObject.ResultList, this.options);
        if (resultListOptions == undefined) {
            resultListOptions = {};
        }
        if (resultListOptions.enableInfiniteScroll == undefined) {
            resultListOptions.enableInfiniteScroll = true;
        }
        new coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"](resultListDiv.get(0), resultListOptions, this.bindings);
    };
    BoxBody.prototype.handleNuke = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0__(window).off('resize', this.resizeHandler);
    };
    BoxBody.ID = 'BoxBody';
    /**
     * The possible options for boxBody
     * @componentOptions
     */
    BoxBody.options = {
        /**
         * Specifies whether the component should automatically load more results when the user has reached the bottom of the result list.
         *
         * Default value is `true`.
         *
         * ```html
         * <div class="CoveoBoxBody" data-enable-infinite-scroll="true"></div>
         * ```
         */
        enableInfiniteScroll: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies the element inside which to insert the rendered result templates.
         *
         * Performing a new query clears the content of this element.
         *
         * You can change the container by specifying its selector (e.g.,
         * `data-result-container-selector='#someCssSelector'`).
         *
         * If you do not specify a value for this option, a `div` element will be dynamically created and appended to the result
         * list. This element will then be used as a result container.
         *
         * ```html
         * <div class="CoveoBoxBody" data-result-container="myElement"></div>
         * ```
         */
        resultContainer: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.resultsContainer,
        resultTemplate: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.resultTemplate,
        /**
         * Specifies the type of animation to display while waiting for a query to return.
         *
         * The possible values are:
         * - `fade`: Fades out the current list of results while the query is executing.
         * - `spinner`: Shows a spinning animation while the query is executing.
         * - `none`: Use no animation during queries.
         *
         * See also the [`waitAnimationContainer`]{@link BoxBody.options.waitAnimationContainer} option.
         *
         * Default value is `none`.
         *
         * ```html
         * <div class="CoveoBoxBody" data-wait-animation="none"></div>
         * ```
         */
        waitAnimation: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.waitAnimation,
        /**
         * Specifies the element inside which to display the [`waitAnimation`]{@link BoxBody.options.waitAnimation}.
         *
         * You can change this by specifying a CSS selector (e.g.,
         * `data-wait-animation-container-selector='#someCssSelector'`).
         *
         * Default value is the value of the [`resultContainer`]{@link BoxBody.options.resultContainer} option.
         *
         * ```html
         * <div class="CoveoBoxBody" data-wait-animation-container="myElement"></div>
         * ```
         */
        waitAnimationContainer: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.waitAnimationContainer,
        /**
         * If the [`enableInfiniteScroll`]{@link BoxBody.options.enableInfiniteScroll} option is `true`, specifies the
         * number of additional results to fetch when the user scrolls down to the bottom of the
         * [`infiniteScrollContainer`]{@link BoxBody.options.infiniteScrollContainer}.
         *
         * Default value is `10`. Minimum value is `1`.
         *
         * ```html
         * <div class="CoveoBoxBody" data-infinite-scroll-page-size="10"></div>
         * ```
         */
        infiniteScrollPageSize: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.infiniteScrollPageSize,
        /**
         * When the [`enableInfiniteScroll`]{@link BoxBody.options.enableInfiniteScroll} option is `true`, specifies the
         * element that triggers fetching additional results when the end user scrolls down to its bottom.
         *
         * You can change the container by specifying its selector (e.g.,
         * `data-infinite-scroll-container-selector='#someCssSelector'`).
         *
         * By default, the framework uses the first vertically scrollable parent element it finds, starting from the
         * `ResultList` element itself. A vertically scrollable element is an element whose CSS `overflow-y` attribute is
         * `scroll`.
         *
         * This implies that if the framework cannot find a scrollable parent, it uses the `window` itself as a scrollable
         * container.
         *
         * This heuristic is not perfect, for technical reasons. There are always some corner case CSS combination which the
         * framework will not be able to correctly detect as 'scrollable'.
         *
         * It is highly recommended that you manually set this option if you wish something else than the `window` to be the
         * scrollable element.
         *
         * ```html
         * <div class="CoveoBoxBody" data-infinite-scroll-container="myElement"></div>
         * ```
         */
        infiniteScrollContainer: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.infiniteScrollContainer,
        /**
         * When the [`enableInfiniteScroll`]{@link BoxBody.options.enableInfiniteScroll} option is `true`, specifies
         * whether to display the [`waitingAnimation`]{@link BoxBody.options.waitAnimation} while fetching additional
         * results.
         *
         * Default value is `true`.
         *
         * ```html
         * <div class="CoveoBoxBody" data-enable-infinite-scroll-waiting-animation="true"></div>
         * ```
         */
        enableInfiniteScrollWaitingAnimation: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.enableInfiniteScrollWaitingAnimation,
        mobileScrollContainer: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.mobileScrollContainer,
        /**
         * Specifies whether the `ResultList` should scan its result templates to discover which fields it must request to
         * be able to render all results.
         *
         * Setting this option to `true` ensures that the Coveo Search API does not return fields that are unnecessary for
         * the UI to function.
         *
         * Default value is `false`, which means that for each result, the Coveo Search API returns all available fields
         * (unless you specify a list of values in the [`fieldsToInclude`]{@link BoxBody.options.fieldsToInclude} option,
         * in which case the Coveo Search API only returns those fields, if they are available).
         *
         * **Note:**
         * > Many interfaces created with the JavaScript Search Interface Editor explicitly set this option to `true`.
         *
         * ```html
         * <div class="CoveoBoxBody" data-auto-select-fields-to-include="true"></div>
         * ```
         */
        autoSelectFieldsToInclude: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.autoSelectFieldsToInclude,
        /**
         * Specifies a list of fields to include in the query results.
         *
         * If you set the [`autoSelectFieldsToInclude`]{@link BoxBody.options.autoSelectFieldsToInclude} option to
         * `true`, the Coveo Search API returns the fields you specify for this option (if those fields are available) in
         * addition to the fields which the `ResultList` automatically requests.
         *
         * Otherwise, the Coveo Search API only returns the fields you specify for this option (if those fields are
         * available), unless you leave this option undefined, in which case the Coveo Search API returns all available
         * fields.
         *
         * ```html
         * <div class="CoveoBoxBody" data-fields-to-include="@myFirstField,@mySecondField,@myNthField"></div>
         * ```
         */
        fieldsToInclude: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].options.fieldsToInclude,
    };
    return BoxBody;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

// The options are extended here to ensure TypeDoc builds the documentation properly.
BoxBody.options = _.extend({}, BoxBody.options);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(BoxBody);


/***/ }),
/* 86 */,
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxExpandLink; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _SalesforceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
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
 * The _BoxExpandLink_ component takes care of creating a clickable link that expands to a full search interface page.
 *
 * It also takes care of sending the current state of the Box component to the full search interface so that you get the same (or a similar) result set when the full search page loads.
 *
 * ```html
 * <a class="CoveoBoxExpandLink" target="_blank"></a>
 * ```
 */
var BoxExpandLink = /** @class */ (function (_super) {
    __extends(BoxExpandLink, _super);
    function BoxExpandLink(element, options, bindings) {
        var _this = _super.call(this, element, BoxExpandLink.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, BoxExpandLink, options);
        if (coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNonEmptyString(_this.options.uri)) {
            _this.bindAnalyticsEvent();
            _this.setBaseHref();
            _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryEvents"].doneBuildingQuery, function (args) {
                _this.setNewHref(args);
            });
            if (_utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_2__[/* SalesforceUtilities */ "c"].isInSalesforceConsole()) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).click(function (e) {
                    e.preventDefault();
                    _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_2__[/* SalesforceUtilities */ "c"].focusOrOpenTab(_this.currentHref, _this.options.title, _this.options.toPrimaryTab);
                });
            }
            _this.appendIcon();
        }
        else {
            _this.logger.warn('Cannot initialized Box Expand Link : uri is undefined ');
            _this.logger.warn('Inside salesforce ? Configure the search page inside the package');
        }
        return _this;
    }
    BoxExpandLink.getMarkup = function () {
        return jquery__WEBPACK_IMPORTED_MODULE_0__('<a class="CoveoBoxExpandLink" target="_blank"></a>');
    };
    BoxExpandLink.prototype.appendIcon = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append('<span class="' + this.options.icon + '"></span><span>' + this.options.text + '</span>');
    };
    BoxExpandLink.prototype.getHd = function () {
        var hd = '';
        if (this.options.hd && !this.bindings.isWaitingForRecord) {
            var box = this.bindings.container;
            if (box.options.record) {
                hd = _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_2__[/* SalesforceUtilities */ "c"].expandStringUsingRecord(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Utils"].decodeHTMLEntities(this.options.hd), box.options.record);
            }
        }
        return hd;
    };
    BoxExpandLink.prototype.getHq = function (q, args) {
        var hq = '';
        if (!this.bindings.isWaitingForRecord) {
            if (Coveo.Utils.isNonEmptyString(q)) {
                hq = args.queryBuilder.computeCompleteExpressionPartsExcept(q).withoutConstant;
            }
            else {
                hq = args.queryBuilder.computeCompleteExpressionParts().withoutConstant;
            }
        }
        return hq;
    };
    BoxExpandLink.prototype.setBaseHref = function () {
        var href = this.buildHrefFromArguments(this.options.uri, { t: this.getTargetTab(), hd: this.getHd() });
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).attr('href', href);
        this.baseHref = this.options.uri;
        if (!this.bindings.isWaitingForRecord && Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_3__[/* getSalesforceContext */ "a"])().record.id.substr(0, 3) == '500') {
            var indexOfQuestionMark = this.baseHref.indexOf('?');
            var indexOfHash = this.baseHref.indexOf('#');
            if (this.baseHref.indexOf('?caseId=') == -1) {
                if (indexOfQuestionMark >= 0) {
                    this.baseHref = this.baseHref.replace('?', '?caseId=' + encodeURI(Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_3__[/* getSalesforceContext */ "a"])().record.id) + '&');
                }
                else if (indexOfHash >= 0) {
                    this.baseHref = this.baseHref.replace('#', '?caseId=' + encodeURI(Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_3__[/* getSalesforceContext */ "a"])().record.id) + '#');
                }
                else {
                    this.baseHref += '?caseId=' + encodeURI(Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_3__[/* getSalesforceContext */ "a"])().record.id);
                }
            }
        }
        this.currentHref = href;
    };
    BoxExpandLink.prototype.setNewHref = function (args) {
        var q = this.bindings.queryStateModel.get(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryStateModel"].attributesEnum.q);
        var href = this.buildHrefFromArguments(this.baseHref, {
            q: q,
            hq: this.getHq(q, args),
            t: this.getTargetTab(),
            hd: this.getHd(),
        });
        this.currentHref = href;
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).attr('href', href);
    };
    BoxExpandLink.prototype.extractBaseHrefFromBaseUri = function (baseHref, hashArguments) {
        var keysFromBase = [], valuesFromBase = [], baseSplit = baseHref.split('#');
        if (baseSplit[1] != undefined) {
            var baseHashSplit = baseSplit[1].split('&');
            _.each(baseHashSplit, function (onePair) {
                var pairSplit = onePair.split('=');
                keysFromBase.push(pairSplit[0]);
                valuesFromBase.push(pairSplit[1]);
            });
        }
        var toMerge = _.object(keysFromBase, valuesFromBase);
        var merged = _.extend({}, toMerge, hashArguments);
        return {
            base: baseSplit[0],
            hashArguments: merged,
        };
    };
    BoxExpandLink.prototype.buildHrefFromArguments = function (baseHref, hashArguments) {
        var extracted = this.extractBaseHrefFromBaseUri(baseHref, hashArguments);
        return [
            extracted.base,
            _.chain(extracted.hashArguments)
                .map(function (v, k) {
                if (v == undefined || v == '' || v == 'undefined') {
                    return undefined;
                }
                else {
                    return [k, encodeURIComponent(v)].join('=');
                }
            })
                .compact()
                .value()
                .join('&'),
        ]
            .join('#')
            .replace(/#$/, '');
    };
    BoxExpandLink.prototype.bindAnalyticsEvent = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).click(function () {
            _this.bindings.usageAnalytics.logCustomEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["analyticsActionCauseList"].expandToFullUI, {}, _this.element);
            return true;
        });
    };
    BoxExpandLink.prototype.getTargetTab = function () {
        if (this.options.targetTab) {
            return this.options.targetTab;
        }
        return this.queryStateModel.get(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryStateModel"].attributesEnum.t) || '';
    };
    BoxExpandLink.ID = 'BoxExpandLink';
    /**
     * The possible options for BoxExpandLink
     * @componentOptions
     */
    BoxExpandLink.options = {
        /**
         * Specifies the URI of the full search page to load when the user expands the `Box`.
         *
         * Most of the time, you do not have to specify a value manually for this option. The Box Visualforce Component already takes care of setting this option correctly.
         *
         * ```html
         * <div data-uri='https://mysalesforce.na15.visual.force.com/apex/CoveoSearch'></div>
         * ```
         */
        uri: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the title to display in the tab or sub tab that opens inside the Salesforce console when the user clicks the component to expand the `Box`.
         *
         * Default value is the localized string for `Coveo Search`.
         *
         * ```html
         * <div data-title='Search Page'></div>
         * ```
         */
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildLocalizedStringOption({ defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('Coveo Search') }),
        /**
         * Specifies the description to display when the full search page loads with a context filter.
         *
         * Default value is the localized string for `Context`.
         *
         * ```html
         * <div data-hd='Context'></div>
         * ```
         */
        hd: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildLocalizedStringOption({ defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('Context') }),
        /**
         * Specifies the `id` of the `Tab` component to load in the full search page when the user expands the box.
         *
         * Default value is `undefined`, and the component uses the current `Tab` component as its `targetTab` when the user expands the box to a full search page.
         *
         * ```html
         * <div data-target-tab='SomeTabId'></div>
         * ```
         */
        targetTab: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the CSS class of the icon to display on the expand button.
         *
         * Default value is `coveo-icon coveo-sprites-box-icon_external`.
         *
         * ```html
         * <div data-icon='custom-icon'></div>
         * ```
         */
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildIconOption({ defaultValue: 'coveo-icon coveo-sprites-box-icon_external' }),
        /**
         * Specifies the text content to add inside the icon HTML element.
         *
         * Default value is the localized string for `GoToFullSearch`.
         *
         * ```html
         * <div data-text='Go To Full Search'></div>
         * ```
         */
        text: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildLocalizedStringOption({ defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('GoToFullSearch') }),
        /**
         * Specifies whether to open the full search page as a primary or as a sub tab inside the Salesforce console.
         *
         * Default value is `true`.
         *
         * Setting this option to `false` makes the full search page open as a sub tab inside the Salesforce console.
         *
         * ```html
         * <div data-to-primary-tab='false'></div>
         * ```
         */
        toPrimaryTab: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return BoxExpandLink;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(BoxExpandLink);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxEditLink; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
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
 * The _BoxEditLink_ component provides a clickable button that expands the current interface to another page that contains the Interface Editor.
 *
 * ```html
 * <a class='CoveoBoxEditLink'></a>
 * ```
 */
var BoxEditLink = /** @class */ (function (_super) {
    __extends(BoxEditLink, _super);
    function BoxEditLink(element, options, bindings) {
        var _this = _super.call(this, element, BoxEditLink.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, BoxEditLink, options);
        if (bindings.isWaitingForRecord) {
            _this.logger.info('Disabling component : No record found to expand query', _this);
            return _this;
        }
        if (coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNonEmptyString(_this.options.uri)) {
            _this.bindAnalyticsEvent();
            _this.setBaseHref();
            _this.appendIcon();
        }
        else {
            _this.logger.warn('No url set for the edition. Inside salesforce ? Current user probably does not have the modifyAllData permission needed to edit the page');
            jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).remove();
        }
        return _this;
    }
    BoxEditLink.getMarkup = function () {
        return jquery__WEBPACK_IMPORTED_MODULE_0__('<a class="CoveoBoxEditLink"></a>');
    };
    BoxEditLink.prototype.setBaseHref = function () {
        if (coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Utils"].isNonEmptyString(this.options.uri)) {
            var box = this.bindings.container;
            var queryString = _.chain(this.options.queryStringParams)
                .map(function (value, key) {
                if (value == '' || value == null) {
                    return null;
                }
                return [encodeURIComponent(key), encodeURIComponent(value)].join('=');
            })
                .compact()
                .value()
                .join('&');
            var href = [this.options.uri, queryString].join('?');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).attr('href', href);
        }
    };
    BoxEditLink.prototype.bindAnalyticsEvent = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).click(function () {
            _this.bindings.usageAnalytics.logCustomEvent({ name: 'boxEdit', type: 'box' }, {}, _this.element);
        });
    };
    BoxEditLink.prototype.appendIcon = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append('<span class="coveo-icon ' + this.options.icon + '"></span><span>' + this.options.text + '</span>');
    };
    BoxEditLink.ID = 'BoxEditLink';
    /**
     * The possible options for BoxEditLink
     * @componentOptions
     */
    BoxEditLink.options = {
        /**
         * Specifies the URI of the page that hosts the Interface Editor.
         *
         * This option is normally already set for you when you include the Box Visualforce Component.
         *
         * ```html
         * <a data-uri='/apex/InterfaceEditor'></a>
         * ```
         */
        uri: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the icon that the component should use.
         *
         * Default value is `coveo-sprites-box-settings`.
         *
         * ```html
         * <a data-icon='coveo-sprites-box-settings'></a>
         * ```
         */
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildIconOption({ defaultValue: 'coveo-sprites-box-settings_gray' }),
        /**
         * Specifies the text to display alongside the icon.
         *
         * Default value is the localized string for `GoToEdition`.
         *
         * ```html
         * <a data-text='My text'></a>
         * ```
         */
        text: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildLocalizedStringOption({ defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('GoToEdition') }),
    };
    return BoxEditLink;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(BoxEditLink);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
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


var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container(element, options, analyticsOptions, originalOptionsObject) {
        var _this = _super.call(this, element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, Container, options), analyticsOptions, window) || this;
        _this.element = element;
        _this.originalOptionsObject = originalOptionsObject;
        return _this;
    }
    Container.prototype.addGlobalContext = function (key, context) {
        if (this.context[key] != undefined) {
            this.logger.info('Context for ' + key + ' is already set. Replacing', context);
        }
        this.context[key] = context;
    };
    Container.prototype.getGlobalContext = function (key) {
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Assert"].isNotUndefined(this.context[key]);
        return this.context[key];
    };
    Container.prototype.injectContainerHeader = function (injection) {
        if (injection.headerKlass) {
            var markup = injection.headerKlass.getMarkup();
            markup.addClass('coveo-container-header');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(markup);
        }
    };
    Container.prototype.injectContainerBody = function (injection) {
        if (injection.bodyKlass) {
            var markup = injection.bodyKlass.getMarkup();
            markup.addClass('coveo-container-body');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(markup);
        }
    };
    Container.prototype.injectContainerFooter = function (injection) {
        if (injection.footerKlass) {
            var markup = injection.footerKlass.getMarkup();
            markup.addClass('coveo-container-footer');
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(markup);
        }
    };
    Container.prototype.injectContainerQuery = function (injection) {
        if (injection.queryKlass) {
            var markup = injection.queryKlass.getMarkup();
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(markup);
        }
    };
    Container.prototype.injectContainerContext = function (injection) {
        if (injection.contextKlass) {
            var markup = injection.contextKlass.getMarkup();
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(markup);
        }
    };
    Container.prototype.injectContainerSidePanel = function (injection) {
        if (injection.sidePanelKlass) {
            var markup = injection.sidePanelKlass.getMarkup();
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(markup);
        }
    };
    Container.prototype.getBindings = function () {
        return _.extend(_super.prototype.getBindings.call(this), {
            container: this,
        });
    };
    Container.options = _.extend({}, coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["SearchInterface"].options);
    return Container;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["SearchInterface"]));



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxQueryGeneric; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _SalesforceContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _BoxStateModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
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




var BoxQueryGeneric = /** @class */ (function (_super) {
    __extends(BoxQueryGeneric, _super);
    function BoxQueryGeneric(element, options, bindings) {
        var _this = _super.call(this, element, BoxQueryGeneric.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.isDisabledFromContextualQuery = false;
        if (bindings.isWaitingForRecord) {
            _this.logger.info('Disabling component : No record found to expand query', _this);
            return _this;
        }
        if ($(_this.element).is('script')) {
            _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, BoxQueryGeneric, options);
            try {
                _this.content = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Utils"].decodeHTMLEntities($(_this.element).text());
            }
            catch (e) {
                return _this;
            }
            if (!_.isUndefined(_this.content) && _this.content != '') {
                _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
            }
        }
        if (_this.options.disableOnNonContextualSearch) {
            $(_this.root).on(_this.bindings.boxStateModel.getSimpleEvent(_BoxStateModel__WEBPACK_IMPORTED_MODULE_3__[/* BoxStateModel */ "a"].attributesEnum.enableNonContextualSearch), function (e, args) {
                _this.isDisabledFromContextualQuery = args.value;
            });
        }
        return _this;
    }
    BoxQueryGeneric.getMarkup = function () {
        return $("<script class='CoveoBoxQueryGeneric' type='text/x-query-generic'></script>");
    };
    BoxQueryGeneric.prototype.handleBuildingQuery = function (args) {
        if (!this.isDisabledFromContextualQuery) {
            var query = _utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_1__[/* SalesforceUtilities */ "c"].expandStringUsingRecord(this.content, Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_2__[/* getSalesforceContext */ "a"])().record);
            if (!coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Utils"].isEmptyString(query)) {
                args.queryBuilder.advancedExpression.add(query);
            }
        }
    };
    BoxQueryGeneric.ID = 'BoxQueryGeneric';
    BoxQueryGeneric.options = {
        disableOnNonContextualSearch: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return BoxQueryGeneric;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(BoxQueryGeneric);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxQuerySome; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExtensionSome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _ExtensionRefinedQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99);
/* harmony import */ var _BoxStateModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _SalesforceContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
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
 * The _BoxQuerySome_ component is used to automatically include Salesforce fields to the query of an Insight Panel.
 * By default, the fields are included in the advanced query (see [Advanced Expression](https://developers.coveo.com/x/P4CpAQ#ProfilingaQuery-AdvancedExpression)).
 *
 * This component is included in the default Insight Panel to include the case subject.
 *
 * ```html
 * <div class="CoveoBoxQuerySome"></div>
 * ```
 */
var BoxQuerySome = /** @class */ (function (_super) {
    __extends(BoxQuerySome, _super);
    function BoxQuerySome(element, options, bindings) {
        var _this = _super.call(this, element, BoxQuerySome.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.isDisabledFromContextualQuery = false;
        if (bindings.isWaitingForRecord) {
            _this.logger.info('Disabling component : No record found to expand query', _this);
            return _this;
        }
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, BoxQuerySome, options);
        if (!_.isUndefined(_this.options.include) && !_.isEmpty(_this.options.include)) {
            _this.fromIncludeOptionToKeywords();
        }
        if (!_.isUndefined(_this.keywordsForQuery) && !_.isEmpty(_this.keywordsForQuery)) {
            var elementForExtension = jquery__WEBPACK_IMPORTED_MODULE_0__('<div />');
            if (_this.options.useSomeQRE) {
                _this.extensionQuery = new _ExtensionSome__WEBPACK_IMPORTED_MODULE_2__[/* ExtensionSome */ "a"](elementForExtension.get(0), _.extend({}, { keywords: _this.keywordsForQuery }, _this.options), bindings);
            }
            else {
                _this.extensionQuery = new _ExtensionRefinedQuery__WEBPACK_IMPORTED_MODULE_3__[/* ExtensionRefinedQuery */ "a"](elementForExtension.get(0), { include: _this.options.include }, _this.bindings);
            }
        }
        if (!_this.options.includeCurrentRecord) {
            _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryEvents"].buildingQuery, function (args) {
                if (!_this.isDisabledFromContextualQuery) {
                    args.queryBuilder.advancedExpression.addFieldNotEqualExpression('@sfid', [Object(_SalesforceContext__WEBPACK_IMPORTED_MODULE_5__[/* getSalesforceContext */ "a"])().record.id]);
                }
            });
        }
        if (_this.options.disableOnNonContextualSearch) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(_this.root).on(_this.bindings.boxStateModel.getSimpleEvent(_BoxStateModel__WEBPACK_IMPORTED_MODULE_4__[/* BoxStateModel */ "a"].attributesEnum.enableNonContextualSearch), function (e, args) {
                _this.isDisabledFromContextualQuery = args.value;
                if (_this.extensionQuery) {
                    if (args.value) {
                        _this.extensionQuery.disable();
                    }
                    else if (!_this.disabled) {
                        _this.extensionQuery.enable();
                    }
                }
            });
        }
        return _this;
    }
    /**
     * Enables the component.
     *
     * ```js
     * $('.CoveoBoxQuerySome').coveo('enable');
     * ```
     */
    BoxQuerySome.prototype.enable = function () {
        if (!this.isDisabledFromContextualQuery) {
            if (this.extensionQuery) {
                this.extensionQuery.enable();
            }
        }
        _super.prototype.enable.call(this);
    };
    /**
     * Disables the component.
     *
     * ```js
     * $('.CoveoBoxQuerySome').coveo('disable');
     * ```
     */
    BoxQuerySome.prototype.disable = function () {
        if (this.extensionQuery) {
            this.extensionQuery.disable();
        }
        _super.prototype.disable.call(this);
    };
    BoxQuerySome.prototype.fromIncludeOptionToKeywords = function () {
        this.keywordsForQuery = _ExtensionSome__WEBPACK_IMPORTED_MODULE_2__[/* ExtensionSome */ "a"].fromStringArrayToStringKeywords(this.options.include, this.bindings);
    };
    BoxQuerySome.ID = 'BoxQuerySome';
    /*
     * This doc is static because doing it the other way prevents the components from showing up in the documentation, or breaks TypeDoc.
     * This is most likely due to the _.omit
     */
    /**
     * @componentOptions
     *
     * <br />
     * <br />
     * ### include
     *
     * ---
     *
     * include: _string_
     *
     * ---
     *
     * A comma separated list of fields to automatically add to the query.
     *
     * Default value is `Subject`.
     *
     * ```html
     * <div data-include="Subject"></div>
     * ```
     * <br />
     * ### includeCurrentRecords
     *
     * ---
     *
     * includeCurrentRecords: _boolean_
     *
     * ---
     *
     * Specifies whether to include the currently viewed case in the search results.
     *
     * Default value is `false`.
     *
     * ```html
     * <div data-include-current-record="false"></div>
     * ```
     * <br />
     * ### disableOnNonContextualSearch
     *
     * ---
     *
     * disableOnNonContextualSearch: _boolean_
     *
     * ---
     *
     * Specifies whether to disable the added query from the `include` option when a user decides to perform a non-contextual search.
     *
     * Default value is `true`.
     *
     * ```html
     * <div data-disable-on-non-contextual-search="true"></div>
     * ```
     * <br />
     * ### useSomeQRE
     *
     * ---
     *
     * useSomeQRE: _boolean_
     *
     * ---
     *
     * Specifies whether to generate the query using the `$some` query extension (see [Standard Query Extensions - $some](https://developers.coveo.com/x/ZQMv#StandardQueryExtensions-$some)).
     *
     * Setting this option to `false` changes the query from an `aq` to a long query (see [Long Expression](https://developers.coveo.com/x/P4CpAQ#ProfilingaQuery-LongExpression)), enabling Coveo Machine Learning Intelligent Term Detection (ITD).
     *
     * Default value is `true`.
     *
     * ```html
     * <div data-use-some-q-r-e="true"></div>
     * ```
     */
    BoxQuerySome.options = _.extend({}, {
        include: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildListOption(),
        includeCurrentRecord: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        disableOnNonContextualSearch: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        useSomeQRE: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    }, _.omit(_ExtensionSome__WEBPACK_IMPORTED_MODULE_2__[/* ExtensionSome */ "a"].options, ['keywords', 'maximum']));
    return BoxQuerySome;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(BoxQuerySome);


/***/ }),
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxQuerySummary; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BoxHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _BoxStateModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
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
 * The _BoxQuerySummary_ component inherits from the `QuerySummary` component (see [Coveo QuerySummary Component](https://coveo.github.io/search-ui/components/querysummary.html)).
 *
 * Its only added functionality is to display the range of currently displayed results when the result list is using infinite scrolling.
 *
 * ```html
 * <div class='CoveoBoxQuerySummary'></div>
 * ```
 */
var BoxQuerySummary = /** @class */ (function (_super) {
    __extends(BoxQuerySummary, _super);
    function BoxQuerySummary(element, options, bindings) {
        var _this = _super.call(this, element, BoxQuerySummary.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, BoxQuerySummary, options);
        var renderThrottle = _.throttle(function () { return _this.render(); }, 500, { leading: false, trailing: true });
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["InitializationEvents"].afterComponentsInitialization, function () {
            var resultListElem = jquery__WEBPACK_IMPORTED_MODULE_0__(_this.root).find(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"].computeSelectorForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultList"].ID));
            _this.resultList = Coveo.get(resultListElem.get(0));
            if (_this.resultList.options.enableInfiniteScroll && _this.resultList.options.infiniteScrollContainer) {
                jquery__WEBPACK_IMPORTED_MODULE_0__(_this.resultList.options.infiniteScrollContainer).scroll(function () {
                    renderThrottle();
                });
            }
        });
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ResultListEvents"].newResultsDisplayed, function () {
            renderThrottle();
        });
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryEvents"].querySuccess, function (args) {
            _this.totalNumberOfResults = args.results.totalCount;
            _this.render();
        });
        return _this;
    }
    BoxQuerySummary.prototype.render = function () {
        if (this.totalNumberOfResults > 0) {
            if (this.bindings.queryStateModel.get(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryStateModel"].attributesEnum.q) == '') {
                this.element.innerHTML = '';
                jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).addClass('coveo-hidden');
            }
            else {
                this.renderWithResults();
                jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).removeClass('coveo-hidden');
            }
        }
        else {
            this.renderNoResults();
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).removeClass('coveo-hidden');
        }
    };
    BoxQuerySummary.prototype.renderWithResults = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).removeClass('coveo-displaying-no-results');
        var allResults = jquery__WEBPACK_IMPORTED_MODULE_0__(this.resultList.options.resultsContainer).find('.CoveoResult');
        var visibleResults = _.filter(allResults, function (resElement) {
            return (jquery__WEBPACK_IMPORTED_MODULE_0__(resElement).position().top + jquery__WEBPACK_IMPORTED_MODULE_0__(resElement).height() * 0.75 > 0 &&
                jquery__WEBPACK_IMPORTED_MODULE_0__(resElement).position().top + jquery__WEBPACK_IMPORTED_MODULE_0__(resElement).height() / 3 < jquery__WEBPACK_IMPORTED_MODULE_0__(_this.resultList.options.infiniteScrollContainer).height());
        });
        var first, last;
        if (visibleResults && visibleResults[0]) {
            first = _.indexOf(allResults, visibleResults[0]) + 1;
            last = _.indexOf(allResults, visibleResults[visibleResults.length - 1]) + 1;
        }
        if (first != undefined && last != undefined && this.totalNumberOfResults != undefined) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).html(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('ShowingResultsOf', first, last, this.totalNumberOfResults, this.totalNumberOfResults > 1));
        }
    };
    BoxQuerySummary.prototype.renderNoResults = function () {
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).addClass('coveo-displaying-no-results');
        var queryEscaped = jquery__WEBPACK_IMPORTED_MODULE_0__('<span></span>').text(this.queryStateModel.get(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["QueryStateModel"].attributesEnum.q)).text();
        var strToDisplay = jquery__WEBPACK_IMPORTED_MODULE_0__('<div class="coveo-no-results-string"></div>');
        if (queryEscaped != '') {
            strToDisplay = strToDisplay.html(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('noResultFor', "<span class='coveo-highlight'>" + queryEscaped + '</span>'));
        }
        else {
            strToDisplay = strToDisplay.html(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('No results'));
        }
        strToDisplay.append(this.getSearchTips());
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).empty();
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(strToDisplay);
    };
    BoxQuerySummary.prototype.getSearchTips = function () {
        var searchTips = jquery__WEBPACK_IMPORTED_MODULE_0__('<ul></ul>');
        jquery__WEBPACK_IMPORTED_MODULE_0__('<li></li>').text(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('CheckSpelling')).appendTo(searchTips);
        jquery__WEBPACK_IMPORTED_MODULE_0__('<li></li>').text(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('TryUsingFewerKeywords')).appendTo(searchTips);
        if (this.queryStateModel.atLeastOneFacetIsActive()) {
            jquery__WEBPACK_IMPORTED_MODULE_0__('<li></li>').text(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('SelectFewerFilters')).appendTo(searchTips);
        }
        var element = jquery__WEBPACK_IMPORTED_MODULE_0__(this.root).find(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"].computeSelectorForType(_BoxHeader__WEBPACK_IMPORTED_MODULE_2__[/* BoxHeader */ "a"].ID));
        var boxHeader = Coveo.get(element.get(0));
        if (boxHeader) {
            if (boxHeader.options.allowNonContextualSearch &&
                !this.bindings.boxStateModel.get(_BoxStateModel__WEBPACK_IMPORTED_MODULE_3__[/* BoxStateModel */ "a"].attributesEnum.enableNonContextualSearch)) {
                jquery__WEBPACK_IMPORTED_MODULE_0__('<li></li>').text('SelectNonContextualSearch'.toLocaleString()).appendTo(searchTips);
            }
        }
        return searchTips;
    };
    BoxQuerySummary.ID = 'BoxQuerySummary';
    BoxQuerySummary.options = {};
    return BoxQuerySummary;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(BoxQuerySummary);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxFieldTable; });
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
 * The _BoxFieldTable_ component is meant to be included inside a [ResultList Component](https://coveo.github.io/search-ui/components/resultlist.html).
 *
 * ```html
 * <div class='CoveoBoxFieldTable'></div>
 * ```
 */
var BoxFieldTable = /** @class */ (function (_super) {
    __extends(BoxFieldTable, _super);
    function BoxFieldTable(element, options, bindings, result) {
        var _this = _super.call(this, element, options, bindings, result) || this;
        _this.element = element;
        _this.options = options;
        $(_this.element).addClass(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassNameForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["FieldTable"].ID));
        return _this;
    }
    BoxFieldTable.prototype.isTogglable = function () {
        return this.options.allowMinimization;
    };
    BoxFieldTable.ID = 'BoxFieldTable';
    return BoxFieldTable;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["FieldTable"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(BoxFieldTable);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionQRF; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExtensionBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
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


var ExtensionQRF = /** @class */ (function (_super) {
    __extends(ExtensionQRF, _super);
    function ExtensionQRF(element, options, bindings) {
        var _this = _super.call(this, element, ExtensionQRF.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ExtensionQRF, options);
        if (!_.isUndefined(_this.options.expression)) {
            _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        }
        return _this;
    }
    ExtensionQRF.prototype.handleBuildingQuery = function (args) {
        var expression = new _ExtensionBuilder__WEBPACK_IMPORTED_MODULE_1__[/* ExtensionBuilder */ "b"]('qrf')
            .withParam('expression', this.options.expression)
            .withParam('normalizeWeight', this.options.normalizeWeight)
            .build();
        args.queryBuilder.advancedExpression.add(expression);
    };
    ExtensionQRF.ID = 'ExtensionQRF';
    ExtensionQRF.options = {
        expression: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        normalizeWeight: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return ExtensionQRF;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ExtensionQRF);


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionQF; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExtensionBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
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


var ExtensionQF = /** @class */ (function (_super) {
    __extends(ExtensionQF, _super);
    function ExtensionQF(element, options, bindings) {
        var _this = _super.call(this, element, ExtensionQF.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ExtensionQF, options);
        if (!_.isUndefined(_this.options.func && !_.isUndefined(_this.options.fieldName))) {
            _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        }
        return _this;
    }
    ExtensionQF.prototype.handleBuildingQuery = function (args) {
        var expression = new _ExtensionBuilder__WEBPACK_IMPORTED_MODULE_1__[/* ExtensionBuilder */ "b"]('qf')
            .withParam('function', this.options.func)
            .withParam('fieldName', this.options.fieldName)
            .build();
        args.queryBuilder.advancedExpression.add(expression);
    };
    ExtensionQF.ID = 'ExtensionQF';
    ExtensionQF.options = {
        func: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        fieldName: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
    };
    return ExtensionQF;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ExtensionQF);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtensionRefinedQuery; });
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

var ExtensionRefinedQuery = /** @class */ (function (_super) {
    __extends(ExtensionRefinedQuery, _super);
    function ExtensionRefinedQuery(element, options, bindings) {
        var _this = _super.call(this, element, ExtensionRefinedQuery.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.enabled = true;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ExtensionRefinedQuery, options);
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        return _this;
    }
    ExtensionRefinedQuery.prototype.handleBuildingQuery = function (args) {
        var _this = this;
        if (this.enabled) {
            var expression = _.chain(this.options.include)
                .map(function (include) {
                return _this.bindings.container.options.record[include.toLowerCase()];
            })
                .compact()
                .value()
                .join(' ');
            args.queryBuilder.longQueryExpression.add(expression);
        }
    };
    ExtensionRefinedQuery.prototype.disable = function () {
        this.enabled = false;
        _super.prototype.disable.call(this);
    };
    ExtensionRefinedQuery.prototype.enable = function () {
        this.enabled = true;
        _super.prototype.enable.call(this);
    };
    ExtensionRefinedQuery.ID = 'ExtensionRefinedQuery';
    ExtensionRefinedQuery.options = {
        include: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildListOption(),
    };
    return ExtensionRefinedQuery;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ExtensionRefinedQuery);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxResultAction; });
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
 * The _BoxResultAction_ component displays a small actionable button inside each result. When clicked, this button displays other sub components in a menu, such as the `BoxQuickview` Component.
 *
 * **Note:**
 * > For more information on how to implement your own custom actions inside this component, see [Creating Custom Actions for an Insight Panel or a Custom Box](https://developers.coveo.com/x/mAYvAg).
 *
 * This component is intended to be included inside a `BoxBody` [ResultList Component](https://coveo.github.io/search-ui/components/resultlist.html).
 *
 * ```html
 * <div class='CoveoBoxResultAction'>
 *   <!-- Include other components here, such as the BoxQuickView or BoxAttachToCase components -->
 * </div>
 * ```
 */
var BoxResultAction = /** @class */ (function (_super) {
    __extends(BoxResultAction, _super);
    function BoxResultAction(element, options, bindings, result) {
        var _this = _super.call(this, element, BoxResultAction.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, BoxResultAction, options);
        var dotsElement = $('<div></div>').addClass('coveo-box-result-action-icon').html('\u00B7\u00B7\u00B7').appendTo(_this.element);
        _this.menu = $('<div></div>').addClass('coveo-box-result-action-menu').appendTo(_this.element);
        _this.container = $('<div></div>').addClass('coveo-box-result-action-container').appendTo(_this.element);
        if (!_this.options.displayInline) {
            $(_this.element).addClass('coveo-displayed-in-menu');
            var closeTimeout_1;
            $(_this.element).mouseenter(function () {
                if (closeTimeout_1) {
                    clearTimeout(closeTimeout_1);
                }
                _this.menu.addClass('coveo-opened');
            });
            $(_this.element).mouseleave(function () {
                closeTimeout_1 = setTimeout(function () {
                    _this.menu.removeClass('coveo-opened');
                }, _this.options.menuDelay);
            });
        }
        else {
            $(_this.element).addClass('coveo-displayed-inline');
        }
        var replaceElementsOnce = _.once(function () {
            var toMove = [];
            _.each(_this.element.children, function (child) {
                if (_this.doesImplementIncludedInterface(child)) {
                    toMove.push(child);
                }
            });
            if (_.isEmpty(toMove)) {
                _this.logger.warn('BoxResultAction is empty or has no inner elements with which it can populate... removing the component', result, _this);
                $(_this.element).remove();
            }
            else {
                _.each(toMove, function (elem) {
                    var menuItem = $('<div></div>').addClass('coveo-box-result-action-menu-item').appendTo(_this.menu);
                    $(Coveo.get(elem)['getTitle'](_this.options.displayInline)).appendTo(menuItem);
                    $(elem).appendTo(_this.container);
                });
            }
        });
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultListEvents"].newResultsDisplayed, function () { return replaceElementsOnce(); });
        return _this;
    }
    BoxResultAction.getMarkup = function () {
        return $("<div class='CoveoBoxResultAction'></div>");
    };
    BoxResultAction.prototype.doesImplementIncludedInterface = function (elem) {
        var elemAsComponent = Coveo.get(elem);
        return elemAsComponent && elemAsComponent['getTitle'];
    };
    BoxResultAction.ID = 'BoxResultAction';
    /**
     * The available options for BoxResultAction
     * @componentOptions
     */
    BoxResultAction.options = {
        /**
         * Specifies the delay, in milliseconds, before the menu disappears when the user's mouse leaves the menu icon.
         *
         * Minimum value is `0`.
         *
         * Default value is `300`.
         *
         * ```html
         * <div class='CoveoBoxResultAction' data-menu-delay='300'></div>
         * ```
         */
        menuDelay: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({ defaultValue: 300, min: 0 }),
        /**
         * Specifies that components contained inside the `ResultAction` component should instead be displayed inline, and not inside a clickable menu.
         *
         * Setting this option to `true` also displays icons to identify the actions.
         *
         * Default value is `false`.
         *
         * ```html
         * <div class='CoveoBoxResultAction' data-display-inline='false'></div>
         * ```
         */
        displayInline: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
    };
    return BoxResultAction;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(BoxResultAction);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxPipelineContext; });
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
 * @deprecated The _BoxPipelineContext_ component is deprecated. Instead, use the [Coveo PipelineContext Component](https://coveo.github.io/search-ui/components/pipelinecontext.html).
 */
var BoxPipelineContext = /** @class */ (function (_super) {
    __extends(BoxPipelineContext, _super);
    function BoxPipelineContext(element, options, bindings) {
        var _this = _super.call(this, element, BoxPipelineContext.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        return _this;
    }
    BoxPipelineContext.getMarkup = function () {
        return $("<script class='CoveoBoxPipelineContext' type='text/x-context'>{}</script>");
    };
    BoxPipelineContext.ID = 'BoxPipelineContext';
    return BoxPipelineContext;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["PipelineContext"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(BoxPipelineContext);


/***/ }),
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxQuickview; });
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
 * The _BoxQuickview_ component inherits from the Quickview component, and thus provides all the same options(see [Coveo Component Quickview](https://coveo.github.io/search-ui/components/quickview.html)).
 *
 * ```html
 * <div class='CoveoBoxQuickView'></div>
 * ```
 */
var BoxQuickview = /** @class */ (function (_super) {
    __extends(BoxQuickview, _super);
    function BoxQuickview(element, options, bindings, result) {
        var _this = _super.call(this, element, options, bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.result = result;
        $(element).removeClass(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassNameForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Quickview"].ID));
        if (!coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryUtils"].hasHTMLVersion(result)) {
            _this.logger.warn('Result has no html version... removing Quickview', result, _this);
            $(_this.element).remove();
        }
        return _this;
    }
    BoxQuickview.getMarkup = function () {
        return $('<div class="CoveoBoxQuickview"></div>');
    };
    BoxQuickview.prototype.getTitle = function (displayedInline) {
        var _this = this;
        var menuDiv;
        if (displayedInline) {
            menuDiv = $('<div title="Quickview" class="coveo-box-quick-view-in-menu"><div class="coveo-icon coveo-sprites-quickview"></div></div>');
        }
        else {
            menuDiv = $('<div title="Quickview" class="coveo-box-quick-view-in-menu"><div class="coveo-caption">' + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('Quickview') + '</div></div>');
        }
        menuDiv.click(function () {
            _this.open();
        });
        return menuDiv.get(0);
    };
    BoxQuickview.ID = 'BoxQuickview';
    return BoxQuickview;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Quickview"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(BoxQuickview);


/***/ }),
/* 117 */,
/* 118 */,
/* 119 */
/***/ (function(module) {

module.exports = JSON.parse("{\"AttachedResultsTab\":{\"en\":\"Attached results\"},\"AttachedResultsTab_description\":{\"en\":\"This component displays all attached results\"},\"AttachedResultsTab_id\":{\"en\":\"Unique ID\"},\"AttachedResultsTab_caption\":{\"en\":\"Caption\"},\"AttachedResultsTab_icon\":{\"en\":\"Icon\"},\"AttachedResultsTab_expression\":{\"en\":\"Filter expression\"},\"AttachedResultsTab_endpoint\":{\"en\":\"Endpoint\"},\"AttachedResultsTab_sort\":{\"en\":\"Default sort\"},\"AttachedResultsTab_constant\":{\"en\":\"Add filter to constant query (cq)\"},\"AttachedResultsTab_pipeline\":{\"en\":\"Query pipeline\"},\"AttachedResultsTab_enableDuplicateFiltering\":{\"en\":\"Enable duplicate filtering\"},\"AttachedResultsTab_maximumAge\":{\"en\":\"Maximum age in milliseconds that cached query results can have in order to be used\"},\"BoxQuerySome\":{\"en\":\"Related items\"},\"BoxQuerySome_description\":{\"en\":\"This component extracts the most important keywords from the provided field in the current Salesforce record and adds them to the query.\"},\"BoxQuerySome_best\":{\"en\":\"Number of best keywords to include in the query\"},\"BoxQuerySome_best_description\":{\"en\":\"Specifies the number (absolute or percentage value) of best query keywords to include in the query. Less frequent keywords in the index are considered better than common keywords. \"},\"BoxQuerySome_match\":{\"en\":\"Number of keywords to match in documents\"},\"BoxQuerySome_match_description\":{\"en\":\"Specifies the number (absolute or percentage value) of query keywords that documents must contain. \"},\"BoxQuerySome_removeStopWords\":{\"en\":\"Remove stop words\"},\"BoxQuerySome_disableOnNonContextualSearch\":{\"en\":\"Disable on non contextual search\"},\"BoxQuerySome_includeCurrentRecord\":{\"en\":\"Include the current record in results\"},\"BoxQuerySome_include\":{\"en\":\"Include\"},\"BoxQuerySome_bindOnQuery\":{\"en\":\"Bind on query\"},\"BoxQuerySome_useSomeQRE\":{\"en\":\"Use the $some QRE for related items\"},\"BoxHeader\":{\"en\":\"Header\"},\"BoxHeader_enableQuerySyntax\":{\"en\":\"Enable query syntax\"},\"BoxHeader_includeSettings\":{\"en\":\"Include settings\"},\"BoxHeader_addSearchButton\":{\"en\":\"Add search button\"},\"BoxHeader_enableFieldAddon\":{\"en\":\"Enable field addon\"},\"BoxHeader_enableQueryExtensionAddon\":{\"en\":\"Enable query extension addon\"},\"BoxHeader_enableQuerySuggestAddon\":{\"en\":\"Enable Coveo Machine Learning query suggestions addon\"},\"BoxHeader_inline\":{\"en\":\"Show Omnibox results inline\"},\"BoxHeader_allowNonContextualSearch\":{\"en\":\"Allow non contextual search\"},\"BoxHeader_description\":{\"en\":\"Header of the box that acts as a container for other components\"},\"BoxHeader_includeSearchbox\":{\"en\":\"Include search box\"},\"BoxHeader_icon\":{\"en\":\"Icon\"},\"BoxHeader_title\":{\"en\":\"Title\"},\"BoxHeader_includeSubSection\":{\"en\":\"Include sub section\"},\"BoxHeader_openSubSectionByDefault\":{\"en\":\"Open sub section by default\"},\"BoxHeader_enableOmnibox\":{\"en\":\"Activate Omnibox\"},\"BoxHeader_enableOmnibox_description\":{\"en\":\"If true, the search box instantiates an Omnibox component. Otherwise, the search box instantiates a Querybox component. \"},\"BoxHeader_omniboxDelay\":{\"en\":\"Omnibox delay\"},\"BoxHeader_omniboxDelay_description\":{\"en\":\"Specifies the delay (in milliseconds) before the Omnibox triggers the event asking for components to provide suggestions based on the box content. \"},\"BoxHeader_omniboxTimeout\":{\"en\":\"Omnibox timeout\"},\"BoxHeader_omniboxTimeout_description\":{\"en\":\"Specifies the delay (in milliseconds) before the Omnibox cancels any deferred request that was pushed when providing suggestions for the Omnibox. The default value is 2000.\"},\"BoxHeader_omniboxChangeLimit\":{\"en\":\"Omnibox character change limit\"},\"BoxHeader_omniboxChangeLimit_description\":{\"en\":\"Specifies the maximum number of letter changes in the Omnibox before cancelling any deferred request that was pushed when providing suggestions for the Omnibox. The default value is 3.\"},\"BoxHeader_omniboxMinimumLetters\":{\"en\":\"Omnibox letters\"},\"BoxHeader_omniboxMinimumLetters_description\":{\"en\":\"Specifies the minimum number of letters that must be present in the Omnibox before it begins to request content to all components.\"},\"BoxHeader_autoFocus\":{\"en\":\"Auto focus\"},\"BoxHeader_autoFocus_description\":{\"en\":\"Specifies whether the Querybox gets the focus and is selected on initialization. \"},\"BoxHeader_disableQuerySyntax\":{\"en\":\"Disable query syntax\"},\"BoxHeader_disableQuerySyntax_description\":{\"en\":\"Specifies whether the Coveo Platform does not try to interpret special query syntax such as field references in the query entered through the query box. \"},\"BoxHeader_enableLowercaseOperators\":{\"en\":\"Enable lowercase operators\"},\"BoxHeader_enableLowercaseOperators_description\":{\"en\":\"Specifies whether to also interpret lowercase keywords (like: or, and) as operators. When false, only uppercase keywords (Or, AND) are recognized as operators. \"},\"BoxHeader_enablePartialMatch\":{\"en\":\"Enable partial match\"},\"BoxHeader_enablePartialMatch_description\":{\"en\":\"Specifies whether a query containing a large number of keywords is automatically converted to a partial match expression to only match documents containing a subset of the keywords. \"},\"BoxHeader_enableQuestionMarks\":{\"en\":\"Enable question marks\"},\"BoxHeader_enableQuestionMarks_description\":{\"en\":\"Specifies whether a question mark character (?) in a query is interpreted as a wildcard. \"},\"BoxHeader_enableSearchAsYouType\":{\"en\":\"Enable search-as-you-type\"},\"BoxHeader_enableSearchAsYouType_description\":{\"en\":\"Specifies whether a new query is automatically triggered whenever the user types in new text inside the query box. \"},\"BoxHeader_enableWildcards\":{\"en\":\"Enable wildcards\"},\"BoxHeader_enableWildcards_description\":{\"en\":\"Specifies whether the Coveo Platform expands keywords containing wildcard characters to the possible matching keywords to broaden the query. \"},\"BoxHeader_partialMatchKeywords\":{\"en\":\"Partial match keywords\"},\"BoxHeader_partialMatchKeywords_description\":{\"en\":\"When partial match is enabled, this option specifies the minimum number of keywords that must be present in the query for to activate partial match. \"},\"BoxHeader_partialMatchThreshold\":{\"en\":\"Partial match threshold\"},\"BoxHeader_partialMatchThreshold_description\":{\"en\":\"Specifies the minimum number of keywords that a document must contain to be included in search results.\"},\"BoxHeader_searchAsYouTypeDelay\":{\"en\":\"Search-as-you-type delay\"},\"BoxHeader_searchAsYouTypeDelay_description\":{\"en\":\"When search-as-you-type is enabled, specifies the delay in milliseconds before a new query is triggered when the user types in new text inside the query box. \"},\"BoxHeader_triggerQueryOnClear\":{\"en\":\"Trigger new query on clear\"},\"BoxHeader_placeholder\":{\"en\":\"Placeholder text\"},\"BoxBody\":{\"en\":\"Body\"},\"BoxBody_resultTemplate\":{\"en\":\"Result template\"},\"BoxBody_enableInfiniteScrollWaitingAnimation\":{\"en\":\"Enable infinite scroll waiting animation\"},\"BoxBody_fieldsToInclude\":{\"en\":\"Fields to include\"},\"BoxBody_autoSelectFieldsToInclude\":{\"en\":\"Auto select fields to include\"},\"BoxBody_enableInfiniteScroll\":{\"en\":\"Enable infinite scroll\"},\"BoxBody_enableInfiniteScroll_description\":{\"en\":\"Specifies whether the ResultList automatically retrieves an additional page of results and appends them to those already being displayed whenever the user scrolls to the end of the infiniteScrollContainer. The wait animation is displayed while additional results are fetched. \"},\"BoxBody_infiniteScrollContainer\":{\"en\":\"Infinite scroll container\"},\"BoxBody_infiniteScrollContainer_description\":{\"en\":\"specifies the element whose scrolling is monitored to trigger fetching of additional results. If this option is not specified, the component bound element will be used.\"},\"BoxBody_infiniteScrollPageSize\":{\"en\":\"Infinite scroll page size\"},\"BoxBody_infiniteScrollPageSize_description\":{\"en\":\"Specifies the number of additional results that are fetched when the user scrolls to the bottom of the infiniteScrollContainer. \"},\"BoxBody_mobileScrollContainer\":{\"en\":\"Mobile scroll container\"},\"BoxBody_mobileScrollContainer_description\":{\"en\":\"Specifies the element whose scrolling is monitored to trigger fetching of additional results for mobile. If this option is not specified, the component bound element will be used.\"},\"BoxBody_resultContainer\":{\"en\":\"Result container\"},\"BoxBody_resultContainer_description\":{\"en\":\"Specifies the element within which the rendered HTML templates for results will be inserted. The content of this element is cleared when a new query is performed.\"},\"BoxBody_resultTemplateId\":{\"en\":\"Result template ID\"},\"BoxBody_resultTemplateId_description\":{\"en\":\"Specifies the ID of the search result template used to render results in HTML.\"},\"BoxBody_resultTemplateSelector\":{\"en\":\"Result template selector\"},\"BoxBody_resultTemplateSelector_description\":{\"en\":\"Specifies the CSS selector matching an element that defines a template within the page to use to render results in HTML. \"},\"BoxBody_showInfiniteScrollWaitingAnimation\":{\"en\":\"Show infinite scroll waiting animation\"},\"BoxBody_showInfiniteScrollWaitingAnimation_description\":{\"en\":\"Show infinite scroll waiting animation\"},\"BoxBody_waitAnimation\":{\"en\":\"Wait animation\"},\"BoxBody_waitAnimation_description\":{\"en\":\"Specifies the type of animation to display while waiting for a new query to finish executing. Available values are: fade, spinner, none (default).\"},\"BoxBody_waitAnimationContainer\":{\"en\":\"Wait animation container\"},\"BoxBody_waitAnimationContainer_description\":{\"en\":\"Specifies the element inside which an animation is displayed while waiting for a new query to finish executing. By default, the animation appears in the the resultContainer.\"},\"componentOption_include\":{\"en\":\"Contextual fields to include\"},\"componentOption_include_description\":{\"en\":\"Specifies contextual fields to include as keywords in the current query. Only includes the most important keywords from those fields.\"},\"componentOption_best\":{\"en\":\"Number of keywords to extract\"},\"componentOption_best_description\":{\"en\":\"Specifies that only the X best keywords of those provided are to be matched. Keywords that occur less frequently in the index are considered better than those that are very common.\"},\"componentOption_match\":{\"en\":\"Number of keywords that results must match\"},\"componentOption_match_description\":{\"en\":\"Specifies that documents containing only X or greater keywords of those provided are to be matched.\"},\"componentOption_removeStopWords\":{\"en\":\"Remove stop words\"},\"componentOption_removeStopWords_description\":{\"en\":\"Specifies if stop words should be removed from the keywords. Stop words are common words that the index can filter out when ranking the documents (e.g.: the, is, at, on...\"},\"BoxQueryExtensions\":{\"en\":\"Ranking expression\"},\"BoxQueryExtensions_description\":{\"en\":\"Adds standard query extensions to fine tune the relevancy of your results.\"},\"BoxQueryExtensions_disableOnNonContextualSearch\":{\"en\":\"Disable on non contextual search\"},\"BoxPopup\":{\"en\":\"Popup container\"},\"BoxPopup_description\":{\"en\":\"This component acts as a generic container for other components which open when clicked.\"},\"BoxPopup_title\":{\"en\":\"Title\"},\"BoxPopup_withAnimation\":{\"en\":\"Open with animation\"},\"BoxPopup_fullWidth\":{\"en\":\"Take full page width\"},\"BoxPopup_fullHeight\":{\"en\":\"Take full page height\"},\"BoxPopup_hidden\":{\"en\":\"Hidden\"},\"QueryComponents\":{\"en\":\"Query Components\"},\"MANDATORY\":{\"en\":\"Mandatory\"},\"HIGHEST\":{\"en\":\"Highest\"},\"HIGH\":{\"en\":\"High\"},\"AVERAGE\":{\"en\":\"Average\"},\"LOW\":{\"en\":\"Low\"},\"LOWEST\":{\"en\":\"Lowest\"},\"BoxRelatedContext\":{\"en\":\"Relations\"},\"BoxQueryGeneric\":{\"en\":\"Query\"},\"BoxQueryGeneric_description\":{\"en\":\"Adds any valid query expression to fine tune the relevancy of your results. \"},\"BoxQueryGeneric_disableOnNonContextualSearch\":{\"en\":\"Disable on non contextual search\"},\"Box_withAnalytics\":{\"en\":\"With analytics component\"},\"Box_searchPageUri\":{\"en\":\"Search page URI\"},\"Box_enableHistory\":{\"en\":\"Enable history\"},\"Box_pipeline\":{\"en\":\"Pipeline\"},\"Box_maximumAge\":{\"en\":\"Maximum age\"},\"Box_enableAutomaticResponsiveMode\":{\"en\":\"Enable automatic responsive mode\"},\"Box_enableDuplicateFiltering\":{\"en\":\"Enable duplicate filtering\"},\"Box_resultsPerPage\":{\"en\":\"Results per page\"},\"Box_excerptLength\":{\"en\":\"Excerpt length\"},\"Box_excerptLength_description\":{\"en\":\"Specifies the number of characters of the excerpt to get at query time and display for each query result.\"},\"Box_expression\":{\"en\":\"Hidden expression\"},\"Box_filterField\":{\"en\":\"Filter field\"},\"Box_hideUntilFirstQuery\":{\"en\":\"Hide until first query\"},\"Box_firstLoadingAnimation\":{\"en\":\"First loading animation\"},\"Box_autoTriggerQuery\":{\"en\":\"Auto trigger query\"},\"Box_endpoint\":{\"en\":\"Endpoint\"},\"Box_timezone\":{\"en\":\"Timezone\"},\"Box_enableDebugInfo\":{\"en\":\"Enable debug info\"},\"Box_type\":{\"en\":\"Type\"},\"BoxExpandLink\":{\"en\":\"Expand link\"},\"BoxExpandLink_description\":{\"en\":\"Expands the current panel to a full Coveo search page, transferring the current state of the query. \"},\"BoxExpandLink_uri\":{\"en\":\"Target page URI\"},\"BoxExpandLink_hd\":{\"en\":\"Target page filter description\"},\"BoxExpandLink_targetTab\":{\"en\":\"Target page tab to open\"},\"BoxExpandLink_icon\":{\"en\":\"Icon\"},\"BoxExpandLink_title\":{\"en\":\"Salesforce tab title\"},\"BoxExpandLink_toPrimaryTab\":{\"en\":\"Open in a primary Salesforce tab\"},\"BoxEditLink\":{\"en\":\"Edit link\"},\"BoxEditLink_icon\":{\"en\":\"Icon\"},\"BoxEditLink_uri\":{\"en\":\"Target edit page URI\"},\"BoxCreateArticle\":{\"en\":\"Create Article\"},\"BoxCreateArticle_description\":{\"en\":\"Opens a new tab in order to create an Article\"},\"BoxCreateArticle_articleTypeFilter\":{\"en\":\"Article type filter\"},\"BoxCreateArticle_hidden\":{\"en\":\"Hidden\"},\"BoxCreateArticle_openInPrimaryTab\":{\"en\":\"Open in primary tab\"},\"BoxResultAction\":{\"en\":\"Result actions\"},\"BoxResultAction_menuDelay\":{\"en\":\"Menu delay\"},\"BoxResultAction_menuDelay_description\":{\"en\":\"Specfies the delay, in ms, before the menu closes on mouseout. \"},\"BoxResultAction_displayInline\":{\"en\":\"Display menu inline\"},\"BoxResultAction_displayInline_description\":{\"en\":\"Specifies whether the components contained inside the ResultAction are instead displayed 'inline', and not inside a clickable menu.\"},\"Box_Quickview\":{\"en\":\"Quick View\"},\"BoxQuickview\":{\"en\":\"Quick View\"},\"Box_Quickview_description\":{\"en\":\"This component creates a button/link inside the result list that opens a Quick View dialog box for a given result.\"},\"BoxQuickview_title\":{\"en\":\"Title\"},\"BoxQuickview_title_description\":{\"en\":\"Specifies the title that appears at the top of the Quick View dialog box.\"},\"BoxQuickview_showDate\":{\"en\":\"Show date\"},\"BoxQuickview_showDate_description\":{\"en\":\"Specifies whether to show the date in the header of the Quick View. \"},\"BoxQuickview_enableLoadingAnimation\":{\"en\":\"Enable loading animation\"},\"BoxQuickview_contentTemplateSelector\":{\"en\":\"Content template CSS selector\"},\"BoxQuickview_contentTemplateId\":{\"en\":\"Content template script ID\"},\"BoxQuickview_loadingAnimation\":{\"en\":\"Loading animation CSS selector\"},\"InsertANewComponent\":{\"en\":\"Insert a new component\"},\"InsertANewComponentEmpty\":{\"en\":\"No components in menu\"},\"InsertANewComponentEmptyDescription\":{\"en\":\"Click + to insert new components inside the menu\"},\"BoxFieldTable\":{\"en\":\"Field table\"},\"BoxFieldTable_useJsonTemplateFields\":{\"en\":\"Use JSON template fields\"},\"BoxFieldTable_expandedTitle\":{\"en\":\"Expanded title\"},\"BoxFieldTable_minimizedTitle\":{\"en\":\"Minimized title\"},\"BoxFieldTable_minimizedByDefault\":{\"en\":\"Minimized by default\"},\"BoxFieldTable_allowMinimization\":{\"en\":\"Allow minimization\"},\"BoxResultLink\":{\"en\":\"Result link\"},\"BoxResultLink_description\":{\"en\":\"Clickable link that points to the original document.\"},\"BoxResultLink_alwaysOpenInNewWindow\":{\"en\":\"Always open in new window\"},\"BoxResultLink_alwaysOpenInNewWindow_description\":{\"en\":\"Specifies whether the result link should always open in a new window.\"},\"BoxResultLink_field\":{\"en\":\"Field\"},\"BoxResultLink_field_description\":{\"en\":\"Specifies the field that the result link should use to output its href.\"},\"BoxResultLink_openInOutlook\":{\"en\":\"Open in Microsoft Outlook\"},\"BoxResultLink_openInOutlook_description\":{\"en\":\"Specifies whether the result link tries to open in Microsoft Outlook. This is normally intended for ResultLink related to Microsoft Exchange emails.\"},\"BoxResultLink_openQuickview\":{\"en\":\"Open in Quick View\"},\"BoxResultLink_openQuickview_description\":{\"en\":\"Specifies whether the result link should open in a Quick View instead of loading through the original URL.\"},\"BoxResultLink_openInPrimaryTab\":{\"en\":\"Open in a primary Salesforce console tab\"},\"BoxResultLink_openInSubTab\":{\"en\":\"Open in a sub Salesforce console tab\"},\"BoxResultLink_openInSameBrowserTab\":{\"en\":\"Open in the same browser tab\"},\"ShowDetails\":{\"en\":\"Show details\"},\"HideDetails\":{\"en\":\"Hide details\"},\"SelectNonContextualSearch\":{\"en\":\"Remove the current record context to broaden your search\"},\"QuerySummaryInfiniteScrolling\":{\"en\":\"{0}-{1} on {3} result<pl>s</pl>\"},\"ExtensionsEmpty\":{\"en\":\"No Extensions\"},\"ExtensionsEmptyDescription\":{\"en\":\"Click + to insert new extensions\"},\"RemoveContext\":{\"en\":\"Remove context\"},\"Box_useLocalStorageForBoxState\":{\"en\":\"Use local storage for box state\"},\"Box_enableBoxStateHistory\":{\"en\":\"Enable box state history\"},\"Box_enableCollaborativeRating\":{\"en\":\"Enable collaborative rating\"},\"Box_useLocalStorageForHistory\":{\"en\":\"Use local storage for history\"},\"BoxCurrentTab\":{\"en\":\"Current tab\"},\"BoxCurrentSort\":{\"en\":\"Box current sort\"},\"BoxQuerySummary\":{\"en\":\"Query summary\"},\"BoxPipelineContext\":{\"en\":\"Pipeline context\"},\"AddPipelineContext\":{\"en\":\"Add pipeline context\"},\"AddNewQueryExtension\":{\"en\":\"Add new query extension\"},\"UserActionsNoVisitId\":{\"en\":\"There are no user actions attached to this case\"},\"UserActionsErrorOccured\":{\"en\":\"An error occured while getting the user actions\"}}");

/***/ })
/******/ ]);(function(e, a) { for(var i in a) e[i] = a[i]; }(window.Coveo, c4sf))