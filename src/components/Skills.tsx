import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'C', level: 75 },
        { name: 'SQL', level: 70 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 90 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Technical Skills',
      skills: [
        { name: 'Object-Oriented Programming', level: 80 },
        { name: 'Data Structures & Algorithms', level: 75 },
        { name: 'Code Review & Debugging', level: 78 },
        { name: 'Version Control (Git/GitHub)', level: 85 },
        { name: 'Responsive Web Design', level: 82 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Teamwork', level: 85 },
        { name: 'Problem Solving', level: 88 },
        { name: 'Continuous Learning', level: 92 },
        { name: 'Time Management', level: 87 }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="300">
            A blend of programming languages, technical concepts, and soft skills that I bring to every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 200}
            >
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category.title}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} mx-auto`}></div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} data-aos="fade-right" data-aos-delay={categoryIndex * 200 + skillIndex * 50}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Tools & Technologies I'm Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Java', 'Python', 'C', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Git', 'Tkinter',
              'VS Code', 'OOP', 'Responsive Design', 'Debugging', 'Teamwork', 'Problem Solving'
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
