<?php

namespace App\Controllers;

use App\Utils\Session;
use App\Utils\Validator;

class TicketController extends BaseController {
    
    private $ticketsFile;
    
    public function __construct($twig) {
        parent::__construct($twig);
        $this->ticketsFile = __DIR__ . '/../../data/tickets.json';
    }
    
    private function loadTickets() {
        if (!file_exists($this->ticketsFile)) {
            file_put_contents($this->ticketsFile, json_encode([]));
            return [];
        }
        
        $content = file_get_contents($this->ticketsFile);
        return json_decode($content, true) ?? [];
    }
    
    private function saveTickets($tickets) {
        file_put_contents($this->ticketsFile, json_encode($tickets, JSON_PRETTY_PRINT));
    }
    
    public function index() {
        $tickets = $this->loadTickets();
        
        $this->render('pages/tickets.html.twig', [
            'tickets' => $tickets,
            'editing' => null,
            'errors' => []
        ]);
    }
    
    public function create() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->redirect('/tickets');
        }
        
        $title = $_POST['title'] ?? '';
        $description = $_POST['description'] ?? '';
        $status = $_POST['status'] ?? '';
        $priority = $_POST['priority'] ?? '';
        
        // Validate
        $validation = Validator::validateTicket([
            'title' => $title,
            'description' => $description,
            'status' => $status,
            'priority' => $priority
        ]);
        
        if (!$validation['isValid']) {
            $tickets = $this->loadTickets();
            $this->render('pages/tickets.html.twig', [
                'tickets' => $tickets,
                'editing' => null,
                'errors' => $validation['errors'],
                'formData' => [
                    'title' => $title,
                    'description' => $description,
                    'status' => $status,
                    'priority' => $priority
                ],
                'showForm' => true
            ]);
            return;
        }
        
        // Create new ticket
        $tickets = $this->loadTickets();
        
        $newTicket = [
            'id' => (string)time() . rand(1000, 9999),
            'title' => $title,
            'description' => $description,
            'status' => $status,
            'priority' => $priority,
            'createdAt' => date('c')
        ];
        
        array_unshift($tickets, $newTicket);
        $this->saveTickets($tickets);
        
        Session::setFlash('success', 'Ticket created successfully!');
        $this->redirect('/tickets');
    }
    
    public function update() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->redirect('/tickets');
        }
        
        $id = $_POST['id'] ?? '';
        $title = $_POST['title'] ?? '';
        $description = $_POST['description'] ?? '';
        $status = $_POST['status'] ?? '';
        $priority = $_POST['priority'] ?? '';
        
        // Validate
        $validation = Validator::validateTicket([
            'title' => $title,
            'description' => $description,
            'status' => $status,
            'priority' => $priority
        ]);
        
        if (!$validation['isValid']) {
            $tickets = $this->loadTickets();
            $this->render('pages/tickets.html.twig', [
                'tickets' => $tickets,
                'editing' => [
                    'id' => $id,
                    'title' => $title,
                    'description' => $description,
                    'status' => $status,
                    'priority' => $priority
                ],
                'errors' => $validation['errors'],
                'showForm' => true
            ]);
            return;
        }
        
        // Update ticket
        $tickets = $this->loadTickets();
        
        foreach ($tickets as $index => $ticket) {
            if ($ticket['id'] === $id) {
                $tickets[$index]['title'] = $title;
                $tickets[$index]['description'] = $description;
                $tickets[$index]['status'] = $status;
                $tickets[$index]['priority'] = $priority;
                $tickets[$index]['updatedAt'] = date('c');
                break;
            }
        }
        
        $this->saveTickets($tickets);
        
        Session::setFlash('success', 'Ticket updated successfully!');
        $this->redirect('/tickets');
    }
    
    public function delete() {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            $this->redirect('/tickets');
        }
        
        $id = $_POST['id'] ?? '';
        
        $tickets = $this->loadTickets();
        $tickets = array_filter($tickets, fn($ticket) => $ticket['id'] !== $id);
        $tickets = array_values($tickets); // Re-index array
        
        $this->saveTickets($tickets);
        
        Session::setFlash('success', 'Ticket deleted successfully!');
        $this->redirect('/tickets');
    }
}