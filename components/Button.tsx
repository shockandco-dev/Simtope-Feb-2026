import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30",
    secondary: "bg-brand-surface text-brand-text-primary hover:bg-brand-dark border border-brand-border",
    outline: "bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary/10",
    ghost: "bg-transparent text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-surface",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};