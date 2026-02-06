'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AnimatedCircle from './components/AnimatedCircle';
import { FaHandPaper, FaEnvelope, FaJs, FaReact, FaNodeJs, FaHtml5, FaFigma, FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function Home() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('skills');
  const [activeProjectFilter, setActiveProjectFilter] = useState('All Projects');
  const texts = ['Frontend Developer', 'UI/UX Designer', 'Web Developer', 'Creative Developer'];

  const skills = [
    { name: 'JavaScript', level: 40, color: 'bg-yellow-500', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React', level: 30, color: 'bg-blue-500', icon: <FaReact className="text-blue-500" /> },
    { name: 'Next.js', level: 50, color: 'bg-gray-300', icon: <SiNextdotjs className="text-gray-300" /> },
    { name: 'Node.js', level: 35, color: 'bg-green-500', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'Figma', level: 85, color: 'bg-purple-500', icon: <FaFigma className="text-purple-500" /> },
    { name: 'Prototyping', level: 80, color: 'bg-cyan-500', icon: <FaFigma className="text-cyan-500" /> },
  ];

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      period: '2025 - 2026',
      description: 'Building responsive web applications using React and Next.js.'
    },
    {
      title: 'UI/UX Designer',
      company: 'Figma',
      period: '2025 - 2026',
      description: 'Designing user interfaces and experiences for web and mobile applications using Figma and modern design principles.'
    }
  ];

  const education = [
    {
      degree: 'B.Voc in AI & ML',
      institution: 'Nexcore Institute of Technology',
      period: '2025 - 2028',
      description: 'Specialized in web development and UI/UX designer.'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Gozoop E-Commerce Platform',
      description: 'A comprehensive e-commerce platform with modern UI/UX design, featuring product catalogs, shopping cart, and user management.',
      category: 'Web Development',
      featured: true,
      image: '/gozoop.png',
      technologies: ['React', 'Next.js', 'Tailwind'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Snapdael AI Platform',
      description: 'Advanced AI-powered platform for image analysis and machine learning applications with modern interface design.',
      category: 'AI & ML',
      featured: true,
      image: '/snapdael.png',
      technologies: ['Python', 'TensorFlow', 'React'],
      liveDemo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website Design',
      description: 'A collection of elegant and feminine portfolio designs for creative professionals, featuring soft gradients and beautiful animations.',
      category: 'UI/UX Design',
      featured: false,
      image: '/image.png',
      technologies: ['Figma', 'Adobe XD'],
      liveDemo: '#',
      github: '#'
    }
  ];

  const projectCategories = ['All Projects', 'Web Development', 'AI & ML', 'UI/UX Design'];

  const filteredProjects = activeProjectFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeProjectFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-60 left-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-500"></div>
        
        {/* Animated Circle - Top Right */}
        <div className="absolute top-10 right-10 opacity-30">
          <AnimatedCircle size="medium" />
        </div>
        
        {/* Animated Circle - Bottom Left */}
        <div className="absolute bottom-10 left-10 opacity-20">
          <AnimatedCircle size="small" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-left">
            {/* Greeting */}
            <div className="flex items-center mb-8">
              <FaHandPaper className="text-2xl mr-3 text-yellow-400" />
              <span className="text-gray-300 text-lg">Hi, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Nafisa Khan
            </h1>

            {/* Role */}
            <div className="mb-8">
              <span className="text-gray-300 text-2xl lg:text-3xl">And I'm a </span>
              <span className="text-blue-400 text-2xl lg:text-3xl font-semibold transition-all duration-500">
                {currentText}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg lg:text-xl max-w-3xl leading-relaxed mb-12">
              I design modern user interfaces in <span className="text-purple-400 font-semibold">Figma</span> and build fully responsive websites with <span className="text-cyan-400 font-semibold">clean code</span>. I turn ideas into reality through modern design and development.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/about"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center"
              >
                <span className="mr-2">→</span>
                View Projects
              </Link>
              <Link 
                href="/contact"
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 text-center flex items-center justify-center"
              >
                <FaEnvelope className="mr-2" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Experience/Education Section */}
      <section className="py-16 px-4 bg-gray-800/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-full p-2 shadow-lg border border-gray-700">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-fadeIn">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-blue-400 font-semibold">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-purple-400 font-semibold mb-3">{exp.company}</h4>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8 animate-fadeIn">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <span className="text-cyan-400 font-semibold">{edu.period}</span>
                  </div>
                  <h4 className="text-lg text-cyan-400 font-semibold mb-3">{edu.institution}</h4>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              My <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my creative journey through beautiful digital experiences
            </p>
          </div>

          {/* Project Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveProjectFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProjectFilter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-600'
                }`}
              >
                {category === 'All Projects' && <FaStar className="inline mr-2" />}
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-700"
              >
                {/* Project Image */}
                <div className={`relative h-64 overflow-hidden ${
                  project.id === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                  project.id === 2 ? 'bg-gradient-to-br from-slate-700 to-slate-900' :
                  'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}>
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <FaStar className="mr-1" />
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.liveDemo}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.github}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  {/* Project Image */}
                  <div className="w-full h-full flex items-center justify-center p-4">
                    {project.id === 1 ? (
                      <img 
                        src="/gozoop.png" 
                        alt="Gozoop E-commerce Platform"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : project.id === 2 ? (
                      <img 
                        src="/snapdael.png" 
                        alt="Snapdael AI Platform"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : project.id === 3 ? (
                      <img 
                        src="/image.png" 
                        alt="Portfolio Website Design"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-4xl">👤</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      project.category === 'Web Development' ? 'bg-blue-500/20 text-blue-400' :
                      project.category === 'AI & ML' ? 'bg-purple-500/20 text-purple-400' :
                      project.category === 'UI/UX Design' ? 'bg-pink-500/20 text-pink-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Center Animated Circle */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-10">
        <AnimatedCircle size="xlarge" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-500">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}