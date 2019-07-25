'use strict';

(function () {
  window.data = {
    fragment: document.createDocumentFragment(),
    generateWizards: function (amount) {
      for (var i = 0; i < amount; i++) {
        var wizard = {};
        var randomNameNumber = window.util.getRandomFromArray(window.util.wizardsNames);
        var randomSurnameNumber = window.util.getRandomFromArray(window.util.wizardsSurnames);
        var randomCoatNumber = window.util.getRandomFromArray(window.util.wizardsCoats);
        var randomEyesNumber = window.util.getRandomFromArray(window.util.wizardsEyes);

        wizard.name = window.util.wizardsNames[randomNameNumber] + ' ' + window.util.wizardsSurnames[randomSurnameNumber];
        wizard.coatColor = window.util.wizardsCoats[randomCoatNumber];
        wizard.eyesColor = window.util.wizardsEyes[randomEyesNumber];

        window.util.wizards.push(wizard);
      }
    }
  };
})();
