'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav?.classList.add('shadow-lg');
      } else {
        nav?.classList.remove('shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="bg-gray-50 text-gray-800">
        {/* Navigation */}
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <a href="#" className="text-2xl font-bold gradient-text">NK</a>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-700 hover:text-purple-600 transition duration-300">Home</a>
                <a href="#about" className="text-gray-700 hover:text-purple-600 transition duration-300">About</a>
                <a href="#skills" className="text-gray-700 hover:text-purple-600 transition duration-300">Skills</a>
                <a href="#projects" className="text-gray-700 hover:text-purple-600 transition duration-300">Projects</a>
                <a href="#contact" className="text-gray-700 hover:text-purple-600 transition duration-300">Contact</a>
              </div>
              
              {/* CTA Button */}
              <div className="hidden md:block">
                <a href="#contact" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition duration-300">
                  Contact Me
                </a>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:text-purple-600 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">Skills</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">Projects</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center md:text-left space-y-6 fade-in-up">
                <div className="inline-block">
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Welcome to my portfolio
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Hi, I&apos;m <span className="gradient-text">Nafisa Khan</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600">
                  Web Developer & Designer
                </p>
                <p className="text-lg text-gray-600 max-w-lg">
                  Crafting beautiful, functional, and user-friendly websites with modern technologies. 
                  Passionate about creating seamless digital experiences.
                </p>
                <div className="flex gap-4 justify-center md:justify-start pt-4">
                  <a href="#projects" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition duration-300 transform hover:scale-105">
                    View My Work
                  </a>
                  <a href="#contact" className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition duration-300">
                    Contact Me
                  </a>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="flex justify-center md:justify-end">
                <div className="relative float-animation">
                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                      {/* Placeholder for image - replace with actual image */}
                      <svg className="w-40 h-40 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      {/* To use actual image, replace above SVG with: */}
                      {/* <img src="your-image.jpg" alt="Nafisa Khan" className="w-full h-full object-cover" /> */}
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-300 rounded-full opacity-50 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-300 rounded-full opacity-50 blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  I&apos;m a passionate web developer and designer with expertise in creating modern, 
                  responsive websites. With a strong foundation in HTML, CSS, and Tailwind CSS, 
                  I bring designs to life with pixel-perfect precision.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently expanding my skill set with Node.js, Express.js, React.js, and advanced 
                  JavaScript to build full-stack applications. I believe in continuous learning and 
                  staying updated with the latest web technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether it&apos;s WordPress development, crafting custom designs in Figma, or building 
                  interactive web applications, I&apos;m committed to delivering high-quality solutions 
                  that exceed expectations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl text-center card-hover">
                  <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl text-center card-hover">
                  <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl text-center card-hover">
                  <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl text-center card-hover">
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Technologies and tools I work with to bring ideas to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Current Skills */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-green-100 text-green-600 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  Proficient In
                </h3>
                <div className="space-y-4">
                  <div className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">HTML & CSS</span>
                      <span className="text-purple-600 font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">Tailwind CSS</span>
                      <span className="text-purple-600 font-semibold">70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">WordPress</span>
                      <span className="text-purple-600 font-semibold">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">Figma</span>
                      <span className="text-purple-600 font-semibold">89%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Learning Skills */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </span>
                  Currently Learning
                </h3>
                <div className="space-y-4">
                  <div className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">JavaScript</span>
                      <span className="text-purple-600 font-semibold">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">React.js</span>
                      <span className="text-purple-600 font-semibold">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">Node.js</span>
                      <span className="text-purple-600 font-semibold">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  
                  <div className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">Express.js</span>
                      <span className="text-purple-600 font-semibold">%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{width: '58%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A showcase of my recent work and personal projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                {/* Add your project image here */}
                <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce Website</h3>
                  <p className="text-gray-600 mb-4">A fully responsive e-commerce platform built with HTML, CSS, and Tailwind CSS featuring product listings and cart functionality.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">HTML</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">CSS</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Tailwind</span>
                  </div>
                  {/* Add your project link here */}
                  <a href="#" className="text-purple-600 font-semibold hover:text-purple-800 transition duration-300">
                    View Project →
                  </a>
                </div>
              </div>
              
              {/* Project Card 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                {/* Add your project image here */}
                <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Portfolio Website</h3>
                  <p className="text-gray-600 mb-4">A creative portfolio website designed in Figma and developed with modern web technologies for a client.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Figma</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">HTML</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">CSS</span>
                  </div>
                  {/* Add your project link here */}
                  <a href="#" className="text-purple-600 font-semibold hover:text-purple-800 transition duration-300">
                    View Project →
                  </a>
                </div>
              </div>
              
              {/* Project Card 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100">
                {/* Add your project image here */}
                <div className="h-48 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Blog</h3>
                  <p className="text-gray-600 mb-4">A custom WordPress blog with custom theme development, focusing on performance and SEO optimization.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">WordPress</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">PHP</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">CSS</span>
                  </div>
                  {/* Add your project link here */}
                  <a href="#" className="text-purple-600 font-semibold hover:text-purple-800 transition duration-300">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Let&apos;s connect and create something amazing together!
              </p>
            </div>
            
            {/* Contact Links */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* WhatsApp */}
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:transform hover:scale-110 transition duration-300">
                <div className="bg-green-600 p-4 rounded-full group-hover:shadow-lg group-hover:shadow-green-500/50 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-purple-600 font-medium transition duration-300">WhatsApp</span>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:transform hover:scale-110 transition duration-300">
                <div className="bg-blue-600 p-4 rounded-full group-hover:shadow-lg group-hover:shadow-blue-500/50 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-purple-600 font-medium transition duration-300">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 hover:transform hover:scale-110 transition duration-300">
                <div className="bg-gray-700 p-4 rounded-full group-hover:shadow-lg group-hover:shadow-gray-500/50 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-purple-600 font-medium transition duration-300">GitHub</span>
              </a>

              {/* Gmail */}
              <a href="mailto:nafisa.khan@gmail.com" className="group flex flex-col items-center gap-2 hover:transform hover:scale-110 transition duration-300">
                <div className="bg-red-600 p-4 rounded-full group-hover:shadow-lg group-hover:shadow-red-500/50 transition duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-purple-600 font-medium transition duration-300">Gmail</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Nafisa Khan. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-4 md:mt-0">
                Made with <span className="text-red-500">❤</span> and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}