<template>
  <div class="container">
    <header>
      <h1>Ticket Management</h1>
      <router-link to="/dashboard" class="btn">Back to Dashboard</router-link>
    </header>

    <div class="card">
      <h2>{{ editingId ? 'Edit Ticket' : 'Create New Ticket' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">Title *</label>
          <input
            type="text"
            id="title"
            v-model="formData.title"
            @input="clearError('title')"
          />
          <div v-if="errors.title" class="error">{{ errors.title }}</div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            v-model="formData.description"
          />
        </div>
        <div class="form-group">
          <label for="status">Status *</label>
          <select
            id="status"
            v-model="formData.status"
            @change="clearError('status')"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          <div v-if="errors.status" class="error">{{ errors.status }}</div>
        </div>
        <button type="submit" class="btn">{{ editingId ? 'Update' : 'Create' }} Ticket</button>
        <button v-if="editingId" type="button" @click="cancelEdit" class="btn">Cancel</button>
      </form>
    </div>

    <div class="card">
      <h2>Existing Tickets</h2>
      <div v-if="tickets.length === 0" class="no-tickets">
        No tickets found.
      </div>
      <div v-else class="ticket-list">
        <div v-for="ticket in tickets" :key="ticket.id" class="ticket-card">
          <h3>{{ ticket.title }}</h3>
          <p>{{ ticket.description }}</p>
          <span :class="`status status-${ticket.status}`">{{ ticket.status.replace('_', ' ') }}</span>
          <div class="ticket-actions">
            <button @click="handleEdit(ticket)" class="btn">Edit</button>
            <button @click="handleDelete(ticket.id)" class="btn">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="toast" class="toast">{{ toast }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'TicketManagement',
  setup() {
    const tickets = ref([])
    const formData = ref({ title: '', description: '', status: 'open' })
    const editingId = ref(null)
    const errors = ref({})
    const toast = ref('')

    const saveTickets = (newTickets) => {
      localStorage.setItem('tickets', JSON.stringify(newTickets))
      tickets.value = newTickets
    }

    const validateForm = () => {
      const newErrors = {}
      if (!formData.value.title.trim()) newErrors.title = 'Title is required'
      if (!['open', 'in_progress', 'closed'].includes(formData.value.status)) newErrors.status = 'Invalid status'
      return newErrors
    }

    const clearError = (field) => {
      if (errors.value[field]) {
        delete errors.value[field]
      }
    }

    const handleSubmit = () => {
      const validationErrors = validateForm()
      if (Object.keys(validationErrors).length > 0) {
        errors.value = validationErrors
        return
      }

      if (editingId.value) {
        const updatedTickets = tickets.value.map(ticket =>
          ticket.id === editingId.value ? { ...ticket, ...formData.value } : ticket
        )
        saveTickets(updatedTickets)
        editingId.value = null
        toast.value = 'Ticket updated successfully!'
      } else {
        const newTicket = { ...formData.value, id: Date.now() }
        saveTickets([...tickets.value, newTicket])
        toast.value = 'Ticket created successfully!'
      }

      formData.value = { title: '', description: '', status: 'open' }
      errors.value = {}
      setTimeout(() => { toast.value = '' }, 3000)
    }

    const handleEdit = (ticket) => {
      formData.value = { ...ticket }
      editingId.value = ticket.id
    }

    const cancelEdit = () => {
      editingId.value = null
      formData.value = { title: '', description: '', status: 'open' }
    }

    const handleDelete = (id) => {
      if (confirm('Are you sure you want to delete this ticket?')) {
        const updatedTickets = tickets.value.filter(ticket => ticket.id !== id)
        saveTickets(updatedTickets)
        toast.value = 'Ticket deleted successfully!'
        setTimeout(() => { toast.value = '' }, 3000)
      }
    }

    onMounted(() => {
      tickets.value = JSON.parse(localStorage.getItem('tickets') || '[]')
    })

    return {
      tickets,
      formData,
      editingId,
      errors,
      toast,
      handleSubmit,
      handleEdit,
      handleDelete,
      cancelEdit,
      clearError
    }
  }
}
</script>

<style scoped>
.ticket-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.ticket-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: #f9f9f9;
}

.ticket-card h3 {
  margin-top: 0;
}

.ticket-actions {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}

.no-tickets {
  text-align: center;
  padding: 20px;
  color: #666;
}
</style>
