import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  title?: string;
  type: 'delete' | 'add' | 'edit' | 'submit' | 'close';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type, disabled = false, title }) => (
  <button disabled={disabled} title={title} className={`${styles[type]} ${styles.button}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
