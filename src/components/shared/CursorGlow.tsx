"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(
          300px at ${pos.x}px ${pos.y}px,
          rgba(123,108,255,0.15),
          transparent 70%
        )`,
      }}
    />
  );
}
