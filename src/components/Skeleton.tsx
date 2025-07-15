import React from 'react';
import styles from '../styles/skeleton.module.css';

type SkeletonProps = {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
} & React.HTMLAttributes<HTMLDivElement>;

export default function Skeleton({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  className,
  style,
  ...props
}: SkeletonProps) {
  const skeletonClasses = [
    styles?.skeleton || 'skeleton-base',
    styles?.[variant] || `skeleton-${variant}`,
    animation !== 'none' && (styles?.[animation] || `skeleton-${animation}`),
    className
  ].filter(Boolean).join(' ');

  const skeletonStyles = {
    width,
    height,
    ...style,
  };

  return (
    <div
      className={skeletonClasses}
      style={skeletonStyles}
      aria-label="Loading..."
      role="status"
      {...props}
    />
  );
} 