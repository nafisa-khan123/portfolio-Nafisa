'use client';
import { useState } from 'react';

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
      icon: '📧',
      title: 'Email',
      value: 'nafisa@example.com',
      description: 'Send me an email anytime!',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call me for urgent matters',
      color: 'from-green-500 to-green-600'
    },
    // {
    //   icon: '📍',
    //   title: 'Location',
    //   value: 'New York, USA',
    //   description: 'Available for local meetings',
    //   color: 'from-purple-500 to-purple-600'
    // },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/nafisa',
      description: 'Let\'s connect professionally',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: '#', color: 'hover:bg-gray-800' },
    // { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-blue-500' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'hover:bg-pink-500' },
    // { name: 'Dribbble', icon: '🏀', url: '#', color: 'hover:bg-pink-400' },
     { name: 'linkedin', icon: '📷', url: '#', color: 'hover:bg-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you! Let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-purple-600 font-semibold mb-2">{method.value}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Message</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-6">🎉</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you soon!</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message 🚀'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Availability */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Available for Work</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's discuss how we can work together!
                </p>
                <div className="text-sm text-green-600 font-semibold">
                  ⏰ Usually responds within 24 hours
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center p-4 bg-gray-50 rounded-2xl hover:text-white transition-all duration-300 group ${social.color}`}
                    >
                      <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <span className="font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Response Time</span>
                    <span className="font-semibold text-purple-600">&lt; 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Project Success Rate</span>
                    <span className="font-semibold text-purple-600">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Happy Clients</span>
                    <span className="font-semibold text-purple-600">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Coffee Consumed</span>
                    <span className="font-semibold text-purple-600">∞</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most websites take 2-4 weeks, while larger applications can take 6-12 weeks. I always provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. I use various communication tools to ensure smooth collaboration regardless of location."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "I specialize in React, Next.js, Node.js, and modern web technologies. I'm also experienced in UI/UX design and can handle full-stack development projects."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! I offer various support packages including bug fixes, updates, and feature additions. I believe in building long-term relationships with my clients."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}