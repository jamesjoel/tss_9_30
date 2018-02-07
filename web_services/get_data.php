<?php
mysql_select_db("tss_9", mysql_connect("localhost", "root", ""));
$obj=mysql_query("SELECT * FROM user");
$arr=array();
while($data=mysql_fetch_assoc($obj))
{
	$arr[]=$data;
}
// print_r($arr);
echo json_encode($arr);
?>