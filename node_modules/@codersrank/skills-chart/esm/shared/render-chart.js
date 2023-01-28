import { codersrRankLogo } from './codersrank-logo';
export var renderChart = function renderChart(_temp) {
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