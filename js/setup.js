'use strict';
var PLAYERS_QUANTITIY = 4;

// document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomNumber = function (elementsArray) {
  var randomElement = elementsArray[Math.floor(Math.random() * elementsArray.length)];
  return randomElement;
};

var wizards = [];
for (var j = 0; j < PLAYERS_QUANTITIY; j++) {
  var wizardName = getRandomNumber(names) + getRandomNumber(lastNames);
  var wizardCoat = getRandomNumber(coatColors);
  var wizardEyes = getRandomNumber(eyesColors);

  wizards.push({
    name: wizardName,
    coat: wizardCoat,
    eyes: wizardEyes
  });
}

for (var i = 0; i < PLAYERS_QUANTITIY; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyes;
}

similarListElement.appendChild(wizardElement);

document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupUserName = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var wizardNameInput = document.querySelector('input[name="eyes-color"]');
var wizardCoatInput = document.querySelector('input[name="coat-color"]');
var fireballMainInput = document.querySelector('input[name="fireball-color"]');
var wizardCoatChange = setupWizard.querySelector('.wizard-coat');
var wizardEyesChange = setupWizard.querySelector('.wizard-eyes');

setupOpenIcon.tabIndex = 0;
setupClose.tabIndex = 0;

var onPopupEscPress = function (evt) {
  if (setupUserName !== document.activeElement) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    closePopup();
  }
});

setupUserName.minLength = 2;

var clickRandomColor = function (name, color, inputs) {
  name.style.fill = getRandomNumber(color);
  inputs.value = name.style.fill;
};

wizardCoatChange.addEventListener('click', function () {
  clickRandomColor(wizardCoatChange, coatColors, wizardCoatInput);
});

wizardEyesChange.addEventListener('click', function () {
  clickRandomColor(wizardEyesChange, eyesColors, wizardNameInput);
});

// спросить про цвет почему не меняется норм
setupFireballWrap.addEventListener('click', function () {
  var randomSetupFireball = getRandomNumber(fireballColors);
  setupFireballWrap.style.backgroundColor = randomSetupFireball;
  fireballMainInput.value = randomSetupFireball;
});

var SetupWizardForm = document.querySelector('.setup-wizard-form');

SetupWizardForm.action = 'https://javascript.pages.academy/code-and-magick';
