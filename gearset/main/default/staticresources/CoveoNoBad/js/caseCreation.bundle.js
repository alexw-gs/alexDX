window.Coveo = window.Coveo || {};var c4sf =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache - xyz
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
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseCreationEvents; });
var CaseCreationEvents = /** @class */ (function () {
    function CaseCreationEvents() {
    }
    CaseCreationEvents.addInput = 'caseCreationAddInput';
    CaseCreationEvents.inputChange = 'caseCreationInputChange';
    CaseCreationEvents.submitClick = 'caseCreationSubmitClick';
    CaseCreationEvents.cancelClick = 'caseCreationCancelClick';
    CaseCreationEvents.createCase = 'createCase';
    CaseCreationEvents.createCaseError = 'createCaseError';
    return CaseCreationEvents;
}());



/***/ }),
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
/* 35 */,
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesforceThumbnail; });
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
 * The _SalesforceThumbnail_ component is used in result templates to display a thumbnail preview for Salesforce content documents.
 *
 * It is included by default in the Document result template.
 *
 * **NOTE:**
 * > Objects without attachments may fail to render a preview. You should only use it for Salesforce Content documents.
 *
 * ```html
 * <span class="CoveoSalesforceThumbnail"></span>
 * ```
 */
var SalesforceThumbnail = /** @class */ (function (_super) {
    __extends(SalesforceThumbnail, _super);
    function SalesforceThumbnail(element, options, bindings, result) {
        var _this = _super.call(this, element, SalesforceThumbnail.ID, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, SalesforceThumbnail, options)) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.result = _this.result || _this.resolveResult();
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(_this.result);
        var thumbnailDiv = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div'); // Create a div container
        thumbnailDiv.addClass('coveo-salesforce-thumbnail-container');
        var img = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('img'); // Create the image to hold the thumbnail
        img.el.setAttribute('width', _this.options.width);
        img.el.setAttribute('height', _this.options.height);
        img.setAttribute('src', _this.getSalesforceThumbnailURI());
        img.addClass('coveo-salesforce-thumbnail-img');
        thumbnailDiv.append(img.el); // Add the image to the div.
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).append(thumbnailDiv.el);
        /*
         * If the thumbnail image fails to load, it is either a bad url or the user cannot access the thumbnail url,
         * Replace the thumbnail with a generic File icon to serve as placeholder
         */
        img.one('error', function () {
            var placeholder = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('span');
            placeholder.addClass(SalesforceThumbnail.SEARCHUI_SALESFORCE_FILE_ICON_CLASS);
            thumbnailDiv.addClass(SalesforceThumbnail.PLACEHOLDER_CLASS);
            thumbnailDiv.append(placeholder.el);
            img.el.style.display = 'none';
        });
        return _this;
    }
    // This returns the salesforce API url to the thumbnail image or undefined if it cannot find the versionId.
    SalesforceThumbnail.prototype.getSalesforceThumbnailURI = function () {
        if (!this.result.raw.sflatestpublishedversionid) {
            return undefined;
        }
        return SalesforceThumbnail.SALESFORCE_THUMBNAIL_URI + "?" + SalesforceThumbnail.RENDITION_SIZE + "&versionId=" + this.result.raw.sflatestpublishedversionid;
    };
    SalesforceThumbnail.ID = 'SalesforceThumbnail';
    SalesforceThumbnail.SALESFORCE_THUMBNAIL_URI = '/sfc/servlet.shepherd/version/renditionDownload';
    SalesforceThumbnail.RENDITION_SIZE = 'rendition=THUMB720BY480';
    SalesforceThumbnail.SEARCHUI_SALESFORCE_FILE_ICON_CLASS = 'coveo-filetype-salesforce-standard-file';
    SalesforceThumbnail.PLACEHOLDER_CLASS = 'coveo-salesforce-thumbnail-placeholder';
    /**
     * The possible options for the Salesforce Thumbnail
     * @componentOptions
     */
    SalesforceThumbnail.options = {
        /**
         * Specifies the width of the thumbnail.
         *
         * Default value is `120px`.
         *
         * ```html
         * <span data-width='120px'></span>
         * ```
         */
        width: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '120px' }),
        /**
         * Specifies the height of the thumbnail.
         *
         * Default is `auto`, meaning that it scales with the given width.
         *
         * ```html
         * <span data-height='auto'></span>
         * ```
         */
        height: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'auto' }),
    };
    SalesforceThumbnail.fields = ['sflatestpublishedversionid'];
    return SalesforceThumbnail;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerComponentFields(SalesforceThumbnail.ID, SalesforceThumbnail.fields);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(SalesforceThumbnail);


/***/ }),
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseCreationQueryGenerator; });
/* harmony import */ var modules_insightPanel_ts_ExtensionBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);


var CaseCreationQueryGenerator = /** @class */ (function () {
    function CaseCreationQueryGenerator() {
    }
    /**
     * Generate a $some query.
     * @param keywords The string from which to extract keywords.
     * @param best Optional. Either an absolute or percentage value specifying that only the X best keywords of those provided are to be matched.
     * @param match Either an absolute or percentage value specifying that items containing only X or greater keywords of those provided are to be matched.
     * @param removeStopWords  If true, any English stop word present in the keywords will be automatically removed.
     * @param maximum The maximum number of keywords to use.
     * @return string Output format: $some(keywords: foo, match: 50, maximum: 50)
     */
    CaseCreationQueryGenerator.generateSomeQuery = function (keywords, best, match, removeStopWords, maximum) {
        var query = new modules_insightPanel_ts_ExtensionBuilder__WEBPACK_IMPORTED_MODULE_0__[/* ExtensionBuilder */ "b"]('some', false)
            .withParam('keywords', keywords)
            .withParam('match', match)
            .withParam('removeStopWords', removeStopWords)
            .withParam('maximum', maximum);
        if (best !== '') {
            query.withParam('best', best);
        }
        return query.build();
    };
    /**
     * Generate a query ranking expression ($qre).
     * @param keywords Keywords to which the ranking expression should apply.
     * @param field Field name to which the ranking expression should apply.
     * @param modifier Integer value specifying how to affect the ranking modifier for matching items.
     * @return string Output format: '$qre(expression: {FIELD}={KEYWORDS}, modifier: {MODIFIER})'
     */
    CaseCreationQueryGenerator.generateFieldQre = function (keywords, field, modifier) {
        // Use the Extension builder from JSUI
        var expressionBuilder = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ExpressionBuilder"]();
        expressionBuilder.addFieldExpression(field, '=', [keywords]);
        return new modules_insightPanel_ts_ExtensionBuilder__WEBPACK_IMPORTED_MODULE_0__[/* ExtensionBuilder */ "b"]('qre', false).withParam('expression', expressionBuilder.build()).withParam('modifier', modifier).build();
    };
    /**
     * Generate a $type query
     * @param name type
     * @return string Output format: $type(name: foo)
     */
    CaseCreationQueryGenerator.generateType = function (name) {
        return new modules_insightPanel_ts_ExtensionBuilder__WEBPACK_IMPORTED_MODULE_0__[/* ExtensionBuilder */ "b"]('type', false).withParam('name', name).build();
    };
    /**
     * Generate a $sort query.
     * @param criteria Reordered following the specified criterion.
     * @return string Output format: $sort(criteria: datedescending).
     */
    CaseCreationQueryGenerator.generateSort = function (criteria) {
        return new modules_insightPanel_ts_ExtensionBuilder__WEBPACK_IMPORTED_MODULE_0__[/* ExtensionBuilder */ "b"]('sort', false).withParam('criteria', criteria).build();
    };
    return CaseCreationQueryGenerator;
}());



/***/ }),
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
/* 58 */,
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Picklist; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExternalInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony import */ var _CaseCreationQueryGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
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
 * This component adds a drop down list to a case creation form.
 *
 * ```html
 * <div class="CoveoPicklist"></div>
 * ```
 */
var Picklist = /** @class */ (function (_super) {
    __extends(Picklist, _super);
    function Picklist(element, options, bindings) {
        var _this = _super.call(this, element, Picklist.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.picklistValues = Object(_ExternalInfo__WEBPACK_IMPORTED_MODULE_1__[/* getExternalInfo */ "a"])().picklistValues;
        _this.selected = false;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, Picklist, options);
        _this.buildLabel();
        _this.buildInput();
        _this.bindEvents();
        return _this;
    }
    Picklist.prototype.buildInput = function () {
        var input = $(document.createElement('div'))
            .addClass('coveo-case-picklist-input-container')
            .append($(document.createElement('div')).addClass('coveo-case-creation-input').addClass('coveo-case-picklist-select'));
        this.placeholderToMove = $(document.createElement('div')).addClass('coveo-placeholder-to-move').html(this.options.title);
        input.append(this.placeholderToMove);
        $(this.element).append(input);
        this.updateValues();
        this.addOptions();
    };
    Picklist.prototype.bindEvents = function () {
        _super.prototype.bindEvents.call(this);
        var PICKLIST = $(this.element).find('.coveo-case-picklist-select').get(0);
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(PICKLIST).on('click', this.handleSelect.bind(this));
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(PICKLIST).on('mouseleave', this.close.bind(this));
    };
    Picklist.prototype.updateValues = function () {
        if (this.options.values.length == 0) {
            this.options.values = this.picklistValues ? this.picklistValues[this.options.caseField] : [];
        }
    };
    Picklist.prototype.handleCancelClick = function () {
        if (this.options.defaultValue) {
            this.setValue(this.options.defaultValue, false);
        }
        else if (this.options.title != '') {
            $(this.element).removeClass('coveo-filled');
            this.setValue('');
        }
        this.setValid();
    };
    Picklist.prototype.addOptions = function () {
        var _this = this;
        var select = $(this.element)
            .find('.coveo-case-picklist-select')
            .append($(document.createElement('span'))
            .addClass('coveo-case-picklist-arrow-container')
            .append($(document.createElement('div')).addClass('coveo-icon').addClass('coveo-sprites-caseCreation-edit-picklist')))
            .append($(document.createElement('ul')).addClass('coveo-case-picklist-choices'));
        var choices = select.children('.coveo-case-picklist-choices');
        _.each(this.options.values, function (value) {
            var option = $(document.createElement('li')).text(value).click($.proxy(_this.select, _this));
            choices.append(option);
        });
        if (this.options.defaultValue) {
            this.setValue(this.options.defaultValue, false);
            $(this.element).addClass('coveo-filled');
        }
    };
    Picklist.prototype.handleSelect = function () {
        if (!this.selected) {
            this.open();
        }
        else {
            this.close();
        }
    };
    Picklist.prototype.open = function () {
        $(this.element).find('.coveo-case-picklist-arrow').addClass('selected');
        $(this.element).find('.coveo-case-picklist-choices').show();
        $(this.element).addClass('coveo-picklist-opened');
        this.selected = true;
    };
    Picklist.prototype.close = function () {
        $(this.element).find('.coveo-case-picklist-arrow').removeClass('selected');
        $(this.element).find('.coveo-case-picklist-choices').hide();
        $(this.element).removeClass('coveo-picklist-opened');
        this.selected = false;
    };
    Picklist.prototype.handlePicklistChange = function () {
        this.setValid();
        if (this.options.enableSearch) {
            this.handleInputChange();
        }
    };
    Picklist.prototype.select = function (e) {
        this.setValid();
        $(this.element).addClass('coveo-filled');
        if (this.options.enableSearch) {
            this.setValue($(e.target).text(), true);
        }
        else {
            this.setValue($(e.target).text(), false);
        }
    };
    /**
     * Gets the expression that is added to the query.
     *
     * ```js
     * $('#myPicklist').coveo('getQueryExpression')
     * ```
     */
    Picklist.prototype.getQueryExpression = function () {
        var queryExpression = '';
        if (this.searchIsValid()) {
            var keywords = this.getValue();
            keywords = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].latinize(keywords);
            if (this.options.addQre) {
                queryExpression += _CaseCreationQueryGenerator__WEBPACK_IMPORTED_MODULE_2__[/* CaseCreationQueryGenerator */ "a"].generateFieldQre(keywords, this.options.searchField, this.options.queryModifier);
            }
        }
        return queryExpression;
    };
    /**
     * Gets the picklist selected value.
     *
     * ```js
     * $('#myPicklist').coveo('getValue')
     * ```
     */
    Picklist.prototype.getValue = function () {
        var value = $(this.element).find('.coveo-case-picklist-select').clone().children().remove().end().text();
        return value == null ? '' : value;
    };
    /**
     * Sets the value of the input, with the following properties:
     * @param value The value to set, as a string.
     * @param triggerChange (Optional) Whether to trigger a query. Default is `true`.
     *
     * ```js
     * $('#myPicklist').coveo('setValue', 'value to set', 'true')
     * ```
     */
    Picklist.prototype.setValue = function (value, triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        var select = $(this.element).find('.coveo-case-picklist-select');
        var children = select.children().clone(true);
        select.text(value);
        select.append(children);
        if (triggerChange) {
            var dataToSendOnPicklistChange = {
                input: this,
            };
            this.handleInputChange();
        }
    };
    Picklist.ID = 'Picklist';
    /**
     * The possible options for picklist
     * @componentOptions
     */
    Picklist.options = {
        /**
         * Specifies the title to display above the drop down list.
         *
         * ```html
         * <div data-title='Your Title'></div>
         * ```
         */
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the field used to save the drop down list value when the user submits the form.
         *
         * ```html
         * <div data-case-field='Priority'></div>
         * ```
         */
        caseField: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the values to display in the drop down list.
         *
         * If this option is left empty, the values are automatically obtained using the `caseField` option.
         *
         * ```html
         * <div data-values="Low, Medium, High"></div>
         * ```
         */
        values: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildListOption({ defaultValue: [] }),
        /**
         * Specifies the default selected value in the drop down list.
         *
         * ```html
         * <div data-default-value="Low"></div>
         * ```
         */
        defaultValue: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies what to display when the user's mouse is over the `title`.
         *
         * ```html
         * <div data-tooltip='The priority'></div>
         * ```
         */
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies whether an option has to be selected before the form can be submitted.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-is-required='false'></div>
         * ```
         */
        isRequired: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies whether to include the selected option keywords in the search for related cases. The default value is `false`.
         *
         * **NOTE:**
         * > If `addQre`, `addSome`, and `addCorrelateUsingIdf` are all set to `false`, `useSomeOnAllKeywords` on the {@link CaseCreation} component needs to be enabled for this option to be useful.
         *
         * ```html
         * <div data-enable-search='true'></div>
         * ```
         */
        enableSearch: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies whether to add a QRE in the query using the `searchField` and the selected option as expression.
         *
         * Default value is `true`.
         *
         * This option is useful only when `enableSearch` is set to `true`.
         *
         * ```html
         * <div data-add-Qre='true'></div>
         * ```
         *
         * The generated expression looks like this, where:
         * * `searchField` is the `searchField` option.
         * * `selectedOption` is the option the user selected.
         * * `queryModifier` is the `queryModifier` option.
         *
         * ```
         * $qre(expression: searchField=selectedOption, modifier: queryModifier)
         * ```
         *
         * For more information on the `$qre` expression, see [Standard Query Extensions - $qre](https://developers.coveo.com/display/SearchREST/Standard+Query+Extensions#StandardQueryExtensions-$qre).
         */
        addQre: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({
            defaultValue: true,
            depend: 'enableSearch',
        }),
        /**
         * Specifies the field to use in the QRE added to the search query.
         *
         * This option is useful only when the `addQre` option is enabled.
         *
         * ```html
         * <div data-search-field="@sfcasepriority"></div>
         * ```
         */
        searchField: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildFieldOption({ depend: 'addQre' }),
        /**
         * Specifies how to affect the ranking score for items where the `searchField` is equal to the selected option (see [Standard Query Extensions - $qre](https://developers.coveo.com/display/SearchREST/Standard+Query+Extensions#StandardQueryExtensions-$qre)).
         *
         * Default value is `50`.
         *
         * This option is used with `searchField` to boost item by adding a query ranking expression (QRE)  where the `searchField` is equal to the selected option.
         *
         * This option is useful only when the `addQre` option is enabled.
         *
         * ```html
         * <div data-query-modifier='50'></div>
         * ```
         */
        queryModifier: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({
            defaultValue: 50,
            depend: 'addQre',
        }),
        /**
         * Specifies whether to enable analytics on the component.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-enable-analytic='true'></div>
         * ```
         */
        enableAnalytic: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return Picklist;
}(_Input__WEBPACK_IMPORTED_MODULE_3__[/* Input */ "a"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(Picklist);


/***/ }),
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
/* 63 */,
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatterThumbnail; });
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
 * The _ChatterThumbnail_ component is used in result templates to display the Chatter avatar of users.
 *
 * It is included by default in the User result template.
 *
 * ```html
 * <span class="CoveoChatterThumbnail"></span>
 * ```
 */
var ChatterThumbnail = /** @class */ (function (_super) {
    __extends(ChatterThumbnail, _super);
    function ChatterThumbnail(element, options, bindings, result) {
        var _this = _super.call(this, element, ChatterThumbnail.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ChatterThumbnail, options);
        _this.result = _this.result || _this.resolveResult();
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(_this.result);
        var thumbnailDiv = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div'); // Create a div container
        var img = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('img'); // Create the image to hold the thumbnail
        img.el.style.minWidth = _this.options.width;
        img.el.style.minHeight = _this.options.height;
        img.el.style.maxWidth = _this.options.width;
        img.el.style.maxHeight = _this.options.height;
        img.addClass(ChatterThumbnail.IMG_CLASS);
        thumbnailDiv.append(img.el);
        if (_this.getPhotoUrl()) {
            // If the user doesn't have access to the image or something bad occured.
            img.el.onerror = function () {
                _this.setDefaultImage(img.el);
            };
            img.setAttribute('src', _this.getPhotoUrl());
        }
        else {
            _this.setDefaultImage(img.el);
        }
        // Add the image to the element
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).append(thumbnailDiv.el);
        return _this;
    }
    ChatterThumbnail.prototype.setDefaultImage = function (el) {
        var placeholder = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('span');
        placeholder.addClass(ChatterThumbnail.USER_SVG_CLASS);
        placeholder.addClass(ChatterThumbnail.THUMBNAIL_PLACEHOLDER_CLASS);
        el.parentElement.appendChild(placeholder.el);
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(el).remove();
    };
    ChatterThumbnail.prototype.getPhotoUrl = function () {
        // Get the smallphotourl (index default field) or sfcreatedbysmallphotourl (express default field)
        return this.result.raw.sfsmallphotourl || this.result.raw.sfcreatedbysmallphotourl || undefined;
    };
    ChatterThumbnail.USER_SVG_CLASS = 'coveo-filetype-salesforce-standard-post';
    ChatterThumbnail.THUMBNAIL_PLACEHOLDER_CLASS = 'coveo-chatter-thumbnail-placeholder';
    ChatterThumbnail.IMG_CLASS = 'coveo-chatter-thumbnail-img';
    ChatterThumbnail.ID = 'ChatterThumbnail';
    /**
     * The possible options for the ChatterThumbnail
     * @componentOptions
     */
    ChatterThumbnail.options = {
        /**
         * Specifies the width of the thumbnail.
         *
         * Defaut value is `45px`.
         *
         * ```html
         * <span width='45px'></span>
         * ```
         */
        width: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '45px' }),
        /**
         * Specifies the height of the thumbnail.
         *
         * Default value is `45px`.
         *
         * ```html
         * <span height='45px'></span>
         * ```
         */
        height: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '45px' }),
    };
    return ChatterThumbnail;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerComponentFields(ChatterThumbnail.ID, ['sfsmallphotourl', 'sfcreatedbysmallphotourl']);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ChatterThumbnail);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
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
 * The _input_ component is used by the {@link Field} and the {@link Picklist} components.
 */
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(element, type, bindings) {
        var _this = _super.call(this, element, type, bindings) || this;
        _this.element = element;
        _this.type = type;
        _this.valid = true;
        _this.inputType = type.toLowerCase();
        _this.register();
        return _this;
    }
    /*
     * Bind functions to the CaseCreation events.
     */
    Input.prototype.bindEvents = function () {
        var _this = this;
        this.bind.onRootElement(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].submitClick, function () {
            _this.handleSubmitClick();
        });
        this.bind.onRootElement(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].cancelClick, function () {
            _this.handleCancelClick();
        });
    };
    /*
     * Add a label div for the input with the title and the tooltip defined in the options
     */
    Input.prototype.buildLabel = function () {
        var title = this.options.title ? this.options.title : '';
        var label = $(document.createElement('div'))
            .addClass('coveo-case-creation-title')
            .addClass('coveo-case-' + this.inputType + '-title')
            .text(title);
        if (this.options.tooltip) {
            label.attr('title', this.options.tooltip);
        }
        $(this.element).append(label);
    };
    /*
     * Add this input to the inputs of CaseCreation component
     */
    Input.prototype.register = function () {
        var dataToSendOnAddInput = {
            input: this,
        };
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(Input.resolveRoot(this.element)).trigger(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].addInput, dataToSendOnAddInput);
    };
    Input.prototype.handleSubmitClick = function () {
        if (this.options.isRequired && this.getValue() == '') {
            this.setInvalid();
        }
    };
    /*
     * Function called when the user changes the content of an input
     */
    Input.prototype.handleInputChange = function () {
        var dataToSendOnInputChange = {
            input: this,
        };
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).trigger(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].inputChange, dataToSendOnInputChange);
    };
    /**
     * Returns `true` when the `enabledSearch` option is enabled and the value is not empty.
     *
     * ```js
     * $('#myField').coveo('searchIsValid')
     * ```
     */
    Input.prototype.searchIsValid = function () {
        return this.options.enableSearch && this.getValue() !== '';
    };
    /**
     * Marks the field as valid.
     *
     * ```js
     * $('#myField').coveo('setValid')
     * ```
     */
    Input.prototype.setValid = function () {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).removeClass('coveo-case-invalid-field');
        this.valid = true;
    };
    /**
     * Marks the field as invalid, preventing the user from creating a case using the `submit` button.
     *
     * The field becomes valid if the field changes, the `cancel` button is clicked, or the `setValid` method is called.
     *
     * ```js
     * $('#myField').coveo('setInvalid')
     * ```
     */
    Input.prototype.setInvalid = function () {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).addClass('coveo-case-invalid-field');
        this.valid = false;
    };
    /**
     * Returns `false` when the `isRequired` option is set to true and the user has not entered a value for the field.
     *
     * ```js
     * $('#myField').coveo('isValid')
     * ```
     */
    Input.prototype.isValid = function () {
        if (this.options.isRequired && this.getValue() === '') {
            return false;
        }
        return this.valid;
    };
    /**
     * Gets the value of the `caseField` option.
     *
     * ```js
     * $('#myField').coveo('getCaseField')
     * ```
     */
    Input.prototype.getCaseField = function () {
        return this.options.caseField;
    };
    return Input;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseCreation; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var _Picklist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60);
/* harmony import */ var _CaseCreationQueryGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
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
 * The _CaseCreation_ component creates a form that allows Salesforce users to submit a case.
 * The form automatically searches for solutions while the user is filling form parameters.
 * To work, this component needs to interact with other components that contain the necessary information to create the case.
 *
 * **Warning:**
 * > A _CaseCreation_ component must be present on the page for the form to work.
 *
 * ```html
 * <div class='CoveoCaseCreation'></div>
 * ```
 */
var CaseCreation = /** @class */ (function (_super) {
    __extends(CaseCreation, _super);
    function CaseCreation(element, options, bindings) {
        var _this = _super.call(this, element, CaseCreation.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.inputs = [];
        _this.shouldLogOnUnload = true;
        _this.hasClicks = false;
        _this.visitId = null;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, CaseCreation, options);
        _this.bindEvents();
        _this.visitIdPromise = _this.forceFetchVisitId();
        return _this;
    }
    CaseCreation.prototype.forceFetchVisitId = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(reject, 5000);
            resolve(_this.usageAnalytics.getCurrentVisitIdPromise());
        });
        promise
            .then(function (visitId) {
            _this.visitId = visitId == null ? '' : visitId;
        })
            .catch(function () {
            _this.logger.error('Unable to fetch visit id ! Please investigate the network call to the analytics service');
        });
        return promise;
    };
    CaseCreation.prototype.bindEvents = function () {
        var _this = this;
        this.bind.onRootElement(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].addInput, function (args) {
            _this.handleAddInput(args);
        });
        this.bind.onRootElement(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].inputChange, function (args) {
            _this.handleInputChange(args);
        });
        this.bind.onRootElement(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].submitClick, function (args) {
            _this.handleSubmitClick(args);
        });
        this.bind.onRootElement(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].cancelClick, function (args) {
            _this.handleCancelClick(args);
        });
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) {
            _this.handleBuildingQuery(args);
        });
        this.beforeUnload = function () { return _this.handlePageUnload(); };
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(window).on('beforeunload', this.beforeUnload);
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["InitializationEvents"].nuke, this.handleNuke);
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultListEvents"].newResultDisplayed, function (args) {
            _this.handleResultLinkClick(args);
        });
    };
    CaseCreation.prototype.handleNuke = function () {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(window).off('beforeunload', this.beforeUnload);
    };
    CaseCreation.prototype.handlePageUnload = function () {
        if (this.shouldLogOnUnload) {
            this.usageAnalytics.logCustomEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseCreationUnloadPage, this.buildAnalyticMetadata(), this.element);
        }
    };
    CaseCreation.prototype.handleResultLinkClick = function (args) {
        var _this = this;
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(args.item).find('.' + coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassNameForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultLink"].ID))).on('click', function () {
            _this.hasClicks = true;
        });
    };
    CaseCreation.prototype.handleAddInput = function (args) {
        this.inputs.push(args.input);
    };
    CaseCreation.prototype.handleInputChange = function (arg) {
        if (arg.input instanceof _Field__WEBPACK_IMPORTED_MODULE_2__[/* Field */ "a"]) {
            this.handleFieldChange(arg);
        }
        if (arg.input instanceof _Picklist__WEBPACK_IMPORTED_MODULE_3__[/* Picklist */ "a"]) {
            this.handlePicklistChange(arg);
        }
    };
    CaseCreation.prototype.handleFieldChange = function (args) {
        this.startNewSearchTimeout(args);
    };
    CaseCreation.prototype.handlePicklistChange = function (args) {
        var _this = this;
        this.queryController.executeQuery({
            beforeExecuteQuery: function () {
                if (args.input.options.enableAnalytic) {
                    _this.usageAnalytics.logSearchEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseCreationInputChange, CaseCreation.generateMetaFromInputChangeEvent(args));
                }
            },
        });
    };
    CaseCreation.generateMetaFromInputChangeEvent = function (args) {
        return {
            inputTitle: args.input.options.title || 'No title',
            input: args.input.options.caseField,
            value: args.input.getValue(),
        };
    };
    CaseCreation.prototype.handleCancelClick = function (args) {
        var _this = this;
        this.usageAnalytics.logCustomEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseCreationCancelButton, this.buildAnalyticMetadata(), this.element);
        // We don't want to log an unload since we already canceled the case
        this.shouldLogOnUnload = false;
        this.queryController.deferExecuteQuery({
            beforeExecuteQuery: function () {
                _this.usageAnalytics.logSearchEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseCreationCancelButton, {});
            },
        });
    };
    CaseCreation.prototype.handleSubmitClick = function (args) {
        var _this = this;
        this.visitIdPromise
            .then(function () {
            _this.visitId = _this.usageAnalytics.getCurrentVisitId();
        })
            .finally(function () {
            if (_this.isValid()) {
                // We don't want to log an unload since we submited the case
                _this.shouldLogOnUnload = false;
                _this.createCase(args.redirectURL);
            }
            else {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.root).trigger(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].createCaseError);
            }
        });
    };
    CaseCreation.prototype.addInputsToDataToSendOnCreateCaseArgs = function (args, inputs) {
        _.each(inputs, function (input) {
            var caseField = input.getCaseField();
            if (caseField) {
                args.fields[caseField] = input.getValue();
            }
        });
        args.visitId = this.visitId;
        return args;
    };
    CaseCreation.prototype.handleBuildingQuery = function (args) {
        if (this.options.useSomeQRE) {
            this.addSomeOnAllKeywordsExtension(args.queryBuilder);
        }
        else {
            this.addAllKeywordsForMLRefinedQuery(args.queryBuilder);
        }
        this.addQueryExpression(this.inputs, args.queryBuilder);
        this.addCaseCreationQueryExpression(args.queryBuilder);
    };
    CaseCreation.prototype.addAllKeywordsForMLRefinedQuery = function (queryBuilder) {
        var keywords = this.getAllKeywords();
        if (!coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Utils"].isNullOrEmptyString(keywords)) {
            queryBuilder.longQueryExpression.add(keywords);
        }
    };
    CaseCreation.prototype.addSomeOnAllKeywordsExtension = function (queryBuilder) {
        var keywords = this.getAllKeywords();
        if ($.trim(keywords) !== '') {
            var query = _CaseCreationQueryGenerator__WEBPACK_IMPORTED_MODULE_4__[/* CaseCreationQueryGenerator */ "a"].generateSomeQuery(keywords, this.options.someBest, this.options.someMatch, true, this.options.someMaximum);
            queryBuilder.expression.add(query);
        }
    };
    CaseCreation.prototype.getAllKeywords = function () {
        var keywords = this.getKeywords(this.inputs);
        keywords = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["StringUtils"].latinize(keywords);
        return $.trim(keywords);
    };
    CaseCreation.prototype.getKeywords = function (array) {
        var keywords = '';
        _.each(array, function (input) {
            if (input.searchIsValid()) {
                keywords += input.getValue() + ' ';
            }
        });
        return keywords;
    };
    CaseCreation.prototype.addQueryExpression = function (array, queryBuilder) {
        _.each(array, function (input) {
            if (input instanceof _Picklist__WEBPACK_IMPORTED_MODULE_3__[/* Picklist */ "a"]) {
                var expression = input.getQueryExpression();
                if (expression && input.searchIsValid()) {
                    queryBuilder.advancedExpression.add(expression);
                }
            }
        });
    };
    CaseCreation.prototype.addCaseCreationQueryExpression = function (queryBuilder) {
        var extensions = '';
        if (this.options.searchType !== '') {
            extensions += _CaseCreationQueryGenerator__WEBPACK_IMPORTED_MODULE_4__[/* CaseCreationQueryGenerator */ "a"].generateType(this.options.searchType);
        }
        extensions += _CaseCreationQueryGenerator__WEBPACK_IMPORTED_MODULE_4__[/* CaseCreationQueryGenerator */ "a"].generateSort(this.options.searchSort);
        queryBuilder.advancedExpression.add(extensions);
    };
    CaseCreation.prototype.isValid = function () {
        return this.inputsAreValid(this.inputs);
    };
    CaseCreation.prototype.inputsAreValid = function (array) {
        for (var i = 0; i < array.length; i++) {
            if (!array[i].isValid()) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a case with the information included in the form.
     * @param redirectURL Where to redirect the user after the case has been created.
     *
     * **Note:**
     * > The case is sent even if some required fields are invalid. To have some validation, use the submit method of the {@link Submit} component instead.
     *
     * ```js
     * Coveo.$('#myCaseCreation').coveo('createCase', 'https://www.coveo.com')
     * ```
     */
    CaseCreation.prototype.createCase = function (redirectURL) {
        var _this = this;
        this.visitIdPromise.then(function () {
            var dataToSendOnCreateCase = {
                fields: {},
                visitId: _this.visitId,
                redirectURL: redirectURL,
                useDefaultRule: _this.options.useDefaultRule,
            };
            _this.addInputsToDataToSendOnCreateCaseArgs(dataToSendOnCreateCase, _this.inputs);
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).trigger(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].createCase, dataToSendOnCreateCase);
        });
    };
    CaseCreation.prototype.logCreatedCase = function (caseId) {
        var metadata = this.buildAnalyticMetadata();
        metadata['caseId'] = caseId;
        return this.usageAnalytics.logCustomEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseCreationSubmitButton, metadata, this.element);
    };
    CaseCreation.prototype.startNewSearchTimeout = function (args) {
        var _this = this;
        this.cancelAnyPendingSearchTimeout();
        this.searchTimeout = setTimeout(function () {
            _this.queryController.deferExecuteQuery({
                beforeExecuteQuery: function () {
                    if (args.input.options.enableAnalytic) {
                        _this.usageAnalytics.logSearchAsYouType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseCreationInputChange, CaseCreation.generateMetaFromInputChangeEvent(args));
                    }
                },
            });
        }, this.options.searchDelay);
    };
    CaseCreation.prototype.cancelAnyPendingSearchTimeout = function () {
        if (coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Utils"].exists(this.searchTimeout)) {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = undefined;
        }
    };
    CaseCreation.prototype.buildAnalyticMetadata = function () {
        var values = {};
        if (this.options.sendCaseDataToAnalytic) {
            _.each(this.inputs, function (input) {
                if (input.getCaseField()) {
                    values[input.getCaseField()] = input.getValue();
                }
            });
        }
        return {
            hasClicks: this.hasClicks,
            values: values,
        };
    };
    CaseCreation.ID = 'CaseCreation';
    /**
     * The possible options for CaseCreation
     * @componentOptions
     */
    CaseCreation.options = {
        /**
         * Specifies how to sort the results.
         *
         * Default value is `relevancy`.
         *
         * **Note:**
         * > For more information on the way sorting works, see [Standard Query Extensions - $sort](https://developers.coveo.com/display/SearchREST/Standard+Query+Extensions#StandardQueryExtensions-$sort).
         * > The `fielddescending` and `fieldascending` sorts are unavailable for this component.
         *
         * ```html
         * <div data-search-sort='relevancy'></div>
         * ```
         */
        searchSort: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'relevancy' }),
        /**
         * Specifies whether to generate the query using the `$some` query extension instead of Coveo™ Machine Learning (see [Standard Query Extensions - $some](https://developers.coveo.com/display/SearchREST/Standard+Query+Extensions#StandardQueryExtensions-$some)).
         * Setting this option to `true` effectively disables Coveo Machine Learning for this component.
         *
         * Default value is `false`.
         *
         * ```html
         * <div data-use-some-q-r-e='true'></div>
         * ```
         */
        useSomeQRE: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         * Specifies an absolute or relative (percentage) value indicating the number of best keywords that the query must match (see [Standard Query Extensions - $some](https://developers.coveo.com/display/SearchREST/Standard+Query+Extensions#StandardQueryExtensions-$some)).
         *
         * Keywords that occur less frequently in the index are considered better than those that are very common.
         *
         * Specifying a value for this option is only useful if the `useSomeQRE` option is `true`.
         *
         * Default value is an empty string.
         *
         * ```html
         * <div data-use-some-q-r-e='true' data-some-best='50%'></div>
         * ```
         *
         * ```html
         * <div data-use-some-q-r-e='true' data-some-best='2'></div>
         * ```
         */
        someBest: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '' }),
        /**
         * Specifies an absolute or relative (percentage) value indicating the minimum number of keywords that the query must match (see [Standard Query Extensions - $some](https://developers.coveo.com/display/SearchREST/Standard+Query+Extensions#StandardQueryExtensions-$some)).
         *
         * Specifying a value for this options is only useful if the `useSomeQRE` option is `true`.
         *
         * Default value is the string `1`.
         *
         * ```html
         * <div data-use-some-q-r-e='true' data-some-match='50%'></div>
         * ```
         * <br />
         * ```html
         * <div data-use-some-q-r-e='true' data-some-match='5'></div>
         * ```
         */
        someMatch: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '1' }),
        /**
         * Specifies the maximum number of keywords to use (see [Standard Query Extensions - $some](https://developers.coveo.com/display/SearchREST/Standard+Query+Extensions#StandardQueryExtensions-$some)).
         *
         * If the query contains a larger number of keywords, remaining keywords are simply ignored.
         *
         * Specifying a value for this options is only useful if the `useSomeQRE` option is `true`.
         *
         * Default vlaue is `300`.
         *
         * Minimum value is `0`.
         *
         * ```html
         * <div data-use-some-q-r-e='true' data-some-maximum='100'></div>
         * ```
         */
        someMaximum: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({ defaultValue: 300, min: 0 }),
        /**
         * Specifies the delay (in milliseconds) before triggering a new query when the end user types new text inside a [Field](https://developers.coveo.com/x/bgKwAQ) component.
         *
         * Default value is `500`.
         *
         * Minimum value is `0`.
         *
         * ```html
         * <div data-search-delay='500'></div>
         * ```
         */
        searchDelay: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({ defaultValue: 500, min: 0 }),
        /**
         * Specifies to return only a certain type of results (see [Standard Query Extensions - $type](https://developers.coveo.com/display/SearchREST/Standard+Query+Extensions#StandardQueryExtensions-$type)).
         *
         * Default value is the empty string.
         *
         * ```html
         * <div data-search-type='Account'></div>
         * ```
         */
        searchType: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '' }),
        /**
         * Specifies whether to open the link that the component creates in a new window.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-open-link-in-new-window='true'></div>
         * ```
         */
        openLinkInNewWindow: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies whether to use the Assignment Rules (see [Set Up Assignment Rules](https://help.salesforce.com/articleView?id=creating_assignment_rules.htm&type=0)).
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-use-default-rule='true'></div>
         * ```
         */
        useDefaultRule: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies whether the component should send case-related metadata when logging case creation events in the Coveo Usage Analytics service.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-send-case-data-to-analytic='true'></div>
         * ```
         */
        sendCaseDataToAnalytic: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return CaseCreation;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),
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
/* 68 */,
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
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
 * The _Field_ component adds a text input to a case creation form, where a user can enter text.
 *
 * ```html
 * <div class="CoveoField"></div>
 * ```
 */
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field(element, options, bindings) {
        var _this = _super.call(this, element, Field.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.previousValue = null;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, Field, options);
        _this.buildLabel();
        _this.buildInput();
        _this.bindEvents();
        return _this;
    }
    Field.prototype.buildInput = function () {
        var input = jquery__WEBPACK_IMPORTED_MODULE_0__('<div>').addClass('coveo-case-field-input-container');
        var inputText = this.options.numberOfLines > 1
            ? jquery__WEBPACK_IMPORTED_MODULE_0__('<textarea>').addClass('coveo-case-creation-input').addClass('coveo-case-field-input').attr('rows', this.options.numberOfLines)
            : jquery__WEBPACK_IMPORTED_MODULE_0__('<input>').attr('type', 'text').addClass('coveo-case-creation-input').addClass('coveo-case-field-input');
        if (this.options.title) {
            inputText.attr('placeholder', this.options.title);
        }
        this.handlePlaceholderChange(inputText);
        input.append(inputText);
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).append(input);
    };
    Field.prototype.handlePlaceholderChange = function (inputText) {
        var _this = this;
        var oldPlaceholder = inputText.attr('placeholder');
        inputText.focusin(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).addClass('coveo-filled');
            inputText.removeAttr('placeholder');
        });
        inputText.focusout(function () {
            if (inputText.val() != '') {
                jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).addClass('coveo-filled');
                inputText.removeAttr('placeholder');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).removeClass('coveo-filled');
                inputText.attr('placeholder', oldPlaceholder);
            }
        });
    };
    Field.prototype.bindEvents = function () {
        _super.prototype.bindEvents.call(this);
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["$$"])(jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).find('.coveo-case-field-input').get(0)).on('input', this.handleFieldChange.bind(this));
    };
    Field.prototype.handleFieldChange = function () {
        this.setValid();
        if (this.options.enableSearch) {
            /*
             * IE trigger events when we change the placeholder.
             * Make sure we send a change event only when there's a real change.
             */
            var value = this.getValue();
            // Don't trigger an event if the value is the same as the previous one
            if ((this.previousValue != null && value != this.previousValue) ||
                // Don't trigger an event if it's the first one and the value is empty.
                (this.previousValue == null && value != '')) {
                this.previousValue = value;
                this.handleInputChange();
            }
        }
    };
    Field.prototype.handleCancelClick = function () {
        this.setValue('', false);
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).removeClass('coveo-filled');
        if (this.options.title) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).find('input,textarea').attr('placeholder', this.options.title);
        }
        this.setValid();
    };
    /**
     * Gets the value of the input.
     *
     * ```js
     * $('#myField').coveo('getValue')
     * ```
     */
    Field.prototype.getValue = function () {
        return jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).find('.coveo-case-field-input').val();
    };
    /**
     * Sets the value of the input, with the following properties:
     * @param value The value to set, as a string.
     * @param triggerChange (Optional) Whether to trigger a query. Default is `true`.
     *
     * ```js
     * $('#myField').coveo('setValue', 'value to set', 'true')
     * ```
     */
    Field.prototype.setValue = function (value, triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        jquery__WEBPACK_IMPORTED_MODULE_0__(this.element).find('.coveo-case-field-input').val(value);
        if (triggerChange) {
            this.handleInputChange();
        }
    };
    Field.ID = 'Field';
    /**
     * The possible options for fields
     * @componentOptions
     */
    Field.options = {
        /**
         * Specifies the title to display above the input.
         *
         * ```html
         * <div data-title='Your Title'></div>
         * ```
         */
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the field used to save the input value when the user submits the form.
         *
         * ```html
         * <div data-case-field='Subject'></div>
         * ```
         */
        caseField: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the input height in number of lines.
         *
         * Default value is `1`.
         *
         * ```html
         * <div data-number-of-lines='1'></div>
         * ```
         */
        numberOfLines: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildNumberOption({ defaultValue: 1, min: 1 }),
        /**
         * Specifies a short hint displayed inside the input before the user enters a value.
         *
         * ```html
         * <div data-placeholder='Enter a subject...'></div>
         * ```
         */
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies whether the input has to be filled before the form can be submitted.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-is-required='true'></div>
         * ```
         */
        isRequired: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies whether to include the entered keywords in the search for related cases.
         *
         * The default value is `true`.
         *
         * **Note:`**
         * > If `addQre`, `addSome`, and `addCorrelateUsingIdf` are all set to `false`, `useSomeOnAllKeywords` on the {@link CaseCreation} component needs to be enabled for this option to be useful.
         *
         * ```html
         * <div data-enable-search='true'></div>
         * ```
         */
        enableSearch: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        /**
         * Specifies whether to enable analytics on the component.
         *
         * Default value is `true`.
         *
         * ```html
         * <div data-enable-analytic='true'></div>
         * ```
         */
        enableAnalytic: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    };
    return Field;
}(_Input__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "a"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(Field);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseCreationInterface; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseCreation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
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


var CaseCreationInterface = /** @class */ (function (_super) {
    __extends(CaseCreationInterface, _super);
    function CaseCreationInterface(element, options, analyticsOptions) {
        var _this = _super.call(this, element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, CaseCreationInterface, options), analyticsOptions) || this;
        _this.element = element;
        var caseCreationElement = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).findClass('CoveoCaseCreation');
        if (caseCreationElement && caseCreationElement.length > 0) {
            new _CaseCreation__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreation */ "a"](caseCreationElement[0], coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, _CaseCreation__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreation */ "a"]), _this.getBindings());
        }
        if (_this.usageAnalytics) {
            _this.usageAnalytics.setOriginContext('CaseCreation');
        }
        // Hides the results until a query is made and display a message
        var caseCreationResultColumn = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.root).findId('coveo-case-creation-results-column');
        if (caseCreationElement && caseCreationElement.length > 0) {
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(caseCreationResultColumn).addClass('coveo-before-first-query');
            var message_1 = document.createElement('div');
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(message_1).text(_this.options.beforeSearchMessage);
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(message_1).addClass('coveo-case-creation-before-search-message');
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(caseCreationResultColumn).append(message_1);
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).one(Coveo.QueryEvents.newQuery, function () {
                window.dispatchEvent(_this.createNewEvent('resize'));
            });
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).on(Coveo.QueryEvents.newQuery, function () {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(message_1).hide();
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(caseCreationResultColumn).removeClass('coveo-before-first-query');
            });
        }
        return _this;
    }
    /*
     * Hack for IE11
     */
    CaseCreationInterface.prototype.createNewEvent = function (eventName) {
        var event;
        if (typeof Event === 'function') {
            event = new Event(eventName);
        }
        else {
            event = document.createEvent('Event');
            event.initEvent(eventName, true, true);
        }
        return event;
    };
    CaseCreationInterface.options = _.extend({}, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"].options, {
        autoTriggerQuery: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        hideUntilFirstQuery: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        beforeSearchMessage: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildLocalizedStringOption({ defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('StartTypingCaseForSuggestions') }),
    });
    CaseCreationInterface.ID = 'CaseCreationInterface';
    return CaseCreationInterface;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"]));



/***/ }),
/* 71 */,
/* 72 */,
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
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cancel; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
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
 * The _Cancel_ component adds a button to cancel the case creation.
 *
 * ```html
 * <div class='CoveoCancel'></div>
 * ```
 */
var Cancel = /** @class */ (function (_super) {
    __extends(Cancel, _super);
    function Cancel(element, options, bindings) {
        var _this = _super.call(this, element, Cancel.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, Cancel, options);
        var button = document.createElement('button');
        button.classList.add('coveo-case-button', 'coveo-case-button-cancel');
        button.textContent = _this.options.title;
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(button).on('click', _this.cancel.bind(_this));
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).append(button);
        return _this;
    }
    /**
     * Cancels the case creation and redirects the user using the `redirectUrl` option.
     *
     * If `redirectUrl` is empty, it clears the form instead.
     *
     * ```js
     * $('#myCancel').coveo('cancel')
     * ```
     */
    Cancel.prototype.cancel = function () {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).trigger(_Events__WEBPACK_IMPORTED_MODULE_1__[/* CaseCreationEvents */ "a"].cancelClick);
        if (this.options.redirectUrl != '') {
            this.redirect(this.options.redirectUrl);
        }
    };
    Cancel.prototype.redirect = function (url) {
        window.location.href = url;
    };
    Cancel.ID = 'Cancel';
    /**
     * The possible options for Cancel
     * @componentOptions
     */
    Cancel.options = {
        /**
         * Specifies the text to display on the button.
         *
         * The default value is `Cancel`.
         *
         * ```html
         * <div data-title='Cancel'></div>
         * ```
         */
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: 'Cancel' }),
        /**
         * Specifies where to redirect the user once the case has been canceled.
         *
         * This option is empty by default.
         *
         * ```html
         * <div data-redirect-url='http://www.coveo.com'></div>
         * ```
         */
        redirectUrl: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: '' }),
    };
    return Cancel;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(Cancel);


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Submit; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
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
 * The _Submit_ component adds a button to submit a case.
 *
 * ```html
 * <div class="CoveoSubmit"></div>
 * ```
 */
var Submit = /** @class */ (function (_super) {
    __extends(Submit, _super);
    function Submit(element, options, bindings) {
        var _this = _super.call(this, element, Submit.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, Submit, options);
        _this.button = jquery__WEBPACK_IMPORTED_MODULE_0__('<button>').addClass('coveo-case-button coveo-case-button-submit button--ujarak').text(_this.options.title);
        jquery__WEBPACK_IMPORTED_MODULE_0__(_this.element).append(_this.button);
        _this.bindEvents();
        return _this;
    }
    Submit.prototype.bindEvents = function () {
        var _this = this;
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["$$"])(this.button.get(0)).on('click', this.submit.bind(this));
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["$$"])(this.root).on(_Events__WEBPACK_IMPORTED_MODULE_2__[/* CaseCreationEvents */ "a"].createCaseError, function () {
            _this.button.removeClass('m-progress');
            _this.button.removeAttr('disabled');
        });
    };
    /**
     * Submits the case creation form.
     *
     * ```js
     * $('#mySubmit').coveo('submit')
     * ```
     */
    Submit.prototype.submit = function () {
        var dataToSendOnSubmit = {
            redirectURL: this.options.redirectUrl,
        };
        this.button.attr('disabled', 'true');
        this.button.addClass('m-progress');
        /*
         * Usage analytics event for case created is handled in top level CaseCreation Component
         * because it takes care of validating that all input are valid
         * before submit.
         */
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["$$"])(this.root).trigger(_Events__WEBPACK_IMPORTED_MODULE_2__[/* CaseCreationEvents */ "a"].submitClick, dataToSendOnSubmit);
    };
    Submit.ID = 'Submit';
    /**
     * The possible options for submit
     * @componentOptions
     */
    Submit.options = {
        /**
         * Specifies the text to display on the button.
         *
         * Default value is `Submit`.
         *
         * ```html
         * <div data-title="Submit"></div>
         * ```
         */
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: 'Submit' }),
        /**
         * Specifies where to redirect the user once the case has been submitted.
         *
         * By default, this option redirects to the newly created case page.
         *
         * ```html
         * <div data-redirect-url='http://www.coveo.com'></div>
         * ```
         */
        redirectUrl: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: '' }),
    };
    return Submit;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(Submit);


/***/ }),
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getExternalInfo; });
function getExternalInfo() {
    return window['ExternalInfo'];
}


/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module) {

module.exports = JSON.parse("{\"StartTypingCaseForSuggestions\":{\"en\":\"Describe your problem to see possible solutions\"},\"Field_description\":{\"en\":\"This component creates an input element in a case form.\"},\"Picklist_description\":{\"en\":\"This component creates a picklist element in a case form.\"},\"Submit_description\":{\"en\":\"This component creates a submit button in a case form.\"},\"Cancel_description\":{\"en\":\"This component creates a cancel button in a case form.\"},\"Text_description\":{\"en\":\"This component adds text.\"},\"CaseCreationEditHeader\":{\"en\":\"Form\"},\"CaseCreation_searchDelay\":{\"en\":\"Delay\"},\"CaseCreation_searchDelay_description\":{\"en\":\"Specifies the delay in milliseconds before a new query is triggered when the end-user types new text inside a Field component.\"},\"CaseCreation_searchType\":{\"en\":\"Type\"},\"CaseCreation_searchType_description\":{\"en\":\"Specifies that only results of the specified type are returned.\"},\"CaseCreation_searchSort\":{\"en\":\"Sort\"},\"CaseCreation_searchSort_description\":{\"en\":\"Specifies how to sort the results.\"},\"CaseCreation_useSomeOnAllKeywords\":{\"en\":\"Use some of the keywords.\"},\"CaseCreation_useSomeOnAllKeywords_description\":{\"en\":\"Specifies whether to add a $some query extension containing the search keywords of the form. The search keywords are those from Field and Picklist components where enableSearch is set to true.\"},\"CaseCreation_someBest\":{\"en\":\"Extract this number of best keywords\"},\"CaseCreation_someBest_description\":{\"en\":\"Specifies the X best keywords that are to be matched.\"},\"CaseCreation_someMatch\":{\"en\":\"Documents should match this number of extracted keywords\"},\"CaseCreation_someMatch_description\":{\"en\":\"Specifies that only documents containing X or more keywords of those provided are to be matched.\"},\"CaseCreation_someRemoveStopWords\":{\"en\":\"Remove stop words\"},\"CaseCreation_someRemoveStopWords_description\":{\"en\":\"Specifies whether to remove any stop word present in the keywords.\"},\"CaseCreation_someMaximum\":{\"en\":\"Maximum number of keywords to match\"},\"CaseCreation_someMaximum_description\":{\"en\":\"Specifies the maximum number of keywords to use. If a larger number of keywords is provided, some keywords are completely ignored.\"},\"CaseCreation_useDefaultRule\":{\"en\":\"Use default assignment rules\"},\"CaseCreation_useDefaultRule_description\":{\"en\":\"Specifies if we want the default case assignment rules to be used.\"},\"CaseCreation_openLinkInNewWindow\":{\"en\":\"Open the results in a new window\"},\"CaseCreation_NoResults\":{\"en\":\"No results\"},\"CaseCreationInterface_enableAutomaticResponsiveMode\":{\"en\":\"Enable automatic responsive mode\"},\"CaseCreationInterface_maximumAge\":{\"en\":\"Maximum age\"},\"CaseCreationQuerySummary_messageOnNoResult\":{\"en\":\"Message on no results\"},\"CaseCreationQuerySummary_messageOnNoResult_description\":{\"en\":\"Message to display when no results are found.\"},\"Field_title\":{\"en\":\"Title\"},\"Field_title_description\":{\"en\":\"Specifies the title to display above the input.\"},\"Field_caseField\":{\"en\":\"Case field\"},\"Field_caseField_description\":{\"en\":\"Specifies the field in which to save the input value when the end-user submits the form.\"},\"Field_numberOfLines\":{\"en\":\"Number of lines\"},\"Field_numberOfLines_description\":{\"en\":\"Specifies the input height in number of lines.\"},\"Field_placeholder\":{\"en\":\"Placeholder\"},\"Field_placeholder_description\":{\"en\":\"Specifies a short hint displayed inside the input before the end-user enters a value.\"},\"Field_tooltip\":{\"en\":\"Tooltip\"},\"Field_tooltip_description\":{\"en\":\"Specifies what to display when the end-user's mouse is over the title.\"},\"Field_isRequired\":{\"en\":\"Is required\"},\"Field_isRequired_description\":{\"en\":\"Specifies whether the input has to be filled before the form can be submitted.\"},\"Field_enableSearch\":{\"en\":\"Include in search\"},\"Field_enableSearch_description\":{\"en\":\"Specifies whether to include the entered keywords in the query.\"},\"Field_addQre\":{\"en\":\"Add QRE\"},\"Field_addQre_description\":{\"en\":\"Specifies whether to add a query ranking expression (QRE) in the search query using the input value as the expression.\"},\"Field_queryModifier\":{\"en\":\"Query modifier\"},\"Field_queryModifier_description\":{\"en\":\"Specifies how to affect the ranking score for documents containing the entered keywords.\"},\"Field_addSome\":{\"en\":\"Add 'some'\"},\"Field_addSome_description\":{\"en\":\"Specifies whether to add a $some query extension in the query.\"},\"Field_someBest\":{\"en\":\"Best\"},\"Field_someBest_description\":{\"en\":\"Specifies the X best keywords that are to be matched.\"},\"Field_someMatch\":{\"en\":\"Match\"},\"Field_someMatch_description\":{\"en\":\"Specifies that only documents containing X or more keywords of those provided are to be matched.\"},\"Field_someRemoveStopWords\":{\"en\":\"Remove stop words\"},\"Field_someRemoveStopWords_description\":{\"en\":\"Specifies whether to remove any stop word present in the keywords.\"},\"Field_someMaximum\":{\"en\":\"Maximum\"},\"Field_someMaximum_description\":{\"en\":\"Specifies the maximum number of keywords to use. If more keywords are provided, some keywords are completely ignored.\"},\"Field_addCorrelateUsingIdf\":{\"en\":\"Add correlateUsingIdf\"},\"Field_addCorrelateUsingIdf_description\":{\"en\":\"Specifies whether to add a $correlateUsingIdf query extension to the search query.\"},\"Field_correlateForceOneMatch\":{\"en\":\"Force one match\"},\"Field_correlateForceOneMatch_description\":{\"en\":\"Specifies whether to ensure that all results have at least one matching keyword.\"},\"Field_correlateRemoveStopWords\":{\"en\":\"Remove stop words\"},\"Field_correlateRemoveStopWords_description\":{\"en\":\"Specifies whether to remove any stop word present in the keywords.\"},\"Field_correlateNoStemming\":{\"en\":\"No stemming\"},\"Field_correlateNoStemming_description\":{\"en\":\"If true, keywords are not expanded using the index stemming before matching documents.\"},\"Field_correlateMaximum\":{\"en\":\"Maximum\"},\"Field_correlateMaximum_description\":{\"en\":\"Specifies the maximum number of keywords to use. If more keywords are provided, some keywords are completely ignored.\"},\"Picklist_title\":{\"en\":\"Title\"},\"Picklist_title_description\":{\"en\":\"Specifies the title to display above the picklist.\"},\"Picklist_caseField\":{\"en\":\"Case field\"},\"Picklist_caseField_description\":{\"en\":\"Specifies the field in which to save the picklist value when the end-user submits the form.\"},\"Picklist_values\":{\"en\":\"Values\"},\"Picklist_values_description\":{\"en\":\"Specifies the values available in the picklist. If this option is left empty, they will be automatically obtained using the caseField option.\"},\"Picklist_defaultValue\":{\"en\":\"Default value\"},\"Picklist_defaultValue_description\":{\"en\":\"Specifies the default selected value of the picklist.\"},\"Picklist_placeholder\":{\"en\":\"Placeholder\"},\"Picklist_placeholder_description\":{\"en\":\"Specifies the text to display when no option is selected.\"},\"Picklist_tooltip\":{\"en\":\"Tooltip\"},\"Picklist_tooltip_description\":{\"en\":\"Specifies what to display when the end-user's mouse is over the title.\"},\"Picklist_isRequired\":{\"en\":\"Is required\"},\"Picklist_isRequired_description\":{\"en\":\"Specifies whether an option in this picklist has to be selected before the form can be submitted.\"},\"Picklist_enableSearch\":{\"en\":\"Enable search\"},\"Picklist_enableSearch_description\":{\"en\":\"Specifies whether to include the selected option keywords in the search for related case.\"},\"Picklist_addQre\":{\"en\":\"Add QRE\"},\"Picklist_addQre_description\":{\"en\":\"Specifies whether to add a query ranking expression (QRE) in the query using the searchField and the selected option as expression.\"},\"Picklist_searchField\":{\"en\":\"Search field\"},\"Picklist_searchField_description\":{\"en\":\"Specifies the field to use in the query ranking expression (QRE) added to the search query.\"},\"Picklist_queryModifier\":{\"en\":\"Query modifier\"},\"Picklist_queryModifier_description\":{\"en\":\"Specifies how to affect the ranking score for documents where the searchField is equal to the selected option.\"},\"Picklist_addSome\":{\"en\":\"Add Some\"},\"Picklist_addSome_description\":{\"en\":\"Specifies whether to add a $some query extensions in the query.\"},\"Picklist_someBest\":{\"en\":\"Best\"},\"Picklist_someBest_description\":{\"en\":\"Specifies the X best keywords that are to be matched.\"},\"Picklist_someMatch\":{\"en\":\"Match\"},\"Picklist_someMatch_description\":{\"en\":\"Specifies that only documents containing X or more keywords of those provided are to be matched.\"},\"Picklist_someRemoveStopWords\":{\"en\":\"Remove stop words\"},\"Picklist_someRemoveStopWords_description\":{\"en\":\"Specifies whether to remove any stop word present in the keywords.\"},\"Picklist_someMaximum\":{\"en\":\"Maximum\"},\"Picklist_someMaximum_description\":{\"en\":\"Specifies the maximum number of keywords to use. If more keywords are provided, some keywords are completely ignored.\"},\"Picklist_addCorrelateUsingIdf\":{\"en\":\"Add correlateUsingIdf\"},\"Picklist_addCorrelateUsingIdf_description\":{\"en\":\"Specifies whether to add a $correlateUsingIdf query extensions to the search query.\"},\"Picklist_correlateForceOneMatch\":{\"en\":\"Force one match\"},\"Picklist_correlateForceOneMatch_description\":{\"en\":\"Specifies whether to ensure that all results have at least one matching keyword.\"},\"Picklist_correlateRemoveStopWords\":{\"en\":\"Remove stop words\"},\"Picklist_correlateRemoveStopWords_description\":{\"en\":\"Specifies whether to remove any stop word present in the keywords.\"},\"Picklist_correlateNoStemming\":{\"en\":\"No stemming\"},\"Picklist_correlateNoStemming_description\":{\"en\":\"If true, keywords are not expanded using the index stemming before matching documents.\"},\"Picklist_correlateMaximum\":{\"en\":\"Maximum\"},\"Picklist_correlateMaximum_description\":{\"en\":\"Specifies the maximum number of keywords to use. If more keywords are provided, some keywords are completely ignored.\"},\"Submit_title\":{\"en\":\"Title\"},\"Submit_title_description\":{\"en\":\"Specifies the text to display on the button.\"},\"Submit_redirectUrl\":{\"en\":\"Redirect URL\"},\"Submit_redirectUrl_description\":{\"en\":\"Specifies where to redirect the end-user once the case has been submitted.\"},\"Cancel_title\":{\"en\":\"Title\"},\"Cancel_title_description\":{\"en\":\"Specifies the text to display on the button.\"},\"Cancel_redirectUrl\":{\"en\":\"Redirect URL\"},\"Cancel_redirectUrl_description\":{\"en\":\"Specifies where to redirect the end-user once the case has been canceled.\"},\"InterfaceCreator_no_interface\":{\"en\":\"THIS CASE CREATION PAGE IS NOT CONFIGURED\"},\"InterfaceCreator_authenticate\":{\"en\":\"Set up a Case Creation page\"},\"InterfaceCreator_creating\":{\"en\":\"Creating the Case Creation page...\"},\"InterfaceCreator_information\":{\"en\":\"You can always modify the case creation page later.\"},\"InterfaceCreator_tabs_description\":{\"en\":\"We found the following content in your index. Select the tabs to include in your case creation page.\"},\"InterfaceCreator_additional_information\":{\"en\":\"You can also prepare your interface for upcoming content, or modify this case creation page later.\"},\"InterfaceCreator_tagLine\":{\"en\":\"Setup case creation page\"},\"CaseCreationInterface_searchPageUri\":{\"en\":\"Search page URI\"},\"CaseCreationInterface_searchPageUri_description\":{\"en\":\"Specifies the target search page URL. Only used for a standAlone search box associated with a remote searchInterface. \"},\"CaseCreationInterface_enableHistory\":{\"en\":\"Enable history\"},\"CaseCreationInterface_enableHistory_description\":{\"en\":\"Specifies whether your search interface allows end-users to navigate in the search history using the browser back/forward buttons. When enabled, the search interface saves the state of the current query in the hash portion of the URL. The default value is false.\"},\"CaseCreationInterface_resultsPerPage\":{\"en\":\"Results per page\"},\"CaseCreationInterface_resultsPerPage_description\":{\"en\":\"Specifies the number of results that each page displays.\"},\"CaseCreationInterface_excerptLength\":{\"en\":\"Excerpt length\"},\"CaseCreationInterface_excerptLength_description\":{\"en\":\"Specifies the number of characters of the excerpt to get at query time and to display for each query result.\"},\"CaseCreationInterface_expression\":{\"en\":\"Hidden expression\"},\"CaseCreationInterface_expression_description\":{\"en\":\"Specifies a hidden expression to add to each query. The default is none.\"},\"CaseCreationInterface_filterField\":{\"en\":\"Filter field\"},\"CaseCreationInterface_filterField_description\":{\"en\":\"Specifies the name of a field to use as a custom filter when executing the query (also referred to as folding). The default value is empty. Setting this option causes the index to return only one result having any particular value inside the filter field. Any other matching result is folded inside the childResults member of each JSON query result. This feature is typically used with threaded conversations to include only one top-level result per conversation. Thus, the field specified in this option typically is a value unique to each thread that is shared by all items (e.g., posts, emails, etc.) in the thread.\"},\"CaseCreationInterface_hideUntilFirstQuery\":{\"en\":\"Hide until first query\"},\"CaseCreationInterface_hideUntilFirstQuery_description\":{\"en\":\"Specifies whether the interface should display a loading animation before the first query has completed successfully.\"},\"CaseCreationInterface_firstLoadingAnimation\":{\"en\":\"First loading animation\"},\"CaseCreationInterface_firstLoadingAnimation_description\":{\"en\":\"Specifies the CSS selector of a static logo or animation to use while the search interface initially loads. By default, a Coveo-branded loading animation is displayed.\"},\"CaseCreationInterface_autoTriggerQuery\":{\"en\":\"Auto trigger query\"},\"CaseCreationInterface_autoTriggerQuery_description\":{\"en\":\"Specifies whether the init function should trigger the first query automatically, and therefore show search results even if the search box is empty. \"},\"CaseCreationInterface_endpoint\":{\"en\":\"Endpoint\"},\"CaseCreationInterface_timezone\":{\"en\":\"Timezone\"},\"CaseCreationInterface_enableDebugInfo\":{\"en\":\"Enable debug info\"},\"CaseCreationInterface_enableCollaborativeRating\":{\"en\":\"Enable collaborative rating\"},\"CaseCreationInterface_enableCollaborativeRating_description\":{\"en\":\"Specifies whether to enable the collaborative rating for the index and include the end-user rating on each results to the normal index ranking (see <a href=\\\"https://developers.coveo.com/x/GYGfAQ\\\">Enabling and Adding Collaborative Rating to a JavaScript Search Page</a>). The default value is false.\"},\"CaseCreationInterface_useLocalStorageForHistory\":{\"en\":\"Use local storage for history\"},\"CaseCreationInterface_enableDuplicateFiltering\":{\"en\":\"Enable duplicate filtering\"},\"CaseCreationInterface_enableDuplicateFiltering_description\":{\"en\":\"Specifies whether to filter duplicates on the search results. The default value is false.\"},\"CaseCreationInterface_pipeline\":{\"en\":\"Query pipeline\"},\"CaseCreationInterface_pipeline_description\":{\"en\":\"Specifies the name of the query pipeline to use for the queries. If not specified, the default value is 'default', which means the default query pipeline will be used. You can use this parameter for example when your index is in a Coveo Cloud Organization where you created pipelines (see <a href=\\\"https://www.coveo.com/go?dest=Cloudhelp&lcid=9&context=128\\\">Creating and Managing Query Pipelines</a>).\"},\"CaseCreationInterface_beforeSearchMessage\":{\"en\":\"Message to display before search\"}}");

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CaseCreationInterface", function() { return /* reexport */ CaseCreationInterface["a" /* CaseCreationInterface */]; });
__webpack_require__.d(__webpack_exports__, "CaseCreation", function() { return /* reexport */ CaseCreation["a" /* CaseCreation */]; });
__webpack_require__.d(__webpack_exports__, "Cancel", function() { return /* reexport */ Cancel["a" /* Cancel */]; });
__webpack_require__.d(__webpack_exports__, "Field", function() { return /* reexport */ Field["a" /* Field */]; });
__webpack_require__.d(__webpack_exports__, "Input", function() { return /* reexport */ Input["a" /* Input */]; });
__webpack_require__.d(__webpack_exports__, "Picklist", function() { return /* reexport */ Picklist["a" /* Picklist */]; });
__webpack_require__.d(__webpack_exports__, "Submit", function() { return /* reexport */ Submit["a" /* Submit */]; });
__webpack_require__.d(__webpack_exports__, "CaseCreationQuerySummary", function() { return /* reexport */ CaseCreationQuerySummary_CaseCreationQuerySummary; });
__webpack_require__.d(__webpack_exports__, "MetadataStore", function() { return /* reexport */ metadata["a" /* MetadataStore */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceEnvironment", function() { return /* reexport */ SalesforceAdaptiveResultLink["c" /* SalesforceEnvironment */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceComponent", function() { return /* reexport */ SalesforceAdaptiveResultLink["b" /* SalesforceComponent */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceAdaptiveResultLink", function() { return /* reexport */ SalesforceAdaptiveResultLink["a" /* SalesforceAdaptiveResultLink */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceResultLink", function() { return /* reexport */ SalesforceResultLink["a" /* SalesforceResultLink */]; });
__webpack_require__.d(__webpack_exports__, "ChatterThumbnail", function() { return /* reexport */ ChatterThumbnail["a" /* ChatterThumbnail */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceThumbnail", function() { return /* reexport */ SalesforceThumbnail["a" /* SalesforceThumbnail */]; });
__webpack_require__.d(__webpack_exports__, "CaseCreationQueryGenerator", function() { return /* reexport */ CaseCreationQueryGenerator["a" /* CaseCreationQueryGenerator */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceFields", function() { return /* reexport */ SalesforceUtils["b" /* SalesforceFields */]; });
__webpack_require__.d(__webpack_exports__, "SalesforceUtilities", function() { return /* reexport */ SalesforceUtils["c" /* SalesforceUtilities */]; });
__webpack_require__.d(__webpack_exports__, "Id", function() { return /* reexport */ SalesforceUtils["a" /* Id */]; });
__webpack_require__.d(__webpack_exports__, "CaseCreationEvents", function() { return /* reexport */ Events["a" /* CaseCreationEvents */]; });
__webpack_require__.d(__webpack_exports__, "initCaseCreation", function() { return /* binding */ initCaseCreation; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/CaseCreationInterface.ts
var CaseCreationInterface = __webpack_require__(70);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/CaseCreation.ts
var CaseCreation = __webpack_require__(66);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/Cancel.ts
var Cancel = __webpack_require__(78);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/Field.ts
var Field = __webpack_require__(69);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/Input.ts
var Input = __webpack_require__(65);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/Picklist.ts
var Picklist = __webpack_require__(60);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/Submit.ts
var Submit = __webpack_require__(79);

// EXTERNAL MODULE: external "$"
var external_$_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/modules/caseCreation/ts/CaseCreationQuerySummary.ts
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


var CaseCreationQuerySummary_CaseCreationQuerySummary = /** @class */ (function (_super) {
    __extends(CaseCreationQuerySummary, _super);
    function CaseCreationQuerySummary(element, options, bindings) {
        var _this = _super.call(this, element, CaseCreationQuerySummary.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, CaseCreationQuerySummary, options);
        _this.bind.onRootElement(external_window_Coveo_["QueryEvents"].querySuccess, function (args) { return _this.handleQuerySuccess(args); });
        external_$_(_this.element).addClass('coveo-hidden');
        return _this;
    }
    CaseCreationQuerySummary.prototype.handleQuerySuccess = function (args) {
        if (args.results.results.length == 0) {
            external_$_(this.element).removeClass('coveo-hidden').text(this.options.messageOnNoResult);
        }
        else {
            external_$_(this.element).addClass('coveo-hidden').empty();
        }
    };
    CaseCreationQuerySummary.options = {
        messageOnNoResult: external_window_Coveo_["ComponentOptions"].buildLocalizedStringOption({ defaultValue: Object(external_window_Coveo_["l"])('CaseCreation_NoResults') }),
    };
    CaseCreationQuerySummary.ID = 'CaseCreationQuerySummary';
    return CaseCreationQuerySummary;
}(external_window_Coveo_["Component"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(CaseCreationQuerySummary_CaseCreationQuerySummary);

// EXTERNAL MODULE: ./src/modules/search/ts/metadata/metadata.ts
var metadata = __webpack_require__(56);

// EXTERNAL MODULE: ./src/components/search-ui/SalesforceAdaptiveResultLink/SalesforceAdaptiveResultLink.ts
var SalesforceAdaptiveResultLink = __webpack_require__(39);

// EXTERNAL MODULE: ./src/components/search-ui/SalesforceResultLink/SalesforceResultLink.ts
var SalesforceResultLink = __webpack_require__(11);

// EXTERNAL MODULE: ./src/components/search-ui/Thumbnail/ChatterThumbnail.ts
var ChatterThumbnail = __webpack_require__(64);

// EXTERNAL MODULE: ./src/components/search-ui/Thumbnail/SalesforceThumbnail.ts
var SalesforceThumbnail = __webpack_require__(37);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/CaseCreationQueryGenerator.ts
var CaseCreationQueryGenerator = __webpack_require__(52);

// EXTERNAL MODULE: ./src/utils/SalesforceUtils.ts
var SalesforceUtils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/modules/caseCreation/ts/Events.ts
var Events = __webpack_require__(17);

// EXTERNAL MODULE: ./src/modules/caseCreation/strings.json
var strings = __webpack_require__(109);
var strings_namespaceObject = /*#__PURE__*/__webpack_require__.t(strings, 2);

// EXTERNAL MODULE: ./src/utils/Translation.ts
var Translation = __webpack_require__(6);

// CONCATENATED MODULE: ./src/modules/caseCreation/ts/index.ts


// Components













// Utils


// Events

function initCaseCreation(element, options) {
    if (options === void 0) { options = {}; }
    options = external_window_Coveo_["Initialization"].resolveDefaultOptions(element, options);
    var searchInterface = new CaseCreationInterface["a" /* CaseCreationInterface */](element, options.CaseCreationInterface, options.Analytics);
    searchInterface.options.originalOptionsObject = options;
    var initParameters = { options: options, bindings: searchInterface.getBindings() };
    return external_window_Coveo_["Initialization"].automaticallyCreateComponentsInside(element, initParameters);
}
external_window_Coveo_["Initialization"].registerNamedMethod('initCaseCreation', function (element, options) {
    if (options === void 0) { options = {}; }
    external_window_Coveo_["Initialization"].initializeFramework(element, options, function () {
        return initCaseCreation(element, options);
    });
});
// Load strings


Translation["a" /* Translation */].register('en', strings_namespaceObject);


/***/ })
/******/ ]);(function(e, a) { for(var i in a) e[i] = a[i]; }(window.Coveo, c4sf))
