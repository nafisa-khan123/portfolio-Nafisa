'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Circle */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-5 h-5 rounded-full bg-green-500 opacity-80 animate-pulse"></div>
      </div>

      {/* Outer Ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="w-10 h-10 rounded-full border border-green-400/50 animate-spin"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 50%, transparent 70%)',
            animationDuration: '3s'
          }}
        ></div>
      </div>

      {/* Inner Glow */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div 
          className="w-16 h-16 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 40%, transparent 70%)',
            filter: 'blur(8px)',
            animationDuration: '2s'
          }}
        ></div>
      </div>
    </>
  );
}