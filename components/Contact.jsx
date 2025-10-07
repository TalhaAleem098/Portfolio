'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane, FaInstagram } from 'react-icons/fa';
import { toast } from 'sonner';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg text-slate-400 font-medium mb-2">Get in touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Left Side - Profile (40% width) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 shadow-2xl h-full overflow-hidden group hover:shadow-slate-700/20 transition-all duration-500">
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                  <img
                    src="/images/avatar.jpg"
                    alt="Aleem Talha"
                    className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent"></div>
                </div>

                {/* Profile Info */}
                <div className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Aleem Talha</h3>
                    <p className="text-slate-400 text-lg mb-3">Website Developer</p>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      Passionate about creating modern, responsive web experiences that make a difference.
                    </p>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {[
                      { icon: FaGithub, href: 'https://github.com/aleemtalha', label: 'GitHub', color: 'hover:bg-gray-700' },
                      { icon: FaLinkedin, href: 'https://linkedin.com/in/aleemtalha', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                      { icon: FaTwitter, href: 'https://twitter.com/aleemtalha', label: 'Twitter', color: 'hover:bg-blue-500' },
                      { icon: FaInstagram, href: 'https://instagram.com/aleemtalha', label: 'Instagram', color: 'hover:bg-pink-600' },
                      { icon: FaEnvelope, href: 'mailto:contact@aleemtalha.com', label: 'Email', color: 'hover:bg-green-600' },
                    ].map(({ icon: Icon, href, label, color }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 hover:text-white ${color} hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                        aria-label={label}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      >
                        <Icon size={18} />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Contact Form (60% width) */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 shadow-2xl h-full hover:shadow-slate-700/20 transition-all duration-500">
              <CardContent className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-2xl font-bold text-white mb-2">Send me a message</h4>
                  <p className="text-slate-400 mb-8">Fill out the form below and I'll get back to you as soon as possible.</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Label htmlFor="name" className="text-white font-medium text-sm mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 h-12"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Label htmlFor="email" className="text-white font-medium text-sm mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 h-12"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <Label htmlFor="message" className="text-white font-medium text-sm mb-2 block">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or how I can help you..."
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-slate-600 disabled:to-slate-600 text-white font-medium py-3 h-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <motion.div 
                          className="flex items-center justify-center space-x-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          <span>Sending message...</span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="flex items-center justify-center space-x-2"
                          whileHover={{ x: 2 }}
                        >
                          <FaPaperPlane />
                          <span>Send Message</span>
                        </motion.div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
