'use client';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 85, color: 'bg-blue-500' },
    { name: 'Next.js', level: 80, color: 'bg-gray-800' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
    { name: 'Python', level: 70, color: 'bg-blue-600' },
    { name: 'UI/UX Design', level: 85, color: 'bg-purple-500' },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development team, building scalable web applications using React and Next.js.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed end-to-end web solutions for various clients using modern web technologies.'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Co.',
      period: '2019 - 2020',
      description: 'Started my journey in web development, focusing on frontend technologies and user experience.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2015 - 2019',
      description: 'Specialized in software engineering and web development.'
    },
    {
      degree: 'Web Development Bootcamp',
      institution: 'Code Academy',
      period: '2019',
      description: 'Intensive program focusing on modern web development technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-white/20 flex items-center justify-center">
                    <div className="text-8xl">👩‍💻</div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                About{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a passionate developer with over 1 years of experience creating digital experiences 
                that make a difference. I love turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {/* <div className="bg-white px-6 py-3 rounded-full shadow-md">
                  <span className="text-purple-600 font-semibold">4+ Years Experience</span>
                </div> */}
                <div className="bg-white px-6 py-3 rounded-full shadow-md">
                  <span className="text-purple-600 font-semibold">5+ Projects</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-md">
                  <span className="text-purple-600 font-semibold">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'skills'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-purple-600'
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
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                    <span className="text-purple-600 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
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
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <span className="text-purple-600 font-semibold">{exp.period}</span>
                  </div>
                  <h4 className="text-lg text-purple-600 font-semibold mb-3">{exp.company}</h4>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="space-y-8 animate-fadeIn">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-pink-600 font-semibold">{edu.period}</span>
                  </div>
                  <h4 className="text-lg text-pink-600 font-semibold mb-3">{edu.institution}</h4>
                  <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Fun Facts About Me
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">☕</div>
              <div className="text-2xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Cups of Coffee</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🚀</div>
              <div className="text-2xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🌟</div>
              <div className="text-2xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-gray-600">GitHub Stars</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Learning Mode</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}