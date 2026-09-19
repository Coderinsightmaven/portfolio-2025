'use client';

import { motion, useReducedMotion, type Transition } from 'framer-motion';
import { ReactNode } from 'react';

const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1];

export function FadeIn({ 
  children, 
  delay = 0,
  className = '',
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: easeOut,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ 
  children,
  className = '',
  staggerDelay = 0.1,
}: { 
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({ 
  children,
  className = '',
}: { 
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      variants={{
        hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CardTilt({ 
  children,
  className = '',
}: { 
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      className={className}
      whileHover={{ 
        rotateX: -2,
        rotateY: 4,
        scale: 1.01,
        transition: { duration: 0.25, ease: easeOut }
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ 
  children,
  className = '',
}: { 
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { motion };
