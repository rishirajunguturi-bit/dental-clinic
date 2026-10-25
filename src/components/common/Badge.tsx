import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lavender' | 'neutral' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'lavender',
  className = '',
}) => {
  const variantStyles = {
    lavender: 'bg-clinic-lavender text-clinic-primary border border-clinic-border/70',
    neutral: 'bg-gray-100 text-clinic-text border border-gray-200',
    outline: 'bg-transparent text-clinic-primary border border-clinic-primary/40',
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
