import React, { useState } from 'react'
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div 
      className="min-h-screen  dark:bg-[#121212] py-12 px-4 sm:px-6 lg:px-8"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 lg:mb-20"
      >
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {t('portfolio.title', "Mon Portfolio")}<span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">.</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('portfolio.subtitle', "Découvrez mes projets web et mobile où l'innovation rencontre l'expérience utilisateur")}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl"
            onClick={() => openModal(project, index)}
          >
            {/* Media Container */}
            <div className="relative h-64 overflow-hidden">
              {project.isVideo ? (
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                >
                  <source src={project.media} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              )}
              
              {/* Type Badge */}
              <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'}`}>
                <span className={`flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                  project.type === 'web' 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/80 dark:text-blue-200' 
                    : 'bg-green-100 text-green-800 dark:bg-green-900/80 dark:text-green-200'
                }`}>
                  {project.type === 'web' ? <FaGlobe className={isRTL ? "ml-1" : "mr-1"} /> : <FaMobile className={isRTL ? "ml-1" : "mr-1"} />}
                  {project.type === 'web' ? t('portfolio.webApp', 'Web App') : t('portfolio.mobileApp', 'Mobile App')}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>

              {/* Click Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-gray-900 font-bold text-lg">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
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
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                      selectedProject.type === 'web' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {selectedProject.type === 'web' ? <FaGlobe className={isRTL ? "ml-1" : "mr-1"} /> : <FaMobile className={isRTL ? "ml-1" : "mr-1"} />}
                      {selectedProject.type === 'web' ? t('portfolio.webApplication', 'Web Application') : t('portfolio.mobileApplication', 'Mobile Application')}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <FaTimes className="text-gray-600 dark:text-gray-300 text-xl" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
                  {/* Media */}
                  <div className="lg:w-1/2 p-6">
                    <div className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 aspect-video">
                      {selectedProject.isVideo ? (
                        <video
                          autoPlay
                          muted
                          loop
                          controls
                          className="w-full h-full object-cover"
                        >
                          <source src={selectedProject.media} type="video/mp4" />
                        </video>
                      ) : (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:w-1/2 p-6 overflow-y-auto">
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {t('portfolio.technologiesUsed', 'Technologies utilisées')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

            
                  </div>
                </div>

                {/* Navigation */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4 pointer-events-none">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProjects('prev');
                    }}
                    className="pointer-events-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <FaArrowLeft className="text-gray-700 dark:text-gray-300" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProjects('next');
                    }}
                    className="pointer-events-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <FaArrowRight className="text-gray-700 dark:text-gray-300" />
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
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="text-center mt-16"
>
  <p className="text-gray-600 dark:text-gray-300 mb-6">
    {t('portfolio.cta.text', "Intéressé par mon travail ? N'hésitez pas à me contacter !")}
  </p>
<motion.a
  href="https://mail.google.com/mail/?view=cm&to=zouhairboudeir7678@gmail.com&su=Contact%20depuis%20Portfolio&body=Bonjour%20Zouhair,"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 inline-block"
>
  {t('portfolio.cta.button', 'Me Contacter')}
</motion.a>
</motion.div>

    </div>
  );
}