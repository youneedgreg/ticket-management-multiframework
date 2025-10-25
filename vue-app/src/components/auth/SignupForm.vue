<template>
    <form class="auth-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          placeholder="Enter your email"
          :class="{ error: errors.email }"
          @input="clearError('email')"
        />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>
  
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          placeholder="Create a password (min. 6 characters)"
          :class="{ error: errors.password }"
          @input="clearError('password')"
        />
        <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
      </div>
  
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="formData.confirmPassword"
          placeholder="Confirm your password"
          :class="{ error: errors.confirmPassword }"
          @input="clearError('confirmPassword')"
        />
        <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
      </div>
  
      <button 
        type="submit" 
        class="btn btn-primary btn-full"
        :disabled="isLoading"
      >
        {{ isLoading ? 'Creating Account...' : 'Sign Up' }}
      </button>
    </form>
  </template>
  
  <script>
  import { signup } from '../../utils/auth'
  import { validateEmail, validatePassword } from '../../utils/validation'
  import { useToast } from 'vue-toastification'
  
  export default {
    name: 'SignupForm',
    data() {
      return {
        formData: {
          email: '',
          password: '',
          confirmPassword: ''
        },
        errors: {},
        isLoading: false
      }
    },
    setup() {
      const toast = useToast()
      return { toast }
    },
    methods: {
      clearError(field) {
        if (this.errors[field]) {
          delete this.errors[field]
        }
      },
      validate() {
        const newErrors = {}
  
        if (!this.formData.email) {
          newErrors.email = 'Email is required'
        } else if (!validateEmail(this.formData.email)) {
          newErrors.email = 'Please enter a valid email'
        }
  
        if (!this.formData.password) {
          newErrors.password = 'Password is required'
        } else if (!validatePassword(this.formData.password)) {
          newErrors.password = 'Password must be at least 6 characters'
        }
  
        if (!this.formData.confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password'
        } else if (this.formData.password !== this.formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match'
        }
  
        return newErrors
      },
      handleSubmit() {
        const newErrors = this.validate()
        
        if (Object.keys(newErrors).length > 0) {
          this.errors = newErrors
          return
        }
  
        this.isLoading = true
  
        // Simulate API call
        setTimeout(() => {
          const result = signup(this.formData.email, this.formData.password)
          
          if (result.success) {
            this.toast.success('Account created successfully!')
            this.$router.push('/dashboard')
          } else {
            this.toast.error(result.error || 'Signup failed. Please try again.')
          }
          
          this.isLoading = false
        }, 1000)
      }
    }
  }
  </script>
  
  <style scoped>
  .auth-form {
    width: 100%;
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
  
  .form-group input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #E5E7EB;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
    font-family: inherit;
  }
  
  .form-group input:focus {
    outline: none;
    border-color: #4F46E5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }
  
  .form-group input.error {
    border-color: #EF4444;
  }
  
  .form-group input.error:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
  
  .error-message {
    display: block;
    margin-top: 6px;
    color: #EF4444;
    font-size: 14px;
  }
  
  .btn-full {
    width: 100%;
    margin-top: 8px;
  }
  </style>