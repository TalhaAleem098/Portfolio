'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane, FaGlobe, FaClock, FaCode } from 'react-icons/fa';
import { toast } from 'sonner';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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
    <section id="contact" className="py-20 bg-slate-800" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg text-slate-400 font-medium mb-4">Get in touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">LET&apos;S CONNECT</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-700 border-slate-600 shadow-lg shadow-slate-700/20">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/images/avatar.jpg" alt="Aleem Talha" />
                    <AvatarFallback className="bg-slate-600 text-white text-2xl">AT</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-white mb-2">Aleem Talha</h3>
                  <p className="text-slate-400 mb-6">Website developer</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-6">
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
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="text-left space-y-4">
                    <div className="p-4 bg-slate-600 rounded-md">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaGlobe className="text-blue-400" />
                        <p className="text-slate-200 font-medium">Available Worldwide</p>
                      </div>
                      <p className="text-slate-400 text-sm">Remote work & international projects</p>
                    </div>
                    
                    <div className="p-4 bg-slate-600 rounded-md">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaClock className="text-green-400" />
                        <p className="text-slate-200 font-medium">Available 24/7</p>
                      </div>
                      <p className="text-slate-400 text-sm">Quick response guaranteed</p>
                    </div>
                    
                    <div className="p-4 bg-slate-600 rounded-md">
                      <div className="flex items-center space-x-3 mb-2">
                        <FaCode className="text-purple-400" />
                        <p className="text-slate-200 font-medium">Open for Projects</p>
                      </div>
                      <p className="text-slate-400 text-sm">Full-stack development</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-slate-700 border-slate-600 shadow-lg shadow-slate-700/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-200 font-medium">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 bg-slate-600 border-slate-500 text-white placeholder:text-slate-400 focus:border-slate-400 rounded-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-200 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 bg-slate-600 border-slate-500 text-white placeholder:text-slate-400 focus:border-slate-400 rounded-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-200 font-medium">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="mt-2 bg-slate-600 border-slate-500 text-white placeholder:text-slate-400 focus:border-slate-400 rounded-sm resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-slate-600 hover:bg-slate-500 text-white rounded-sm shadow-sm py-3 flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <motion.div 
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
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