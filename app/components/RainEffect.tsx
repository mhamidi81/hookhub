"use client";

import { useEffect, useState } from "react";

interface RainDrop {
  id: number;
  left: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const RainEffect = () => {
  const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    // Generate rain drops
    const drops: RainDrop[] = [];
    const numDrops = 100;

    for (let i = 0; i < numDrops; i++) {
      drops.push({
        id: i,
        left: Math.random() * 100,
        duration: Math.random() * 1 + 0.5, // 0.5-1.5s
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
      });
    }

    setRainDrops(drops);
  }, []);

  return (
    <div className="rain-container">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="rain-drop"
          style={{
            left: `${drop.left}%`,
            animationDuration: `${drop.duration}s`,
            animationDelay: `${drop.delay}s`,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
};
