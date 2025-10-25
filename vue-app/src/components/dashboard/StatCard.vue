<template>
    <div :class="['stat-card', `stat-card-${color}`]">
      <div class="stat-icon">{{ icon }}</div>
      <div class="stat-content">
        <h3 class="stat-title">{{ title }}</h3>
        <p class="stat-value">{{ value }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StatCard',
    props: {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      value: {
        type: Number,
        required: true
      },
      color: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'success', 'warning', 'secondary'].includes(value)
      }
    }
  }
  </script>
  
  <style scoped>
  .stat-card {
    background: white;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 4px solid;
  }
  
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
  
  .stat-card-primary {
    border-left-color: #4F46E5;
  }
  
  .stat-card-success {
    border-left-color: #10B981;
  }
  
  .stat-card-warning {
    border-left-color: #F59E0B;
  }
  
  .stat-card-secondary {
    border-left-color: #6B7280;
  }
  
  .stat-icon {
    font-size: 48px;
    line-height: 1;
  }
  
  .stat-content {
    flex: 1;
  }
  
  .stat-title {
    font-size: 14px;
    color: #6B7280;
    margin-bottom: 8px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .stat-value {
    font-size: 32px;
    font-weight: 700;
    color: #1F2937;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .stat-card {
      padding: 20px;
    }
  
    .stat-icon {
      font-size: 36px;
    }
  
    .stat-value {
      font-size: 28px;
    }
  }
  </style>