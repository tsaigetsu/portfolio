<?php
$conn = new mysqli("localhost", "root", "", "db");
$rqt = "SELECT * FROM users";
$result = $conn->query($rqt);
if($conn){
    while($row = $result->fetch_assoc()){
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
    }
} else {
    echo "Connection failed: ";
}
$conn->close();
?>