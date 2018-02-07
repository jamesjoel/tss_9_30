<?php
mysql_select_db("tss_9", mysql_connect("localhost", "root", ""));
extract($_POST);
mysql_query("INSERT INTO user (name, age, city) VALUES ('$name', '$age', '$city')");
$id=mysql_insert_id();
$arr=array('id'=>$id);
echo json_encode($arr);
?>