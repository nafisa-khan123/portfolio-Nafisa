'use client';
import AnimatedCircle from '../components/AnimatedCircle';
import { FaLaptopCode } from 'react-icons/fa';

export default function About() {

  return (
    <div className="min-h-screen bg-slate-900 pt-20 relative overflow-hidden">
      {/* Background Animated Circles */}
      <div className="absolute top-20 right-10 opacity-20">
        <AnimatedCircle size="medium" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-15">
        <AnimatedCircle size="small" />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-white/10 flex items-center justify-center">
                    <FaLaptopCode className="text-8xl text-white" />
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                About{' '}
                <span className="text-blue-400">
                  Nafisa Khan
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a passionate web developer with experience in creating modern, 
                responsive websites and applications. I love solving problems through code 
                and creating digital experiences that make a difference.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, learning 
                about design trends, or contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}