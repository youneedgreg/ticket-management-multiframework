import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../utils/auth';
import toast from 'react-hot-toast';
import './DashboardNav.css';

const DashboardNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <nav className="dashboard-nav">
      <div className="container">
        <div className="dashboard-nav-content">
          <Link to="/dashboard" className="nav-logo">
            🎫 TicketFlow
          </Link>
          
          <div className="nav-menu">
            <Link to="/dashboard" className="nav-item">
              Dashboard
            </Link>
            <Link to="/tickets" className="nav-item">
              Tickets
            </Link>
            <button onClick={handleLogout} className="btn btn-danger btn-logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;