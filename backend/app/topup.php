<?php 

    require_once "../config/connection.php";

    if (isset($_POST['post'])) {
        
        $id = $_POST['id'];
        $nickname = $_POST['nickname'];
        $is_topup = true;

        $sql = "INSERT INTO account (id, nickname, is_topup) VALUES (" . $id . ", " . $nickname . ", " . $is_topup .")";

        $result = $conn->query($sql);

        if (mysqli_error($conn) > 0) {
            $error = mysqli_error($conn);
            //redirect with error
        }else {
            $response = "Berhasil Menambah Account";
            //redirect with response success
        }

    }

?>
