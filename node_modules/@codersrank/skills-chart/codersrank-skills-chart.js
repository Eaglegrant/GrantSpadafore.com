/**
 * Codersrank Activity Widget 0.9.21
 * undefined
 * https://github.com/codersrank-org/skills-chart-widget#readme
 *
 * Copyright 2020-2021 CodersRank Ltd.
 *
 * Released under the MIT License
 *
 * Released on: October 8, 2021
 */

(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var cache = {};
  var fetchData = function fetchData(username, id) {
    if (username && cache[username]) return Promise.resolve(cache[username]);
    if (id && cache[id]) return Promise.resolve(cache[id]);
    var endpoint = "https://api.codersrank.io/v2/users/" + (username || id) + "/tech_score_history";
    if (id) endpoint += '?get_by=id';
    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data && data.code === 400) {
        return Promise.reject(data);
      }

      if (id) {
        cache[id] = data;
      } else {
        cache[username] = data;
      }

      return data;
    })["catch"](function (err) {
      // eslint-disable-next-line
      return Promise.reject(err);
    });
  };

  var codersrRankLogo = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"258\" height=\"39\" viewBox=\"0 0 258 39\"><path fill=\"#19223C\" d=\"M71.358 27.687A8.076 8.076 0 0 1 69 21.999c0-2.122.846-4.162 2.358-5.687a8.022 8.022 0 0 1 2.664-1.688 8.175 8.175 0 0 1 3.126-.543 8.298 8.298 0 0 1 4.723 1.339 7.155 7.155 0 0 1 2.895 3.791H80.12a3 3 0 0 0-1.182-1.283 3.106 3.106 0 0 0-1.713-.427 4.128 4.128 0 0 0-1.694.264 4.046 4.046 0 0 0-1.43.926 5.197 5.197 0 0 0-1.133 3.234c0 1.17.399 2.309 1.134 3.234.403.405.89.72 1.43.926a4.128 4.128 0 0 0 1.693.264c.586.039 1.17-.087 1.684-.364a3.01 3.01 0 0 0 1.211-1.198h4.571a7.156 7.156 0 0 1-2.895 3.792 8.298 8.298 0 0 1-4.723 1.338 8.173 8.173 0 0 1-3.085-.557 8.02 8.02 0 0 1-2.629-1.673zM88.652 27.687a8.076 8.076 0 0 1-2.359-5.688c0-2.122.846-4.162 2.359-5.687a8.57 8.57 0 0 1 5.79-2.238c2.15 0 4.221.8 5.79 2.238a8.076 8.076 0 0 1 2.358 5.687 8.076 8.076 0 0 1-2.359 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 98.623 22c0-1.17-.4-2.308-1.134-3.234a4.398 4.398 0 0 0-3.048-1.219c-1.14 0-2.234.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.048-1.219zM110.592 14.304a9.126 9.126 0 0 1 6.247 2.156 7.73 7.73 0 0 1 1.8 2.546 7.573 7.573 0 0 1 0 6.06 7.73 7.73 0 0 1-1.8 2.546 9.049 9.049 0 0 1-6.247 2.156h-5.561V14.304h5.561zm-1.752 12.64h1.752a4.596 4.596 0 0 0 1.903-.295 4.504 4.504 0 0 0 1.602-1.044 4.909 4.909 0 0 0 1.295-3.569 4.909 4.909 0 0 0-1.295-3.568 4.504 4.504 0 0 0-1.602-1.044 4.595 4.595 0 0 0-1.903-.294h-1.752v9.813zM131.313 14.23v2.9h-5.714v3.345h5.104v2.9H125.6v3.568h5.714v2.9h-9.599V14.23zM138.55 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32h-4.418l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM155.158 17.055a1.86 1.86 0 0 0-1.22.372c-.159.138-.284.311-.363.505-.08.193-.111.402-.093.61a1.528 1.528 0 0 0 .457 1.115c.32.31.712.539 1.143.67l1.523.445 1.676.52 1.524.744c.487.317.881.753 1.143 1.264.31.6.466 1.262.457 1.933a4.227 4.227 0 0 1-.45 1.859 4.333 4.333 0 0 1-1.226 1.487 6.424 6.424 0 0 1-4.343 1.412 6.899 6.899 0 0 1-4.342-1.263 4.331 4.331 0 0 1-1.278-1.588 4.223 4.223 0 0 1-.398-1.981h4.114c-.012.253.032.507.128.742.097.236.244.449.431.625a1.87 1.87 0 0 0 1.421.492c.475.02.94-.14 1.296-.447a1.382 1.382 0 0 0 .457-1.115 1.455 1.455 0 0 0-.457-1.115 2.986 2.986 0 0 0-1.143-.669l-1.524-.446-1.676-.52-1.523-.744a3.148 3.148 0 0 1-1.143-1.264 4 4 0 0 1-.305-1.859 4.15 4.15 0 0 1 .407-1.944 4.258 4.258 0 0 1 1.27-1.55 6.582 6.582 0 0 1 4.19-1.338 6.982 6.982 0 0 1 4.113 1.115 4.33 4.33 0 0 1 1.278 1.588c.292.62.428 1.299.398 1.98h-4.19a2.056 2.056 0 0 0-.533-1.263 1.611 1.611 0 0 0-1.22-.372zM168.261 23.746v6.022h-3.885V14.304h6.247a6.19 6.19 0 0 1 4.266 1.413c.486.418.874.933 1.137 1.51.263.578.395 1.204.387 1.836a4.752 4.752 0 0 1-.838 2.602 4.578 4.578 0 0 1-2.743 1.784l3.885 6.32H172.3l-3.58-6.023h-.458zm0-6.616v3.717h2.362c.253.01.505-.03.742-.12.236-.09.45-.226.63-.4.175-.178.312-.388.404-.617.091-.23.135-.475.128-.722a1.819 1.819 0 0 0-.128-.721 1.854 1.854 0 0 0-.405-.617 1.833 1.833 0 0 0-.63-.4 1.87 1.87 0 0 0-.741-.12h-2.362zM189.592 29.768l-.914-2.602h-5.714l-.914 2.602h-4.114l5.485-15.538h4.723l5.485 15.538h-4.037zm-5.638-5.501h3.733l-1.828-5.428-1.905 5.428zM205.972 14.23h3.885v15.538h-3.885l-6.476-9.813v9.813h-3.885V14.23h3.885l6.476 9.814zM217.093 29.768h-3.885V14.304h3.885v6.766l5.257-6.766h5.104l-6.552 7.732 6.552 7.732h-4.952l-5.333-6.84zM232.863 27.761a1.98 1.98 0 0 1-.5 1.253 2.07 2.07 0 0 1-1.197.664 2.1 2.1 0 0 1-1.359-.222 2.024 2.024 0 0 1-.91-1.01 1.962 1.962 0 0 1-.054-1.342c.141-.44.433-.82.827-1.076a2.096 2.096 0 0 1 2.583.246c.201.194.359.426.464.682.105.256.154.53.146.805z\"></path> <path fill=\"#67a4ac\" d=\"M235.301 29.768V14.304h3.885v15.464zM244.062 27.687a8.076 8.076 0 0 1-2.358-5.688c0-2.122.846-4.162 2.358-5.687a8.57 8.57 0 0 1 5.79-2.238c2.151 0 4.222.8 5.79 2.238A8.076 8.076 0 0 1 258 21.999a8.076 8.076 0 0 1-2.358 5.688 8.491 8.491 0 0 1-5.79 2.266 8.491 8.491 0 0 1-5.79-2.266zm8.837-2.454A5.197 5.197 0 0 0 254.033 22c0-1.17-.399-2.308-1.134-3.234a4.398 4.398 0 0 0-3.047-1.219c-1.14 0-2.235.438-3.047 1.22a5.197 5.197 0 0 0-1.134 3.233c0 1.171.399 2.309 1.134 3.234a4.398 4.398 0 0 0 3.047 1.219c1.14 0 2.235-.438 3.047-1.219z\"></path> <path d=\"M33.25.054L2.147 19.634C.682 20.52-.034 21.512.001 22.611v2.98c.035 1.1.768 2.075 2.2 2.926l15.393 8.885a.726.726 0 0 0 1.047-.373l3.456-8.352-7.33-4.15a1.317 1.317 0 0 1-.514-.477 1.346 1.346 0 0 1 .461-1.864l13.457-8.247L33.72.427a.324.324 0 0 0-.103-.36.31.31 0 0 0-.369-.013z\" fill=\"#19223c\"></path> <path d=\"M58.8 10.961L43.618 1.757a.726.726 0 0 0-1.047.32l-3.56 8.352 7.225 4.31c.208.113.381.282.502.488a1.347 1.347 0 0 1 0 1.363 1.318 1.318 0 0 1-.502.49l-13.561 7.98-5.76 13.407a.323.323 0 0 0 .026.452.312.312 0 0 0 .445-.026l9.949-6.012 3.927 5.64a.947.947 0 0 0 .785.425h9.425a.932.932 0 0 0 .832-.506.97.97 0 0 0-.047-.984l-6.388-9.79 12.933-7.82c1.466-.887 2.199-1.88 2.199-2.98V13.94c0-1.1-.733-2.092-2.2-2.979z\" fill=\"#67a4ac\"></path></svg>";

  var renderChart = function renderChart(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        data = _ref.data,
        width = _ref.svgWidth,
        height = _ref.svgHeight,
        showLegend = _ref.legend,
        showLabels = _ref.labels,
        preloader = _ref.preloader,
        branding = _ref.branding,
        hiddenDatasets = _ref.hiddenDatasets,
        highlightedDatasetLabel = _ref.highlightedDatasetLabel,
        visibleLabels = _ref.visibleLabels,
        currentIndex = _ref.currentIndex,
        formatLabel = _ref.formatLabel;

    var datasets = data.datasets,
        labels = data.labels;

    var getSummValues = function getSummValues() {
      var summValues = [];
      datasets.filter(function (dataset) {
        return !hiddenDatasets.includes(dataset.label);
      }).forEach(function (_ref2) {
        var values = _ref2.values;
        values.forEach(function (value, valueIndex) {
          if (!summValues[valueIndex]) summValues[valueIndex] = 0;
          summValues[valueIndex] += value;
        });
      });
      return summValues;
    };

    var getPolygons = function getPolygons() {
      var summValues = getSummValues();
      var polygons = [];

      if (!datasets.length) {
        return polygons;
      }

      var lastValues = datasets[0].values.map(function () {
        return 0;
      });
      var maxValue = Math.max.apply(Math, summValues);
      datasets.filter(function (dataset) {
        return !hiddenDatasets.includes(dataset.label);
      }).forEach(function (_ref3) {
        var label = _ref3.label,
            values = _ref3.values,
            color = _ref3.color;
        var points = values.map(function (originalValue, valueIndex) {
          lastValues[valueIndex] += originalValue;
          var value = lastValues[valueIndex];
          var x = valueIndex / (values.length - 1) * width;
          var y = height - value / maxValue * height;
          return x + " " + y;
        });
        points.push(width + " " + height + " 0 " + height);
        polygons.push({
          label: label,
          points: points.join(' '),
          color: color
        });
      });
      return polygons.reverse();
    };

    var getLines = function getLines() {
      var lines = [];

      if (!datasets.length) {
        return lines;
      }

      var values = datasets[0].values;
      values.forEach(function (value, valueIndex) {
        var x = valueIndex / (values.length - 1) * width;
        lines.push(x);
      });
      return lines;
    };

    var polygons = getPolygons();
    var lines = getLines(); // prettier-ignore

    return (
      /* html */
      "\n    <div class=\"codersrank-skills-chart\">\n      <div class=\"codersrank-skills-chart-svg\">\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"" + width + "\"\n          height=\"" + height + "\"\n          viewBox=\"0 0 " + width + " " + height + "\"\n          preserveAspectRatio=\"none\"\n        >\n          " + polygons.map(function (polygon) {
        return (
          /* html */
          "\n          <polygon\n            fill=\"" + polygon.color + "\"\n            fillRule=\"evenodd\"\n            points=\"" + polygon.points + "\"\n            data-label=\"" + polygon.label + "\"\n            class=\"" + (highlightedDatasetLabel && highlightedDatasetLabel !== polygon.label ? 'codersrank-skills-chart-hidden' : '') + "\"\n          />\n          "
        );
      }).join('') + "\n          " + lines.map(function (line, index) {
        return (
          /* html */
          "\n          <line\n            data-index=\"" + index + "\"\n            fill=\"#000\"\n            x1=\"" + line + "\"\n            y1=\"" + 0 + "\"\n            x2=\"" + line + "\"\n            y2=\"" + height + "\"\n            class=\"" + (currentIndex === index ? 'codersrank-skills-chart-current-line' : '') + "\"\n          />\n          "
        );
      }).join('') + "\n        </svg>\n        " + (preloader ?
      /* html */
      "\n        <div class=\"codersrank-skills-chart-preloader\"></div>\n        " : '') + "\n      </div>\n      " + (showLabels ?
      /* html */
      "\n      <div class=\"codersrank-skills-chart-axis\">\n        " + labels.map(function (label) {
        return (
          /* html */
          "\n        <span>\n          " + (visibleLabels.includes(label) ?
          /* html */
          "\n          <span>" + formatLabel(label) + "</span>\n          " : '') + "\n        </span>\n        "
        );
      }).join('') + "\n      </div>\n      " : '') + "\n      " + (showLegend ?
      /* html */
      "\n      <div class=\"codersrank-skills-chart-legend\">\n        " + datasets.map(function (dataset) {
        return (
          /* html */
          "\n        <button\n          data-label=\"" + dataset.label + "\"\n          class=\"codersrank-skills-chart-legend-button " + (hiddenDatasets.includes(dataset.label) ? 'codersrank-skills-chart-legend-button-hidden' : '') + "\"\n          type=\"button\"\n        >\n          <span style=\"background-color: " + dataset.color + "\"></span>\n          " + dataset.label + "\n        </button>\n        "
        );
      }).join('') + "\n      </div>\n      " : '') + "\n      " + (branding ?
      /* html */
      "\n      <div class=\"codersrank-skills-chart-branding\">\n        <a href=\"https://codersrank.io\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <span>Powered by </span>\n          " + codersrRankLogo + "\n        </a>\n      </div>\n      " : '') + "\n    </div>\n  "
    );
  };

  var renderError = function renderError() {
    return '';
  };

  var renderLoading = function renderLoading(ctx) {
    return renderChart(_extends({}, ctx, {
      preloader: true,
      data: {
        labels: [],
        datasets: []
      }
    }));
  };

  var languageColors = {
    '1C Enterprise': '#814CCC',
    ABAP: '#E8274B',
    ActionScript: '#882B0F',
    Ada: '#02f88c',
    Agda: '#315665',
    'AGS Script': '#B9D9FF',
    Alloy: '#64C800',
    AMPL: '#E6EFBB',
    AngelScript: '#C7D7DC',
    ANTLR: '#9DC3FF',
    'API Blueprint': '#2ACCA8',
    APL: '#5A8164',
    AppleScript: '#101F1F',
    Arc: '#aa2afe',
    ASP: '#6a40fd',
    AspectJ: '#a957b0',
    Assembly: '#6E4C13',
    Asymptote: '#4a0c0c',
    ATS: '#1ac620',
    AutoHotkey: '#6594b9',
    AutoIt: '#1C3552',
    Ballerina: '#FF5000',
    Batchfile: '#C1F12E',
    BlitzMax: '#cd6400',
    Boo: '#d4bec1',
    Brainfuck: '#2F2530',
    C: '#555555',
    'C#': '#178600',
    'C++': '#f34b7d',
    Ceylon: '#dfa535',
    Chapel: '#8dc63f',
    Cirru: '#ccccff',
    Clarion: '#db901e',
    Clean: '#3F85AF',
    Click: '#E4E6F3',
    Clojure: '#db5855',
    CoffeeScript: '#244776',
    ColdFusion: '#ed2cd6',
    'Common Lisp': '#3fb68b',
    'Common Workflow Language': '#B5314C',
    'Component Pascal': '#B0CE4E',
    Crystal: '#000100',
    CSS: '#563d7c',
    Cuda: '#3A4E3A',
    D: '#ba595e',
    Dart: '#00B4AB',
    DataWeave: '#003a52',
    DM: '#447265',
    Dockerfile: '#384d54',
    Dogescript: '#cca760',
    Dylan: '#6c616e',
    E: '#ccce35',
    eC: '#913960',
    ECL: '#8a1267',
    Eiffel: '#946d57',
    Elixir: '#6e4a7e',
    Elm: '#60B5CC',
    'Emacs Lisp': '#c065db',
    EmberScript: '#FFF4F3',
    EQ: '#a78649',
    Erlang: '#B83998',
    'F#': '#b845fc',
    'F*': '#572e30',
    Factor: '#636746',
    Fancy: '#7b9db4',
    Fantom: '#14253c',
    FLUX: '#88ccff',
    Forth: '#341708',
    Fortran: '#4d41b1',
    FreeMarker: '#0050b2',
    Frege: '#00cafe',
    'Game Maker Language': '#71b417',
    GDScript: '#355570',
    Genie: '#fb855d',
    Gherkin: '#5B2063',
    Glyph: '#c1ac7f',
    Gnuplot: '#f0a9f0',
    Go: '#00ADD8',
    Golo: '#88562A',
    Gosu: '#82937f',
    'Grammatical Framework': '#79aa7a',
    Groovy: '#e69f56',
    Hack: '#878787',
    Harbour: '#0e60e3',
    Haskell: '#5e5086',
    Haxe: '#df7900',
    HiveQL: '#dce200',
    HTML: '#e34c26',
    Hy: '#7790B2',
    IDL: '#a3522f',
    Idris: '#b30000',
    Io: '#a9188d',
    Ioke: '#078193',
    Isabelle: '#FEFE00',
    J: '#9EEDFF',
    Java: '#b07219',
    JavaScript: '#f1e05a',
    Jolie: '#843179',
    JSONiq: '#40d47e',
    Jsonnet: '#0064bd',
    Julia: '#a270ba',
    'Jupyter Notebook': '#DA5B0B',
    Kotlin: '#F18E33',
    KRL: '#28430A',
    Lasso: '#999999',
    Lex: '#DBCA00',
    LFE: '#4C3023',
    LiveScript: '#499886',
    LLVM: '#185619',
    LOLCODE: '#cc9900',
    LookML: '#652B81',
    LSL: '#3d9970',
    Lua: '#000080',
    Makefile: '#427819',
    Mask: '#f97732',
    MATLAB: '#e16737',
    Max: '#c4a79c',
    MAXScript: '#00a6a6',
    mcfunction: '#E22837',
    Mercury: '#ff2b2b',
    Meson: '#007800',
    Metal: '#8f14e9',
    Mirah: '#c7a938',
    'Modula-3': '#223388',
    MQL4: '#62A8D6',
    MQL5: '#4A76B8',
    MTML: '#b7e1f4',
    NCL: '#28431f',
    Nearley: '#990000',
    Nemerle: '#3d3c6e',
    nesC: '#94B0C7',
    NetLinx: '#0aa0ff',
    'NetLinx+ERB': '#747faa',
    NetLogo: '#ff6375',
    NewLisp: '#87AED7',
    Nextflow: '#3ac486',
    Nim: '#37775b',
    Nit: '#009917',
    Nix: '#7e7eff',
    Nu: '#c9df40',
    'Objective-C': '#438eff',
    'Objective-C++': '#6866fb',
    'Objective-J': '#ff0c5a',
    OCaml: '#3be133',
    Omgrofl: '#cabbff',
    ooc: '#b0b77e',
    Opal: '#f7ede0',
    Oxygene: '#cdd0e3',
    Oz: '#fab738',
    P4: '#7055b5',
    Pan: '#cc0000',
    Papyrus: '#6600cc',
    Parrot: '#f3ca0a',
    Pascal: '#E3F171',
    Pawn: '#dbb284',
    Pep8: '#C76F5B',
    Perl: '#0298c3',
    'Perl 6': '#0000fb',
    PHP: '#4F5D95',
    PigLatin: '#fcd7de',
    Pike: '#005390',
    PLSQL: '#dad8d8',
    PogoScript: '#d80074',
    PostScript: '#da291c',
    PowerBuilder: '#8f0f8d',
    PowerShell: '#012456',
    Processing: '#0096D8',
    Prolog: '#74283c',
    'Propeller Spin': '#7fa2a7',
    Puppet: '#302B6D',
    PureBasic: '#5a6986',
    PureScript: '#1D222D',
    Python: '#3572A5',
    q: '#0040cd',
    QML: '#44a51c',
    Quake: '#882233',
    R: '#198CE7',
    Racket: '#3c5caa',
    Ragel: '#9d5200',
    RAML: '#77d9fb',
    Rascal: '#fffaa0',
    Rebol: '#358a5b',
    Red: '#f50000',
    "Ren'Py": '#ff7f7f',
    Ring: '#2D54CB',
    Roff: '#ecdebe',
    Rouge: '#cc0088',
    Ruby: '#701516',
    RUNOFF: '#665a4e',
    Rust: '#dea584',
    SaltStack: '#646464',
    SAS: '#B34936',
    Scala: '#c22d40',
    Scheme: '#1e4aec',
    sed: '#64b970',
    Self: '#0579aa',
    Shell: '#89e051',
    Shen: '#120F14',
    Slash: '#007eff',
    Slice: '#003fa2',
    Smalltalk: '#596706',
    Solidity: '#AA6746',
    SourcePawn: '#5c7611',
    SQF: '#3F3F3F',
    Squirrel: '#800000',
    'SRecode Template': '#348a34',
    Stan: '#b2011d',
    'Standard ML': '#dc566d',
    SuperCollider: '#46390b',
    Swift: '#ffac45',
    SystemVerilog: '#DAE1C2',
    Tcl: '#e4cc98',
    Terra: '#00004c',
    TeX: '#3D6117',
    'TI Program': '#A0AA87',
    Turing: '#cf142b',
    TypeScript: '#2b7489',
    UnrealScript: '#a54c4d',
    Vala: '#fbe5cd',
    VCL: '#148AA8',
    Verilog: '#b2b7f8',
    VHDL: '#adb2cb',
    'Vim script': '#199f4b',
    'Visual Basic': '#945db7',
    Volt: '#1F1F1F',
    Vue: '#2c3e50',
    wdl: '#42f1f4',
    WebAssembly: '#04133b',
    wisp: '#7582D1',
    X10: '#4B6BEF',
    xBase: '#403a40',
    XC: '#99DA07',
    XQuery: '#5232e7',
    XSLT: '#EB8CEB',
    Yacc: '#4B6C4B',
    YARA: '#220000',
    YASnippet: '#32AB90',
    ZAP: '#0d665e',
    Zephir: '#118f9e',
    Zig: '#ec915c',
    ZIL: '#dc75e5',
    Other: '#bbb'
  };

  /* eslint-disable no-bitwise */
  // key - bg color
  // value - foreground color
  var colorsMap = {
    '#76CA61': '#fff',
    '#24565A': '#fff',
    '#FDD835': '#000',
    '#50B0BA': '#fff',
    '#FF5858': '#fff',
    '#B0753F': '#fff',
    '#25CDEB': '#000',
    '#387EED': '#fff',
    '#ED3DC6': '#fff',
    '#512DA8': '#fff'
  };

  function hashCode(str) {
    var hash = 0;

    for (var i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    return hash;
  }

  function intToRGB(i) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();
    return '00000'.substring(0, 6 - c.length) + c;
  }

  function stringToColor(str, fromMap) {
    if (str === void 0) {
      str = '';
    }

    if (fromMap === void 0) {
      fromMap = true;
    }

    var hashedHexNumber = intToRGB(hashCode(str));

    if (!fromMap) {
      return ("#" + hashedHexNumber).toLowerCase();
    }

    var hashedDecNumber = parseInt(hashedHexNumber, 16);
    var colorsKeysDec = Object.keys(colorsMap).map(function (key) {
      return (// eslint-disable-next-line
        parseInt(key.replace('#', ''), 16)
      );
    }); // eslint-disable-line

    var closestColor = colorsKeysDec // eslint-disable-next-line
    .reduce(function (prev, curr) {
      return (// eslint-disable-next-line
        Math.abs(curr - hashedDecNumber) < Math.abs(prev - hashedDecNumber) ? curr : prev
      );
    }) // eslint-disable-line
    .toString(16);
    var resultPair = ["#" + closestColor, colorsMap["#" + closestColor.toUpperCase()]];
    return resultPair;
  }

  var getColor = function getColor(language) {
    return languageColors[language] ? languageColors[language] : stringToColor(language, false);
  };

  var getChartData = function getChartData(data, displaySkills, showOtherSkills, sortByScore) {
    if (data === void 0) {
      data = [];
    }

    if (displaySkills === void 0) {
      displaySkills = [];
    }

    if (showOtherSkills === void 0) {
      showOtherSkills = false;
    }

    if (sortByScore === void 0) {
      sortByScore = false;
    }

    var scoresData = [].concat(data);
    var languagesList = [];
    scoresData.forEach(function (score) {
      score.languages.forEach(function (languageData) {
        if (displaySkills.length > 0) {
          var inDisplaySkills = displaySkills.map(function (s) {
            return s.toLowerCase();
          }).includes(languageData.language.toLowerCase());
          if (!inDisplaySkills) return;
        }

        if (!languagesList.includes(languageData.language)) {
          languagesList.push(languageData.language);
        }
      });
    });
    var labels = scoresData.map(function (score) {
      return score.date;
    });
    var datasets = languagesList.map(function (language) {
      var values = [];
      var maxScore = 0;
      scoresData.forEach(function (score) {
        var languageData = score.languages.filter(function (langData) {
          return langData.language === language;
        })[0];
        if (languageData && languageData.score > maxScore) maxScore = languageData.score;
        values.push(languageData ? languageData.score : 0);
      });
      return {
        label: language,
        color: getColor(language),
        values: values,
        maxScore: maxScore
      };
    });
    var otherDataset;

    if (showOtherSkills) {
      var values = [];
      scoresData.forEach(function (score) {
        var otherScore = 0;
        score.languages.forEach(function (langData) {
          if (!languagesList.includes(langData.language)) {
            otherScore += langData.score;
          }
        });
        values.push(otherScore);
      });
      otherDataset = {
        label: 'Other',
        color: 'var(--other-skills-area-color)',
        values: values
      };
    }

    if (sortByScore) {
      datasets.sort(function (a, b) {
        return a.maxScore > b.maxScore ? -1 : 1;
      });
    } else {
      datasets.sort(function (a, b) {
        return a.label > b.label ? 1 : -1;
      });
    }

    if (otherDataset) {
      datasets.push(otherDataset);
    }

    return {
      labels: labels,
      datasets: datasets
    };
  };

  var formatScore = function formatScore(score) {
    return Math.round(score);
  };

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
        tempDiv.innerHTML = renderChart(ctx);
      } else if (state === STATE_ERROR) {
        tempDiv.innerHTML = renderError();
      } else if (state === STATE_IDLE || state === STATE_LOADING) {
        tempDiv.innerHTML = renderLoading(ctx);
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
      fetchData(username, id).then(function (data) {
        _this2.emitData(data);

        _this2.data = getChartData(data.scores, _this2.displaySkills, _this2.showOtherSkills, _this2.sortByScore);

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
      var totalText = formatScore(total) + " exp. points"; // prettier-ignore

      var datasetsText = currentValues.length > 0 ? "\n      <ul class=\"codersrank-skills-chart-tooltip-list\">\n        " + currentValues.map(function (_ref) {
        var label = _ref.label,
            color = _ref.color,
            value = _ref.value;
        var valueText = label + ": " + formatScore(value);
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

  if (window.customElements && !window.customElements.get(COMPONENT_TAG)) {
    window.customElements.define(COMPONENT_TAG, CodersRankSkillsChart);
  }

})));
//# sourceMappingURL=codersrank-skills-chart.js.map
