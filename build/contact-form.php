<?php
	$name = $email = $subject = $message = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		
			
		$name = $_POST["name"];
		$mailFrom  = $_POST["email"];
		$subject = $_POST["subject"];
		$message = $_POST["message"];

		if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
		  exit("Invalid email format");
		}
		
		// DreamTeam email
		$mailTo = "jzeldiaz@gmail.com";
		
		
		// Set content-type header for sending HTML email 
		$headers = "MIME-Version: 1.0" . "\r\n"; 
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 

		// Additional headers 
		$headers .= 'From: '.$name.'<'.$mailFrom.'>' . "\r\n"; 

		$alertMsg = "<html style='font-family: Calibri; margin: 0; padding: 0;'>
			<body>
				<main>
				<h1 style='color: #0d659d; margin-bottom: 10px;'>DreamCode Mail</h1>
					<p>You've received mail via the DreamCode website!</p>
					<p style='margin:2px;padding:0;'><b>Sender:</b> $name ($mailFrom)</p>
					<p style='margin:2px;padding:0;'><b>Subject:</b> $subject</p>
					<p style='margin:0;padding:0;'><b>Message:</b> </p>
					<p style='margin:0;padding:0;'>$message</p>
					<p>==================== End of message ====================</p>
				</main>
			</body>
			</html>";
		

//		echo "From: ".$name."\nEmail: ".$mailFrom."\nSubject: ".$subject."\nMessage: ".$message;
		
		// to, subj, msg, headers
		mail($mailTo, $subject, $alertMsg, $headers);
		header("Location: contact.html?mailsent");

			
	}
