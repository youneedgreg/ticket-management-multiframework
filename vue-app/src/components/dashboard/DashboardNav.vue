<template>
    <nav class="dashboard-nav">
      <div class="container">
        <div class="dashboard-nav-content">
          <router-link to="/dashboard" class="nav-logo">
            🎫 TicketFlow
          </router-link>
          
          <div class="nav-menu">
            <router-link to="/dashboard" class="nav-item">
              Dashboard
            </router-link>
            <router-link to="/tickets" class="nav-item">
              Tickets
            </router-link>
            <button @click="handleLogout" class="btn btn-danger btn-logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { logout } from '../../utils/auth'
  import { useToast } from 'vue-toastification'
  import { useRouter } from 'vue-router'
  
  export default {
    name: 'DashboardNav',
    setup() {
      const toast = useToast()
      const router = useRouter()
  
      const handleLogout = () => {
        logout()
        toast.success('Logged out successfully')
        router.push('/')
      }
  
      return {
        handleLogout
      }
    }
  }
  </script>
  
  <style scoped>
  .dashboard-nav {
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .dashboard-nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
  
  .nav-logo {
    font-size: 24px;
    font-weight: 700;
    color: #4F46E5;
    text-decoration: none;
    transition: transform 0.3s ease;
  }
  
  .nav-logo:hover {
    transform: scale(1.05);
  }
  
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  
  .nav-item {
    color: #374151;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    transition: color 0.3s ease;
    position: relative;
  }
  
  .nav-item:hover {
    color: #4F46E5;
  }
  
  .nav-item::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #4F46E5;
    transition: width 0.3s ease;
  }
  
  .nav-item:hover::after {
    width: 100%;
  }
  
  .nav-item.router-link-active {
    color: #4F46E5;
  }
  
  .btn-logout {
    padding: 10px 20px;
  }
  
  @media (max-width: 768px) {
    .dashboard-nav-content {
      padding: 16px 0;
    }
  
    .nav-logo {
      font-size: 20px;
    }
  
    .nav-menu {
      gap: 12px;
    }
  
    .nav-item {
      font-size: 14px;
    }
  
    .btn-logout {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    .nav-menu {
      gap: 8px;
    }
  
    .nav-item {
      display: none;
    }
  
    .btn-logout {
      padding: 8px 12px;
      font-size: 13px;
    }
  }
  </style>