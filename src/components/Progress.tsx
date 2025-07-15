import React from 'react';
import styles from '../styles/progress.module.css';

type ProgressProps = {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Progress({
  value,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  label,
  animated = false,
  className,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const progressClasses = [
    styles?.progress || 'progress-base',
    styles?.[size] || `progress-${size}`,
    animated && (styles?.animated || 'progress-animated'),
    className
  ].filter(Boolean).join(' ');

  const barClasses = [
    styles?.bar || 'progress-bar',
    styles?.[variant] || `progress-${variant}`,
  ].filter(Boolean).join(' ');

  return (
    <div className={progressClasses} {...props}>
      {(showLabel || label) && (
        <div className={styles?.labelContainer || 'progress-label-container'}>
          <span className={styles?.label || 'progress-label'}>
            {label || `${Math.round(percentage)}%`}
          </span>
        </div>
      )}
      <div 
        className={styles?.track || 'progress-track'}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || `${Math.round(percentage)}% complete`}
      >
        <div
          className={barClasses}
          style={{ 
            width: `${percentage}%`,
            transition: animated ? 'width 0.3s ease-in-out' : 'none'
          }}
        />
      </div>
    </div>
  );
} 