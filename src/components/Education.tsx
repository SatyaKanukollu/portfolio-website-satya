import React from 'react';

const education = [
  {
    degree: "Masters in Computer Science",
    school: "State University of New York",
    location: "Utica, NY, United States",
    duration: "August 2018 – December 2020",
    gpa: "3.4/4.0",
    courses: [
      "Artificial Intelligence",
      "Operating Systems",
      "Distributed Systems",
      "Cryptography",
      "Parallel Computing",
      "Algorithms and Complexity"
    ]
  },
  {
    degree: "Bachelors in Electronics and Communications Engineering",
    school: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    duration: "September 2013 – May 2017",
    gpa: "3.7/4.0",
    courses: [
      "Micro Processors",
      "Micro Controllers",
      "VLSI Design",
      "Digital Image Processing",
      "OOPS Concepts"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800 scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-blue-400">{edu.school}</p>
              <p className="text-gray-400">{edu.location}</p>
              <p className="text-gray-400">{edu.duration}</p>
              <p className="text-green-400 mt-2">GPA: {edu.gpa}</p>
              <div className="mt-4">
                <p className="text-gray-300 font-medium mb-2">Key Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span key={course} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}