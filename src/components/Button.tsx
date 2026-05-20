import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300',
        'disabled:cursor-not-allowed disabled:opacity-50',
        {
          'bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95':
            variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:scale-95':
            variant === 'secondary',
          'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground':
            variant === 'outline',
          'bg-transparent text-foreground hover:bg-muted': variant === 'ghost',
          'bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.28)] hover:bg-[#1ebe5d] hover:shadow-[0_14px_36px_rgba(37,211,102,0.36)] active:scale-95':
            variant === 'whatsapp',
          'h-8 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-base': size === 'md',
          'h-12 px-6 text-lg': size === 'lg',
          'w-full': fullWidth,
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
