import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex justify-center md:justify-start space-x-6 mb-8">
      <a 
        href="https://github.com/SatyaKanukollu" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-colors"
        aria-label="GitHub Profile"
      >
        <Github size={28} />
      </a>
      <a 
        href="https://www.linkedin.com/in/satyavkanukollu" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={28} />
      </a>
      <a 
        href="mailto:kanukollu.satya@gmail.com"
        className="text-white hover:text-blue-400 transition-colors"
        aria-label="Email"
      >
        <Mail size={28} />
      </a>
    </div>
  );
}