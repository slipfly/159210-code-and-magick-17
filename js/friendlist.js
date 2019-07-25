'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var fragment = document.createDocumentFragment();

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

  var getWizardsStack = function (frag) {
    for (var i = 0; i < window.data.length; i++) {
      frag.appendChild(renderWizard(window.data[i]));
    }

    similarListElement.appendChild(frag);
  };

  getWizardsStack(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
