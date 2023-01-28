import { languageColors } from './language-colors';
import { stringToColor } from './string-to-color';
export var getColor = function getColor(language) {
  return languageColors[language] ? languageColors[language] : stringToColor(language, false);
};