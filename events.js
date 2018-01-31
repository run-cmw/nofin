'use strict';

var initialInputValues = ['First name', 'Last name', 'Email address'];
var userInputValues = [];
var errorMessages = ['Please enter your first name. ', 'Please enter your last name. ', 'Please enter your email address. ', 'Please enter a valid email address. '];

var formEl = document.getElementsByTagName('form');
var input = document.getElementsByTagName('input');
var submit = document.getElementById('submit');
var h1El = document.createElement('h2');
var h2El = document.createElement('h3');

// ****************************** Event handlers ******************************

// When user enters field: change bg color and empty initial value
function handleFocus(event) {
  event.preventDefault();
  event.target.style.backgroundColor = '#17ad96';

  for (var i = 0; i < input.length; i++) {
    if (event.target.value === initialInputValues[i]) {
      event.target.value = '';
    }
  }
}

// When user leaves field: return original bg color and replace initial value if empty
function handleBlur(event) {
  event.preventDefault();
  event.target.style.backgroundColor = '#fff';

  for (var i = 0; i < input.length; i++) {
    if (input[i].value === '') {
      input[i].value = initialInputValues[i];
    }
  }
}

// When user clicks sign up: store input, input validation
function handleSubmit(event) {
  event.preventDefault();
  h1El.textContent = '';
  h2El.textContent = '';
  userInputValues = [];

  for (var i = 0; i < input.length; i++) {
    userInputValues.push(input[i].value);
  }

  for (var j = 0; j < input.length; j++) {
    if (input[j].value === initialInputValues[j]) {
      h1El.textContent += errorMessages[j];
      formEl[0].appendChild(h1El);
    }
  }

  if (input[2].value !== initialInputValues[2] &&
    (!userInputValues[2].includes('@') || !userInputValues[2].includes('.'))) {
    h2El.textContent = errorMessages[3];
    formEl[0].appendChild(h2El);
  }
}

// ****************************** Event listeners ******************************

// Focus on form fields
for (var i = 0; i < input.length; i++) {
  input[i].addEventListener('focus', handleFocus);
}

// Blur on form fields
for (var j = 0; j < input.length; j++) {
  input[j].addEventListener('blur', handleBlur);
}

// Click on sign up button
submit.addEventListener('click', handleSubmit);
