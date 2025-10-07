"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaDownload,
  FaExternalLinkAlt,
  FaCalendar,
  FaMapMarkerAlt,
  FaCertificate,
  FaAward,
  FaExternalLinkSquareAlt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaServer,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiMysql, SiRedis, SiExpress, SiDjango, SiGraphql, SiTailwindcss, SiNextdotjs } from "react-icons/si";
// import Link from "next/link";

const ResumeClient = () => {
  const experiences = [
    {
      company: "EVS Lahore",
      role: "Internship",
      period: "May 2024 - Sept, 2024",
      location: "Remote",
      achievements: [
        "Made my first website project in final. ",
        "I learned about advance features present in javascript & its frameworks.",
        "Worked on mini projects.",
        " Learnt about the Redis for making database Query to be handled in a different approach.",
      ],
    },
    {
      company: "JS Internationals",
      role: "Website Developer",
      period: "Sept 2024 - Present",
      location: "Remote Job",
      achievements: [
        "Started working on Accounting Softwares. ",
        "Made E-commerce website which was linked with a Accouting software for handling online business.",
        "Made better admin dashboards and worked on complex backend Schema with API optimization.",
        "Actually learnt about the Features in Next.js.",
      ],
    },
  ];

  const education = [
    {
      degree: "Fsc. Pre Engineering",
      institution: "Punjab Group of Colleges",
      period: "2019 - 2021",
      location: "Hafizabad, Pakisan",
      achievements: [
        "Leant much about stats which helped me taking more interest in computer programming",
        "One of the bright students in PGC.",
        "One of the top 5 students in classroom.",
        "Certifications in presentations & communications.",
      ],
    },
    {
      degree: "Bachelors in Computer Science",
      institution: "University of Engineering and Technology",
      period: "2021 - 2025",
      location: "Lahore, Pakistan",
      achievements: [
        "Learnt much about computer programming using C++.",
        "Learn much about the Data Structures and Object Oriented Programming.",
        "One of the best project designer in class.",
        "Learnt much about .Net core & C# programming.",
      ],
    },
  ];

  const getSkillIcon = (category) => {
    switch(category) {
      case 'Frontend':
        return <FaReact className="text-blue-400" />;
      case 'Backend':
        return <FaServer className="text-green-400" />;
      case 'Database':
        return <FaDatabase className="text-yellow-400" />;
      case 'Tools & Others':
        return <FaTools className="text-purple-400" />;
      default:
        return <FaAward className="text-slate-400" />;
    }
  };

  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "TanStack Query",
      "OAuth",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "GraphQL",
      "ASP.NET Core",
    ],
    Database: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
    "Tools & Others": [
      "Git/GitHub",
      "Docker",
      "Railway",
      "Render",
      "AWS",
      "Vercel",
      "Linux",
    ],
  };

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
    },
    {
      title: "Git Version Control",
      issuer: "Coursera",
    },
    {
      title: "React Development",
      issuer: "Meta",
    },
    {
      title: "Node.js Backend Development",
      issuer: "IBM",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 md:mb-8">
            <div className="mb-4 lg:mb-0">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                Resume
              </h1>
              <h1 className="text-2xl px-8 md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2">
                Aleem Talha
              </h1>
            </div>

            <div className="hidden lg:flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/aleemtalha",
                    label: "GitHub",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://linkedin.com/in/aleemtalha",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaTwitter,
                    href: "https://twitter.com/aleemtalha",
                    label: "Twitter",
                  },
                  {
                    icon: FaEnvelope,
                    href: "mailto:contact@aleelmtalha.com",
                    label: "Email",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-2 md:p-3 border border-slate-600 rounded-lg text-slate-300 hover:text-white hover:border-slate-400 hover:bg-slate-800 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={16} className="md:w-5 md:h-5" />
                  </a>
                ))}
              </div>

              <Button
                asChild
                className="bg-slate-700 hover:bg-slate-600 text-white rounded-lg shadow-sm text-sm md:text-base self-center lg:self-auto"
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 border-b border-slate-700 pb-3 md:pb-4">
              Professional Experience
            </h2>
            <div className="space-y-6 md:space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-slate-600 pl-4 md:pl-6 pb-6 md:pb-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-600 rounded-full"></div>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 md:mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base md:text-lg text-slate-300 font-medium mb-2 lg:mb-0">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-slate-400 text-xs md:text-sm lg:text-right lg:ml-4">
                      <div className="flex items-center mb-1">
                        <FaCalendar className="mr-2 text-xs" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-xs" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-2 md:ml-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-xs md:text-sm">
                        <span className="mr-2 md:mr-3 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 border-b border-slate-700 pb-3 md:pb-4">
              Education
            </h2>
            <div className="space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-slate-600 pl-4 md:pl-6 pb-6 md:pb-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-600 rounded-full"></div>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 md:mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-base md:text-lg text-slate-300 font-medium mb-2 lg:mb-0">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-slate-400 text-xs md:text-sm lg:text-right lg:ml-4">
                      <div className="flex items-center mb-1">
                        <FaCalendar className="mr-2 text-xs" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-xs" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-2 md:ml-4">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-xs md:text-sm">
                        <span className="mr-2 md:mr-3 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 border-b border-slate-700 pb-3 md:pb-4">
              Certifications & Achievements
            </h2>
            <div className="px-4 md:px-0">
              <ul className="space-y-4 md:space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start text-slate-300">
                    <FaCertificate className="text-blue-400 mr-3 mt-1 flex-shrink-0 text-sm md:text-base" />
                    <span className="flex-1">
                      <span className="text-white font-medium text-sm md:text-base block md:inline">
                        {cert.title}
                      </span>
                      <span className="text-slate-400 text-xs md:text-sm block md:inline md:ml-2">
                        - {cert.issuer}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 border-b border-slate-700 pb-3 md:pb-4">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4 flex items-center">
                      {getSkillIcon(category)}
                      <span className="ml-2 md:ml-3">{category}</span>
                    </h3>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-600 text-slate-200 hover:bg-slate-500 transition-colors duration-200 text-xs md:text-sm px-2 py-1"
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
            className="text-center pt-6 md:pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-slate-700 hover:bg-slate-600 text-white rounded-lg shadow-sm px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
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
