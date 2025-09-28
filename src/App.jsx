import React, { useState, useEffect, useRef } from 'react';
import PortfolioNavbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

function WelcomeScreen({ onComplete }) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setAnimationPhase(1);
      
      await new Promise(resolve => setTimeout(resolve, 1200));
      setAnimationPhase(2);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAnimationPhase(3);
      
      await new Promise(resolve => setTimeout(resolve, 800));
      setShowWelcome(false);
      onComplete();
    };

    sequence();
  }, [onComplete]);

  if (!showWelcome) return null;

  // Custom SVG Icons
  const CodeIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.293 6.293a1 1 0 0 1 1.414 0L12 8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 10l2.293 2.293a1 1 0 0 1-1.414 1.414L12 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 10 8.293 7.707a1 1 0 0 1 0-1.414z"/>
    </svg>
  );

  const ReactIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 18.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm0-12c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5z"/>
      <path d="M12 21.5c-5.2 0-9.5-4.3-9.5-9.5s4.3-9.5 9.5-9.5 9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5zm0-18c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z"/>
    </svg>
  );

  const NodeIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  );

  const DatabaseIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4C7.58 4 4 4.5 4 6v12c0 1.5 3.58 3 8 3s8-1.5 8-3V6c0-1.5-3.58-3-8-3zm6 16c0 .55-2.69 2-6 2s-6-1.45-6-2v-3.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V20zm0-5.5c0 .55-2.69 2-6 2s-6-1.45-6-2v-3.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23v3.23zM12 10c-3.31 0-6-.9-6-2s2.69-2 6-2 6 .9 6 2-2.69 2-6 2z"/>
    </svg>
  );

  const PythonIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 2a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 14.5 2h-5zm6 6a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 18.5 8h-3zm-9 6a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-5z"/>
    </svg>
  );

  const GitIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9 11 11.5 14.5 15 10 19.5 5.5 15 9 11.5 6.5 9z"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L9 7l-6 .75 4.13 4.62L6 19l6-3 6 3-1.12-6.63L21 7.75 15 7zm0 10a3 3 0 100-6 3 3 0 000 6z"/>
    </svg>
  );

  const RocketIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 4.5-1.04 4.5h-7S7.5 15.49 7.5 13C7.5 4.54 12 2.5 12 2.5zm2 8s0-1-2-1-2 1-2 1 0 1 2 1 2-1 2-1zm-7 .5l-3.5 3.5c0 2.5 3.5 3.5 3.5 3.5s3.5-1 3.5-3.5L12 11zm7 0l3.5 3.5c0 2.5-3.5 3.5-3.5 3.5s-3.5-1-3.5-3.5L17 11z"/>
    </svg>
  );

  const BoltIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2v11h3v9l7-12h-4l4-8h-10z"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D Shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-cyan-400 rounded-full opacity-20 animate-float-3d"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-cyan-500 rounded-lg opacity-30 animate-float-3d-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-blue-400 opacity-25 animate-spin-slow"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="text-center text-white relative z-10">
        {/* First line with 3D text effect */}
        <div className={`transition-all duration-1000 transform perspective-1000 ${
          animationPhase >= 1 
            ? 'opacity-100 translate-z-0 rotate-x-0' 
            : 'opacity-0 translate-z-100 rotate-x-45'
        } ${
          animationPhase >= 3 ? 'opacity-0 translate-z--100 rotate-x--45 scale-75' : ''
        }`}>
          <h2 className="text-2xl md:text-4xl font-light mb-6 tracking-wider text-black drop-shadow-2xl">
            <span className="inline-block animate-text-glow">Welcome To My</span>
          </h2>
        </div>
        
        {/* Second line with 3D gradient text */}
        <div className={`transition-all duration-1000 transform perspective-1000 delay-300 ${
          animationPhase >= 2 
            ? 'opacity-100 translate-z-0 scale-100' 
            : 'opacity-0 translate-z-50 scale-95 rotate-y-45'
        } ${
          animationPhase >= 3 ? 'opacity-0 translate-z--50 scale-110 rotate-y--45' : ''
        }`}>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 relative">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Portfolio Website
            </span>
            {/* 3D Text Shadow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent opacity-30 blur-sm -z-10 transform translate-y-2">
              Portfolio Website
            </div>
          </h1>
        </div>

        {/* 3D Orbiting Tech Stack Icons */}
        <div className={`transition-all duration-1000 transform delay-500 ${
          animationPhase >= 2 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-50'
        } ${
          animationPhase >= 3 ? 'opacity-0 scale-75 rotate-180' : ''
        }`}>
          <div className="relative w-64 h-64 mx-auto mb-8">
            {/* Orbiting Container */}
            <div className="absolute inset-0 animate-orbit-slow">
              {/* Frontend Icons Orbit */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse">
                <div className="flex space-x-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="text-amber-400 text-3xl animate-bounce" style={{animationDelay: '0s'}}>
                    <i className="fab fa-js-square"></i>
                  </div>
                  <div className="text-cyan-400 text-3xl animate-bounce" style={{animationDelay: '0.1s'}}>
                    <ReactIcon />
                  </div>
                  <div className="text-orange-500 text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>
                    <i className="fab fa-html5"></i>
                  </div>
                  <div className="text-blue-400 text-3xl animate-bounce" style={{animationDelay: '0.3s'}}>
                    <i className="fab fa-css3-alt"></i>
                  </div>
                </div>
              </div>

              {/* Backend Icons Orbit */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 animate-orbit-reverse">
                <div className="flex space-x-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="text-green-500 text-3xl animate-bounce" style={{animationDelay: '0.4s'}}>
                    <NodeIcon />
                  </div>
                  <div className="text-emerald-400 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>
                    <DatabaseIcon />
                  </div>
                  <div className="text-yellow-400 text-3xl animate-bounce" style={{animationDelay: '0.6s'}}>
                    <PythonIcon />
                  </div>
                  <div className="text-red-400 text-3xl animate-bounce" style={{animationDelay: '0.7s'}}>
                    <AwardIcon />
                  </div>
                </div>
              </div>

              {/* Tools & Others Orbit */}
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse">
                <div className="flex space-x-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="text-cyan-400 text-3xl animate-bounce" style={{animationDelay: '0.8s'}}>
                    <GitIcon />
                  </div>
                  <div className="text-blue-300 text-3xl animate-bounce" style={{animationDelay: '0.9s'}}>
                    <i className="fab fa-docker"></i>
                  </div>
                  <div className="text-gray-300 text-3xl animate-bounce" style={{animationDelay: '1.0s'}}>
                    <i className="fab fa-figma"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Center 3D Sphere */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-2xl animate-pulse-slow flex items-center justify-center">
                <CodeIcon />
              </div>
            </div>
          </div>
        </div>

        {/* 3D Animated Full Stack Badge */}
        <div className={`transition-all duration-700 delay-700 ${
          animationPhase >= 2 
            ? 'opacity-100 scale-100 rotate-x-0' 
            : 'opacity-0 scale-50 rotate-x-90'
        } ${
          animationPhase >= 3 ? 'opacity-0 scale-75 -rotate-x-90' : ''
        }`}>
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-400 via-cyan-400 to-cyan-500 px-6 py-3 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <RocketIcon />
            <span className="text-white font-bold text-sm tracking-wider uppercase">
              Full Stack Developer
            </span>
            <BoltIcon />
          </div>
        </div>

        {/* 3D Loading Animation */}
        <div className={`mt-12 transition-opacity duration-500 ${
          animationPhase === 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex justify-center space-x-3">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce-3d shadow-lg"
                style={{ 
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add these styles to your CSS */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          33% { transform: translate3d(30px, -30px, 50px) rotate(120deg); }
          66% { transform: translate3d(-20px, 20px, -50px) rotate(240deg); }
        }
        
        @keyframes orbit-slow {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
          from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          to { transform: rotate(-360deg) translateX(80px) rotate(360deg); }
        }
        
        @keyframes bounce-3d {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -20px, 20px) scale(1.1); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.5); }
          50% { text-shadow: 0 0 30px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.6); }
        }
        
        .animate-float-3d { animation: float-3d 6s ease-in-out infinite; }
        .animate-float-3d-delayed { animation: float-3d 7s ease-in-out infinite 1s; }
        .animate-orbit-slow { animation: orbit-slow 20s linear infinite; }
        .animate-orbit-reverse { animation: orbit-reverse 15s linear infinite; }
        .animate-bounce-3d { animation: bounce-3d 1s ease-in-out infinite; }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite; 
        }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        .translate-z-0 { transform: translateZ(0); }
        .translate-z-100 { transform: translateZ(100px); }
        .translate-z--100 { transform: translateZ(-100px); }
        .rotate-x-0 { transform: rotateX(0deg); }
        .rotate-x-45 { transform: rotateX(45deg); }
        .rotate-x--45 { transform: rotateX(-45deg); }
        .rotate-y-45 { transform: rotateY(45deg); }
        .rotate-y--45 { transform: rotateY(-45deg); }
      `}</style>
    </div>
  );
}
// Your existing MouseAnimation component remains the same
function MouseAnimation() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);
  const trailRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    const checkIfMobile = () => {
      return window.innerWidth <= 768 || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    setIsMobile(checkIfMobile());

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    if (isMobile) return;

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY, id: Date.now() };
      setMousePos(newPos);
      
      trailRef.current = [newPos, ...trailRef.current.slice(0, 14)];
      setTrail(trailRef.current);
      
      setIsMoving(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsMoving(false), 300);
    };

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutRef.current);
      cancelAnimationFrame(frameRef.current);
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Cursor principal avec effet 3D sophistiqué */}
      <div 
        className="absolute w-6 h-6 transition-all duration-150 ease-out z-50"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          transform: `
            scale(${isMoving ? 1.8 : 1})
            rotateX(${mousePos.y * 0.05}deg) 
            rotateY(${mousePos.x * 0.05}deg)
            translateZ(0)
          `,
          filter: `blur(${isMoving ? '2px' : '0px'})`,
        }}
      >
      </div>

      {/* Traînée élégante avec particules connectées */}
      {trail.map((pos, i) => {
        const progress = i / trail.length;
        const size = 4 + (1 - progress) * 8;
        
        return (
          <div
            key={pos.id}
            className="absolute transition-all duration-100 ease-linear"
            style={{
              left: pos.x - size/2,
              top: pos.y - size/2,
              width: size,
              height: size,
              opacity: 0.7 - progress * 0.6,
              transform: `scale(${1 - progress * 0.5})`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full shadow-lg" />
          </div>
        );
      })}

      {/* Orbites planétaires avec particules en rotation */}
      {[0, 90, 180, 270].map((angle, i) => {
        const radius = 30 + i * 15;
        const orbitSpeed = 0.002 + i * 0.001;
        const particleAngle = Date.now() * orbitSpeed + angle;
        
        return (
          <div key={`orbit-${i}`}>
            {/* Particule en orbite */}
            <div
              className="absolute w-4 h-4 transition-all duration-500 ease-out"
              style={{
                left: mousePos.x - 8 + Math.cos(particleAngle) * radius,
                top: mousePos.y - 8 + Math.sin(particleAngle) * radius,
                transform: `scale(${0.8 + Math.sin(Date.now() * 0.005) * 0.2})`,
                opacity: isMoving ? 0.9 : 0.4,
              }}
            >
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const [showContent, setShowContent] = useState(false);

  const handleWelcomeComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="app-container max-w-full overflow-x-hidden bg-white z-50 dark:bg-[#121212]">      
      {/* Welcome Screen - Shows first */}
      <WelcomeScreen onComplete={handleWelcomeComplete} />
      
      {/* Main Content - Shows after welcome animation */}
      {showContent && (
        <>
          {/* Animation de fond subtile */}
          <div className="fixed inset-0 bg-gradient-to-br from-white/50 via-blue-50/30 to-purple-50/20 dark:from-black/50 dark:via-blue-900/10 dark:to-purple-900/10 pointer-events-none z-0" />
          
          {/* Animation de souris 3D - sera cachée sur mobile */}
          <MouseAnimation />
          
          {/* Contenu principal */}
          <div className="relative z-10">
            <PortfolioNavbar />
            
            <section id="home" className="min-h-screen relative dark:bg-[#121212]">
              <Home />
            </section>
            
            <section id="about" className="min-h-screen relative dark:bg-[#121212]">
              <About />
            </section>
            
            <section id="portfolio" className="min-h-screen relative dark:bg-[#121212]">
             <Portfolio/>
            </section>
            
            <section id="skills" className="min-h-screen relative dark:bg-[#121212]">
              <Skills/>
            </section>
            
            <section id="blog" className="min-h-screen dark:bg-[#121212] p-8 relative">
              <Blog/>
            </section>
            
            <section id="contact" className="min-h-screen relative dark:bg-[#121212]">
              <Contact/>
            </section>
          </div>
        </>
      )}
    </div>
  );
}