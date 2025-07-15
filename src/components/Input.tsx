import React from 'react';
import styles from '../styles/input.module.css';

type InputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className={styles?.inputWrapper || 'input-wrapper'}>
      {label && <label htmlFor={id} className={styles?.label || 'input-label'}>{label}</label>}
      <input id={id} className={styles?.input || 'input-field'} {...props} />
    </div>
  );
} 