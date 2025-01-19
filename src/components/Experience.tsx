import React from 'react';

const experiences = [
  {
    title: "Agile Product Owner",
    company: "Oakland County – State of Michigan",
    duration: "November 2024 - Present",
    description: "Leading product development and Agile transformation initiatives, resulting in 30% improved delivery timelines and 20% increased stakeholder satisfaction.",
    technologies: ["Java", "Spring Boot", "React", "AWS", "Agile", "Scrum"]
  },
  {
    title: "Full Stack Java Developer",
    company: "Oakland County – State of Michigan",
    duration: "Jan 2024 – November 2024",
    description: "Developed cloud-native applications using Java, Spring Boot, and GCP, implementing RESTful APIs and serverless solutions.",
    technologies: ["Java", "Spring Boot", "GCP", "Angular", "React", "Docker"]
  },
  {
    title: "Full Stack Java Developer",
    company: "Charles Schwab",
    duration: "May 2022 – December 2023",
    description: "Implemented microservices architecture using Spring Boot and developed frontend solutions with Angular 8.",
    technologies: ["Java", "Spring Boot", "Angular", "Microservices", "GCP", "MongoDB"]
  },
  {
    title: "Full Stack Java Developer",
    company: "Infosys | T-Mobile",
    duration: "August 2021 – April 2022",
    description: "Developed enterprise applications using Java Spring ecosystem and implemented AWS Lambda solutions.",
    technologies: ["Java", "Spring MVC", "AWS Lambda", "React", "Kafka", "PostgreSQL"]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-gray-400">{exp.duration}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}