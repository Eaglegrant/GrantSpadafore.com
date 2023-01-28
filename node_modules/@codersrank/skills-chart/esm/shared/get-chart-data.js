import { getColor } from './get-color';
export var getChartData = function getChartData(data, displaySkills, showOtherSkills, sortByScore) {
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