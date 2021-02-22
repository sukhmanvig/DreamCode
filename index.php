<!DOCTYPE html>
<html>
    <body>
        <?php
            $host = "ec2-54-198-73-79.compute-1.amazonaws.com";
            $db = "d5ojq5fg16io3j";
            $user ="riolosrzjbhdxa";
            $password = "b37ac7ad7e6047f9c7a5fa1f8bb200761989d11c934c1ac0716907e34ed71efd";
            $charset = "";
            $port ="5432";
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