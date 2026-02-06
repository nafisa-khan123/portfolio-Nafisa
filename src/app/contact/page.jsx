'use client';
import { useState } from 'react';
import AnimatedCircle from '../components/AnimatedCircle';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl text-white" />,
      title: 'Email',
      value: 'nafisa.khan@example.com',
      description: 'Send me an email anytime!',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaPhone className="text-2xl text-white" />,
      title: 'Phone',
      value: '+91 98765 43210',
      description: 'Call me for urgent matters',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-white" />,
      title: 'Location',
      value: 'Mumbai, India',
      description: 'Available for local meetings',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <FaBriefcase className="text-2xl text-white" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/nafisa-khan',
      description: 'Let\'s connect professionally',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: <FaGithub className="text-2xl text-white" />,
      title: 'GitHub',
      value: 'github.com/nafisa-khan',
      description: 'Check out my code and projects',
      color: 'from-gray-600 to-gray-700'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub className="text-2xl text-white" />, url: '#', color: 'from-gray-600 to-gray-700' },
    { name: 'LinkedIn', icon: <FaLinkedin className="text-2xl text-white" />, url: '#', color: 'from-blue-500 to-blue-600' },
    { name: 'Instagram', icon: <FaInstagram className="text-2xl text-white" />, url: '#', color: 'from-pink-500 to-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20 relative overflow-hidden">
      {/* Background Animated Circles */}
      <div className="absolute top-32 right-20 opacity-10">
        <AnimatedCircle size="large" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-15">
        <AnimatedCircle size="medium" />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            Let's{' '}
            <span className="text-blue-400">
              Connect
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you! Let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 mb-16 max-w-2xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border border-gray-700"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-blue-400 font-semibold mb-2">{method.value}</p>
                <p className="text-gray-400 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-gray-800/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center">
            {/* Additional Info */}
            <div className="max-w-2xl space-y-8">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}