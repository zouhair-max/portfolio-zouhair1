import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import image1 from "../../assets/image1.png";

function Home() { 
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLanguage = i18nInstance.language;
  const isRTL = currentLanguage === 'ar';

  const stats = [
    { icon: Calendar, value: t('home.stats.experience.value'), label: t('home.stats.experience.label') },
    { icon: Award, value: t('home.stats.projects.value'), label: t('home.stats.projects.label') },
    { icon: MapPin, value: t('home.stats.location.value'), label: t('home.stats.location.label') }
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12   ">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`${isMobile?"space-y-6 lg:space-y-8 order-2 lg:order-1":"space-y-6 lg:space-y-8 order-2 -ml-32 lg:order-1"}`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="text-center lg:text-left ">
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-lg">
              {t('home.greeting')}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-cyan-600 dark:from-white dark:to-cyan-400 bg-clip-text text-transparent mt-2">
              {t('home.name')}
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
              <div className="w-4 h-0.5 bg-cyan-500"></div>
              <span className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
                {t('home.title')}
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
            {t('home.description')}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
            <button     onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf';
                link.download = 'CV_BOUDEIR.pdf';
                link.click();
                setIsOpen(false);
              }} 
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:shadow-lg shadow-cyan-500/25 text-sm sm:text-base">
              <Download size={18} className="sm:size-5" />
              {t('home.downloadCV')}
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative z-10 lg:-mt-[225px] flex justify-center">
            <img 
              src={image1} 
              alt={t('home.imageAlt')} 
              className={
                isMobile 
                  ? "w-full max-w-md sm:max-w-lg rounded-3xl shadow-xl" 
                  : "w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[900px]   -mr-[380px]"
              }
            />
            {/* Decorative elements */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;