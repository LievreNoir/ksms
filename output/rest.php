<?php
if (( strpos($_SERVER['HTTP_USER_AGENT'], 'OPR') ) || ( strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE 7.0') ) || ( strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE 8.0') ) || ( strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE 9.0') ) || ( strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE 10.0') )) header ('Location: flash_rest.html');
 else header ('Location: html5_rest.html');
?>