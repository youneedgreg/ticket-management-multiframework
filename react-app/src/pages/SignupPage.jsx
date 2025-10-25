import { Link, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import SignupForm from '../components/auth/SignupForm';
import './AuthPages.css';

const SignupPage = () => {
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
            <h1>Create Account</h1>
            <p>Start managing your tickets today</p>
          </div>

          <SignupForm />

          <div className="auth-footer">
            <p>
              Already have an account?{' '}
              <Link to="/auth/login" className="auth-link">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="auth-info">
          <h2>Join TicketFlow</h2>
          <p>Get started with the best ticket management system for your team.</p>
          <div className="auth-features">
            <div className="auth-feature">
              ✓ Free to get started
            </div>
            <div className="auth-feature">
              ✓ No credit card required
            </div>
            <div className="auth-feature">
              ✓ Full feature access
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;