<?php 

$method = $_SERVER['REQUEST_METHOD'];

$token = "token:token";
$chat_id = "-id";

$msg = "<b>Сообщение с сайта:</b> %0A";

foreach ( $_POST as $key => $value ) {
  if ( $value != "" ) {
    $msg .= "<b>".$key."</b> ".$value."%0A";
  }
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$msg}","r");

if ($sendToTelegram) {
  http_response_code(200);
} else {
  http_response_code(400);
}
