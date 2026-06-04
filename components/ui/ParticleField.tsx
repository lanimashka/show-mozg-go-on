"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 44 }, (_, index) => ({
  id: index,
  x: `${(index * 37) % 100}%`,
  y: `${(index * 61) % 100}%`,
  size: index % 5 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
  delay: (index % 9) * 0.4
}));

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/70 shadow-[0_0_16px_rgba(5,242,219,0.72)]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            opacity: [0.12, 0.9, 0.18],
            y: [0, -18, 0],
            x: [0, particle.id % 2 ? 10 : -10, 0]
          }}
          transition={{
            duration: 6 + (particle.id % 6),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
