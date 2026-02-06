'use client';
import AnimatedCircle from '../components/AnimatedCircle';

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-white text-center mb-4">
          Animated Circle Components
        </h1>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Beautiful animated circles with glowing effects
        </p>

        {/* Different Sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="text-center">
            <h3 className="text-white font-semibold mb-6 text-xl">Small</h3>
            <div className="flex justify-center">
              <AnimatedCircle size="small" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-white font-semibold mb-6 text-xl">Medium</h3>
            <div className="flex justify-center">
              <AnimatedCircle size="medium" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-white font-semibold mb-6 text-xl">Large</h3>
            <div className="flex justify-center">
              <AnimatedCircle size="large" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-white font-semibold mb-6 text-xl">X-Large</h3>
            <div className="flex justify-center">
              <AnimatedCircle size="xlarge" />
            </div>
          </div>
        </div>

        {/* Full Screen Demo */}
        <div className="bg-gray-800/50 rounded-3xl p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Full Screen Effect
          </h2>
          <div className="relative h-96 bg-slate-900 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatedCircle size="xlarge" />
            </div>
            <div className="absolute top-10 right-10 opacity-40">
              <AnimatedCircle size="small" />
            </div>
            <div className="absolute bottom-10 left-10 opacity-30">
              <AnimatedCircle size="medium" />
            </div>
          </div>
        </div>

        {/* Usage Info */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">How to Use</h3>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm text-green-400">
            <code>
              {`import AnimatedCircle from './components/AnimatedCircle';

// Basic usage
<AnimatedCircle size="medium" />

// Available sizes: 'small', 'medium', 'large', 'xlarge'
<AnimatedCircle size="large" className="opacity-50" />`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}