import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const profileImage = "https://raw.githubusercontent.com/SatyaKanukollu/modern-portfolio/main/public/profile.jpg";
  const resumeUrl = "https://raw.githubusercontent.com/SatyaKanukollu/modern-portfolio/main/public/resume.pdf";

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error('Failed to fetch resume');
      
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Satya_Kanukollu_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open(resumeUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Hi, I'm Satya Kanukollu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Assistant Technical Project Manager | Agile Technical Product Owner | Full Stack Java Developer
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Michigan, United States
          </p>
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
          <div className="flex justify-center md:justify-start space-x-4">
            <a 
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href={resumeUrl}
              onClick={handleDownload}
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition-all duration-300"></div>
            <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto overflow-hidden rounded-full border-4 border-white/20">
              <img 
                src={profileImage}
                alt="Satya Kanukollu"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}