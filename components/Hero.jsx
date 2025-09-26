'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-bg min-h-[90vh] flex items-center justify-center relative"
    >
      <div className="z-10 text-center max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hello, I&apos;m <span className="text-yellow-600">Aleem Talha</span>
          </h1>
          <p className="text-md md:text-2xl text-slate-300 mb-8">
            Building fast & clean web applications with modern technologies
          </p>
        </motion.div>

        <motion.div
          className="text-xl md:text-3xl font-semibold text-slate-200 mb-8 h-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typewriter
            options={{
              strings: [
                'Full-Stack Web Craftsman',
                'Next.js & React Pro',
                'Turning Ideas into Code',
                'Clean UI & Smooth UX',
                'Backend that Scales',
                'Pixel-Perfect Frontend',
                'Code. Create. Deploy.'
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />

        </motion.div>

        <motion.div
          className="flex  flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-slate-700 hover:bg-slate-600 text-white rounded-sm shadow-sm px-4 py-3"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-slate-500 text-slate-800 hover:bg-slate-700 rounded-sm shadow-sm px-4 py-3"
          >
            <a href="/resume">View Resume</a>
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            { icon: FaGithub, href: 'https://github.com/aleemtalha', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/aleemtalha', label: 'LinkedIn' },
            { icon: FaTwitter, href: 'https://twitter.com/aleemtalha', label: 'Twitter' },
            { icon: FaEnvelope, href: 'mailto:contact@aleelmtalha.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="social-icon p-3 border border-slate-500 rounded-sm text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
