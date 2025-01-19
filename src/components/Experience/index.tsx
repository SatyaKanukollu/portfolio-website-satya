import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from './experienceData';

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-900 scroll-mt-16"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard 
              key={index}
              {...experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}