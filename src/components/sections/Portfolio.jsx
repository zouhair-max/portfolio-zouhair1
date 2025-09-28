import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import qustainnaire from "../../assets/qustainnaire.png";
import khayrat from "../../assets/khayrat.png";
import leafypaws from "../../assets/leafypaws.jpg";
import choufrap from "../../assets/choufrap.mp4";
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaMobile, FaGlobe, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.choufrap.title', "Chouf Rap"),
      description: t('portfolio.projects.choufrap.description', "Une plateforme musicale dédiée au rap, permettant la découverte d'artistes et le partage de contenu musical. Cette application offre une expérience immersive avec des fonctionnalités avancées de streaming et de communauté."),
      type: "web",
      media: choufrap,
      isVideo: true,
      technologies: ["React", "Laravel", "MySql","Tailwind CSS"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: t('portfolio.projects.qustainnaire.title', "Qustainnaire"),
      description: t('portfolio.projects.qustainnaire.description', "Application web innovante pour créer et gérer des questionnaires interactifs avec analyse en temps réel. Interface intuitive et tableaux de détail pour suivre les performances."),
      type: "web",
      image: qustainnaire,
      isVideo: false,
      technologies: ["Inetia", "Laravel", "Tailwind CSS","MySql"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: t('portfolio.projects.khayrat.title', "Khayrat"),
      description: t('portfolio.projects.khayrat.description', "Application mobile de bienfaisance facilitant les dons et le suivi des actions caritatives. Sécurisée et transparente pour une expérience de don optimale."),
      type: "mobile",
      image: khayrat,
      isVideo: false,
      technologies: ["React Native", "Laravel", "MySQL", "Stripe"],
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: t('portfolio.projects.leafypaws.title', "Leafy Paws"),
      description: t('portfolio.projects.leafypaws.description', "Application mobile connectant les propriétaires d'animaux avec des services de garde et vétérinaires. Géolocalisation et système de rendez-vous intégré."),
      type: "mobile",
      image: leafypaws,
      isVideo: false,
      technologies: ["React Native", "Laravel", "MySQL"],
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      observer.observe(portfolioSection);
    }

    return () => {
      if (portfolioSection) observer.unobserve(portfolioSection);
    };
  }, []);

  const openModal = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const navigateProjects = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projects.length;
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length;
    }
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.8,
      rotateY: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.7,
      rotateX: 15,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const modalContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const techTagVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div 
      id="portfolio"
      className="min-h-screen dark:bg-[#121212] py-12 px-4 sm:px-6 lg:px-8"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 lg:mb-20"
      >
        <motion.h2 
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('portfolio.title', "Mon Portfolio")}
          <motion.span 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            animate={pulseAnimation}
          >
            .
          </motion.span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('portfolio.subtitle', "Découvrez mes projets web et mobile où l'innovation rencontre l'expérience utilisateur")}
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ 
              y: -12,
              scale: 1.02,
              transition: { 
                duration: 0.4, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 300
              }
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden group cursor-pointer relative"
            onClick={() => openModal(project, index)}
          >
            {/* Background Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-3xl"
              transition={{ duration: 0.4 }}
            />
            
            {/* Media Container */}
            <div className="relative h-64 overflow-hidden">
              {project.isVideo ? (
                <motion.video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <source src={project.media} type="video/mp4" />
                </motion.video>
              ) : (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
              
              {/* Type Badge */}
              <motion.div 
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className={`flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm border ${
                  project.type === 'web' 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/80 dark:text-blue-200 border-blue-200 dark:border-blue-700' 
                    : 'bg-green-100 text-green-800 dark:bg-green-900/80 dark:text-green-200 border-green-200 dark:border-green-700'
                }`}>
                  {project.type === 'web' ? <FaGlobe className={isRTL ? "ml-1" : "mr-1"} /> : <FaMobile className={isRTL ? "ml-1" : "mr-1"} />}
                  {project.type === 'web' ? t('portfolio.webApp', 'Web App') : t('portfolio.mobileApp', 'Mobile App')}
                </span>
              </motion.div>

              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start"
                whileHover={{ opacity: 1 }}
              >
                <div className="p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <motion.h3 
                    className="text-white text-xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-200 text-sm line-clamp-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Click Indicator */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm rounded-full p-4"
                  animate={floatingAnimation}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-lg">+</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <motion.h3 
                className="text-xl font-bold text-black dark:text-white mb-2"
                whileHover={{ color: "#06b6d4" }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2"
                whileHover={{ color: "#6b7280" }}
                transition={{ duration: 0.2 }}
              >
                {project.description}
              </motion.p>
              
              {/* Technologies */}
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    variants={techTagVariants}
                    whileHover="hover"
                    className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm border border-cyan-200 dark:border-cyan-700"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50"
              onClick={closeModal}
            />
            
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-4 lg:inset-20 z-50 flex items-center justify-center"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <motion.div 
                  className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
                  variants={modalContentVariants}
                >
                  <div>
                    <motion.h3 
                      className="text-2xl lg:text-3xl font-bold text-black dark:text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <motion.span 
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                        selectedProject.type === 'web' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {selectedProject.type === 'web' ? <FaGlobe className={isRTL ? "ml-1" : "mr-1"} /> : <FaMobile className={isRTL ? "ml-1" : "mr-1"} />}
                      {selectedProject.type === 'web' ? t('portfolio.webApplication', 'Web Application') : t('portfolio.mobileApplication', 'Mobile Application')}
                    </motion.span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="p-3 hover:bg-white/50 dark:hover:bg-gray-700/50 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <FaTimes className="text-gray-600 dark:text-gray-300 text-xl" />
                  </motion.button>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
                  {/* Media */}
                  <motion.div 
                    className="lg:w-1/2 p-6"
                    variants={modalContentVariants}
                  >
                    <motion.div 
                      className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 aspect-video shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {selectedProject.isVideo ? (
                        <motion.video
                          autoPlay
                          muted
                          loop
                          controls
                          className="w-full h-full object-cover rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <source src={selectedProject.media} type="video/mp4" />
                        </motion.video>
                      ) : (
                        <motion.img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        />
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Details */}
                  <motion.div 
                    className="lg:w-1/2 p-6 overflow-y-auto"
                    variants={modalContentVariants}
                  >
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {selectedProject.description}
                    </motion.p>

                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold text-black dark:text-white mb-3">
                        {t('portfolio.technologiesUsed', 'Technologies utilisées')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <motion.span 
                            key={index}
                            variants={techTagVariants}
                            whileHover="hover"
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium shadow-lg"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Navigation */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4 pointer-events-none">
                  <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProjects('prev');
                    }}
                    className="pointer-events-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <FaArrowLeft className="text-gray-700 dark:text-gray-300 text-lg" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProjects('next');
                    }}
                    className="pointer-events-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <FaArrowRight className="text-gray-700 dark:text-gray-300 text-lg" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-16"
      >
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-6 text-lg"
          animate={pulseAnimation}
        >
          {t('portfolio.cta.text', "Intéressé par mon travail ? N'hésitez pas à me contacter !")}
        </motion.p>
        <motion.a
          href="https://mail.google.com/mail/?view=cm&to=zouhairboudeir768@gmail.com&su=Contact%20depuis%20Portfolio&body=Bonjour%20Zouhair,"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 inline-block text-lg"
        >
          {t('portfolio.cta.button', 'Me Contacter')}
        </motion.a>
      </motion.div>
    </div>
  );
}