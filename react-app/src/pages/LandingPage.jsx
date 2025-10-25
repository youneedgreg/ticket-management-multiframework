import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="decorative-circle circle-1"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Manage Your Tickets <br />
              <span className="gradient-text">Effortlessly</span>
            </h1>
            <p className="hero-description">
              TicketFlow helps you organize, track, and resolve tickets with ease.
              Stay on top of your workflow and boost productivity.
            </p>
            <div className="hero-buttons">
              <Link to="/auth/signup" className="btn btn-primary btn-large">
                Get Started Free
              </Link>
              <Link to="/auth/login" className="btn btn-secondary btn-large">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="wave-container">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="decorative-circle circle-2"></div>
          <h2 className="section-title">Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">📋</div>
              <h3>Easy Management</h3>
              <p>Create, update, and track tickets in a simple, intuitive interface</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🔒</div>
              <h3>Secure Access</h3>
              <p>Your data is protected with secure authentication and authorization</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">📊</div>
              <h3>Real-time Stats</h3>
              <p>Get insights with live dashboard statistics and analytics</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Experience blazing fast performance with optimized workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of users managing their tickets efficiently</p>
            <Link to="/auth/signup" className="btn btn-primary btn-large">
              Start Free Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;