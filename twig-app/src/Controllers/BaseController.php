<?php

namespace App\Controllers;

use Twig\Environment;

class BaseController {
    protected $twig;
    
    public function __construct(Environment $twig) {
        $this->twig = $twig;
    }
    
    protected function render($template, $data = []) {
        echo $this->twig->render($template, $data);
    }
    
    protected function redirect($path) {
        header("Location: $path");
        exit;
    }
}