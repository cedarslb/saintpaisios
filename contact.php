<?php
$mailTo = 'terjanl@roadrunner.com';
$name = htmlspecialchars($_POST['Name']);
$mailFrom = htmlspecialchars($_POST['Email']);
$subject = 'Message from your website';
$message_text = htmlspecialchars($_POST['Message']);

$message =  'From: '.$name.'; Email: '.$mailFrom.' ; Message: '.$message_text;

mail($mailTo, $subject, $message);
{
//  To redirect form on a particular page
header("Location:http://www.saintpaisios.net/contact.html");
}
?>