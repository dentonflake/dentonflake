"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Rotation based on movement speed/direction
  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, { damping: 20, stiffness: 100 });

  useEffect(() => {
    // Check for touch device
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);

    let lastX = 0;
    let lastY = 0;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Calculate simple rotation based on movement
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        rotation.set(angle + 90); // Adjusting so the point of triangle faces movement
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest("a") || 
        target.closest("button") || 
        target.classList.contains("clickable") ||
        target.tagName === "BUTTON";
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY, rotation]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        pointerEvents: "none",
        zIndex: 10000,
        x: springX,
        y: springY,
        rotate: springRotation,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* The Triangle Prism */}
      <motion.svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.path
          d="M10 2L18 16H2L10 2Z"
          stroke="var(--accent)"
          strokeWidth="1.5"
          fill={isHovering ? "var(--accent)" : "transparent"}
          initial={{ fillOpacity: 0 }}
          animate={{ 
            fillOpacity: isHovering ? 0.2 : 0,
            strokeWidth: isHovering ? 1 : 1.5 
          }}
        />
        {/* Inner core dot */}
        <circle cx="10" cy="11" r="1.5" fill="var(--accent)" />
      </motion.svg>

      {/* Glow Effect */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "var(--accent)",
          filter: "blur(20px)",
          opacity: 0.15,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: -1,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 0.15,
        }}
      />
    </motion.div>
  );
}
