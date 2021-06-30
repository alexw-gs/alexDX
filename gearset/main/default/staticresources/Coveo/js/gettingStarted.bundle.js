window.Coveo = window.Coveo || {};var c4sf =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function - abc
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
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 139:
/***/ (function(module) {

module.exports = JSON.parse("{\"sourcesErrorMessage\":{\"en\":\"There was an error retrieving sources status.\"},\"noSourcesMessage\":{\"en\":\"You have not created any sources.\"}}");

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SourceStatusTable", function() { return /* reexport */ SourceStatusTable_SourceStatusTable; });
__webpack_require__.d(__webpack_exports__, "GettingStartedTelemetry", function() { return /* reexport */ GettingStartedTelemetry; });

// EXTERNAL MODULE: external "_"
var external_ = __webpack_require__(16);

// CONCATENATED MODULE: ./src/modules/gettingStarted/ts/SourceStatusTable.ts

var refreshTimeout = 4000; // The spinner animation is 2s. A refresh time of a multiple of 2 makes the animation refresh smoother.
var SOURCE_COLUMN_CSS_CLASS = 'coveo-source-column';
var STATUS_COLUMN_CSS_CLASS = 'coveo-status-column';
var DOC_COLUMN_CSS_CLASS = 'coveo-doc-column';
var TABLE_ROW_CSS_CLASS = 'coveo-table-row';
var SCROLLABLE_TABLE_CSS_CLASS = 'scrollable';
var ERROR_ICON_CSS_CLASS = 'coveo-error-icon';
var SUCCESS_ICON_CSS_CLASS = 'coveo-success-icon';
var ERROR_MESSAGE_CSS_CLASS = 'error-message';
var NO_SOURCES_MESSAGE_CSS_CLASS = 'no-sources-message';
var LOADER_CSS_CLASS = 'loader';
/**
 * Table component to display live Coveo source status.
 */
var SourceStatusTable_SourceStatusTable = /** @class */ (function () {
    function SourceStatusTable(element, options, icons) {
        var _this = this;
        this.element = element;
        this.options = options;
        this.icons = icons;
        this.sources = [];
        this.options = Object(external_["extend"])(SourceStatusTable.defaultOptions, options);
        this.renderLoader();
        this.options.refreshStatus();
        window.setInterval(function () {
            _this.options.refreshStatus();
        }, refreshTimeout);
    }
    /**
     * Update component's sources to be displayed.
     *
     * @param sources Source[] Array of source objects to display.
     */
    SourceStatusTable.prototype.setSourcesStatus = function (sources, sourcesError) {
        if (!sources) {
            this.renderLoader();
            return;
        }
        var sourcesChanged = this.haveSourcesChanged(sources);
        this.sources = sources;
        this.handleExceptions(sourcesError);
        if (this.element.querySelector('table') && !sourcesChanged) {
            this.refreshTable();
        }
        else {
            this.renderTable();
        }
    };
    SourceStatusTable.prototype.handleExceptions = function (sourcesError) {
        if (sourcesError) {
            this.element.classList.add(ERROR_MESSAGE_CSS_CLASS);
            return;
        }
        this.element.classList.remove(ERROR_MESSAGE_CSS_CLASS);
        if (!this.sources.length) {
            this.showNoSourcesMessage();
        }
    };
    SourceStatusTable.prototype.haveSourcesChanged = function (incomingSources) {
        var isLengthChanged = this.sources.length != incomingSources.length;
        var isNameChanged = this.sources.some(function (source, index) { return source.name !== incomingSources[index].name; });
        return isLengthChanged || isNameChanged;
    };
    SourceStatusTable.prototype.showNoSourcesMessage = function () {
        if (this.element.querySelector("." + NO_SOURCES_MESSAGE_CSS_CLASS)) {
            return;
        }
        var messageContainer = document.createElement('div');
        messageContainer.classList.add(NO_SOURCES_MESSAGE_CSS_CLASS);
        messageContainer.innerHTML = "<img src=\"" + this.icons.cogSearch + "\">";
        var message = document.createElement('p');
        message.innerText = 'noSourcesMessage'.toLocaleString();
        messageContainer.appendChild(message);
        this.element.append(messageContainer);
    };
    SourceStatusTable.prototype.refreshTable = function () {
        var _this = this;
        var TABLEROW = 'tbody tr';
        var tableRows = this.element.querySelectorAll(TABLEROW);
        tableRows.forEach(function (row) {
            var sourceCell = row.querySelector("." + SOURCE_COLUMN_CSS_CLASS);
            var source = _this.sources.find(function (source) { return source.name === sourceCell.innerHTML; });
            if (source) {
                var statusCell = row.querySelector("." + SOURCE_COLUMN_CSS_CLASS);
                statusCell.querySelector('div').remove();
                statusCell.appendChild(_this.statusCellContent(source));
                var docCell = row.querySelector(DOC_COLUMN_CSS_CLASS);
                docCell.innerText = source.numberOfDocuments.toString();
            }
        });
    };
    SourceStatusTable.prototype.statusCellContent = function (source) {
        var content = document.createElement('div');
        if (source.isError) {
            content.classList.add(ERROR_ICON_CSS_CLASS);
            content.innerHTML = "<img src=\"" + this.icons.error + "\">";
        }
        else if (source.isFinished) {
            content.classList.add(SUCCESS_ICON_CSS_CLASS);
            content.innerHTML = "<img src=\"" + this.icons.success + "\">";
        }
        else {
            content.classList.add(LOADER_CSS_CLASS);
        }
        return content;
    };
    SourceStatusTable.prototype.renderLoader = function () {
        var loader = document.createElement('div');
        loader.classList.add(LOADER_CSS_CLASS);
        this.element.innerText = '';
        this.element.appendChild(loader);
    };
    SourceStatusTable.prototype.createHeader = function (thead) {
        var theadRow = thead.insertRow();
        theadRow.classList.add(TABLE_ROW_CSS_CLASS);
        var sourceHeader = theadRow.insertCell();
        sourceHeader.classList.add(SOURCE_COLUMN_CSS_CLASS);
        sourceHeader.innerText = 'SOURCE';
        var statusHeader = theadRow.insertCell();
        statusHeader.classList.add(STATUS_COLUMN_CSS_CLASS);
        statusHeader.innerText = 'STATUS';
        var docHeader = theadRow.insertCell();
        docHeader.classList.add(DOC_COLUMN_CSS_CLASS);
        docHeader.innerText = 'DOCUMENTS';
        /**
         * The error message is hidden by default.
         * It displays when the "error-message" css class is toggled on.
         */
        var errorMessageRow = thead.insertRow();
        errorMessageRow.classList.add(TABLE_ROW_CSS_CLASS);
        var errorMessage = errorMessageRow.insertCell();
        errorMessage.colSpan = 3;
        errorMessage.innerText = 'sourcesErrorMessage'.toLocaleString();
        errorMessageRow.id = 'coveo-source-error-message';
    };
    SourceStatusTable.prototype.populateRow = function (source, tbody) {
        var newRow = tbody.insertRow();
        newRow.classList.add(TABLE_ROW_CSS_CLASS);
        var sourceCell = newRow.insertCell();
        sourceCell.classList.add(SOURCE_COLUMN_CSS_CLASS);
        sourceCell.innerText = source.name;
        var statusCell = newRow.insertCell();
        statusCell.classList.add(STATUS_COLUMN_CSS_CLASS);
        statusCell.appendChild(this.statusCellContent(source));
        var docCell = newRow.insertCell();
        docCell.classList.add(DOC_COLUMN_CSS_CLASS);
        docCell.innerText = source.numberOfDocuments.toString();
    };
    SourceStatusTable.prototype.renderTable = function () {
        var _this = this;
        var table = document.createElement('table');
        if (this.sources.length > 5) {
            table.classList.add(SCROLLABLE_TABLE_CSS_CLASS);
        }
        var thead = table.createTHead();
        this.createHeader(thead);
        var tbody = document.createElement('tbody');
        table.appendChild(tbody);
        this.element.innerText = '';
        this.sources.map(function (source) { return _this.populateRow(source, tbody); });
        // Workaround for IE11. prepend is not supported.
        if (this.element.children) {
            this.element.insertBefore(table, this.element.children[0]);
        }
        else {
            this.element.appendChild(table);
        }
    };
    SourceStatusTable.defaultOptions = {
        refreshStatus: function () { },
        indexless: false,
        platformUri: 'https://cloud.coveo.com',
    };
    return SourceStatusTable;
}());


// EXTERNAL MODULE: ./src/modules/telemetry/Telemetry.ts + 1 modules
var Telemetry = __webpack_require__(114);

// CONCATENATED MODULE: ./src/modules/gettingStarted/ts/GettingStartedTelemetry.ts
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
 * Extension of the Telemetry class containing configuration data for the GettingStarted page's tracked elements.
 */
var GettingStartedTelemetry = /** @class */ (function (_super) {
    __extends(GettingStartedTelemetry, _super);
    function GettingStartedTelemetry(salesforceContext) {
        return _super.call(this, salesforceContext, GettingStartedTelemetry.eventType, GettingStartedTelemetry.elementData) || this;
    }
    GettingStartedTelemetry.eventType = 'gettingStarted';
    GettingStartedTelemetry.elementData = [
        {
            elementID: 'btn-get-help-platform',
            eventValue: 'getHelpButton',
            section1: 'exploreCoveoCloud',
            section2: '',
        },
        {
            elementID: 'btn-go-to-platform',
            eventValue: 'goToPlatfornButton',
            section1: 'exploreCoveoCloud',
            section2: '',
        },
        {
            elementID: 'btn-get-help-create-search',
            eventValue: 'getHelpButton',
            section1: 'createFirstCoveoSearchPage',
            section2: '',
        },
        {
            elementID: 'btn-try-create-search',
            eventValue: 'tryItNowButton',
            section1: 'createFirstSearchPage',
            section2: '',
        },
        {
            elementID: 'btn-get-help-create-panel',
            eventValue: 'getHelpButton',
            section1: 'createCoveoInsightPanel',
            section2: '',
        },
        {
            elementID: 'btn-get-help-insert',
            eventValue: 'getHelpButton',
            section1: 'insertComponentsToLightningCommunity',
            section2: '',
        },
        {
            elementID: 'btn-get-help-customize',
            eventValue: 'getHelpButton',
            section1: 'customizeSearchPages',
            section2: '',
        },
        {
            elementID: 'btn-get-help-add-sources',
            eventValue: 'getHelpButton',
            section1: 'addNonSalesforceSources',
            section2: '',
        },
        {
            elementID: 'btn-try-add-sources',
            eventValue: 'tryItNowButton',
            section1: 'addNonSalesforceSources',
            section2: '',
        },
        {
            elementID: 'btn-get-help-access-config',
            eventValue: 'getHelpButton',
            section1: 'accessConfigurationPage',
            section2: '',
        },
        {
            elementID: 'btn-configure-access-config',
            eventValue: 'configureNowButton',
            section1: 'accessConfigurationPage',
            section2: '',
        },
        {
            elementID: 'btn-online-help',
            eventValue: 'onlineHelpButton',
            section1: 'additionalResources',
            section2: '',
        },
        {
            elementID: 'btn-answers',
            eventValue: 'answersButton',
            section1: 'additionalResources',
            section2: '',
        },
    ];
    return GettingStartedTelemetry;
}(Telemetry["a" /* Telemetry */]));


// EXTERNAL MODULE: ./src/utils/Translation.ts
var Translation = __webpack_require__(6);

// EXTERNAL MODULE: ./src/modules/gettingStarted/strings.json
var strings = __webpack_require__(139);
var strings_namespaceObject = /*#__PURE__*/__webpack_require__.t(strings, 2);

// CONCATENATED MODULE: ./src/modules/gettingStarted/ts/index.ts


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
