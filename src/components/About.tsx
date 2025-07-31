import React from 'react';
import { Code, Coffee, Lightbulb, Target } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '3+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Lightbulb, label: 'Ideas Implemented', value: '10+' },
    { icon: Target, label: 'Goals Achieved', value: '5+' },
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            data-aos="fade-up"
          >
            About Me
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Photo */}
          <div className="flex justify-center" data-aos="fade-right" data-aos-duration="1000">
            <img
              src="/nikhilpic.jpg" // 🔁 Change filename as needed
              alt="Nikhil"
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-blue-500"
            />
          </div>

          {/* Right side: Journey + Skills */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <div className={`p-8 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                My Journey
              </h3>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I am a Computer Science Engineering student at Anurag University with a strong
                foundation in programming and software development. I also hold a diploma in
                Electrical and Electronics Engineering from Samskruthi College of Engineering and
                Technology.
              </p>
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate about applying theoretical knowledge to practical projects, I’ve worked
                on systems like Library Management, ATM Applications, and Employee Management.
                I’m actively looking for opportunities where I can contribute, grow, and apply my
                technical skills in real-world scenarios.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Java', 'Python', 'C', 'SQL', 'HTML & CSS', 'JavaScript',
                  'Object-Oriented Programming', 'Communication', 'React JS',
                  'Node JS', 'Express JS', 'MongoDB', 'Git & GitHub',
                  'Problem Solving', 'Software Development Life Cycle (SDLC)',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats at the bottom */}
        <div className="mt-16" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                }`}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
