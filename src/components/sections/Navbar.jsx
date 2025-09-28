import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  Menu, X, User, FolderOpen, Code, FileText, Mail, 
  Sun, Moon, Download, Linkedin, Github, Globe, ChevronDown,
  Sparkles, Home
} from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/loog.png";
import i18n from "../../context/i18n"
;import { motion } from 'framer-motion';


// Configuration
const NAV_CONFIG = {
  menuItems: [
    { id: "home", labelKey: "home", icon: Home },
    { id: "about", labelKey: "about", icon: User },
    { id: "portfolio", labelKey: "portfolio", icon: FolderOpen },
    { id: "skills", labelKey: "skills", icon: Code },
    { id: "blog", labelKey: "blog", icon: FileText },
    { id: "contact", labelKey: "contact", icon: Mail }
  ],
  languages: [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "French", flag: "🇫🇷" },
  ],
  socialLinks: [
    { 
      href: "https://github.com", 
      icon: Github, 
      label: "GitHub"
    },
    { 
      href: "https://linkedin.com", 
      icon: Linkedin, 
      label: "LinkedIn"
    }
  ]
};

const PortfolioNavbar = () => {
  const { t, i18n: i18nInstance } = useTranslation(); // Utiliser l'instance de i18n du hook
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('button[aria-label="Menu"]')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const navbarHeight = navRef.current?.offsetHeight || 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setActiveItem(sectionId);
    setIsOpen(false);
  }, []);

  // Handle scroll and section observation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const observerOptions = {
      root: null,
      rootMargin: isMobile ? '-10% 0px -80% 0px' : '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    }, observerOptions);

    NAV_CONFIG.menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isMobile]);

  // Theme effect
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-dark-mode');
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    } else {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('portfolio-dark-mode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Language change - CORRECTION ICI
  const changeLanguage = (lng) => {
    i18nInstance.changeLanguage(lng); // Utiliser i18nInstance au lieu de i18n
    localStorage.setItem('portfolio-language', lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    setShowLanguageDropdown(false);
  };

  // Close mobile menu when orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      if (isOpen) setIsOpen(false);
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, [isOpen]);

  // MenuItem component
  const MenuItem = ({ item, isMobile = false }) => {
    const IconComponent = item.icon;
    const isActive = activeItem === item.id;
    const isRTL = i18nInstance.language === 'ar'; // Utiliser i18nInstance
    if (isMobile) {
      return (
        <li className="w-full">
          <button
            onClick={() => scrollToSection(item.id)}
            className={`
              flex items-center gap-4 w-full px-6 py-4 rounded-2xl font-medium text-base
              transition-all duration-300 ease-in-out relative group
              ${isRTL ? "flex-row-reverse" : ""}
              ${isActive 
                ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25" 
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-cyan-600 dark:hover:text-cyan-400"
              }
              active:scale-95
            `}
          >
            <IconComponent 
              size={22} 
              className={`transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} 
            />
            <span className="relative z-10 font-semibold">{t(`nav.${item.labelKey}`)}</span>
            
            {/* Active indicator for mobile */}
            {isActive && (
              <div className={`absolute ${isRTL ? 'left-4' : 'right-4'} w-2 h-2 bg-white rounded-full`}></div>
            )}
          </button>
        </li>
      );
    }

    return (
      <li>
        <button
          onClick={() => scrollToSection(item.id)}
          className={`
            flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm
            transition-all duration-300 ease-in-out relative group
            ${isRTL ? "flex-row-reverse" : ""}
            ${isActive 
              ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25" 
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-cyan-600 dark:hover:text-cyan-400 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
            }
            lg:px-3 lg:py-2 xl:px-4 xl:py-2.5
          `}
        >
          <IconComponent 
            size={18} 
            className={`transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} 
          />
          <span className="relative z-10 hidden sm:inline-block">{t(`nav.${item.labelKey}`)}</span>
          
          {/* Active indicator for desktop */}
          {isActive && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
          )}
        </button>
      </li>
    );
  };

  const currentLanguage = i18nInstance.language; // Utiliser i18nInstance
  const isRTL = currentLanguage === 'ar';
  const currentLanguageObj = NAV_CONFIG.languages.find(lang => lang.code === currentLanguage);

  return (
    <>
      <nav 
        ref={navRef}
        className={`
          fixed w-full  top-0 z-50 transition-all duration-500 ease-out 
          ${scrolled 
            ? "bg-transparent dark:bg-transparent  backdrop-blur-xl shadow-xl shadow-gray-200/50 dark:shadow-black/30 border-b border-gray-100/50 dark:border-gray-800/50" 
            : "bg-transparent dark:bg-transparent  backdrop-blur-md"
          }
          h-16 lg:h-20
        `}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
         <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1}}iv 
 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">

            {/* Logo */}
            <div
              className={`${isMobile ? "" :  "flex items-center group cursor-pointer -ml-72"}`}
              onMouseEnter={() => setIsHoveringLogo(true)}
              onMouseLeave={() => setIsHoveringLogo(false)}
              onClick={() => scrollToSection('hgome')}
            >
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className={`h-24 lg:h-36  w-auto transition-all duration-500   ${
                    isHoveringLogo ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                  }`}
                />
                {isHoveringLogo && (
                  <Sparkles 
                    size={14} 
                    className="absolute -top-1 -right-1 text-cyan-400 animate-pulse" 
                  />
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className={`flex ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} xl:space-x-3`}>
                {NAV_CONFIG.menuItems.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </ul>
            </div>

            {/* Desktop Right Side Menu */}
            <div className="hidden lg:flex items-center space-x-4 ">
              <div className=" items-center flex ml-72 -mr-[200px]  ">

                {/* Language Selector */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="
                      flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium 
                      bg-gray-50 dark:bg-gradient-to-r from-cyan-500 to-cyan-600 text-gray-700 dark:text-gray-200
                      hover:bg-white dark:hover:bg-gray-700/90    dark:   border border-cyan-400/30
                      hover:shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-sm
                      min-h-[44px] min-w-[44px] justify-center
                    "
                    aria-label="Select language"
                  >
                    <Globe size={16} className="text-cyan-500 dark:text-white " />
                    <span className="font-semibold hidden sm:block">{currentLanguage.toUpperCase()}</span>
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${showLanguageDropdown ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {showLanguageDropdown && (
                    <div className="
                      absolute top-full mt-2 right-0 w-48 bg-white/95 dark:bg-gray-800/95 
                      rounded-2xl shadow-2xl border border-gray-100/50 dark:border-gray-700/50
                      backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300
                      overflow-hidden z-50
                    ">
                      {NAV_CONFIG.languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`
                            w-full px-4 py-3 text-left text-sm flex items-center gap-3
                            transition-all duration-200 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20
                            ${currentLanguage === lang.code 
                              ? 'bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400' 
                              : 'text-gray-700 dark:text-gray-200'
                            }
                            min-h-[44px]
                          `}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <div className="flex flex-col items-start">
                            <span className="font-semibold">{lang.name}</span>
                          </div>
                          {currentLanguage === lang.code && (
                            <div className="ml-auto w-2 h-2 bg-cyan-500 rounded-full"></div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Theme Toggle */}
                <div className="relative ml-3">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="
                      p-3 rounded-xl bg-gray-50 dark:bg-gradient-to-r from-cyan-500 to-cyan-600
                      text-gray-600 dark:text-white hover:text-amber-500                       border border-cyan-400/30 dark:hover:text-amber-400
                       dark:
                      hover:bg-white dark:hover:bg-gray-700/90 hover:shadow-md
                      transition-all duration-300 hover:scale-110 backdrop-blur-sm
                      min-h-[44px] min-w-[44px] flex items-center justify-center
                    "
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                </div>

                {/* Download CV Button */}
                <div className="relative ml-5">
                  <button 
                    className="
                      flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600
                      text-white px-6 py-2.5 rounded-xl font-semibold text-sm
                      hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300
                      hover:shadow-lg hover:scale-105 shadow-lg shadow-cyan-500/25
                      border border-cyan-400/30 relative overflow-hidden group
                      min-h-[44px] 
                    "
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/cv.pdf';
                      link.download = 'CV_Portfolio.pdf';
                      link.click();
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <Download size={16} className="relative z-10" />
                    <span className="relative z-10 hidden sm:inline-block">Download CV</span>
                    <span className="relative z-10 sm:hidden">CV</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="
                  p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 
                  hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110
                  min-h-[44px] min-w-[44px] flex items-center justify-center
                "
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 
                  hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 
                  relative min-h-[44px] min-w-[44px] flex items-center justify-center
                "
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
                
                {/* Mobile menu indicator */}
                {!isOpen && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <div 
          ref={mobileMenuRef}
          className={`
            lg:hidden transition-all duration-500 ease-in-out overflow-hidden
            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
            bg-white dark:bg-gray-900/98 backdrop-blur-xl border-t border-gray-100/50 dark:border-gray-800/50
            shadow-2xl absolute top-full left-0 right-0
          `}
          style={{
            maxHeight: isOpen ? 'calc(100vh - 64px)' : '0px'
          }}
        >
          <div className="px-4 py-4 space-y-2 max-h-[60vh] overflow-y-auto">
            {NAV_CONFIG.menuItems.map((item) => (
              <MenuItem key={item.id} item={item} isMobile={true} />
            ))}
          </div>
          
          <div className="px-6 py-6 border-t border-gray-100/50 dark:border-gray-800/50 space-y-6 bg-gradient-to-t from-gray-50/50 to-transparent dark:from-gray-800/50">
            
            {/* Language Selector Mobile */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Select Language
              </label>
              <div className="grid grid-cols-3 gap-2">
                {NAV_CONFIG.languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`
                      flex flex-col items-center justify-center p-3 rounded-xl border-2
                      transition-all duration-300 hover:scale-105 active:scale-95
                      min-h-[60px]
                      ${currentLanguage === lang.code 
                        ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400' 
                        : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }
                    `}
                  >
                    <span className="text-2xl mb-1">{lang.flag}</span>
                    <span className="text-xs font-medium">{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Social Links Mobile */}
            <div className="flex justify-center space-x-4 pt-4">
              {NAV_CONFIG.socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400
                      hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400
                      transition-all duration-300 hover:scale-110
                      min-h-[44px] min-w-[44px] flex items-center justify-center
                    "
                    aria-label={social.label}
                  >
                    <SocialIcon size={20} />
                  </a>
                );
              })}
            </div>
            
            {/* CTA Button Mobile */}
            <button 
              className="
                w-full flex items-center justify-center gap-3 
                bg-gradient-to-r from-cyan-500 to-cyan-600 
                text-white p-4 rounded-xl font-semibold text-base
                hover:from-cyan-600 hover:to-cyan-700 active:scale-95
                transition-all duration-300 hover:shadow-lg
                shadow-lg shadow-cyan-500/25 min-h-[52px]
              "
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf';
                link.download = 'CV_BOUDEIR.pdf';
                link.click();
                setIsOpen(false);
              }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default PortfolioNavbar;