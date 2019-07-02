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
var wizardBalls = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var wizards = [];
var wizardsAmount = 4;

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var fragment = document.createDocumentFragment();

var getRandomFromArray = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var generateWizards = function (amount) {
  for (var i = 0; i < amount; i++) {
    var wizard = {};
    var randomNameNumber = getRandomFromArray(wizardsNames);
    var randomSurnameNumber = getRandomFromArray(wizardsSurnames);
    var randomCoatNumber = getRandomFromArray(wizardsCoats);
    var randomEyesNumber = getRandomFromArray(wizardsEyes);

    wizard.name = wizardsNames[randomNameNumber] + ' ' + wizardsSurnames[randomSurnameNumber];
    wizard.coatColor = wizardsCoats[randomCoatNumber];
    wizard.eyesColor = wizardsEyes[randomEyesNumber];

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

generateWizards(wizardsAmount, wizardsNames, wizardsSurnames, wizardsCoats, wizardsEyes);

getWizardsStack(fragment, wizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// Появление и скрытие окна персонажа

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userWizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var userWizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var userWizardBall = userDialog.querySelector('.setup-fireball-wrap');
var coatColorStorage = userDialog.querySelector('input[name="coat-color"]');
var eyesColorStorage = userDialog.querySelector('input[name="eyes-color"]');
var ballColorStorage = userDialog.querySelector('input[name="fireball-color"]');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !evt.target.classList.contains('setup-user-name')) {
    closePopup();
  }
};

var onCloseEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE && evt.target.classList.contains('setup-close')) {
    closePopup();
  }
};

var onCoatClick = function () {
  var newColor = getRandomFromArray(wizardsCoats);
  userWizardCoat.style.fill = wizardsCoats[newColor];
  coatColorStorage.value = wizardsCoats[newColor];
};

var onEyesClick = function () {
  var newColor = getRandomFromArray(wizardsEyes);
  userWizardEyes.style.fill = wizardsEyes[newColor];
  eyesColorStorage.value = wizardsEyes[newColor];
};

var onBallClick = function () {
  var newColor = getRandomFromArray(wizardBalls);
  userWizardBall.style.backgroundColor = wizardBalls[newColor];
  ballColorStorage.value = wizardBalls[newColor];
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  document.addEventListener('keydown', onCloseEnterPress);
  userWizardCoat.addEventListener('click', onCoatClick);
  userWizardEyes.addEventListener('click', onEyesClick);
  userWizardBall.addEventListener('click', onBallClick);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  document.removeEventListener('keydown', onCloseEnterPress);
  userWizardCoat.removeEventListener('click', onCoatClick);
  userWizardEyes.removeEventListener('click', onEyesClick);
  userWizardBall.removeEventListener('click', onBallClick);
};

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
