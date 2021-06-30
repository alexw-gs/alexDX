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
/******/ 	return __webpack_require__(__webpack_require__.s = 148);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.Coveo;

/***/ }),

/***/ 10:
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

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "OptionBuilder", function() { return /* reexport */ OptionBuilder_OptionBuilder; });
__webpack_require__.d(__webpack_exports__, "InitializationScriptBuilder", function() { return /* reexport */ InitializationScriptBuilder; });

// CONCATENATED MODULE: ./src/modules/interfaceEditor/ts/mock/AttachToCaseEndpointMock.ts
/// <reference path='../../../../typings/aura.d.ts' />
var TIMEOUT = 200;
/**
 * Mock the attach to case endpoint by providing fake behavior.
 */
var AttachToCaseEndpointMock = /** @class */ (function () {
    function AttachToCaseEndpointMock() {
        /**
         * Fake data property.
         */
        this.data = {
            succeeded: true,
            message: '',
            attachedResults: [],
        };
        /**
         * Fake case id.
         */
        this.caseId = '101';
    }
    /**
     * Would attach the data to the case if this wasn't a fake.
     * @param dataToAttach Data that would have been attached if this wasn't a fake.
     * @param callback Callback that would have been invoke after the data would have been attached. Will be invoked after a timeout instead.
     */
    AttachToCaseEndpointMock.prototype.attachToCase = function (dataToAttach, callback) {
        setTimeout(function () {
            callback({
                succeeded: true,
                message: '',
            });
        }, TIMEOUT);
        return true;
    };
    /**
     * Would detach the data from the case if this wasn't a fake.
     * @param _uriHash uriHash of the result that would have been detach if this wasn't a fake.
     * @param _sfkbid sfkbid of the result that would have been detach if this wasn't a fake.
     * @param _caseId caseId of the result that would have been detach if this wasn't a fake.
     * @param callback Callback that would have been invoke after the data would have been detached. Will be invoked after a timeout instead.
     */
    AttachToCaseEndpointMock.prototype.detachFromCase = function (_uriHash, _sfkbid, _caseId, callback) {
        setTimeout(function () {
            callback({
                succeeded: true,
                message: '',
            });
        }, TIMEOUT);
        return true;
    };
    return AttachToCaseEndpointMock;
}());


// EXTERNAL MODULE: ./src/components/search-ui/ResultActionsPostToFeed/ResultActionsPostToFeed.ts
var ResultActionsPostToFeed = __webpack_require__(50);

// EXTERNAL MODULE: ./src/components/search-ui/ResultActionsSendEmail/ResultActionsSendEmail.ts
var ResultActionsSendEmail = __webpack_require__(51);

// CONCATENATED MODULE: ./src/modules/interfaceEditor/ts/mock/QuickActionApiMock.ts
/// <reference path='../../../../typings/aura.d.ts' />

/**
 * Mock the ConversationToolkitAPI by providing fake behavior.
 */
var QuickActionApiMock_QuickActionApiMock = /** @class */ (function () {
    function QuickActionApiMock() {
    }
    QuickActionApiMock.prototype.getAvailableActions = function () {
        return new Promise(function (resolve) {
            return resolve({
                success: true,
                actions: [
                    { actionName: ResultActionsPostToFeed["a" /* ResultActionsPostToFeed */].actionName, recordId: 'foo' },
                    { actionName: ResultActionsSendEmail["a" /* ResultActionsSendEmail */].actionName, recordId: 'foo' },
                ],
            });
        });
    };
    /**
     * SetActionFieldValues fake. Will always resolve as successful.
     * @param _args QuickActionAPI etActionFieldValues Arguments.
     */
    QuickActionApiMock.prototype.setActionFieldValues = function (_args) {
        return Promise.resolve({
            success: true,
            unavailableAction: false,
            targetFieldErrors: null,
            errors: [],
        });
    };
    /**
     * GetCustomAction fake. Will always resolve as successful.
     * @param _args QuickActionAPI GetCustomAction Arguments.
     */
    QuickActionApiMock.prototype.getCustomAction = function (_args) {
        return Promise.resolve({
            success: true,
            subscribe: function () { },
            publish: function () { },
            unsubscribe: function () { },
        });
    };
    return QuickActionApiMock;
}());


// CONCATENATED MODULE: ./src/modules/interfaceEditor/ts/mock/ConversationToolkitAPIMock.ts
/// <reference path='../../../../typings/aura.d.ts' />
/**
 * Mock the ConversationToolkitAPI by providing fake behavior.
 */
var ConversationToolkitAPIMock = /** @class */ (function () {
    function ConversationToolkitAPIMock() {
    }
    /**
     * SendMessage fake. Will always resolve.
     * @param _args ConversationToolkitAPI SendMessage Arguments.
     */
    ConversationToolkitAPIMock.prototype.sendMessage = function (_args) {
        return Promise.resolve(true);
    };
    /**
     * GetChatLog fake. Will always resolve.
     * @param _args ConversationToolkitAPI getChatLog Arguments.
     */
    ConversationToolkitAPIMock.prototype.getChatLog = function (_args) {
        return Promise.resolve();
    };
    return ConversationToolkitAPIMock;
}());


// CONCATENATED MODULE: ./src/modules/interfaceEditor/ts/mock/WorkspaceApiMock.ts
/// <reference path='../../../../typings/aura.d.ts' />
/**
 * Mock the WorkspaceAPI by providing fake behavior.
 */
var WorkspaceApiMock = /** @class */ (function () {
    function WorkspaceApiMock() {
    }
    /**
     * GetfocusedTabInfo fake. Will always resolve.
     */
    WorkspaceApiMock.prototype.getFocusedTabInfo = function () {
        return new Promise(function (resolve) {
            resolve({
                tabId: 'foo',
            });
        });
    };
    /**
     * OpenSubtab fake. Will always resolve.
     * @param _params
     */
    WorkspaceApiMock.prototype.openSubtab = function (_params) {
        return new Promise(function (resolve) {
            resolve('foo');
        });
    };
    /**
     * OpenTab fake. Will always resolve.
     * @param _params
     */
    WorkspaceApiMock.prototype.openTab = function (_params) {
        return new Promise(function (resolve) {
            resolve('foo');
        });
    };
    /**
     * SetTabLabel fake. Will always resolve.
     * @param _params
     */
    WorkspaceApiMock.prototype.setTabLabel = function (_params) {
        return new Promise(function (resolve) {
            resolve({
                tabId: 'foo',
            });
        });
    };
    /**
     * SetTabIcon fake. Will always resolve.
     * @param _params
     */
    WorkspaceApiMock.prototype.setTabIcon = function (_params) {
        return new Promise(function (resolve) {
            resolve({
                tabId: 'foo',
            });
        });
    };
    return WorkspaceApiMock;
}());


// CONCATENATED MODULE: ./src/modules/interfaceEditor/ts/OptionBuilder.ts
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




var OptionBuilder_OptionBuilder = /** @class */ (function () {
    function OptionBuilder(options) {
        this._options = {};
        this.overrides = {
            AttachToCase: {
                attachToCaseEndpoint: function () { return new AttachToCaseEndpointMock(); },
            },
            AttachedResultsTab: {
                attachToCaseEndpoint: function () { return new AttachToCaseEndpointMock(); },
            },
            ResultQuickAction: {
                quickActionAPI: new QuickActionApiMock_QuickActionApiMock(),
            },
            ResultActionsPostToFeed: {
                quickActionAPI: new QuickActionApiMock_QuickActionApiMock(),
            },
            ResultActionsSendEmail: {
                quickActionAPI: new QuickActionApiMock_QuickActionApiMock(),
            },
            ResultActionsSendLiveAgent: {
                conversationToolkit: new ConversationToolkitAPIMock(),
                recordId: '570',
            },
            FullSearch: {
                workspaceAPI: new WorkspaceApiMock(),
            },
            FullSearchButton: {
                workspaceAPI: new WorkspaceApiMock(),
            },
            CreateArticle: {
                workspaceAPI: new WorkspaceApiMock(),
            },
            CreateArticleButton: {
                workspaceAPI: new WorkspaceApiMock(),
            },
        };
        this.markupOverrides = {
            SearchInterface: {
                'data-auto-trigger-query': true,
            },
            CaseDeflection: {
                'data-disable-query-for-empty-form': false,
            },
        };
        try {
            this.options = __assign({}, JSON.parse(options));
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                console.error(e.message + " " + e.lineNumber + ";" + e.columnNumber + " in\n" + options);
            }
        }
    }
    Object.defineProperty(OptionBuilder.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (value) {
            var _this = this;
            // Pass through the options before assigning to override some properties.
            this._options = Object.keys(value).reduce(function (acc, key) {
                var _a, _b;
                // If an override exist.
                if (_this.overrides[key] !== undefined) {
                    // Then override it.
                    return __assign(__assign({}, acc), (_a = {}, _a[key] = __assign(__assign({}, value[key]), _this.overrides[key]), _a));
                }
                return __assign(__assign({}, acc), (_b = {}, _b[key] = __assign({}, value[key]), _b));
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    OptionBuilder.prototype.add = function (componentName, options) {
        this.options[componentName] = options;
    };
    return OptionBuilder;
}());


// CONCATENATED MODULE: ./src/modules/interfaceEditor/ts/InitializationScriptBuilder.ts
var InitializationScriptBuilder = /** @class */ (function () {
    function InitializationScriptBuilder(options) {
        this.quickviewURL = '';
        this.name = options.name;
        this.token = options.token;
        this.searchHub = options.searchHub;
        this.initializationOptions = JSON.parse(options.initializationOptions);
        this.searchContext = JSON.parse(options.searchContext);
        this.height = options.height;
        this.width = options.width;
        this.organizationId = options.organizationId;
        this.clientUri = options.clientUri;
    }
    InitializationScriptBuilder.prototype.build = function () {
        return "<script>\n    document.addEventListener('DOMContentLoaded', function(){\n      " + this.checkCoveoExistance() + "\n      " + this.setLanguageAfterScriptLoad() + "\n      " + this.useNativeJavaScriptEvents() + "\n      " + this.setSearchEndpoint() + "\n      " + this.initUserProfiling() + "\n      " + this.setSearchContext() + "\n      " + this.initilizeOptionBuilder() + "\n    });\n    </script>\n    <style>\n    " + this.sizeSearchInterface() + "\n    </style>";
    };
    InitializationScriptBuilder.prototype.initUserProfiling = function () {
        return "new Coveo.UserProfileModel(document.querySelector('.CoveoSearchInterface'), {\n      searchEndpoint: Coveo.SearchEndpoint.endpoints['default'],\n      organizationId: \"" + this.organizationId + "\",\n      restUri: \"" + this.clientUri + "/rest\"\n    });";
    };
    InitializationScriptBuilder.prototype.sizeSearchInterface = function () {
        return ".coveo-component-editor-body>.CoveoSearchInterface {\n      " + (/^[0-9]+$/g.test(this.width) ? "max-width: " + this.width + "px;" : '') + "\n      " + (/^[0-9]+$/g.test(this.height) ? "max-height: " + this.height + "px;" : '') + "\n    }";
    };
    InitializationScriptBuilder.prototype.checkCoveoExistance = function () {
        return "if(!Coveo) { return; }";
    };
    InitializationScriptBuilder.prototype.setLanguageAfterScriptLoad = function () {
        return "String['locale'] = 'en';\n    if(Coveo.setLanguageAfterPageLoaded) {\n      Coveo.setLanguageAfterPageLoaded();\n    }";
    };
    InitializationScriptBuilder.prototype.useNativeJavaScriptEvents = function () {
        return "Coveo.Dom.useNativeJavaScriptEvents = true;";
    };
    InitializationScriptBuilder.prototype.setSearchEndpoint = function () {
        return "if (Coveo.SearchEndpoint.endpoints['default'] === undefined) {\n      var searchEndpointConfig = {\n        restUri: '" + encodeURI(this.clientUri) + "/rest/search',\n        accessToken: '" + encodeURIComponent(this.token) + "',\n        renewAccessToken: window.parent.coveoRenewAccessToken\n      };\n      Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint(searchEndpointConfig);\n    }";
    };
    InitializationScriptBuilder.prototype.setSearchContext = function () {
        return "Coveo.context = " + JSON.stringify(this.searchContext, null, 0) + ";";
    };
    InitializationScriptBuilder.prototype.initilizeOptionBuilder = function () {
        return "const optionBuilder = new Coveo.OptionBuilder('" + JSON.stringify(this.initializationOptions, null, 0).replace(new RegExp('\'|"|`', 'g'), function (x) {
            return '\\' + x;
        }) + "');\n    Object.entries(optionBuilder.markupOverrides).forEach( ([component, options]) => {\n      let element = document.querySelector(Coveo.Component.computeSelectorForType(component));\n      Object.entries(options).forEach( ([option, value]) => {\n        element && element.setAttribute(option, value.toString());\n      });\n    });\n    optionBuilder.add('Analytics', {\n      searchHub: '" + encodeURIComponent(this.searchHub).replace(new RegExp("'", 'g'), "\\'") + "'\n    });\n    " + (this.quickviewURL ? "optionBuilder.add('SalesforceQuickview', { quickviewUrl: '" + encodeURI(this.quickviewURL) + "' });" : '') + "\n    Promise.all(\n      ['" + this.name + "', 'default']\n        .filter(scriptName => scriptName)\n        .map(scriptName => {\n          let scriptFunction = window.coveoCustomScripts[scriptName];\n          if (scriptFunction && typeof scriptFunction === 'function') {\n            return scriptFunction(Promise.resolve());\n          }\n          return null;\n        })\n        .filter(promise => promise && promise.then)\n    ).then(() => {\n      Coveo.init(document.querySelector('.CoveoSearchInterface'), optionBuilder.options);\n    });";
    };
    return InitializationScriptBuilder;
}());


// CONCATENATED MODULE: ./src/modules/interfaceEditor/ts/index.ts




/***/ }),

/***/ 18:
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

/***/ 22:
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

/***/ 44:
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 90 78.58\" enable-background=\"new 0 0 90 78.58\" xml:space=\"preserve\"><g><path fill=\"none\" d=\"M66.024,56.591c-0.014-0.199,0.001-0.395,0.014-0.592c0.006-0.093-0.001-0.188,0.011-0.279 c0.02-0.148,0.064-0.289,0.099-0.433c0.031-0.131,0.05-0.267,0.094-0.394c0.031-0.092,0.082-0.177,0.119-0.267 c0.07-0.167,0.133-0.337,0.223-0.492c0.068-0.119,0.159-0.225,0.238-0.338c0.081-0.114,0.151-0.236,0.242-0.341 c0.078-0.091,0.175-0.167,0.262-0.252c0.116-0.114,0.225-0.233,0.353-0.334c0.069-0.054,0.15-0.094,0.223-0.144 c0.166-0.114,0.331-0.228,0.513-0.319c0.01-0.005,0.018-0.013,0.028-0.018c8.246-4.05,13.281-12.595,12.827-21.768 C80.666,18.417,70.621,8.828,58.404,8.788L31.757,8.701c-0.024,0-0.051,0-0.075,0c-12.521,0-22.815,10.163-22.966,22.692 L8.704,32.39c-0.076,6.337,2.376,12.267,6.906,16.698c4.53,4.432,10.521,6.773,16.845,6.536l22.463-0.768 c0.076-0.002,0.148,0.015,0.224,0.017c0.212,0.004,0.424,0.013,0.634,0.048c0.027,0.005,0.053,0.014,0.08,0.019 c0.765,0.141,1.504,0.475,2.124,1.033l8.585,7.739l-0.542-7.088C66.022,56.613,66.025,56.603,66.024,56.591z\"></path><path d=\"M89.961,30.191C89.127,13.366,75.278,0.142,58.431,0.088L31.785,0c-0.034,0-0.069,0-0.104,0 C14.419,0,0.223,14.015,0.014,31.291l-0.012,0.996C-0.103,41.024,3.279,49.2,9.525,55.31c5.979,5.847,13.793,9.031,22.109,9.031 c0.372,0,0.745-0.006,1.119-0.019l20.706-0.708l15.36,13.846c0.817,0.736,1.86,1.12,2.915,1.12c0.651,0,1.308-0.147,1.917-0.446 c1.598-0.785,2.556-2.462,2.42-4.236l-1.16-15.169C84.698,52.712,90.537,41.825,89.961,30.191z M57.98,55.974 c-0.62-0.559-1.359-0.892-2.124-1.033c-0.027-0.005-0.053-0.015-0.08-0.019c-0.21-0.035-0.422-0.044-0.634-0.048 c-0.076-0.002-0.148-0.019-0.224-0.017l-22.463,0.768c-6.324,0.237-12.315-2.104-16.845-6.536 c-4.529-4.43-6.982-10.361-6.906-16.698l0.012-0.996C8.867,18.866,19.161,8.703,31.682,8.703c0.024,0,0.051,0,0.075,0L58.404,8.79 c12.218,0.039,22.262,9.629,22.866,21.832c0.454,9.173-4.581,17.718-12.827,21.768c-0.01,0.005-0.018,0.013-0.028,0.018 c-0.182,0.091-0.347,0.205-0.513,0.319c-0.073,0.05-0.154,0.09-0.223,0.144c-0.128,0.1-0.237,0.22-0.353,0.334 c-0.086,0.085-0.183,0.161-0.262,0.252c-0.091,0.106-0.162,0.227-0.242,0.341c-0.079,0.113-0.17,0.219-0.238,0.338 c-0.089,0.156-0.153,0.326-0.223,0.492c-0.037,0.09-0.088,0.174-0.119,0.267c-0.043,0.127-0.062,0.262-0.094,0.394 c-0.035,0.144-0.079,0.286-0.099,0.433c-0.012,0.091-0.005,0.186-0.011,0.279c-0.014,0.197-0.028,0.393-0.014,0.592 c0.001,0.011-0.002,0.022-0.001,0.033l0.542,7.088L57.98,55.974z\"></path></g></svg>"

/***/ }),

/***/ 45:
/***/ (function(module) {

module.exports = JSON.parse("{\"ResultActionsPostToFeed_body\":{\"en\":\"Body\"},\"ResultActionsPostToFeed_insertType\":{\"en\":\"Insert Type\"},\"ResultActionsPostToFeed_autoSubmit\":{\"en\":\"Auto Submit\"}}");

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 52 36\" enable-background=\"new 0 0 52 36\" xml:space=\"preserve\"><g><path d=\"M50,0H2C0.896,0,0,0.896,0,2v32c0,1.104,0.896,2,2,2h48c1.104,0,2-0.896,2-2V2C52,0.896,51.104,0,50,0z M44.476,4 L26,19.396L7.524,4H44.476z M4,32V6.27l20.72,17.266C25.09,23.846,25.545,24,26,24c0.455,0,0.91-0.154,1.28-0.464L48,6.27V32H4z\"></path></g></svg>"

/***/ }),

/***/ 47:
/***/ (function(module) {

module.exports = JSON.parse("{\"ResultActionsSendEmail_htmlBody\":{\"en\":\"HTML Body\"},\"ResultActionsSendEmail_insertType\":{\"en\":\"Insert Type\"}}");

/***/ }),

/***/ 50:
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

/***/ 51:
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