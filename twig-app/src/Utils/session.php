<?php

namespace App\Utils;

class Session {
    const SESSION_KEY = 'ticketapp_session';
    
    public static function isAuthenticated() {
        return isset($_SESSION[self::SESSION_KEY]);
    }
    
    public static function login($email, $password) {
        // Simulated authentication
        if (!empty($email) && strlen($password) >= 6) {
            $_SESSION[self::SESSION_KEY] = [
                'token' => bin2hex(random_bytes(16)),
                'user' => ['email' => $email],
                'timestamp' => date('c')
            ];
            return ['success' => true];
        }
        return ['success' => false, 'error' => 'Invalid credentials'];
    }
    
    public static function signup($email, $password) {
        // Simulated signup
        return self::login($email, $password);
    }
    
    public static function logout() {
        unset($_SESSION[self::SESSION_KEY]);
        session_destroy();
    }
    
    public static function getUser() {
        if (self::isAuthenticated()) {
            return $_SESSION[self::SESSION_KEY]['user'];
        }
        return null;
    }
    
    public static function setFlash($type, $message) {
        $_SESSION['flash'][$type] = $message;
    }
    
    public static function getFlash($type) {
        if (isset($_SESSION['flash'][$type])) {
            $message = $_SESSION['flash'][$type];
            unset($_SESSION['flash'][$type]);
            return $message;
        }
        return null;
    }
}