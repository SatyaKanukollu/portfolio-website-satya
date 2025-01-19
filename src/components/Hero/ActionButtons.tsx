import React from 'react';

export default function ActionButtons() {
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
      // Fallback to direct download
      window.location.href = resumeUrl;
    }
  };

  return (
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
  );
}