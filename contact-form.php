<?php
	$name = $email = $subject = $message = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		
			
		$name = $_POST["name"];
		$mailFrom  = $_POST["email"];
		$subject = $_POST["subject"];
		$message = $_POST["message"];

		if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
		  $nameErr = "Only letters and white space allowed";
		}
		if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
		  $emailErr = "Invalid email format";
		}
		
		// DreamTeam email
		$mailTo = "jzeldiaz@gmail.com";
		$headers = "From: ".$mailFrom;
		$alertMsg = "You've got mail from ".$name.".\n\n".$message;
		
//		echo "You've got mail!\n";
//		echo "From: ".$name."\nEmail: ".$mailFrom."\nSubject: ".$subject."\nMessage: ".$message;
		
		// to, subj, msg, headers
		mail($mailTo, $subject, $message, $headers);
		header("Location: contact.html?mailsent");
		
		
	}



?>