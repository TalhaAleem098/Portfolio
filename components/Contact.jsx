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
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
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
      <div className="container mx-auto px-4 max-w-[90rem]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg text-slate-400 font-medium mb-2">Get in touch</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's Connect</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Card - Profile */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-slate-800 border-slate-700 shadow-xl flex-1 h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <div className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-2 ring-slate-500">
                    <AvatarImage src="/images/avatar.jpg" alt="Aleem Talha" />
                    <AvatarFallback className="bg-slate-600 text-white text-2xl">AT</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold text-white mb-1">Aleem Talha</h3>
                  <p className="text-slate-400 mb-6">Website Developer</p>

                  <div className="flex justify-center space-x-4">
                    {[
                      { icon: FaGithub, href: 'https://github.com/aleemtalha', label: 'GitHub' },
                      { icon: FaLinkedin, href: 'https://linkedin.com/in/aleemtalha', label: 'LinkedIn' },
                      { icon: FaTwitter, href: 'https://twitter.com/aleemtalha', label: 'Twitter' },
                      { icon: FaEnvelope, href: 'mailto:contact@aleelmtalha.com', label: 'Email' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 border border-slate-600 rounded-md text-slate-300 hover:text-white hover:border-slate-400 transition"
                        aria-label={label}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Card - Form */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-slate-800 border-slate-700 shadow-xl flex-1 h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white font-medium">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="mt-2 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="mt-2 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-400"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white font-medium">Your Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how I can help..."
                      className="mt-2 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-md transition-all shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
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
