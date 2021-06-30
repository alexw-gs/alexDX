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
/******/ 	return __webpack_require__(__webpack_require__.s = 150);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.Coveo;

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActionsButton; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
var _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(20, 1);
/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
var _strings_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(132, 1);
/* harmony import */ var _utils_Translation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
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
 * The _UserActionsButton_ component allows you to display a panel showing a summary of a user session and detailed user actions information.
 *
 * ```html
 * <button class='CoveoUserActionsButton'></button>
 * ```
 */
var UserActionsButton = /** @class */ (function (_super) {
    __extends(UserActionsButton, _super);
    function UserActionsButton(element, options, bindings, result) {
        var _this = _super.call(this, element, UserActionsButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, UserActionsButton, options);
        _this.createChildComponents();
        return _this;
    }
    UserActionsButton.prototype.createChildComponents = function () {
        this.innerUserActions = this.createInnerUserActions();
        this.root.appendChild(this.innerUserActions.element);
        this.innerButton = this.createInnerToggleButton();
        this.bindInnerUserActionsEvents();
    };
    UserActionsButton.prototype.bindInnerUserActionsEvents = function () {
        this.innerUserActions.element.addEventListener(coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_1__[/* UserActions */ "a"].Events.Show, this.handleUserActionsShow.bind(this));
        this.innerUserActions.element.addEventListener(coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_1__[/* UserActions */ "a"].Events.Hide, this.handleUserActionsHide.bind(this));
    };
    UserActionsButton.prototype.handleUserActionsShow = function (event) {
        this.innerButton.setActivated(true);
    };
    UserActionsButton.prototype.handleUserActionsHide = function (event) {
        this.innerButton.setActivated(false);
    };
    UserActionsButton.prototype.createInnerUserActions = function () {
        var userActionsElement = document.createElement('div');
        return new UserActionsButton.UserActionsClassReference(userActionsElement, {
            userId: this.options.userId,
            activityLabel: this.options.activityLabel,
            buttonLabel: '',
            summaryLabel: this.options.summaryLabel,
            viewedByCustomer: this.options.viewedByCustomer,
            hidden: false,
            useResponsiveManager: false,
        }, this.bindings);
    };
    UserActionsButton.prototype.createInnerToggleButton = function () {
        var _this = this;
        return new UserActionsButton.ToggleActionButtonClassReference(this.element, {
            activateIcon: _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_3__[/* activity */ "a"],
            activateTooltip: this.options.activateTooltip,
            deactivateIcon: _dependencies_coveo_styleguide_dist_svg_CoveoStyleGuideSvg_json__WEBPACK_IMPORTED_MODULE_3__[/* close */ "b"],
            deactivateTooltip: this.options.deactivateTooltip,
            activate: function () { return _this.innerUserActions.show(); },
            deactivate: function () { return _this.innerUserActions.hide(); },
        });
    };
    UserActionsButton.ID = 'UserActionsButton';
    UserActionsButton.ToggleActionButtonClassReference = coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_2__[/* ToggleActionButton */ "a"];
    UserActionsButton.UserActionsClassReference = coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_1__[/* UserActions */ "a"];
    /**
     * The available options for _UserActionsButton_.
     * @componentOptions
     */
    UserActionsButton.options = {
        /**
         * Specifies the button tooltip displayed to activate the user actions.
         *
         * Default is `Open user actions`
         *
         * ```html
         * <button class='CoveoUserActionsButton' data-activate-tooltip='Open user actions'></button>
         * ```
         */
        activateTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildLocalizedStringOption({
            localizedString: function () { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('UserActionsButton_activateTooltip_caption'); },
        }),
        /**
         * Specifies the button tooltip displayed to deactivate the user actions.
         *
         * Default is `Close user actions`
         *
         * ```html
         * <button class='CoveoUserActionsButton' data-deactivate-tooltip='Close user actions'></button>
         * ```
         */
        deactivateTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildLocalizedStringOption({
            localizedString: function () { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('UserActionsButton_deactivateTooltip_caption'); },
        }),
        /**
         * Specifies the title of the panel summary section.
         *
         * Default is `Session Summary`
         *
         * ```html
         * <button class='CoveoUserActionsButton' data-summary-label='Session Summary'></button>
         * ```
         */
        summaryLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildLocalizedStringOption({
            localizedString: function () { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('UserActionsButton_summaryLabel_caption'); },
        }),
        /**
         * Specifies the title of the panel activity section.
         *
         * Default is `User's Recent Activity`
         *
         * ```html
         * <button class='CoveoUserActionsButton' data-activity-label="User's Recent Activity"></button>
         * ```
         */
        activityLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildLocalizedStringOption({
            localizedString: function () { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('UserActionsButton_activityLabel_caption'); },
        }),
        /**
         * Specifies whether the _ViewedByCustomer_ component should appear on results consulted by the user specified in `userId`.
         *
         * Default value is `true`
         *
         * ```html
         * <button class='CoveoUserActionsButton' data-viewed-by-customer='true'></button>
         * ```
         */
        viewedByCustomer: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
    };
    return UserActionsButton;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(UserActionsButton);
// Load strings


_utils_Translation__WEBPACK_IMPORTED_MODULE_5__[/* Translation */ "a"].register('en', _strings_json__WEBPACK_IMPORTED_MODULE_4__);


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatefulActionButton; });
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);

/**
 * An action button able to handle multiple states and their transitions.
 */
var StatefulActionButton = /** @class */ (function () {
    function StatefulActionButton(element, options, bindings) {
        var _a;
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        var optionsValidity = this.checkOptionsValidity();
        if (!optionsValidity.areValid) {
            console.warn("Cannot render the stateful action button because options are invalid.\n\t" + optionsValidity.errorMessage);
            return;
        }
        this.currentState = this.options.initialState;
        (_a = this.currentState.onStateEntry) === null || _a === void 0 ? void 0 : _a.apply(this);
        this.innerActionButton = new _ActionButton__WEBPACK_IMPORTED_MODULE_0__[/* ActionButton */ "a"](element, Object.assign(Object.assign({}, this.options.initialState), { click: this.handleClick.bind(this) }), bindings);
    }
    /**
     * Switch the state of the instance if the state and the transition between the current and new state are allowed.
     * @param state a state to try to switch to
     */
    StatefulActionButton.prototype.switchTo = function (state) {
        var _a, _b;
        if (this.options.states.indexOf(state) === -1) {
            console.warn("State '" + state.name + "' does not exist on this StatefulActionButton\nEnsure to use the object references used at the instantiation.");
            return;
        }
        if (!this.isTransitionAllowed(state)) {
            console.warn("Transition from State '" + this.currentState.name + "' to State '" + state.name + "' is not allowed on this StatefulActionButton.\nEnsure to use the object references used at the instantiation.");
            return;
        }
        var _c = [this.currentState.onStateExit, state.onStateEntry], oldStateExit = _c[0], newStateEntry = _c[1];
        this.innerActionButton.updateIcon(state.icon);
        this.innerActionButton.updateTooltip(state.tooltip);
        this.currentState = state;
        (_a = oldStateExit) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = newStateEntry) === null || _b === void 0 ? void 0 : _b.call(this);
    };
    /**
     * Return the current state of the instance.
     */
    StatefulActionButton.prototype.getCurrentState = function () {
        return this.currentState;
    };
    /**
     * Check if the options given to the constructor are valid.
     * If not, it will also display the appropriate warning.
     */
    StatefulActionButton.prototype.checkOptionsValidity = function () {
        var _a;
        if (!((_a = this.options.states) === null || _a === void 0 ? void 0 : _a.length)) {
            return { areValid: false, errorMessage: 'States is not defined or empty.' };
        }
        if (!this.options.initialState) {
            return { areValid: false, errorMessage: 'InitialState is not defined.' };
        }
        if (this.options.states.indexOf(this.options.initialState) < 0) {
            return { areValid: false, errorMessage: 'InitialState is not in the list of state.' };
        }
        return !this.options.allowedTransitions ? { areValid: true } : this.areTransitionsValid();
    };
    StatefulActionButton.prototype.areTransitionsValid = function () {
        for (var index = 0; index < this.options.allowedTransitions.length; index++) {
            var transition = this.options.allowedTransitions[index];
            if (this.options.states.indexOf(transition.from) === -1) {
                return { areValid: false, errorMessage: this.generateInvalidTransitionMessage(index, true) };
            }
            if (this.options.states.indexOf(transition.to) === -1) {
                return { areValid: false, errorMessage: this.generateInvalidTransitionMessage(index, false) };
            }
        }
        return { areValid: true };
    };
    StatefulActionButton.prototype.generateInvalidTransitionMessage = function (transitionNumber, isOrigin) {
        return (isOrigin ? 'Origin' : 'Destination') + " of Transition #" + transitionNumber + " is not in the list of states. Ensure to use the same object reference as in the options.states.";
    };
    /**
     * Check if a transition from the current state to @param state is allowed.
     * @param state the destination of the transition
     */
    StatefulActionButton.prototype.isTransitionAllowed = function (state) {
        var _this = this;
        if (!this.options.allowedTransitions) {
            return true;
        }
        return this.options.allowedTransitions.some(function (transition) { return transition.from === _this.currentState && transition.to === state; });
    };
    /**
     * Handle user click.
     */
    StatefulActionButton.prototype.handleClick = function () {
        this.currentState.click();
    };
    return StatefulActionButton;
}());

StatefulActionButton.ID = 'StatefulActionButton';



/***/ }),

/***/ 132:
/***/ (function(module) {

module.exports = JSON.parse("{\"UserActionsButton_activateTooltip_caption\":{\"en\":\"Open user actions\"},\"UserActionsButton_deactivateTooltip_caption\":{\"en\":\"Close user actions\"},\"UserActionsButton_summaryLabel_caption\":{\"en\":\"Session Summary\"},\"UserActionsButton_activityLabel_caption\":{\"en\":\"User's Recent Activity\"}}");

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleActionButton; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToggleableButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony import */ var _StatefulActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);
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



var ToggleActionButton = /** @class */ (function (_super) {
    __extends(ToggleActionButton, _super);
    function ToggleActionButton(element, options, bindings) {
        var _this = _super.call(this, element, ToggleActionButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ToggleActionButton, options);
        _this.createInnerButton(bindings);
        return _this;
    }
    /**
     * Indicates whether the toggle button is in the activated state.
     */
    ToggleActionButton.prototype.isActivated = function () {
        return this.innerStatefulActionButton.getCurrentState() === this.activatedState;
    };
    /**
     * Sets the toggle button to the specified state.
     * @param activated Whether the button is activated.
     */
    ToggleActionButton.prototype.setActivated = function (activated) {
        if (activated !== this.isActivated()) {
            this.innerStatefulActionButton.switchTo(activated ? this.activatedState : this.deactivatedState);
        }
    };
    ToggleActionButton.prototype.onClick = function () {
        this.setActivated(!this.isActivated());
        if (this.options.click) {
            this.options.click();
        }
    };
    ToggleActionButton.prototype.createInnerButton = function (bindings) {
        this.deactivatedState = new _ToggleableButton__WEBPACK_IMPORTED_MODULE_1__[/* ToggleDeactivatedState */ "b"](this);
        this.activatedState = new _ToggleableButton__WEBPACK_IMPORTED_MODULE_1__[/* ToggleActivatedState */ "a"](this);
        this.innerStatefulActionButton = new _StatefulActionButton__WEBPACK_IMPORTED_MODULE_2__[/* StatefulActionButton */ "a"](this.element, {
            initialState: this.deactivatedState,
            states: [this.deactivatedState, this.activatedState],
            allowedTransitions: [
                { from: this.deactivatedState, to: this.activatedState },
                { from: this.activatedState, to: this.deactivatedState },
            ],
        }, bindings);
    };
    return ToggleActionButton;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

ToggleActionButton.ID = 'ToggleActionButton';
ToggleActionButton.ACTIVATED_CLASS_NAME = 'coveo-toggleactionbutton-activated';
ToggleActionButton.options = {
    /**
     * Specifies the button SVG icon displayed to activate the button.
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
     * <button class='CoveoToggleActionButton' data-activate-icon='&lt;svg width=&quot;1em&quot; height=&quot;1em&quot;&gt;...&lt;/svg&gt;'></button>
     * ```
     */
    activateIcon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ alias: 'deactivatedIcon' }),
    /**
     * Specifies the button tooltip text displayed to activate the button.
     *
     * Default is the empty string.
     *
     * ```html
     * <button class='CoveoToggleActionButton' data-activate-tooltip='Activate the feature'></button>
     * ```
     */
    activateTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ alias: 'deactivatedTooltip' }),
    /**
     * Specifies the button icon displayed to deactivate the button.
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
     * <button class='CoveoToggleActionButton' data-deactivate-icon='&lt;svg width=&quot;1em&quot; height=&quot;1em&quot;&gt;...&lt;/svg&gt;'></button>
     * ```
     */
    deactivateIcon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ alias: 'activatedIcon' }),
    /**
     * Specifies the button tooltip displayed to deactivate the button.
     *
     * Default is the empty string.
     *
     * ```html
     * <button class='CoveoToggleActionButton' data-deactivate-tooltip='Deactivate the feature'></button>
     * ```
     */
    deactivateTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ alias: 'activatedTooltip' }),
    /**
     * Specifies the handler called when the button is clicked.
     *
     * Default is `null`.
     *
     * This option is set in JavaScript when initializing the component.
     */
    click: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
    /**
     * Specifies the handler called when the button is activated.
     *
     * Default is `null`.
     *
     * This option is set in JavaScript when initializing the component.
     */
    activate: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
    /**
     * Specifies the handler called when the button is deactivated.
     *
     * Default is `null`.
     *
     * This option is set in JavaScript when initializing the component.
     */
    deactivate: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ToggleActionButton);



/***/ }),

/***/ 14:
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

/***/ 15:
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

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FullSearchNode", function() { return /* reexport */ FullSearchNode_FullSearchNode; });
__webpack_require__.d(__webpack_exports__, "UserActionsButtonNode", function() { return /* reexport */ UserActionsButtonNode_UserActionsButtonNode; });
__webpack_require__.d(__webpack_exports__, "CreateArticleButtonNode", function() { return /* reexport */ CreateArticleButtonNode_CreateArticleButtonNode; });
__webpack_require__.d(__webpack_exports__, "FullSearchButtonNode", function() { return /* reexport */ FullSearchButtonNode_FullSearchButtonNode; });

// EXTERNAL MODULE: external "Coveo"
var external_Coveo_ = __webpack_require__(3);

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/search-ui/FullSearch/FullSearch.ts + 1 modules
var FullSearch = __webpack_require__(55);

// CONCATENATED MODULE: ./src/components/search-ui/FullSearch/FullSearchNode.ts
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
 *  Interface Editor for FullSearchNode
 */
var FullSearchNode_FullSearchNode = /** @class */ (function (_super) {
    __extends(FullSearchNode, _super);
    function FullSearchNode(node, parser) {
        var _this = _super.call(this, node, parser) || this;
        _this.node = node;
        _this.isHidden = true;
        return _this;
    }
    FullSearchNode.match = function (node) {
        if (node && node.classList && node.classList.contains) {
            return node.classList.contains(external_window_Coveo_["Component"].computeCssClassNameForType(FullSearch["a" /* FullSearch */].ID));
        }
        return false;
    };
    Object.defineProperty(FullSearchNode.prototype, "hiddenOptionKeys", {
        /**
         * Returns an array of the options which will not be in the interfaceEditor
         */
        get: function () {
            return ['pageState', 'workspaceAPI', 'navigator', 'fullSearchComponentName'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullSearchNode.prototype, "displayedOptionKeys", {
        get: function () {
            var _this = this;
            return Object.keys(FullSearch["a" /* FullSearch */].options).filter(function (option) { return !_this.hiddenOptionKeys.includes(option); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handler to keep the interface editor side panel open
     * @param dom the html element of the dom
     */
    FullSearchNode.prototype.setupHandler = function (dom) {
        _super.prototype.setupHandler.call(this, dom);
        /**
         * This fix allowed the interface editor to select the right editable object on click.
         * Otherwise when you will click on a value, the value will be redraw and the targer will no longer be in the facet.
         */
        dom.addEventListener('click', function (e) {
            if (e.target != dom) {
                e.stopPropagation();
                dom.click();
            }
        });
    };
    /**
     * Returns content for the creation of the node
     */
    FullSearchNode.prototype.buildEditable = function () {
        return {
            tag: this.node.tagName.toLocaleLowerCase(),
            attributes: this.attributes,
            content: '',
        };
    };
    FullSearchNode.priority = external_Coveo_["InterfaceEditor"].ComponentNode.priority + 1;
    return FullSearchNode;
}(external_Coveo_["InterfaceEditor"].ComponentNode));

external_Coveo_["InterfaceEditor"].UiSettings.creators[FullSearch["a" /* FullSearch */].ID] = function (parser) {
    var node = new FullSearchNode_FullSearchNode(FullSearch["a" /* FullSearch */].getMarkup().el, parser);
    return Promise.resolve(node);
};
external_Coveo_["InterfaceEditor"].Parser.addNodeMatcher(FullSearchNode_FullSearchNode, 'FullSearch');

// EXTERNAL MODULE: ./src/components/search-ui/UserActions/UserActionsButton.ts
var UserActionsButton = __webpack_require__(117);

// CONCATENATED MODULE: ./src/components/search-ui/UserActions/UserActionsButtonNode.ts
var UserActionsButtonNode_extends = (undefined && undefined.__extends) || (function () {
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



var UserActionsButtonNode_UserActionsButtonNode = /** @class */ (function (_super) {
    UserActionsButtonNode_extends(UserActionsButtonNode, _super);
    function UserActionsButtonNode(node, parser) {
        var _this = _super.call(this, node, parser, UserActionsButton["a" /* UserActionsButton */]) || this;
        _this.node = node;
        return _this;
    }
    UserActionsButtonNode.match = function (node) {
        return $(node).hasClass(external_window_Coveo_["Component"].computeCssClassNameForType(UserActionsButton["a" /* UserActionsButton */].ID));
    };
    Object.defineProperty(UserActionsButtonNode.prototype, "displayedOptionKeys", {
        get: function () {
            return Object.keys(UserActionsButton["a" /* UserActionsButton */].options).filter(function (option) { return !['userId'].includes(option); });
        },
        enumerable: true,
        configurable: true
    });
    UserActionsButtonNode.priority = external_Coveo_["InterfaceEditor"].ResultComponentNode.priority + 1;
    return UserActionsButtonNode;
}(external_Coveo_["InterfaceEditor"].ComponentNode));

external_Coveo_["InterfaceEditor"].Parser.addNodeMatcher(UserActionsButtonNode_UserActionsButtonNode);

// EXTERNAL MODULE: ./src/components/search-ui/CreateArticle/CreateArticleButton.ts
var CreateArticleButton = __webpack_require__(53);

// CONCATENATED MODULE: ./src/components/search-ui/CreateArticle/CreateArticleButtonNode.ts
var CreateArticleButtonNode_extends = (undefined && undefined.__extends) || (function () {
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



var CreateArticleButtonNode_CreateArticleButtonNode = /** @class */ (function (_super) {
    CreateArticleButtonNode_extends(CreateArticleButtonNode, _super);
    function CreateArticleButtonNode(node, parser) {
        var _this = _super.call(this, node, parser, CreateArticleButton["a" /* CreateArticleButton */]) || this;
        _this.node = node;
        return _this;
    }
    CreateArticleButtonNode.match = function (node) {
        return $(node).hasClass(external_window_Coveo_["Component"].computeCssClassNameForType(CreateArticleButton["a" /* CreateArticleButton */].ID));
    };
    Object.defineProperty(CreateArticleButtonNode.prototype, "displayedOptionKeys", {
        /**
         * Get the properties to display in the interface editor.
         */
        get: function () {
            return Object.keys(CreateArticleButton["a" /* CreateArticleButton */].options).filter(function (option) { return !['workspaceAPI'].includes(option); });
        },
        enumerable: true,
        configurable: true
    });
    CreateArticleButtonNode.priority = external_Coveo_["InterfaceEditor"].ResultComponentNode.priority + 1;
    return CreateArticleButtonNode;
}(external_Coveo_["InterfaceEditor"].ComponentNode));

external_Coveo_["InterfaceEditor"].Parser.addNodeMatcher(CreateArticleButtonNode_CreateArticleButtonNode);

// EXTERNAL MODULE: ./src/components/search-ui/FullSearch/FullSearchButton.ts
var FullSearchButton = __webpack_require__(59);

// CONCATENATED MODULE: ./src/components/search-ui/FullSearch/FullSearchButtonNode.ts
var FullSearchButtonNode_extends = (undefined && undefined.__extends) || (function () {
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



var FullSearchButtonNode_FullSearchButtonNode = /** @class */ (function (_super) {
    FullSearchButtonNode_extends(FullSearchButtonNode, _super);
    function FullSearchButtonNode(node, parser) {
        var _this = _super.call(this, node, parser, FullSearchButton["a" /* FullSearchButton */]) || this;
        _this.node = node;
        return _this;
    }
    FullSearchButtonNode.match = function (node) {
        return $(node).hasClass(external_window_Coveo_["Component"].computeCssClassNameForType(FullSearchButton["a" /* FullSearchButton */].ID));
    };
    Object.defineProperty(FullSearchButtonNode.prototype, "displayedOptionKeys", {
        /**
         * Get the properties to display in the interface editor.
         */
        get: function () {
            return Object.keys(FullSearchButton["a" /* FullSearchButton */].options).filter(function (option) { return !['pageState', 'workspaceAPI', 'navigator', 'fullSearchComponentName'].includes(option); });
        },
        enumerable: true,
        configurable: true
    });
    FullSearchButtonNode.priority = external_Coveo_["InterfaceEditor"].ResultComponentNode.priority + 1;
    return FullSearchButtonNode;
}(external_Coveo_["InterfaceEditor"].ComponentNode));

external_Coveo_["InterfaceEditor"].Parser.addNodeMatcher(FullSearchButtonNode_FullSearchButtonNode);

// CONCATENATED MODULE: ./src/modules/agentPanel/ts/InterfaceEditorExtension.ts






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

/***/ 26:
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

/***/ 27:
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

/***/ 3:
/***/ (function(module, exports) {

module.exports = Coveo;

/***/ }),

/***/ 30:
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

/***/ 4:
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

/***/ 42:
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

/***/ 43:
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

/***/ 48:
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

/***/ 49:
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

/***/ 5:
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



/***/ }),

/***/ 9:
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToggleDeactivatedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleActivatedState; });
var ToggleDeactivatedState = /** @class */ (function () {
    function ToggleDeactivatedState(toggleableButton) {
        this.name = 'ToggleDeactivatedState';
        this.icon = toggleableButton.options.activateIcon;
        this.tooltip = toggleableButton.options.activateTooltip;
        this.click = function () { return toggleableButton.onClick(); };
    }
    return ToggleDeactivatedState;
}());

var ToggleActivatedState = /** @class */ (function () {
    function ToggleActivatedState(toggleableButton) {
        this.name = 'ToggleActivatedState';
        this.onStateEntry = function () {
            var _a;
            this.element.classList.add(ToggleActivatedState.ACTIVATED_CLASS_NAME);
            this.element.setAttribute('aria-pressed', 'true');
            (_a = toggleableButton.options.activate) === null || _a === void 0 ? void 0 : _a.apply(toggleableButton);
        };
        this.onStateExit = function () {
            var _a;
            this.element.classList.remove(ToggleActivatedState.ACTIVATED_CLASS_NAME);
            this.element.setAttribute('aria-pressed', 'false');
            (_a = toggleableButton.options.deactivate) === null || _a === void 0 ? void 0 : _a.apply(toggleableButton);
        };
        this.click = function () { return toggleableButton.onClick(); };
        this.icon = toggleableButton.options.deactivateIcon;
        this.tooltip = toggleableButton.options.deactivateTooltip;
    }
    return ToggleActivatedState;
}());

ToggleActivatedState.ACTIVATED_CLASS_NAME = 'coveo-toggleactionbutton-activated';



/***/ })

/******/ });(function(e, a) { for(var i in a) e[i] = a[i]; }(window.Coveo, c4sf))