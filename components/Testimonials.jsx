'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Solutions',
      testimonial: 'Aleem delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are remarkable.',
      rating: 5,
      avatar: '/images/testimonial-sarah.jpg',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      testimonial: 'Working with Aleem was a game-changer for our startup. He built a scalable web application that helped us secure our first round of funding.',
      rating: 5,
      avatar: '/images/testimonial-michael.jpg',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Marketing Director',
      company: 'Digital Marketing Pro',
      testimonial: 'The social media dashboard Aleem created has transformed how we manage our clients\' campaigns. The intuitive interface is powerful.',
      rating: 5,
      avatar: '/images/testimonial-emma.jpg',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'CTO',
      company: 'EduTech Innovations',
      testimonial: 'Aleem\'s expertise in full-stack development is impressive. He built our learning management system with complex features.',
      rating: 5,
      avatar: '/images/testimonial-david.jpg',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Business Owner',
      company: 'Thompson Real Estate',
      testimonial: 'The real estate platform revolutionized our business operations. We\'ve seen a 40% increase in online inquiries since launch.',
      rating: 5,
      avatar: '/images/testimonial-lisa.jpg',
    },
    {
      id: 6,
      name: 'Ahmed Hassan',
      role: 'Operations Manager',
      company: 'FoodieExpress',
      testimonial: 'Aleem created an outstanding food delivery app that handles high traffic seamlessly. His technical skills are exceptional.',
      rating: 5,
      avatar: '/images/testimonial-ahmed.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg text-slate-400 font-medium mb-4">Client feedback</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white">TESTIMONIALS</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="testimonial-card bg-slate-800 border-slate-700 hover:border-slate-600 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <FaQuoteLeft className="text-slate-400 text-3xl" />
                        <div className="flex space-x-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 text-lg" />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed mb-8 flex-grow text-lg text-center">
                        &quot;{testimonial.testimonial}&quot;
                      </p>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 bg-slate-700 rounded-full overflow-hidden">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMjAiIGZpbGw9IiM2Mzc0OEYiLz4KPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTZBOCA4IDAgMSAwIDggMGE4IDggMCAwIDAgMCAxNlpNOCA0YTQgNCAwIDEgMSAwIDhhNCA0IDAgMCAxIDAtOFoiIGZpbGw9IiNGMUY1RjkiLz4KPC9zdmc+Cg==';
                            }}
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-slate-400">{testimonial.role}</p>
                          <p className="text-slate-500 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white rounded-sm"
            >
              <FaChevronLeft className="mr-2" />
              Previous
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white rounded-sm"
            >
              Next
              <FaChevronRight className="ml-2" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-slate-400' : 'bg-slate-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-slate-400 max-w-2xl mx-auto">
            These testimonials reflect the quality and dedication I bring to every project. 
            Your success is my priority, and I&apos;m committed to delivering exceptional results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;