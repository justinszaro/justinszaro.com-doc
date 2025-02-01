<?php
ini_set('display_errors', 1);

include '.bootstrap.php';

var_dump(new HTTP\Client);
var_dump(new Twitter\Client);
?>