# Mini UI Kit

A comprehensive and modern React component library built from scratch using TypeScript, Webpack, and CSS Modules. This project demonstrates advanced frontend engineering skills including custom tooling setup, component design, theming, and professional UI development.

## 🚀 Features

- **Built from Scratch**: No `create-react-app`. Custom Webpack and Babel configuration
- **Type-Safe**: Fully written in TypeScript with strict type checking
- **CSS Modules**: Encapsulated, conflict-free component styling with fallback support
- **Dark Mode**: Complete light/dark theme system with system preference detection
- **Modern Components**: 10+ production-ready components with consistent design
- **Accessibility First**: ARIA support, keyboard navigation, and focus management
- **Hot Module Replacement**: Fast development experience with instant updates

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/mini-ui-kit.git
   cd mini-ui-kit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🖥️ Development

To start the development server with HMR:

```bash
npm start
```

Open your browser to `http://localhost:8080` to see the interactive component showcase.

## 🛠️ Building

To create a production build:

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

## 🎨 Theme System

The UI kit includes a comprehensive theming system with:

- **CSS Custom Properties**: Semantic color tokens that adapt to light/dark modes
- **Design Tokens**: Consistent spacing, typography, shadows, and border radius
- **Automatic Theme Detection**: Respects user's system preferences
- **Theme Persistence**: Remembers user's theme choice in localStorage

## ✨ Components

### Button

A versatile button component with multiple variants and sizes.

**Props:**
- `variant`: `'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'`
- `size`: `'sm' | 'md' | 'lg' | 'icon'`
- `children`: `React.ReactNode`
- All standard `<button>` attributes

**Usage:**
```tsx
import Button from './components/Button';

<Button variant="primary" size="lg">
  Primary Button
</Button>

<Button variant="outline" disabled>
  Disabled Button
</Button>
```

### Input

A clean text input with optional label and error states.

**Props:**
- `label`: `string` (optional)
- `error`: `string` (optional)
- All standard `<input>` attributes

**Usage:**
```tsx
import Input from './components/Input';

<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  required
/>
```

### Card

A flexible container component for grouping related content.

**Props:**
- `children`: `React.ReactNode`
- All standard `<div>` attributes

**Usage:**
```tsx
import Card from './components/Card';

<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>
```

### Modal

A full-featured modal dialog with focus trapping and animations.

**Props:**
- `isOpen`: `boolean`
- `onClose`: `() => void`
- `title`: `string` (optional)
- `size`: `'sm' | 'md' | 'lg' | 'xl'` (optional)
- `children`: `React.ReactNode`

**Usage:**
```tsx
import Modal from './components/Modal';

<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Confirm Action"
  size="md"
>
  <p>Are you sure you want to continue?</p>
</Modal>
```

### Alert

Contextual alert component with dismissible functionality.

**Props:**
- `variant`: `'default' | 'success' | 'warning' | 'error'`
- `title`: `string` (optional)
- `dismissible`: `boolean` (optional)
- `onDismiss`: `() => void` (optional)
- `children`: `React.ReactNode`

**Usage:**
```tsx
import Alert from './components/Alert';

<Alert variant="success" title="Success!" dismissible>
  Your changes have been saved successfully.
</Alert>
```

### Progress

Animated progress bar with multiple variants and sizes.

**Props:**
- `value`: `number` (0-100)
- `variant`: `'default' | 'success' | 'warning' | 'error'`
- `size`: `'sm' | 'md' | 'lg'`
- `label`: `string` (optional)
- `animated`: `boolean` (optional)

**Usage:**
```tsx
import Progress from './components/Progress';

<Progress
  value={75}
  variant="success"
  label="Upload Progress"
  animated
/>
```

### Checkbox

Custom checkbox with indeterminate state support.

**Props:**
- `checked`: `boolean`
- `indeterminate`: `boolean` (optional)
- `label`: `string` (optional)
- `onChange`: `(checked: boolean) => void`
- All standard `<input>` attributes

**Usage:**
```tsx
import Checkbox from './components/Checkbox';

<Checkbox
  checked={isChecked}
  onChange={setIsChecked}
  label="I agree to the terms"
/>
```

### Skeleton

Loading placeholder component with pulse and wave animations.

**Props:**
- `variant`: `'text' | 'circular' | 'rectangular'`
- `animation`: `'pulse' | 'wave'`
- `size`: `'sm' | 'md' | 'lg'` (for circular and rectangular)
- `width`: `string | number` (optional)
- `height`: `string | number` (optional)

**Usage:**
```tsx
import Skeleton from './components/Skeleton';

<Skeleton variant="text" width="200px" />
<Skeleton variant="circular" size="lg" />
<Skeleton variant="rectangular" width="100%" height="200px" />
```

### Badge

Small status indicators with multiple variants.

**Props:**
- `variant`: `'primary' | 'secondary' | 'success' | 'warning' | 'error'`
- `children`: `React.ReactNode`

**Usage:**
```tsx
import Badge from './components/Badge';

<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
```

### Toggle

Switch component for boolean states.

**Props:**
- `checked`: `boolean`
- `onChange`: `(checked: boolean) => void`
- `label`: `string` (optional)
- `disabled`: `boolean` (optional)

**Usage:**
```tsx
import Toggle from './components/Toggle';

<Toggle
  checked={isDarkMode}
  onChange={setIsDarkMode}
  label="Dark Mode"
/>
```

## 🏗️ Architecture

### CSS Modules with Fallbacks

The project uses CSS Modules for component styling with comprehensive fallback classes in `global.css`. This ensures components work even if CSS Modules fail to load.

### Type Safety

All components are fully typed with TypeScript, extending native HTML element props where appropriate.

### Theme Context

The theme system uses React Context and CSS custom properties for seamless light/dark mode switching.

### Build Configuration

- **Webpack 5**: Modern bundling with optimizations
- **Babel**: ES6+ transpilation and JSX support
- **TypeScript**: Type checking and compilation
- **CSS Modules**: Scoped styling with fallbacks

## 🎯 Use Cases

This UI kit is perfect for:
- Learning modern React development patterns
- Building consistent user interfaces
- Demonstrating frontend engineering skills
- Rapid prototyping and development
- Portfolio projects and technical interviews

## 🤝 Contributing

Feel free to contribute by:
1. Adding new components
2. Improving existing components
3. Enhancing the theme system
4. Adding tests and documentation
5. Optimizing build configuration

## 📄 License

MIT License - feel free to use this project for learning and development.

---

*Built with ❤️ to demonstrate modern React development practices*
