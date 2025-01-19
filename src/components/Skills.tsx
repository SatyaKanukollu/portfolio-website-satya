import React from 'react';

const skills = {
  "Programming Languages": ["Java", "Python", "SQL", "C", "MATLAB"],
  "Cloud Technologies": ["AWS", "GCP", "S3", "EC2", "RDS", "Redshift", "Cloud Functions", "AppEngine"],
  "Web Technologies": ["HTML5", "CSS3", "JavaScript", "Angular", "React", "jQuery", "AJAX"],
  "Frameworks": ["Spring", "Spring Boot", "Hibernate", "MVC"],
  "Databases": ["MySQL", "Oracle", "MongoDB", "Apache HBase", "Hadoop"],
  "Tools & DevOps": ["Git", "Docker", "Jenkins", "Maven", "JIRA", "Kubernetes"],
  "Certifications": [
    "Microsoft Certified Azure Administrator Associate",
    "Microsoft Certified DevOps Expert",
    "Certified Scrum Product Owner (CSPO)",
    "Certified ScrumMaster (CSM)"
  ]
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Skills & Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
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