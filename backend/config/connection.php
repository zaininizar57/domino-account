<?php 

    $hosname = "localhost";
    $db_username = "root";
    $db_password = "";
    $db_name = "bukan_sarjana";

    $conn = mysqli_connect($hosname, $db_username, $db_password, $db_name);

    if (!$conn) {
        echo "connection failed:500";
    }

?>
