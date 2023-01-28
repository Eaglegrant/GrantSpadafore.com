"use strict";

var _fetchData = require("./shared/fetch-data");

var _renderChart = require("./shared/render-chart");

var _renderError = require("./shared/render-error");

var _renderLoading = require("./shared/render-loading");

var _getChartData = require("./shared/get-chart-data");

var _formatScore = require("./shared/format-score");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// eslint-disable-next-line
var COMPONENT_TAG = 'codersrank-skills-chart';
var STATE_IDLE = 0;
var STATE_LOADING = 1;
var STATE_ERROR = 2;
var STATE_SUCCESS = 3; // eslint-disable-next-line

var STYLES = ":host{--font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;--svg-width:100%;--svg-height:auto;--axis-bg-color:rgba(0, 0, 0, 0.35);--hidden-area-color:#ddd;--label-text-color:inherit;--label-font-size:10px;--label-font-weight:500;--label-white-space:nowrap;--legend-text-color:inherit;--legend-disabled-text-color:#ccc;--legend-font-size:14px;--preloader-color:#72a0a8;--tooltip-font-size:12px;--tooltip-total-font-size:16px;--tooltip-total-font-weight:bold;--other-skills-area-color:#bbb;--chart-bg-color:transparent;--chart-border-radius:0px;--branding-text-color:inherit;width:100%;display:block;position:relative;box-sizing:border-box}.codersrank-skills-chart{font-family:var(--font-family);position:relative}.codersrank-skills-chart-preloader{position:absolute;left:50%;top:50%;width:32px;height:32px;margin:-16px 0 0 -16px;border:3px solid var(--preloader-color);border-left-color:transparent;border-bottom-color:transparent;border-radius:50%;box-sizing:border-box;-webkit-animation:preloader 1s infinite linear;animation:preloader 1s infinite linear}.codersrank-skills-chart-svg{position:relative}.codersrank-skills-chart svg{width:var(--svg-width);height:var(--svg-height);display:block;background-color:var(--chart-bg-color);border-radius:var(--chart-border-radius)}.codersrank-skills-chart polygon{transition-duration:150ms}.codersrank-skills-chart-current-line{stroke:rgba(0,0,0,.25);stroke-width:1px}.codersrank-skills-chart-hidden{fill:var(--hidden-area-color)!important}.codersrank-skills-chart-axis{margin-bottom:36px;height:1px;background:var(--axis-bg-color);color:inherit;display:flex;font-size:var(--label-font-size);font-weight:var(--label-font-weight);justify-content:space-between;line-height:1;color:var(--label-text-color)}.codersrank-skills-chart-axis>span{padding-top:10px;width:0;display:flex;align-items:flex-start;justify-content:center;white-space:var(--label-white-space)}.codersrank-skills-chart-axis>span:first-child{justify-content:flex-start}.codersrank-skills-chart-axis>span:last-child{justify-content:flex-end}.codersrank-skills-chart-tooltip{pointer-events:none;text-align:left;line-height:1.4;position:absolute;background:#000;border-radius:4px;color:#fff;font-family:var(--font-family);padding:8px;font-size:var(--tooltip-font-size);white-space:nowrap;pointer-events:none;top:50%;transform:translateX(-100%) translateY(-50%);margin-left:-10px;z-index:10}.codersrank-skills-chart-tooltip-right{margin-left:10px;transform:translateY(-50%)}.codersrank-skills-chart-tooltip-label{color:rgba(255,255,255,.75)}.codersrank-skills-chart-tooltip-total{font-size:var(--tooltip-total-font-size);font-weight:var(--tooltip-total-font-weight)}.codersrank-skills-chart-tooltip-list{list-style:none;margin:0;padding:0}.codersrank-skills-chart-tooltip-list span{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:4px}.codersrank-skills-chart-legend{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;font-size:var(--legend-font-size);width:100%;color:var(--legend-text-color);margin-top:36px}.codersrank-skills-chart-legend-button{color:inherit;width:auto;-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;background-color:transparent;border-radius:0;border:none;outline:0!important;cursor:pointer;font-family:inherit;font-size:inherit;box-shadow:none!important;display:flex;align-items:center;font-weight:500;transition-duration:.2s;padding:4px 8px}.codersrank-skills-chart-legend-button span{transition-duration:.2s;width:14px;height:14px;margin-right:4px;border-radius:50%}.codersrank-skills-chart-legend-button-hidden{color:var(--legend-disabled-text-color)}.codersrank-skills-chart-legend-button-hidden span{background-color:var(--legend-disabled-text-color)!important}.codersrank-skills-chart-branding{font-size:12px;color:var(--branding-text-color);position:absolute;left:0;top:0}.codersrank-skills-chart-branding a{opacity:.5;display:flex;align-items:center;color:inherit;text-decoration:none;transition-duration:.2s;position:relative;z-index:1;transform:translate3d(0,0,0)}.codersrank-skills-chart-branding a:hover{opacity:1}.codersrank-skills-chart-branding span{margin-right:4px}.codersrank-skills-chart-branding svg{height:16px;width:auto}@-webkit-keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes preloader{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"; // eslint-disable-next-line

var CodersRankSkillsChart = /*#__PURE__*/function (_HTMLElement) {
  _inheritsLoose(CodersRankSkillsChart, _HTMLElement);

  function CodersRankSkillsChart() {
    var _this;

    _this = _HTMLElement.call(this) || this;
    _this.tempDiv = document.createElement('div');
    _this.shadowEl = _this.attachShadow({
      mode: 'closed'
    });
    _this.stylesEl = document.createElement('style');
    _this.stylesEl.textContent = STYLES;

    _this.shadowEl.appendChild(_this.stylesEl);

    _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_this));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.formatLabel = _this.formatLabel.bind(_assertThisInitialized(_this));
    _this.onSVGMouseEnter = _this.onSVGMouseEnter.bind(_assertThisInitialized(_this));
    _this.onSVGMouseMove = _this.onSVGMouseMove.bind(_assertThisInitialized(_this));
    _this.onSVGMouseLeave = _this.onSVGMouseLeave.bind(_assertThisInitialized(_this));
    _this.linesOffsets = [];
    _this.currentIndex = null;
    _this.activeSkillsSet = false;
    _this.hiddenDatasets = [];
    _this.highlightedDatasetLabel = null;
    _this.highlightedDatasetTimeout = null;
    _this.mounted = false;
    _this.state = STATE_IDLE;
    _this.data = {
      labels: [],
      datasets: []
    };
    return _this;
  } // eslint-disable-next-line


  var _proto = CodersRankSkillsChart.prototype;

  _proto.getHighestScore = function getHighestScore(scores) {
    var score = 0;
    var date = null;
    scores.forEach(function (scoreData) {
      var summ = 0;
      scoreData.languages.forEach(function (langData) {
        summ += langData.score;
      });

      if (summ > score) {
        score = summ;
        date = scoreData.date;
      }
    });
    return {
      score: score,
      date: date
    };
  };

  _proto.emitData = function emitData(data) {
    if (data === void 0) {
      data = {};
    }

    var scores = data.scores || {};
    var event = new CustomEvent('data', {
      detail: {
        scores: scores,
        highest: this.getHighestScore(scores)
      }
    });
    this.dispatchEvent(event);
  };

  _proto.emitError = function emitError(err) {
    var event = new CustomEvent('error', {
      detail: err
    });
    this.dispatchEvent(event);
  };

  _proto.emitRender = function emitRender() {
    var event = new CustomEvent('render');
    this.dispatchEvent(event);
  };

  // eslint-disable-next-line
  _proto.formatLabel = function formatLabel(label) {
    if (!label) return '';
    var formatter = Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short'
    });
    return formatter.format(new Date(label));
  };

  _proto.render = function render() {
    var username = this.username,
        id = this.id,
        mounted = this.mounted,
        state = this.state,
        shadowEl = this.shadowEl,
        data = this.data,
        svgWidth = this.svgWidth,
        svgHeight = this.svgHeight,
        legend = this.legend,
        labels = this.labels,
        branding = this.branding,
        sortByScore = this.sortByScore,
        hiddenDatasets = this.hiddenDatasets,
        highlightedDatasetLabel = this.highlightedDatasetLabel,
        visibleLabels = this.visibleLabels,
        currentIndex = this.currentIndex,
        formatLabel = this.formatLabel,
        tempDiv = this.tempDiv;
    var ctx = {
      data: data,
      svgWidth: svgWidth,
      svgHeight: svgHeight,
      legend: legend,
      labels: labels,
      branding: branding,
      sortByScore: sortByScore,
      hiddenDatasets: hiddenDatasets,
      highlightedDatasetLabel: highlightedDatasetLabel,
      visibleLabels: visibleLabels,
      currentIndex: currentIndex,
      formatLabel: formatLabel
    };
    this.detachSVGEvents();
    if (!username && !id || !mounted) return;

    if (state === STATE_SUCCESS) {
      tempDiv.innerHTML = (0, _renderChart.renderChart)(ctx);
    } else if (state === STATE_ERROR) {
      tempDiv.innerHTML = (0, _renderError.renderError)(ctx);
    } else if (state === STATE_IDLE || state === STATE_LOADING) {
      tempDiv.innerHTML = (0, _renderLoading.renderLoading)(ctx);
    }

    var widgetEl = shadowEl.querySelector('.codersrank-skills-chart');

    if (widgetEl) {
      widgetEl.parentNode.removeChild(widgetEl);
    }

    widgetEl = tempDiv.querySelector('.codersrank-skills-chart');
    if (!widgetEl) return;
    this.widgetEl = widgetEl;
    shadowEl.appendChild(widgetEl);
    this.attachSVGEvents();

    if (state === STATE_SUCCESS) {
      this.emitRender();
    }
  };

  _proto.loadAndRender = function loadAndRender() {
    var _this2 = this;

    var username = this.username,
        id = this.id;
    this.state = STATE_LOADING;
    this.render();
    (0, _fetchData.fetchData)(username, id).then(function (data) {
      _this2.emitData(data);

      _this2.data = (0, _getChartData.getChartData)(data.scores, _this2.displaySkills, _this2.showOtherSkills, _this2.sortByScore);

      if (_this2.activeSkills && _this2.activeSkills.length && !_this2.activeSkillsSet) {
        _this2.hiddenDatasets = _this2.data.datasets.map(function (d) {
          return d.label;
        }).filter(function (l) {
          return _this2.activeSkills.indexOf(l) < 0;
        });
        _this2.activeSkillsSet = true;
      }

      _this2.state = STATE_SUCCESS;

      _this2.render();
    })["catch"](function (err) {
      _this2.emitError(err);

      _this2.state = STATE_ERROR;

      _this2.render();
    });
  };

  _proto.tooltipText = function tooltipText() {
    var _this3 = this;

    var currentIndex = this.currentIndex;
    var _this$data = this.data,
        datasets = _this$data.datasets,
        labels = _this$data.labels;
    if (currentIndex === null) return '';
    var total = 0;
    var currentValues = datasets.filter(function (dataset) {
      return !_this3.hiddenDatasets.includes(dataset.label) && dataset.values[currentIndex];
    }).map(function (dataset) {
      return {
        color: dataset.color,
        label: dataset.label,
        value: dataset.values[currentIndex]
      };
    });
    currentValues.forEach(function (dataset) {
      total += dataset.value;
    });
    var labelText = this.formatLabel(labels[currentIndex]);
    var totalText = (0, _formatScore.formatScore)(total) + " exp. points"; // prettier-ignore

    var datasetsText = currentValues.length > 0 ? "\n      <ul class=\"codersrank-skills-chart-tooltip-list\">\n        " + currentValues.map(function (_ref) {
      var label = _ref.label,
          color = _ref.color,
          value = _ref.value;
      var valueText = label + ": " + (0, _formatScore.formatScore)(value);
      return "\n              <li><span style=\"background-color: " + color + ";\"></span>" + valueText + "</li>\n            ";
    }).join('') + "\n      </ul>" : ''; // prettier-ignore

    return "\n        <div class=\"codersrank-skills-chart-tooltip-label\">" + labelText + "</div>\n        <div class=\"codersrank-skills-chart-tooltip-total\">" + totalText + "</div>\n        " + datasetsText + "\n      ";
  };

  _proto.showTooltip = function showTooltip() {
    var _this4 = this;

    if (!this.tooltip) return;
    var visibleDataSets = this.data.datasets.filter(function (dataset) {
      return !_this4.hiddenDatasets.includes(dataset.label);
    }).length;

    if (!visibleDataSets) {
      this.hideTooltip();
      return;
    }

    var prevLineEl = this.shadowEl.querySelector('.codersrank-skills-chart-current-line');
    if (prevLineEl) prevLineEl.classList.remove('codersrank-skills-chart-current-line');
    var lineEl = this.shadowEl.querySelector("line[data-index=\"" + this.currentIndex + "\"]");
    if (!lineEl) return;
    lineEl.classList.add('codersrank-skills-chart-current-line');
    var tooltipEl = this.widgetEl.querySelector('.codersrank-skills-chart-tooltip');

    if (!tooltipEl) {
      this.tempDiv.innerHTML = "\n        <div class=\"codersrank-skills-chart-tooltip\">\n          " + this.tooltipText() + "\n        </div>\n      ";
      tooltipEl = this.tempDiv.querySelector('.codersrank-skills-chart-tooltip');
      this.widgetEl.querySelector('.codersrank-skills-chart-svg').appendChild(tooltipEl);
    } else {
      tooltipEl.innerHTML = this.tooltipText();
    }

    var widgetElRect = this.widgetEl.getBoundingClientRect();
    var lineElRect = lineEl.getBoundingClientRect();
    var left = lineElRect.left - widgetElRect.left;

    if (left < 180) {
      tooltipEl.classList.add('codersrank-skills-chart-tooltip-right');
    } else {
      tooltipEl.classList.remove('codersrank-skills-chart-tooltip-right');
    }

    tooltipEl.style.left = left + "px";
  };

  _proto.hideTooltip = function hideTooltip() {
    if (!this.tooltip) return;
    var lineEl = this.shadowEl.querySelector('.codersrank-skills-chart-current-line');
    if (lineEl) lineEl.classList.remove('codersrank-skills-chart-current-line');
    var tooltipEl = this.shadowEl.querySelector('.codersrank-skills-chart-tooltip');
    if (!tooltipEl) return;
    this.widgetEl.querySelector('.codersrank-skills-chart-svg').removeChild(tooltipEl);
  };

  _proto.toggleDataset = function toggleDataset(label) {
    this.highlightedDatasetLabel = null;

    if (this.hiddenDatasets.includes(label)) {
      this.hiddenDatasets.splice(this.hiddenDatasets.indexOf(label), 1);
    } else {
      this.hiddenDatasets.push(label);
      this.highlightedDatasetLabel = null;
    }

    this.render();
  };

  _proto.onClick = function onClick(e) {
    var buttonEl;
    if (e.target.tagName === 'BUTTON') buttonEl = e.target;else if (e.target.parentNode && e.target.parentNode.tagName === 'BUTTON') buttonEl = e.target.parentNode;
    if (!buttonEl) return;
    var label = buttonEl.getAttribute('data-label');
    this.toggleDataset(label);
  };

  _proto.onMouseEnter = function onMouseEnter(e) {
    var _this5 = this;

    if (!this.widgetEl) return;
    var buttonEl;
    if (e.target.tagName === 'BUTTON') buttonEl = e.target;
    if (!buttonEl) return;
    var label = buttonEl.getAttribute('data-label');
    if (!label) return;
    var polygon = this.widgetEl.querySelector("polygon[data-label=\"" + label + "\"]");
    if (!polygon) return;
    clearTimeout(this.highlightedDatasetTimeout);
    this.highlightedDatasetTimeout = setTimeout(function () {
      _this5.highlightedDatasetLabel = label;

      var polygons = _this5.widgetEl.querySelectorAll('polygon');

      for (var i = 0; i < polygons.length; i += 1) {
        polygons[i].classList.add('codersrank-skills-chart-hidden');
      }

      polygon.classList.remove('codersrank-skills-chart-hidden');
    }, 100);
  };

  _proto.onMouseLeave = function onMouseLeave(e) {
    var _this6 = this;

    if (e.target.tagName !== 'BUTTON') return;
    this.highlightedDatasetTimeout = setTimeout(function () {
      if (!_this6.widgetEl) return;

      var polygons = _this6.widgetEl.querySelectorAll('polygon');

      if (!polygons) return;

      for (var i = 0; i < polygons.length; i += 1) {
        polygons[i].classList.remove('codersrank-skills-chart-hidden');
      }
    }, 100);
  };

  _proto.calcLinesOffsets = function calcLinesOffsets() {
    var lines = this.widgetEl.querySelectorAll('line');
    this.linesOffsets = [];

    for (var i = 0; i < lines.length; i += 1) {
      // @ts-ignore
      this.linesOffsets.push(lines[i].getBoundingClientRect().left);
    }
  };

  _proto.onSVGMouseEnter = function onSVGMouseEnter() {
    if (!this.tooltip) return;
    this.calcLinesOffsets();
  };

  _proto.onSVGMouseMove = function onSVGMouseMove(e) {
    if (!this.tooltip) return;
    var currentLeft = e.pageX;
    if (typeof currentLeft === 'undefined') currentLeft = 0;
    var distances = this.linesOffsets.map(function (left) {
      return Math.abs(currentLeft - left);
    });
    var minDistance = Math.min.apply(Math, distances);
    var closestIndex = distances.indexOf(minDistance);
    this.currentIndex = closestIndex;
    this.showTooltip();
  };

  _proto.onSVGMouseLeave = function onSVGMouseLeave() {
    if (!this.tooltip) return;
    this.currentIndex = null;
    this.hideTooltip();
  };

  _proto.attachSVGEvents = function attachSVGEvents() {
    if (!this.widgetEl) return;
    var svgEl = this.widgetEl.querySelector('svg');
    if (!svgEl) return;
    svgEl.addEventListener('mouseenter', this.onSVGMouseEnter);
    svgEl.addEventListener('mousemove', this.onSVGMouseMove);
    svgEl.addEventListener('mouseleave', this.onSVGMouseLeave);
  };

  _proto.detachSVGEvents = function detachSVGEvents() {
    if (!this.widgetEl) return;
    var svgEl = this.widgetEl.querySelector('svg');
    if (!svgEl) return;
    svgEl.removeEventListener('mouseenter', this.onSVGMouseEnter);
    svgEl.removeEventListener('mousemove', this.onSVGMouseMove);
    svgEl.removeEventListener('mouseleave', this.onSVGMouseLeave);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback() {
    if (!this.mounted) return;
    this.loadAndRender();
  };

  _proto.connectedCallback = function connectedCallback() {
    this.width = this.offsetWidth;
    this.mounted = true;
    this.loadAndRender();
    this.shadowEl.addEventListener('click', this.onClick, true);
    this.shadowEl.addEventListener('mouseenter', this.onMouseEnter, true);
    this.shadowEl.addEventListener('mouseleave', this.onMouseLeave, true);
  };

  _proto.disconnectedCallback = function disconnectedCallback() {
    this.mounted = false;
    this.shadowEl.removeEventListener('click', this.onClick);
    this.shadowEl.removeEventListener('mouseenter', this.onMouseEnter);
    this.shadowEl.removeEventListener('mouseleave', this.onMouseLeave);
    this.detachSVGEvents();
  };

  _createClass(CodersRankSkillsChart, [{
    key: "visibleLabels",
    get: function get() {
      if (!this.maxLabels || this.data.labels.length <= this.maxLabels) return this.data.labels;
      var skipStep = Math.ceil(this.data.labels.length / this.maxLabels);
      var filtered = this.data.labels.filter(function (label, index) {
        return index % skipStep === 0;
      });
      return filtered;
    }
  }, {
    key: "displaySkills",
    get: function get() {
      var skills = this.getAttribute('skills') || '';
      if (typeof skills !== 'string') return [];
      return skills.split(',').map(function (s) {
        return s.trim();
      }).filter(function (s) {
        return !!s;
      });
    }
  }, {
    key: "skills",
    set: function set(value) {
      this.setAttribute('skills', value);
    }
  }, {
    key: "activeSkills",
    get: function get() {
      var skills = this.getAttribute('active-skills') || '';
      if (typeof skills !== 'string') return [];
      return skills.split(',').map(function (s) {
        return s.trim();
      }).filter(function (s) {
        return !!s;
      });
    },
    set: function set(value) {
      this.setAttribute('active-skills', value);
    }
  }, {
    key: 'active-skills',
    set: function set(value) {
      this.setAttribute('active-skills', value);
    }
  }, {
    key: "showOtherSkills",
    get: function get() {
      var showOtherSkills = this.getAttribute('show-other-skills');
      if (showOtherSkills === '' || showOtherSkills === 'true') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('show-other-skills', value);
    }
  }, {
    key: 'show-other-skills',
    set: function set(value) {
      this.setAttribute('show-other-skills', value);
    }
  }, {
    key: "tooltip",
    get: function get() {
      var tooltip = this.getAttribute('tooltip');
      if (tooltip === '' || tooltip === 'true') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('tooltip', value);
    }
  }, {
    key: "username",
    get: function get() {
      return this.getAttribute('username');
    },
    set: function set(value) {
      this.setAttribute('username', value);
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(value) {
      this.setAttribute('id', value);
    }
  }, {
    key: "maxLabels",
    get: function get() {
      var maxLabels = parseInt(this.getAttribute('max-labels') || 0, 10);
      return maxLabels || 8;
    },
    set: function set(value) {
      this.setAttribute('max-labels', value);
    }
  }, {
    key: 'max-labels',
    set: function set(value) {
      this.setAttribute('max-labels', value);
    }
  }, {
    key: "svgWidth",
    get: function get() {
      var svgWidth = parseInt(this.getAttribute('svg-width') || 0, 10);
      return svgWidth || 640;
    },
    set: function set(value) {
      this.setAttribute('svg-width', value);
    }
  }, {
    key: 'svg-width',
    set: function set(value) {
      this.setAttribute('svg-width', value);
    }
  }, {
    key: "svgHeight",
    get: function get() {
      var svgHeight = parseInt(this.getAttribute('svg-height') || 0, 10);
      return svgHeight || 320;
    },
    set: function set(value) {
      this.setAttribute('svg-height', value);
    }
  }, {
    key: 'svg-height',
    set: function set(value) {
      this.setAttribute('svg-height', value);
    }
  }, {
    key: "legend",
    get: function get() {
      var legend = this.getAttribute('legend');
      if (legend === '' || legend === 'true') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('legend', value);
    }
  }, {
    key: "labels",
    get: function get() {
      var labels = this.getAttribute('labels');
      if (labels === '' || labels === 'true') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('labels', value);
    }
  }, {
    key: "branding",
    get: function get() {
      return this.getAttribute('branding') !== 'false';
    },
    set: function set(value) {
      this.setAttribute('branding', value);
    }
  }, {
    key: "sortByScore",
    get: function get() {
      var sortByScore = this.getAttribute('sort-by-score');
      if (sortByScore === '' || sortByScore === 'true') return true;
      return false;
    },
    set: function set(value) {
      this.setAttribute('sort-by-score', value);
    }
  }, {
    key: 'sort-by-score',
    set: function set(value) {
      this.setAttribute('sort-by-score', value);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['username', 'id', 'max-labels', 'svg-width', 'svg-height', 'legend', 'labels', 'skills', 'active-skills', 'show-other-skills', 'sort-by-score'];
    }
  }]);

  return CodersRankSkillsChart;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)); 
module.exports = CodersRankSkillsChart;
