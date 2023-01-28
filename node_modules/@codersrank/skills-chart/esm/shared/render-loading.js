function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { renderChart } from './render-chart';
export var renderLoading = function renderLoading(ctx) {
  return renderChart(_extends({}, ctx, {
    preloader: true,
    data: {
      labels: [],
      datasets: []
    }
  }));
};