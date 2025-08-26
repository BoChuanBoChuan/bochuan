import { useEffect, useRef, useState } from "react";

export function useFadeInOnScroll(threshold = 0, rootMargin = "0px 0px -30% 0px") {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ✅ Fallback cho mobile: auto visible
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return [ref, visible];
}
