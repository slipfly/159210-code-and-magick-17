'use strict';

(function () {
  var userDialog = document.querySelector('.setup');


  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var getWizardsStack = function (frag, wizArr) {
    for (var i = 0; i < wizArr.length; i++) {
      frag.appendChild(renderWizard(wizArr[i]));
    }

    similarListElement.appendChild(frag);
  };

  window.data.generateWizards(window.util.wizardsAmount, window.util.wizardsNames, window.util.wizardsSurnames, window.util.wizardsCoats, window.util.wizardsEyes);

  getWizardsStack(window.data.fragment, window.util.wizards);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
