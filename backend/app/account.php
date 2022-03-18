<?php 

    require_once "../config/connection.php";

    if (isset($_POST['save_no_topup'])) {
        
        $id = $_POST['id'];
        $nickname = $_POST['nickname'];
        $is_topup = 0;

        $sql = "INSERT INTO account (id, nickname, is_topup) VALUES ('" . $id . "', '" . $nickname . "', '" . $is_topup ."')";

        $result = $conn->query($sql);

        if (mysqli_error($conn) > 0) {
            $error = mysqli_error($conn);
            var_dump($error);
            header('Location: ../../no_topup.php?error=' . $error);
        }else {
            $response = "Berhasil Menambah Account";
            var_dump($response);
            header('Location: ../../no_topup.php?response=' . $response);
        }

    }else if (isset($_POST['save_topup'])) {
        
        $id = $_POST['id'];
        $nickname = $_POST['nickname'];
        $is_topup = 1;

        $sql = "INSERT INTO account (id, nickname, is_topup) VALUES (" . $id . ", " . $nickname . ", " . $is_topup .")";

        $result = $conn->query($sql);

        if (mysqli_error($conn) > 0) {
            $error = mysqli_error($conn);
            //redirect with error
        }else {
            $response = "Berhasil Menambah Account";
            //redirect with response success
        }

    }else if(isset($_GET['get_account'])){

        
        if ($_GET['get_account'] == 1) {
            $sql = "SELECT * FROM account WHERE is_topup = 1";
        }else if($_GET['get_account'] == 0){
            $sql = "SELECT * FROM account WHERE is_topup = 0";
        }

        $result = $conn->query($sql);

        if (mysqli_error($conn) > 0) {
            $error = mysqli_error($conn);
            var_dump($error);
            return $error;
        }else {
            $response = "Berhasil Menambah Account";
            
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $data[] = $row;
                }
                header('Content-type: application/json');
                echo json_encode( $data );
            }else {
                header('Content-type: application/json');
                echo '{"jsonError":"data kosong"}';
            }
        }
    }

?>
