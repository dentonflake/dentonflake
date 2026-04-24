"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouse = { x: 0, y: 0 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    // Orb class for the background effect
    class Orb {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
      angle: number;
      speed: number;

      constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.radius = radius;
        this.color = color;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.005 + Math.random() * 0.01;
      }

      update() {
        this.angle += this.speed;
        this.x = this.baseX + Math.cos(this.angle) * 50;
        this.y = this.baseY + Math.sin(this.angle) * 50;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 300) {
          this.x -= dx * 0.05;
          this.y -= dy * 0.05;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const orbs: Orb[] = [
      new Orb(width * 0.2, height * 0.3, 400, "rgba(212, 175, 55, 0.08)"), // Champagne Gold
      new Orb(width * 0.8, height * 0.7, 500, "rgba(229, 231, 235, 0.05)"),  // Prism Silver
      new Orb(width * 0.5, height * 0.5, 300, "rgba(212, 175, 55, 0.04)"),
    ];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      orbs.forEach((orb) => {
        orb.update();
        orb.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        filter: "blur(60px)",
      }}
    />
  );
}
