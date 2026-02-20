import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Users, Star, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#06B6D4' : '#7C3AED'
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 28, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToCharacters = () => {
    document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Users, value: '23+', label: 'Operators' },
    { icon: Star, value: '6', label: 'Factions' },
    { icon: Zap, value: '5', label: 'Elements' },
    { icon: Shield, value: '6', label: 'Classes' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0A0F1C 0%, #111827 50%, #0F172A 100%)' }}
      />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Title Group */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 
            className="text-lg md:text-xl tracking-[0.3em] text-cyan-400 mb-4"
            style={{ animationDelay: '0.2s' }}
          >
            ARKNIGHTS
          </h2>
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-2 animate-title-glow"
            style={{ 
              background: 'linear-gradient(135deg, #06B6D4, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animationDelay: '0.4s'
            }}
          >
            ENDFIELD
          </h1>
          <h3 
            className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-wider"
            style={{ animationDelay: '0.6s' }}
          >
            OPERATOR DATABASE
          </h3>
        </div>

        {/* Subtitle */}
        <p 
          className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Explore the elite operators of Talos-II. Discover their origins, master their abilities, 
          and forge your ultimate squad to defend humanity against the Aggeloi threat.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <button 
            onClick={scrollToCharacters}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Operators
          </button>
          <button 
            onClick={() => document.getElementById('tierlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg px-8 py-4"
          >
            View Tier List
          </button>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="glass rounded-xl p-4 card-hover"
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-white font-['Rajdhani']">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        onClick={scrollToCharacters}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-purple-500/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
    </section>
  );
};

export default Hero;
