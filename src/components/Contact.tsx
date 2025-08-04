import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path if necessary

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error saving to Firestore:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nikhilhardik00@gmail.com',
      href: 'mailto:nikhilhardik00@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6305102552',
      href: 'tel:+916305102552'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="300">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Connect
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                    darkMode ? 'bg-gray-900 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <info.icon className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{info.label}</div>
                    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Why Work With Me?
              </h4>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Fast response time (usually within 24 hours)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Clear communication throughout the project
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  High-quality, maintainable code
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Post-launch support and maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <form onSubmit={handleSubmit} className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <div className="mb-6">
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none ${
                    darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div
                  className={`mb-6 p-4 border rounded-lg flex items-center ${
                    darkMode
                      ? 'bg-green-900 border-green-700 text-green-300'
                      : 'bg-green-100 border-green-400 text-green-700'
                  }`}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  className={`mb-6 p-4 border rounded-lg flex items-center ${
                    darkMode
                      ? 'bg-red-900 border-red-700 text-red-300'
                      : 'bg-red-100 border-red-400 text-red-700'
                  }`}
                >
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
