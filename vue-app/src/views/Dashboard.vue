<template>
  <div class="dashboard-page">
    <DashboardNav />
    
    <main class="dashboard-main">
      <div class="container">
        <!-- Welcome Section -->
        <section class="dashboard-header">
          <div>
            <h1 class="dashboard-title">Welcome back{{ user ? `, ${user.email}` : '' }}! 👋</h1>
            <p class="dashboard-subtitle">Here's what's happening with your tickets today</p>
          </div>
          <router-link to="/tickets" class="btn btn-primary">
            Manage Tickets
          </router-link>
        </section>

        <!-- Stats Grid -->
        <section class="stats-grid">
          <StatCard
            icon="📊"
            title="Total Tickets"
            :value="stats.total"
            color="primary"
          />
          <StatCard
            icon="🟢"
            title="Open Tickets"
            :value="stats.open"
            color="success"
          />
          <StatCard
            icon="🟡"
            title="In Progress"
            :value="stats.inProgress"
            color="warning"
          />
          <StatCard
            icon="⚪"
            title="Closed Tickets"
            :value="stats.closed"
            color="secondary"
          />
        </section>

        <!-- Quick Actions -->
        <section class="quick-actions">
          <h2 class="section-title">Quick Actions</h2>
          <div class="action-cards">
            <router-link to="/tickets" class="action-card">
              <div class="action-icon">➕</div>
              <h3>Create New Ticket</h3>
              <p>Start tracking a new issue or task</p>
            </router-link>
            <router-link to="/tickets" class="action-card">
              <div class="action-icon">📋</div>
              <h3>View All Tickets</h3>
              <p>See and manage all your tickets</p>
            </router-link>
            <div class="action-card action-card-disabled">
              <div class="action-icon">📈</div>
              <h3>Reports (Coming Soon)</h3>
              <p>View detailed analytics and insights</p>
            </div>
          </div>
        </section>

        <!-- Recent Activity -->
        <section class="recent-activity">
          <h2 class="section-title">Getting Started</h2>
          <div class="activity-box">
            <div class="activity-item">
              <div class="activity-icon">✅</div>
              <div class="activity-content">
                <h4>You're all set!</h4>
                <p>Start by creating your first ticket or exploring the ticket management page.</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">💡</div>
              <div class="activity-content">
                <h4>Pro Tip</h4>
                <p>Use status tags to organize your tickets: Open, In Progress, or Closed.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import DashboardNav from '../components/dashboard/DashboardNav.vue'
import StatCard from '../components/dashboard/StatCard.vue'
import AppFooter from '../components/common/AppFooter.vue'
import { getSession } from '../utils/auth'

export default {
  name: 'Dashboard',
  components: {
    DashboardNav,
    StatCard,
    AppFooter
  },
  setup() {
    const stats = ref({
      total: 0,
      open: 0,
      inProgress: 0,
      closed: 0
    })
    const user = ref(null)

    onMounted(() => {
      // Get user session
      const session = getSession()
      if (session) {
        user.value = session.user
      }

      // Load tickets from localStorage
      const tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
      
      const total = tickets.length
      const open = tickets.filter(t => t.status === 'open').length
      const inProgress = tickets.filter(t => t.status === 'in_progress').length
      const closed = tickets.filter(t => t.status === 'closed').length

      stats.value = { total, open, inProgress, closed }
    })

    return {
      stats,
      user
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F9FAFB;
}

.dashboard-main {
  flex: 1;
  padding: 40px 0;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.dashboard-title {
  font-size: 32px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 8px;
}

.dashboard-subtitle {
  font-size: 16px;
  color: #6B7280;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 24px;
}

.quick-actions {
  margin-bottom: 48px;
}

.action-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.action-card {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.action-card-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.action-card-disabled:hover {
  transform: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.action-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.action-card h3 {
  font-size: 20px;
  color: #1F2937;
  margin-bottom: 8px;
}

.action-card p {
  color: #6B7280;
  font-size: 14px;
  line-height: 1.5;
}

.recent-activity {
  margin-bottom: 48px;
}

.activity-box {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.activity-item {
  display: flex;
  gap: 16px;
  padding: 20px 0;
}

.activity-item:not(:last-child) {
  border-bottom: 1px solid #E5E7EB;
}

.activity-icon {
  font-size: 32px;
  line-height: 1;
}

.activity-content h4 {
  font-size: 18px;
  color: #1F2937;
  margin-bottom: 4px;
}

.activity-content p {
  color: #6B7280;
  font-size: 14px;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-main {
    padding: 24px 0;
  }

  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .dashboard-title {
    font-size: 24px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .action-cards {
    grid-template-columns: 1fr;
  }

  .activity-box {
    padding: 24px;
  }
}
</style>