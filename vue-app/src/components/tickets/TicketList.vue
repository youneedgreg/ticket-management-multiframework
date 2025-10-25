<template>
    <div v-if="filteredTickets.length === 0" class="empty-state">
      <div class="empty-icon">📭</div>
      <h3>No tickets found</h3>
      <p>
        {{ filterStatus === 'all' 
          ? "Create your first ticket to get started!" 
          : `No ${formatStatus(filterStatus)} tickets found.` }}
      </p>
    </div>
  
    <div v-else class="ticket-list">
      <TicketCard
        v-for="ticket in filteredTickets"
        :key="ticket.id"
        :ticket="ticket"
        @edit="$emit('edit', ticket)"
        @delete="$emit('delete', $event)"
      />
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import TicketCard from './TicketCard.vue'
  
  export default {
    name: 'TicketList',
    components: {
      TicketCard
    },
    props: {
      tickets: {
        type: Array,
        required: true
      },
      filterStatus: {
        type: String,
        default: 'all'
      }
    },
    emits: ['edit', 'delete'],
    setup(props) {
      const filteredTickets = computed(() => {
        return props.filterStatus === 'all' 
          ? props.tickets 
          : props.tickets.filter(ticket => ticket.status === props.filterStatus)
      })
  
      const formatStatus = (status) => {
        return status.replace('_', ' ')
      }
  
      return {
        filteredTickets,
        formatStatus
      }
    }
  }
  </script>
  
  <style scoped>
  .ticket-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }
  
  .empty-state {
    text-align: center;
    padding: 80px 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .empty-icon {
    font-size: 64px;
    margin-bottom: 16px;
  }
  
  .empty-state h3 {
    font-size: 24px;
    color: #1F2937;
    margin-bottom: 8px;
  }
  
  .empty-state p {
    font-size: 16px;
    color: #6B7280;
  }
  
  @media (max-width: 768px) {
    .ticket-list {
      grid-template-columns: 1fr;
    }
  }
  </style>