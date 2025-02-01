<?php

$utcDateTime = new DateTime('2014-08-24 13:14', new DateTimeZone("UTC"));

$localDateTime = clone $utcDateTime;

$localDateTime->setTimezone(new DateTimeZone("America/New_York"))

?>

<p>The UTC date/time isL <?= $utcDateTime->format("Y-m-d H:i:s") ?></p>
<p>The New York date/time is: <?= $localDateTime->format("Y-m-d H:i:s") ?></p>
