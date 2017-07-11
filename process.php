<?php
// Get Data 
$name    = strip_tags($_POST['name']);
$email   = strip_tags($_POST['email']);
// $message = strip_tags($_POST['message']);
// $budget  = strip_tags($_POST['budget']);

// Send Message
mail( "mail@example.com", "Contact Form Submission",
"Name: $name\nEmail: $email\nBudget: $budget$\nMessage: $message\n",
"From: Forms <forms@example.com>" );
?>