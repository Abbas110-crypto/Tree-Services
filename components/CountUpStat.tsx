"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  end: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export default function CountUpStat({
  end,
  suffix = "",
  label,
  decimals = 0,
}: CountUpStatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        const duration = 1500;
        const startTime = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setValue(end * eased);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(element);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  const displayValue =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString("en-US");

  return (
    <div ref={ref}>
      <p className="stat-value font-display text-3xl text-ember-soft">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-background/70">{label}</p>
    </div>
  );
}
