import TicketCard from './TicketCard';
import './TicketList.css';

const TicketList = ({ tickets, onEdit, onDelete, filterStatus }) => {
  const filteredTickets = filterStatus === 'all' 
    ? tickets 
    : tickets.filter(ticket => ticket.status === filterStatus);

  if (filteredTickets.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📭</div>
        <h3>No tickets found</h3>
        <p>
          {filterStatus === 'all' 
            ? "Create your first ticket to get started!" 
            : `No ${filterStatus.replace('_', ' ')} tickets found.`}
        </p>
      </div>
    );
  }

  return (
    <div className="ticket-list">
      {filteredTickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TicketList;