<!DOCTYPE html>
<html>
    <body>
        <?php
         echo $_GET["uname"];
        
            // define variables and set to empty values
            $name = $email = $gender = $comment = $website = "";

            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $uname = test_input($_POST["uname"]);
                $psw = test_input($_POST["psw"]);
            }

            function test_input($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
            return $data;
            }
            echo $uname;
            echo $psw; 
        ?>
    </body>
</html>