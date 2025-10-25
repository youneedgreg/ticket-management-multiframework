<?php

namespace App\Controllers;

use App\Utils\Session;
use App\Utils\Validator;

class AuthController extends BaseController {
    
    public function showLogin() {
        // Redirect if already logged in
        if (Session::isAuthenticated()) {
            $this->redirect('/dashboard');
        }
        
        $this->render('pages/login.html.twig', [
            'errors' => []
        ]);
    }
    
    public function login() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->redirect('/auth/login');
        }
        
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';
        $errors = [];
        
        // Validate email
        if (empty($email)) {
            $errors['email'] = 'Email is required';
        } elseif (!Validator::validateEmail($email)) {
            $errors['email'] = 'Please enter a valid email';
        }
        
        // Validate password
        if (empty($password)) {
            $errors['password'] = 'Password is required';
        } elseif (!Validator::validatePassword($password)) {
            $errors['password'] = 'Password must be at least 6 characters';
        }
        
        // If validation fails, show errors
        if (!empty($errors)) {
            $this->render('pages/login.html.twig', [
                'errors' => $errors,
                'old' => ['email' => $email]
            ]);
            return;
        }
        
        // Attempt login
        $result = Session::login($email, $password);
        
        if ($result['success']) {
            Session::setFlash('success', 'Login successful!');
            $this->redirect('/dashboard');
        } else {
            Session::setFlash('error', $result['error'] ?? 'Invalid credentials. Please try again.');
            $this->redirect('/auth/login');
        }
    }
    
    public function showSignup() {
        // Redirect if already logged in
        if (Session::isAuthenticated()) {
            $this->redirect('/dashboard');
        }
        
        $this->render('pages/signup.html.twig', [
            'errors' => []
        ]);
    }
    
    public function signup() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->redirect('/auth/signup');
        }
        
        $email = $_POST['email'] ?? '';
        $password = $_POST['password'] ?? '';
        $confirmPassword = $_POST['confirm_password'] ?? '';
        $errors = [];
        
        // Validate email
        if (empty($email)) {
            $errors['email'] = 'Email is required';
        } elseif (!Validator::validateEmail($email)) {
            $errors['email'] = 'Please enter a valid email';
        }
        
        // Validate password
        if (empty($password)) {
            $errors['password'] = 'Password is required';
        } elseif (!Validator::validatePassword($password)) {
            $errors['password'] = 'Password must be at least 6 characters';
        }
        
        // Validate confirm password
        if (empty($confirmPassword)) {
            $errors['confirm_password'] = 'Please confirm your password';
        } elseif ($password !== $confirmPassword) {
            $errors['confirm_password'] = 'Passwords do not match';
        }
        
        // If validation fails, show errors
        if (!empty($errors)) {
            $this->render('pages/signup.html.twig', [
                'errors' => $errors,
                'old' => ['email' => $email]
            ]);
            return;
        }
        
        // Attempt signup
        $result = Session::signup($email, $password);
        
        if ($result['success']) {
            Session::setFlash('success', 'Account created successfully!');
            $this->redirect('/dashboard');
        } else {
            Session::setFlash('error', $result['error'] ?? 'Signup failed. Please try again.');
            $this->redirect('/auth/signup');
        }
    }
    
    public function logout() {
        Session::logout();
        Session::setFlash('success', 'Logged out successfully');
        $this->redirect('/');
    }
}