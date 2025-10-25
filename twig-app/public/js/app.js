// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  
  // Auto-show toast from session flash message
  document.addEventListener('DOMContentLoaded', function() {
    const successMessage = document.querySelector('[data-flash-success]');
    const errorMessage = document.querySelector('[data-flash-error]');
    
    if (successMessage) {
      showToast(successMessage.dataset.flashSuccess, 'success');
    }
    
    if (errorMessage) {
      showToast(errorMessage.dataset.flashError, 'error');
    }
  });
  
  // Confirm delete
  function confirmDelete(ticketId) {
    if (confirm('Are you sure you want to delete this ticket?')) {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = '/tickets/delete';
      
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'id';
      input.value = ticketId;
      
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    }
  }