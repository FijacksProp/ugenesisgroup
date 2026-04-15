import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericPart = value.replace(/[^0-9.]/g, "");
    const prefix = value.startsWith("$") ? "$" : "";
    const suffix = value.replace(/^[^0-9]*[\d.]+/, "");
    const target = parseFloat(numericPart);

    if (isNaN(target)) {
      setDisplayed(value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = target * eased;
      setDisplayed(`${prefix}${Math.floor(start)}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplayed(value);
    };

    const timer = setTimeout(() => requestAnimationFrame(animate), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay, isInView, value]);

  return (
    <AnimatedSection delay={delay}>
      <div ref={ref} className="premium-card p-8 text-center">
        <div className="mb-3 text-4xl font-semibold text-gradient md:text-5xl lg:text-6xl">
          {displayed}
        </div>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
      </div>
    </AnimatedSection>
  );
};

export default StatCard;
