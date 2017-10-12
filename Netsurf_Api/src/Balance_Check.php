<?php 

$app->get('/dataBalance', function ($request, $response) {
		$username = $data->username;
		$pin = $data->pin;
		$sessionId = $data->sessionId;
        $sth = $handler->dataBalance('_databalance', $username, $pin, $sessionId);
        return $this->response->withJson($sth);
    });

$app->get('/cashBalance', function ($request, $response) {
		$username = $data->username;
		$pin = $data->pin;
		$sessionId = $data->sessionId;
        $sth = $handler->cashBalance('_easywallet', $username, $pin, $sessionId);
        return $this->response->withJson($sth);
    });