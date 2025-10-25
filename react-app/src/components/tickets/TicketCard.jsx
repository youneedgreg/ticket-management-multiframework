import './TicketCard.css';

const TicketCard = ({ ticket, onEdit, onDelete }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'open':
        return 'status-open';
      case 'in_progress':
        return 'status-in_progress';
      case 'closed':
        return 'status-closed';
      default:
        return '';
    }
  };

  const formatStatus = (status) => {
    return status.replace('_', ' ');
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h3 className="ticket-title">{ticket.title}</h3>
        <span className={`status-badge ${getStatusClass(ticket.status)}`}>
          {formatStatus(ticket.status)}
        </span>
      </div>
      
      {ticket.description && (
        <p className="ticket-description">{ticket.description}</p>
      )}
      
      <div className="ticket-meta">
        {ticket.priority && (
          <span className="ticket-priority">
            Priority: <strong>{ticket.priority}</strong>
          </span>
        )}
        <span className="ticket-date">
          Created: {new Date(ticket.createdAt).toLocaleDateString()}
        </span>
      </div>
      
      <div className="ticket-actions">
        <button 
          onClick={() => onEdit(ticket)} 
          className="btn btn-secondary btn-small"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(ticket.id)} 
          className="btn btn-danger btn-small"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TicketCard;