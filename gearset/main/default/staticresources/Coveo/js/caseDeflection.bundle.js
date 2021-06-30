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
/******/ 	return __webpack_require__(__webpack_require__.s = 135);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.Coveo;

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ CaseDeflectionEvents; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CaseDeflection_CaseDeflection; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// EXTERNAL MODULE: external "_"
var external_ = __webpack_require__(16);

// CONCATENATED MODULE: ./src/modules/caseDeflection/ts/Observer.ts
var Observer = /** @class */ (function () {
    function Observer() {
        this.notifiers = new Array();
    }
    Observer.prototype.register = function (notifier) {
        this.notifiers.push(notifier);
    };
    Observer.prototype.unregister = function (notifier) {
        this.notifiers = this.notifiers.filter(function (oldNotifier) { return oldNotifier !== notifier; });
    };
    Observer.prototype.notify = function () {
        this.notifiers.forEach(function (send) { return send(); });
    };
    return Observer;
}());

// #endregion

// CONCATENATED MODULE: ./src/modules/caseDeflection/ts/FormState.ts
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
 * Dictonnary of form fields and values pairs.
 */
var FormState_FormState = /** @class */ (function (_super) {
    __extends(FormState, _super);
    /*
     * Initialise the dictionary.
     */
    function FormState() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    /*
     * Erase all fields and filters from the dictionary.
     */
    FormState.prototype.clearState = function () {
        this.init();
    };
    /*
     * Get the form field value.
     * @param key The key of the form field.
     */
    FormState.prototype.getProperty = function (key) {
        return this.state[key];
    };
    /*
     * Get the key-value list of all form field in a dictionary struct.
     */
    FormState.prototype.getProperties = function () {
        var properties = this.state;
        return properties;
    };
    /*
     * Set a form field value. It create the form field if it does not exist.
     * @param key The key of the form field.
     * @param value The value of the form field.
     */
    FormState.prototype.setProperty = function (key, value) {
        if (!external_["includes"](this.propertyFilter, key) && this.state[key] != value) {
            this.notify();
        }
        this.state[key] = value;
    };
    // Set the attributes to their base value
    FormState.prototype.init = function () {
        this.propertyFilter = new Array();
        this.state = new Object();
    };
    return FormState;
}(Observer));


// CONCATENATED MODULE: ./src/modules/caseDeflection/ts/FormTracker.ts
var FormTracker_extends = (undefined && undefined.__extends) || (function () {
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



/*
 * Track the changes of a form and keep a state of all changes it seen.
 * This component insert the tracked changes into the query context.
 */
var FormTracker_FormTracker = /** @class */ (function (_super) {
    FormTracker_extends(FormTracker, _super);
    /*
     * Create a new Form Deflection component.
     * Add context filter to the .
     * Bind analytics logger to user event.
     *
     * @param element The element on which the component anchor itself
     * @param options The initial options values of the component
     * @param bindings The environment of the component
     */
    function FormTracker(element, options, bindings) {
        var _this = _super.call(this, element, FormTracker.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, FormTracker, options);
        _this._state = new FormState_FormState();
        _this._state.propertyFilter = external_["union"](_this._state.propertyFilter, _this.options.queryContextFilter);
        _this.bind.onRootElement(external_window_Coveo_["QueryEvents"].buildingQuery, _this.handleBuildingQuery);
        return _this;
    }
    Object.defineProperty(FormTracker.prototype, "state", {
        /*
         * Get the internal state of the component.
         */
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Add all fields from the form state to the context.
     * Field names from the query-context-filter option are omit.
     * @param args The building query event aguments
     */
    FormTracker.prototype.handleBuildingQuery = function (args) {
        var properties = this._state.getProperties();
        var context = external_["omit"].apply(external_, __spreadArrays([properties], this.options.queryContextFilter));
        args.queryBuilder.addContext(context);
    };
    FormTracker.ID = 'FormTracker';
    /*
     * Options of the component. They can be accessed from the markup.
     * ex:
     * `<div class="CoveoFormTracker" date-query-contextFilter="field1,field2,field2"/>`
     */
    FormTracker.options = {
        /*
         * List of form field to remove from the CONTEXT send by the query.
         */
        queryContextFilter: external_window_Coveo_["ComponentOptions"].buildListOption({
            defaultValue: [],
        }),
    };
    return FormTracker;
}(external_window_Coveo_["Component"]));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(FormTracker_FormTracker);

// CONCATENATED MODULE: ./src/modules/caseDeflection/ts/CaseDeflection.ts
var CaseDeflection_extends = (undefined && undefined.__extends) || (function () {
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


var SUBMIT_EVENT = 'submit_button';
/*
 * Events handled by this component.
 */
var CaseDeflectionEvents;
(function (CaseDeflectionEvents) {
    /* When a submit button is pressed on a case form. */
    CaseDeflectionEvents["Submit"] = "CaseSubmit";
    /* When the page unload. */
    CaseDeflectionEvents["Unload"] = "CaseUnload";
    /* When an input field change on a case form. */
    CaseDeflectionEvents["InputChange"] = "CaseInputChange";
    CaseDeflectionEvents["CaseCreateFieldChange"] = "selfService:caseCreateFieldChange";
})(CaseDeflectionEvents || (CaseDeflectionEvents = {}));
/*
 * # Case Deflection
 *
 * Handle 3 types of event.
 *
 * `CaseSubmit` :
 * > On a case submit, it will send an analytics event to the platform.
 * > The full gathered case information will be include in the analytics event
 *
 * `CaseUnload` :
 * > On a case unload, it will send an analytics event to the platform.
 *
 * `CaseInputChange` :
 * > On a case input change, it will send an analytics event to the platform.
 * > The field and value of the changed input information will be include in the analytics event
 * > (see ICaseInputChangeEventAgrs)
 */
/**
 * The _CaseDeflection_ component is used to allow administrators to increase case deflection by recommending items to your users as they enter a case.
 *
 * To learn how to implement it, see [CaseDeflection Lightning Component](https://developers.coveo.com/x/tABqAg)
 */
var CaseDeflection_CaseDeflection = /** @class */ (function (_super) {
    CaseDeflection_extends(CaseDeflection, _super);
    /*
     * Create a new Case Deflection component.
     * Add filters on the case object.
     * Bind analytics logger to user event.
     *
     * @param element The element on which the component anchor itself
     * @param options The initial options values of the component
     * @param bindings The environment of the component
     */
    function CaseDeflection(element, options, bindings) {
        var _this = _super.call(this, element, options, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.lastInputChange = { field: '', value: '' };
        _this.options = external_window_Coveo_["ComponentOptions"].initComponentOptions(element, CaseDeflection, options);
        _this.delayedQueries = {};
        _this.bind.onRootElement(CaseDeflectionEvents.InputChange, _this.handleCaseInputChange);
        _this.bind.onRootElement(CaseDeflectionEvents.Unload, _this.handleCaseUnload);
        _this.bind.onRootElement(CaseDeflectionEvents.Submit, _this.handleCaseSubmit);
        _this.bind.onRootElement(CaseDeflectionEvents.CaseCreateFieldChange, _this.handleCaseCreateFieldChange);
        _this.bind.onRootElement(external_window_Coveo_["AnalyticsEvents"].changeAnalyticsCustomData, _this.addFormDataToBaseEvent);
        if (_this.options.disableQueryForEmptyForm) {
            _this.showEmptyFormPrompt();
        }
        return _this;
    }
    /*
     * Handle the `CaseCreateFieldChange` event from Salesforce self-service events.
     * @param args The params of the Salesforce event.
     */
    CaseDeflection.prototype.handleCaseCreateFieldChange = function (args) {
        // Not a CaseCreateFieldChange event but a Submit one. (Salesforce)
        if (args.modifiedField === SUBMIT_EVENT) {
            this.handleCaseSubmit();
        }
        else if (args.modifiedField) {
            // Build the CaseInputChange handler args.
            var caseInputChangeArgs = {
                field: this.sanitizeField(args.modifiedField),
                value: args.modifiedFieldValue,
            };
            // Ensure we don't fire duplicate events. Salesforce can fire the same event twice in multiple cases.
            if (!(this.lastInputChange.field == caseInputChangeArgs.field && this.lastInputChange.value == caseInputChangeArgs.value)) {
                this.lastInputChange = caseInputChangeArgs;
                this.handleCaseInputChange(caseInputChangeArgs);
            }
        }
    };
    /*
     * Handle the `Click`, `Search` and `Custom` event.
     * Add all form fields to the customData on each event (see SFINT-1525).
     * We do this to provide more data OOTB to usage analytics report.
     */
    CaseDeflection.prototype.addFormDataToBaseEvent = function (args) {
        var contextProperties = this.state.getProperties();
        args.metaObject = args.metaObject ? args.metaObject : {};
        Object.getOwnPropertyNames(contextProperties).forEach(function (propertyName) {
            args.metaObject[propertyName] = contextProperties[propertyName];
        });
    };
    /*
     * Handle the `CaseInputChange` event.
     */
    CaseDeflection.prototype.handleCaseInputChange = function (args) {
        var _this = this;
        // Do nothing if the field is in the list of untracked field.
        if (this.options.queryContextFilter.indexOf(args.field) === -1) {
            // Update the state
            this.state.setProperty(args.field, args.value);
            // Check if case fields are empty
            var caseFormValues_1 = this.state.getProperties();
            var isCaseFormEmpty = Object.keys(caseFormValues_1).every(function (key) {
                return caseFormValues_1[key] === '';
            });
            // If query is disabled and case form are empty then prompt user to fill it in
            if (this.options.disableQueryForEmptyForm && isCaseFormEmpty) {
                this.showEmptyFormPrompt();
            }
            else {
                this.hideEmptyFormPrompt();
                // Delay the last pending query on this field
                var pending_query = CaseDeflectionEvents.InputChange;
                this.delay(function () {
                    _this.usageAnalytics.logSearchEvent({ name: CaseDeflectionEvents.InputChange, type: 'InputChange' }, args);
                    _this.queryController.executeQuery();
                }, pending_query, this.options.queryDelay);
            }
        }
    };
    CaseDeflection.prototype.showEmptyFormPrompt = function () {
        var existingPrompt = this.root.querySelector("." + CaseDeflection.EMPTY_FORM_PROMPT_CLASS);
        if (!existingPrompt) {
            var newPrompt = document.createElement('div');
            newPrompt.classList.add(CaseDeflection.EMPTY_FORM_PROMPT_CLASS);
            newPrompt.textContent = this.options.emptyFormMessage;
            this.root.querySelector('.coveo-main-section').insertAdjacentHTML('beforebegin', newPrompt.outerHTML);
        }
        this.root.classList.add(CaseDeflection.HIDE_RESULTS_CLASS);
    };
    CaseDeflection.prototype.hideEmptyFormPrompt = function () {
        var existingPrompt = this.root.querySelector("." + CaseDeflection.EMPTY_FORM_PROMPT_CLASS);
        if (existingPrompt) {
            existingPrompt.parentNode.removeChild(existingPrompt);
        }
        this.root.classList.remove(CaseDeflection.HIDE_RESULTS_CLASS);
    };
    /*
     *  Handle the `CaseUnload` event.
     */
    CaseDeflection.prototype.handleCaseUnload = function (args) {
        this.usageAnalytics.logCustomEvent({ name: CaseDeflectionEvents.Unload, type: 'Unload' }, args, this.element);
    };
    /*
     *  Handle the `CaseSubmit` event.
     */
    CaseDeflection.prototype.handleCaseSubmit = function (args) {
        if (args === void 0) { args = {}; }
        var metadata = __assign(__assign({}, args), this.state.getProperties());
        this.usageAnalytics.logCustomEvent({ name: CaseDeflectionEvents.Submit, type: 'Submit' }, metadata, this.element);
    };
    /*
     * Delay a function call until a certain amount of time.
     * @param func The function that will be delayed.
     * @param id The id of the delayed function. Needed to refresh the delayed function.
     * @param delay The delay before the function call.
     */
    CaseDeflection.prototype.delay = function (func, id, delay) {
        if (delay <= 0) {
            func();
        }
        else {
            window.clearTimeout(this.delayedQueries[id]);
            this.delayedQueries[id] = window.setTimeout(func, delay);
        }
    };
    /*
     * Sanitize Salesforce input. (Never trust Salesforce).
     * @param field The field to sanitize.
     */
    CaseDeflection.prototype.sanitizeField = function (field) {
        var _this = this;
        var safe_field = [field]
            // Remove the `__c` tail.
            .map(function (s) { return s.replace(/__c$/, ''); })
            // Remove the `__c` head.
            .map(function (s) { return s.replace(/^c__/, ''); })
            // Uncamelize.
            .map(function (s) { return _this.uncamelize(s); })
            // Transform underscore character series into space character.
            .map(function (s) { return s.replace(/_+/g, ' '); })
            // Trim head and tail.
            .map(function (s) { return s.trim(); })
            // Transform space character into an underscore.
            .map(function (s) { return s.replace(/\s+/g, '_'); })[0];
        return safe_field;
    };
    /*
     * Transform a camelcase text into a spaced text.
     * (ex: 'CamelTextTest' => ' camel text test')\
     * @param text The text to uncamelize.
     */
    CaseDeflection.prototype.uncamelize = function (text) {
        var tmp_text = text;
        var matches = text.match(/[A-Z][a-z]+/g);
        if (matches) {
            matches.forEach(function (match) {
                tmp_text = tmp_text.replace(match, ' ' + match.toLowerCase());
            });
        }
        return tmp_text.toLowerCase();
    };
    CaseDeflection.ID = 'CaseDeflection';
    CaseDeflection.EMPTY_FORM_PROMPT_CLASS = 'coveo-show-suggests-prompt';
    CaseDeflection.HIDE_RESULTS_CLASS = 'coveo-hide-results';
    CaseDeflection.options = {
        /**
         * The form fields you want to exclude of your case deflection component.
         *
         * You can add any fields that you want to remove from the context sent by the query.
         *
         * Your fields should use their Salesforce API name (see [Find the API name of a field](https://help.Salesforce.com/articleView?id=000007594&type=1&language=en_US)).
         *
         * By default, this option is empty.
         */
        queryContextFilter: external_window_Coveo_["ComponentOptions"].buildListOption({ defaultValue: [] }),
        /**
         * The delay in milliseconds before the query is executed after a listened input has changed.
         *
         * Default value is `500`.
         */
        queryDelay: external_window_Coveo_["ComponentOptions"].buildNumberOption({ defaultValue: 1000 }),
        /**
         *  Whether to run the query when the case form is empty.
         *
         *  Default is `false`.
         */
        disableQueryForEmptyForm: external_window_Coveo_["ComponentOptions"].buildBooleanOption({ defaultValue: false }),
        /**
         *  The message displayed in the Case Deflection when the query is disabled and the form is empty.
         *
         *  Default is `Fill in the case information to see relevant suggestions.`.
         */
        emptyFormMessage: external_window_Coveo_["ComponentOptions"].buildStringOption({ defaultValue: 'Fill in the case information to see relevant suggestions.' }),
    };
    return CaseDeflection;
}(FormTracker_FormTracker));

external_window_Coveo_["Initialization"].registerAutoCreateComponent(CaseDeflection_CaseDeflection);


/***/ }),

/***/ 11:
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

/***/ 133:
/***/ (function(module) {

module.exports = JSON.parse("{\"CaseDeflection\":{\"en\":\"Case Deflection\"},\"CaseDeflection_queryContextFilter\":{\"en\":\"Fields to exclude from the case context\"},\"CaseDeflection_queryDelay\":{\"en\":\"Delay before query\"}}");

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaseDeflection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaseDeflectionEvents", function() { return _CaseDeflection__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaseDeflection", function() { return _CaseDeflection__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var components_search_ui_SalesforceAdaptiveResultLink_SalesforceAdaptiveResultLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesforceEnvironment", function() { return components_search_ui_SalesforceAdaptiveResultLink_SalesforceAdaptiveResultLink__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesforceComponent", function() { return components_search_ui_SalesforceAdaptiveResultLink_SalesforceAdaptiveResultLink__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesforceAdaptiveResultLink", function() { return components_search_ui_SalesforceAdaptiveResultLink_SalesforceAdaptiveResultLink__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var components_search_ui_SalesforceResultLink_SalesforceResultLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesforceResultLink", function() { return components_search_ui_SalesforceResultLink_SalesforceResultLink__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var components_search_ui_Thumbnail_SalesforceThumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesforceThumbnail", function() { return components_search_ui_Thumbnail_SalesforceThumbnail__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesforceFields", function() { return utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesforceUtilities", function() { return utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_4__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Id", function() { return utils_SalesforceUtils__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var utils_Translation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(133);
var _strings_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(133, 1);






// Load strings

utils_Translation__WEBPACK_IMPORTED_MODULE_5__[/* Translation */ "a"].register('en', _strings_json__WEBPACK_IMPORTED_MODULE_6___namespace);


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = _;

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

/***/ 21:
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

/***/ 37:
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

/***/ 39:
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