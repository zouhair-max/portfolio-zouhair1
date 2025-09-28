import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

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

  return (
    <div 
      className="min-h-screen  py-6 px-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8 transition-colors duration-300"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            {t('skills.title')}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Mobile Categories Switcher (visible on mobile) */}
        <div className="lg:hidden mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-4 sm:p-6 mb-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                {t('skills.categoriesTitle')}
              </h2>
              <span className="text-cyan-600 dark:text-cyan-400">{skillsData[activeCategory].icon}</span>
            </div>
            
            {/* Category Selector for Mobile */}
            <select 
              className="w-full p-3 sm:p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-base sm:text-lg transition-colors duration-200"
              value={activeCategory}
              onChange={(e) => setActiveCategory(Number(e.target.value))}
            >
              {skillsData.map((category, index) => (
                <option key={index} value={index} className="bg-white dark:bg-gray-700">
                  {category.title}
                </option>
              ))}
            </select>
            
            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {skillsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    activeCategory === index 
                      ? 'bg-cyan-600 dark:bg-cyan-400 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Categories Navigation (visible on desktop) */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 p-6 sticky top-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                {t('skills.categoriesTitle')}
              </h2>
              <div className="space-y-2">
                {skillsData.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                      activeCategory === index
                        ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 text-white shadow-lg transform -translate-y-1 border border-cyan-400 dark:border-cyan-500'
                        : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 hover:shadow-md border border-gray-200 dark:border-gray-600'
                    }`}
                    onClick={() => setActiveCategory(index)}
                  >
                    <span className={`transition-transform duration-300 group-hover:scale-110 ${
                      activeCategory === index ? 'text-white' : 'text-cyan-600 dark:text-cyan-400'
                    }`}>
                      {category.icon}
                    </span>
                    <span className="font-medium">{category.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 p-4 sm:p-6 text-white border-b border-cyan-400 dark:border-cyan-500">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-2xl sm:text-3xl text-white">
                    {skillsData[activeCategory].icon}
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
                    {skillsData[activeCategory].title}
                  </h2>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid gap-3 sm:gap-4 lg:gap-6">
                  {skillsData[activeCategory].skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 hover:border-cyan-300 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-md group"
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 sm:mt-1 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors border border-green-200 dark:border-green-700/50">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed flex-1">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className={`flex justify-between items-center mt-6 px-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={() => setActiveCategory(prev => prev > 0 ? prev - 1 : skillsData.length - 1)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-200 font-medium active:scale-95 text-sm sm:text-base hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              >
                {!isRTL && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                )}
                {t('skills.previous')}
                {isRTL && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
              
              {/* Progress Dots for Desktop */}
              <div className="hidden sm:flex gap-2">
                {skillsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeCategory === index 
                        ? 'bg-cyan-600 dark:bg-cyan-400 scale-125' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveCategory(prev => prev < skillsData.length - 1 ? prev + 1 : 0)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-200 font-medium active:scale-95 text-sm sm:text-base hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              >
                {!isRTL && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {t('skills.next')}
                {isRTL && (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-gray-900/50 p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1 sm:mb-2">{skillsData.length}</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('skills.stats.categories')}</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-gray-900/50 p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1 sm:mb-2">
              {skillsData.reduce((total, category) => total + category.skills.length, 0)}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('skills.stats.totalSkills')}</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg dark:shadow-gray-900/50 p-4 sm:p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">2+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('skills.stats.yearsExp')}</div>
          </div>
        </div>

        {/* Mobile Hint (visible only on mobile) */}
        <div className="lg:hidden text-center mt-6">
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
            {t('skills.mobileHint')}
          </p>
        </div>
      </div>
    </div>
  );
}