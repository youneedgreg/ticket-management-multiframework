import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ showAuthButtons = true }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            🎫 TicketFlow
          </Link>
          {showAuthButtons && (
            <div className="nav-buttons">
              <Link to="/auth/login" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;