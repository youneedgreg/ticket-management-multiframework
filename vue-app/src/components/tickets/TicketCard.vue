<template>
    <div class="ticket-card">
      <div class="ticket-header">
        <h3 class="ticket-title">{{ ticket.title }}</h3>
        <span :class="['status-badge', getStatusClass(ticket.status)]">
          {{ formatStatus(ticket.status) }}
        </span>
      </div>
      
      <p v-if="ticket.description" class="ticket-description">{{ ticket.description }}</p>
      
      <div class="ticket-meta">
        <span v-if="ticket.priority" class="ticket-priority">
          Priority: <strong>{{ ticket.priority }}</strong>
        </span>
        <span class="ticket-date">
          Created: {{ formatDate(ticket.createdAt) }}
        </span>
      </div>
      
      <div class="ticket-actions">
        <button 
          @click="$emit('edit', ticket)" 
          class="btn btn-secondary btn-small"
        >
          Edit
        </button>
        <button 
          @click="$emit('delete', ticket.id)" 
          class="btn btn-danger btn-small"
        >
          Delete
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TicketCard',
    props: {
      ticket: {
        type: Object,
        required: true
      }
    },
    emits: ['edit', 'delete'],
    methods: {
      getStatusClass(status) {
        return `status-${status}`
      },
      formatStatus(status) {
        return status.replace('_', ' ')
      },
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString()
      }
    }
  }
  </script>
  
  <style scoped>
  .ticket-card {
    background: white;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .ticket-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  
  .ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 12px;
    gap: 12px;
  }
  
  .ticket-title {
    font-size: 18px;
    font-weight: 600;
    color: #1F2937;
    margin: 0;
    flex: 1;
  }
  
  .status-badge {
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
    white-space: nowrap;
  }
  
  .status-open {
    background-color: #10B981;
    color: white;
  }
  
  .status-in_progress {
    background-color: #F59E0B;
    color: white;
  }
  
  .status-closed {
    background-color: #6B7280;
    color: white;
  }
  
  .ticket-description {
    color: #6B7280;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
  }
  
  .ticket-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px 0;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    margin-bottom: 16px;
    font-size: 13px;
    color: #6B7280;
  }
  
  .ticket-priority {
    text-transform: capitalize;
  }
  
  .ticket-date {
    font-size: 12px;
  }
  
  .ticket-actions {
    display: flex;
    gap: 12px;
  }
  
  .btn-small {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    .ticket-card {
      padding: 20px;
    }
  
    .ticket-actions {
      flex-direction: column;
    }
  
    .btn-small {
      width: 100%;
    }
  }
  </style>