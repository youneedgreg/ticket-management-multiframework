<?php

namespace App\Utils;

class Router {
    private $routes = [];
    private $twig;
    
    public function __construct($twig) {
        $this->twig = $twig;
    }
    
    public function get($path, $handler, $protected = false) {
        $this->routes['GET'][$path] = [
            'handler' => $handler,
            'protected' => $protected
        ];
    }
    
    public function post($path, $handler, $protected = false) {
        $this->routes['POST'][$path] = [
            'handler' => $handler,
            'protected' => $protected
        ];
    }
    
    public function dispatch() {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        
        // Remove trailing slash
        $path = rtrim($path, '/');
        if (empty($path)) {
            $path = '/';
        }
        
        if (!isset($this->routes[$method][$path])) {
            http_response_code(404);
            echo "404 - Page Not Found";
            return;
        }
        
        $route = $this->routes[$method][$path];
        
        // Check if route is protected
        if ($route['protected'] && !Session::isAuthenticated()) {
            header('Location: /auth/login');
            exit;
        }
        
        // Parse handler
        list($controller, $method) = explode('@', $route['handler']);
        $controller = "App\\Controllers\\$controller";
        
        if (!class_exists($controller)) {
            http_response_code(500);
            echo "Controller not found: $controller";
            return;
        }
        
        $instance = new $controller($this->twig);
        if (!method_exists($instance, $method)) {
            http_response_code(500);
            echo "Method not found";
            return;
        }
        
        $instance->$method();
    }
}
