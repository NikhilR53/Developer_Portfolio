import React, { useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  viewLink: string;
  downloadLink: string;
}

interface CertificationProps {
  darkMode: boolean;
}

const certifications: Certification[] = [
  {
    title: 'Graph Theory Programming Camp',
    issuer: 'AlogUniversity',
    date: 'May2025',
    viewLink: 'https://drive.google.com/file/d/1PGOAd2pfkRRr2Lew46QBNIlnEbvTWnuu/view?usp=sharing',
    downloadLink: 'https://drive.usercontent.google.com/download?id=1PGOAd2pfkRRr2Lew46QBNIlnEbvTWnuu&export=download&authuser=0&confirm=t&uuid=c4d0f909-2b76-4a42-b62c-2505feeda9ac&at=AN8xHor5kLK6epameBGRPBNDvvDX:1753893852547',
  },
  {
    title: 'Design Thinking',
    issuer: 'Infosys',
    date: 'April 2024',
    viewLink: 'https://drive.google.com/file/d/1bB0-wGbIApfb2F9lRCR8mvrjiKg-Y1GZ/view?usp=sharing',
    downloadLink: 'https://drive.usercontent.google.com/download?id=1bB0-wGbIApfb2F9lRCR8mvrjiKg-Y1GZ&export=download&authuser=0&confirm=t&uuid=e43537aa-4510-4e0f-b0ea-56ec3890f096&at=AN8xHoru5WujrwMkuaNHbtAT_lUD:1753893843099',
  },
  {
    title: 'Java Programming ',
    issuer: 'infosys',
    date: 'March 2024',
    viewLink: 'https://drive.google.com/file/d/1VgPQ_xdDxrEl0o2i08-mPoeZKTkYt1cx/view?usp=sharing',
    downloadLink: 'https://drive.usercontent.google.com/download?id=1VgPQ_xdDxrEl0o2i08-mPoeZKTkYt1cx&export=download&authuser=0&confirm=t&uuid=29754546-ec8d-46e6-ac7c-1a54da43efba&at=AN8xHoo3h_0FoFa4Df-6Lz_QmuVD:1753893835260',
  },
  {
    title: 'MongoDb with java',
    issuer: 'MongoDB',
    date: 'April 2024',
    viewLink: 'https://drive.google.com/file/d/1VbzR115400to-iFQKsm_6Xr4mqmUKrXG/view?usp=sharing',
    downloadLink: 'https://drive.usercontent.google.com/download?id=1VbzR115400to-iFQKsm_6Xr4mqmUKrXG&export=download&authuser=0&confirm=t&uuid=4e9db679-b53c-4d22-8c26-369cdb6ee9ac&at=AN8xHopd-EeFRkFdgSrMjCot5s2o:1753893825738',
  },
  {
    title: 'MongoDB CRUD Operations in Java',
    issuer: 'MongoDB',
    date: 'April 2024',
    viewLink: 'https://drive.google.com/file/d/1Vg6rzF9m1wHQ1JHNCfMOO26zFsroY3Qb/view?usp=sharing',
    downloadLink: 'https://drive.usercontent.google.com/download?id=1Vg6rzF9m1wHQ1JHNCfMOO26zFsroY3Qb&export=download&authuser=0&confirm=t&uuid=3d2de3c7-0533-4bac-abf2-95a4d25029ef&at=AN8xHopwAkE0Qx0IN6wfxrOBjfIU:1753893813372',
  },
  {
    title: 'Connecting to MongoDB in Java',
    issuer: 'MongoDB',
    date: 'April 2024',
    viewLink: 'https://drive.google.com/file/d/1VfdCi-jZ1DqYa3NpKuw0aoeV18CoTRsf/view?usp=sharing',
    downloadLink: 'https://drive.usercontent.google.com/download?id=1VfdCi-jZ1DqYa3NpKuw0aoeV18CoTRsf&export=download&authuser=0&confirm=t&uuid=852ad1c1-2869-46d4-b48e-0fa79dc35712&at=AN8xHoqnL_V09r3qKijk6j6XgBs8:1753893795519',
  },
  {
    title: 'Python Programming for Beginners: Hands-on (Online Lab)',
    issuer: 'Infosys Springboard',
    date: 'November 2023',
    viewLink: 'https://drive.google.com/file/d/1NA09ouIdZpKWrmk3cPaCKGc2aVaS_um-/view?usp=sharing',
    downloadLink: 'https://drive.usercontent.google.com/download?id=1VfdCi-jZ1DqYa3NpKuw0aoeV18CoTRsf&export=download&authuser=0&confirm=t&uuid=852ad1c1-2869-46d4-b48e-0fa79dc35712&at=AN8xHoqnL_V09r3qKijk6j6XgBs8:1753893795519',
  }
];

const Certification: React.FC<CertificationProps> = ({ darkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certification" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCerts.map((cert, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-6 transition-all hover:shadow-xl ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm mb-2 text-gray-400">{cert.issuer}</p>
              <p className="text-sm mb-4 text-gray-500">{cert.date}</p>
              <div className="flex space-x-4">
                <a
                  href={cert.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  <ExternalLink className="w-4 h-4 mr-2" /> View
                </a>
                <a
                  href={cert.downloadLink}
                  download
                  className="flex items-center text-sm px-3 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                >
                  <Download className="w-4 h-4 mr-2" /> Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {certifications.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-lg text-sm font-medium transition bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105"
            >
              {showAll ? 'Show Less' : 'View All Certifications'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certification;
