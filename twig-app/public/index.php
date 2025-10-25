<?php
session_start();

require_once __DIR__ . '/../vendor/autoload.php';

// Get Twig instance
$twig = require_once __DIR__ . '/../src/bootstrap.php';

use App\Utils\Router;

$router = new Router($twig);

// Define routes
$router->get('/', 'HomeController@index');
$router->get('/auth/login', 'AuthController@showLogin');
$router->post('/auth/login', 'AuthController@login');
$router->get('/auth/signup', 'AuthController@showSignup');
$router->post('/auth/signup', 'AuthController@signup');
$router->get('/auth/logout', 'AuthController@logout');
$router->get('/dashboard', 'DashboardController@index', true);
$router->get('/tickets', 'TicketController@index', true);
$router->post('/tickets/create', 'TicketController@create', true);
$router->post('/tickets/update', 'TicketController@update', true);
$router->post('/tickets/delete', 'TicketController@delete', true);

// Dispatch the route
$router->dispatch();