"use client";

import { motion } from "framer-motion";

export function FooterAmbientGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-0 overflow-hidden"
    >
      {/* Delicate light-mode architectural grid masked smoothly toward edges */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #172554 1px, transparent 1px), linear-gradient(to bottom, #172554 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 25%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 25%, #000 30%, transparent 100%)",
        }}
      />

      {/* Slowly drifting soft Violet glow on white */}
      <motion.div
        animate={{
          x: [0, 22, 0],
          y: [0, -14, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-28 left-[8%] h-96 w-96 rounded-full bg-[#7C3AED]/[0.07] blur-[110px]"
      />

      {/* Slowly drifting soft Teal glow on white */}
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 16, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-[6%] h-96 w-96 rounded-full bg-[#0D9488]/[0.07] blur-[115px]"
      />

      {/* Subtle warm Coral glow near bottom */}
      <div className="absolute -bottom-28 left-1/2 h-64 w-80 -translate-x-1/2 rounded-full bg-[#F97360]/[0.06] blur-[100px]" />
    </div>
  );
}
