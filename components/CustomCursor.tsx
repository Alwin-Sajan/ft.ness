// components/CustomCursor.tsx
"use client";

import { motion, useMotionValue, useSpring } from  "motion/react";
import { useEffect } from "react";

const CustomCursor = () => {
  const mouseX = useMotionValue(-150);
  const mouseY = useMotionValue(-150);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  );
};

export default CustomCursor;
