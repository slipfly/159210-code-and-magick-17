'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var wizards = [];
  var wizardsAmount = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var fragment = document.createDocumentFragment();

  var generateWizards = function (amount) {
    for (var i = 0; i < amount; i++) {
      var wizard = {};
      var randomNameNumber = window.util.getRandomFromArray(wizardsNames);
      var randomSurnameNumber = window.util.getRandomFromArray(wizardsSurnames);
      var randomCoatNumber = window.util.getRandomFromArray(window.util.wizardsCoats);
      var randomEyesNumber = window.util.getRandomFromArray(window.util.wizardsEyes);

      wizard.name = wizardsNames[randomNameNumber] + ' ' + wizardsSurnames[randomSurnameNumber];
      wizard.coatColor = window.util.wizardsCoats[randomCoatNumber];
      wizard.eyesColor = window.util.wizardsEyes[randomEyesNumber];

      wizards.push(wizard);
    }
  };

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

  generateWizards(wizardsAmount, wizardsNames, wizardsSurnames, window.util.wizardsCoats, window.util.wizardsEyes);

  getWizardsStack(fragment, wizards);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
