'use strict';
(function () {
  var PLAYERS_QUANTITIY = 4;

  var userDialog = document.querySelector('.setup');
  // .classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getRandomNumber = function (elementsArray) {
    var randomElement = elementsArray[Math.floor(Math.random() * elementsArray.length)];
    return randomElement;
  };

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  }

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < PLAYERS_QUANTITIY; i++) {
      fragment.appendChild(renderWizard(getRandomNumber(wizards)));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');
  // var submitHandler = function (evt) {
  //   window.backend.save(new FormData(form), function () {
  //     userDialog.classList.add('hidden');
  //   });
  //   evt.preventDefault();
  // };
  // form.addEventListener('submit', submitHandler);

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });


  var setupWizard = document.querySelector('.setup-wizard');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var wizardNameInput = document.querySelector('input[name="eyes-color"]');
  var wizardCoatInput = document.querySelector('input[name="coat-color"]');
  var fireballMainInput = document.querySelector('input[name="fireball-color"]');
  var wizardCoatChange = setupWizard.querySelector('.wizard-coat');
  var wizardEyesChange = setupWizard.querySelector('.wizard-eyes');

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

  // form.action = 'https://javascript.pages.academy/code-and-magick';
})();
