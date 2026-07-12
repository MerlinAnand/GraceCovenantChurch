import React from 'react';
import { useInView } from '../hooks/useInView';

type RevealVariant = 'up' | 'down' | 'right';

const variantClass: Record<RevealVariant, string> = {
  up: 'animate-fade-in-up',
  down: 'animate-fade-in-down',
  right: 'animate-slide-in-right',
};

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, variant = 'up', delay = 0, className = '' }) => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${isInView ? variantClass[variant] : 'opacity-0'} ${className}`}
      style={isInView && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
