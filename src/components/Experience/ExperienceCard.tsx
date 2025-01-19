import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export default function ExperienceCard({ 
  title, 
  company, 
  duration, 
  description, 
  technologies 
}: ExperienceCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-blue-400">{company}</p>
      <p className="text-gray-400">{duration}</p>
      <div className="mt-4">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech) => (
          <span key={tech} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}