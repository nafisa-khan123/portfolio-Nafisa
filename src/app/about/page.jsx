'use client';
import Link from 'next/link';
import AnimatedCircle from '../components/AnimatedCircle';
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const certificates = [
  { title: 'AI Fluency Framework & Foundations', image: '/AI-1.png', pdf: '/Framework & foundations.pdf' },
  { title: 'AI Fluency for Students', image: '/AI-2.png', pdf: '/AI for Fluency students.pdf' },
  { title: 'AI Fluency for Educators', image: '/AI-3.png', pdf: '/AI for Fluency educator.pdf' },
  { title: 'Claude 101', image: '/Claude.png', pdf: '/claude 101.pdf' },
  { title: 'AI Fluency for Nonprofits', image: '/AI-4.png', pdf: '/AI for Fluency nonprofit.pdf' },
  { title: 'Teaching AI Fluency', image: '/AI-5.png', pdf: '/Teaching AI Fluency.pdf' },
  { title: 'AI Appreciate Certificate', image: '/Nafisa Khan_AI_APPRECIATE_CERTIFICATE.png', pdf: null },
  { title: 'AI Aware Certificate', image: '/Nafisa Khan_AI_AWARE_CERTIFICATE.png', pdf: null },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 right-10 opacity-20">
        <AnimatedCircle size="medium" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-15">
        <AnimatedCircle size="small" />
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-float-delayed"></div>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-white text-xl font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nafisa Khan
            </h1>
            <div className="inline-flex items-center border border-blue-400/50 rounded-full px-4 py-2 mb-8">
              <span className="text-blue-300 text-sm font-medium">B.Voc in AI & ML</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              I specialize in modern web development and UI/UX design, building responsive
              websites and intelligent web applications. Currently learning AI
              & ML technologies with a future goal of becoming an{' '}
              <span className="text-blue-400 font-semibold">AI & ML Engineer</span>.
            </p>
            <div className="flex items-center gap-4 mb-10">
              <a href="https://www.linkedin.com/in/nafisa-khan-26a730399/" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
                <FaLinkedin className="text-white text-xl" />
              </a>
              <a href="https://github.com/nafisa-khan123" target="_blank" rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/30">
                <FaGithub className="text-white text-xl" />
              </a>
              <a href="#"
                className="w-12 h-12 bg-pink-600 hover:bg-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/30">
                <FaInstagram className="text-white text-xl" />
              </a>
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
              Contact Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FaAward className="text-blue-400 text-3xl" />
            <h2 className="text-4xl font-bold text-white">
              My <span className="text-blue-400">Certificates</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index}
                className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="relative h-48 bg-gray-900 overflow-hidden">
                  <img src={cert.image} alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg mb-4">{cert.title}</h3>
                  {cert.pdf ? (
                    <a href={cert.pdf} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      <FaFilePdf />
                      View Certificate
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  ) : (
                    <a href={cert.image} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      <FaExternalLinkAlt className="text-xs" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
