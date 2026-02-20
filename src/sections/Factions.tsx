import { useEffect, useRef, useState } from 'react';
import { factions } from '../data/characters';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

const Factions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextFaction = () => {
    setActiveIndex((prev) => (prev + 1) % factions.length);
  };

  const prevFaction = () => {
    setActiveIndex((prev) => (prev - 1 + factions.length) % factions.length);
  };

  const activeFaction = factions[activeIndex];

  return (
    <section 
      id="factions"
      ref={sectionRef}
      className="section py-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #111827 0%, #0A0F1C 100%)'
      }}
    >
      {/* Section Header */}
      <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-title gradient-text">FACTIONS</h2>
        <p className="section-subtitle">
          The organizations shaping the future of Talos-II. Each faction brings unique 
          warriors and technologies to the fight against the Aggeloi.
        </p>
      </div>

      {/* Faction Carousel */}
      <div className={`relative max-w-6xl mx-auto px-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Navigation Buttons */}
        <button
          onClick={prevFaction}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 glass rounded-full hover:bg-gray-700/50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-cyan-400" />
        </button>
        <button
          onClick={nextFaction}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 glass rounded-full hover:bg-gray-700/50 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-cyan-400" />
        </button>

        {/* Faction Card */}
        <div 
          className="glass rounded-2xl overflow-hidden mx-12 transition-all duration-500"
          style={{ 
            boxShadow: `0 0 60px ${activeFaction.color}30`
          }}
        >
          <div 
            className="h-2"
            style={{ background: `linear-gradient(90deg, ${activeFaction.color}, ${activeFaction.color}80)` }}
          />
          
          <div className="p-8 md:p-12">
            {/* Faction Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              {/* Emblem Placeholder */}
              <div 
                className="w-24 h-24 rounded-xl flex items-center justify-center animate-element-pulse"
                style={{ 
                  background: `linear-gradient(135deg, ${activeFaction.color}40, ${activeFaction.color}20)`,
                  border: `2px solid ${activeFaction.color}`
                }}
              >
                <Users className="w-12 h-12" style={{ color: activeFaction.color }} />
              </div>
              
              <div>
                <h3 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: activeFaction.color }}
                >
                  {activeFaction.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{activeFaction.members.length} Members</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
              {activeFaction.description}
            </p>

            {/* Members */}
            <div>
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" />
                Notable Members
              </h4>
              <div className="flex flex-wrap gap-3">
                {activeFaction.members.map((member, index) => (
                  <span
                    key={member}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: `${activeFaction.color}20`,
                      color: activeFaction.color,
                      border: `1px solid ${activeFaction.color}40`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {factions.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8' 
                  : 'hover:bg-gray-500'
              }`}
              style={{ 
                backgroundColor: index === activeIndex ? activeFaction.color : '#374151'
              }}
            />
          ))}
        </div>
      </div>

      {/* Faction Cards Grid */}
      <div className={`max-w-6xl mx-auto px-4 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {factions.map((faction, index) => (
          <button
            key={faction.id}
            onClick={() => setActiveIndex(index)}
            className={`glass rounded-xl p-4 text-left transition-all duration-300 hover:scale-105 ${
              index === activeIndex ? 'ring-2' : ''
            }`}
            style={{ 
              borderColor: index === activeIndex ? faction.color : 'transparent',
              boxShadow: index === activeIndex ? `0 0 20px ${faction.color}30` : 'none'
            }}
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ 
                background: `linear-gradient(135deg, ${faction.color}40, ${faction.color}20)`
              }}
            >
              <Users className="w-5 h-5" style={{ color: faction.color }} />
            </div>
            <h5 className="text-white font-bold text-sm mb-1">{faction.name}</h5>
            <p className="text-gray-500 text-xs">{faction.members.length} members</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Factions;
