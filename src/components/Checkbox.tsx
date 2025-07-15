import React from 'react';
import styles from '../styles/checkbox.module.css';

type CheckboxProps = {
  checked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  id?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked'>;

export default function Checkbox({
  checked = false,
  indeterminate = false,
  onCheckedChange,
  label,
  description,
  id,
  className,
  disabled,
  ...props
}: CheckboxProps) {
  const checkboxClasses = [
    styles?.checkbox || 'checkbox-base',
    checked && (styles?.checked || 'checkbox-checked'),
    indeterminate && (styles?.indeterminate || 'checkbox-indeterminate'),
    disabled && (styles?.disabled || 'checkbox-disabled'),
    className
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked);
  };

  return (
    <div className={styles?.wrapper || 'checkbox-wrapper'}>
      <div className={styles?.container || 'checkbox-container'}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className={styles?.input || 'checkbox-input'}
          ref={(input) => {
            if (input) input.indeterminate = indeterminate;
          }}
          {...props}
        />
        <div className={checkboxClasses}>
          {checked && !indeterminate && (
            <svg
              className={styles?.checkIcon || 'checkbox-check-icon'}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {indeterminate && (
            <svg
              className={styles?.indeterminateIcon || 'checkbox-indeterminate-icon'}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      </div>
      {(label || description) && (
        <div className={styles?.content || 'checkbox-content'}>
          {label && (
            <label 
              htmlFor={id} 
              className={styles?.label || 'checkbox-label'}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={styles?.description || 'checkbox-description'}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
} 