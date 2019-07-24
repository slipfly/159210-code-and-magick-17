'use strict';

(function () {
  var userDialog = document.querySelector('.setup');

  var wizardBalls = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
  var basicCoords = {
    x: '50%',
    y: '80px'
  };

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
    var newColor = window.util.getRandomFromArray(window.util.wizardsCoats);
    userWizardCoat.style.fill = window.util.wizardsCoats[newColor];
    coatColorStorage.value = window.util.wizardsCoats[newColor];
  };

  var onEyesClick = function () {
    var newColor = window.util.getRandomFromArray(window.util.wizardsEyes);
    userWizardEyes.style.fill = window.util.wizardsEyes[newColor];
    eyesColorStorage.value = window.util.wizardsEyes[newColor];
  };

  var onBallClick = function () {
    var newColor = window.util.getRandomFromArray(wizardBalls);
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
    userDialog.style.top = basicCoords.y;
    userDialog.style.left = basicCoords.x;
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
})();
