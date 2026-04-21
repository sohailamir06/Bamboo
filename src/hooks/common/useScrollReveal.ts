import { useEffect } from 'react';

/**
 * Hook to handle scroll animations using Intersection Observer
 * @param selector CSS selector for elements to observe
 * @param options Intersection Observer options
 */
export const useScrollReveal = (
  selector: string = '.scroll-animate',
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [selector, options]);
};
