import React from 'react';
import styles from '../styles/alert.module.css';
import Button from './Button';

type AlertProps = {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'warning' | 'success';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const defaultIcons = {
  default: 'ℹ️',
  destructive: '❌',
  warning: '⚠️',
  success: '✅',
};

export default function Alert({
  children,
  variant = 'default',
  title,
  dismissible = false,
  onDismiss,
  icon,
  className,
  ...props
}: AlertProps) {
  const alertClasses = [
    styles?.alert || 'alert-base',
    styles?.[variant] || `alert-${variant}`,
    className
  ].filter(Boolean).join(' ');

  const displayIcon = icon !== undefined ? icon : defaultIcons[variant];

  return (
    <div className={alertClasses} role="alert" {...props}>
      <div className={styles?.content || 'alert-content'}>
        {displayIcon && (
          <div className={styles?.icon || 'alert-icon'}>
            {displayIcon}
          </div>
        )}
        <div className={styles?.body || 'alert-body'}>
          {title && (
            <div className={styles?.title || 'alert-title'}>
              {title}
            </div>
          )}
          <div className={styles?.description || 'alert-description'}>
            {children}
          </div>
        </div>
      </div>
      {dismissible && onDismiss && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onDismiss}
          className={styles?.dismiss || 'alert-dismiss'}
          aria-label="Dismiss alert"
        >
          ✕
        </Button>
      )}
    </div>
  );
} 