# TicketFlow - React Implementation

A modern, responsive ticket management web application built with React and Vite. This application allows users to create, read, update, and delete tickets with a beautiful, intuitive interface.

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
- **React 18.3.1** - Frontend library
- **Vite 5.4.2** - Build tool and dev server
- **React DOM 18.3.1** - React rendering

### Routing & State
- **React Router DOM 7.9.4** - Client-side routing and navigation

### UI & Notifications
- **React Hot Toast 2.6.0** - Toast notifications for user feedback

### Development Tools
- **@vitejs/plugin-react 4.3.1** - Vite React plugin
- **@types/react 18.3.3** - TypeScript definitions for React
- **@types/react-dom 18.3.0** - TypeScript definitions for React DOM

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Navigate to Project Directory
```bash
cd react-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

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
react-app/
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── auth/               # Authentication components
│   │   │   ├── LoginForm.jsx
│   │   │   ├── SignupForm.jsx
│   │   │   └── AuthForms.css
│   │   ├── common/             # Shared components
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── dashboard/          # Dashboard components
│   │   │   ├── DashboardNav.jsx
│   │   │   ├── DashboardNav.css
│   │   │   ├── StatCard.jsx
│   │   │   └── StatCard.css
│   │   └── tickets/            # Ticket management components
│   │       ├── TicketCard.jsx
│   │       ├── TicketCard.css
│   │       ├── TicketForm.jsx
│   │       ├── TicketForm.css
│   │       ├── TicketList.jsx
│   │       └── TicketList.css
│   ├── pages/                  # Page components
│   │   ├── LandingPage.jsx
│   │   ├── LandingPage.css
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── AuthPages.css
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   ├── TicketManagement.jsx
│   │   └── TicketManagement.css
│   ├── utils/                  # Utility functions
│   │   ├── auth.js            # Authentication helpers
│   │   └── validation.js      # Form validation
│   ├── styles/                 # Global styles
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx                 # Main app component with routing
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🎯 Component Overview

### Authentication Flow
1. **LoginForm / SignupForm**: Handle user input with real-time validation
2. **Protected Routes**: Redirect unauthorized users to login page
3. **Session Management**: Store/retrieve session data from localStorage

### Ticket Management
1. **TicketForm**: Create/edit tickets with validation (title and status required)
2. **TicketCard**: Display individual ticket with edit/delete actions
3. **TicketList**: Grid layout of tickets with empty state handling
4. **Filtering**: Real-time filtering by ticket status

### State Management
- **useState**: Component-level state management
- **useEffect**: Side effects and localStorage synchronization
- **useNavigate**: Programmatic navigation after actions

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
- **Alt Text**: Descriptive labels for all form inputs
- **ARIA Labels**: Where appropriate for screen readers
- **Responsive Design**: Works on all device sizes

## 🔒 Security & Authorization

- **Session-Based Auth**: Simulated authentication with localStorage
- **Protected Routes**: Dashboard and tickets require valid session
- **Route Guards**: Automatic redirect to login for unauthorized access
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

- Backend API integration
- Real authentication with JWT tokens
- User profile management
- Ticket assignment to users
- Email notifications
- Advanced filtering and search
- Export tickets to CSV/PDF
- Dark mode support
- Multi-language support

## 📊 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)

## 🧪 Testing the Application

### Manual Testing Checklist

**Landing Page**
- [ ] Hero section displays with wave background
- [ ] Decorative circles are visible
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
- [ ] Quick action cards display
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

## 📞 Support & Documentation

For issues or questions:
1. Check this README for setup instructions
2. Verify all dependencies are installed
3. Clear browser cache and localStorage
4. Check browser console for errors

## 👨‍💻 Development Notes

### Starting Development
```bash
npm run dev
```
Access at: `http://localhost:5173`

### Building for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

**Built with ❤️ using React and Vite**

*Part of the Multi-Framework Ticket Management Application*