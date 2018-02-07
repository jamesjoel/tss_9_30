<?php
mysql_select_db("tss_9", mysql_connect("localhost", "root", ""));
extract($_POST);
mysql_query("UPDATE user SET name='$name', age='$age', city='$city' WHERE id=$id");
$arr=array('success'=>true);
echo json_encode($arr);
?>