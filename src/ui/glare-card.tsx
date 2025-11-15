"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
          const { left, top } = containerRef.current.getBoundingClientRect();
          const x = e.clientX - left;
          const y = e.clientY - top;
          containerRef.current.style.setProperty("--glare-x", `${x}px`);
          containerRef.current.style.setProperty("--glare-y", `${y}px`);
        }
      }}
      onMouseEnter={() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty("--glare-opacity", "1");
        }
      }}
      onMouseLeave={() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty("--glare-opacity", "0");
        }
      }}
      style={
        {
          "--glare-x": "50%",
          "--glare-y": "50%",
          "--glare-opacity": "0",
          "--glare-width": `${dimensions.width}px`,
          "--glare-height": `${dimensions.height}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative bg-gray-800 backdrop-blur-lg rounded-lg overflow-hidden",
        "before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--glare-x)_var(--glare-y),rgba(255,255,255,0.2)_0%,transparent_50%)]",
        "before:opacity-[var(--glare-opacity)] before:transition-opacity before:duration-300 before:pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
};
