<?php 
// http://localhost/netsurf/Netsurf_Api/public/connect/
$app->post('/connect', function($request, $response){
	$data = json_decode($request->getBody());
	$username = $data->username;
	$password = $data->password;
	$orderbyparam = "_id";
	$sth = $this->handler->connect($username, $password);
	return $this->response->withJson($sth);
});

// connect($username, $password $orderbyparam);
// updatePassword('_radcheck', $username, $oldpass, $newpass, $sessionId);
// dataBalance('_databalance', $username, $pin, $sessionId);
// cashBalance('_easywallet', $username, $pin, $sessionId);