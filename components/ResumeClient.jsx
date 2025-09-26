'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaExternalLinkAlt, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const ResumeClient = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      role: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'Remote',
      achievements: [
        'Led development of 5+ enterprise web applications using MERN stack',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and established coding best practices',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      company: 'Digital Marketing Pro',
      role: 'React Developer',
      period: '2021 - 2022',
      location: 'New York, NY',
      achievements: [
        'Built responsive dashboards for social media analytics',
        'Integrated third-party APIs for data visualization',
        'Collaborated with UX team to improve user experience',
        'Reduced bug reports by 35% through comprehensive testing'
      ]
    },
    {
      company: 'StartupLab Inc',
      role: 'Frontend Developer',
      period: '2020 - 2021',
      location: 'San Francisco, CA',
      achievements: [
        'Developed mobile-first responsive web applications',
        'Implemented modern JavaScript frameworks (React, Vue.js)',
        'Optimized SEO resulting in 25% increase in organic traffic',
        'Worked closely with designers to implement pixel-perfect UIs'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2016 - 2020',
      location: 'California, USA',
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.8/4.0)',
        'President of Computer Science Society',
        'Winner of Annual Hackathon 2019',
        'Research in Machine Learning and Web Technologies'
      ]
    },
    {
      degree: 'Full Stack Web Development Bootcamp',
      institution: 'CodeCamp Academy',
      period: '2020',
      location: 'Online',
      achievements: [
        'Intensive 6-month program covering MERN stack',
        'Built 10+ full-stack projects',
        'Top 5% of graduating class',
        'Specialized in modern JavaScript frameworks'
      ]
    }
  ];

  const skills = {
    'Frontend': ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap'],
    'Backend': ['Node.js', 'Express.js', 'Django', 'Python', 'REST APIs', 'GraphQL', 'ASP.NET Core'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
    'Tools & Others': ['Git/GitHub', 'Docker', 'AWS', 'Vercel', 'Jest', 'Webpack', 'Linux']
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Aleem Talha</h1>
              <p className="text-xl text-slate-400 mb-4">Full Stack Developer</p>
              <div className="flex items-center space-x-4 text-slate-400">
                <span className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Available Worldwide (Remote)
                </span>
                <span className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  contact@aleelmtalha.com
                </span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4 mt-6 md:mt-0">
              <div className="flex items-center space-x-3">
                {[
                  { icon: FaGithub, href: 'https://github.com/aleemtalha', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/aleemtalha', label: 'LinkedIn' },
                  { icon: FaTwitter, href: 'https://twitter.com/aleemtalha', label: 'Twitter' },
                  { icon: FaEnvelope, href: 'mailto:contact@aleelmtalha.com', label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-2 border border-slate-600 rounded-sm text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              
              <Button
                asChild
                className="bg-slate-700 hover:bg-slate-600 text-white rounded-sm shadow-sm"
              >
                <a href="/files/Aleem-Talha-CV.pdf" download>
                  <FaDownload className="mr-2" size={14} />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <p className="text-lg text-slate-300 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-slate-400 text-sm mt-2 md:mt-0 text-right">
                        <div className="flex items-center">
                          <FaCalendar className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <FaMapMarkerAlt className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                        <p className="text-lg text-slate-300 font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-slate-400 text-sm mt-2 md:mt-0 text-right">
                        <div className="flex items-center">
                          <FaCalendar className="mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <FaMapMarkerAlt className="mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-600 text-slate-200 hover:bg-slate-500"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.div
            className="text-center pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-slate-700 hover:bg-slate-600 text-white rounded-sm shadow-sm px-8 py-3"
            >
              <a href="/files/Aleem-Talha-CV.pdf" download>
                <FaDownload className="mr-2" />
                Download Complete CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumeClient;