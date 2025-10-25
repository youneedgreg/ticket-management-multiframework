# TicketFlow - Twig/PHP Implementation

A modern, responsive ticket management web application built with PHP, Twig templating engine, and server-side rendering. This application allows users to create, read, update, and delete tickets with a beautiful, intuitive interface.

## 🚀 Features

### Core Functionality
- **Landing Page**: Eye-catching hero section with wavy SVG background and decorative circles
- **Authentication System**: Secure login and signup with server-side validation
- **Dashboard**: Real-time statistics showing total, open, in-progress, and closed tickets
- **Ticket Management (CRUD)**:
  - ✅ Create new tickets with validation
  - ✅ View all tickets in card-based layout
  - ✅ Edit existing tickets
  - ✅ Delete tickets with confirmation
- **Filtering**: Filter tickets by status (All, Open, In Progress, Closed)
- **Data Persistence**: All data saved to JSON file
- **Flash Notifications**: Server-side flash messages with JavaScript toasts
- **Protected Routes**: Dashboard and ticket pages require authentication

### Design Features
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Max Width Container**: Content centered with 1440px max-width
- **Wavy Hero Background**: SVG wave design on landing page
- **Decorative Elements**: Floating circles and card-based layouts
- **Status Color Coding**:
  - 🟢 Open - Green (#10B981)
  - 🟡 In Progress - Amber (#F59E0B)
  - ⚪ Closed - Gray (#6B7280)
- **Smooth Animations**: Hover effects and transitions throughout

## 🛠️ Technologies Used

### Core Technologies
- **PHP 7.4+** - Server-side programming language
- **Twig 3.0** - Flexible, fast, and secure template engine
- **Composer** - Dependency management for PHP

### Architecture
- **MVC Pattern** - Model-View-Controller architecture
- **Server-Side Rendering** - Twig templates rendered on the server
- **Session-Based Authentication** - PHP sessions for user management
- **JSON File Storage** - Lightweight data persistence

### Development Tools
- **PHP Built-in Server** - Development server
- **Apache/Nginx** - Production server with mod_rewrite

## 📦 Installation & Setup

### Prerequisites
- PHP 7.4 or higher
- Composer
- Apache or Nginx (with mod_rewrite for production)

### Step 1: Navigate to Project Directory
```bash
cd twig-app
```

### Step 2: Install Dependencies
```bash
composer install
```

### Step 3: Verify Folder Structure
Ensure these folders exist:
```
twig-app/
├── data/
├── public/
├── src/
├── templates/
└── vendor/
```

### Step 4: Set Permissions (Linux/Mac)
```bash
chmod 755 data/
chmod 644 data/tickets.json
```

### Step 5: Start Development Server
```bash
cd public
php -S localhost:8000
```

The application will be available at `http://localhost:8000`

### Step 6: Production Deployment (Apache)
1. Point your web server's document root to the `public` folder
2. Ensure `.htaccess` is enabled
3. Set appropriate file permissions
4. Configure virtual host if needed

## 🔐 Test Credentials

The application uses **simulated authentication** with PHP sessions. You can use **any credentials** that meet these requirements:

### Login Requirements
- **Email**: Any valid email format (e.g., `test@example.com`)
- **Password**: Minimum 6 characters (e.g., `password123`)

### Example Test Accounts
```
Email: admin@ticketflow.com
Password: admin123
```
```
Email: test@test.com
Password: test1234
```
```
Email: user@example.com
Password: password
```

**Note**: Authentication tokens are stored in PHP `$_SESSION` with the key `ticketapp_session`

## 📁 Project Structure
```
twig-app/
├── public/                      # Web root (publicly accessible)
│   ├── css/
│   │   └── style.css           # Main stylesheet
│   ├── js/
│   │   └── app.js              # Client-side JavaScript
│   ├── .htaccess               # URL rewriting rules
│   └── index.php               # Application entry point
├── src/
│   ├── Controllers/            # Request handlers
│   │   ├── BaseController.php
│   │   ├── HomeController.php
│   │   ├── AuthController.php
│   │   ├── DashboardController.php
│   │   └── TicketController.php
│   ├── Utils/                  # Utility classes
│   │   ├── Router.php          # Simple routing system
│   │   ├── Session.php         # Session management
│   │   └── Validator.php       # Form validation
│   └── bootstrap.php           # Twig initialization
├── templates/                  # Twig templates
│   ├── layouts/
│   │   ├── base.html.twig      # Base layout template
│   │   ├── navbar.html.twig    # Navigation bar
│   │   ├── footer.html.twig    # Footer
│   │   └── dashboard-nav.html.twig
│   ├── pages/                  # Page templates
│   │   ├── landing.html.twig
│   │   ├── login.html.twig
│   │   ├── signup.html.twig
│   │   ├── dashboard.html.twig
│   │   └── tickets.html.twig
│   └── components/             # Reusable components
│       ├── stat-card.html.twig
│       ├── ticket-card.html.twig
│       └── ticket-form.html.twig
├── data/
│   └── tickets.json            # JSON data storage
├── vendor/                     # Composer dependencies
├── .htaccess                   # Root rewrite rules
├── composer.json               # Composer configuration
└── README.md                   # This file
```

## 🎯 Component Overview

### MVC Architecture
- **Models**: Data stored in JSON files (`data/tickets.json`)
- **Views**: Twig templates in `templates/` folder
- **Controllers**: PHP classes handling business logic

### Routing System
Simple custom router in `src/Utils/Router.php`:
- GET routes for displaying pages
- POST routes for form submissions
- Route protection with authentication middleware

### Session Management
- **Session::login()** - Authenticate user
- **Session::logout()** - Clear session
- **Session::isAuthenticated()** - Check auth status
- **Session::setFlash()** - Set flash messages
- **Session::getFlash()** - Retrieve and clear flash messages

### Template Inheritance
Twig templates use inheritance:
1. **base.html.twig** - Master layout
2. **Page templates** - Extend base layout
3. **Components** - Reusable includes

## ✅ Form Validation Rules

### Ticket Validation
- **Title**: Required field, cannot be empty
- **Status**: Required field, must be one of:
  - `open`
  - `in_progress`
  - `closed`
- **Description**: Optional, max 500 characters
- **Priority**: Optional field (low, medium, high)

### Authentication Validation
- **Email**: Must be valid email format
- **Password**: Minimum 6 characters
- **Confirm Password**: Must match password field (signup only)

## 🎨 Design System

### Colors
- **Primary**: #4F46E5 (Indigo)
- **Success**: #10B981 (Green) - Open tickets
- **Warning**: #F59E0B (Amber) - In Progress tickets
- **Secondary**: #6B7280 (Gray) - Closed tickets
- **Danger**: #EF4444 (Red) - Delete actions
- **Background**: #F9FAFB (Light Gray)

### Typography
- **Font Family**: System fonts stack for optimal performance
- **Headings**: Bold, clear hierarchy
- **Body Text**: 16px base size for readability

### Layout
- **Max Width**: 1440px centered container
- **Spacing**: Consistent 8px grid system
- **Border Radius**: 8px-16px for modern feel
- **Shadows**: Subtle elevation for depth

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of headings, sections, and landmarks
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Focus States**: Visible focus indicators on all inputs and buttons
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Labels**: Descriptive labels for all form inputs
- **Form Validation**: Clear error messages inline with inputs
- **Responsive Design**: Works on all device sizes

## 🔒 Security & Authorization

- **Session-Based Auth**: PHP session management
- **Protected Routes**: Middleware checks authentication
- **CSRF Protection**: Should be added for production
- **XSS Prevention**: Twig auto-escapes output by default
- **Session Key**: `ticketapp_session` in `$_SESSION`
- **Logout**: Destroys session and redirects
- **Password**: Simulated validation (not production-ready)

### Production Security Recommendations
- Implement CSRF tokens
- Use password hashing (bcrypt/Argon2)
- Add rate limiting
- Use HTTPS in production
- Implement proper database instead of JSON
- Add input sanitization
- Configure secure session settings

## 📱 Responsive Breakpoints
```css
/* Mobile First Approach */
- Base: 320px - 767px (Mobile)
- Tablet: 768px - 1023px
- Desktop: 1024px - 1440px
- Large Desktop: 1440px+
```

### Mobile Optimizations
- Stacked layouts for better readability
- Collapsible navigation
- Touch-friendly button sizes (min 44px)
- Reduced padding for smaller screens

## 🐛 Known Issues & Limitations

- **Data Storage**: JSON file storage (not scalable for production)
- **Authentication**: Simulated authentication (not production-ready)
- **No Password Hashing**: Passwords not encrypted
- **No CSRF Protection**: Should be added for production
- **Concurrent Access**: JSON file locking not implemented
- **No Database**: File-based storage has limitations
- **Session Security**: Basic session handling

## 🚧 Future Enhancements

- Migrate to MySQL/PostgreSQL database
- Implement real authentication with password hashing
- Add CSRF protection for forms
- User profile management
- Ticket assignment to multiple users
- Email notifications
- Advanced filtering and search
- Export tickets to CSV/PDF
- File attachments for tickets
- Ticket commenting system
- Activity logs and audit trail
- API endpoints for mobile apps
- Multi-language support (i18n)
- Unit and integration testing

## 📊 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ⚠️ Internet Explorer (not supported)

## 🧪 Testing the Application

### Manual Testing Checklist

**Landing Page**
- [ ] Hero section displays with wave background
- [ ] Decorative circles are visible and animated
- [ ] Navigation buttons work (Login, Get Started)
- [ ] Footer displays correctly
- [ ] Responsive on mobile/tablet/desktop

**Authentication**
- [ ] Login form validates empty fields
- [ ] Login form validates email format
- [ ] Login form validates password length (6+ chars)
- [ ] Signup form validates password match
- [ ] Flash notifications appear on success/error
- [ ] Redirect to dashboard after successful login
- [ ] Already authenticated users redirect to dashboard
- [ ] Logout clears session properly

**Dashboard**
- [ ] Statistics display correctly (0 for new users)
- [ ] Logout button clears session and redirects
- [ ] "Manage Tickets" button navigates to tickets page
- [ ] Quick action cards display and link correctly
- [ ] User email displays in welcome message
- [ ] Responsive layout works

**Ticket Management**
- [ ] "Create Ticket" link shows form
- [ ] Form validation prevents empty submission
- [ ] Status must be open/in_progress/closed
- [ ] New ticket appears in list after creation
- [ ] Edit link loads ticket data in form
- [ ] Update saves changes successfully
- [ ] Delete shows confirmation dialog
- [ ] Delete removes ticket from list
- [ ] Filter buttons work correctly
- [ ] Empty state shows when no tickets
- [ ] Dashboard stats update after CRUD operations
- [ ] Data persists after server restart

**PHP-Specific Features**
- [ ] Server-side validation works
- [ ] Flash messages display correctly
- [ ] Session persists across page loads
- [ ] JSON file updates correctly
- [ ] Protected routes redirect to login

## 📞 Support & Documentation

For issues or questions:
1. Check this README for setup instructions
2. Verify PHP version (7.4+)
3. Check composer dependencies are installed
4. Verify file permissions on `data/` folder
5. Check PHP error logs for issues
6. Ensure mod_rewrite is enabled (Apache)

## 🎓 PHP/Twig Features Used

### PHP Features
- **Namespaces**: PSR-4 autoloading
- **Classes & OOP**: Controller-based architecture
- **Sessions**: User authentication
- **File I/O**: JSON data persistence
- **Filter Functions**: Array manipulation
- **Date/Time**: Timestamp handling

### Twig Features
- **Template Inheritance**: `{% extends %}` and `{% block %}`
- **Includes**: `{% include %}` for components
- **Filters**: `|date`, `|length`, `|filter`, `|replace`
- **Auto-escaping**: XSS prevention
- **Control Structures**: `{% if %}`, `{% for %}`
- **Variables**: `{{ variable }}` syntax
- **Comments**: `{# comment #}`

### Routing
- Custom lightweight router
- GET/POST method handling
- Route protection middleware
- Query parameter handling

## 📄 License

This project is part of the HNG Internship Stage 2 Frontend Task.

## 👨‍💻 Development Notes

### Starting Development Server
```bash
cd public
php -S localhost:8000
```
Access at: `http://localhost:8000`

### Checking PHP Version
```bash
php --version
```

### Installing Dependencies
```bash
composer install
```

### Updating Dependencies
```bash
composer update
```

### File Permissions (Linux/Mac)
```bash
chmod -R 755 data/
chmod 644 data/tickets.json
```

### Clearing Sessions (Debug)
Delete session files or restart PHP server

### Apache Configuration
Ensure `mod_rewrite` is enabled:
```bash
sudo a2enmod rewrite
sudo service apache2 restart
```

### Production Deployment Checklist
- [ ] Set appropriate file permissions
- [ ] Configure virtual host
- [ ] Enable mod_rewrite (Apache)
- [ ] Use HTTPS with SSL certificate
- [ ] Set secure session settings
- [ ] Implement CSRF protection
- [ ] Add password hashing
- [ ] Migrate to database
- [ ] Configure error logging
- [ ] Set production PHP settings
- [ ] Disable debug mode in Twig

---

**Built with ❤️ using PHP and Twig**

*Part of the Multi-Framework Ticket Management Application*

## 🔗 Related Implementations

This is the Twig/PHP version. Also check out:
- **React Version**: `/react-app`
- **Vue.js Version**: `/vue-app`