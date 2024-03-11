
import React, { FC, MouseEvent, KeyboardEvent, FocusEvent } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  background?: string;
  color?: string;
  borderRadius?: string;
  theme?: 'filled' | 'outline';
  onClick?: (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  size = 'medium',
  background = '#ffffff',
  color = '#000000',
  borderRadius = '5px',
  theme = 'filled',
  onClick,
}) => {
  const handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick && onClick(event);
    }
  };

  const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
    (event.target as HTMLButtonElement).style.backgroundColor = styles.lighten;
  };

  const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
    (event.target as HTMLButtonElement).style.backgroundColor = background;
  };

  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[theme]}`}
      style={{
        backgroundColor: background,
        color: color,
        borderRadius: borderRadius,
      }}
      onClick={onClick}
      onKeyDown={handleKeyPress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      {children}
    </button>
  );
};

export default Button;