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
/******/ 	return __webpack_require__(__webpack_require__.s = 146);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var history_1 = __webpack_require__(104);
__webpack_require__(122);
exports.Version = 'v15';
exports.Endpoints = {
    default: 'https://usageanalytics.coveo.com',
    production: 'https://usageanalytics.coveo.com',
    dev: 'https://usageanalyticsdev.coveo.com',
    staging: 'https://usageanalyticsstaging.coveo.com'
};
;
function defaultResponseTransformer(response) {
    return response.json().then(function (data) {
        data.raw = response;
        return data;
    });
}
var Client = (function () {
    function Client(opts) {
        if (typeof opts === 'undefined') {
            throw new Error('You have to pass options to this constructor');
        }
        this.endpoint = opts.endpoint || exports.Endpoints.default;
        this.token = opts.token;
        this.version = opts.version || exports.Version;
    }
    Client.prototype.sendEvent = function (eventType, request) {
        return fetch(this.getRestEndpoint() + "/analytics/" + eventType, {
            method: 'POST',
            headers: this.getHeaders(),
            mode: 'cors',
            body: JSON.stringify(request),
            credentials: 'include'
        });
    };
    Client.prototype.sendSearchEvent = function (request) {
        return this.sendEvent('search', request).then(defaultResponseTransformer);
    };
    Client.prototype.sendClickEvent = function (request) {
        return this.sendEvent('click', request).then(defaultResponseTransformer);
    };
    Client.prototype.sendCustomEvent = function (request) {
        return this.sendEvent('custom', request).then(defaultResponseTransformer);
    };
    Client.prototype.sendViewEvent = function (request) {
        if (request.referrer === '') {
            delete request.referrer;
        }
        var store = new history_1.HistoryStore();
        var historyElement = {
            name: 'PageView',
            value: request.contentIdValue,
            time: JSON.stringify(new Date()),
        };
        store.addElement(historyElement);
        return this.sendEvent('view', request).then(defaultResponseTransformer);
    };
    Client.prototype.getVisit = function () {
        return fetch(this.getRestEndpoint() + "/analytics/visit")
            .then(defaultResponseTransformer);
    };
    Client.prototype.getHealth = function () {
        return fetch(this.getRestEndpoint() + "/analytics/monitoring/health")
            .then(defaultResponseTransformer);
    };
    Client.prototype.getRestEndpoint = function () {
        return this.endpoint + "/rest/" + this.version;
    };
    Client.prototype.getHeaders = function () {
        var headers = {
            'Content-Type': "application/json"
        };
        if (this.token) {
            headers['Authorization'] = "Bearer " + this.token;
        }
        return headers;
    };
    return Client;
}());
exports.Client = Client;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Client;


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var storage_1 = __webpack_require__(105);
var detector = __webpack_require__(106);
exports.STORE_KEY = '__coveo.analytics.history';
exports.MAX_NUMBER_OF_HISTORY_ELEMENTS = 20;
exports.MIN_THRESHOLD_FOR_DUPLICATE_VALUE = 1000 * 60;
exports.MAX_VALUE_SIZE = 75;
var HistoryStore = (function () {
    function HistoryStore(store) {
        this.store = store || storage_1.getAvailableStorage();
        if (!(this.store instanceof storage_1.CookieStorage) && detector.hasCookieStorage()) {
            new storage_1.CookieStorage().removeItem(exports.STORE_KEY);
        }
    }
    ;
    HistoryStore.prototype.addElement = function (elem) {
        elem.internalTime = new Date().getTime();
        this.cropQueryElement(elem);
        var currentHistory = this.getHistoryWithInternalTime();
        if (currentHistory != null) {
            if (this.isValidEntry(elem)) {
                this.setHistory([elem].concat(currentHistory));
            }
        }
        else {
            this.setHistory([elem]);
        }
    };
    HistoryStore.prototype.getHistory = function () {
        var history = this.getHistoryWithInternalTime();
        return this.stripInternalTime(history);
    };
    HistoryStore.prototype.getHistoryWithInternalTime = function () {
        try {
            return JSON.parse(this.store.getItem(exports.STORE_KEY));
        }
        catch (e) {
            return [];
        }
    };
    HistoryStore.prototype.setHistory = function (history) {
        try {
            this.store.setItem(exports.STORE_KEY, JSON.stringify(history.slice(0, exports.MAX_NUMBER_OF_HISTORY_ELEMENTS)));
        }
        catch (e) { }
    };
    HistoryStore.prototype.clear = function () {
        try {
            this.store.removeItem(exports.STORE_KEY);
        }
        catch (e) { }
    };
    HistoryStore.prototype.getMostRecentElement = function () {
        var currentHistory = this.getHistoryWithInternalTime();
        if (currentHistory != null) {
            var sorted = currentHistory.sort(function (first, second) {
                if (first.internalTime == null && second.internalTime == null) {
                    return 0;
                }
                if (first.internalTime == null && second.internalTime != null) {
                    return 1;
                }
                if (first.internalTime != null && second.internalTime == null) {
                    return -1;
                }
                return second.internalTime - first.internalTime;
            });
            return sorted[0];
        }
        return null;
    };
    HistoryStore.prototype.cropQueryElement = function (elem) {
        if (elem.name && elem.name.toLowerCase() == 'query' && elem.value != null) {
            elem.value = elem.value.slice(0, exports.MAX_VALUE_SIZE);
        }
    };
    HistoryStore.prototype.isValidEntry = function (elem) {
        var lastEntry = this.getMostRecentElement();
        if (lastEntry && lastEntry.value == elem.value) {
            return elem.internalTime - lastEntry.internalTime > exports.MIN_THRESHOLD_FOR_DUPLICATE_VALUE;
        }
        return true;
    };
    HistoryStore.prototype.stripInternalTime = function (history) {
        if (history) {
            history.forEach(function (part, index, array) {
                delete part.internalTime;
            });
        }
        return history;
    };
    return HistoryStore;
}());
exports.HistoryStore = HistoryStore;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HistoryStore;


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var detector = __webpack_require__(106);
var cookieutils_1 = __webpack_require__(121);
exports.preferredStorage = null;
function getAvailableStorage() {
    if (exports.preferredStorage) {
        return exports.preferredStorage;
    }
    if (detector.hasLocalStorage()) {
        return localStorage;
    }
    if (detector.hasCookieStorage()) {
        return new CookieStorage();
    }
    if (detector.hasSessionStorage()) {
        return sessionStorage;
    }
    return new NullStorage();
}
exports.getAvailableStorage = getAvailableStorage;
var CookieStorage = (function () {
    function CookieStorage() {
    }
    CookieStorage.prototype.getItem = function (key) {
        return cookieutils_1.Cookie.get(key);
    };
    CookieStorage.prototype.removeItem = function (key) {
        cookieutils_1.Cookie.erase(key);
    };
    CookieStorage.prototype.setItem = function (key, data) {
        cookieutils_1.Cookie.set(key, data);
    };
    return CookieStorage;
}());
exports.CookieStorage = CookieStorage;
var NullStorage = (function () {
    function NullStorage() {
    }
    NullStorage.prototype.getItem = function (key) { return null; };
    NullStorage.prototype.removeItem = function (key) { };
    NullStorage.prototype.setItem = function (key, data) { };
    return NullStorage;
}());
exports.NullStorage = NullStorage;


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function hasLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e) {
        return false;
    }
}
exports.hasLocalStorage = hasLocalStorage;
;
function hasSessionStorage() {
    try {
        return 'sessionStorage' in window && window['sessionStorage'] !== null;
    }
    catch (e) {
        return false;
    }
}
exports.hasSessionStorage = hasSessionStorage;
;
function hasCookieStorage() {
    return navigator.cookieEnabled;
}
exports.hasCookieStorage = hasCookieStorage;
;
function hasDocument() {
    return document !== null;
}
exports.hasDocument = hasDocument;
;
function hasDocumentLocation() {
    return hasDocument() && document.location !== null;
}
exports.hasDocumentLocation = hasDocumentLocation;
;


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var analytics = __webpack_require__(103);
exports.analytics = analytics;
var SimpleAnalytics = __webpack_require__(123);
exports.SimpleAnalytics = SimpleAnalytics;
var history = __webpack_require__(104);
exports.history = history;
var donottrack = __webpack_require__(126);
exports.donottrack = donottrack;
var storage = __webpack_require__(105);
exports.storage = storage;


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Telemetry_Telemetry; });

// EXTERNAL MODULE: ./node_modules/coveo.analytics/dist/index.js
var dist = __webpack_require__(108);

// CONCATENATED MODULE: ./src/modules/telemetry/AnalyticsService.ts

var AnalyticsService = new dist["analytics"].Client({ token: 'xxe59a9e9f-2a1f-4b81-80fe-5d6858a4a52b' });


// CONCATENATED MODULE: ./src/modules/telemetry/Telemetry.ts
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
 * The Telemetry object binds an analytics logging event to elements in the page for which metadata configuration has been specified.
 */
var Telemetry_Telemetry = /** @class */ (function () {
    function Telemetry(salesforceContext, eventType, elementData) {
        var _this = this;
        this.salesforceContext = salesforceContext;
        this.eventType = eventType;
        this.usageAnalytics = AnalyticsService;
        /**
         * Click event handler bound to tracked elements.
         */
        this.clickHandler = function (event) {
            if (!(event.currentTarget instanceof HTMLElement)) {
                return;
            }
            var targetElement = event.currentTarget;
            var eventData = _this.eventMetadata.get(targetElement.id);
            if (eventData) {
                return _this.logEvent(eventData);
            }
        };
        this.setContextMetadata();
        if (elementData) {
            this.buildEvents(elementData);
            this.bindEvents();
        }
    }
    /**
     * Parses salesforce context metadata into _ITelemetryContextMeta_ format.
     */
    Telemetry.prototype.setContextMetadata = function () {
        this.contextMetadata = {
            page: this.salesforceContext.pageName,
            coveoOrganizationType: this.salesforceContext.currentUserTraits.coveoOrganizationVersion,
            email: this.salesforceContext.currentUserTraits.email,
            login: this.salesforceContext.currentUserTraits.login,
            sfOrganizationID: this.salesforceContext.currentUserTraits.organizationId,
            packageVersion: this.salesforceContext.packageVersion,
            namespace: this.salesforceContext.namespace,
            originLevel1: this.salesforceContext.currentPageURL,
        };
    };
    /**
     * Sets map of event metadata.
     * @param elementData Array of element metadata.
     */
    Telemetry.prototype.buildEvents = function (elementData) {
        var _this = this;
        this.eventMetadata = new Map();
        elementData.forEach(function (elementMeta) {
            var eventMeta = _this.buildEventMetadata(elementMeta);
            _this.eventMetadata.set(elementMeta.elementID, eventMeta);
        });
    };
    /**
     * Binds logging events to configured elements.
     */
    Telemetry.prototype.bindEvents = function () {
        var _this = this;
        this.eventMetadata.forEach(function (metadata, elementId) {
            var element = document.getElementById(elementId);
            element === null || element === void 0 ? void 0 : element.addEventListener('click', _this.clickHandler);
        });
    };
    /**
     * Returns the complete event metadata to be sent
     * @param elementMeta element event data
     */
    Telemetry.prototype.buildEventMetadata = function (elementMeta) {
        var _a, _b;
        var eventMeta = {
            eventType: (_a = this.eventType) !== null && _a !== void 0 ? _a : 'defaultEventType',
            eventValue: elementMeta.eventValue,
            customData: __assign({ section1: elementMeta.section1, section2: elementMeta.section2 }, this.contextMetadata),
            language: (_b = String['locale']) !== null && _b !== void 0 ? _b : 'en',
        };
        return eventMeta;
    };
    /**
     * Sends custom UA event.
     * @param eventData Event metadata
     */
    Telemetry.prototype.logEvent = function (eventData) {
        return eventData && this.usageAnalytics.sendCustomEvent(eventData);
    };
    return Telemetry;
}());



/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Toast_ToastManager; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ ToastModStyle; });

// UNUSED EXPORTS: ToastModVerticalAlignment, ToastModHorizontalAlignment

// EXTERNAL MODULE: external "$"
var external_$_ = __webpack_require__(1);

// EXTERNAL MODULE: ./src/modules/common/ts/Icons.ts
var Icons = __webpack_require__(31);

// CONCATENATED MODULE: ./src/modules/common/views/Toast.ejs
/* harmony default export */ var views_Toast = ("<div class=\"toast\">\n    <span class=\"toast-close\">\n        <%= closeIcon %>\n    </span>\n</div>");
// CONCATENATED MODULE: ./src/modules/common/ts/Toast.ts
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
 * Contains the toast and allow to create them.
 */
var Toast_ToastManager = /** @class */ (function () {
    function ToastManager(parentElement) {
        this.element = external_$_(document.createElement('div')).addClass(ToastManager.CSS_CLASS)[0];
        parentElement.appendChild(this.element);
    }
    /**
     * CreateToast
     */
    ToastManager.prototype.createToast = function (toastOption) {
        new Toast_Toast(this.element, toastOption);
    };
    ToastManager.CSS_CLASS = 'toast-container';
    return ToastManager;
}());

/**
 * Vertical alignment modifier for a toast.
 */
var ToastModVerticalAlignment;
(function (ToastModVerticalAlignment) {
    ToastModVerticalAlignment["Bottom"] = "mod-bottom";
    ToastModVerticalAlignment["Up"] = "";
    ToastModVerticalAlignment["Default"] = "";
})(ToastModVerticalAlignment || (ToastModVerticalAlignment = {}));
/**
 * Horizontal alignment modifier for a toast.
 */
var ToastModHorizontalAlignment;
(function (ToastModHorizontalAlignment) {
    ToastModHorizontalAlignment["Left"] = "mod-left";
    ToastModHorizontalAlignment["Right"] = "mod-right";
    ToastModHorizontalAlignment["Center"] = "";
    ToastModHorizontalAlignment["Default"] = "";
})(ToastModHorizontalAlignment || (ToastModHorizontalAlignment = {}));
/**
 * Style modifier for a toast.
 */
var ToastModStyle;
(function (ToastModStyle) {
    ToastModStyle["Warning"] = "mod-warning";
    ToastModStyle["Error"] = "mod-error";
})(ToastModStyle || (ToastModStyle = {}));
var Toast_Toast = /** @class */ (function () {
    function Toast(parentElement, toastOption) {
        toastOption = __assign(__assign({}, Toast.defaultOption), toastOption);
        if (!toastOption.title) {
            throw new Error('Tried to create a toast without a title.');
        }
        // Construct the toast.
        var element = external_$_(_.template(views_Toast)(Icons["a" /* Icons */]));
        // #region Add toast content.
        external_$_(element).append(external_$_(document.createElement('div')).addClass(Toast.TOAST_TITLE_CSS_CLASS).append(toastOption.title));
        if (toastOption.description) {
            external_$_(element).append(external_$_(document.createElement('div')).addClass(Toast.TOAST_DESCRIPTION_CSS_CLASS).append(toastOption.description));
        }
        // #endregion
        // #region Compute styling of the toast.
        if (toastOption.additionalCssClass) {
            external_$_(element).addClass(toastOption.additionalCssClass);
        }
        if (toastOption.modifiers) {
            if (toastOption.modifiers.horizontalAlignment) {
                element.addClass(toastOption.modifiers.horizontalAlignment);
            }
            if (toastOption.modifiers.verticalAlignment) {
                element.addClass(toastOption.modifiers.verticalAlignment);
            }
            if (toastOption.modifiers.style) {
                element.addClass(toastOption.modifiers.style);
            }
        }
        // #endregion
        // #region Show and hide action of the toast.
        var timeout;
        if (toastOption.displayTime > 0) {
            timeout = window.setTimeout(function () {
                Toast.dismiss(element);
            }, toastOption.displayTime);
        }
        // Attach dismiss toast action when clicking on the dismiss button.
        external_$_(element)
            .find("." + Toast.TOAST_CLOSE_CSS_CLASS)
            .click(function () {
            Toast.dismiss(element);
            if (timeout) {
                clearTimeout(timeout);
            }
        });
        // #endregion
        // Append the toast.
        external_$_(parentElement).append(element);
    }
    Toast.dismiss = function (toastElement) {
        external_$_(toastElement).addClass(Toast.TOAST_HIDDEN_MOD_CSS_CLASS);
        toastElement.remove();
    };
    /**
     * Default option for a toast.
     */
    Toast.defaultOption = {
        title: undefined,
        displayTime: 0,
    };
    Toast.TOAST_TITLE_CSS_CLASS = 'toast-title';
    Toast.TOAST_DESCRIPTION_CSS_CLASS = 'toast-description';
    Toast.TOAST_HIDDEN_MOD_CSS_CLASS = 'mod-hidden';
    Toast.TOAST_CLOSE_CSS_CLASS = 'toast-close';
    return Toast;
}());


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Cookie = (function () {
    function Cookie() {
    }
    Cookie.set = function (name, value, expiration) {
        var domain, domainParts, date, expires, host;
        if (expiration) {
            date = new Date();
            date.setTime(date.getTime() + expiration);
            expires = '; expires=' + date.toGMTString();
        }
        else {
            expires = '';
        }
        host = location.hostname;
        if (host.indexOf('.') === -1) {
            document.cookie = name + '=' + value + expires + '; path=/';
        }
        else {
            domainParts = host.split('.');
            domainParts.shift();
            domain = '.' + domainParts.join('.');
            document.cookie = name + '=' + value + expires + '; path=/; domain=' + domain;
            if (Cookie.get(name) == null || Cookie.get(name) != value) {
                domain = '.' + host;
                document.cookie = name + '=' + value + expires + '; path=/; domain=' + domain;
            }
        }
    };
    Cookie.get = function (name) {
        var cookiePrefix = name + '=';
        var cookieArray = document.cookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            cookie = cookie.replace(/^\s+/, '');
            if (cookie.indexOf(cookiePrefix) == 0) {
                return cookie.substring(cookiePrefix.length, cookie.length);
            }
        }
        return null;
    };
    Cookie.erase = function (name) {
        Cookie.set(name, '', -1);
    };
    return Cookie;
}());
exports.Cookie = Cookie;


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

(function (self) {
    'use strict';
    if (self.fetch) {
        return;
    }
    var support = {
        searchParams: 'URLSearchParams' in self,
        iterable: 'Symbol' in self && 'iterator' in Symbol,
        blob: 'FileReader' in self && 'Blob' in self && (function () {
            try {
                new Blob();
                return true;
            }
            catch (e) {
                return false;
            }
        })(),
        formData: 'FormData' in self,
        arrayBuffer: 'ArrayBuffer' in self
    };
    if (support.arrayBuffer) {
        var viewClasses = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]'
        ];
        var isDataView = function (obj) {
            return obj && DataView.prototype.isPrototypeOf(obj);
        };
        var isArrayBufferView = ArrayBuffer.isView || function (obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
    }
    function normalizeName(name) {
        if (typeof name !== 'string') {
            name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name');
        }
        return name.toLowerCase();
    }
    function normalizeValue(value) {
        if (typeof value !== 'string') {
            value = String(value);
        }
        return value;
    }
    // Build a destructive iterator for the value list
    function iteratorFor(items) {
        var iterator = {
            next: function () {
                var value = items.shift();
                return { done: value === undefined, value: value };
            }
        };
        if (support.iterable) {
            iterator[Symbol.iterator] = function () {
                return iterator;
            };
        }
        return iterator;
    }
    function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
            headers.forEach(function (value, name) {
                this.append(name, value);
            }, this);
        }
        else if (Array.isArray(headers)) {
            headers.forEach(function (header) {
                this.append(header[0], header[1]);
            }, this);
        }
        else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function (name) {
                this.append(name, headers[name]);
            }, this);
        }
    }
    Headers.prototype.append = function (name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ',' + value : value;
    };
    Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)];
    };
    Headers.prototype.get = function (name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
    };
    Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
    };
    Headers.prototype.forEach = function (callback, thisArg) {
        for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
                callback.call(thisArg, this.map[name], name, this);
            }
        }
    };
    Headers.prototype.keys = function () {
        var items = [];
        this.forEach(function (value, name) { items.push(name); });
        return iteratorFor(items);
    };
    Headers.prototype.values = function () {
        var items = [];
        this.forEach(function (value) { items.push(value); });
        return iteratorFor(items);
    };
    Headers.prototype.entries = function () {
        var items = [];
        this.forEach(function (value, name) { items.push([name, value]); });
        return iteratorFor(items);
    };
    if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }
    function consumed(body) {
        if (body.bodyUsed) {
            return Promise.reject(new TypeError('Already read'));
        }
        body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
        return new Promise(function (resolve, reject) {
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
        });
    }
    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
    }
    function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
    }
    function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join('');
    }
    function bufferClone(buf) {
        if (buf.slice) {
            return buf.slice(0);
        }
        else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
        }
    }
    function Body() {
        this.bodyUsed = false;
        this._initBody = function (body) {
            this._bodyInit = body;
            if (!body) {
                this._bodyText = '';
            }
            else if (typeof body === 'string') {
                this._bodyText = body;
            }
            else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body;
            }
            else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body;
            }
            else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this._bodyText = body.toString();
            }
            else if (support.arrayBuffer && support.blob && isDataView(body)) {
                this._bodyArrayBuffer = bufferClone(body.buffer);
                // IE 10-11 can't handle a DataView body.
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
            }
            else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
                this._bodyArrayBuffer = bufferClone(body);
            }
            else {
                throw new Error('unsupported BodyInit type');
            }
            if (!this.headers.get('content-type')) {
                if (typeof body === 'string') {
                    this.headers.set('content-type', 'text/plain;charset=UTF-8');
                }
                else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type);
                }
                else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                }
            }
        };
        if (support.blob) {
            this.blob = function () {
                var rejected = consumed(this);
                if (rejected) {
                    return rejected;
                }
                if (this._bodyBlob) {
                    return Promise.resolve(this._bodyBlob);
                }
                else if (this._bodyArrayBuffer) {
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                }
                else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob');
                }
                else {
                    return Promise.resolve(new Blob([this._bodyText]));
                }
            };
            this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                    return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
                }
                else {
                    return this.blob().then(readBlobAsArrayBuffer);
                }
            };
        }
        this.text = function () {
            var rejected = consumed(this);
            if (rejected) {
                return rejected;
            }
            if (this._bodyBlob) {
                return readBlobAsText(this._bodyBlob);
            }
            else if (this._bodyArrayBuffer) {
                return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            }
            else if (this._bodyFormData) {
                throw new Error('could not read FormData body as text');
            }
            else {
                return Promise.resolve(this._bodyText);
            }
        };
        if (support.formData) {
            this.formData = function () {
                return this.text().then(decode);
            };
        }
        this.json = function () {
            return this.text().then(JSON.parse);
        };
        return this;
    }
    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
    function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return (methods.indexOf(upcased) > -1) ? upcased : method;
    }
    function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
            if (input.bodyUsed) {
                throw new TypeError('Already read');
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
                this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            if (!body && input._bodyInit != null) {
                body = input._bodyInit;
                input.bodyUsed = true;
            }
        }
        else {
            this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || 'omit';
        if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.referrer = null;
        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
            throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(body);
    }
    Request.prototype.clone = function () {
        return new Request(this, { body: this._bodyInit });
    };
    function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function (bytes) {
            if (bytes) {
                var split = bytes.split('=');
                var name = split.shift().replace(/\+/g, ' ');
                var value = split.join('=').replace(/\+/g, ' ');
                form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
        });
        return form;
    }
    function parseHeaders(rawHeaders) {
        var headers = new Headers();
        // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
        // https://tools.ietf.org/html/rfc7230#section-3.2
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
        preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
            var parts = line.split(':');
            var key = parts.shift().trim();
            if (key) {
                var value = parts.join(':').trim();
                headers.append(key, value);
            }
        });
        return headers;
    }
    Body.call(Request.prototype);
    function Response(bodyInit, options) {
        if (!options) {
            options = {};
        }
        this.type = 'default';
        this.status = options.status === undefined ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = 'statusText' in options ? options.statusText : 'OK';
        this.headers = new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
    }
    Body.call(Response.prototype);
    Response.prototype.clone = function () {
        return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
        });
    };
    Response.error = function () {
        var response = new Response(null, { status: 0, statusText: '' });
        response.type = 'error';
        return response;
    };
    var redirectStatuses = [301, 302, 303, 307, 308];
    Response.redirect = function (url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError('Invalid status code');
        }
        return new Response(null, { status: status, headers: { location: url } });
    };
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
    self.fetch = function (input, init) {
        return new Promise(function (resolve, reject) {
            var request = new Request(input, init);
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                var options = {
                    status: xhr.status,
                    statusText: xhr.statusText,
                    headers: parseHeaders(xhr.getAllResponseHeaders() || '')
                };
                options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
                var body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options));
            };
            xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
            };
            xhr.ontimeout = function () {
                reject(new TypeError('Network request failed'));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === 'include') {
                xhr.withCredentials = true;
            }
            else if (request.credentials === 'omit') {
                xhr.withCredentials = false;
            }
            if ('responseType' in xhr && support.blob) {
                xhr.responseType = 'blob';
            }
            request.headers.forEach(function (value, name) {
                xhr.setRequestHeader(name, value);
            });
            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
        });
    };
    self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var analytics = __webpack_require__(103);
var objectassign_1 = __webpack_require__(124);
var utils_1 = __webpack_require__(125);
var SimpleAPI = (function () {
    function SimpleAPI() {
    }
    SimpleAPI.prototype.init = function (token, endpoint) {
        if (typeof token === 'undefined') {
            throw new Error("You must pass your token when you call 'init'");
        }
        if (typeof token === 'string') {
            endpoint = endpoint || analytics.Endpoints.default;
            this.client = new analytics.Client({
                token: token,
                endpoint: endpoint
            });
        }
        else if (typeof token === 'object' && typeof token.sendEvent !== 'undefined') {
            this.client = token;
        }
        else {
            throw new Error("You must pass either your token or a valid object when you call 'init'");
        }
    };
    SimpleAPI.prototype.send = function (event, customData) {
        if (typeof this.client == 'undefined') {
            throw new Error("You must call init before sending an event");
        }
        customData = objectassign_1.default({}, {
            hash: window.location.hash
        }, customData);
        switch (event) {
            case 'pageview':
                this.client.sendViewEvent({
                    location: window.location.toString(),
                    referrer: document.referrer,
                    language: document.documentElement.lang,
                    title: document.title,
                    contentIdKey: utils_1.popFromObject(customData, 'contentIdKey'),
                    contentIdValue: utils_1.popFromObject(customData, 'contentIdValue'),
                    contentType: utils_1.popFromObject(customData, 'contentType'),
                    anonymous: utils_1.popFromObject(customData, 'anonymous'),
                    customData: customData
                });
                return;
            default:
                throw new Error("Event type: '" + event + "' not implemented");
        }
    };
    SimpleAPI.prototype.onLoad = function (callback) {
        if (typeof callback == 'undefined') {
            throw new Error("You must pass a function when you call 'onLoad'");
        }
        callback();
    };
    return SimpleAPI;
}());
exports.SimpleAPI = SimpleAPI;
var simpleAPI = new SimpleAPI();
exports.SimpleAnalytics = function (action) {
    var params = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
    }
    var actionFunction = simpleAPI[action];
    if (actionFunction) {
        return actionFunction.apply(simpleAPI, params);
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.SimpleAnalytics;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwnProperty = Object.prototype.hasOwnProperty;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
var objectAssignPonyfill = function (target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var output = Object(target);
    sources.forEach(function (source) {
        var from = Object(source);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                output[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            var symbols = getOwnPropertySymbols(from);
            symbols.forEach(function (symbol) {
                if (propIsEnumerable.call(from, symbol)) {
                    output[symbol] = from[symbol];
                }
            });
        }
    });
    return output;
};
exports.ponyfill = objectAssignPonyfill;
exports.assign = typeof Object.assign === 'function' ? Object.assign : objectAssignPonyfill;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.assign;


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function popFromObject(object, key) {
    if (object) {
        var value = object[key];
        delete object[key];
        return value;
    }
}
exports.popFromObject = popFromObject;


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.doNotTrack = [true, 'yes', '1'].indexOf(navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.doNotTrack;


/***/ }),

/***/ 138:
/***/ (function(module) {

module.exports = JSON.parse("{\"SetupOrgTitle\":{\"en\":\"Set up a Coveo Organization\"},\"SetupOrgDescription\":{\"en\":\"Link Coveo for Salesforce to your new or existing Coveo Organization\"},\"SetupOrgAlreadySetupTitle\":{\"en\":\"Use an existing Coveo Organization\"},\"SetupOrgAlreadySetupCloud\":{\"en\":\"Already have a Coveo Cloud Organization?\"},\"SetupOrgAlreadySetupOnPrem\":{\"en\":\"Already have an on-premises Coveo setup?\"},\"SetupOrgCreateNewOrgTitle\":{\"en\":\"Create a new Coveo Cloud Organization\"},\"SetupOrgChooseNameTitle\":{\"en\":\"Choose the name of the Coveo Organization to create:\"},\"SetupOrgChooseSalesforceContentTitle\":{\"en\":\"Select the Salesforce content to make searchable\"},\"SetupOrgCreateOrgDescription\":{\"en\":\"You will be prompted to grant the Coveo Platform access to your Salesforce organization.<br/>Once access is granted, the Coveo Platform will connect to your Salesforce organization and index your content.\"},\"SetupOrgCreateOrgTitle\":{\"en\":\"Create Organization\"},\"SetupOrgCreateIndexlessTitle\":{\"en\":\"Create Indexless Organization\"},\"SetupOrgLinkOnPremiseMasterUrl\":{\"en\":\"Coveo Master Server URL\"},\"SetupOrgLinkOnPremiseButton\":{\"en\":\"Link your on-premise setup\"},\"SetupOrgLinkCloudButton\":{\"en\":\"Link your Coveo Organization\"},\"SetupOrgLinkCloudDescription\":{\"en\":\"When you click <b>LINK YOUR COVEO ORGANIZATION</b>, you will be prompted to log in and authorize the Coveo Salesforce Integration to communicate with your Coveo Cloud Organization.\"},\"SetupOrgLinkOnPremiseError\":{\"en\":\"Coveo Master Server URL is required\"},\"SetupOrgLinkOnPremisePlaceholder\":{\"en\":\"http://myserver.com:8080 (base URL with the REST search API port without the path /rest/search)\"},\"SetupOrgNameEmptyError\":{\"en\":\"Please choose an Organization name\"},\"IndexContentTitle\":{\"en\":\"Index Content\"},\"IndexContentTitleBig\":{\"en\":\"Watch content being indexed!\"},\"IndexContentTitleDescription\":{\"en\":\"Your content is being indexed and therefore not yet searchable. When indexing is complete, an email will be sent to \"},\"IndexContentDescription\":{\"en\":\"Follow the indexing status of your content in the Coveo Organization\"},\"IndexContentContinueDescription\":{\"en\":\"All sources must have at least one document indexed\"},\"IndexContentSkipDescription\":{\"en\":\"Skip right away to Configure a Search Interface\"},\"ConfigureSearchPanelTitle\":{\"en\":\"Configure a Search Interface\"},\"ConfigureSearchPanelDescription\":{\"en\":\"Configure a search interface and view search results\"},\"ConfigureSearchPanelIntroTitle\":{\"en\":\"View your first search results!\"},\"ConfigureSearchPanelIntroDescription\":{\"en\":\"Use the Interface Editor to easily create and customize your first search page or Insight panel.\"},\"ConfigureSearchPanelEditorTitle\":{\"en\":\"Use the Interface Editor to easily create and customize your first search page or Insight panel.\"},\"ConfigureSearchPanelEditorSearchPage\":{\"en\":\"Configure a Coveo Search Page\"},\"ConfigureSearchPanelEditorSidePanel\":{\"en\":\"Configure a Coveo Insight Panel\"},\"ConfigureSearchPanelEditorHelpIntro\":{\"en\":\"More help available only a click away\"},\"ConfigureSearchPanelOnlineHelp\":{\"en\":\"Read our official product documentation\"},\"ConfigureSearchPanelDevelopers\":{\"en\":\"Read the documentation from our developers\"},\"ConfigureSearchPanelAnswers\":{\"en\":\"Find answers from our staff on our Q&A forum\"},\"ConfigurationViewCloudOrg\":{\"en\":\"View your Coveo Cloud Organization\"},\"ConfigurationSearchTitle\":{\"en\":\"Configure Search\"},\"ConfigurationExpandedLink\":{\"en\":\"Configure the Coveo Expanded Search Link\"},\"ConfigurationExpandedLinkTitle\":{\"en\":\"Configure the Coveo Expanded Search Link\"},\"ConfigurationExpandedLinkExplanation\":{\"en\":\"When a user clicks on the Coveo expanded search link, choose what opens:\"},\"ConfigurationExpandedLinkStandardExplanation\":{\"en\":\"Full featured Coveo for Salesforce search page.\"},\"ConfigurationExpandedLinkStandardButton\":{\"en\":\"Coveo Search Page\"},\"ConfigurationExpandedLinkCustomExplanation\":{\"en\":\"A custom access point such as an on-premises or Salesforce search page.\"},\"ConfigurationExpandedLinkCustomButton\":{\"en\":\"Custom Page (URL)\"},\"ConfigurationExpandedLinkCustomSFExplanation\":{\"en\":\"A Saleforce page that hosts a Coveo search page.\"},\"ConfigurationExpandedLinkCustomSFButton\":{\"en\":\"Salesforce Page\"},\"ConfigurationExpandedLinkDisableExplanation\":{\"en\":\"Disables and removes the Expand button. It will not appear in your interface\"},\"ConfigurationExpandedLinkDisableButton\":{\"en\":\"Disable Link\"},\"ConfigurationRelatedActionTitle\":{\"en\":\"Related Actions\"},\"ConfigAdvancedWarning\":{\"en\":\"Modifying these settings can negatively impact your content privacy.\"},\"CoveoAdvancedAdminFallbackExplanation\":{\"en\":\"When the JWT flow is not properly configured, fallback on admin identity:\"},\"AllowAdminFallback\":{\"en\":\"Allow (not secure)\"},\"DisallowAdminFallback\":{\"en\":\"Disallow\"},\"CoveoAdvancedProfileExplanation\":{\"en\":\"When a user makes a search query, use the following profile:\"},\"CoveoAdvancedObfuscateExplanation\":{\"en\":\"When a user makes a search query, send hashed information to the Cloud Organization:\"},\"CoveoAdvancedObfuscateFull\":{\"en\":\"Entire E-mail address\"},\"CoveoAdvancedObfuscateUsername\":{\"en\":\"E-mail username\"},\"CoveoAdvancedObfuscateNone\":{\"en\":\"Nothing\"},\"GotoFullSearch\":{\"en\":\"Full Search\"},\"GotoGettingStarted\":{\"en\":\"Getting Started\"},\"ResetYourConfiguration\":{\"en\":\"Reset Your Configuration\"},\"AdvancedConfiguration\":{\"en\":\"Advanced Configuration\"},\"AnonymousProfile\":{\"en\":\"Anonymous Profile\"},\"Querying User Profile\":{\"en\":\"Querying User Profile\"},\"Or\":{\"en\":\"Or\"},\"Close\":{\"en\":\"Close\"},\"SaveChanges\":{\"en\":\"Save Changes\"},\"Saved\":{\"en\":\"Saved!\"},\"SalesforceStandardObjects\":{\"en\":\"Salesforce standard objects\"},\"SalesforceKnowledgeBase\":{\"en\":\"Salesforce Knowledge Base\"},\"SalesforceContent\":{\"en\":\"Salesforce Content\"},\"Available\":{\"en\":\"Available\"},\"Sources\":{\"en\":\"Create index sources for\"},\"Source\":{\"en\":\"Source\"},\"Status\":{\"en\":\"Status\"},\"Documents\":{\"en\":\"Documents\"},\"ETA\":{\"en\":\"ETA\"},\"Continue\":{\"en\":\"Continue\"},\"Help\":{\"en\":\"Online Help\"},\"Developers\":{\"en\":\"Developers\"},\"Answers\":{\"en\":\"Answers\"},\"GoBack\":{\"en\":\"Go Back\"},\"UseUsageAnalyticsProxy\":{\"en\":\"Use usage analytics proxy\"},\"SecondsAgo\":{\"en\":\"seconds ago\"},\"MinutesAgo\":{\"en\":\"minutes ago\"},\"HoursAgo\":{\"en\":\"hours ago\"},\"DaysAgo\":{\"en\":\"days ago\"},\"MonthsAgo\":{\"en\":\"months ago\"},\"YearsAgo\":{\"en\":\"years ago\"},\"ERROR\":{\"en\":\"Source is in error...\"},\"INDEXING\":{\"en\":\"Indexing ...\"},\"IDLE\":{\"en\":\"Done indexing!\"},\"DELETING\":{\"en\":\"Source is being deleted...\"},\"CommunityStateManager\":{\"en\":\"Standalone Searchbox Options\"},\"CommunityStateManager_description\":{\"en\":\"This components handles Query options for the Standalone Searchbox.\"},\"CommunityStateManager_enableLowercaseOperators\":{\"en\":\"Enable lowercase operators\"},\"CommunityStateManager_enableLowercaseOperators_description\":{\"en\":\"Specifies whether the Coveo Platform interprets lowercase keywords such as or, and, near as query syntax operators. When false, the default, only uppercase keywords (such as: OR, AND, NEAR) are interpreted as operators. \"},\"CommunityStateManager_enablePartialMatch\":{\"en\":\"Enable partial match\"},\"CommunityStateManager_enablePartialMatch_description\":{\"en\":\"If true, a query containing a large number of keywords (see partialMatchKeywords) is automatically converted to a partial match expression in order to match documents containing only a subset of the keywords (see partialMatchThreshold for defining the subset) \"},\"CommunityStateManager_enableQuerySyntax\":{\"en\":\"Enable query syntax\"},\"CommunityStateManager_enableQuerySyntax_description\":{\"en\":\"Specifies whether the Coveo Platform does try to interpret special query syntax such as field references in the query entered through the query box. The default value is false.\"},\"CommunityStateManager_enableQuestionMarks\":{\"en\":\"Enable question marks\"},\"CommunityStateManager_enableQuestionMarks_description\":{\"en\":\"Specifies whether to recognize the question mark character (?) as a wildcard and in keywords and expand the query with possible matching keywords. \"},\"CommunityStateManager_enableWildcards\":{\"en\":\"Enable wildcards\"},\"CommunityStateManager_enableWildcards_description\":{\"en\":\"Specifies whether the Coveo Platform expands keywords containing wildcard characters (*) to the possible matching keywords to broaden the query. The default value is false.\"},\"CommunityStateManager_partialMatchKeywords\":{\"en\":\"Partial match query threshold\"},\"CommunityStateManager_partialMatchKeywords_description\":{\"en\":\"When partial match is enabled, specifies the minimum number of keywords that must be present in the query to activate the partial match. \"},\"CommunityStateManager_partialMatchThreshold\":{\"en\":\"Partial match result threshold\"},\"CommunityStateManager_partialMatchThreshold_description\":{\"en\":\"When partial match is enabled, specifies either an absolute or percentage value indicating the minimum number of keywords a document must contain in order to match the query. The default value is 50%.\"},\"SynchronizeYourConfiguration\":{\"en\":\"Synchronize your configuration\"}}");

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "AdminFallbackChoice", function() { return /* reexport */ AdminFallbackChoice; });
__webpack_require__.d(__webpack_exports__, "UserQueryProfileChoice", function() { return /* reexport */ UserQueryProfileChoice; });
__webpack_require__.d(__webpack_exports__, "UserObfuscateChoice", function() { return /* reexport */ UserObfuscateChoice; });
__webpack_require__.d(__webpack_exports__, "ConfigurationPanel", function() { return /* reexport */ configurationPanel_ConfigurationPanel; });
__webpack_require__.d(__webpack_exports__, "ConfigurationTelemetry", function() { return /* reexport */ ConfigurationTelemetry; });

// EXTERNAL MODULE: external "$"
var external_$_ = __webpack_require__(1);

// EXTERNAL MODULE: external "_"
var external_ = __webpack_require__(16);

// CONCATENATED MODULE: ./src/modules/configuration/ts/table.ejs
/* harmony default export */ var table = ("<table class=\"coveo-index-content-table\">\n    <thead>\n    <th><%= 'Source'.toLocaleString().toUpperCase() %></th>\n    <th><%= 'Status'.toLocaleString().toUpperCase() %></th>\n    <th><%= 'Documents'.toLocaleString().toUpperCase() %></th>\n    </thead>\n    <tbody>\n    <%\n    var timeDifference = function(previous) {\n\n        var msPerMinute = 60 * 1000;\n        var msPerHour = msPerMinute * 60;\n        var msPerDay = msPerHour * 24;\n        var msPerMonth = msPerDay * 30;\n        var msPerYear = msPerDay * 365;\n\n        var elapsed = new Date().getTime() - previous;\n\n        if (elapsed < msPerMinute) {\n            return Math.round(elapsed / 1000) + ' ' + 'SecondsAgo'.toLocaleString();\n        } else if (elapsed < msPerHour) {\n            return Math.round(elapsed / msPerMinute) + ' ' + 'MinutesAgo'.toLocaleString();\n        } else if (elapsed < msPerDay) {\n            return Math.round(elapsed / msPerHour) + ' ' + 'HoursAgo'.toLocaleString();\n        } else if (elapsed < msPerMonth) {\n            return Math.round(elapsed / msPerDay) + ' ' + 'DaysAgo'.toLocaleString();\n        } else if (elapsed < msPerYear) {\n            return Math.round(elapsed / msPerMonth) + ' ' + 'MonthsAgo'.toLocaleString();\n        } else {\n            return Math.round(elapsed / msPerYear) + ' ' + 'YearsAgo'.toLocaleString();\n        }\n    };\n\n    _.each(tableRows, function (tr) {\n        var status = 'IDLE'.toLocaleString();\n        var cssClass = '';\n        if (tr.isIndexing) {\n            status = 'INDEXING'.toLocaleString();\n            cssClass = 'coveo-indexing';\n        }\n        if (tr.isFinished) {\n            cssClass = 'coveo-finished';\n        }\n        if (tr.isError) {\n            status = 'ERROR'.toLocaleString();\n            cssClass = 'coveo-in-error';\n        }\n\n        var lastUpdate = '';\n        if (tr.lastUpdate != 0) {\n            lastUpdate = timeDifference(tr.lastUpdate);\n        }\n\n        print('<tr class=\"' + cssClass + '\">');\n        print('<td>' + _.escape(tr.name) + '</td>');\n        print('<td class=\"coveo-status-cell\">' + status + '<br/><span class=\"coveo-last-update\">' + lastUpdate + '</span>' + (tr.isError ? '<br/><a href=\"' + platformUri + '\">Go to Coveo administration tool</a>' : '' ) + '</td>');\n        print('<td>' + _.escape(tr.numberOfDocuments.toString()) + '</td>');\n        print('<tr>')\n    });\n    %>\n    </tbody>\n</table>");
// CONCATENATED MODULE: ./src/modules/configuration/ts/tableWaiting.ejs
/* harmony default export */ var tableWaiting = ("<table class=\"coveo-index-content-table\">\n    <thead>\n    <th><%= 'Source'.toLocaleString().toUpperCase() %></th>\n    <th><%= 'Status'.toLocaleString().toUpperCase() %></th>\n    <th><%= 'Documents'.toLocaleString().toUpperCase() %></th>\n    </thead>\n    <tbody>\n\n    <tr>\n        <td colspan=\"3\">\n            <div class=\"coveo-waiting-big-spinner\">\n                <div class=\"coveo-waiting-big-spinner-mask\"></div>\n            </div>\n        </td>\n    </tr>\n    </tbody>\n</table>\n\n\n");
// CONCATENATED MODULE: ./src/modules/configuration/ts/StandaloneIndexContent.ts




var StandaloneIndexContent_StandaloneIndexContent = /** @class */ (function () {
    function StandaloneIndexContent(element, baseResourcesUrl, platformUri) {
        this.element = element;
        this.baseResourcesUrl = baseResourcesUrl;
        this.platformUri = platformUri;
    }
    StandaloneIndexContent.prototype.setSourcesStatus = function (status) {
        if (status && status.length != 0) {
            if (this.tableSection) {
                this.tableSection.remove();
            }
            this.tableSection = external_$_(external_["template"](table)({ tableRows: status, platformUri: this.platformUri })).appendTo(this.element);
        }
    };
    StandaloneIndexContent.prototype.prepareRefresh = function () {
        if (!this.tableSection) {
            this.tableSection = external_$_(external_["template"](tableWaiting)({ baseResourcesUrl: this.baseResourcesUrl })).appendTo(this.element);
        }
    };
    return StandaloneIndexContent;
}());


// EXTERNAL MODULE: ./src/modules/common/ts/Toast.ts + 1 modules
var Toast = __webpack_require__(120);

// CONCATENATED MODULE: ./src/modules/configuration/ts/relatedActions.ejs
/* harmony default export */ var relatedActions = ("<div class=\"coveo-related-actions\">\n  <div class=\"coveo-related-actions-title coveo-title-big\">\n    <%= 'ConfigurationRelatedActionTitle'.toLocaleString() %>\n  </div>\n  <a id=\"btn-full-search\" class=\"coveo-button\" href=\"<%= searchPageUrl %>\">\n    <img width=\"10px\" height=\"10px\" src=\"<%= baseResourcesUrl %>/legacy/img/configuration/icon_external.png\" />\n    <span>\n      <%= 'GotoFullSearch'.toLocaleString() %>\n    </span>\n  </a>\n  <a class=\"coveo-button coveo-health-check-button\" style=\"display:none;\">\n    <span>Health Check</span>\n  </a>\n  <a id=\"btn-source-status\" class=\"coveo-button coveo-source-status\" style=\"display:none;\">\n    <span>Coveo Source Status</span>\n  </a>\n  <a id=\"btn-getting-started\" class=\"coveo-button\" href=\"<%= gettingStartedUrl %>\">\n    <img width=\"10px\" height=\"10px\" src=\"<%= baseResourcesUrl %>/legacy/img/configuration/icon_external.png\" />\n    <span>\n      <%= 'GotoGettingStarted'.toLocaleString() %>\n    </span>\n  </a>\n  <a id=\"btn-reset-config\" class=\"coveo-button coveo-reset-configuration\">\n    <img width=\"10px\" height=\"10px\" src=\"<%= baseResourcesUrl %>/legacy/img/configuration/icon_external.png\" />\n    <span>\n      <%= 'ResetYourConfiguration'.toLocaleString() %>\n    </span>\n  </a>\n  <a id=\"btn-synchronize-config\" class=\"coveo-button coveo-synchronize-configuration\">\n    <img width=\"10px\" height=\"10px\" src=\"<%= baseResourcesUrl %>/legacy/img/configuration/icon_external.png\" />\n    <span>\n      <%= 'SynchronizeYourConfiguration'.toLocaleString() %>\n    </span>\n  </a>\n  <a id=\"btn-advanced-config\" class=\"coveo-button coveo-right-arrow coveo-configure-advanced-button\">\n    <span>\n      <%= 'AdvancedConfiguration'.toLocaleString() %>\n    </span>\n  </a>\n</div>\n");
// CONCATENATED MODULE: ./src/modules/configuration/ts/searchConfiguration.ejs
/* harmony default export */ var searchConfiguration = ("<div class=\"coveo-configure-search-panel\">\n    <div class=\"coveo-configuration-search-title coveo-title-big\"><%= 'ConfigurationSearchTitle'.toLocaleString() %></div>\n    <div class=\"coveo-configure-wrapper\">\n\n        <div class=\"coveo-configure-side-by-side coveo-configure-search\">\n            <div class=\"coveo-configure-search-image\">\n                <img src=\"<%= baseResourcesUrl %>/legacy/img/configuration/img-fullsearch@2x.png\"/>\n            </div>\n            <a id=\"btn-configure-search-page\" class=\"coveo-configure-search-button coveo-button\" href=\"<%= searchPageConfigurationUrl %>\" target=\"_blank\">\n                <img width=\"10px\" height=\"10px\" src=\"<%= baseResourcesUrl %>/legacy/img/configuration/icon_external.png\" />\n                <%= 'ConfigureSearchPanelEditorSearchPage'.toLocaleString() %>\n            </a>\n        </div>\n\n        <div class=\"coveo-configure-side-by-side coveo-configure-panel\">\n\n            <div class=\"coveo-configure-search-image\">\n                <img src=\"<%= baseResourcesUrl %>/legacy/img/configuration/img-insightpanel@2x.png\"/>\n            </div>\n            <a id=\"btn-configure-insight-panel\" class=\"coveo-configure-panel-button coveo-button\" href=\"<%= panelConfigurationUrl %>\" target=\"_blank\">\n                <img width=\"10px\" height=\"10px\" src=\"<%= baseResourcesUrl %>/legacy/img/configuration/icon_external.png\" />\n                <%= 'ConfigureSearchPanelEditorSidePanel'.toLocaleString() %>\n            </a>\n        </div>\n    </div>\n</div>\n");
// CONCATENATED MODULE: ./src/modules/configuration/ts/sourceStatus.ejs
/* harmony default export */ var sourceStatus = ("<div class='configuration-monitor-sources'></div>");
// CONCATENATED MODULE: ./src/modules/configuration/ts/advanced.ejs
/* harmony default export */ var advanced = ("<div class=\"coveo-advanced\">\n    <div id=\"btn-close-advanced\" class=\"coveo-advanced-close coveo-title-medium\"><%= 'Close'.toLocaleString() %><span\n                class=\"coveo-advanced-close-x\">X</span></div>\n    <div class=\"coveo-title-big coveo-advanced-title\"><%= 'AdvancedConfiguration'.toLocaleString() %></div>\n\n    <div class=\"coveo-admin-fallback\">\n        <div class=\"coveo-title-medium\">\n            <%= 'CoveoAdvancedAdminFallbackExplanation'.toLocaleString() %>\n        </div>\n        <div>\n            <div class=\"coveo-configuration-button coveo-configuration-allow-admin-fallback\"><%= 'AllowAdminFallback'.toLocaleString() %></div>\n            <div class=\"coveo-configuration-button coveo-configuration-disallow-admin-fallback\"><%= 'DisallowAdminFallback'.toLocaleString() %></div>\n        </div>\n    </div>\n\n    <div class=\"coveo-user-profile\">\n        <div class=\"coveo-title-medium\">\n            <%= 'CoveoAdvancedProfileExplanation'.toLocaleString() %>\n        </div>\n        <div>\n            <div id=\"btn-anonymous-profile-advanced\" class=\"coveo-configuration-button coveo-configuration-anonymous-profile\"><%= 'AnonymousProfile'.toLocaleString() %></div>\n            <div id=\"btn-querying-profile-advanced\" class=\"coveo-configuration-button coveo-configuration-standard-profile\"><%= 'QueryingUserProfile'.toLocaleString() %></div>\n        </div>\n    </div>\n\n    <div class=\"coveo-user-obfuscate\">\n        <div class=\"coveo-title-medium\">\n            <%= 'CoveoAdvancedObfuscateExplanation'.toLocaleString() %>\n        </div>\n        <div>\n            <div id=\"btn-entire-email-advanced\" class=\"coveo-configuration-button coveo-configuration-full-obfuscate\"><%= 'CoveoAdvancedObfuscateFull'.toLocaleString() %></div>\n            <div id=\"btn-email-username-advanced\" class=\"coveo-configuration-button coveo-configuration-username-obfuscate\"><%= 'CoveoAdvancedObfuscateUsername'.toLocaleString() %></div>\n            <div id=\"btn-nothing-advanced\" class=\"coveo-configuration-button coveo-configuration-no-obfuscate\"><%= 'CoveoAdvancedObfuscateNone'.toLocaleString() %></div>\n        </div>\n    </div>\n\n    <div>\n        <div class=\"coveo-title-medium\">\n            When a user makes a search query, contact the Coveo Cloud using this endpoint: <a target=\"_blanc\" href=\"https://docs.coveo.com/en/2976#configuration\">(?)</a>\n        </div>\n        <div>\n            <input id=\"client-uri\" placeholder=\"Ex. https://mycompany.cloud.coveo.com\"/>\n        </div>\n    </div>\n    <div class=\"coveo-title-medium coveo-advanced-warning\"><%= 'ConfigAdvancedWarning'.toLocaleString() %></div>\n    <div id=\"btn-save-advanced\" class=\"coveo-configure-save\"><span class='coveo-save-checkmark'>&#10004;</span> <%= 'SaveChanges'.toLocaleString() %></div>\n</div>");
// CONCATENATED MODULE: ./src/modules/configuration/ts/configurationPanel.ts








var AdminFallbackChoice;
(function (AdminFallbackChoice) {
    AdminFallbackChoice[AdminFallbackChoice["ALLOW"] = 0] = "ALLOW";
    AdminFallbackChoice[AdminFallbackChoice["DISALLOW"] = 1] = "DISALLOW";
})(AdminFallbackChoice || (AdminFallbackChoice = {}));
var UserQueryProfileChoice;
(function (UserQueryProfileChoice) {
    UserQueryProfileChoice[UserQueryProfileChoice["ANONYMOUS"] = 0] = "ANONYMOUS";
    UserQueryProfileChoice[UserQueryProfileChoice["STANDARD"] = 1] = "STANDARD";
})(UserQueryProfileChoice || (UserQueryProfileChoice = {}));
var UserObfuscateChoice;
(function (UserObfuscateChoice) {
    UserObfuscateChoice[UserObfuscateChoice["FULL"] = 0] = "FULL";
    UserObfuscateChoice[UserObfuscateChoice["USERNAMEONLY"] = 1] = "USERNAMEONLY";
    UserObfuscateChoice[UserObfuscateChoice["NONE"] = 2] = "NONE";
})(UserObfuscateChoice || (UserObfuscateChoice = {}));
var configurationPanel_ConfigurationPanel = /** @class */ (function () {
    function ConfigurationPanel(element, options, saleforceContext) {
        var _this = this;
        this.element = element;
        this.options = options;
        this.saleforceContext = saleforceContext;
        this.adminFallbackChoiceButton = {
            ALLOW: {
                selected: false,
                element: undefined,
                choice: AdminFallbackChoice.ALLOW,
            },
            DISALLOW: {
                selected: false,
                element: undefined,
                choice: AdminFallbackChoice.DISALLOW,
            },
        };
        this.userQueryProfileChoiceButton = {
            ANONYMOUS: {
                selected: false,
                element: undefined,
                choice: UserQueryProfileChoice.ANONYMOUS,
            },
            STANDARD: {
                selected: false,
                element: undefined,
                choice: UserQueryProfileChoice.STANDARD,
            },
        };
        this.userObfuscateChoiceButton = {
            FULL: {
                selected: false,
                element: undefined,
                choice: UserObfuscateChoice.FULL,
            },
            USERNAMEONLY: {
                selected: false,
                element: undefined,
                choice: UserObfuscateChoice.USERNAMEONLY,
            },
            NONE: {
                selected: false,
                element: undefined,
                choice: UserObfuscateChoice.NONE,
            },
        };
        this.options = external_["extend"](ConfigurationPanel.defaultOptions, options);
        this.toastManager = new Toast["a" /* ToastManager */](element.get(0));
        this.configurationSearchSection = external_$_(external_["template"](searchConfiguration)(this.options)).appendTo(this.element);
        external_$_(this.element).find('.coveo-configure-panel').toggle(!this.options.indexless);
        this.relatedActionSection = external_$_(external_["template"](relatedActions)(this.options)).appendTo(this.element);
        this.relatedActionSection.find('.coveo-reset-configuration').click(function () {
            _this.options.onResetConfig();
        });
        var synchronizeConfigurationButton = this.relatedActionSection.find('.coveo-synchronize-configuration');
        synchronizeConfigurationButton.click(function () {
            // Disable the button till the synchronize has been completed or failed.
            synchronizeConfigurationButton.addClass('disabled');
            _this.saleforceContext.syncSettings(function (response, event) {
                if (event.status && response) {
                    _this.toastManager.createToast({
                        title: 'Configuration synchronized.',
                        displayTime: 5000,
                    });
                }
                else {
                    _this.toastManager.createToast({
                        title: 'Cannot refesh the status.',
                        modifiers: { style: Toast["b" /* ToastModStyle */].Error },
                        displayTime: 5000,
                    });
                }
                // To further reduce the button jamming wait 200ms more after the toast has been created.
                setTimeout(function () {
                    synchronizeConfigurationButton.removeClass('disabled');
                }, 200);
            });
        });
        this.buildAdvancedConfigSection();
        this.hideAll();
        this.sourceStatusSection = external_$_('<div class="coveo-source-status-section">')
            .hide()
            .append(external_["template"](sourceStatus)())
            .appendTo(this.element);
        this.relatedActionSection
            .find('.coveo-configure-advanced-button')
            .click(this.clickToggleHandler(this.configurationAdvancedSection, PanelName.AdvancedConfiguration));
        if (!this.options.indexless) {
            this.standaloneIndexContent = new StandaloneIndexContent_StandaloneIndexContent(this.sourceStatusSection.children(':nth-child(1)'), this.options.baseResourcesUrl, this.options.platformUri);
            this.standaloneIndexContent.prepareRefresh();
            this.options.refreshStatus();
            setInterval(function () { return _this.options.refreshStatus(); }, 5000);
            this.relatedActionSection.find('.coveo-source-status').show();
            this.relatedActionSection
                .find('.coveo-source-status')
                .click(this.clickToggleHandler(this.sourceStatusSection, PanelName.CoveoSourceStatus));
            this.customPlatformUriInput = external_$_('#client-uri');
            this.customPlatformUriInput.val(this.options.customPlatformUri);
            this.customPlatformUriInput.on('keyup change', function () {
                _this.setNotSavedYet(_this.saveAdvancedButton);
            });
        }
        this.healthCheckSection = this.element.find('.coveo-health-check-panel').hide();
        /*
         * The section isn't there if we are linked to v1
         * Check if the salesforce org is linked to a coveo non-enteprise edition
         */
        if (this.options.indexless && this.healthCheckSection[0] != null) {
            this.healthCheckSection.detach().appendTo(this.element);
            this.relatedActionSection.find('.coveo-health-check-button').show();
            this.relatedActionSection
                .find('.coveo-health-check-button')
                .click(this.clickToggleHandler(this.healthCheckSection, PanelName.HealthCheck));
        }
        else {
            this.healthCheckSection.remove();
        }
    }
    ConfigurationPanel.prototype.clickToggleHandler = function (button, panelName) {
        var _this = this;
        return function () {
            if (button.is(':visible')) {
                _this.hideAll();
            }
            else {
                _this.show(panelName);
            }
        };
    };
    ConfigurationPanel.prototype.hideAll = function () {
        if (this.configurationAdvancedSection != null) {
            this.relatedActionSection.find('.coveo-configure-advanced-button').removeClass('active');
            this.configurationAdvancedSection.hide();
        }
        if (this.sourceStatusSection != null) {
            this.relatedActionSection.find('.coveo-source-status').removeClass('active');
            this.sourceStatusSection.hide();
        }
        if (this.healthCheckSection != null) {
            this.relatedActionSection.find('.coveo-health-check-button').removeClass('active');
            this.healthCheckSection.hide();
        }
    };
    ConfigurationPanel.prototype.show = function (panel) {
        this.hideAll();
        switch (panel) {
            case PanelName.AdvancedConfiguration:
                this.relatedActionSection.find('.coveo-configure-advanced-button').addClass('active');
                this.configurationAdvancedSection.show();
                break;
            case PanelName.CoveoSourceStatus:
                this.relatedActionSection.find('.coveo-source-status').addClass('active');
                this.sourceStatusSection.show();
                break;
            case PanelName.HealthCheck:
                this.relatedActionSection.find('.coveo-health-check-button').addClass('active');
                this.healthCheckSection.show();
                break;
        }
    };
    ConfigurationPanel.prototype.hideSourceStatusSection = function (hide) {
        hide ? this.sourceStatusSection.children().hide() : this.sourceStatusSection.children().show();
    };
    ConfigurationPanel.prototype.setSourcesStatus = function (sources) {
        if (this.standaloneIndexContent) {
            this.standaloneIndexContent.setSourcesStatus(sources);
        }
    };
    ConfigurationPanel.prototype.setAsAlreadySelectedAdminFallback = function (choice) {
        this.setAsSelectedAdminFallbackConfig(choice);
        this.setNotSavedYet(this.saveAdvancedButton);
    };
    ConfigurationPanel.prototype.setAsAlreadySelectedQueryProfile = function (choice) {
        this.setAsSelectedProfileConfig(choice);
        this.setNotSavedYet(this.saveAdvancedButton);
    };
    ConfigurationPanel.prototype.setAsAlreadySelectedObfuscate = function (choice) {
        this.setAsSelectedObfuscateConfig(choice);
        this.setNotSavedYet(this.saveAdvancedButton);
    };
    ConfigurationPanel.prototype.setAsSelectedAdminFallbackConfig = function (choice) {
        external_["each"](this.adminFallbackChoiceButton, function (btn) {
            btn.element.removeClass('coveo-selected');
            btn.selected = false;
        });
        this.adminFallbackChoiceButton[AdminFallbackChoice[choice]].element.addClass('coveo-selected');
        this.adminFallbackChoiceButton[AdminFallbackChoice[choice]].selected = true;
        this.setNotSavedYet(this.saveAdvancedButton);
    };
    ConfigurationPanel.prototype.setAsSelectedProfileConfig = function (choice) {
        external_["each"](this.userQueryProfileChoiceButton, function (btn) {
            btn.element.removeClass('coveo-selected');
            btn.selected = false;
        });
        this.userQueryProfileChoiceButton[UserQueryProfileChoice[choice]].element.addClass('coveo-selected');
        this.userQueryProfileChoiceButton[UserQueryProfileChoice[choice]].selected = true;
        this.setNotSavedYet(this.saveAdvancedButton);
    };
    ConfigurationPanel.prototype.setAsSelectedObfuscateConfig = function (choice) {
        external_["each"](this.userObfuscateChoiceButton, function (btn) {
            btn.element.removeClass('coveo-selected');
            btn.selected = false;
        });
        this.userObfuscateChoiceButton[UserObfuscateChoice[choice]].element.addClass('coveo-selected');
        this.userObfuscateChoiceButton[UserObfuscateChoice[choice]].selected = true;
        this.setNotSavedYet(this.saveAdvancedButton);
    };
    ConfigurationPanel.prototype.buildAdvancedConfigSection = function () {
        var _this = this;
        this.configurationAdvancedSection = external_$_(external_["template"](advanced)(this.options)).appendTo(this.element);
        external_$_(this.element).find('.coveo-admin-fallback').toggle(this.options.indexless);
        external_$_(this.element).find('.coveo-user-profile').toggle(!this.options.indexless);
        external_$_(this.element)
            .find('.coveo-user-obfuscate')
            .toggle(!this.options.indexless && !this.options.onPremises);
        this.saveAdvancedButton = this.configurationAdvancedSection.find('.coveo-configure-save');
        var buttonsForAdminFallback = external_["map"](this.configurationAdvancedSection.find('.coveo-admin-fallback .coveo-configuration-button'), function (btn) {
            return external_$_(btn);
        });
        var buttonsForQueryProfile = external_["map"](this.configurationAdvancedSection.find('.coveo-user-profile .coveo-configuration-button'), function (btn) {
            return external_$_(btn);
        });
        var buttonsForObfuscate = external_["map"](this.configurationAdvancedSection.find('.coveo-user-obfuscate .coveo-configuration-button'), function (btn) {
            return external_$_(btn);
        });
        external_["each"](buttonsForAdminFallback, function (button) {
            _this.adminFallbackChoiceButton[_this.fromClassToButton(button)].element = button;
            button.click(function () {
                _this.setAsSelectedAdminFallbackConfig(AdminFallbackChoice[_this.fromClassToButton(button)]);
            });
        });
        external_["each"](buttonsForQueryProfile, function (button) {
            _this.userQueryProfileChoiceButton[_this.fromClassToButton(button)].element = button;
            button.click(function () {
                _this.setAsSelectedProfileConfig(UserQueryProfileChoice[_this.fromClassToButton(button)]);
            });
        });
        external_["each"](buttonsForObfuscate, function (button) {
            _this.userObfuscateChoiceButton[_this.fromClassToButton(button)].element = button;
            button.click(function () {
                _this.setAsSelectedObfuscateConfig(UserObfuscateChoice[_this.fromClassToButton(button)]);
            });
        });
        this.saveAdvancedButton.click(function () {
            var _a, _b;
            var adminFallbackSelection = external_["find"](_this.adminFallbackChoiceButton, function (choice) {
                return choice.selected;
            });
            var userQueryProfileSelection = external_["find"](_this.userQueryProfileChoiceButton, function (choice) {
                return choice.selected;
            });
            var userObfuscateSelection = external_["find"](_this.userObfuscateChoiceButton, function (choice) {
                return choice.selected;
            });
            _this.options.onSaveAdvancedConfig(adminFallbackSelection.choice == AdminFallbackChoice.ALLOW, userQueryProfileSelection.choice == UserQueryProfileChoice.STANDARD, _this.fromObfuscationEnumToString(userObfuscateSelection.choice), _this.options.indexless ? '' : ((_b = (_a = _this.customPlatformUriInput) === null || _a === void 0 ? void 0 : _a.val()) === null || _b === void 0 ? void 0 : _b.toString()) || '');
            _this.setSaved(_this.saveAdvancedButton);
        });
        this.configurationAdvancedSection.find('.coveo-advanced-close').click(function () { return _this.hideAll(); });
    };
    ConfigurationPanel.prototype.fromClassToButton = function (button) {
        if (button.hasClass('coveo-configuration-allow-admin-fallback')) {
            return AdminFallbackChoice[AdminFallbackChoice.ALLOW];
        }
        if (button.hasClass('coveo-configuration-disallow-admin-fallback')) {
            return AdminFallbackChoice[AdminFallbackChoice.DISALLOW];
        }
        if (button.hasClass('coveo-configuration-anonymous-profile')) {
            return UserQueryProfileChoice[UserQueryProfileChoice.ANONYMOUS];
        }
        if (button.hasClass('coveo-configuration-standard-profile')) {
            return UserQueryProfileChoice[UserQueryProfileChoice.STANDARD];
        }
        if (button.hasClass('coveo-configuration-full-obfuscate')) {
            return UserObfuscateChoice[UserObfuscateChoice.FULL];
        }
        if (button.hasClass('coveo-configuration-username-obfuscate')) {
            return UserObfuscateChoice[UserObfuscateChoice.USERNAMEONLY];
        }
        if (button.hasClass('coveo-configuration-no-obfuscate')) {
            return UserObfuscateChoice[UserObfuscateChoice.NONE];
        }
    };
    ConfigurationPanel.prototype.setNotSavedYet = function (saveButton) {
        saveButton.addClass('coveo-not-saved-yet');
        saveButton.removeClass('coveo-saved');
        saveButton.text('Not saved');
        saveButton.html(this.getSaveButtonContent(false));
    };
    ConfigurationPanel.prototype.setSaved = function (saveButton) {
        saveButton.addClass('coveo-saved');
        saveButton.removeClass('coveo-not-saved-yet');
        saveButton.html(this.getSaveButtonContent(true));
    };
    ConfigurationPanel.prototype.getSaveButtonContent = function (saved) {
        var text = saved ? 'Saved'.toLocaleString() : 'SaveChanges'.toLocaleString();
        return '<span class="coveo-save-checkmark">&#10004;</span> ' + text;
    };
    ConfigurationPanel.prototype.fromObfuscationEnumToString = function (obfuscation) {
        if (obfuscation == UserObfuscateChoice.FULL) {
            return 'ObfuscateAll';
        }
        else if (obfuscation == UserObfuscateChoice.USERNAMEONLY) {
            return 'ObfuscatePreAt';
        }
        return 'DoNotObfuscate';
    };
    ConfigurationPanel.defaultOptions = {
        baseResourcesUrl: '',
        refreshStatus: function () { },
        onSaveAdvancedConfig: function (allowAdminFallback, useGuestEmail, obfuscationLevel, customPlatformUri) {
            console.log(allowAdminFallback, useGuestEmail, obfuscationLevel, customPlatformUri);
        },
        searchPageConfigurationUrl: 'https://onlinehelp.coveo.com',
        panelConfigurationUrl: 'https://onlinehelp.coveo.com',
        searchPageUrl: 'https://onlinehelp.coveo.com',
        gettingStartedUrl: 'https://onlinehelp.coveo.com',
        onResetConfig: function () {
            console.log('resetting');
        },
        indexless: false,
        onPremises: false,
        platformUri: 'https://cloud.coveo.com',
        customPlatformUri: '',
    };
    return ConfigurationPanel;
}());

var PanelName;
(function (PanelName) {
    PanelName[PanelName["CoveoSourceStatus"] = 0] = "CoveoSourceStatus";
    PanelName[PanelName["HealthCheck"] = 1] = "HealthCheck";
    PanelName[PanelName["AdvancedConfiguration"] = 2] = "AdvancedConfiguration";
})(PanelName || (PanelName = {}));

// EXTERNAL MODULE: ./src/modules/telemetry/Telemetry.ts + 1 modules
var Telemetry = __webpack_require__(114);

// CONCATENATED MODULE: ./src/modules/configuration/ts/ConfigurationTelemetry.ts
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
 * Extension of the Telemetry class containing configuration data for the Configuration page's tracked elements.
 */
var ConfigurationTelemetry = /** @class */ (function (_super) {
    __extends(ConfigurationTelemetry, _super);
    function ConfigurationTelemetry(salesforceContext) {
        return _super.call(this, salesforceContext, ConfigurationTelemetry.eventType, ConfigurationTelemetry.elementData) || this;
    }
    ConfigurationTelemetry.eventType = 'gettingStarted';
    ConfigurationTelemetry.elementData = [
        {
            elementID: 'btn-current-org',
            eventValue: 'currentOrgButton',
            section1: '',
            section2: '',
        },
        {
            elementID: 'btn-full-search',
            eventValue: 'fullSearchButton',
            section1: '',
            section2: '',
        },
        {
            elementID: 'btn-source-status',
            eventValue: 'coveoSourceStatusButton',
            section1: '',
            section2: '',
        },
        {
            elementID: 'btn-getting-started',
            eventValue: 'gettingStartedButton',
            section1: '',
            section2: '',
        },
        {
            elementID: 'btn-reset-config',
            eventValue: 'resetYourConfigurationButton',
            section1: '',
            section2: '',
        },
        {
            elementID: 'btn-synchronize-config',
            eventValue: 'synchronizeYourConfigurationButton',
            section1: '',
            section2: '',
        },
        {
            elementID: 'btn-advanced-config',
            eventValue: 'advancedConfigurationButton',
            section1: '',
            section2: '',
        },
        {
            elementID: 'btn-close-advanced',
            eventValue: 'closeButton',
            section1: 'advancedConfiguration',
            section2: '',
        },
        {
            elementID: 'btn-anonymous-profile-advanced',
            eventValue: 'anonymousProfileSelect',
            section1: 'advancedConfiguration',
            section2: 'profile',
        },
        {
            elementID: 'btn-querying-profile-advanced',
            eventValue: 'queryingUserProfileSelect',
            section1: 'advancedConfiguration',
            section2: 'profile',
        },
        {
            elementID: 'btn-enable-advanced',
            eventValue: 'enableSelect',
            section1: 'advancedConfiguration',
            section2: 'globalDNS',
        },
        {
            elementID: 'btn-disable-advanced',
            eventValue: 'disableSelect',
            section1: 'advancedConfiguration',
            section2: 'globalDNS',
        },
        {
            elementID: 'btn-entire-email-advanced',
            eventValue: 'entireEmailAddressSelect',
            section1: 'advancedConfiguration',
            section2: 'hashingOptions',
        },
        {
            elementID: 'btn-email-username-advanced',
            eventValue: 'emailUsernameSelect',
            section1: 'advancedConfiguration',
            section2: 'hashingOptions',
        },
        {
            elementID: 'btn-nothing-advanced',
            eventValue: 'nothingSelect',
            section1: 'advancedConfiguration',
            section2: 'hashingOptions',
        },
        {
            elementID: 'btn-save-advanced',
            eventValue: 'saveChangesButton',
            section1: 'advancedConfiguration',
            section2: '',
        },
        {
            elementID: 'btn-configure-search-page',
            eventValue: 'configureCoveoSearchPageButton',
            section1: '',
            section2: '',
        },
        {
            elementID: 'btn-configure-insight-panel',
            eventValue: 'configureCoveoInsightPanelButton',
            section1: '',
            section2: '',
        },
    ];
    return ConfigurationTelemetry;
}(Telemetry["a" /* Telemetry */]));


// EXTERNAL MODULE: ./src/utils/Translation.ts
var Translation = __webpack_require__(6);

// EXTERNAL MODULE: ./src/modules/configuration/strings.json
var strings = __webpack_require__(138);
var strings_namespaceObject = /*#__PURE__*/__webpack_require__.t(strings, 2);

// CONCATENATED MODULE: ./src/modules/configuration/ts/index.ts


// Load strings
String['locale'] = 'en';


Translation["a" /* Translation */].merge('en', strings_namespaceObject);
window['String'].prototype.toLocaleString = function () {
    return String['locales'][String['locale']][this] || this;
};


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = _;

/***/ }),

/***/ 31:
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

/***/ 32:
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\"><path d=\"M.818 2.232L2.232.818l19.02 19.02-1.413 1.415z\"></path><path d=\"M.818 19.768L19.838.748l1.415 1.413L2.232 21.182z\"></path></svg>"

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = "<svg xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" viewBox=\"0 0 78.905 77.861\" enable-background=\"new 0 0 78.905 77.861\"><g transform=\"translate(0,-952.36218)\" id=\"g4\"><path d=\"m 71.828,957.626 c 8.674,7.675 9.487,20.969 1.813,29.643 l -37.107,41.941 c -1.098,1.241 -2.994,1.357 -4.235,0.259 -1.241,-1.098 -1.357,-2.994 -0.259,-4.235 l 37.107,-41.941 c 5.541,-6.263 4.968,-15.633 -1.295,-21.174 -6.263,-5.541 -15.633,-4.968 -21.174,1.295 l -38.433,43.439 c -3.338,3.773 -2.996,9.366 0.777,12.704 3.773,3.338 9.366,2.996 12.704,-0.777 l 29.100468,-33.05767 c 1.13279,-1.28683 0.800246,-3.29785 -0.259,-4.235 -1.059246,-0.93715 -3.099,-1.025 -4.235,0.259 0,0 -9.944868,9.86376 -18.793868,20.71177 -1.04,1.275 -3.505,4.666 -6.064,2.563 -2.657,-2.184 0.427,-5.30501 1.57,-6.53801 9.517,-10.268 18.793868,-20.71176 18.793868,-20.71176 3.269,-3.695 9.009,-4.046 12.704,-0.777 3.695,3.27 4.046,9.009 0.777,12.704 L 26.219,1022.756 c -5.472,6.185 -14.989,6.767 -21.174,1.295 -6.185,-5.472 -6.767,-14.989 -1.295,-21.174 l 38.432,-43.439 c 7.678,-8.673 20.972,-9.486 29.646,-1.812 z\"></path></g></svg>"

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = "<svg enable-background=\"new 0 0 18 18\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"m16.76 8.051c-.448 0-.855-.303-.969-.757-.78-3.117-3.573-5.294-6.791-5.294s-6.01 2.177-6.79 5.294c-.134.537-.679.861-1.213.727-.536-.134-.861-.677-.728-1.212 1.004-4.009 4.594-6.809 8.731-6.809 4.138 0 7.728 2.8 8.73 6.809.135.536-.191 1.079-.727 1.213-.081.02-.162.029-.243.029z\"></path><path d=\"m9 18c-4.238 0-7.943-3.007-8.809-7.149-.113-.541.234-1.071.774-1.184.541-.112 1.071.232 1.184.773.674 3.222 3.555 5.56 6.851 5.56s6.178-2.338 6.852-5.56c.113-.539.634-.892 1.184-.773.54.112.887.643.773 1.184-.866 4.142-4.57 7.149-8.809 7.149z\"></path></g></svg>"

/***/ }),

/***/ 6:
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



/***/ })

/******/ });(function(e, a) { for(var i in a) e[i] = a[i]; }(window.Coveo, c4sf))