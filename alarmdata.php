<?php

$fullname=$row["fullname"];
$mediname= $row['mediname'];
$description=$row['description'];
$meditype=$row['meditype'];
$datime=$row['datime'];

$con=mysqli_connect('localhost','root');

mysqli_select_db($con,'alarmdata');

if($con)
{
	echo "successfull";
}

else
{
	echo "connection not establish";
}

$query = "insert into data(fullname,mediname,description,datime) values ('$fullname','$mediname','$description','$datime')";

$i=mysqli_query($con,$query);

echo $i;

mysqli_close($con);

?>









