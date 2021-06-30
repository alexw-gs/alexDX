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
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.Coveo;

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunitySearchboxEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StandaloneSearchbox; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CommunityStateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var utils_Environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71);
/* harmony import */ var utils_Community__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
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




var CommunitySearchboxEvent = /** @class */ (function () {
    function CommunitySearchboxEvent() {
    }
    CommunitySearchboxEvent.searchPageInitialized = 'searchPageInitialized';
    CommunitySearchboxEvent.routeChanged = 'StandaloneSearchbox.routeChanged';
    return CommunitySearchboxEvent;
}());

var SEARCH_PAGE_FLAG = 'isExternal';
var communityStateManagerSelector = "." + _CommunityStateManager__WEBPACK_IMPORTED_MODULE_1__[/* CommunityStateManager */ "a"].computeCssClassName(_CommunityStateManager__WEBPACK_IMPORTED_MODULE_1__[/* CommunityStateManager */ "a"]);
var searchInterfaceSelector = "." + coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"].computeCssClassName(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"]);
var facetValueSuggestionSelector = "." + coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassNameForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["FacetValueSuggestions"].ID);
/**
 * The _StandaloneSearchbox_ component is used to replace the default community searchbox.
 *
 * Its options are fronted in the Community Builder (see [Customizing the Standalone Searchbox](https://developers.coveo.com/x/lRwvAg#IncludingtheStandaloneSearchboxinYourCommunity-customize-ssb)).
 *
 * To learn how to implement this component in your community, see [Including the Standalone Searchbox in Your Community](https://developers.coveo.com/x/lRwvAg).
 */
var StandaloneSearchbox = /** @class */ (function (_super) {
    __extends(StandaloneSearchbox, _super);
    function StandaloneSearchbox(element, options, bindings) {
        var _this = _super.call(this, element, options, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.fvState = null;
        function getComponent(root, selector, klass) {
            return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(root)
                .findAll(selector)
                .map(function (el) { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(el, klass); });
        }
        _this.disableFacetValueStateHandler();
        _this.facetValueSuggests = getComponent(_this.element, facetValueSuggestionSelector, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["FacetValueSuggestions"]);
        // Set the clear icon.
        var magicBoxIcon = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).find('.magic-box-icon');
        // The main clear icon from the SearchUI.
        magicBoxIcon.innerHTML =
            '<svg enable-background="new 0 0 13 13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m7.881 6.501 4.834-4.834c.38-.38.38-1.001 0-1.381s-1.001-.38-1.381 0l-4.834 4.834-4.834-4.835c-.38-.38-1.001-.38-1.381 0s-.38 1.001 0 1.381l4.834 4.834-4.834 4.834c-.38.38-.38 1.001 0 1.381s1.001.38 1.381 0l4.834-4.834 4.834 4.834c.38.38 1.001.38 1.381 0s .38-1.001 0-1.381z"/></g></svg>';
        magicBoxIcon.getElementsByTagName('svg')[0].classList.add('magic-box-clear-svg');
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, StandaloneSearchbox, options);
        var originalMagicBoxSelect = _this.magicBox.onselect;
        var originalMagicBoxClear = _this.magicBox.clear;
        _this.magicBox.onsubmit = _this.onMagicboxSubmit.bind(_this);
        _this.magicBox.onselect = _this.onMagicboxSelect(originalMagicBoxSelect.bind(_this.magicBox)).bind(_this);
        _this.magicBox.clear = _this.handleMagicboxClear(originalMagicBoxClear.bind(_this.magicBox)).bind(_this);
        // Salesforce default search page
        if (!_this.options.searchPageName) {
            _this.options.searchPageName = StandaloneSearchbox.DEFAULT_SEARCH_PAGE_NAME;
        }
        // Search for an external search element that has a `CoveoCommunityStateManager`.
        var externalSearchElement = _this.getExternalSearchInterface();
        // In case we initialized after the search page
        if (externalSearchElement && externalSearchElement.className.indexOf('CoveoCaseCreationInterface') == -1) {
            var externalSearchInterface_1 = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].get(externalSearchElement, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"], true);
            if (externalSearchInterface_1) {
                _this.onSearchPageInitialized({ searchInterface: externalSearchInterface_1 });
            }
            else {
                // If we are lucky enough to be between the rendering and the search page initialization
                _this.bind.on(externalSearchElement, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["InitializationEvents"].afterInitialization, function () {
                    externalSearchInterface_1 = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].get(externalSearchElement, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"], true);
                    _this.onSearchPageInitialized({ searchInterface: externalSearchInterface_1 });
                });
            }
        }
        // Origin context for communities
        if (_this.usageAnalytics) {
            _this.usageAnalytics.setOriginContext('CommunitySearch');
        }
        _this.bindEvents();
        return _this;
    }
    StandaloneSearchbox.prototype.bindEvents = function () {
        var _this = this;
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].newQuery, this.onNewQuery.bind(this));
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, this.onBuildingQuery.bind(this));
        this.bind.onRootElement(CommunitySearchboxEvent.searchPageInitialized, this.onSearchPageInitialized.bind(this));
        /**
         * The default SearchButton sends its own SearchEvent.
         * To prevent that, we Noop the Analytic Component for that component
         * The search event is sent from the SearchInterface directly. [SFINT-2212]
         */
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["InitializationEvents"].afterInitialization, function () {
            var searchButtonEl = _this.root.querySelector("." + coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassName(Coveo.SearchButton));
            if (searchButtonEl === undefined)
                return;
            var searchButton = Coveo.get(searchButtonEl);
            if (searchButton === undefined)
                return;
            searchButton.click = function () {
                _this.submit();
            };
        });
        // The searchbox doesn't do queries, the search page does.
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].doneBuildingQuery, function (args) {
            if (!args[SEARCH_PAGE_FLAG]) {
                args.cancel = true;
                // Since the searchbox is giving up the query, we need to reset the duplicate query flag
                coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryboxQueryParameters"].allowDuplicateQuery();
            }
        });
        /*
         * If someone began typing before the searchbox was initialized
         * we need to sync the QueryStateModel to keep the state.
         * We don't, however, want to sync the QueryStateModel again
         * if the search terms corresponds to the query state hash.
         */
        var existingInputValue = this.magicBox.getText();
        if (existingInputValue && existingInputValue !== this.getQueryStateHashValue()) {
            this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["InitializationEvents"].afterInitialization, function () {
                _this.setText(existingInputValue);
                _this.magicBox.addSuggestions();
            });
        }
        // If there is already a state in the URL
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["InitializationEvents"].restoreHistoryState, function () {
            var existingState = _this.getQueryStateHashValue();
            if (existingState) {
                _this.setText(existingState);
            }
        });
        this.bind.onRootElement(this.queryStateModel.getEventName('preprocess'), function (args) {
            _this.fvState = args.fv && Object.keys(args.fv).length > 0 ? args.fv : null;
        });
        this.bind.onRootElement(CommunitySearchboxEvent.routeChanged, this.onHashChange.bind(this));
        window.addEventListener('hashchange', this.onHashChange.bind(this));
    };
    /**
     * Override the submit of the Omnibox so that the queryStateModel is updated before submitting the query.
     */
    StandaloneSearchbox.prototype.submit = function () {
        this.searchInterface.queryStateModel.set(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].attributesEnum.q, this.getText());
        _super.prototype.submit.call(this);
    };
    /*
     * Handle the search page initialization
     * We need to "re-bind" each time we are faced with a new SearchInterface
     * acting as a search page.
     *
     * This allows us to listen and make changes on each QueryStateModel updates.
     */
    StandaloneSearchbox.prototype.onSearchPageInitialized = function (args) {
        var _this = this;
        if (!args.searchInterface || this.externalSearchInterface) {
            return;
        }
        var communityStateManager = this.getCommunityStateManager(args.searchInterface);
        if (!communityStateManager) {
            return;
        }
        this.externalSearchInterface = args.searchInterface;
        // Forwards SSB options on Community state manager.
        communityStateManager.options.enableQuerySyntax = this.options.enableQuerySyntax;
        // Cache the queryController and the queryStateModel created by the SSB.
        var standaloneQueryController = this.queryController;
        var standaloneQueryStateModel = this.queryStateModel;
        var standaloneAnalyticsClient = this.usageAnalytics;
        var standaloneSearchInterface = this.searchInterface;
        /**
         * When the user navigates to a page without a Search Interface,
         * we restore the queryController and the queryStateModel to the one created at the SSB initialization.
         * Also, we remove the external Search Interface reference so we won't come accross invalid case where
         * no external Search Interface is present and the search box act like there is one.
         */
        this.bind.on(this.externalSearchInterface.element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["InitializationEvents"].nuke, function () {
            _this.queryController = standaloneQueryController;
            _this.queryStateModel = standaloneQueryStateModel;
            _this.facetValueSuggests.forEach(function (facetValueSuggest) {
                facetValueSuggest.queryStateModel = standaloneQueryStateModel;
                facetValueSuggest.queryController = standaloneQueryController;
                facetValueSuggest.searchInterface = standaloneSearchInterface;
                facetValueSuggest.facetValueSuggestionsProvider.queryController = standaloneQueryController;
            });
            _this.searchInterface.usageAnalytics = standaloneAnalyticsClient;
            _this.externalSearchInterface = null;
            _this.disableFacetValueStateHandler();
        });
        var externalRoot = this.externalSearchInterface.root;
        var externalQueryStateModel = this.externalSearchInterface.queryStateModel;
        /**
         * Merge both states so we won't come inside some sort of invalid state issue.
         */
        standaloneQueryStateModel.setMultiple(externalQueryStateModel.getAttributes(), { customAttribute: true });
        externalQueryStateModel.setMultiple(standaloneQueryStateModel.getAttributes(), { customAttribute: true });
        this.queryController = this.externalSearchInterface.queryController;
        this.queryStateModel = this.externalSearchInterface.queryStateModel;
        this.searchInterface.usageAnalytics = this.externalSearchInterface.usageAnalytics;
        this.facetValueSuggests.forEach(function (facetValueSuggest) {
            facetValueSuggest.queryStateModel = externalQueryStateModel;
            facetValueSuggest.queryController = _this.externalSearchInterface.queryController;
            facetValueSuggest.searchInterface = _this.externalSearchInterface;
            facetValueSuggest.facetValueSuggestionsProvider.queryController = _this.externalSearchInterface.queryController;
        });
        /**
         * Forward some QueryEvents.
         */
        var forwardedEvents = [coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].doneBuildingQuery, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].duringQuery];
        forwardedEvents.forEach(function (evt) {
            _this.bind.on(externalRoot, evt, function (args) {
                // Paint the external search event so we can filter on them.
                args[SEARCH_PAGE_FLAG] = true;
                _this.bind.trigger(_this.root, evt, args);
            });
        });
        /*
         * When executing a corrected query, we have to synchronize the
         * state and text of the standalone searchbox. It doesn't get the
         * changes made to the external search interface state automatically.
         * Ref.: SFINT-3458
         */
        this.bind.on(externalRoot, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].doneBuildingQuery, function (args) {
            var _a, _b;
            var currentExpression = (_b = (_a = args === null || args === void 0 ? void 0 : args.queryBuilder) === null || _a === void 0 ? void 0 : _a.expression) === null || _b === void 0 ? void 0 : _b.build();
            if (currentExpression && currentExpression !== '@uri' && this.magicBox.getText() !== currentExpression) {
                this.queryStateModel.set(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].attributesEnum.q, currentExpression, { silent: true });
                this.magicBox.setText(currentExpression);
            }
        });
        /*
         * Used to proxy the "changeAnalyticsCustomData" event.
         */
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["AnalyticsEvents"].changeAnalyticsCustomData, function (args) {
            if (_this.externalSearchInterface && _this.externalSearchInterface.usageAnalytics) {
                var liveAnalyticsClient = _this.externalSearchInterface.usageAnalytics;
                args.originLevel1 = liveAnalyticsClient.originLevel1 || args.originLevel1;
            }
            if (externalQueryStateModel) {
                args.originLevel2 = externalQueryStateModel.get(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].attributesEnum.t);
            }
            _this.bind.trigger(externalRoot, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["AnalyticsEvents"].changeAnalyticsCustomData, args);
        });
    };
    /**
     * Handle the Magicbox submit to overwrite the default
     * search-ui "same query" mecanic to allow the same query
     * to be made if you are not in the search page.
     */
    StandaloneSearchbox.prototype.onMagicboxSubmit = function () {
        return this.redirectIfNeeded(this.submit.bind(this));
    };
    /**
     * Handle the Magicbox clear to silently update the
     * QueryStateModel of the external Search Interface.
     */
    StandaloneSearchbox.prototype.handleMagicboxClear = function (originalMagicboxClear) {
        var _this = this;
        return function () {
            if (_this.externalSearchInterface && _this.externalSearchInterface.queryStateModel) {
                /**
                 * Update the state of the externalSearchInterface before we do update the rest to shush some query
                 * and ensure the state of the externalSearchInterface is correct.
                 */
                _this.externalSearchInterface.queryStateModel.set(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].attributesEnum.q, '', { silent: true });
            }
            /**
             * Call the original clear only when there's a seach page, we don't
             * need it elsewhere. Prevent issues with options like "QueryOnClear"
             */
            if (_this.isInSearchPage()) {
                originalMagicboxClear();
            }
            else {
                _this.magicBox.setText('');
            }
        };
    };
    /**
     * Handle a new Query Suggest being selected
     * Will redirect if needed, or proceed with the default onSelect function
     * @param originalMagicBoxSelect
     */
    StandaloneSearchbox.prototype.onMagicboxSelect = function (originalMagicBoxSelect) {
        var _this = this;
        return function (suggestion) {
            return _this.redirectIfNeeded(function () { return originalMagicBoxSelect(suggestion); });
        };
    };
    /**
     * Handle a new query being made
     * Will redirect the page if needed, or proceed with the default submit function.
     */
    StandaloneSearchbox.prototype.onNewQuery = function (args) {
        // If the event come from the externalSearch, we ignore it.
        if (!args[SEARCH_PAGE_FLAG]) {
            this.redirectIfNeeded(this.submit.bind(this));
        }
    };
    /**
     * Handle a new query being made
     * Will redirect the page if needed, or proceed with the default submit function.
     */
    StandaloneSearchbox.prototype.onBuildingQuery = function (args) {
        if (this.externalSearchInterface) {
            args.queryBuilder.numberOfResults = this.externalSearchInterface.resultsPerPage;
        }
    };
    /**
     *
     * @param dict
     */
    StandaloneSearchbox.prototype.buildRedirectStateHash = function (dict) {
        return Object.keys(dict)
            .map(function (key) { return key + "=" + (dict[key].join ? "[" + dict[key].join(',') + "]" : dict[key]); })
            .join('&');
    };
    /**
     * Redirects the page if needed, or call the callback
     * @param callback Function to be called instead of redirect
     */
    StandaloneSearchbox.prototype.redirectIfNeeded = function (callback) {
        /*
         * If we are not in the search page, we always want to trigger a new search.
         * If we are not on the search page, redirect then query.
         */
        if (!this.isInSearchPage()) {
            var state = { q: encodeURIComponent(this.getText()) };
            if (this.fvState) {
                state['fv'] = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["HashUtils"].encodeObject(this.fvState);
            }
            this.fireUrlEvent(this.options.searchPageName + "#" + this.buildRedirectStateHash(state));
            // Lose focus, we are about to redirect.
            this.magicBox.blur();
        }
        else if (callback) {
            callback();
        }
    };
    /**
     * Fire a URL event in order to change pages.
     * @param url The URL of the new page.
     */
    StandaloneSearchbox.prototype.fireUrlEvent = function (url) {
        var urlEvent = $A.get('e.force:navigateToURL');
        urlEvent.setParams({
            url: '/' + url,
            isredirect: false,
        });
        urlEvent.fire();
    };
    /**
     * Upate the hash state
     */
    StandaloneSearchbox.prototype.onHashChange = function () {
        // If we are not on the search page, no need to listen to the hash
        if (this.isInSearchPage()) {
            var expressionValue = this.getQueryStateHashValue();
            /**
             * Setting the text of the searchbox will trigger a query automatically.
             * So we need to ensure that the query has really change before updating the querybox text.
             */
            if (expressionValue === '' || (expressionValue && expressionValue != this.getText())) {
                // Here we only want to update the SSB text. we don't want to update the query state manager see SFINT-3007.
                this.magicBox.setText(expressionValue);
            }
        }
        else {
            // Reset the SSB otherwise.
            this.resetSearchbox();
        }
    };
    /**
     * Find all attributes that _doesn't_ have a default value
     * and remove them from the state.
     * After that reset it using the queryStateModel.
     * Then, set the text inside the SSB to an empty string.
     */
    StandaloneSearchbox.prototype.resetSearchbox = function () {
        var _this = this;
        Object.keys(this.queryStateModel.attributes)
            .filter(function (attribute) { return !_this.queryStateModel.defaultAttributes.hasOwnProperty(attribute); })
            .forEach(function (attribute) {
            delete _this.queryStateModel.attributes[attribute];
        });
        this.queryStateModel.reset();
        this.setText('');
    };
    /**
     * Returns the query state hash value
     */
    StandaloneSearchbox.prototype.getQueryStateHashValue = function () {
        try {
            // If the hash is falsy (empty/null/undefined/etc), return an empty string to ease the checks.
            return coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["HashUtils"].getValue(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].attributesEnum.q, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["HashUtils"].getHash(utils_Environment__WEBPACK_IMPORTED_MODULE_2__[/* Environment */ "a"])) || '';
        }
        catch (e) {
            this.logger.debug("No state found for parameter " + coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].attributesEnum.q + ".");
            return null;
        }
    };
    /*
     *  Get the last part of the path. Represent the page name in a Salesforce Community
     */
    StandaloneSearchbox.prototype.getCurrentPageName = function () {
        var path = utils_Environment__WEBPACK_IMPORTED_MODULE_2__[/* Environment */ "a"].location.pathname;
        var pageRefPosition = path.lastIndexOf('/s/') + 3;
        return path.substring(pageRefPosition);
    };
    StandaloneSearchbox.prototype.getExternalSearchInterface = function () {
        return Array.prototype.filter.call(document.querySelectorAll(searchInterfaceSelector), function (e) { return e.querySelector(communityStateManagerSelector) != null; })[0];
    };
    StandaloneSearchbox.prototype.getCommunityStateManager = function (searchInterface) {
        try {
            return Coveo.get(searchInterface.root.querySelector(communityStateManagerSelector), _CommunityStateManager__WEBPACK_IMPORTED_MODULE_1__[/* CommunityStateManager */ "a"]);
        }
        catch (e) {
            this.logger.error('CommunityStateManager is not present on the current Community Search page.');
            return null;
        }
    };
    StandaloneSearchbox.prototype.isInSearchPage = function () {
        return this.getCurrentPageName() === this.options.searchPageName || utils_Community__WEBPACK_IMPORTED_MODULE_3__[/* Community */ "a"].isExampleSearchTerm();
    };
    /**
     * Hack to disable *FacetValueStateHandler* on SSB.
     * Remove when SFINT-2931 is done.
     */
    StandaloneSearchbox.prototype.disableFacetValueStateHandler = function () {
        if (this.searchInterface && this.searchInterface.facetValueStateHandler) {
            this.searchInterface.facetValueStateHandler.handleFacetValueState = function () { };
        }
    };
    StandaloneSearchbox.ID = 'StandaloneSearchbox';
    StandaloneSearchbox.DEFAULT_SEARCH_PAGE_NAME = 'global-search/%40uri';
    /**
     * The possible options for StandaloneSearchbox
     * @componentOptions
     */
    StandaloneSearchbox.options = {
        /**
         * The name of the search page where the searchbox should redirect.
         *
         * Default value may change depending on your Coveo for Salesforce version. For more information, see [Including the Standalone Searchbox in Your Community](https://developers.coveo.com/x/lRwvAg).
         */
        searchPageName: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: StandaloneSearchbox.DEFAULT_SEARCH_PAGE_NAME }),
        /**
         * Specifies the placeholder text to put in the searchbox when no query is typed.
         */
        placeholder: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"].options.placeholder,
        /**
         * Specifies whether or not to trigger a query when the search box is cleared (see [Querybox - triggerQueryOnClear](https://coveo.github.io/search-ui/components/querybox.html#options.triggerqueryonclear)).
         */
        triggerQueryOnClear: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"].options.triggerQueryOnClear,
        /**
         * Specifies whether or not field names should be suggested (see [Omnibox - enableFieldAddon](https://coveo.github.io/search-ui/components/omnibox.html#options.enablefieldaddon)).
         */
        enableFieldAddon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"].options.enableFieldAddon,
        /**
         * Specifies whether or not to complete query extensions (see [Omnibox - enableQueryExtensionAddon](https://coveo.github.io/search-ui/components/omnibox.html#options.enablequeryextensionaddon)).
         */
        enableQueryExtensionAddon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"].options.enableQueryExtensionAddon,
        /**
         * Specifies whether or not to enable Coveo Machine Learning (see [Omnibox - enableRevealQuerySuggestAddon](https://coveo.github.io/search-ui/components/omnibox.html#options.enablequerysuggestaddon)).
         */
        enableQuerySuggestAddon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"].options.enableQuerySuggestAddon,
    };
    return StandaloneSearchbox;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(StandaloneSearchbox);


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StandaloneSearchbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommunitySearchboxEvent", function() { return _StandaloneSearchbox__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandaloneSearchbox", function() { return _StandaloneSearchbox__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
/**
 * Indirection class for environment reference like `window.location`.
 */
var Environment = /** @class */ (function () {
    function Environment() {
    }
    /**
     * Reset all reference to their default value.
     */
    Environment.reset = function () {
        Environment.location = window.location;
    };
    /**
     * Reference the current location.
     * Default: `window.location`.
     */
    Environment.location = window.location;
    return Environment;
}());



/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityStateManager; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_Community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
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


// Specific search term that is considered only made by the Standalone Searchbox.
var SSB_SIGNAL = '@uri';
/**
 * The _CommunityStateManager_ component is used to connect your Lightning search component to the Coveo Standalone Searchbox (see [Including the Standalone Searchbox in Your Community](https://developers.coveo.com/x/lRwvAg)).
 *
 * This component is used in a Lightning search page, in the `coveo-search-section`, as such:
 *
 * ```html
 * <div class="coveo-search-section">
 *   <div class="CoveoCommunityStateManager"></div>
 * </div>
 * ```
 */
var CommunityStateManager = /** @class */ (function (_super) {
    __extends(CommunityStateManager, _super);
    /*
     * This class is used to handle the q part of the state and inject it inside que query "Expression".
     */
    function CommunityStateManager(element, options, bindings) {
        var _this = _super.call(this, element, CommunityStateManager.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, CommunityStateManager, options);
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, function (args) { return _this.handleBuildingQuery(args); });
        return _this;
    }
    CommunityStateManager.prototype.handleBuildingQuery = function (args) {
        var salesforceQuery = this.getSalesforceQuery();
        if (salesforceQuery === SSB_SIGNAL || salesforceQuery === '') {
            new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryboxQueryParameters"](this.options).addParameters(args.queryBuilder, this.queryStateModel.get('q'));
        }
        else {
            new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryboxQueryParameters"](this.options).addParameters(args.queryBuilder, salesforceQuery);
        }
    };
    CommunityStateManager.prototype.getSalesforceQuery = function () {
        /**
         * In the builder *special* domain, the default query may be a query like "Example Search Term".
         */
        if (utils_Community__WEBPACK_IMPORTED_MODULE_1__[/* Community */ "a"].isExampleSearchTerm()) {
            return SSB_SIGNAL;
        }
        return utils_Community__WEBPACK_IMPORTED_MODULE_1__[/* Community */ "a"].salesforceQuery;
    };
    CommunityStateManager.ID = 'CommunityStateManager';
    /**
     * The option for the CommunityStateManager component
     * @componentOptions
     */
    CommunityStateManager.options = {
        /**
         * Performs the same function as the Querybox option of the same name (see [Querybox - enableLowercaseOperators](https://coveo.github.io/search-ui/components/querybox.html#options.enablelowercaseoperators)).
         *
         * ```html
         * <div data-enable-lowercase-operators="false"></div>
         * ```
         */
        enableLowercaseOperators: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Querybox"].options.enableLowercaseOperators,
        /**
         * Performs the same function as the Querybox option of the same name (see [Querybox - enablePartialMatch](https://coveo.github.io/search-ui/components/querybox.html#options.enablepartialmatch)).
         *
         * ```html
         * <div data-enable-partial-match="false"></div>
         * ```
         */
        enablePartialMatch: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Querybox"].options.enablePartialMatch,
        /**
         * Performs the same function as the Querybox option of the same name (see [Querybox - enableQuerySyntax](https://coveo.github.io/search-ui/components/querybox.html#options.enablequerysyntax)).
         *
         * ```html
         * <div data-enable-query-syntax="true"></div>
         * ```
         */
        enableQuerySyntax: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Querybox"].options.enableQuerySyntax,
        /**
         * Performs the same function as the Querybox option of the same name (see [Querybox - enableQuestionMarks](https://coveo.github.io/search-ui/components/querybox.html#options.enablequestionmarks)).
         *
         * ```html
         * <div data-enable-question-marks="false"></div>
         * ```
         */
        enableQuestionMarks: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Querybox"].options.enableQuestionMarks,
        /**
         * Performs the same function as the Querybox option of the same name (see [Querybox - enableWildcards](https://coveo.github.io/search-ui/components/querybox.html#options.enablewildcards)).
         *
         * ```html
         * <div data-enable-wildcards="false"></div>
         * ```
         */
        enableWildcards: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Querybox"].options.enableWildcards,
        /**
         * Performs the same function as the Querybox option of the same name (see [Querybox - partialMatchThreshold](https://coveo.github.io/search-ui/components/querybox.html#options.partialmatchthreshold)).
         *
         * This feature is only available to Coveo for Salesforce Pro and Enterprise users.
         *
         * ```html
         * <div data-partial-match-keywords="5"></div>
         * ```
         */
        partialMatchKeywords: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Querybox"].options.partialMatchKeywords,
        /**
         * Performs the same function as the Querybox option of the same name (see [Querybox - partialMatchThreshold](https://coveo.github.io/search-ui/components/querybox.html#options.partialmatchthreshold)).
         *
         * ```html
         * <div data-partial-match-threshold="50%"></div>
         * ```
         */
        partialMatchThreshold: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Querybox"].options.partialMatchThreshold,
    };
    return CommunityStateManager;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(CommunityStateManager);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Community; });
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);

// Regex that test if whether or not an url correspond to a builder or a preview.
var BUILDER_OR_PREVIEW = /(--(preview|live)|(live|site)preview|\.preview\.)/;
// Query made by default inside the salesforce builder.
var SALESFORCE_EXAMPLE_QUERY = 'Example search term';
/**
 * Helper class for lightning community related utils.
 */
var Community = /** @class */ (function () {
    function Community() {
    }
    Object.defineProperty(Community, "defaultSearchExpression", {
        /**
         * Query made by default inside the salesforce builder.
         */
        get: function () {
            return 'Example search term';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Community, "salesforceQuery", {
        /**
         * The query part of the search page url.
         */
        get: function () {
            return decodeURIComponent(_Environment__WEBPACK_IMPORTED_MODULE_0__[/* Environment */ "a"].location.pathname.split(/\/(global-)?search\//)[2] || '');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tell whether or not we are on the salesforce Example search term page.
     */
    Community.isExampleSearchTerm = function () {
        return Community.isInBuilderOrPreview() && Community.salesforceQuery === SALESFORCE_EXAMPLE_QUERY;
    };
    /**
     * Tell whether or not the url is a Community builder or a Community preview.
     */
    Community.isInBuilderOrPreview = function () {
        return BUILDER_OR_PREVIEW.test(_Environment__WEBPACK_IMPORTED_MODULE_0__[/* Environment */ "a"].location.origin);
    };
    return Community;
}());



/***/ })

/******/ });(function(e, a) { for(var i in a) e[i] = a[i]; }(window.Coveo, c4sf))