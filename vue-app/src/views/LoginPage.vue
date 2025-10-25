<template>
  <div class="container">
    <div class="card">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="formData.username"
            @input="clearError('username')"
          />
          <div v-if="errors.username" class="error">{{ errors.username }}</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            @input="clearError('password')"
          />
          <div v-if="errors.password" class="error">{{ errors.password }}</div>
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
      <div v-if="toast" class="toast">{{ toast }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const formData = ref({ username: '', password: '' })
    const errors = ref({})
    const toast = ref('')

    const validateForm = () => {
      const newErrors = {}
      if (!formData.value.username) newErrors.username = 'Username is required'
      if (!formData.value.password) newErrors.password = 'Password is required'
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

      // Simulate authentication
      if (formData.value.username === 'admin' && formData.value.password === 'password') {
        localStorage.setItem('ticketapp_session', 'authenticated')
        router.push('/dashboard')
      } else {
        toast.value = 'Invalid credentials'
        setTimeout(() => { toast.value = '' }, 3000)
      }
    }

    return {
      formData,
      errors,
      toast,
      handleSubmit,
      clearError
    }
  }
}
</script>

<style scoped>
</style>
