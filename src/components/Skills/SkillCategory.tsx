import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}