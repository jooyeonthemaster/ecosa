"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const move = (e: MouseEvent) => {
      dot.animate(
        { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
        { duration: 300, fill: "forwards", easing: "cubic-bezier(0.22,1,0.36,1)" }
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[100] size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 mix-blend-screen blur-[1px] opacity-80"
    />
  );
}
