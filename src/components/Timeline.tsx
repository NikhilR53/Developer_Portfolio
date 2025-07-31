import React from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

interface TimelineProps {
  darkMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ darkMode }) => {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Technology (B.Tech), Computer Engineering',
      company: 'Anurag University',
      location: 'Hyderabad',
      period: 'Aug 2023 - May 2026',
      description: 'Pursuing B.Tech in Computer Engineering with a strong focus on programming, software development, and real-world problem solving.',
      achievements: [
        'Engaged in hands-on projects and bootcamps',
        'Strong knowledge in programming and technical skills',
        'Proactive approach to continuous learning'
      ]
    },
    {
      type: 'education',
      title: 'Diploma in Electrical and Electronics Engineering',
      company: 'Samskruthi College of Engineering and Technology',
      location: 'Hyderabad',
      period: 'Jun 2019 - Jun 2022',
      description: 'Completed a diploma program focused on core electrical and electronics engineering concepts.',
      achievements: [
        'Built technical foundation before transitioning into Computer Engineering',
        'Gained experience in technical labs and collaborative learning environments',
        'Participated in academic projects and seminars'
      ]
    }
  ];

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up">
            Education Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="300">
            My academic journey that built the foundation for my technical career.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 200}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 ${
                  exp.type === 'education' ? 'bg-green-600 border-green-200' : ''
                } ${darkMode ? 'border-opacity-30' : 'border-opacity-50'}`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-6 h-6 text-green-600 mr-3" />
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Education
                      </span>
                    </div>

                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.title}
                    </h3>

                    <div className="text-lg font-semibold mb-2 text-green-600">
                      {exp.company}
                    </div>

                    <div className={`flex items-center text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="mr-4">{exp.location}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>

                    <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <Award className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
