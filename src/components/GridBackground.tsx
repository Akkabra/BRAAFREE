import { useEffect, useState } from "react";

export function GridBackground() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY * 0.05);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-60"
      style={{ transform: `translateY(${-y}px)` }}
    />
  );
}
