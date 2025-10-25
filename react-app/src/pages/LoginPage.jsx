import { Link, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import LoginForm from '../components/auth/LoginForm';
import './AuthPages.css';

const LoginPage = () => {
  // Redirect if already logged in
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <Link to="/" className="auth-logo">
              🎫 TicketFlow
            </Link>
            <h1>Welcome Back</h1>
            <p>Login to manage your tickets</p>
          </div>

          <LoginForm />

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/auth/signup" className="auth-link">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        <div className="auth-info">
          <h2>Manage Tickets Efficiently</h2>
          <p>Track, organize, and resolve tickets with ease using TicketFlow.</p>
          <div className="auth-features">
            <div className="auth-feature">
              ✓ Easy ticket management
            </div>
            <div className="auth-feature">
              ✓ Real-time updates
            </div>
            <div className="auth-feature">
              ✓ Secure and reliable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;