<?php
$servername = "182.50.133.84:3306";
$username = "rs";
$password = "CBAadmin@123";
$dbname = "rs";
//create connection
$conn =  mysqli_connect($servername,$username,$password,$dbname);
// check connection
if(!$conn){
        die("Connection Failed: ". mysqli_connect_error());
}

$mysqli = new mysqli($servername, $username, $password,$dbname);						
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

 