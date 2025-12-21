import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible
    ? "animate-slide-in-left"
    : "opacity-0 translate-x-[-50px]";

  return (
    <div ref={elementRef} className={`transition-all duration-700 ${animationClass}`}>
      {children}
    </div>
  );
}
