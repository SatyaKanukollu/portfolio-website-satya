import React from 'react';
import SocialLinks from './SocialLinks';
import ActionButtons from './ActionButtons';
import ProfileImage from './ProfileImage';

export default function Hero() {
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
          <SocialLinks />
          <ActionButtons />
        </div>
        <ProfileImage />
      </div>
    </div>
  );
}