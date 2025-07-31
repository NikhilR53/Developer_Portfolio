import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Library Management System',
      description:
        'Designed and implemented a comprehensive system to manage library resources, including book inventory, member registration, and borrowing/returning processes, improving efficiency and organization.',
      tech: ['Python', 'MySQL', 'Tkinter'],
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'ATM Applications',
      description:
        'Developed secure and user-friendly ATM applications, enhancing the banking experience by providing seamless transaction capabilities and robust security features.',
      tech: ['Java', 'OOP', 'Swing'],
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Employee Management System',
      description:
        'Designed a system to streamline employee management processes, including attendance tracking, payroll management, and performance evaluation, leading to improved operational efficiency.',
      tech: ['C', 'File Handling', 'CLI'],
      github: '#',
      demo: '#',
      image: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay="300">
            A few projects I've built during my academic journey to solve real-world problems and strengthen my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Featured
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                      darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
              darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50 shadow-md'
            }`}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
