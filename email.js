'use strict';

$(function() {
  $('#submit').click(function() {
    var dataString = 'name = ' + firstname + ' ' + lastname + ', email address = ' + emailaddress;

    $.ajax({
      type:'POST',
      url: 'signup.php',
      data: dataString,
      success: function() {
        $('#signupform').html('<div id="message"></div>');
        $('#message').html('<p>Thank you. You are subscribed.</p>');

        alert (dataString);
      }
    });
    return false;
  });
});
