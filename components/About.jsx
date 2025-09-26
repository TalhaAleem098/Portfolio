'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaClock } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const skills = [
    'Full-Stack Web Development',
    'MERN Stack Architecture',
    'Next.js & React Ecosystem',
    'Django & Python Backend',
    'Database Design & Optimization',
    'API Development & Integration',
  ];

  return (
    <section id="about" className="mx-auto  py-10 bg-slate-800/100" ref={ref}>
      <div className="">
        <motion.div
          className="mb-8 px-4 md:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-base md:text-xl text-slate-400 font-medium mb-4 px-6 md:px-8">About me</h3>
          <h2 className="text-3xl md:text-6xl font-bold text-white">WHO I AM</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 items-center px-6 md:px-8">
          <motion.div
          className="px-4 md:px-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-slate-300 text-xs md:text-sm lg:text-base leading-relaxed mb-8">
              I&apos;m a passionate full-stack developer with expertise in modern web technologies. 
              I specialize in building scalable, user-friendly applications that solve real-world problems. 
              My experience spans across frontend and backend development, with a strong focus on 
              performance optimization and clean code practices.
            </p>

            <div className="mb-8">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Core Expertise:</h4>
              <div className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm lg:text-base">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span className="text-slate-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="md:w-80 md:h-100 bg-slate-700 rounded-lg shadow-lg shadow-slate-700/20 overflow-hidden">
                <Image
                  src="/assets/laptop1.webp"
                  alt="Aleem Talha"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLli+ZCugP2+dWWlZ5JgtyrlKYAmzx+G2q+cy1CXW+qJahM9gWW3+gZrirKdfa8yQGacqNJyJLHQyMg5ICGMCurLGaRJo8wB3Eq/8AXNL5JiFKWZJ9bZIgqMIV4EjI6BdahqYEA4GMNIJ1BYA5z6qKKK9K4qbbtH71D1t2rHi8hcCauopgs2OkZkJMLA6MREge96wGp/RjieLlY8cLyuV+FwBabxoaHPUUUU6hJ"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;