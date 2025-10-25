# Shared Assets

This folder contains shared design assets used across all three implementations of the TicketFlow application (React, Vue.js, and Twig/PHP).

## 📁 Contents

### SVG Graphics

#### `svg/wave-hero.svg`
- Wavy background for hero sections
- Used on landing pages across all implementations
- White fill with full opacity
- Responsive viewBox: 0 0 1440 320

#### `svg/decorative-circle.svg`
- Decorative circular element
- Used as floating/animated background elements
- Semi-transparent white fill
- Dimensions: 300x300

### Styles

#### `styles.css`
Shared CSS variables and utility classes:
- **Color Palette**: Primary, status, and semantic colors
- **Design Tokens**: Spacing, border radius, shadows
- **Typography**: Font families and sizes
- **Utility Classes**: Container, buttons, badges
- **Animations**: Float and slide-in effects
- **Responsive Breakpoints**: Mobile, tablet, desktop

## 🎨 Design System

### Color Palette
```css
Primary: #4F46E5 (Indigo)
Success/Open: #10B981 (Green)
Warning/In Progress: #F59E0B (Amber)
Secondary/Closed: #6B7280 (Gray)
Danger: #EF4444 (Red)
Background: #F9FAFB (Light Gray)
```

### Status Colors

- 🟢 **Open**: Green (#10B981)
- 🟡 **In Progress**: Amber (#F59E0B)
- ⚪ **Closed**: Gray (#6B7280)

### Layout

- **Max Width**: 1440px
- **Container Padding**: 20px (desktop), 16px (mobile)
- **Border Radius**: 8px (small), 12px (medium), 16px (large)
- **Spacing Scale**: 4px, 8px, 16px, 24px, 32px, 48px

## 📝 Usage

### React Implementation
```jsx
// SVGs are embedded directly in components
// CSS variables can be imported if needed
```

### Vue.js Implementation
```vue
<!-- SVGs are embedded directly in templates -->
<!-- CSS variables can be imported if needed -->
```

### Twig/PHP Implementation
```twig
{# SVGs are embedded directly in templates #}
{# CSS is included in public/css/style.css #}
```

## 🔄 How These Assets Are Used

Currently, all three implementations have **embedded versions** of these assets for self-containment and ease of deployment. This shared-assets folder serves as:

1. **Reference**: Single source of truth for design elements
2. **Documentation**: Centralized design system
3. **Consistency**: Ensures all implementations use identical designs
4. **Future Use**: Can be referenced directly if implementations are deployed together

## 🛠️ Modifying Shared Assets

If you need to update the design:

1. Update the relevant file in this folder
2. Copy changes to each implementation:
   - React: `react-app/src/`
   - Vue: `vue-app/src/`
   - Twig: `twig-app/templates/` and `twig-app/public/css/`

## ✅ Design Consistency Checklist

- [x] Identical color schemes across all apps
- [x] Same wavy hero background
- [x] Matching decorative circles
- [x] Consistent button styles
- [x] Identical status badges
- [x] Same spacing and layout
- [x] Matching animations
- [x] Uniform responsive breakpoints

## 📦 For Submission

This folder is included as part of the HNG Internship Stage 2 submission to demonstrate:
- Consistent design across multiple frameworks
- Reusable asset management
- Design system documentation
- Professional project organization

---

**Part of TicketFlow Multi-Framework Application**
```

---

## ✅ Done!

Your `shared-assets/` folder is now complete with:

1. ✅ **wave-hero.svg** - The wavy background SVG
2. ✅ **decorative-circle.svg** - Decorative circle element
3. ✅ **styles.css** - Shared design tokens and utilities
4. ✅ **README.md** - Documentation for the shared assets

### Final Structure:
```
ticket-management-multiframework/
├── shared-assets/           ← NEW!
│   ├── svg/
│   │   ├── wave-hero.svg
│   │   └── decorative-circle.svg
│   ├── styles.css
│   └── README.md
├── react-app/
├── vue-app/
├── twig-app/
└── README.md