<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  // Configure Elastic Email SMTP settings
  $smtpUsername = "taylamber352@gmail.com";
  $smtpPassword = "115254242A2D623CC99A6F89A5843101DF55";

  $to = "taylamber352@gmail.com";
  $headers = "From: $email";
  $body = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";

  // Send email using PHP's mail function
  if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo "Email sent successfully";
  } else {
    // Error sending email
    echo "Error sending email";
  }
} else {
  // Handle invalid request method
  echo "Method Not Allowed";
}
?>
