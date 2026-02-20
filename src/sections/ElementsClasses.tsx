import { useEffect, useRef, useState } from 'react';
import { elements, classes } from '../data/characters';
import { Sword, Sparkles, Zap, Shield, Heart, ShieldCheck } from 'lucide-react';

const ElementsClasses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
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

  const getClassIcon = (iconName: string) => {
    const icons: Record<string, React.ElementType> = {
      'Sword': Sword,
      'Sparkles': Sparkles,
      'Zap': Zap,
      'Shield': Shield,
      'Heart': Heart,
      'ShieldCheck': ShieldCheck
    };
    return icons[iconName] || Sword;
  };

  return (
    <section 
      id="elements"
      ref={sectionRef}
      className="section py-20"
      style={{ background: 'linear-gradient(180deg, #0A0F1C 0%, #111827 100%)' }}
    >
      {/* Section Header */}
      <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-title gradient-text">ELEMENTS & CLASSES</h2>
        <p className="section-subtitle">
          Master the combat system of Arknights Endfield. Understanding elements and classes 
          is key to building the ultimate squad.
        </p>
      </div>

      {/* Elements Section */}
      <div className={`max-w-6xl mx-auto px-4 mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Elements</h3>
        
        {/* Pentagon Layout */}
        <div className="relative w-full max-w-lg mx-auto aspect-square">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Pentagon outline */}
            <polygon 
              points="200,40 360,160 300,340 100,340 40,160" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* Inner connections */}
            <line x1="200" y1="40" x2="300" y2="340" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
            <line x1="200" y1="40" x2="100" y2="340" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
            <line x1="360" y1="160" x2="100" y2="340" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
            <line x1="360" y1="160" x2="300" y2="340" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
            <line x1="40" y1="160" x2="300" y2="340" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
          </svg>

          {/* Element Nodes */}
          {elements.map((element, index) => {
            // Pentagon vertex positions
            const positions = [
              { x: 200, y: 40 },    // Top - Physical
              { x: 360, y: 160 },   // Top-right - Heat
              { x: 300, y: 340 },   // Bottom-right - Electric
              { x: 100, y: 340 },   // Bottom-left - Cryo
              { x: 40, y: 160 }     // Top-left - Nature
            ];
            const pos = positions[index];
            const isSelected = selectedElement === element.id;

            return (
              <button
                key={element.id}
                onClick={() => setSelectedElement(isSelected ? null : element.id)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                style={{ 
                  left: `${(pos.x / 400) * 100}%`, 
                  top: `${(pos.y / 400) * 100}%`,
                }}
              >
                <div 
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                    isSelected ? 'scale-125' : 'hover:scale-110'
                  }`}
                  style={{ 
                    background: `radial-gradient(circle, ${element.color}40, ${element.color}20)`,
                    border: `2px solid ${element.color}`,
                    boxShadow: isSelected ? `0 0 40px ${element.color}` : `0 0 20px ${element.color}50`
                  }}
                >
                  <div 
                    className="w-4 h-4 rounded-full mb-1"
                    style={{ backgroundColor: element.color }}
                  />
                  <span className="text-white text-xs md:text-sm font-bold">{element.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Element Description */}
        {selectedElement && (
          <div className="mt-8 glass rounded-xl p-6 max-w-md mx-auto animate-slide-up">
            {elements.filter(e => e.id === selectedElement).map(element => (
              <div key={element.id}>
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: element.color }}
                  />
                  <h4 className="text-xl font-bold text-white">{element.name}</h4>
                </div>
                <p className="text-gray-300">{element.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Classes Section */}
      <div className={`max-w-6xl mx-auto px-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Classes</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {classes.map((cls, index) => {
            const ClassIcon = getClassIcon(cls.icon);
            const isSelected = selectedClass === cls.id;

            return (
              <button
                key={cls.id}
                onClick={() => setSelectedClass(isSelected ? null : cls.id)}
                className={`glass rounded-xl p-6 text-center transition-all duration-300 ${
                  isSelected 
                    ? 'scale-105 ring-2 ring-cyan-400' 
                    : 'hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20'
                }`}
                style={{ animationDelay: `${500 + index * 50}ms` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isSelected ? 'bg-cyan-500/30' : 'bg-gray-700/50'
                }`}>
                  <ClassIcon className={`w-7 h-7 ${isSelected ? 'text-cyan-400' : 'text-gray-400'}`} />
                </div>
                <h4 className="text-white font-bold mb-2">{cls.name}</h4>
                <p className="text-gray-500 text-xs">{cls.description}</p>
              </button>
            );
          })}
        </div>

        {/* Class Description */}
        {selectedClass && (
          <div className="mt-8 glass rounded-xl p-6 max-w-lg mx-auto animate-slide-up">
            {classes.filter(c => c.id === selectedClass).map(cls => {
              const ClassIcon = getClassIcon(cls.icon);
              return (
                <div key={cls.id} className="text-center">
                  <ClassIcon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-3">{cls.name}</h4>
                  <p className="text-gray-300">{cls.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ElementsClasses;
