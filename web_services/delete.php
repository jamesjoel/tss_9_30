<?php
mysql_select_db("tss_9", mysql_connect("localhost", "root", ""));
mysql_query("DELETE FROM user WHERE id=".$_POST['id']);
$arr=array('success'=>true);
echo json_encode($arr);
?>