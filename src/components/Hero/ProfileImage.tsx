import React, { useState, useEffect } from 'react';

export default function ProfileImage() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const profileImage = "https://raw.githubusercontent.com/SatyaKanukollu/modern-portfolio/main/public/profile.jpg";
  const fallbackImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";

  const handleImageError = () => {
    console.error('Failed to load profile image, falling back to placeholder');
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = profileImage;
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
  }, []);

  return (
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
      <div className="relative group">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-700 rounded-full animate-pulse"></div>
        )}
        
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
        
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/20 transform group-hover:scale-105 transition-transform duration-300">
          <img 
            src={imageError ? fallbackImage : profileImage}
            alt="Satya Kanukollu"
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>

        <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}