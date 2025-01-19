import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={24} />
                <a href="mailto:kanukollu.satya@gmail.com" className="text-gray-300 hover:text-white">
                  kanukollu.satya@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={24} />
                <a href="tel:+13152758585" className="text-gray-300 hover:text-white">
                  +1 (315)-275-8585
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-400" size={24} />
                <span className="text-gray-300">Michigan, United States</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-blue-400" size={24} />
                <a 
                  href="https://www.linkedin.com/in/satyavkanukollu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="text-blue-400" size={24} />
                <a 
                  href="https://github.com/satyavkanukollu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}