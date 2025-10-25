<template>
  <div class="container">
    <header>
      <h1>Dashboard</h1>
      <button @click="handleLogout" class="btn">Logout</button>
    </header>
    <div class="stats">
      <div class="card">
        <h3>Total Tickets</h3>
        <p>{{ stats.total }}</p>
      </div>
      <div class="card">
        <h3>Open Tickets</h3>
        <p>{{ stats.open }}</p>
      </div>
      <div class="card">
        <h3>Resolved Tickets</h3>
        <p>{{ stats.resolved }}</p>
      </div>
    </div>
    <nav>
      <router-link to="/tickets" class="btn">Manage Tickets</router-link>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Dashboard',
  setup() {
    const router = useRouter()
    const stats = ref({ total: 0, open: 0, resolved: 0 })

    const updateStats = () => {
      const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
      stats.value.total = tickets.length
      stats.value.open = tickets.filter(t => t.status === 'open').length
      stats.value.resolved = tickets.filter(t => t.status === 'closed').length
    }

    const handleLogout = () => {
      localStorage.removeItem('ticketapp_session')
      router.push('/')
    }

    onMounted(() => {
      updateStats()
    })

    return {
      stats,
      handleLogout
    }
  }
}
</script>

<style scoped>
.stats {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}

.stats .card {
  flex: 1;
}

@media (max-width: 768px) {
  .stats {
    flex-direction: column;
  }
}
</style>
