<?php

namespace App\Utils;

class Validator {
    public static function validateEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
    
    public static function validatePassword($password) {
        return strlen($password) >= 6;
    }
    
    public static function validateTicket($data) {
        $errors = [];
        
        if (empty($data['title'])) {
            $errors['title'] = 'Title is required';
        }
        
        if (empty($data['status'])) {
            $errors['status'] = 'Status is required';
        } elseif (!in_array($data['status'], ['open', 'in_progress', 'closed'])) {
            $errors['status'] = 'Status must be open, in_progress, or closed';
        }
        
        if (!empty($data['description']) && strlen($data['description']) > 500) {
            $errors['description'] = 'Description must be less than 500 characters';
        }
        
        return [
            'isValid' => empty($errors),
            'errors' => $errors
        ];
    }
}