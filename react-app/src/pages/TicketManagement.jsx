import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import DashboardNav from '../components/dashboard/DashboardNav';
import TicketForm from '../components/tickets/TicketForm';
import TicketList from '../components/tickets/TicketList';
import Footer from '../components/common/Footer';
import './TicketManagement.css';

const TicketManagement = () => {
  const [tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  // Load tickets from localStorage on mount
  useEffect(() => {
    const storedTickets = localStorage.getItem('tickets');
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets));
    }
  }, []);

  // Save tickets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  const handleCreateTicket = (ticketData) => {
    const newTicket = {
      id: Date.now().toString(),
      ...ticketData,
      createdAt: new Date().toISOString()
    };
    
    setTickets(prev => [newTicket, ...prev]);
    setShowForm(false);
    toast.success('Ticket created successfully!');
  };

  const handleUpdateTicket = (ticketData) => {
    setTickets(prev => 
      prev.map(ticket => 
        ticket.id === editingTicket.id 
          ? { ...ticket, ...ticketData, updatedAt: new Date().toISOString() }
          : ticket
      )
    );
    setEditingTicket(null);
    setShowForm(false);
    toast.success('Ticket updated successfully!');
  };

  const handleDeleteTicket = (ticketId) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      setTickets(prev => prev.filter(ticket => ticket.id !== ticketId));
      toast.success('Ticket deleted successfully!');
    }
  };

  const handleEditClick = (ticket) => {
    setEditingTicket(ticket);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingTicket(null);
  };

  const handleFormSubmit = (ticketData) => {
    if (editingTicket) {
      handleUpdateTicket(ticketData);
    } else {
      handleCreateTicket(ticketData);
    }
  };

  return (
    <div className="ticket-management-page">
      <DashboardNav />
      
      <main className="ticket-main">
        <div className="container">
          {/* Header */}
          <section className="ticket-header">
            <div>
              <h1 className="page-title">Ticket Management</h1>
              <p className="page-subtitle">Create, manage, and track all your tickets</p>
            </div>
            {!showForm && (
              <button 
                onClick={() => setShowForm(true)} 
                className="btn btn-primary"
              >
                + Create Ticket
              </button>
            )}
          </section>

          {/* Form Section */}
          {showForm && (
            <section className="form-section">
              <div className="form-header">
                <h2>{editingTicket ? 'Edit Ticket' : 'Create New Ticket'}</h2>
              </div>
              <TicketForm
                ticket={editingTicket}
                onSubmit={handleFormSubmit}
                onCancel={handleCancelForm}
              />
            </section>
          )}

          {/* Filter Section */}
          <section className="filter-section">
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => setFilterStatus('all')}
              >
                All ({tickets.length})
              </button>
              <button
                className={`filter-btn ${filterStatus === 'open' ? 'active' : ''}`}
                onClick={() => setFilterStatus('open')}
              >
                Open ({tickets.filter(t => t.status === 'open').length})
              </button>
              <button
                className={`filter-btn ${filterStatus === 'in_progress' ? 'active' : ''}`}
                onClick={() => setFilterStatus('in_progress')}
              >
                In Progress ({tickets.filter(t => t.status === 'in_progress').length})
              </button>
              <button
                className={`filter-btn ${filterStatus === 'closed' ? 'active' : ''}`}
                onClick={() => setFilterStatus('closed')}
              >
                Closed ({tickets.filter(t => t.status === 'closed').length})
              </button>
            </div>
          </section>

          {/* Tickets List */}
          <section className="tickets-section">
            <TicketList
              tickets={tickets}
              onEdit={handleEditClick}
              onDelete={handleDeleteTicket}
              filterStatus={filterStatus}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TicketManagement;