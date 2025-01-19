import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Project 1",
    description: "Description of your project",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com"
  },
  // Add more projects
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}