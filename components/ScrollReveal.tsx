'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'fade';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'left',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('reveal-active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  const getDirectionClass = () => {
    switch (direction) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      case 'up':
        return 'reveal-up';
      case 'fade':
        return 'reveal-fade';
      default:
        return 'reveal-left';
    }
  };

  return (
    <div ref={ref} className={`reveal ${getDirectionClass()} ${className}`}>
      {children}
    </div>
  );
}

