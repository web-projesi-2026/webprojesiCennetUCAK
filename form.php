<?php

if($_POST){

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$veri = "Ad: $name | Mail: $email | Konu: $subject | Mesaj: $message\n";

file_put_contents("veriler.txt", $veri, FILE_APPEND);

echo "OK";

}
?>
