import { useCallback } from 'react';
import { useLenis } from 'lenis/react';

const SCROLL_DURATION = 1.5;
const SCROLL_OFFSET = -100;

export function useSmoothScroll() {
  const lenis = useLenis();

  const scrollToSection = useCallback((target) => {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: SCROLL_DURATION,
        offset: SCROLL_OFFSET,
      });
      return;
    }

    if (target === 0 || target === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = typeof target === 'string' ? document.querySelector(target) : target;
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [lenis]);

  const handleAnchorClick = useCallback((event, href) => {
    event.preventDefault();

    if (href === '#' || href === '') {
      scrollToSection(0);
      return;
    }

    scrollToSection(href);
  }, [scrollToSection]);

  return { scrollToSection, handleAnchorClick };
}
