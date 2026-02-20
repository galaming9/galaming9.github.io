import { useState, useEffect, useRef } from 'react';
import { Star, Sword, Sparkles, Zap, Shield, Heart, X, User, Calendar, Ruler, Droplets } from 'lucide-react';
import { characters, type Character } from '../data/characters';

const CharacterShowcase = () => {
  const [filter, setFilter] = useState<'all' | '6' | '5' | '4' | string>('all');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredCharacters = characters.filter(char => {
    if (filter === 'all') return true;
    if (filter === '6' || filter === '5' || filter === '4') {
      return char.rarity === parseInt(filter);
    }
    return char.class.toLowerCase() === filter.toLowerCase();
  });

  const filters = [
    { id: 'all', label: 'All' },
    { id: '6', label: '6★' },
    { id: '5', label: '5★' },
    { id: '4', label: '4★' },
    { id: 'Guard', label: 'Guard' },
    { id: 'Caster', label: 'Caster' },
    { id: 'Striker', label: 'Striker' },
    { id: 'Vanguard', label: 'Vanguard' },
    { id: 'Defender', label: 'Defender' },
    { id: 'Support', label: 'Support' }
  ];

  const getElementColor = (element: string) => {
    const colors: Record<string, string> = {
      'Physical': '#F97316',
      'Heat': '#EF4444',
      'Electric': '#FCD34D',
      'Cryo': '#60A5FA',
      'Nature': '#10B981'
    };
    return colors[element] || '#fff';
  };

  const getClassIcon = (className: string) => {
    const icons: Record<string, React.ElementType> = {
      'Guard': Sword,
      'Caster': Sparkles,
      'Striker': Zap,
      'Vanguard': Shield,
      'Defender': Shield,
      'Support': Heart
    };
    return icons[className] || User;
  };

  return (
    <section 
      id="characters" 
      ref={sectionRef}
      className="section py-20"
      style={{ background: 'linear-gradient(180deg, #0A0F1C 0%, #111827 100%)' }}
    >
      {/* Section Header */}
      <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="section-title gradient-text">OPERATOR DATABASE</h2>
        <p className="section-subtitle">
          Discover the elite warriors of Talos-II. Each operator brings unique abilities 
          and elemental powers to the battlefield.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === f.id
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Character Grid */}
      <div className="character-grid px-4">
        {filteredCharacters.map((char, index) => {
          const ClassIcon = getClassIcon(char.class);
          return (
            <div
              key={char.id}
              onClick={() => setSelectedCharacter(char)}
              className={`group relative glass rounded-xl overflow-hidden cursor-pointer card-hover transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              {/* Character Image */}
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                
                {/* Rarity Stars */}
                <div className="absolute top-3 right-3 flex gap-0.5">
                  {Array.from({ length: char.rarity }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current ${
                        char.rarity === 6 ? 'text-yellow-400' : 
                        char.rarity === 5 ? 'text-gray-300' : 'text-amber-600'
                      } animate-star-twinkle`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Element Badge */}
                <div 
                  className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold"
                  style={{ 
                    backgroundColor: `${getElementColor(char.element)}30`,
                    color: getElementColor(char.element),
                    border: `1px solid ${getElementColor(char.element)}`
                  }}
                >
                  {char.element}
                </div>
              </div>

              {/* Character Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {char.name}
                  </h3>
                  <ClassIcon className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-400 mb-3">{char.class}</p>
                <p className="text-xs text-gray-500 italic line-clamp-2">"{char.quote}"</p>
              </div>

              {/* Hover Glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 30px ${getElementColor(char.element)}30`
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Character Detail Modal */}
      {selectedCharacter && (
        <CharacterModal 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      )}
    </section>
  );
};

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterModal = ({ character, onClose }: CharacterModalProps) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'stats' | 'lore'>('profile');

  const getElementColor = (element: string) => {
    const colors: Record<string, string> = {
      'Physical': '#F97316',
      'Heat': '#EF4444',
      'Electric': '#FCD34D',
      'Cryo': '#60A5FA',
      'Nature': '#10B981'
    };
    return colors[element] || '#fff';
  };

  const getSkillTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Basic': '#6B7280',
      'Battle': '#3B82F6',
      'Combo': '#8B5CF6',
      'Ultimate': '#F59E0B'
    };
    return colors[type] || '#fff';
  };

  return (
    <div className="modal-overlay p-2 sm:p-4" onClick={onClose}>
      <div 
        className="glass-strong rounded-2xl max-w-5xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Header Info */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-3 mb-2">
              {Array.from({ length: character.rarity }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 fill-current ${
                    character.rarity === 6 ? 'text-yellow-400' : 
                    character.rarity === 5 ? 'text-gray-300' : 'text-amber-600'
                  }`}
                />
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{character.name}</h2>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: `${getElementColor(character.element)}30`,
                  color: getElementColor(character.element)
                }}
              >
                {character.element}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                {character.class}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                {character.weaponType}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          {(['profile', 'skills', 'stats', 'lore'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                activeTab === tab
                  ? 'text-cyan-400 border-b-2 border-cyan-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6 overflow-y-auto max-h-[45vh] sm:max-h-[50vh]">
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {character.dateOfBirth && (
                  <div className="flex items-center gap-3 glass rounded-lg p-4">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-xs text-gray-400">Date of Birth</p>
                      <p className="text-white font-medium">{character.dateOfBirth}</p>
                    </div>
                  </div>
                )}
                {character.race && (
                  <div className="flex items-center gap-3 glass rounded-lg p-4">
                    <User className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-xs text-gray-400">Race</p>
                      <p className="text-white font-medium">{character.race}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 glass rounded-lg p-4">
                  <User className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-xs text-gray-400">Gender</p>
                    <p className="text-white font-medium">{character.gender}</p>
                  </div>
                </div>
                {character.height && (
                  <div className="flex items-center gap-3 glass rounded-lg p-4">
                    <Ruler className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-xs text-gray-400">Height</p>
                      <p className="text-white font-medium">{character.height}</p>
                    </div>
                  </div>
                )}
                {character.infectionStatus && (
                  <div className="flex items-center gap-3 glass rounded-lg p-4">
                    <Droplets className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="text-xs text-gray-400">Infection Status</p>
                      <p className={`font-medium ${character.infectionStatus === 'Infected' ? 'text-red-400' : 'text-green-400'}`}>
                        {character.infectionStatus}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Weapon */}
              <div className="glass rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-2">Weapon</p>
                <div className="flex items-center gap-4">
                  {character.weaponImage && (
                    <img 
                      src={character.weaponImage} 
                      alt={character.weapon}
                      className="w-24 h-24 object-contain"
                    />
                  )}
                  <div>
                    <p className="text-white font-medium text-lg">{character.weapon}</p>
                    <p className="text-gray-400 text-sm">{character.weaponType}</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="glass rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-2">Quote</p>
                <p className="text-white italic">"{character.quote}"</p>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4 animate-fade-in">
              {character.skills.map((skill, index) => (
                <div key={index} className="glass rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold">{skill.name}</h4>
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: `${getSkillTypeColor(skill.type)}30`,
                        color: getSkillTypeColor(skill.type)
                      }}
                    >
                      {skill.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{skill.description}</p>
                  <div className="flex gap-4 text-xs">
                    {skill.damage && (
                      <span className="text-cyan-400">{skill.damage}</span>
                    )}
                    {skill.cooldown && (
                      <span className="text-yellow-400">CD: {skill.cooldown}</span>
                    )}
                    {skill.cost && (
                      <span className="text-purple-400">{skill.cost}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Talents */}
              {character.talents && (
                <div className="mt-6">
                  <h4 className="text-white font-bold mb-3">Talents</h4>
                  {character.talents.map((talent, index) => (
                    <div key={index} className="glass rounded-lg p-3 mb-2">
                      <p className="text-gray-300 text-sm">{talent}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="space-y-6 animate-fade-in">
              {/* Main Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { label: 'HP', value: character.stats.hp, color: '#EF4444' },
                  { label: 'ATK', value: character.stats.atk, color: '#F97316' },
                  { label: 'DEF', value: character.stats.def, color: '#3B82F6' }
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-lg p-2 sm:p-4 text-center">
                    <p className="text-lg sm:text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Stats */}
              <div className="space-y-4">
                <h4 className="text-white font-bold">Detailed Stats</h4>
                {[
                  { label: 'Strength (STR)', value: character.stats.str, color: '#EF4444' },
                  { label: 'Agility (AGL)', value: character.stats.agl, color: '#10B981' },
                  { label: 'Intelligence (INT)', value: character.stats.intel, color: '#3B82F6' },
                  { label: 'Willpower (WIL)', value: character.stats.wil, color: '#8B5CF6' }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">{stat.label}</span>
                      <span className="text-white">{stat.value}/100</span>
                    </div>
                    <div className="stat-bar">
                      <div 
                        className="stat-bar-fill"
                        style={{ 
                          width: `${stat.value}%`,
                          background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'lore' && (
            <div className="space-y-4 animate-fade-in">
              {character.background && (
                <div className="glass rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">Background</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{character.background}</p>
                </div>
              )}
              {character.lore && (
                <div className="glass rounded-lg p-4">
                  <h4 className="text-white font-bold mb-2">Lore</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{character.lore}</p>
                </div>
              )}
              <div className="glass rounded-lg p-4">
                <h4 className="text-white font-bold mb-2">Faction</h4>
                <p className="text-gray-300 text-sm">{character.faction}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterShowcase;
