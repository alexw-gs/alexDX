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
/******/ 	return __webpack_require__(__webpack_require__.s = 151);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "HealthCheckPanel", function() { return /* reexport */ HealthCheckPanel_HealthCheckPanel; });

// EXTERNAL MODULE: external "$"
var external_$_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/modules/healthCheck/ts/HealthCheck.ts
/*
 * Represent the test result state.
 */
var HealthCheckState;
(function (HealthCheckState) {
    HealthCheckState[HealthCheckState["Working"] = 0] = "Working";
    HealthCheckState[HealthCheckState["NotWorking"] = 1] = "NotWorking";
    HealthCheckState[HealthCheckState["UnknownIssue"] = 2] = "UnknownIssue";
})(HealthCheckState || (HealthCheckState = {}));
/*
 * Class in charge of representing a test result in the Health Check
 */
var HealthCheck = /** @class */ (function () {
    /*
     * HealthCheck class main constructor
     *
     * @param title The title of the health check
     * @param desc Description of the health check that will be shown while hovering the detail icon
     * @param healthCheck Health check callback function
     * @param options Health check additionnal options
     */
    function HealthCheck(title, state, desc, tooltip, helpDocLabel, helpDocLink) {
        if (title == null || title.length === 0) {
            throw new Error('The title is invalid');
        }
        if (desc == null || desc.length === 0) {
            throw new Error('The description is invalid');
        }
        if (state == null) {
            throw new Error('Invalid state');
        }
        this.toolTip = tooltip;
        this.helpDocLabel = helpDocLabel;
        this.helpDocLink = helpDocLink;
        this.title = title;
        this.state = state;
        this.description = desc;
    }
    /*
     * Convert the Health check test state into appropriate classname
     *
     * @returns The classname assigned to the current state.
     */
    HealthCheck.prototype.getClassname = function () {
        var classname;
        switch (this.state) {
            case HealthCheckState.NotWorking:
                classname = 'not-working';
                break;
            case HealthCheckState.Working:
                classname = 'working';
                break;
            case HealthCheckState.UnknownIssue:
                classname = 'unknown-issue';
                break;
        }
        return classname;
    };
    return HealthCheck;
}());


// CONCATENATED MODULE: ./src/modules/healthCheck/ts/HealthCheckUtils.ts
// Find the component root with the provided @nodeclass in the @elem innerDOM. Return the root.
function findRoot(elem, nodeclass) {
    var validRoot;
    if (!$(elem).hasClass(nodeclass)) {
        if ($(elem)
            .find('.' + nodeclass)
            .get().length !== 1) {
            throw Error('root element is invalid');
        }
        else {
            validRoot = $(elem).find('.' + nodeclass);
        }
    }
    else {
        validRoot = $(elem);
    }
    return validRoot;
}
function convertRemoteActionError(originalError) {
    var error = new Error();
    error.message = originalError.message ? originalError.message : '';
    error.stack = originalError.where ? originalError.where : null;
    return error;
}

// CONCATENATED MODULE: ./src/modules/healthCheck/ts/HealthCheckSubPanel.ts


// Generate a health check subpanel.
var HealthCheckSubPanel_HealthCheckSubPanel = /** @class */ (function () {
    // Build a health check subpanel and build the associated DOM representation on the given @elem attribute.
    function HealthCheckSubPanel(elem, title, checks, contextBox, icons) {
        this.root = findRoot(elem, 'coveo-hc-subpanel');
        this.icons = icons;
        external_$_(this.root).append(this.buildTitle(title), external_$_('<div>').addClass('coveo-hc-context-panel').append(contextBox), this.buildTable(checks), LOADING_ANIMATION);
        this._contextBox = external_$_(this.root).children(':nth-child(2)');
        this._checks = external_$_(this.root).children(':nth-child(3)');
        this._loading = external_$_(this.root).children(':nth-child(4)');
    }
    Object.defineProperty(HealthCheckSubPanel.prototype, "error", {
        // Set the error
        set: function (errorMessage) {
            var errorTemplate = external_$_("\n    <div class=\"blankslate m2 mod-danger coveo-critical-error\">\n      <div class=\"coveo-error-header\">\n        <div class=\"coveo-error-icon\"></div>\n        <div class=\"coveo-error-message\"><span>" + errorMessage + "</span></div>\n      </div>\n    </div>");
            external_$_(this.root).find(this._checks).replaceWith(errorTemplate);
            this._checks = errorTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthCheckSubPanel.prototype, "visible", {
        // Set the visibility of the panel.
        set: function (isVisible) {
            this._visible = isVisible;
            if (isVisible) {
                this.root.show();
            }
            else {
                this.root.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthCheckSubPanel.prototype, "loading", {
        // Show the loading animation when isLoading === true. Hide it otherwise.
        set: function (isLoading) {
            if (isLoading) {
                this.showLoading();
            }
            else {
                this.hideLoading();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthCheckSubPanel.prototype, "contextBox", {
        // Set the content of the grey header in the subpanel.
        set: function (contextBox) {
            var context = external_$_('<div class="coveo-hc-context-panel">').append(contextBox);
            external_$_(this.root).find(this._contextBox).replaceWith(context);
            this._contextBox = context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthCheckSubPanel.prototype, "checks", {
        // Set the health check test list an update the test table view.
        set: function (checks) {
            this.loading = false;
            var checkTable = this.buildTable(checks);
            external_$_(this.root).find(this._checks).replaceWith(checkTable);
            this.root.find('.coveo-hc-overlay-dark').remove();
            this._checks = checkTable;
        },
        enumerable: true,
        configurable: true
    });
    // Use to toggle the subpanel. (ex: the [ADVANCED DETAILS] button use it).
    HealthCheckSubPanel.prototype.toggle = function () {
        this.root.toggle();
        this._visible = !this._visible;
    };
    // Show the loading animation.
    HealthCheckSubPanel.prototype.showLoading = function () {
        external_$_(this._loading).show();
    };
    // Hide the loading animation.
    HealthCheckSubPanel.prototype.hideLoading = function () {
        external_$_(this._loading).hide();
    };
    // Build the subpanel title DOM representation.
    HealthCheckSubPanel.prototype.buildTitle = function (title) {
        var titleElem = document.createElement('div');
        external_$_(titleElem).addClass('coveo-hc-title').text(title);
        return titleElem;
    };
    // Build the subpanel test table DOM representation.
    HealthCheckSubPanel.prototype.buildTable = function (checks) {
        if (checks == null || checks.length === 0) {
            return external_$_('<div>').hide();
        }
        return external_$_('<table class="coveo-hc-table"/>')
            .append(this.buildTableRows(checks))
            .prepend('<thead><tr><th>Service</th><th>Status</th><th>Help</th></tr></thead>');
    };
    // Build the subpanel test table row DOM representation.
    HealthCheckSubPanel.prototype.buildTableRows = function (checks) {
        var _this = this;
        return checks.map(function (check) {
            var helpLink = "<a " + (check.helpDocLink ? "href=\"" + check.helpDocLink + "\"" : '') + " target=\"_blank\">" + (check.helpDocLabel ? check.helpDocLabel : '') + "</a>";
            var row = external_$_("<tr class=\"" + check.getClassname() + "\"></tr>").append("<td>" + check.title + (_this.icons != null ? "<img src=\"" + _this.icons.help + "\" title=\"" + check.toolTip + "\" data-placement=\"right\"/>" : '') + "</td>" +
                ("<td><div class=\"" + check.getClassname() + "\"></div>" + check.description.replace(/\n/g, '').trim() + "</td>") +
                ("<td>" + (check.helpDocLink || check.helpDocLabel ? helpLink : '') + "</td>"));
            return row;
        });
    };
    return HealthCheckSubPanel;
}());

var LOADING_ANIMATION = '<div class="spinner mod-vertical-margin" style="display:none;">' +
    '<div class="bounce1"></div>' +
    '<div class="bounce2"></div>' +
    '<div class="bounce3"></div>' +
    '</div>';

// CONCATENATED MODULE: ./src/modules/healthCheck/ts/HealthCheckPanel.ts




// #endregion
// #region constant
var HEALTH_CHECK_PANEL_CLASS = 'coveo-health-check-panel';
// Buttons classes
var CLOSE_BUTTON_CLASS = 'coveo-close-button';
var ADVANCED_DETAILS_BUTTON_CLASS = 'coveo-advanced-details-button';
// Organization details subpanel related classes
var ORG_DETAILS_SECTION_CLASS = 'coveo-org-details';
var COVEO_ORGANIZATION_FIELD_CLASS = 'coveo-hc-coveo-organization-field';
var SALESFORCE_ORGANIZATION_FIELD_CLASS = 'coveo-hc-salesforce-organization-field';
var SANDBOX_FIELD_CLASS = 'coveo-hc-sandbox-field';
// Health check tests subpanel related classes
var HEALTH_CHECK_TESTS_SUBPANEL = 'coveo-search-token-details';
// Advanced details subpanel related classes
var ADVANCE_DETAILS_CLASS = 'coveo-advance-details';
var SEARCH_TOKEN_CLASS = 'coveo-search-token';
var HEALTH_TOKEN_CLASS = 'coveo-health-check-token';
var ORG_DETAILS_SECTION_TITLE = 'Organization Details';
var TESTS_SECTION_TITLE = 'Search Token Details';
var ADVANCE_DETAILS_SECTION_TITLE = 'Advanced Details';
// DOM parts
var DEFAULT_SUBPANEL = '<div class="coveo-hc-subpanel">';
var HEADER = "\n  <div class=\"coveo-hc-header\">\n    <h1>\n      <div class=\"" + CLOSE_BUTTON_CLASS + "\">Close  <span class=\"coveo-hc-close-x\">X</span></div>\n    </h1>\n  </div>";
var RUN_HEALTH_CHECK = "\n  <div class=\"coveo-hc-runner input-field form-group\">\n    <div class=\"label\">Search token</div>\n    <input class=\"coveo-hc-input\" type=\"text\" placeholder=\"Enter your search token\"></input>\n    <button class=\"btn spaced-box coveo-run-hc\">Run health check</button>\n  </div>";
var ERROR_MESSAGE_DISPLAY = "\n<div class=\"blankslate m2 mod-danger coveo-critical-error\" style=\"display:none;\">\n  <div class=\"coveo-error-header\">\n    <div class=\"coveo-error-icon\"></div>\n    <div class=\"coveo-error-message\">\n      <span>An unexpected error has occurred.</span><br>\n      <span>If the error persists, contact Coveo Support.</span><br>\n      <span>To know the current status of the Coveo Cloud services, see <a href=\"http://status.cloud.coveo.com/\">Coveo System Status</a>.</span>\n    </div>\n  </div>\n  <div class=\"coveo-error-detail\"><pre></pre></div>\n</div>";
var HealthCheckPanel_LOADING_ANIMATION = "\n  <div class=\"loading-prompt\">\n    <div>Performing health check...</div>\n    <div class=\"spinner\">\n      <div class=\"bounce1\"></div>\n      <div class=\"bounce2\"></div>\n      <div class=\"bounce3\"></div>\n    </div>\n  </div>";
var ADVANCE_DETAILS = "\n  <div>\n    <div>Search Token Payload</div>\n    <div class=\"coveo-search-token\"><pre></pre></div>\n    <div>Raw JSON Response</div>\n    <div class=\"coveo-health-check-token\"><pre></pre></div>\n  </div>";
var ADVANCED_DETAILS_BUTTON = "<button class=\"btn spaced-box " + ADVANCED_DETAILS_BUTTON_CLASS + "\">Advanced Details</div>";
// Query strings
var RUN_HEALTH_CHECK_BUTTON_LOCATION = '.coveo-hc-runner .coveo-run-hc';
var SEARCH_TOKEN_INPUT_LOCATION = '.coveo-hc-runner .coveo-hc-input';
var LOADING_ANIMATION_LOCATION = '.loading-prompt';
var SEARCH_TOKEN_LOCATION = SEARCH_TOKEN_CLASS + " pre";
var HEALTH_TOKEN_LOCATION = '.coveo-health-check-token pre';
// #endregion
/*
 * HealthCheckPanel is the main panel of the Health Check page (the entry point).
 * The class is in charge of the component rendering.
 */
var HealthCheckPanel_HealthCheckPanel = /** @class */ (function () {
    /*
     * Constructor of the HealthCheckPanel.
     * Render the panel after the getHealthCheck/1 is completed.
     *
     * @param elem The root element where the HealthCheckPanel will the anchored. (will search for an element that has a coveo-health-check-panel class)
     * @param context The component context where the HealthCheckPanel is initialize
     */
    function HealthCheckPanel(elem, context) {
        var _this = this;
        // Actions to perform when we first build the page after the healthcheck is performed.
        this.builder = function (response, event) {
            if (event && event.status) {
                _this.lastHealthCheckToken = JSON.stringify(response, null, 4);
                _this.load();
                _this.hideLoadingAnimation();
                _this.parse(response, function (result) {
                    _this.update(result.user.tests, result.organization.tests, result.organization.details);
                    _this.getSearchToken();
                });
            }
            else {
                try {
                    _this.renderCriticalError(JSON.parse(convertRemoteActionError(event).message));
                }
                catch (_a) {
                    _this.renderCriticalError(event);
                }
            }
        };
        // Actions to perform to update the page after an healthcheck rerun is performed.
        this.updater = function (response, event) {
            if (event && event.status) {
                _this.lastHealthCheckToken = JSON.stringify(response, null, 4);
                _this.userTestsPanel.loading = false;
                _this.parse(response, function (result) {
                    _this.update(result.user.tests);
                    _this.getSearchToken();
                });
            }
            else if (event.message) {
                _this.renderError('The response is invalid.', convertRemoteActionError(event));
            }
            else {
                _this.renderError('The response is invalid.');
            }
        };
        this.root = findRoot(elem, HEALTH_CHECK_PANEL_CLASS);
        this.context = context;
        this.errorMessage = (function () {
            if (_this.context.icons && _this.context.icons.error) {
                var errorMessage = external_$_(ERROR_MESSAGE_DISPLAY);
                errorMessage.find('.coveo-critical-error .coveo-error-icon').prepend("<img src=\"" + _this.context.icons.error + "\">");
                return errorMessage;
            }
            else {
                return external_$_(ERROR_MESSAGE_DISPLAY);
            }
        })();
        external_$_(this.root).append(this.errorMessage, HealthCheckPanel_LOADING_ANIMATION);
        try {
            this.context.getHealthCheck(this.builder);
        }
        catch (e) {
            this.renderCriticalError(e);
        }
    }
    HealthCheckPanel.prototype.getSearchToken = function () {
        var _this = this;
        this.context.getSearchToken(function (jwt) {
            try {
                /*
                 * Get the middle part of the jwt
                 * then decode de base64 then format
                 */
                _this.lastSearchToken = _this.parseJWT(jwt);
            }
            catch (e) {
                _this.renderError('An error occurred while getting the search token information.', e);
            }
            finally {
                _this.update();
            }
        });
    };
    // Load and render each element in the panel.
    HealthCheckPanel.prototype.load = function () {
        this.header = external_$_(HEADER);
        this.orgDetailPanel = new HealthCheckSubPanel_HealthCheckSubPanel(external_$_(DEFAULT_SUBPANEL).addClass(ORG_DETAILS_SECTION_CLASS), ORG_DETAILS_SECTION_TITLE, [], this.buildOrgDetails(null), this.context.icons);
        this.userTestsPanel = new HealthCheckSubPanel_HealthCheckSubPanel(external_$_(DEFAULT_SUBPANEL).addClass(HEALTH_CHECK_TESTS_SUBPANEL), TESTS_SECTION_TITLE, [], external_$_(RUN_HEALTH_CHECK), this.context.icons);
        this.searchTokenPanel = new HealthCheckSubPanel_HealthCheckSubPanel(external_$_(DEFAULT_SUBPANEL).addClass(ADVANCE_DETAILS_CLASS), ADVANCE_DETAILS_SECTION_TITLE, [], external_$_(ADVANCE_DETAILS));
        external_$_(this.root).append(this.header, this.orgDetailPanel.root, this.userTestsPanel.root, ADVANCED_DETAILS_BUTTON, this.searchTokenPanel.root);
        this.searchTokenPanel.visible = false;
        this.addHandlers();
    };
    // Reset the subpanel property that need to be reset when the user click on the Run Health Check button.
    HealthCheckPanel.prototype.reset = function () {
        this.userTestsPanel.checks = [];
    };
    // Update the subpanel property that need to be updated when an healthcheck callback is completed.
    HealthCheckPanel.prototype.update = function (searchTokenTests, organizationTests, organizationDetails) {
        this.orgDetailPanel.loading = false;
        this.userTestsPanel.loading = false;
        if (organizationDetails != null) {
            this.orgDetailPanel.contextBox = this.buildOrgDetails(organizationDetails);
        }
        if (organizationTests != null) {
            this.orgDetailPanel.checks = organizationTests;
        }
        if (searchTokenTests != null) {
            this.userTestsPanel.checks = searchTokenTests;
        }
        this.searchTokenPanel.contextBox = this.buildAdvancePanel(this.lastSearchToken, this.lastHealthCheckToken);
    };
    // Add the event button handlers like the close button handler or the run health check button handler.
    HealthCheckPanel.prototype.addHandlers = function () {
        var _this = this;
        // Handle the click on the RUN HEALTH CHECK button. Call the healthcheck callback.
        external_$_(this.root)
            .find(RUN_HEALTH_CHECK_BUTTON_LOCATION)
            .on('click', function (event) {
            var token = external_$_(_this.root).find(SEARCH_TOKEN_INPUT_LOCATION).val();
            _this.reset();
            try {
                if (token == null || token === '') {
                    _this.userTestsPanel.loading = true;
                    try {
                        _this.context.getHealthCheck(_this.updater);
                    }
                    catch (e) {
                        _this.renderCriticalError(e);
                    }
                }
                else {
                    _this.lastSearchToken = _this.parseJWT(token);
                    _this.userTestsPanel.loading = true;
                    _this.context.runHealthCheck(_this.updater, token);
                }
            }
            catch (e) {
                _this.renderError('The Search Token is invalid.', e);
            }
        });
        // Handle the click on the close button. Close the panel.
        external_$_(this.root)
            .find('.' + CLOSE_BUTTON_CLASS)
            .click(function () {
            external_$_(_this.root).hide();
        });
        // Handle the click on the advanced details button. Close the panel.
        external_$_(this.root)
            .find('.' + ADVANCED_DETAILS_BUTTON_CLASS)
            .click(function () {
            _this.searchTokenPanel.toggle();
        });
    };
    // Hide the loading animation.
    HealthCheckPanel.prototype.hideLoadingAnimation = function () {
        external_$_(this.root).find(LOADING_ANIMATION_LOCATION).hide();
    };
    // Build the advanced detail panel jquery object
    HealthCheckPanel.prototype.buildAdvancePanel = function (searchToken, healthCheckToken) {
        var dom = ADVANCE_DETAILS.split('<pre></pre>', 3);
        return external_$_(dom[0] + this.wrap(searchToken, 'pre') + dom[1] + this.wrap(healthCheckToken, 'pre') + dom[2]);
    };
    // Build the org details jquery object
    HealthCheckPanel.prototype.buildOrgDetails = function (details) {
        return external_$_("\n      <div class=\"" + COVEO_ORGANIZATION_FIELD_CLASS + "\">Coveo Organization : " + (details == null ? '' : details.coveoOrg) + "</div>\n      <div class=\"" + SALESFORCE_ORGANIZATION_FIELD_CLASS + "\">Salesforce Organization : " + (details == null ? '' : details.salesforceOrg) + "</div>\n      <div class=\"" + SANDBOX_FIELD_CLASS + "\">Sandbox : " + (details == null ? '' : details.sandbox ? 'Yes' : 'No') + "</div>\n    ");
    };
    // Parse the incoming response to a workable format
    HealthCheckPanel.prototype.parse = function (response, callback) {
        try {
            var parsedResponse = this.parseResponse(response);
            callback(parsedResponse);
        }
        catch (error) {
            this.renderError('An error occurred while parsing the response.', error);
        }
    };
    // Parse the response
    HealthCheckPanel.prototype.parseResponse = function (result) {
        var _a, _b, _c;
        if (!result || !result.coveoOrganization || !result.salesforceOrganization || !result.user) {
            throw Error('Invalid response');
        }
        var formattedResult = {
            organization: {
                details: {
                    coveoOrg: result.coveoOrganization.id,
                    salesforceOrg: result.salesforceOrganization.id,
                    sandbox: result.salesforceOrganization.sandbox,
                },
                tests: new Array(),
            },
            user: {
                tests: new Array(),
            },
        };
        (_a = formattedResult.organization.tests).push.apply(_a, result.coveoOrganization.tests.map(this.parseResponseTest));
        (_b = formattedResult.organization.tests).push.apply(_b, result.salesforceOrganization.tests.map(this.parseResponseTest));
        (_c = formattedResult.user.tests).push.apply(_c, result.user.tests.map(this.parseResponseTest));
        return formattedResult;
    };
    // Perse the response test
    HealthCheckPanel.prototype.parseResponseTest = function (test) {
        var label = test.url == null ? null : test.url.label;
        var httpUrl = test.url == null ? null : test.url.httpUrl;
        return new HealthCheck(test.name, test.result.statusCode, test.result.details, test.tooltip, label, httpUrl);
    };
    // A simple wrap helper function
    HealthCheckPanel.prototype.wrap = function (elem, wrapperElem) {
        return "<" + wrapperElem + ">" + elem + ("</" + wrapperElem + ">");
    };
    // Render an error message
    HealthCheckPanel.prototype.renderCriticalError = function (error) {
        this.root.children().hide();
        this.errorMessage.find('pre').text(this.toJsonString(error));
        this.errorMessage.show();
    };
    HealthCheckPanel.prototype.toJsonString = function (object) {
        return JSON.stringify(object, null, 4);
    };
    HealthCheckPanel.prototype.parseJWT = function (jwt) {
        return this.toJsonString(JSON.parse(atob(jwt.split('.')[1])));
    };
    HealthCheckPanel.prototype.renderError = function (message, error) {
        this.lastSearchToken = '';
        this.lastHealthCheckToken = '';
        this.userTestsPanel.error = "" + message + (error ? '\n\n' + error.message : '');
        this.update();
    };
    return HealthCheckPanel;
}());


// CONCATENATED MODULE: ./src/modules/healthCheck/ts/index.ts



/***/ })

/******/ });(function(e, a) { for(var i in a) e[i] = a[i]; }(window.Coveo, c4sf))