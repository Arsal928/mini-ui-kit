import React from 'react';
import styles from '../styles/card.module.css';

type CardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ children, className, ...props }: CardProps) {
  const cardClasses = [styles?.card || 'card-base', className].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
} 