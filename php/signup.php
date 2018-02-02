<?php
  // if (isset($_POST['signupform'])) {
    // send form data to email
    // $firstname = $_POST['firstname'];
    // $lastname = $_POST['lastname'];
    // $emailaddress = $_POST['emailaddress'];
    // $to = 'cmwells@usfca.edu';
    // $subject = 'New Nofin subscriber!';
    // $message = 'Name: ' . $firstname . ' ' . $lastname . "\n";
    // $message .= 'Email address: ' . $emailaddress;
    // $header = 'From: ' . $emailaddress . "\n" .
    //   'Reply-to: ' . $emailaddress . "\n" .
    //   'X-Mailer: PHP/' . phpversion();
    // mail($to, $subject, $message, $header);
    //
    // echo $message;

    // send form data to text file
    $file = fopen("subscribers.txt", "r+");
    $content = $firstname . ' ' . $lastname . ' ' . $emailaddress . "\n";
    echo $content;
    fwrite($file, $content);
    fclose($file);
  // }
 ?>
