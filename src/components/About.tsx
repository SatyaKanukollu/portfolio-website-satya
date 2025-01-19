import React from 'react';

export default function About() {
  const certifications = [
    "AWS Certified Solutions Architect – Associate",
    "Certified Scrum Product Owner (CSPO)",
    "Google Cloud Professional Cloud Architect",
    "Oracle Certified Java Programmer (OCJP)"
  ];

  const coreCompetencies = {
    "Backend": ["Java", "Spring Boot", "Hibernate", "RESTful APIs"],
    "Frontend": ["React", "Angular", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    "Cloud": ["AWS (Lambda, S3, RDS, ECS, CloudFormation)", "GCP (Cloud Functions, BigQuery)"],
    "DevOps Tools": ["Jenkins", "Kubernetes", "Docker", "Git"],
    "Project Management": ["Jira", "Confluence", "Agile", "Scrum"]
  };

  return (
    <section id="about" className="py-20 bg-gray-800 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
        <div className="space-y-8">
          {/* Main Description */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Assistant Technical Project Manager | Agile Technical Product Owner | Full Stack Java Developer
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Over 7+ years of experience as a Full Stack Developer specializing in Java/J2EE Technologies. 
              Proven expertise in Spring Boot, Microservices Architecture, and Cloud Technologies (AWS, GCP) 
              with a strong background in developing cloud-native applications. Adept at implementing Agile 
              methodologies, improving delivery timelines, and enhancing stakeholder satisfaction.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Key Highlights</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Full Stack Development: Java, Spring Boot, and modern JavaScript frameworks (React, Angular).</li>
              <li>Cloud Architecture and Implementation: Extensive experience with AWS and GCP platforms.</li>
              <li>Microservices Architecture: Expertise in designing and developing distributed, scalable solutions.</li>
              <li>Agile Project Management: Skilled in backlog prioritization, sprint planning, and cross-functional team leadership.</li>
              <li>Team Leadership and Collaboration: Experience managing technical teams and acting as a liaison between business and development.</li>
              <li>Performance Optimization: Proficient in optimizing application performance for better scalability and responsiveness.</li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Certified In</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg text-blue-400">
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="bg-gray-900 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-4">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(coreCompetencies).map(([category, skills]) => (
                <div key={category} className="space-y-2">
                  <h4 className="text-blue-400 font-medium">{category}</h4>
                  <ul className="text-gray-300 list-disc list-inside">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}