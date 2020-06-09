'use strict';
var PLAYERS_QUANTITIY = 4;

document.querySelector('.setup').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

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

