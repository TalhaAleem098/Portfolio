'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaDatabase, FaGitAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiBootstrap, SiNextdotjs, SiExpress,
  SiMongodb, SiMysql, SiPostgresql, SiSqlite,
  SiDjango, SiDotnet, SiCplusplus
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'SQLite', icon: SiSqlite, color: 'text-blue-300' },
    { name: 'Django', icon: SiDjango, color: 'text-green-600' },
    { name: 'ASP.NET Core', icon: SiDotnet, color: 'text-purple-600' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
  ];

  return (
    <section id="skills" className="py-8 md:py-12 lg:py-16 bg-slate-900" ref={ref}>
      <div className="">
        <motion.div
          className="mb-8 px-4 md:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg md:text-xl text-slate-400 font-medium mb-4 px-6 md:px-8">What I work with</h3>
          <h2 className="text-3xl md:text-6xl font-bold text-white">MY SKILLS</h2>
        </motion.div>

         <motion.div
          className="mb-16 px-4 md:px-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-slate-400 max-w-4xl px-4 md:px-6 text-xs md:text-sm lg:text-base">
            Constantly learning and adapting to new technologies to deliver cutting-edge solutions.
            My toolkit evolves with the industry to ensure optimal performance and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mx-auto px-4 md:px-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="skill-card p-6 bg-slate-800 rounded-md shadow-sm border border-slate-700 hover:border-slate-600 text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`text-4xl ${skill.color} transition-all duration-300 group-hover:scale-110`}>
                    <Icon />
                  </div>
                  <h4 className="text-slate-200 font-medium text-sm">{skill.name}</h4>
                </div>
              </motion.div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default Skills;