# TicketFlow - Multi-Framework Ticket Management Application

A comprehensive ticket management system implemented in **three different frontend technologies**: React, Vue.js, and Twig/PHP. This project demonstrates consistent design and functionality across multiple frameworks while maintaining identical features and user experience.

## 🚀 Project Overview

This repository contains three complete implementations of the same ticket management application, each using a different technology stack while maintaining identical features, design, and user experience. All implementations share a common design system defined in the `shared-assets/` folder.

## 📦 Implementations

### 1. React Implementation
**Location**: `/react-app`  
**Port**: `5173`  
**Tech Stack**: React 18, React Router, Vite  
**Build Tool**: Vite 5.4.2

[View React Documentation →](./react-app/README.md)

**Quick Start:**
```bash
cd react-app
npm install
npm run dev
```

### 2. Vue.js Implementation
**Location**: `/vue-app`  
**Port**: `5174`  
**Tech Stack**: Vue 3, Vue Router, Vite  
**Build Tool**: Vite 5.4.2

[View Vue.js Documentation →](./vue-app/README.md)

**Quick Start:**
```bash
cd vue-app
npm install
npm run dev
```

### 3. Twig/PHP Implementation
**Location**: `/twig-app`  
**Port**: `8000`  
**Tech Stack**: PHP 7.4+, Twig 3, Composer  
**Server**: PHP Built-in Server

[View Twig/PHP Documentation →](./twig-app/README.md)

**Quick Start:**
```bash
cd twig-app
composer install
cd public
php -S localhost:8000
```

## ✨ Features (All Implementations)

All three versions include identical functionality:

- 🎨 **Landing Page** with wavy hero background and decorative circles
- 🔐 **Authentication System** (Login/Signup) with real-time validation
- 📊 **Dashboard** with live statistics (Total, Open, In Progress, Closed tickets)
- 🎫 **Full CRUD Operations** (Create, Read, Update, Delete tickets)
- 🔍 **Status Filtering** (All, Open, In Progress, Closed)
- 💾 **Data Persistence** (localStorage for React/Vue, JSON file for Twig/PHP)
- 🔔 **Toast Notifications** for user feedback
- 🛡️ **Protected Routes** with authentication middleware
- 📱 **Fully Responsive Design** (mobile, tablet, desktop)
- 🎯 **Centered Layout** with max-width 1440px
- ✅ **Form Validation** with inline error messages
- 🎨 **Consistent Design System** across all implementations

## 📁 Project Structure
```
ticket-management-multiframework/
├── shared-assets/           # Shared design system and assets
│   ├── svg/
│   │   ├── wave-hero.svg
│   │   └── decorative-circle.svg
│   ├── styles.css
│   └── README.md
├── react-app/              # React implementation
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── vue-app/                # Vue.js implementation
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── twig-app/               # Twig/PHP implementation
│   ├── public/
│   ├── src/
│   ├── templates/
│   ├── data/
│   ├── composer.json
│   └── README.md
└── README.md               # This file
```

## 🎨 Shared Assets & Design System

The `shared-assets/` folder contains the single source of truth for the design system used across all three implementations:

### SVG Graphics
- **wave-hero.svg** - Wavy background for hero sections
- **decorative-circle.svg** - Floating decorative elements

### Design Tokens
- **styles.css** - CSS variables for colors, spacing, typography, shadows, and animations

### Design System Documentation
- **README.md** - Comprehensive design system guide

[View Shared Assets Documentation →](./shared-assets/README.md)

**Note**: While each app has embedded copies of these assets for self-containment and easier deployment, this folder serves as the design reference and ensures consistency across all implementations.

## 🎨 Design Consistency

All three implementations feature identical:

### Visual Design
- Same color palette and gradients
- Identical wavy hero SVG background
- Matching decorative floating circles
- Consistent card-based layouts
- Uniform button styles and hover effects
- Same shadows and border radius

### Status Color Coding
- 🟢 **Open** - Green (#10B981)
- 🟡 **In Progress** - Amber (#F59E0B)
- ⚪ **Closed** - Gray (#6B7280)

### Layout & Spacing
- Max-width: 1440px centered container
- Consistent spacing scale (8px grid system)
- Identical responsive breakpoints
- Same padding and margins

### Typography
- System font stack for optimal performance
- Identical heading hierarchy
- 16px base font size across all apps

## 🔐 Test Credentials (All Apps)

The applications use simulated authentication. You can use **any credentials** that meet these requirements:

### Requirements
- **Email**: Any valid email format (e.g., `test@example.com`)
- **Password**: Minimum 6 characters (e.g., `password123`)

### Example Credentials
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

## 📊 Technical Comparison

| Feature | React | Vue.js | Twig/PHP |
|---------|-------|--------|----------|
| **Rendering** | Client-side (SPA) | Client-side (SPA) | Server-side (SSR) |
| **State Management** | useState/useEffect | ref/computed/watch | PHP Sessions + JSON |
| **Routing** | React Router | Vue Router | Custom PHP Router |
| **Templates** | JSX | Single File Components | Twig Templates |
| **Build Tool** | Vite | Vite | None (PHP Runtime) |
| **Data Storage** | localStorage | localStorage | JSON File |
| **Notifications** | React Hot Toast | Vue Toastification | Flash Messages + JS |
| **Form Handling** | Controlled Components | v-model | POST Requests |
| **Validation** | Client-side JS | Client-side JS | Server-side PHP |

## 🛠️ Technologies Used

### React Implementation
- React 18.3.1
- React Router DOM 7.9.4
- React Hot Toast 2.6.0
- Vite 5.4.2

### Vue.js Implementation
- Vue 3.4.21
- Vue Router 4.3.0
- Vue Toastification 2.0.0-rc.5
- Vite 5.4.2

### Twig/PHP Implementation
- PHP 7.4+
- Twig 3.0
- Composer (Dependency Management)
- Custom MVC Architecture

### Shared
- Pure CSS (No CSS frameworks)
- Responsive Design (Mobile-first)
- SVG Graphics
- JavaScript for interactivity

## 🚀 Getting Started

### Prerequisites

**For React & Vue.js:**
- Node.js 16+ 
- npm or yarn

**For Twig/PHP:**
- PHP 7.4+
- Composer

### Installation

Clone the repository:
```bash
git clone <repository-url>
cd ticket-management-multiframework
```

Then follow the Quick Start instructions for each implementation above.

## 📝 Detailed Documentation

Each implementation has comprehensive documentation:

- **[React Documentation](./react-app/README.md)** - Setup, component structure, React-specific features
- **[Vue.js Documentation](./vue-app/README.md)** - Setup, Composition API, Vue-specific features  
- **[Twig/PHP Documentation](./twig-app/README.md)** - Setup, MVC architecture, PHP-specific features
- **[Shared Assets Documentation](./shared-assets/README.md)** - Design system, colors, typography

## ✅ Features Checklist

All three implementations include:

**Landing Page**
- [x] Hero section with gradient background
- [x] Wavy SVG background
- [x] Floating decorative circles
- [x] Feature cards with hover effects
- [x] CTA section
- [x] Footer with links
- [x] Fully responsive

**Authentication**
- [x] Login form with validation
- [x] Signup form with password confirmation
- [x] Email format validation
- [x] Password length validation (6+ chars)
- [x] Inline error messages
- [x] Success/error notifications
- [x] Session management
- [x] Redirect after login

**Dashboard**
- [x] Welcome message with user email
- [x] Statistics cards (Total, Open, In Progress, Closed)
- [x] Quick action cards
- [x] Navigation to ticket management
- [x] Logout functionality
- [x] Real-time stat updates

**Ticket Management**
- [x] Create tickets with validation
- [x] View all tickets in card layout
- [x] Edit existing tickets
- [x] Delete tickets with confirmation
- [x] Filter by status
- [x] Empty state handling
- [x] Form validation (title, status required)
- [x] Status must be: open, in_progress, or closed
- [x] Optional description and priority fields
- [x] Data persistence

**Design & UX**
- [x] Consistent design across all implementations
- [x] Max-width 1440px centered layout
- [x] Responsive on mobile, tablet, desktop
- [x] Smooth animations and transitions
- [x] Accessible forms with labels
- [x] Loading states
- [x] Error handling


## 🐛 Known Limitations

Since these are demonstration projects:

- **Authentication**: Simulated (no password hashing)
- **Data Storage**: Client-side (localStorage) or JSON files
- **Security**: No CSRF protection, basic validation only
- **Scalability**: Not designed for production scale
- **API**: No backend API (simulated data operations)

**For production use**, you would need:
- Real backend API with database
- Proper authentication (JWT, OAuth, etc.)
- Password hashing (bcrypt, Argon2)
- CSRF protection
- Rate limiting
- Input sanitization
- Error logging
- Testing (unit, integration, e2e)

## 📱 Browser Support

All implementations support:

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)

## 🎯 HNG Internship Task

This project was created as part of the **HNG Internship Stage 2 Frontend Task**, demonstrating:

- Proficiency in multiple frontend frameworks (React, Vue.js)
- Server-side rendering with Twig/PHP
- Consistent design implementation across frameworks
- Full-stack development capabilities (frontend + basic backend)
- Responsive design and UX best practices
- Code organization and documentation

### Task Requirements Met

✅ Multi-framework implementation (React, Vue.js, Twig)  
✅ Identical layout and design across all versions  
✅ Wavy hero background (SVG)  
✅ Decorative circles  
✅ Max-width 1440px centered layout  
✅ Landing page with CTA  
✅ Authentication (Login/Signup)  
✅ Dashboard with statistics  
✅ Full CRUD ticket management  
✅ Form validation  
✅ Status filtering  
✅ Protected routes  
✅ Responsive design  
✅ Shared assets folder  
✅ Complete documentation  

## 🤝 Contributing

This is a learning project for HNG Internship. Feel free to:
- Explore the code
- Learn from the implementations
- Use as a reference for your own projects

## 📞 Support

For questions or issues:
1. Check individual implementation READMEs
2. Review the shared-assets documentation
3. Verify all dependencies are installed
4. Check browser console for errors

## 🔗 Useful Links

- [React Documentation](https://react.dev)
- [Vue.js Documentation](https://vuejs.org)
- [Twig Documentation](https://twig.symfony.com)
- [PHP Documentation](https://www.php.net)

## 🎓 Learning Outcomes

This project demonstrates:

### Frontend Skills
- React Hooks and component composition
- Vue 3 Composition API
- Twig templating engine
- Responsive CSS design
- Client-side routing
- Form handling and validation
- State management

### Backend Skills (Twig/PHP)
- MVC architecture
- PHP sessions
- Server-side rendering
- Custom routing
- File I/O operations
- Server-side validation

### Design Skills
- Consistent design systems
- Responsive layouts
- UI/UX best practices
- Accessibility considerations
- Color theory and typography

### Development Practices
- Code organization
- Documentation
- Version control (Git)
- Package management (npm, Composer)
- Build tools (Vite)

---

**Built with ❤️ for HNG Internship**

*Showcasing multi-framework development expertise across React, Vue.js, and Twig/PHP*

**Created by**: Gregory Temwa Odete
**Submission Date**: October 25, 2025  
**Task**: HNG Internship Stage 2 - Frontend Development