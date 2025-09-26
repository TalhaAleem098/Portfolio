'use client';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

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

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-base sm:text-lg ${i < rating ? 'text-yellow-400' : 'text-slate-600'}`}>
        ★
      </span>
    ));
  };

  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900" ref={ref}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            What Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Don't just take my word for it - hear from clients who've experienced exceptional results
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 lg:w-8 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-6 lg:w-8 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-x-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500 pb-4">
            <div className="flex gap-4 sm:gap-6 w-max pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-slate-800 border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 
                    w-72 sm:w-80 md:w-96 lg:w-[420px] xl:w-[480px] 
                    min-h-[280px] sm:min-h-[300px] lg:min-h-[320px]
                    hover:bg-slate-750 hover:border-slate-600 transition-all duration-300 
                    hover:shadow-xl hover:shadow-slate-900/20 
                    flex flex-col justify-between ${
                    inView ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: inView ? `${400 + index * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex-1">
                    <div className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 mb-3 sm:mb-4 font-serif">"</div>
                    
                    <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                      {testimonial.testimonial}
                    </p>
                    
                    <div className="flex mb-4 sm:mb-6">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-600 shrink-0">
                      <span className="text-slate-300 font-semibold text-xs sm:text-sm">
                        {getInitials(testimonial.name)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-white font-semibold text-base sm:text-lg truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-slate-500 text-xs truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`text-center mt-6 sm:mt-8 transition-all duration-1000 delay-700 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-slate-500 text-xs sm:text-sm flex items-center justify-center gap-2">
            <span className="hidden sm:inline">→</span>
            <span className="px-2">Scroll horizontally to see more testimonials</span>
            <span className="hidden sm:inline">←</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 1px;
        }
        
        .scrollbar-track-slate-800::-webkit-scrollbar-track {
          background-color: rgb(30 41 59);
          border-radius: 3px;
        }
        
        .scrollbar-thumb-slate-600::-webkit-scrollbar-thumb {
          background-color: rgb(71 85 105);
          border-radius: 3px;
        }
        
        .hover\\:scrollbar-thumb-slate-500::-webkit-scrollbar-thumb:hover {
          background-color: rgb(100 116 139);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;