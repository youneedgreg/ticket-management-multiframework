<template>
  <div class="landing-page">
    <AppNavbar />
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="decorative-circle circle-1"></div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Manage Your Tickets <br />
            <span class="gradient-text">Effortlessly</span>
          </h1>
          <p class="hero-description">
            TicketFlow helps you organize, track, and resolve tickets with ease.
            Stay on top of your workflow and boost productivity.
          </p>
          <div class="hero-buttons">
            <router-link to="/auth/signup" class="btn btn-primary btn-large">
              Get Started Free
            </router-link>
            <router-link to="/auth/login" class="btn btn-secondary btn-large">
              Login
            </router-link>
          </div>
        </div>
      </div>
      <div class="wave-container">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="#ffffff" 
            fill-opacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="decorative-circle circle-2"></div>
        <h2 class="section-title">Powerful Features</h2>
        <div class="features-grid">
          <div class="feature-box">
            <div class="feature-icon">📋</div>
            <h3>Easy Management</h3>
            <p>Create, update, and track tickets in a simple, intuitive interface</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon">🔒</div>
            <h3>Secure Access</h3>
            <p>Your data is protected with secure authentication and authorization</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon">📊</div>
            <h3>Real-time Stats</h3>
            <p>Get insights with live dashboard statistics and analytics</p>
          </div>
          <div class="feature-box">
            <div class="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Experience blazing fast performance with optimized workflows</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of users managing their tickets efficiently</p>
          <router-link to="/auth/signup" class="btn btn-primary btn-large">
            Start Free Today
          </router-link>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '../components/common/AppNavbar.vue'
import AppFooter from '../components/common/AppFooter.vue'

export default {
  name: 'LandingPage',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0 200px;
  position: relative;
  overflow: hidden;
}

.decorative-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: 10%;
  animation: float 6s ease-in-out infinite;
}

.circle-2 {
  width: 200px;
  height: 200px;
  top: 50%;
  right: -100px;
  background: rgba(79, 70, 229, 0.1);
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(to right, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.95;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-large {
  padding: 16px 32px;
  font-size: 18px;
}

.wave-container {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  z-index: 1;
}

.wave-container svg {
  display: block;
  width: 100%;
  height: auto;
}

/* Features Section */
.features {
  padding: 80px 0;
  background-color: white;
  position: relative;
}

.section-title {
  text-align: center;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 60px;
  color: #1F2937;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.feature-box {
  background: white;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.feature-box:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-box h3 {
  font-size: 24px;
  margin-bottom: 12px;
  color: #1F2937;
}

.feature-box p {
  color: #6B7280;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background-color: #F9FAFB;
}

.cta-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 60px 40px;
  border-radius: 24px;
  text-align: center;
  color: white;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.cta-box h2 {
  font-size: 36px;
  margin-bottom: 16px;
}

.cta-box p {
  font-size: 18px;
  margin-bottom: 32px;
  opacity: 0.95;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 60px 0 150px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-large {
    width: 100%;
  }

  .circle-1 {
    width: 200px;
    height: 200px;
    right: -50px;
  }

  .section-title {
    font-size: 32px;
  }

  .features {
    padding: 60px 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta-section {
    padding: 60px 0;
  }

  .cta-box {
    padding: 40px 20px;
  }

  .cta-box h2 {
    font-size: 28px;
  }
}
</style>