import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Badge from './components/Badge';
import Toggle from './components/Toggle';
import Modal from './components/Modal';
import Alert from './components/Alert';
import Progress from './components/Progress';
import Checkbox from './components/Checkbox';
import Skeleton from './components/Skeleton';
import { useTheme } from './contexts/ThemeContext';

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'hsl(var(--background))',
    color: 'hsl(var(--foreground))',
  },
  hero: {
    padding: '6rem 1rem',
    textAlign: 'center' as const,
    background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.05) 0%, transparent 70%)',
    borderBottom: '1px solid hsl(var(--border))',
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    fontWeight: '800',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    background: 'linear-gradient(to right, hsl(var(--foreground)), hsl(var(--foreground) / 0.7))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: 'hsl(var(--muted-foreground))',
    maxWidth: '42rem',
    margin: '0 auto 2rem',
    lineHeight: '1.6',
  },
  container: {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem',
  },
  section: {
    padding: '5rem 1rem',
  },
  sectionTitle: {
    fontSize: '2.25rem',
    fontWeight: '700',
    textAlign: 'center' as const,
    marginBottom: '1rem',
  },
  sectionDescription: {
    fontSize: '1.125rem',
    color: 'hsl(var(--muted-foreground))',
    textAlign: 'center' as const,
    maxWidth: '42rem',
    margin: '0 auto 3rem',
    lineHeight: '1.6',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  componentShowcase: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: 'hsl(var(--muted) / 0.3)',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid hsl(var(--border))',
    marginBottom: '2rem',
  },
  codeBlock: {
    backgroundColor: 'hsl(var(--muted))',
    border: '1px solid hsl(var(--border))',
    borderRadius: 'var(--radius)',
    padding: '1rem',
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    lineHeight: '1.5',
    overflow: 'auto',
    color: 'hsl(var(--muted-foreground))',
  },
  themeToggle: {
    position: 'fixed' as const,
    top: '1rem',
    right: '1rem',
    zIndex: 50,
  },
};

export default function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [progress, setProgress] = useState(65);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: true,
    option3: false,
  });
  const [loading, setLoading] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={styles.page}>
      {/* Theme Toggle */}
      <div style={styles.themeToggle}>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </Button>
      </div>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Mini UI Kit</h1>
          <p style={styles.heroSubtitle}>
            A beautiful, modern React component library built from scratch with TypeScript, 
            Webpack, and CSS custom properties. Featuring shadcn-inspired design and full dark mode support.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="outline" size="lg">View Components</Button>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Button Variants</h2>
          <p style={styles.sectionDescription}>
            Beautiful button components with multiple variants, sizes, and states. Built with accessibility in mind.
          </p>
          
          <div style={styles.componentShowcase}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <div style={styles.componentShowcase}>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>

          <div style={styles.codeBlock}>
{`<Button variant="primary">Primary</Button>
<Button variant="outline" size="sm">Small Outline</Button>
<Button variant="destructive" disabled>Disabled</Button>`}
          </div>
        </div>
      </section>

      {/* Inputs Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Form Controls</h2>
          <p style={styles.sectionDescription}>
            Clean, accessible input components with proper focus states and labeling.
          </p>

          <div style={{ maxWidth: '24rem', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <Input
                id="name"
                label="Full Name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <Input
                id="email"
                label="Email Address"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <Input
                id="disabled"
                label="Disabled Input"
                placeholder="This input is disabled"
                disabled
              />
            </div>
          </div>

          <div style={styles.codeBlock}>
{`<Input
  id="email"
  label="Email Address"
  type="email"
  placeholder="your@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>`}
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Card Components</h2>
          <p style={styles.sectionDescription}>
            Versatile card containers that adapt to light and dark themes automatically.
          </p>

          <div style={styles.grid}>
            <Card>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: '0.5rem', marginTop: '0' }}>
                🎨 Design System
              </h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>
                Built with CSS custom properties for seamless theme switching and consistent design tokens.
              </p>
              <Button variant="primary" size="sm">Explore</Button>
            </Card>

            <Card>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: '0.5rem', marginTop: '0' }}>
                ⚡ Performance
              </h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>
                Minimal bundle size with tree-shaking support and optimized CSS-in-JS alternatives.
              </p>
              <Button variant="secondary" size="sm">Benchmark</Button>
            </Card>

            <Card>
              <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: '600', marginBottom: '0.5rem', marginTop: '0' }}>
                🔧 TypeScript
              </h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>
                Fully typed components with excellent IntelliSense and compile-time safety.
              </p>
              <Button variant="outline" size="sm">API Docs</Button>
            </Card>
          </div>

          <div style={styles.codeBlock}>
{`<Card>
  <h3>Card Title</h3>
  <p>Card content adapts to theme automatically.</p>
  <Button variant="primary">Action</Button>
</Card>`}
          </div>
        </div>
      </section>

      {/* Interactive Components Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Interactive Components</h2>
          <p style={styles.sectionDescription}>
            Advanced components with complex interactions and state management.
          </p>

          <div style={styles.grid}>
            <Card>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', marginBottom: '1rem', marginTop: '0' }}>
                🗃️ Modal Dialog
              </h3>
              <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>
                Accessible modal with focus trapping, escape key support, and smooth animations.
              </p>
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
            </Card>

            <Card>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', marginBottom: '1rem', marginTop: '0' }}>
                📊 Progress Tracking
              </h3>
              <div style={{ marginBottom: '1rem' }}>
                <Progress 
                  value={progress} 
                  showLabel 
                  animated 
                  variant="default"
                />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setProgress(Math.max(0, progress - 10))}
                >
                  -10
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setProgress(Math.min(100, progress + 10))}
                >
                  +10
                </Button>
              </div>
            </Card>

            <Card>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', marginBottom: '1rem', marginTop: '0' }}>
                ☑️ Form Controls
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Checkbox
                  id="cb1"
                  checked={checkboxes.option1}
                  onCheckedChange={(checked) => setCheckboxes(prev => ({ ...prev, option1: checked }))}
                  label="Enable notifications"
                  description="Get notified about important updates"
                />
                <Checkbox
                  id="cb2"
                  checked={checkboxes.option2}
                  onCheckedChange={(checked) => setCheckboxes(prev => ({ ...prev, option2: checked }))}
                  label="Auto-save enabled"
                />
                <Checkbox
                  id="cb3"
                  indeterminate={true}
                  label="Partially selected"
                  description="This checkbox is in an indeterminate state"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feedback Components Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Feedback & Loading</h2>
          <p style={styles.sectionDescription}>
            Components for providing feedback and indicating loading states.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {showAlert && (
              <Alert
                variant="success"
                title="Success!"
                dismissible
                onDismiss={() => setShowAlert(false)}
              >
                Your changes have been saved successfully. All data is now synchronized.
              </Alert>
            )}
            
            <Alert
              variant="warning"
              title="Warning"
              icon="⚠️"
            >
              This action cannot be undone. Please review your changes before proceeding.
            </Alert>

            <Alert
              variant="destructive"
              title="Error"
            >
              Failed to connect to the server. Please check your internet connection and try again.
            </Alert>
          </div>

          <Card>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: '600', marginBottom: '1rem', marginTop: '0' }}>
              💀 Loading States
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Button 
                variant={loading ? "secondary" : "primary"}
                onClick={() => setLoading(!loading)}
              >
                {loading ? "Stop Loading" : "Show Loading"}
              </Button>
            </div>

            {loading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Skeleton variant="circular" />
                  <div style={{ flex: 1 }}>
                    <Skeleton variant="text" width="60%" style={{ marginBottom: '0.5rem' }} />
                    <Skeleton variant="text" width="40%" />
                  </div>
                </div>
                <Skeleton variant="rectangular" height="4rem" />
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <Skeleton variant="rectangular" width="80px" height="32px" />
                  <Skeleton variant="rectangular" width="100px" height="32px" />
                </div>
              </div>
            ) : (
              <div style={{ color: 'hsl(var(--muted-foreground))' }}>
                Click "Show Loading" to see skeleton components in action.
              </div>
            )}
          </Card>

          <div style={styles.codeBlock}>
{`<Alert variant="success" title="Success!" dismissible>
  Your changes have been saved.
</Alert>

<Progress value={75} showLabel animated />

<Skeleton variant="text" width="60%" />
<Skeleton variant="circular" />
<Skeleton variant="rectangular" height="4rem" />`}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
        size="md"
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            This is a fully accessible modal dialog with proper focus management, 
            keyboard navigation, and backdrop handling.
          </p>
          <Input
            id="modal-input"
            label="Enter some text"
            placeholder="Try pressing Tab or Escape"
          />
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Save Changes
          </Button>
        </div>
      </Modal>
    </div>
  );
}
