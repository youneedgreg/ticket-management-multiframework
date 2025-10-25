import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardNav from '../components/dashboard/DashboardNav';
import StatCard from '../components/dashboard/StatCard';
import Footer from '../components/common/Footer';
import { getSession } from '../utils/auth';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user session
    const session = getSession();
    if (session) {
      setUser(session.user);
    }

    // Load tickets from localStorage
    const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
    
    const total = tickets.length;
    const open = tickets.filter(t => t.status === 'open').length;
    const inProgress = tickets.filter(t => t.status === 'in_progress').length;
    const closed = tickets.filter(t => t.status === 'closed').length;

    setStats({ total, open, inProgress, closed });
  }, []);

  return (
    <div className="dashboard-page">
      <DashboardNav />
      
      <main className="dashboard-main">
        <div className="container">
          {/* Welcome Section */}
          <section className="dashboard-header">
            <div>
              <h1 className="dashboard-title">Welcome back{user ? `, ${user.email}` : ''}! 👋</h1>
              <p className="dashboard-subtitle">Here's what's happening with your tickets today</p>
            </div>
            <Link to="/tickets" className="btn btn-primary">
              Manage Tickets
            </Link>
          </section>

          {/* Stats Grid */}
          <section className="stats-grid">
            <StatCard
              icon="📊"
              title="Total Tickets"
              value={stats.total}
              color="primary"
            />
            <StatCard
              icon="🟢"
              title="Open Tickets"
              value={stats.open}
              color="success"
            />
            <StatCard
              icon="🟡"
              title="In Progress"
              value={stats.inProgress}
              color="warning"
            />
            <StatCard
              icon="⚪"
              title="Closed Tickets"
              value={stats.closed}
              color="secondary"
            />
          </section>

          {/* Quick Actions */}
          <section className="quick-actions">
            <h2 className="section-title">Quick Actions</h2>
            <div className="action-cards">
              <Link to="/tickets" className="action-card">
                <div className="action-icon">➕</div>
                <h3>Create New Ticket</h3>
                <p>Start tracking a new issue or task</p>
              </Link>
              <Link to="/tickets" className="action-card">
                <div className="action-icon">📋</div>
                <h3>View All Tickets</h3>
                <p>See and manage all your tickets</p>
              </Link>
              <div className="action-card action-card-disabled">
                <div className="action-icon">📈</div>
                <h3>Reports (Coming Soon)</h3>
                <p>View detailed analytics and insights</p>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="recent-activity">
            <h2 className="section-title">Getting Started</h2>
            <div className="activity-box">
              <div className="activity-item">
                <div className="activity-icon">✅</div>
                <div className="activity-content">
                  <h4>You're all set!</h4>
                  <p>Start by creating your first ticket or exploring the ticket management page.</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💡</div>
                <div className="activity-content">
                  <h4>Pro Tip</h4>
                  <p>Use status tags to organize your tickets: Open, In Progress, or Closed.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;