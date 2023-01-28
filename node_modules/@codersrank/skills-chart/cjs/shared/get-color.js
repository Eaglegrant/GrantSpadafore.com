"use strict";

exports.__esModule = true;
exports.getColor = void 0;

var _languageColors = require("./language-colors");

var _stringToColor = require("./string-to-color");

var getColor = function getColor(language) {
  return _languageColors.languageColors[language] ? _languageColors.languageColors[language] : (0, _stringToColor.stringToColor)(language, false);
};

exports.getColor = getColor;