<template>
    <button
      :type="type"
      :class="['btn', `btn-${variant}`, customClass]"
      :disabled="disabled"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'AppButton',
    props: {
      variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'danger'].includes(value)
      },
      type: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      customClass: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleClick(event) {
        if (!this.disabled) {
          this.$emit('click', event)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .btn {
    display: inline-block;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    text-align: center;
  }
  
  .btn-primary {
    background-color: #4F46E5;
    color: white;
  }
  
  .btn-primary:hover:not(:disabled) {
    background-color: #4338CA;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  }
  
  .btn-secondary {
    background-color: transparent;
    color: #4F46E5;
    border: 2px solid #4F46E5;
  }
  
  .btn-secondary:hover:not(:disabled) {
    background-color: #4F46E5;
    color: white;
  }
  
  .btn-danger {
    background-color: #EF4444;
    color: white;
  }
  
  .btn-danger:hover:not(:disabled) {
    background-color: #DC2626;
  }
  
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  </style>