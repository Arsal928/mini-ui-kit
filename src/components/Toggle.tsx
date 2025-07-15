import React from 'react';
import styles from '../styles/toggle.module.css';

type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  id?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked' | 'type'>;

export default function Toggle({ 
  checked, 
  onChange, 
  label, 
  id,
  className,
  ...props 
}: ToggleProps) {
  const toggleClasses = [styles?.toggle || 'toggle', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles?.toggleWrapper || 'toggle-wrapper'}>
      <label htmlFor={id} className={styles?.toggleLabel || 'toggle-label'}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={styles?.toggleInput || 'toggle-input'}
          {...props}
        />
        <span className={toggleClasses}>
          <span className={styles?.toggleSlider || 'toggle-slider'} />
        </span>
        {label && <span className={styles?.labelText || 'label-text'}>{label}</span>}
      </label>
    </div>
  );
} 