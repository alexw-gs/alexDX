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
/******/ 	return __webpack_require__(__webpack_require__.s = 154);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = window.Coveo;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = $;

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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "SalesforceQuickviewDocument", function() { return /* binding */ SalesforceQuickviewDocument_SalesforceQuickviewDocument; });

// EXTERNAL MODULE: external "window.Coveo"
var external_window_Coveo_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/modules/common/ts/Toast.ts + 1 modules
var Toast = __webpack_require__(120);

// CONCATENATED MODULE: ./src/components/search-ui/SalesforceQuickview/ts/SalesforceQuickviewQueryController.ts
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
 * Small override of the {@link QueryController}.
 * Override @method getLastQuery to return a minimalist {@link IQuery} using the @member queryString.
 */
var SalesforceQuickviewQueryController = /** @class */ (function (_super) {
    __extends(SalesforceQuickviewQueryController, _super);
    /**
     *
     * @param element {HTMLElement} - the element where to instantiate this component
     * @param options {ISearchInterfaceOptions} - the options for the creation of the component.
     * @param usageAnalytics {IAnalyticsClient} - the UA client to use in this component.
     * @param searchInterface {SearchInterface} - the Search Interface to use in this component.
     * @param queryString {string} - the `q` of the Query to return when calling @method getLastQuery.
     */
    function SalesforceQuickviewQueryController(element, options, usageAnalytics, searchInterface, queryString) {
        var _this = _super.call(this, element, options, usageAnalytics, searchInterface) || this;
        _this.queryString = decodeURIComponent(queryString);
        return _this;
    }
    /**
     * Returned the stubbed lastquery.
     * It'll store the query to avoid rebuilding it if recalled.
     */
    SalesforceQuickviewQueryController.prototype.getLastQuery = function () {
        if (this.lastQuery) {
            return this.lastQuery;
        }
        var queryBuilder = new Coveo.QueryBuilder();
        if (this.queryString) {
            queryBuilder.expression.add(this.queryString);
        }
        this.lastQuery = queryBuilder.build();
        return this.lastQuery;
    };
    return SalesforceQuickviewQueryController;
}(external_window_Coveo_["QueryController"]));


// CONCATENATED MODULE: ./src/components/search-ui/SalesforceQuickview/ts/SalesforceQuickviewDocument.ts
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
 * Boilerplate for the customizable quickview.
 * Use the given @member queryString and  @member documentID to initialize the state
 * before opening an actual {@link QuickviewDocument}
 */
var SalesforceQuickviewDocument_SalesforceQuickviewDocument = /** @class */ (function () {
    function SalesforceQuickviewDocument(searchInterfaceElement, quickviewElement, queryString, documentID) {
        var _this = this;
        // Create a toast manager to handle the error.
        this.toastManager = new Toast["a" /* ToastManager */](searchInterfaceElement);
        // Get the Search Interface and its binding.
        var searchInterface = Coveo.get(searchInterfaceElement, Coveo.SearchInterface);
        var bindings = searchInterface.getBindings();
        // Create a new the query controller and replace the one in the extracted bindings with this one.
        this.queryController = new SalesforceQuickviewQueryController(document.createElement('div'), bindings.queryController.options, new Coveo.NoopAnalyticsClient(), searchInterface, queryString);
        bindings.queryController = this.queryController;
        // Get the document from the uniqueId of its result the q of the query to support the highlight.
        try {
            var getDocumentData = { requestData: queryString };
            this.queryController
                .getEndpoint()
                .getDocument(documentID, getDocumentData)
                .then(function (result) {
                // Create a new QuickviewDocument using our custom bindings and the result we just get.
                new external_window_Coveo_["QuickviewDocument"](quickviewElement, null, bindings, result);
                // And open it asap.
                Coveo.Initialization.dispatchNamedMethodCallOrComponentCreation('open', quickviewElement, null);
            })
                .catch(function (err) {
                _this.handleError(err);
            });
        }
        catch (err) {
            this.handleError(err);
        }
    }
    SalesforceQuickviewDocument.prototype.handleError = function (err) {
        var toastOption;
        if (err && err.name) {
            toastOption = { title: err.name, description: err.message };
        }
        else {
            toastOption = { title: typeof err === 'string' ? err : JSON.stringify(err) };
        }
        this.toastManager.createToast(__assign(__assign({}, toastOption), { modifiers: { style: Toast["b" /* ToastModStyle */].Error } }));
    };
    return SalesforceQuickviewDocument;
}());



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

/***/ })

/******/ });(function(e, a) { for(var i in a) e[i] = a[i]; }(window.Coveo, c4sf))