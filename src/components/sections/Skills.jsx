import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  // Icônes SVG modernes
  const icons = {
    programming: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    web: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    backend: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    databases: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    versionControl: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    softSkills: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    tools: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  };

  const skillsData = [
    {
      title: t('skills.categories.programming'),
      skills: [
        t('skills.programming.js'),
        t('skills.programming.python'),
        t('skills.programming.php'),
      ],
      icon: icons.programming
    },
    {
      title: t('skills.categories.web'),
      skills: [
        t('skills.web.frontend'),
        t('skills.web.frameworks'),
        t('skills.web.styling')
      ],
      icon: icons.web
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        t('skills.backend.nodejs'),
        t('skills.backend.laravel'),
        t('skills.backend.django'),
        t('skills.backend.rails')
      ],
      icon: icons.backend
    },
    {
      title: t('skills.categories.databases'),
      skills: [
        t('skills.databases.relational'),
        t('skills.databases.nosql'),
        t('skills.databases.tools')
      ],
      icon: icons.databases
    },
    {
      title: t('skills.categories.versionControl'),
      skills: [
        t('skills.versionControl.git'),
        t('skills.versionControl.hosting')
      ],
      icon: icons.versionControl
    },
    {
      title: t('skills.categories.softSkills'),
      skills: [
        t('skills.softSkills.problemSolving'),
        t('skills.softSkills.communication'),
        t('skills.softSkills.timeManagement'),
        t('skills.softSkills.adaptability'),
        t('skills.softSkills.attentionToDetail')
      ],
      icon: icons.softSkills
    },
    {
      title: t('skills.categories.tools'),
      skills: [
        t('skills.tools.ides'),
        t('skills.tools.localEnv'),
        t('skills.tools.documentation')
      ],
      icon: icons.tools
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: isRTL ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: isRTL ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  };

  const categoryButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      x: isRTL ? -5 : 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    },
    active: {
      scale: 1.02,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.02,
      x: isRTL ? -5 : 5,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pageTransition = {
    hidden: { opacity: 0, x: isRTL ? 50 : -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      x: isRTL ? -50 : 50,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div 
      id="skills"
      className="min-h-screen py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8 transition-colors duration-300"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('skills.title')}
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        {/* Mobile Categories Switcher (visible on mobile) */}
        <motion.div 
          className="lg:hidden mb-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-4 sm:p-6 mb-4 border border-gray-200 dark:border-gray-700"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                {t('skills.categoriesTitle')}
              </h2>
              <motion.span 
                className="text-cyan-600 dark:text-cyan-400"
                animate={floatingAnimation}
              >
                {skillsData[activeCategory].icon}
              </motion.span>
            </div>
            
            {/* Category Selector for Mobile */}
            <motion.select 
              className="w-full p-3 sm:p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-base sm:text-lg transition-colors duration-200"
              value={activeCategory}
              onChange={(e) => setActiveCategory(Number(e.target.value))}
              whileFocus={{ scale: 1.02 }}
            >
              {skillsData.map((category, index) => (
                <option key={index} value={index} className="bg-white dark:bg-gray-700">
                  {category.title}
                </option>
              ))}
            </motion.select>
            
            {/* Progress Dots */}
            <motion.div 
              className="flex justify-center gap-2 mt-4"
              variants={containerVariants}
            >
              {skillsData.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    activeCategory === index 
                      ? 'bg-cyan-600 dark:bg-cyan-400 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Categories Navigation (visible on desktop) */}
          <motion.div 
            className="hidden lg:block lg:w-1/4"
            variants={slideInLeft}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-6 sticky top-6 border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-semibold text-black dark:text-white mb-4">
                {t('skills.categoriesTitle')}
              </h2>
              <div className="space-y-2">
                {skillsData.map((category, index) => (
                  <motion.button
                    key={index}
                    variants={categoryButtonVariants}
                    whileHover="hover"
                    whileTap="active"
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                      activeCategory === index
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 text-white shadow-lg transform -translate-y-1 border border-cyan-400 dark:border-cyan-500'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 hover:shadow-md border border-gray-200 dark:border-gray-600'
                    }`}
                    onClick={() => setActiveCategory(index)}
                  >
                    <motion.span 
                      className={`transition-transform duration-300 group-hover:scale-110 ${
                        activeCategory === index ? 'text-white' : 'text-cyan-600 dark:text-cyan-400'
                      }`}
                      animate={activeCategory === index ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.span>
                    <span className="font-medium">{category.title}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Display */}
          <motion.div 
            className="lg:w-3/4"
            variants={slideInRight}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={pageTransition}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <motion.div 
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 p-4 sm:p-6 text-white border-b border-cyan-400 dark:border-cyan-500"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.span 
                      className="text-2xl sm:text-3xl text-white"
                      animate={floatingAnimation}
                    >
                      {skillsData[activeCategory].icon}
                    </motion.span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                      {skillsData[activeCategory].title}
                    </h2>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 sm:p-6 lg:p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="grid gap-3 sm:gap-4 lg:gap-6">
                    {skillsData[activeCategory].skills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        variants={skillItemVariants}
                        whileHover="hover"
                        className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 hover:border-cyan-300 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-md group"
                      >
                        <motion.div 
                          className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 sm:mt-1 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors border border-green-200 dark:border-green-700/50"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                        <span className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed flex-1">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.div 
              className={`flex justify-between items-center mt-6 px-2 ${isRTL ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.button
                onClick={() => setActiveCategory(prev => prev > 0 ? prev - 1 : skillsData.length - 1)}
                whileHover={{ scale: 1.05, x: isRTL ? 5 : -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              >
                {!isRTL && (
                  <motion.svg 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: -3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </motion.svg>
                )}
                {t('skills.previous')}
                {isRTL && (
                  <motion.svg 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                )}
              </motion.button>
              
              {/* Progress Dots for Desktop */}
              <motion.div 
                className="hidden sm:flex gap-2"
                variants={containerVariants}
              >
                {skillsData.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeCategory === index 
                        ? 'bg-cyan-600 dark:bg-cyan-400 scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </motion.div>
              
              <motion.button
                onClick={() => setActiveCategory(prev => prev < skillsData.length - 1 ? prev + 1 : 0)}
                whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              >
                {!isRTL && (
                  <motion.svg 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                )}
                {t('skills.next')}
                {isRTL && (
                  <motion.svg 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: -3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </motion.svg>
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { value: skillsData.length, label: t('skills.stats.categories'), color: 'cyan' },
            { value: skillsData.reduce((total, category) => total + category.skills.length, 0), label: t('skills.stats.totalSkills'), color: 'cyan' },
            { value: '2+', label: t('skills.stats.yearsExp'), color: 'green' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statsVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-gray-900/50 p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <motion.div 
                className={`text-2xl sm:text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-1 sm:mb-2`}
                animate={pulseAnimation}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Hint (visible only on mobile) */}
        <motion.div 
          className="lg:hidden text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={floatingAnimation}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </motion.svg>
            {t('skills.mobileHint')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}