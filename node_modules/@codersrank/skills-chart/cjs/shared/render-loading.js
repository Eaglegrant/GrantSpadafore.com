"use strict";

exports.__esModule = true;
exports.renderLoading = void 0;

var _renderChart = require("./render-chart");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var renderLoading = function renderLoading(ctx) {
  return (0, _renderChart.renderChart)(_extends({}, ctx, {
    preloader: true,
    data: {
      labels: [],
      datasets: []
    }
  }));
};

exports.renderLoading = renderLoading;