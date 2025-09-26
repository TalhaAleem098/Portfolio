'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-200 mb-4">Aleem Talha</h3>
            <p className="text-slate-400 mb-4">
              Full-stack developer specializing in MERN Stack, Next.js, and Django. 
              Building innovative web solutions with modern technologies.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <FaCode className="text-blue-400" />
              <span className="text-sm">Available for freelance projects</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Resume', href: '/resume' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-slate-400" />
                <a 
                  href="mailto:contact@aleelmtalha.com"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                >
                  contact@aleelmtalha.com
                </a>
              </div>
              <p className="text-slate-400 text-sm">
                Response time: Usually within 24 hours
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: FaGithub, href: 'https://github.com/aleemtalha', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/aleemtalha', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com/aleemtalha', label: 'Twitter' },
                { icon: FaEnvelope, href: 'mailto:contact@aleelmtalha.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-3 bg-slate-800 border border-slate-600 rounded-sm text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
            <span>© {currentYear} Aleem Talha. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-400" />
            </motion.div>
            <span>using Next.js & Tailwind CSS</span>
          </div>
          
          <div className="text-slate-400 text-sm">
            <span>Version 2.0 | Last updated: September 2025</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;