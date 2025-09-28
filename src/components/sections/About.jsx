import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Award, Code, Coffee, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import image1 from "../../assets/image4.jpg";

function About() { 
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLanguage = i18nInstance.language;
  const isRTL = currentLanguage === 'ar';

  const stats = [
    { icon: Calendar, value: '3+', label: t('about.stats.yearsExperience') },
    { icon: Award, value: '50+', label: t('about.stats.projectsCompleted') },
    { icon: MapPin, value: t('about.stats.morocco'), label: t('about.stats.basedIn') },
    { icon: Code, value: '24/7', label: t('about.stats.codingTime') }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const skills = [
    t('about.skills.reactNextjs'),
    t('about.skills.typescript'),
    t('about.skills.nodejs'),
    t('about.skills.python'),
    t('about.skills.uiuxDesign'),
    t('about.skills.mobileDevelopment'),
    t('about.skills.php'),
    t('about.skills.laravel'),
    t('about.skills.mysql'),
    t('about.skills.mongodb'),

  ];

  return (
    <section id="about" className="w-full py-20 lg:py-32  mt-[-100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')} <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{t('about.me')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ">
          
          {/* Image Section - Now on LEFT side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-1 flex justify-center lg:justify-start relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <motion.img 
                  src={image1} 
                  alt={t('about.imageAlt')} 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl lg:rounded-[2rem] shadow-2xl object-cover aspect-square"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent rounded-3xl lg:rounded-[2rem]"></div>
              </div>
              
              {/* Background Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 -translate-y-1/2 translate-x-8 w-32 h-32 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl"></div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20"
              >
                <Award className="w-8 h-8 text-cyan-600" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20"
              >
                <Heart className="w-8 h-8 text-red-500" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  x: [0, -10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/4 -right-6 lg:-right-8 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20"
              >
                <Code className="w-6 h-6 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Now on RIGHT side */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`order-2 lg:order-2 space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Introduction */}
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white"
              >
                {t('about.introduction.title')}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {t('about.introduction.description1')}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {t('about.introduction.description2')}
              </motion.p>
            </div>

            {/* Skills Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('about.skills.title')}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-cyan-200 dark:border-cyan-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
       
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;