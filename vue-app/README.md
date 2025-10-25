# TicketFlow - Vue.js Implementation

A modern, responsive ticket management web application built with Vue 3 and Vite. This application allows users to create, read, update, and delete tickets with a beautiful, intuitive interface.

## 🚀 Features

### Core Functionality
- **Landing Page**: Eye-catching hero section with wavy SVG background and decorative circles
- **Authentication System**: Secure login and signup with form validation
- **Dashboard**: Real-time statistics showing total, open, in-progress, and closed tickets
- **Ticket Management (CRUD)**:
  - ✅ Create new tickets with validation
  - ✅ View all tickets in card-based layout
  - ✅ Edit existing tickets
  - ✅ Delete tickets with confirmation
- **Filtering**: Filter tickets by status (All, Open, In Progress, Closed)
- **Data Persistence**: All data saved to localStorage
- **Toast Notifications**: Real-time feedback for user actions
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

### Core Framework & Build Tool
- **Vue 3.4.21** - Progressive JavaScript framework
- **Vite 5.4.2** - Next generation frontend tooling
- **Vue Router 4.3.0** - Official router for Vue.js

### UI & Notifications
- **Vue Toastification 2.0.0-rc.5** - Toast notification library for Vue 3

### Development Tools
- **@vitejs/plugin-vue 5.0.4** - Official Vite plugin for Vue 3

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Navigate to Project Directory
```bash
cd vue-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will open automatically at `http://localhost:5174`

### Step 4: Build for Production (Optional)
```bash
npm run build
```

### Step 5: Preview Production Build (Optional)
```bash
npm run preview
```

## 🔐 Test Credentials

The application uses **simulated authentication** with localStorage. You can use **any credentials** that meet these requirements:

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

**Note**: Authentication tokens are stored in `localStorage` with the key `ticketapp_session`

## 📁 Project Structure
```
vue-app/
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── auth/               # Authentication components
│   │   │   ├── LoginForm.vue
│   │   │   └── SignupForm.vue
│   │   ├── common/             # Shared components
│   │   │   ├── AppButton.vue
│   │   │   ├── AppFooter.vue
│   │   │   └── AppNavbar.vue
│   │   ├── dashboard/          # Dashboard components
│   │   │   ├── DashboardNav.vue
│   │   │   └── StatCard.vue
│   │   └── tickets/            # Ticket management components
│   │       ├── TicketCard.vue
│   │       ├── TicketForm.vue
│   │       └── TicketList.vue
│   ├── views/                  # Page components
│   │   ├── LandingPage.vue
│   │   ├── LoginPage.vue
│   │   ├── SignupPage.vue
│   │   ├── Dashboard.vue
│   │   └── TicketManagement.vue
│   ├── router/                 # Vue Router configuration
│   │   └── index.js
│   ├── utils/                  # Utility functions
│   │   ├── auth.js            # Authentication helpers
│   │   └── validation.js      # Form validation
│   ├── assets/                 # Global styles and assets
│   │   └── styles.css
│   ├── App.vue                 # Root component
│   └── main.js                 # Application entry point
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🎯 Component Overview

### Vue 3 Composition API
This application uses Vue 3's Composition API for better code organization and reusability:
- **ref**: Reactive state management
- **computed**: Derived reactive state
- **watch**: Side effects and reactive dependencies
- **onMounted**: Lifecycle hooks

### Authentication Flow
1. **LoginForm / SignupForm**: Handle user input with real-time validation using `v-model`
2. **Protected Routes**: Vue Router navigation guards redirect unauthorized users
3. **Session Management**: Store/retrieve session data from localStorage

### Ticket Management
1. **TicketForm**: Create/edit tickets with validation (title and status required)
2. **TicketCard**: Display individual ticket with event emission for edit/delete
3. **TicketList**: Grid layout of tickets with computed filtered results
4. **Filtering**: Real-time reactive filtering by ticket status

### State Management
- **Reactive References (ref)**: Component-level reactive state
- **Computed Properties**: Derived state with automatic dependency tracking
- **Watchers**: Synchronize data with localStorage
- **Event Emission**: Child-to-parent communication

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
- **ARIA Attributes**: Where appropriate for screen readers
- **Responsive Design**: Works on all device sizes

## 🔒 Security & Authorization

- **Session-Based Auth**: Simulated authentication with localStorage
- **Protected Routes**: Dashboard and tickets require valid session
- **Route Guards**: `router.beforeEach` checks authentication
- **Session Key**: `ticketapp_session` in localStorage
- **Logout**: Clears session and redirects to landing page

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

- **Data Persistence**: Data stored in localStorage (not a backend database)
- **Authentication**: Simulated authentication (not production-ready)
- **Concurrent Users**: No multi-user support (single-device only)
- **Data Loss**: Clearing browser data will delete all tickets

## 🚧 Future Enhancements

- Backend API integration with Axios/Fetch
- Real authentication with JWT tokens
- Vuex or Pinia for global state management
- User profile management
- Ticket assignment to users
- Email notifications
- Advanced filtering and search
- Export tickets to CSV/PDF
- Dark mode support with Vue composables
- Multi-language support with Vue I18n
- Unit testing with Vitest
- E2E testing with Cypress

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
- [ ] Toast notifications appear on success/error
- [ ] Redirect to dashboard after successful login
- [ ] Already authenticated users redirect to dashboard

**Dashboard**
- [ ] Statistics display correctly (0 for new users)
- [ ] Logout button clears session and redirects
- [ ] "Manage Tickets" button navigates to tickets page
- [ ] Quick action cards display and link correctly
- [ ] User email displays in welcome message
- [ ] Responsive layout works

**Ticket Management**
- [ ] "Create Ticket" button shows form
- [ ] Form validation prevents empty submission
- [ ] Status must be open/in_progress/closed
- [ ] New ticket appears in list after creation
- [ ] Edit button loads ticket data in form
- [ ] Update saves changes successfully
- [ ] Delete shows confirmation dialog
- [ ] Delete removes ticket from list
- [ ] Filter buttons work correctly
- [ ] Empty state shows when no tickets
- [ ] Dashboard stats update after CRUD operations

**Vue-Specific Features**
- [ ] Reactive data updates immediately
- [ ] v-model two-way binding works on forms
- [ ] Computed properties update correctly
- [ ] Component events emit properly
- [ ] Router transitions work smoothly
- [ ] Toast notifications position correctly

## 📞 Support & Documentation

For issues or questions:
1. Check this README for setup instructions
2. Verify all dependencies are installed (`npm install`)
3. Clear browser cache and localStorage
4. Check browser console for errors
5. Check Vue DevTools for component inspection

## 🎓 Vue 3 Features Used

### Composition API
- `ref()` - Reactive references
- `reactive()` - Reactive objects
- `computed()` - Computed properties
- `watch()` - Watchers for side effects
- `onMounted()` - Lifecycle hooks

### Template Features
- `v-model` - Two-way data binding
- `v-if/v-else` - Conditional rendering
- `v-for` - List rendering
- `v-bind` (`:`) - Dynamic attributes
- `v-on` (`@`) - Event handling
- Scoped styles - Component-scoped CSS

### Router Features
- Navigation guards
- Route protection
- Programmatic navigation
- Dynamic routing


## 👨‍💻 Development Notes

### Starting Development
```bash
npm run dev
```
Access at: `http://localhost:5174`

### Building for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

### Vue DevTools
Install Vue DevTools browser extension for better debugging:
- Chrome: [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/)
- Firefox: [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

---

**Built with ❤️ using Vue 3 and Vite**

*Part of the Multi-Framework Ticket Management Application*