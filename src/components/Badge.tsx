import React from 'react';
import styles from '../styles/badge.module.css';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
} & React.HTMLAttributes<HTMLSpanElement>;

export default function Badge({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className, 
  ...props 
}: BadgeProps) {
  const badgeClasses = [
    styles?.badge || 'badge',
    styles?.[variant] || variant,
    styles?.[size] || size,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
} 