'use strict';

var initialInputValues = ['First name', 'Last name', 'Email address'];
var userInputValues = [];
var errorMessages = ['Please enter your first name. ', 'Please enter your last name. ', 'Please enter your email address. ', 'Please enter a valid email address. '];

var formEl = document.getElementsByTagName('form');
var input = document.getElementsByTagName('input');
var subscribe = document.getElementById('subscribe');
var h1El = document.createElement('h1');
var h2El = document.createElement('h2');

// ****************************** Event handlers ******************************

// When user enters field: change bg color, empty initial value
function handleFocus(event) {
  event.preventDefault();
  event.target.style.backgroundColor = '#17ad96';

  for (var i = 0; i < input.length; i++) {
    if (event.target.value === initialInputValues[i]) {
      event.target.value = '';
    }
  }
}

// When user leaves field: return original bg color, replace initial value if empty
function handleBlur(event) {
  event.preventDefault();
  event.target.style.backgroundColor = '#fff';

  for (var i = 0; i < input.length; i++) {
    if (input[i].value === '') {
      input[i].value = initialInputValues[i];
    }
  }
}

// When user clicks sign up: store input, input validation, ajax confirmation message
function handleSubscribe(event) {
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

  if (h1El.textContent === '' && h2El.textContent === '') { // if there are no error messages

    var $form = $('#signupform');
    var url = 'https://script.google.com/a/dons.usfca.edu/macros/s/AKfycbwF2lg_qKTrziSFtL-GuLM7KYk9QMVZdyPCq9NrXSEfImObDfzi/exec';

    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      data: $form.serializeArray(),
      success: function() {
        $('#formdiv').html('<div id="message"</div>');
        $('#message').html('<p>Thank you. You are subscribed.</p>');
      }
    });
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
subscribe.addEventListener('click', handleSubscribe);
