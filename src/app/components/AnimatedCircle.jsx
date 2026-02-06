'use client';
import { useEffect, useState } from 'react';

export default function AnimatedCircle({ size = 'large', className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-64 h-64',
    xlarge: 'w-80 h-80'
  };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Ring */}
      <div 
        className={`${sizeClasses[size]} rounded-full border-4 border-green-400/30 animate-pulse ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } transition-all duration-1000 ease-out`}
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 50%, transparent 70%)',
          boxShadow: '0 0 50px rgba(34, 197, 94, 0.3), inset 0 0 50px rgba(34, 197, 94, 0.1)'
        }}
      >
        {/* Middle Ring */}
        <div 
          className="absolute inset-8 rounded-full border-2 border-green-400/50 animate-spin"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 60%, transparent 80%)',
            animationDuration: '8s',
            animationDirection: 'reverse'
          }}
        >
          {/* Inner Circle */}
          <div 
            className="absolute inset-8 rounded-full bg-green-500 animate-pulse"
            style={{
              background: 'radial-gradient(circle, #22c55e 0%, #16a34a 70%)',
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Core Glow */}
            <div 
              className="absolute inset-2 rounded-full bg-green-400/80 animate-ping"
              style={{
                animationDuration: '2s'
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60"
            style={{
              top: `${20 + Math.sin(i * 60) * 30}%`,
              left: `${20 + Math.cos(i * 60) * 30}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
}