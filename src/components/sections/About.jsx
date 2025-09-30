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
    { icon: Calendar, value: '2+', label: t('about.stats.yearsExperience') },
    { icon: Award, value: '4+', label: t('about.stats.projectsCompleted') },
    { icon: MapPin, value: t('about.stats.morocco'), label: t('about.stats.basedIn') },
    { icon: Code, value: '24/7', label: t('about.stats.codingTime') }
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (aboutSection) observer.unobserve(aboutSection);
    };
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: isRTL ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: isRTL ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      backgroundColor: "rgba(6, 182, 212, 0.15)",
      boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const floatingIconVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    floatReverse: {
      y: [0, 15, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    },
    floatSide: {
      x: [0, -10, 0],
      rotate: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -30 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const gradientBackgroundVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="w-full py-20 lg:py-32 xl:mt-[-100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('about.title')} <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{t('about.me')}</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Image Section - Now on LEFT side */}
          <motion.div
            variants={slideInLeftVariants}
            className="order-1 lg:order-1 flex justify-center lg:justify-start relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <motion.img 
                  src={image1} 
                  alt={t('about.imageAlt')} 
                  variants={imageVariants}
                  whileHover="hover"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl lg:rounded-[2rem] shadow-2xl object-cover aspect-square"
                />
                
                {/* Image Overlay Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent rounded-3xl lg:rounded-[2rem]"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
              
              {/* Background Decorative Elements */}
              <motion.div 
                className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"
                variants={gradientBackgroundVariants}
                animate={isInView ? "pulse" : "hidden"}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-tr from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl"
                variants={gradientBackgroundVariants}
                animate={isInView ? "pulse" : "hidden"}
                transition={{ delay: 0.5 }}
              />
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 translate-x-8 w-32 h-32 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-2xl"
                variants={gradientBackgroundVariants}
                animate={isInView ? "pulse" : "hidden"}
                transition={{ delay: 1 }}
              />
              
              {/* Floating Elements */}
              <motion.div
                variants={floatingIconVariants}
                animate="float"
                className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Award className="w-8 h-8 text-cyan-600" />
              </motion.div>
              
              <motion.div
                variants={floatingIconVariants}
                animate="floatReverse"
                className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20"
                whileHover={{ scale: 1.2, rotate: -360 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="w-8 h-8 text-red-500" />
              </motion.div>
              
              <motion.div
                variants={floatingIconVariants}
                animate="floatSide"
                className="absolute top-1/4 -right-6 lg:-right-8 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20"
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Code className="w-6 h-6 text-blue-600" />
              </motion.div>

              {/* Additional floating particles */}
              <motion.div
                className="absolute top-10 -right-4 w-3 h-3 bg-cyan-400 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute bottom-20 -left-4 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -3, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - Now on RIGHT side */}
          <motion.div
            variants={slideInRightVariants}
            className={`order-2 lg:order-2 space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Introduction */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.h3 
                variants={slideUpVariants}
                className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white"
              >
                {t('about.introduction.title')}
              </motion.h3>
              
              <motion.p 
                variants={slideUpVariants}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {t('about.introduction.description1')}
              </motion.p>
              
              <motion.p 
                variants={slideUpVariants}
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {t('about.introduction.description2')}
              </motion.p>
            </motion.div>

            {/* Skills Tags */}
            <motion.div 
              variants={slideUpVariants}
              className="space-y-4"
            >
              <motion.h4 
                className="text-xl font-semibold text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                {t('about.skills.title')}
              </motion.h4>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={skillItemVariants}
                    whileHover="hover"
                    custom={index}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-cyan-200 dark:border-cyan-700 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-6"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={slideUpVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 mx-auto mb-2" />
                  </motion.div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;