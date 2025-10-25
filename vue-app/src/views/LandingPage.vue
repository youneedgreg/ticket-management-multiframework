<template>
  <div>
    <section class="hero">
      <div class="container">
        <h1>Ticket Management System</h1>
        <p>Streamline your support workflow with our powerful ticket management solution.</p>
        <div>
          <router-link to="/auth/login" class="btn">Login</router-link>
          <router-link to="/auth/signup" class="btn">Get Started</router-link>
        </div>
      </div>
      <img src="../../shared-assets/wave-hero.svg" alt="Wave background" class="wave" />
      <img src="../../shared-assets/decorative-circle.svg" alt="Decorative circle" class="decorative-circle" />
    </section>
    <section class="container">
      <div class="card">
        <h2>Features</h2>
        <ul>
          <li>Easy ticket creation and management</li>
          <li>Real-time status tracking</li>
          <li>Secure authentication</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </section>
    <footer class="container">
      <p>&copy; 2023 Ticket Management System</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
</style>
