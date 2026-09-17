import { useEffect } from 'react';

export function useFadeIn() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = Array.from(document.querySelectorAll('[data-animate="fade-in"]'))
      .filter(el => !el.closest('#faq, #kontakt, #galeria') && el.closest('section')?.id);

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(el => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
      return;
    }

    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '1';
      htmlEl.style.transform = 'translateY(12px)';
      htmlEl.style.transition = 'transform 0.3s ease-out';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 40px 0px' }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      elements.forEach(el => {
        const element = el as HTMLElement;
        element.style.removeProperty('opacity');
        element.style.removeProperty('transform');
        element.style.removeProperty('transition');
      });
    };
  }, []);
}
