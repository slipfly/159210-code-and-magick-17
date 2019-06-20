'use strict';

var userDialog = document.querySelector('.setup');
var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizardsCoats = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var wizardsEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

var getRandomFromArray = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var generateWizards = function (amount, names, surnames, coatColors, eyesColors) {
  for (var i = 0; i < amount; i++) {
    var wizard = {};
    var randomNameNumber = getRandomFromArray(names);
    var randomSurnameNumber = getRandomFromArray(surnames);
    var randomCoatNumber = getRandomFromArray(coatColors);
    var randomEyesNumber = getRandomFromArray(eyesColors);

    wizard.name = names[randomNameNumber] + ' ' + surnames[randomSurnameNumber];
    wizard.coatColor = coatColors[randomCoatNumber];
    wizard.eyesColor = eyesColors[randomEyesNumber];

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

generateWizards(4, wizardsNames, wizardsSurnames, wizardsCoats, wizardsEyes);

getWizardsStack(fragment, wizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

userDialog.classList.remove('hidden');

