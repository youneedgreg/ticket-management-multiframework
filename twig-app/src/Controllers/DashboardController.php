<?php

namespace App\Controllers;

use App\Utils\Session;

class DashboardController extends BaseController {
    
    public function index() {
        $user = Session::getUser();
        
        // Load tickets from JSON file
        $ticketsFile = __DIR__ . '/../../data/tickets.json';
        $tickets = [];
        
        if (file_exists($ticketsFile)) {
            $content = file_get_contents($ticketsFile);
            $tickets = json_decode($content, true) ?? [];
        }
        
        // Calculate statistics
        $stats = [
            'total' => count($tickets),
            'open' => count(array_filter($tickets, fn($t) => $t['status'] === 'open')),
            'inProgress' => count(array_filter($tickets, fn($t) => $t['status'] === 'in_progress')),
            'closed' => count(array_filter($tickets, fn($t) => $t['status'] === 'closed'))
        ];
        
        $this->render('pages/dashboard.html.twig', [
            'user' => $user,
            'stats' => $stats
        ]);
    }
}