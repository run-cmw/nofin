<?php
  if (isset($_POST['signup'])) {
    // send form data to email
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $emailaddress = $_POST['emailaddress'];
    $to = 'cmwells@usfca.edu';
    $subject = 'New Nofin subscriber!';
    $message = 'Name: ' . $firstname . ' ' . $lastname . "\n";
    $message .= 'Email address: ' . $emailaddress;
    mail($to, $subject, $message);

    console.log($message);

    // send form data to text file
    $file = fopen("subscribers.txt", "r+");
    $content = $firstname . ' ' . $lastname . ' ' . $emailaddress . "\n";
    fwrite($file, $content);
    fclose($file);
  }
 ?>
