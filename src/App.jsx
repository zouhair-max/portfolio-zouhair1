import React, { useState, useEffect, useRef } from 'react';
import PortfolioNavbar from './components/sections/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

// 3D Mouse Animation Component améliorée
function MouseAnimation() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);
  const trailRef = useRef([]);
  const frameRef = useRef(0);

  useEffect(() => {
    // Détection des appareils mobiles
    const checkIfMobile = () => {
      return window.innerWidth <= 768 || 
             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    setIsMobile(checkIfMobile());

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    // Si c'est un mobile, on ne fait rien
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY, id: Date.now() };
      setMousePos(newPos);
      
      // Ajouter à la traînée
      trailRef.current = [newPos, ...trailRef.current.slice(0, 14)];
      setTrail(trailRef.current);
      
      setIsMoving(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsMoving(false), 300);
    };

    // Animation fluide avec requestAnimationFrame
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      // L'animation est maintenant gérée par les transitions CSS
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

  // Si c'est un mobile, on ne rend pas l'animation
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
  return (
    <div className="app-container max-w-full overflow-x-hidden bg-white z-50 dark:bg-[#121212]">      
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
    </div>
  );
}