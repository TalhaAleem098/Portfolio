
"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ChevronLeftIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ImageIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const projectsData = [
  {
    id: 1,
    title: "Bishop | ERP + E-Commerce",
    description: "An advanced ERP-enabled e-commerce platform integrated with Numbers Calculus for seamless accounting, inventory, and analytics. Acts as a complete business management solution.",
    image: "/assets/bishop.webp",
    technologies: ["Next.js", "Node.js", "MongoDB", "ERP Integration"],
    liveUrl: "https://bishop.com",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Numbers Calculus | Accounting Platform",
    description: "A powerful accounting and business intelligence platform with data visualization, tax handling, and reporting modules designed for SMEs and enterprises.",
    image: "/assets/NC.webp",
    technologies: ["Angular", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "https://numberscalculus.com",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "SellSphere | Full-Stack E-Commerce",
    description: "A scalable full-stack e-commerce solution with modern UI, real-time inventory, secure payment processing, and admin dashboards.",
    image: "/assets/sellSphere.webp",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://sellsphere-tau.vercel.app",
    githubUrl: "https://github.com/AleemTalha/SellSphere"
  },
  {
    id: 4,
    title: "CenturyPK | E-Commerce Store",
    description: "Developed CenturyPK as a dedicated online store with sleek design, product management, and a scalable backend architecture.",
    image: "/assets/centurypk.webp",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://centurypk.com",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Multi-Purpose Website Builder",
    description: "A flexible platform for creating customizable e-commerce stores and inventory systems. Includes dynamic admin panels, schema control, and advanced UI states.",
    image: "/images/project-multipurpose.jpg",
    technologies: ["Next.js", "MongoDB", "Admin Controls", "Dynamic Schemas"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Portfolio Website | Personal",
    description: "My personal portfolio website featuring smooth animations, SEO optimization, responsive design, and a clean modern UI to showcase skills and projects.",
    image: "/images/project-portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 7,
    title: "Portfolio Website | Client",
    description: "Developed a customized portfolio website on order, highlighting modern layouts, contact integration, and flexible project showcasing.",
    image: "/images/project-clientportfolio.jpg",
    technologies: ["React", "Tailwind CSS", "EmailJS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 8,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team collaboration, and efficient state handling.",
    image: "/assets/taskManager.webp",
    technologies: ["Next.js", "MongoDB", "API", "Tanstack Query"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 9,
    title: "Learning Management System",
    description: "A complete LMS solution for hosting online courses, managing content, and tracking student progress with powerful backend integration.",
    image: "/images/project-lms.jpg",
    technologies: ["Next.js", "MySQL", "Railway", "Tanstack Query"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 10,
    title: "Real Estate Dashboard",
    description: "A Windows Form Application for property management featuring listing control, client data management, and analytics visualization.",
    image: "/images/project-realestate.jpg",
    technologies: ["C#", "MySQL", "API", "Analytics"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 11,
    title: "Frozen Foods App",
    description: "A frozen foods ordering app with secure authentication, admin panels, and role-based access (RBA).",
    image: "/images/project-fooddelivery.jpg",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 12,
    title: "Chad Mathew | image gallery",
    description: "A client project of actor from Sydney. Built with Next.js and Tailwind CSS. Showing an image gallery with smooth transitions.",
    image: "/assets/pportfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  }
];


const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const scrollRef = React.useRef(null);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const smoothScrollTo = (element, targetScrollLeft, duration = 800) => {
    const startScrollLeft = element.scrollLeft;
    const distance = targetScrollLeft - startScrollLeft;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      element.scrollLeft = startScrollLeft + (distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    setIsScrolling(true);
    requestAnimationFrame(animateScroll);
  };

  const scrollLeft = () => {
    if (scrollRef.current && !isScrolling) {
      const container = scrollRef.current;
      const scrollAmount = Math.min(400, container.clientWidth * 0.8);
      const targetScroll = Math.max(0, container.scrollLeft - scrollAmount);
      smoothScrollTo(container, targetScroll);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && !isScrolling) {
      const container = scrollRef.current;
      const scrollAmount = Math.min(400, container.clientWidth * 0.8);
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetScroll = Math.min(maxScroll, container.scrollLeft + scrollAmount);
      smoothScrollTo(container, targetScroll);
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  React.useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      const resizeObserver = new ResizeObserver(checkScrollPosition);
      resizeObserver.observe(container);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <section id="projects" className="mx-auto py-16 bg-slate-800/100"
      ref={ref}
    >
      <div className="mx-auto">
        <motion.div
          className="mb-8 px-4 md:px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg md:text-xl text-slate-400 font-medium mb-4 px-6 md:px-8">I worked at 12+ Projects</h3>
          <h2 className="text-3xl md:text-6xl font-bold text-white">FEATURED PROJECTS</h2>
        </motion.div>
        <motion.div
          className="mb-16 px-4 md:px-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-slate-400 max-w-4xl px-4 md:px-6 text-xs md:text-sm lg:text-base">
            Explore my portfolio of innovative projects that showcase my expertise in modern web development,
            user experience design, and cutting-edge technologies. Each project represents a unique challenge
            and demonstrates my commitment to delivering high-quality solutions.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative overflow-x-auto scrollbar-hide pb-4 px-4 md:px-6"
          ref={scrollRef}
          style={{
            scrollBehavior: 'auto',
          }}
        >
          <div className="flex space-x-4 md:space-x-6 w-max">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                // whileHover={{ 
                //   y: -8,
                //   transition: { duration: 0.3, ease: "easeOut" }
                // }}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-slate-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group cursor-pointer"
                onClick={() => {
                  // Mobile click handler - opens live URL in new tab
                  if (window.innerWidth <= 768) {
                    window.open(project.liveUrl, '_blank');
                  }
                }}
              >
                <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden assets">
                  <div className="w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.querySelector('.fallback-content').style.display = 'flex';
                      }}
                    />
                  </div>

                  <div className="fallback-content hidden absolute inset-0 flex-col items-center justify-center text-slate-400">
                    <ImageIcon className="w-12 h-12 mb-2" />
                    <span className="text-sm font-medium">Project Image</span>
                  </div>

                  {/* Desktop hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex items-center justify-center hidden">
                    <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <motion.button
                        className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white/95 hover:bg-white text-slate-900 font-medium rounded-lg transition-all duration-200 shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </motion.button>

                      <motion.button
                        className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-slate-900/95 border border-slate-400 hover:bg-slate-800 text-white font-medium rounded-lg transition-all duration-200 shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span className="text-sm">GitHub</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Mobile action buttons - always visible */}
                  <div className="absolute top-3 right-3 flex space-x-2 md:hidden">
                    <button
                      className="p-2 bg-white/90 hover:bg-white text-slate-900 rounded-lg transition-all duration-200 shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </button>

                    <button
                      className="p-2 bg-slate-900/90 border border-slate-400 text-white rounded-lg transition-all duration-200 shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-4 md:p-6 flex flex-col h-auto">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex-1 pr-2">
                      {project.title}
                    </h3>
                    {/* Mobile tap indicator */}
                    <div className="md:hidden text-xs text-slate-500 flex items-center gap-1 flex-shrink-0">
                      <span>Tap to view</span>
                      <ExternalLinkIcon className="w-3 h-3" />
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-2 w-max">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="flex-shrink-0 px-3 py-1 bg-slate-800 border border-slate-700 text-xs text-slate-300 rounded-full whitespace-nowrap group-hover:bg-slate-700 group-hover:border-slate-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Desktop action buttons in card footer */}
                  <div className="hidden gap-3 mt-4 pt-4 border-t border-slate-800">
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 text-sm flex-1 justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>

                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-all duration-200 text-sm flex-1 justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex items-center justify-between px-4 md:px-6 w-full mb-6">
          <motion.button
            onClick={scrollLeft}
            disabled={!canScrollLeft || isScrolling}
            className={`relative p-3 rounded-lg transition-all duration-300 group overflow-hidden ${canScrollLeft && !isScrolling
              ? 'bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white hover:scale-105 hover:shadow-lg'
              : 'bg-slate-900 border border-slate-800 text-slate-600 cursor-not-allowed'
              }`}
            whileHover={canScrollLeft && !isScrolling ? { scale: 1.05 } : {}}
            whileTap={canScrollLeft && !isScrolling ? { scale: 0.95 } : {}}
          >
            <motion.div
              // animate={isScrolling ? { x: [-10, 10, -10] } : { x: 0 }}
              transition={{ duration: 0.5, repeat: isScrolling ? Infinity : 0 }}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </motion.div>
            {canScrollLeft && !isScrolling && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            )}
          </motion.button>

          <motion.button
            onClick={scrollRight}
            disabled={!canScrollRight || isScrolling}
            className={`relative p-3 rounded-lg transition-all duration-300 group overflow-hidden ${canScrollRight && !isScrolling
              ? 'bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white hover:scale-105 hover:shadow-lg'
              : 'bg-slate-900 border border-slate-800 text-slate-600 cursor-not-allowed'
              }`}
            whileHover={canScrollRight && !isScrolling ? { scale: 1.05 } : {}}
            whileTap={canScrollRight && !isScrolling ? { scale: 0.95 } : {}}
          >
            <motion.div
              // animate={isScrolling ? { x: [-10, 10, -10] } : { x: 0 }}
              transition={{ duration: 0.5, repeat: isScrolling ? Infinity : 0 }}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </motion.div>
            {canScrollRight && !isScrolling && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            )}
          </motion.button>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3 text-xs md:text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            <span className="hidden sm:inline">Scroll horizontally to explore more projects</span>
            <span className="sm:hidden">Swipe to see more</span>
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects