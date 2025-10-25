<template>
    <form class="ticket-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">
          Title <span class="required">*</span>
        </label>
        <input
          type="text"
          id="title"
          v-model="formData.title"
          placeholder="Enter ticket title"
          :class="{ error: errors.title }"
          @input="clearError('title')"
        />
        <span v-if="errors.title" class="error-message">{{ errors.title }}</span>
      </div>
  
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="formData.description"
          placeholder="Enter ticket description (optional)"
          rows="4"
          :class="{ error: errors.description }"
          @input="clearError('description')"
        />
        <span v-if="errors.description" class="error-message">{{ errors.description }}</span>
      </div>
  
      <div class="form-row">
        <div class="form-group">
          <label for="status">
            Status <span class="required">*</span>
          </label>
          <select
            id="status"
            v-model="formData.status"
            :class="{ error: errors.status }"
            @change="clearError('status')"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          <span v-if="errors.status" class="error-message">{{ errors.status }}</span>
        </div>
  
        <div class="form-group">
          <label for="priority">Priority</label>
          <select
            id="priority"
            v-model="formData.priority"
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
  
      <div class="form-actions">
        <button 
          type="button" 
          @click="$emit('cancel')" 
          class="btn btn-secondary"
          :disabled="isSubmitting"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          class="btn btn-primary"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Saving...' : ticket ? 'Update Ticket' : 'Create Ticket' }}
        </button>
      </div>
    </form>
  </template>
  
  <script>
  import { ref, watch } from 'vue'
  import { validateTicket } from '../../utils/validation'
  
  export default {
    name: 'TicketForm',
    props: {
      ticket: {
        type: Object,
        default: null
      }
    },
    emits: ['submit', 'cancel'],
    setup(props, { emit }) {
      const formData = ref({
        title: '',
        description: '',
        status: 'open',
        priority: ''
      })
  
      const errors = ref({})
      const isSubmitting = ref(false)
  
      // Watch for ticket prop changes (edit mode)
      watch(() => props.ticket, (newTicket) => {
        if (newTicket) {
          formData.value = {
            title: newTicket.title,
            description: newTicket.description || '',
            status: newTicket.status,
            priority: newTicket.priority || ''
          }
        }
      }, { immediate: true })
  
      const clearError = (field) => {
        if (errors.value[field]) {
          delete errors.value[field]
        }
      }
  
      const handleSubmit = () => {
        const validation = validateTicket(formData.value)
        
        if (!validation.isValid) {
          errors.value = validation.errors
          return
        }
  
        isSubmitting.value = true
        
        // Simulate async operation
        setTimeout(() => {
          emit('submit', { ...formData.value })
          isSubmitting.value = false
        }, 500)
      }
  
      return {
        formData,
        errors,
        isSubmitting,
        clearError,
        handleSubmit
      }
    }
  }
  </script>
  
  <style scoped>
  .ticket-form {
    background: white;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 24px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
  }
  
  .required {
    color: #EF4444;
  }
  
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #E5E7EB;
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
    transition: all 0.3s ease;
  }
  
  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: #4F46E5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
  
  .form-group input.error,
  .form-group textarea.error,
  .form-group select.error {
    border-color: #EF4444;
  }
  
  .form-group input.error:focus,
  .form-group textarea.error:focus,
  .form-group select.error:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  .error-message {
    display: block;
    margin-top: 6px;
    color: #EF4444;
    font-size: 14px;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .form-actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid #E5E7EB;
  }
  
  @media (max-width: 768px) {
    .ticket-form {
      padding: 24px;
    }
  
    .form-row {
      grid-template-columns: 1fr;
    }
  
    .form-actions {
      flex-direction: column-reverse;
    }
  
    .form-actions button {
      width: 100%;
    }
  }
  </style>