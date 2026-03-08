import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, stagger }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`.trim()}
      style={stagger != null ? { '--reveal-delay': `${stagger}ms` } : delay ? { '--reveal-delay': `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
