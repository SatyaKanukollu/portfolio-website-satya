import React from 'react';
import SkillCategory from './SkillCategory';
import { skillsData } from './skillsData';

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-20 bg-gray-800 scroll-mt-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Skills & Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory 
              key={category} 
              title={category} 
              skills={skills} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}