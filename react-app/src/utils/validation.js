export const validateTicket = (ticket) => {
    const errors = {};
  
    if (!ticket.title || ticket.title.trim() === '') {
      errors.title = 'Title is required';
    }
  
    if (!ticket.status) {
      errors.status = 'Status is required';
    } else if (!['open', 'in_progress', 'closed'].includes(ticket.status)) {
      errors.status = 'Status must be open, in_progress, or closed';
    }
  
    if (ticket.description && ticket.description.length > 500) {
      errors.description = 'Description must be less than 500 characters';
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
  
  export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validatePassword = (password) => {
    return password.length >= 6;
  };