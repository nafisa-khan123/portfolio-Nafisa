'use client';
import AnimatedCircle from './components/AnimatedCircle';

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <AnimatedCircle size="large" />
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Loading...</h2>
          <p className="text-gray-400">Please wait while we prepare your experience</p>
        </div>
      </div>
    </div>
  );
}