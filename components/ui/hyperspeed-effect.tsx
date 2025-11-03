"use client";
import { useEffect, useRef } from "react";

interface HyperspeedEffectProps {
  lineCount?: number;
  speed?: number;
  color?: string;
  opacity?: number;
}

export default function HyperspeedEffect({
  lineCount = 50,
  speed = 2,
  color = "#ea6a61",
  opacity = 0.6
}: HyperspeedEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const lines: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];

    // Initialize lines
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: (Math.random() * speed + 1) * 2,
        opacity: Math.random() * opacity + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        // Update position
        line.x += line.speed;

        // Reset line when it goes off screen
        if (line.x > canvas.width + line.length) {
          line.x = -line.length;
          line.y = Math.random() * canvas.height;
          line.speed = (Math.random() * speed + 1) * 2;
        }

        // Draw line
        ctx.beginPath();
        ctx.strokeStyle = `${color}${Math.floor(line.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [lineCount, speed, color, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}