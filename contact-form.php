<?php
	$name = $email = $subject = $message = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	  $name = test_input($_POST["name"]);
	  $email = test_input($_POST["email"]);
	  $website = test_input($_POST["website"]);
	  $comment = test_input($_POST["comment"]);
	  $gender = test_input($_POST["gender"]);
	}
?>