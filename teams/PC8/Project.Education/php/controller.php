<?php
echo "<h3>";
echo "Received from the server";
echo "</h3>";


foreach ($_REQUEST as &$value) {
    echo $value;
    echo "<br>";
}
?>