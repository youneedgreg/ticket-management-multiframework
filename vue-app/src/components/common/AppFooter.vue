<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>🎫 TicketFlow</h3>
            <p>Manage your tickets efficiently and effectively</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 TicketFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #1F2937;
    color: white;
    padding: 60px 0 20px;
    margin-top: auto;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }
  
  .footer-section h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  .footer-section h4 {
    font-size: 18px;
    margin-bottom: 16px;
    color: #F9FAFB;
  }
  
  .footer-section p {
    color: #D1D5DB;
    line-height: 1.6;
  }
  
  .footer-section ul {
    list-style: none;
  }
  
  .footer-section ul li {
    margin-bottom: 12px;
  }
  
  .footer-section ul li a {
    color: #D1D5DB;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-section ul li a:hover {
    color: #4F46E5;
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #374151;
    color: #9CA3AF;
  }
  
  @media (max-width: 768px) {
    .footer {
      padding: 40px 0 20px;
    }
    
    .footer-content {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  </style>