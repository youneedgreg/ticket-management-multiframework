<template>
  <div class="auth-page">
    <div class="auth-container">
      <div class="auth-box">
        <div class="auth-header">
          <router-link to="/" class="auth-logo">
            🎫 TicketFlow
          </router-link>
          <h1>Create Account</h1>
          <p>Start managing your tickets today</p>
        </div>

        <SignupForm />

        <div class="auth-footer">
          <p>
            Already have an account?
            <router-link to="/auth/login" class="auth-link">
              Login
            </router-link>
          </p>
        </div>
      </div>

      <div class="auth-info">
        <h2>Join TicketFlow</h2>
        <p>Get started with the best ticket management system for your team.</p>
        <div class="auth-features">
          <div class="auth-feature">
            ✓ Free to get started
          </div>
          <div class="auth-feature">
            ✓ No credit card required
          </div>
          <div class="auth-feature">
            ✓ Full feature access
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/auth/SignupForm.vue'

export default {
  name: 'SignupPage',
  components: {
    SignupForm
  }
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
}

.auth-container {
  max-width: 1000px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.auth-box {
  background: white;
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.auth-header {
  text-align: center;
  margin-bottom: 32px;
}

.auth-logo {
  display: inline-block;
  font-size: 32px;
  font-weight: 700;
  color: #4F46E5;
  text-decoration: none;
  margin-bottom: 24px;
  transition: transform 0.3s ease;
}

.auth-logo:hover {
  transform: scale(1.05);
}

.auth-header h1 {
  font-size: 28px;
  color: #1F2937;
  margin-bottom: 8px;
}

.auth-header p {
  color: #6B7280;
  font-size: 16px;
}

.auth-footer {
  text-align: center;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #E5E7EB;
}

.auth-footer p {
  color: #6B7280;
  font-size: 14px;
}

.auth-link {
  color: #4F46E5;
  text-decoration: none;
  font-weight: 600;
  margin-left: 4px;
}

.auth-link:hover {
  text-decoration: underline;
}

.auth-info {
  color: white;
  padding: 40px;
}

.auth-info h2 {
  font-size: 36px;
  margin-bottom: 16px;
}

.auth-info p {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 32px;
  line-height: 1.6;
}

.auth-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.auth-feature {
  font-size: 16px;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .auth-container {
    grid-template-columns: 1fr;
  }

  .auth-info {
    display: none;
  }

  .auth-box {
    padding: 32px 24px;
  }

  .auth-header h1 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .auth-page {
    padding: 20px;
  }

  .auth-box {
    padding: 24px 20px;
  }
}
</style>