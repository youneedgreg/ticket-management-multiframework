<template>
  <div class="ticket-management-page">
    <DashboardNav />
    
    <main class="ticket-main">
      <div class="container">
        <!-- Header -->
        <section class="ticket-header">
          <div>
            <h1 class="page-title">Ticket Management</h1>
            <p class="page-subtitle">Create, manage, and track all your tickets</p>
          </div>
          <button 
            v-if="!showForm"
            @click="showForm = true" 
            class="btn btn-primary"
          >
            + Create Ticket
          </button>
        </section>

        <!-- Form Section -->
        <section v-if="showForm" class="form-section">
          <div class="form-header">
            <h2>{{ editingTicket ? 'Edit Ticket' : 'Create New Ticket' }}</h2>
          </div>
          <TicketForm
            :ticket="editingTicket"
            @submit="handleFormSubmit"
            @cancel="handleCancelForm"
          />
        </section>

        <!-- Filter Section -->
        <section class="filter-section">
          <div class="filter-buttons">
            <button
              :class="['filter-btn', { active: filterStatus === 'all' }]"
              @click="filterStatus = 'all'"
            >
              All ({{ tickets.length }})
            </button>
            <button
              :class="['filter-btn', { active: filterStatus === 'open' }]"
              @click="filterStatus = 'open'"
            >
              Open ({{ tickets.filter(t => t.status === 'open').length }})
            </button>
            <button
              :class="['filter-btn', { active: filterStatus === 'in_progress' }]"
              @click="filterStatus = 'in_progress'"
            >
              In Progress ({{ tickets.filter(t => t.status === 'in_progress').length }})
            </button>
            <button
              :class="['filter-btn', { active: filterStatus === 'closed' }]"
              @click="filterStatus = 'closed'"
            >
              Closed ({{ tickets.filter(t => t.status === 'closed').length }})
            </button>
          </div>
        </section>

        <!-- Tickets List -->
        <section class="tickets-section">
          <TicketList
            :tickets="tickets"
            :filter-status="filterStatus"
            @edit="handleEditClick"
            @delete="handleDeleteTicket"
          />
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useToast } from 'vue-toastification'
import DashboardNav from '../components/dashboard/DashboardNav.vue'
import TicketForm from '../components/tickets/TicketForm.vue'
import TicketList from '../components/tickets/TicketList.vue'
import AppFooter from '../components/common/AppFooter.vue'

export default {
  name: 'TicketManagement',
  components: {
    DashboardNav,
    TicketForm,
    TicketList,
    AppFooter
  },
  setup() {
    const toast = useToast()
    const tickets = ref([])
    const showForm = ref(false)
    const editingTicket = ref(null)
    const filterStatus = ref('all')

    // Load tickets from localStorage on mount
    onMounted(() => {
      const storedTickets = localStorage.getItem('tickets')
      if (storedTickets) {
        tickets.value = JSON.parse(storedTickets)
      }
    })

    // Save tickets to localStorage whenever they change
    watch(tickets, (newTickets) => {
      localStorage.setItem('tickets', JSON.stringify(newTickets))
    }, { deep: true })

    const handleCreateTicket = (ticketData) => {
      const newTicket = {
        id: Date.now().toString(),
        ...ticketData,
        createdAt: new Date().toISOString()
      }
      
      tickets.value = [newTicket, ...tickets.value]
      showForm.value = false
      toast.success('Ticket created successfully!')
    }

    const handleUpdateTicket = (ticketData) => {
      tickets.value = tickets.value.map(ticket => 
        ticket.id === editingTicket.value.id 
          ? { ...ticket, ...ticketData, updatedAt: new Date().toISOString() }
          : ticket
      )
      editingTicket.value = null
      showForm.value = false
      toast.success('Ticket updated successfully!')
    }

    const handleDeleteTicket = (ticketId) => {
      if (window.confirm('Are you sure you want to delete this ticket?')) {
        tickets.value = tickets.value.filter(ticket => ticket.id !== ticketId)
        toast.success('Ticket deleted successfully!')
      }
    }

    const handleEditClick = (ticket) => {
      editingTicket.value = ticket
      showForm.value = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleCancelForm = () => {
      showForm.value = false
      editingTicket.value = null
    }

    const handleFormSubmit = (ticketData) => {
      if (editingTicket.value) {
        handleUpdateTicket(ticketData)
      } else {
        handleCreateTicket(ticketData)
      }
    }

    return {
      tickets,
      showForm,
      editingTicket,
      filterStatus,
      handleFormSubmit,
      handleEditClick,
      handleDeleteTicket,
      handleCancelForm
    }
  }
}
</script>

<style scoped>
.ticket-management-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F9FAFB;
}

.ticket-main {
  flex: 1;
  padding: 40px 0;
}

.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 20px;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 8px;
}

.page-subtitle {
  font-size: 16px;
  color: #6B7280;
}

.form-section {
  margin-bottom: 40px;
}

.form-header {
  margin-bottom: 24px;
}

.form-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1F2937;
}

.filter-section {
  margin-bottom: 32px;
}

.filter-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #E5E7EB;
  background: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #6B7280;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: #4F46E5;
  color: #4F46E5;
}

.filter-btn.active {
  background-color: #4F46E5;
  border-color: #4F46E5;
  color: white;
}

.tickets-section {
  margin-bottom: 48px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .ticket-main {
    padding: 24px 0;
  }

  .ticket-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .ticket-header button {
    width: 100%;
  }

  .page-title {
    font-size: 24px;
  }

  .filter-buttons {
    padding: 12px;
  }

  .filter-btn {
    flex: 1;
    min-width: calc(50% - 6px);
    font-size: 13px;
    padding: 8px 12px;
  }
}
</style>