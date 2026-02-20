import { useEffect, useRef, useState } from 'react';
import { tierList, characters } from '../data/characters';
import { Star, Trophy, TrendingUp } from 'lucide-react';

const TierList = () => {
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

  const tiers = [
    { id: 'S', name: 'S-Tier', color: '#F59E0B', description: 'Top tier operators, essential for any team' },
    { id: 'A', name: 'A-Tier', color: '#10B981', description: 'Excellent operators, strong additions to any squad' },
    { id: 'B', name: 'B-Tier', color: '#3B82F6', description: 'Good operators, situational but effective' },
    { id: 'C', name: 'C-Tier', color: '#6B7280', description: 'Average operators, require more investment' }
  ];

  const getCharacterImage = (name: string) => {
    const char = characters.find(c => c.name === name);
    return char?.image || '';
  };

  const getCharacterRarity = (name: string) => {
    const char = characters.find(c => c.name === name);
    return char?.rarity || 4;
  };

  return (
    <section 
      id="tierlist"
      ref={sectionRef}
      className="section py-20"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #0A0F1C 100%)' }}
    >
      {/* Section Header */}
      <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-title gradient-text">TIER LIST</h2>
        <p className="section-subtitle">
          Community-ranked operator effectiveness based on combat performance, 
          versatility, and endgame viability.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">Last Updated: February 2026</span>
        </div>
      </div>

      {/* Tier List */}
      <div className={`max-w-5xl mx-auto px-4 space-y-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {tiers.map((tier, tierIndex) => {
          const tierCharacters = tierList[tier.id as keyof typeof tierList] || [];
          
          return (
            <div 
              key={tier.id}
              className="glass rounded-xl overflow-hidden transition-all duration-500"
              style={{ 
                animationDelay: `${300 + tierIndex * 100}ms`,
                borderLeft: `4px solid ${tier.color}`
              }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Tier Label */}
                <div 
                  className="md:w-24 p-4 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${tier.color}40, ${tier.color}20)` }}
                >
                  <div className="text-center">
                    <Trophy className="w-6 h-6 mx-auto mb-1" style={{ color: tier.color }} />
                    <span 
                      className="text-2xl font-black"
                      style={{ color: tier.color }}
                    >
                      {tier.id}
                    </span>
                  </div>
                </div>

                {/* Tier Content */}
                <div className="flex-1 p-4">
                  <p className="text-gray-400 text-sm mb-3">{tier.description}</p>
                  
                  {tierCharacters.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {tierCharacters.map((charName, charIndex) => {
                        const rarity = getCharacterRarity(charName);
                        const image = getCharacterImage(charName);
                        
                        return (
                          <div
                            key={charName}
                            className="group relative flex items-center gap-3 glass rounded-lg p-2 pr-4 hover:scale-105 transition-all duration-300 cursor-pointer"
                            style={{ animationDelay: `${400 + tierIndex * 100 + charIndex * 50}ms` }}
                          >
                            {image && (
                              <img 
                                src={image} 
                                alt={charName}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                            )}
                            <div>
                              <p className="text-white font-medium text-sm">{charName}</p>
                              <div className="flex gap-0.5">
                                {Array.from({ length: rarity }).map((_, i) => (
                                  <Star 
                                    key={i}
                                    className={`w-3 h-3 fill-current ${
                                      rarity === 6 ? 'text-yellow-400' : 
                                      rarity === 5 ? 'text-gray-300' : 'text-amber-600'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            
                            {/* Hover Glow */}
                            <div 
                              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                              style={{ boxShadow: `0 0 20px ${tier.color}30` }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No operators in this tier</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className={`max-w-3xl mx-auto px-4 mt-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="glass rounded-xl p-6">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-cyan-400" />
            Tier Explanation
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tiers.map(tier => (
              <div key={tier.id} className="text-center">
                <div 
                  className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-2"
                  style={{ background: `linear-gradient(135deg, ${tier.color}40, ${tier.color}20)` }}
                >
                  <span className="text-xl font-black" style={{ color: tier.color }}>{tier.id}</span>
                </div>
                <p className="text-gray-400 text-xs">{tier.name}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Note: Tier rankings are based on current meta and may change with updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TierList;
