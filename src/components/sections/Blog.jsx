import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Clock, User, Code, Lightbulb, Rocket, TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeCard, setActiveCard] = useState(null);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  const blogPosts = [
    {
      id: 1,
      titleKey: "blog.posts.reactHooks.title",
      icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Dec 2024",
      readTimeKey: "blog.posts.reactHooks.readTime",
      categoryKey: "blog.categories.react",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/20",
      shadowColor: "shadow-cyan-500/20",
      content: {
        introKey: "blog.posts.reactHooks.intro",
        sections: [
          {
            titleKey: "blog.posts.reactHooks.sections.useState.title",
            descriptionKey: "blog.posts.reactHooks.sections.useState.description",
            code: "const [count, setCount] = useState(0);"
          },
          {
            titleKey: "blog.posts.reactHooks.sections.useEffect.title",
            descriptionKey: "blog.posts.reactHooks.sections.useEffect.description",
            code: "useEffect(() => {\n  fetchData();\n}, []);"
          }
        ],
        summaryKey: "blog.posts.reactHooks.summary"
      }
    },
    {
      id: 2,
      titleKey: "blog.posts.beginnerMistakes.title",
      icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Nov 2024",
      readTimeKey: "blog.posts.beginnerMistakes.readTime",
      categoryKey: "blog.categories.learning",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      shadowColor: "shadow-orange-500/20",
      content: {
        introKey: "blog.posts.beginnerMistakes.intro",
        sections: [
          {
            titleKey: "blog.posts.beginnerMistakes.sections.mistake1.title",
            descriptionKey: "blog.posts.beginnerMistakes.sections.mistake1.description"
          },
          {
            titleKey: "blog.posts.beginnerMistakes.sections.mistake2.title",
            descriptionKey: "blog.posts.beginnerMistakes.sections.mistake2.description"
          },
          {
            titleKey: "blog.posts.beginnerMistakes.sections.mistake3.title",
            descriptionKey: "blog.posts.beginnerMistakes.sections.mistake3.description"
          }
        ]
      }
    },
    {
      id: 3,
      titleKey: "blog.posts.portfolioBuild.title",
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Oct 2024",
      readTimeKey: "blog.posts.portfolioBuild.readTime",
      categoryKey: "blog.categories.portfolio",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10",
      borderColor: "border-green-500/20",
      shadowColor: "shadow-green-500/20",
      content: {
        introKey: "blog.posts.portfolioBuild.intro",
        sections: [
          {
            titleKey: "blog.posts.portfolioBuild.sections.step1.title",
            descriptionKey: "blog.posts.portfolioBuild.sections.step1.description"
          },
          {
            titleKey: "blog.posts.portfolioBuild.sections.step2.title",
            descriptionKey: "blog.posts.portfolioBuild.sections.step2.description"
          },
          {
            titleKey: "blog.posts.portfolioBuild.sections.step3.title",
            descriptionKey: "blog.posts.portfolioBuild.sections.step3.description"
          },
          {
            titleKey: "blog.posts.portfolioBuild.sections.step4.title",
            descriptionKey: "blog.posts.portfolioBuild.sections.step4.description"
          }
        ],
        summaryKey: "blog.posts.portfolioBuild.summary"
      }
    },
    {
      id: 4,
      titleKey: "blog.posts.portfolioCV.title",
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Sep 2024",
      readTimeKey: "blog.posts.portfolioCV.readTime",
      categoryKey: "blog.categories.career",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      borderColor: "border-purple-500/20",
      shadowColor: "shadow-purple-500/20",
      content: {
        introKey: "blog.posts.portfolioCV.intro",
        sections: [
          {
            titleKey: "blog.posts.portfolioCV.sections.whatInclude.title",
            descriptionKey: "blog.posts.portfolioCV.sections.whatInclude.description"
          },
          {
            titleKey: "blog.posts.portfolioCV.sections.tips.title",
            descriptionKey: "blog.posts.portfolioCV.sections.tips.description"
          }
        ]
      }
    },
    {
      id: 5,
      titleKey: "blog.posts.webTrends.title",
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Jan 2025",
      readTimeKey: "blog.posts.webTrends.readTime",
      categoryKey: "blog.categories.trends",
      gradient: "from-yellow-500 to-red-500",
      bgGradient: "from-yellow-500/10 to-red-500/10",
      borderColor: "border-yellow-500/20",
      shadowColor: "shadow-yellow-500/20",
      content: {
        introKey: "blog.posts.webTrends.intro",
        sections: [
          {
            titleKey: "blog.posts.webTrends.sections.ai.title",
            descriptionKey: "blog.posts.webTrends.sections.ai.description"
          },
          {
            titleKey: "blog.posts.webTrends.sections.serverless.title",
            descriptionKey: "blog.posts.webTrends.sections.serverless.description"
          },
          {
            titleKey: "blog.posts.webTrends.sections.jamstack.title",
            descriptionKey: "blog.posts.webTrends.sections.jamstack.description"
          },
          {
            titleKey: "blog.posts.webTrends.sections.web3.title",
            descriptionKey: "blog.posts.webTrends.sections.web3.description"
          },
          {
            titleKey: "blog.posts.webTrends.sections.performance.title",
            descriptionKey: "blog.posts.webTrends.sections.performance.description"
          }
        ]
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const toggleCard = (postId) => {
    setActiveCard(activeCard === postId ? null : postId);
    // Scroll to the card when opening on mobile
    if (activeCard !== postId && window.innerWidth < 768) {
      setTimeout(() => {
        const element = document.querySelector(`[data-card-id="${postId}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen " dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <div className="text-center py-12 md:py-20 px-4 ">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 md:mb-6 leading-tight"
        >
          {t('blog.title')} <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{t('blog.highlight')}</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          {t('blog.subtitle')}
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl -mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid gap-6 md:gap-8 lg:gap-12">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              data-card-id={post.id}
              className={`group relative transform transition-all duration-1000 ${
                visibleCards.has(post.id) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`relative bg-white dark:bg-gray-800 shadow-lg md:shadow-xl dark:shadow-gray-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden border ${post.borderColor} hover:border-white/40 transition-all duration-500 hover:shadow-2xl ${post.shadowColor} hover:-translate-y-1 md:hover:-translate-y-2`}>
                {/* Enhanced Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${post.bgGradient} opacity-15 md:opacity-20 group-hover:opacity-25 md:group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Animated Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-6 md:p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8">
                    {/* Left Side - Meta Info */}
                    <div className="lg:w-1/3 space-y-4 md:space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
                        <div className={`p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-r ${post.gradient} shadow-lg w-fit`}>
                          {post.icon}
                        </div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r ${post.gradient} bg-opacity-20 text-white border ${post.borderColor}`}>
                            {t(post.categoryKey)}
                          </span>
                        </div>
                      </div>
                      
                      <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold text-black ${post.gradient}  dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:  group-hover:bg-clip-text transition-all duration-500 leading-tight`}>
                        {t(post.titleKey)}
                      </h2>
                      
                   
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:w-2/3 space-y-4 md:space-y-6">
                      <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                        {t(post.content.introKey)}
                      </p>
                      
                      {activeCard === post.id ? (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.5 }}
                          className="space-y-4 md:space-y-6 overflow-hidden"
                        >
                          {post.content.sections.map((section, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className={`p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r ${post.bgGradient} border ${post.borderColor} backdrop-blur-sm`}
                            >
                              <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white mb-2 md:mb-3">
                                {t(section.titleKey)}
                              </h3>
                              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-2 md:mb-3">
                                {t(section.descriptionKey)}
                              </p>
                              {section.code && (
                                <div className="bg-white dark:bg-gray-900/50 rounded-lg md:rounded-xl p-3 md:p-4 overflow-x-auto border border-cyan-500/20">
                                  <code className="text-cyan-600 dark:text-cyan-400 text-xs md:text-sm whitespace-pre">
                                    {section.code}
                                  </code>
                                </div>
                              )}
                            </motion.div>
                          ))}
                          {post.content.summaryKey && (
                            <motion.div 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: post.content.sections.length * 0.1 }}
                              className={`p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r ${post.bgGradient} border ${post.borderColor} backdrop-blur-sm`}
                            >
                              <h3 className="text-lg md:text-xl font-semibold text-black dark:text-cyan-400 mb-2 md:mb-3">
                                {t('blog.summary')}
                              </h3>
                              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                                {t(post.content.summaryKey)}
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      ) : null}
                      
                      <button
                        onClick={() => toggleCard(post.id)}
                        className={`group/btn flex items-center justify-center md:justify-start gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-medium transition-all duration-300 bg-gradient-to-r ${post.gradient} hover:shadow-lg ${post.shadowColor} text-white border border-white/20 hover:border-white/40 w-full md:w-auto`}
                      >
                        <span className="text-sm md:text-base">
                          {activeCard === post.id ? t('blog.showLess') : t('blog.readMore')}
                        </span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                          activeCard === post.id ? 'rotate-90' : 'group-hover/btn:translate-x-1'
                        } ${isRTL ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Spacing */}
      <div className="h-8 md:h-16"></div>
    </div>
  );
};

export default Blog;