import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/modal.module.css';
import Button from './Button';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  className,
  ...props
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      previousActiveElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalClasses = [
    styles?.modal || 'modal-base',
    styles?.[size] || `modal-${size}`,
    className
  ].filter(Boolean).join(' ');

  const modalContent = (
    <div className={styles?.overlay || 'modal-overlay'} onClick={onClose}>
      <div
        ref={modalRef}
        className={modalClasses}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        tabIndex={-1}
        {...props}
      >
        {(title || showCloseButton) && (
          <div className={styles?.header || 'modal-header'}>
            {title && (
              <h2 id="modal-title" className={styles?.title || 'modal-title'}>
                {title}
              </h2>
            )}
            {showCloseButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close modal"
                className={styles?.closeButton || 'modal-close'}
              >
                ✕
              </Button>
            )}
          </div>
        )}
        <div className={styles?.content || 'modal-content'}>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
} 