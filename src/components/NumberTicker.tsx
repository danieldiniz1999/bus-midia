import { useEffect, useRef, useState } from "react";

interface NumberTickerProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  formatter?: (n: number) => string;
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
  className = "",
  formatter,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              // ease-out-cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(value * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted = formatter
    ? formatter(display)
    : display.toLocaleString("pt-BR");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
