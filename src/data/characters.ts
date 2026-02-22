export interface Skill {
  name: string;
  type: 'Basic' | 'Battle' | 'Combo' | 'Ultimate';
  description: string;
  damage?: string;
  cooldown?: string;
  cost?: string;
}

export interface Character {
  id: string;
  name: string;
  rarity: 4 | 5 | 6;
  class: 'Guard' | 'Caster' | 'Striker' | 'Vanguard' | 'Defender' | 'Support';
  element: 'Physical' | 'Heat' | 'Electric' | 'Cryo' | 'Nature';
  weapon: string;
  weaponType: 'Sword' | 'Greatsword' | 'Arts Unit' | 'Hammer' | 'Sniper' | 'Polearm';
  faction: string;
  quote: string;
  image: string;
  weaponImage?: string;
  
  // Profile
  dateOfBirth?: string;
  race?: string;
  gender: string;
  height?: string;
  infectionStatus?: string;
  
  // Stats (1-100 scale)
  stats: {
    hp: number;
    atk: number;
    def: number;
    str: number;
    agl: number;
    intel: number;
    wil: number;
  };
  
  // Skills
  skills: Skill[];
  
  // Talents
  talents?: string[];
  
  // Lore
  lore?: string;
  background?: string;
}

export const characters: Character[] = [
  {
    id: 'endministrator',
    name: 'Endministrator',
    rarity: 6,
    class: 'Guard',
    element: 'Physical',
    weapon: 'Originium Sword',
    weaponType: 'Sword',
    faction: 'Endfield Industries',
    quote: "I'm ready.",
    image: './characters/endministrator-official.jpg',
    weaponImage: './characters/weapon-sword.png',
    gender: 'Selectable',
    stats: {
      hp: 85,
      atk: 90,
      def: 75,
      str: 88,
      agl: 82,
      intel: 75,
      wil: 80
    },
    skills: [
      {
        name: 'Originium Slash',
        type: 'Basic',
        description: 'Performs a swift sword slash dealing Physical damage to enemies in front.',
        damage: '120% ATK'
      },
      {
        name: 'Blade Dance',
        type: 'Battle',
        description: 'Unleashes a flurry of slashes, dealing multiple hits of Physical damage.',
        damage: '180% ATK over 3 hits',
        cooldown: '8s'
      },
      {
        name: 'Aerial Strike',
        type: 'Combo',
        description: 'Launches enemies into the air and follows up with a downward slash.',
        damage: '220% ATK'
      },
      {
        name: 'Endfield Protocol',
        type: 'Ultimate',
        description: 'Channels Protocol energy into the sword, releasing a devastating area attack.',
        damage: '450% ATK',
        cost: '100 SP'
      }
    ],
    talents: [
      'Protocol Mastery: Increases SP generation by 15%',
      'Adaptive Combat: Gains 10% ATK boost after using Combo skill'
    ],
    background: 'The protagonist of Arknights Endfield and a key figure in Endfield Industries. As the Endministrator, they wield Protocol-Originium technology and lead the fight against the Aggeloi threat on Talos-II.'
  },
  {
    id: 'perlica',
    name: 'Perlica',
    rarity: 5,
    class: 'Caster',
    element: 'Electric',
    weapon: 'Arts Unit: Fulgur',
    weaponType: 'Arts Unit',
    faction: 'Endfield Industries',
    quote: "I have always believed that you will lead us upon the right path once more.",
    image: '/characters/perlica-official.webp',
    weaponImage: '/characters/weapon-jet.png',
    dateOfBirth: 'January 15',
    race: 'Aegir',
    gender: 'Female',
    height: '168cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 70,
      atk: 95,
      def: 60,
      str: 55,
      agl: 70,
      intel: 95,
      wil: 85
    },
    skills: [
      {
        name: 'Arc Bolt',
        type: 'Basic',
        description: 'Fires an electric bolt that chains between enemies.',
        damage: '110% ATK'
      },
      {
        name: 'Thunder Sphere',
        type: 'Battle',
        description: 'Creates an orb of electricity that damages enemies in an area.',
        damage: '160% ATK',
        cooldown: '10s'
      },
      {
        name: 'Lightning Dash',
        type: 'Combo',
        description: 'Dashes through enemies, leaving a trail of electric damage.',
        damage: '200% ATK'
      },
      {
        name: 'Storm Call',
        type: 'Ultimate',
        description: 'Summons a massive lightning storm dealing continuous Electric damage.',
        damage: '400% ATK over 5s',
        cost: '100 SP'
      }
    ],
    talents: [
      'Electric Mastery: Electric damage increased by 20%',
      'Chain Reaction: Skills have 30% chance to chain to additional targets'
    ],
    background: 'Perlica is the Supervisor of Endfield Industries and a brilliant scientist specializing in Protocol-Originium technology. She is a key ally to the Endministrator and provides crucial support in combat operations.'
  },
  {
    id: 'chen-qianyu',
    name: 'Chen Qianyu',
    rarity: 5,
    class: 'Guard',
    element: 'Physical',
    weapon: 'Chi Xiao',
    weaponType: 'Sword',
    faction: 'Endfield Industries',
    quote: "Detailed plans have a habit of going wrong. I prefer a more direct approach...",
    image: '/characters/chen-qianyu-official.webp',
    weaponImage: '/characters/weapon-sword.png',
    dateOfBirth: 'July 7',
    race: 'Lung',
    gender: 'Female',
    height: '172cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 80,
      atk: 92,
      def: 70,
      str: 90,
      agl: 88,
      intel: 70,
      wil: 78
    },
    skills: [
      {
        name: 'Dragon Slash',
        type: 'Basic',
        description: 'A precise sword strike infused with draconic energy.',
        damage: '125% ATK'
      },
      {
        name: 'Sheathed Strike',
        type: 'Battle',
        description: 'Sheathes the blade momentarily before unleashing a powerful slash.',
        damage: '200% ATK',
        cooldown: '12s'
      },
      {
        name: 'Dragon Dance',
        type: 'Combo',
        description: 'A flowing sequence of sword strikes that builds momentum.',
        damage: '240% ATK over 4 hits'
      },
      {
        name: 'Azure Dragon',
        type: 'Ultimate',
        description: 'Unleashes the full power of Chi Xiao, manifesting a dragon of pure energy.',
        damage: '480% ATK',
        cost: '100 SP'
      }
    ],
    talents: [
      'Dragon Blood: ATK increases by 5% for every 10% HP lost',
      'Blade Mastery: Basic attacks have 25% chance to deal double damage'
    ],
    background: 'Chen Qianyu, also known as Ch\'en, is a skilled swordswoman from Lungmen who has joined Endfield Industries. She wields the legendary blade Chi Xiao and brings her tactical expertise to the battlefield.'
  },
  {
    id: 'laevatain',
    name: 'Laevatain',
    rarity: 6,
    class: 'Guard',
    element: 'Heat',
    weapon: 'Flame Greatsword',
    weaponType: 'Greatsword',
    faction: 'Rhodes Island',
    quote: "The flames will cleanse all.",
    image: '/characters/laevatain-official.png',
    weaponImage: '/characters/weapon-greatsword.png',
    dateOfBirth: 'Unknown',
    race: 'Sarkaz',
    gender: 'Female',
    height: '175cm',
    infectionStatus: 'Infected',
    stats: {
      hp: 90,
      atk: 98,
      def: 72,
      str: 95,
      agl: 65,
      intel: 70,
      wil: 88
    },
    skills: [
      {
        name: 'Flame Cleave',
        type: 'Basic',
        description: 'A heavy slash that leaves a trail of flames.',
        damage: '140% ATK'
      },
      {
        name: 'Inferno Burst',
        type: 'Battle',
        description: 'Slams the greatsword into the ground, creating a fire explosion.',
        damage: '220% ATK',
        cooldown: '15s'
      },
      {
        name: 'Blazing Spin',
        type: 'Combo',
        description: 'Spins with the greatsword, dealing damage to all nearby enemies.',
        damage: '260% ATK'
      },
      {
        name: 'Ragnarok',
        type: 'Ultimate',
        description: 'Summons a pillar of flame that devastates a large area.',
        damage: '520% ATK',
        cost: '100 SP'
      }
    ],
    talents: [
      'Flameborn: Immune to Burn status, Heat damage increased by 25%',
      'Berserker Rage: ATK increases by 3% for every enemy defeated (max 30%)'
    ],
    background: 'Laevatain is a powerful Sarkaz warrior from Rhodes Island who wields a massive flame-imbued greatsword. Her origins are shrouded in mystery, but her combat prowess is undeniable.'
  },
  {
    id: 'ember',
    name: 'Ember',
    rarity: 6,
    class: 'Guard',
    element: 'Physical',
    weapon: 'Holy Greatsword',
    weaponType: 'Greatsword',
    faction: 'Order of Steel Oath',
    quote: "By the light, I shall protect the innocent.",
    image: '/characters/ember-official.webp',
    weaponImage: '/characters/weapon-greatsword.png',
    dateOfBirth: 'March 21',
    race: 'Sankta',
    gender: 'Female',
    height: '170cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 95,
      atk: 88,
      def: 85,
      str: 85,
      agl: 70,
      intel: 75,
      wil: 92
    },
    skills: [
      {
        name: 'Holy Slash',
        type: 'Basic',
        description: 'A blessed strike that deals Physical damage with radiant energy.',
        damage: '130% ATK'
      },
      {
        name: 'Divine Shield',
        type: 'Battle',
        description: 'Creates a protective barrier that blocks incoming damage.',
        damage: 'Absorbs 300% DEF',
        cooldown: '18s'
      },
      {
        name: 'Retribution',
        type: 'Combo',
        description: 'Counter-attacks after blocking, dealing massive damage.',
        damage: '280% ATK'
      },
      {
        name: 'Judgment Day',
        type: 'Ultimate',
        description: 'Calls down divine light to smite all enemies in a large area.',
        damage: '450% ATK + Stun',
        cost: '100 SP'
      }
    ],
    talents: [
      'Divine Protection: Reduces damage taken by 15%',
      'Holy Retribution: Counter attacks deal 50% additional damage'
    ],
    background: 'Ember is a noble knight of the Order of Steel Oath, dedicated to protecting humanity from the Aggeloi threat. Her unwavering faith and powerful holy arts make her a formidable defender.'
  },
  {
    id: 'ardelia',
    name: 'Ardelia',
    rarity: 5,
    class: 'Support',
    element: 'Nature',
    weapon: 'Survey Staff',
    weaponType: 'Arts Unit',
    faction: 'Rhodes Island',
    quote: "The earth speaks to those who listen.",
    image: '/characters/ardelia.jpg',
    weaponImage: '/characters/weapon-jet.png',
    dateOfBirth: 'April 12',
    race: 'Caprinae',
    gender: 'Female',
    height: '158cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 65,
      atk: 70,
      def: 55,
      str: 50,
      agl: 65,
      intel: 92,
      wil: 80
    },
    skills: [
      {
        name: 'Healing Wave',
        type: 'Basic',
        description: 'Restores HP to the ally with the lowest health.',
        damage: 'Heals 80% ATK'
      },
      {
        name: 'Nature\'s Blessing',
        type: 'Battle',
        description: 'Grants a shield and regeneration buff to all allies.',
        damage: 'Shield: 150% ATK, Regen: 20% ATK/s',
        cooldown: '15s'
      },
      {
        name: 'Earth Shield',
        type: 'Combo',
        description: 'Creates a protective barrier around an ally.',
        damage: 'Absorbs 250% ATK damage'
      },
      {
        name: 'Revitalization',
        type: 'Ultimate',
        description: 'Fully heals all allies and removes all debuffs.',
        damage: 'Full heal + Cleanse',
        cost: '100 SP'
      }
    ],
    talents: [
      'Geologist: Increases healing effectiveness by 20%',
      'Nature\'s Gift: Allies healed gain 10% DEF boost for 10s'
    ],
    background: 'Ardelia is a geologist from Rhodes Island who specializes in studying the unique minerals of Talos-II. Her connection to nature allows her to provide exceptional support to her allies.'
  },
  {
    id: 'pogranichnik',
    name: 'Pogranichnik',
    rarity: 6,
    class: 'Striker',
    element: 'Physical',
    weapon: 'Twin Blades',
    weaponType: 'Sword',
    faction: 'Rhodes Island',
    quote: "No one escapes my blades.",
    image: '/characters/pogranichnik-official.webp',
    weaponImage: '/characters/weapon-sword.png',
    dateOfBirth: 'November 3',
    race: 'Lupo',
    gender: 'Male',
    height: '182cm',
    infectionStatus: 'Infected',
    stats: {
      hp: 78,
      atk: 96,
      def: 65,
      str: 88,
      agl: 95,
      intel: 60,
      wil: 75
    },
    skills: [
      {
        name: 'Twin Strike',
        type: 'Basic',
        description: 'Swiftly attacks with both blades in quick succession.',
        damage: '130% ATK (2 hits)'
      },
      {
        name: 'Shadow Step',
        type: 'Battle',
        description: 'Teleports behind an enemy and delivers a critical strike.',
        damage: '240% ATK (Guaranteed Crit)',
        cooldown: '10s'
      },
      {
        name: 'Blade Whirlwind',
        type: 'Combo',
        description: 'Spins rapidly, slashing all nearby enemies multiple times.',
        damage: '280% ATK over 6 hits'
      },
      {
        name: 'Assassinate',
        type: 'Ultimate',
        description: 'Delivers a devastating strike that ignores enemy defense.',
        damage: '550% ATK (True Damage)',
        cost: '100 SP'
      }
    ],
    talents: [
      'Predator: Critical hit chance increased by 20%',
      'Lone Wolf: Damage increased by 15% when no allies are nearby'
    ],
    background: 'Pogranichnik is a fierce Lupo warrior from Rhodes Island who specializes in rapid, deadly strikes. His dual-wielding technique and stealth abilities make him a deadly assassin.'
  },
  {
    id: 'last-rite',
    name: 'Last Rite',
    rarity: 6,
    class: 'Caster',
    element: 'Cryo',
    weapon: 'Frost Staff',
    weaponType: 'Arts Unit',
    faction: 'Seš\'qa',
    quote: "The cold embraces all in the end.",
    image: '/characters/last-rite-official.jpg',
    weaponImage: '/characters/weapon-jet.png',
    dateOfBirth: 'December 24',
    race: 'Sarkaz',
    gender: 'Female',
    height: '165cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 68,
      atk: 94,
      def: 58,
      str: 55,
      agl: 72,
      intel: 96,
      wil: 88
    },
    skills: [
      {
        name: 'Frost Bolt',
        type: 'Basic',
        description: 'Fires a bolt of ice that slows enemies.',
        damage: '115% ATK + Slow'
      },
      {
        name: 'Blizzard',
        type: 'Battle',
        description: 'Creates a freezing storm in an area, damaging and slowing enemies.',
        damage: '180% ATK over 4s',
        cooldown: '12s'
      },
      {
        name: 'Ice Shard',
        type: 'Combo',
        description: 'Summons sharp ice shards that pierce through enemies.',
        damage: '250% ATK'
      },
      {
        name: 'Absolute Zero',
        type: 'Ultimate',
        description: 'Freezes all enemies in a large area, dealing massive Cryo damage.',
        damage: '480% ATK + Freeze',
        cost: '100 SP'
      }
    ],
    talents: [
      'Frost Mastery: Cryo damage increased by 25%, enemies frozen take 20% more damage',
      'Winter\'s Grasp: Slowed enemies have 15% reduced attack speed'
    ],
    background: 'Last Rite is a mysterious Sarkaz witch from the floating city of Seš\'qa. She masters powerful Cryo arts and Witchcraft, using the cold to control the battlefield and eliminate threats.'
  },
  {
    id: 'wulfgard',
    name: 'Wulfgard',
    rarity: 5,
    class: 'Defender',
    element: 'Physical',
    weapon: 'Tower Shield',
    weaponType: 'Hammer',
    faction: 'Rhodes Island',
    quote: "Stand behind me. I will not fall.",
    image: '/characters/wulfgard-official.webp',
    weaponImage: '/characters/weapon-exemplar.png',
    dateOfBirth: 'February 28',
    race: 'Vouivre',
    gender: 'Male',
    height: '195cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 100,
      atk: 65,
      def: 98,
      str: 80,
      agl: 45,
      intel: 60,
      wil: 85
    },
    skills: [
      {
        name: 'Shield Bash',
        type: 'Basic',
        description: 'Strikes enemies with the shield, dealing damage and generating threat.',
        damage: '100% ATK + Taunt'
      },
      {
        name: 'Fortress Stance',
        type: 'Battle',
        description: 'Greatly increases defense and draws enemy attention.',
        damage: 'DEF +100%, Taunt all enemies',
        cooldown: '20s'
      },
      {
        name: 'Counter Stance',
        type: 'Combo',
        description: 'Blocks incoming attacks and counter-attacks.',
        damage: '200% ATK counter'
      },
      {
        name: 'Iron Wall',
        type: 'Ultimate',
        description: 'Creates an impenetrable barrier that protects all allies.',
        damage: 'Allies take 50% reduced damage for 10s',
        cost: '100 SP'
      }
    ],
    talents: [
      'Unyielding: DEF increases by 20% when HP is below 50%',
      'Guardian: Allies behind Wulfgard take 15% less damage'
    ],
    background: 'Wulfgard is a towering Vouivre defender from Rhodes Island. His massive shield and unwavering resolve make him the perfect frontline protector for any squad.'
  },
  {
    id: 'yvonne',
    name: 'Yvonne',
    rarity: 5,
    class: 'Vanguard',
    element: 'Electric',
    weapon: 'Lightning Spear',
    weaponType: 'Polearm',
    faction: 'Endfield Industries',
    quote: "Speed is the essence of victory.",
    image: '/characters/yvonne.jpg',
    weaponImage: '/characters/weapon-jet.png',
    dateOfBirth: 'June 18',
    race: 'Kuranta',
    gender: 'Female',
    height: '169cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 75,
      atk: 85,
      def: 68,
      str: 78,
      agl: 92,
      intel: 70,
      wil: 72
    },
    skills: [
      {
        name: 'Thunder Thrust',
        type: 'Basic',
        description: 'A swift spear thrust charged with electricity.',
        damage: '120% ATK'
      },
      {
        name: 'Lightning Rush',
        type: 'Battle',
        description: 'Rushes forward, damaging all enemies in the path.',
        damage: '170% ATK',
        cooldown: '8s'
      },
      {
        name: 'Spinning Lance',
        type: 'Combo',
        description: 'Spins the spear, creating a vortex of electric damage.',
        damage: '220% ATK'
      },
      {
        name: 'Storm Charge',
        type: 'Ultimate',
        description: 'Charges at enemies with lightning speed, dealing massive damage.',
        damage: '400% ATK',
        cost: '80 SP'
      }
    ],
    talents: [
      'Swift Maneuver: SP generation increased by 20%',
      'Electric Charge: After using Ultimate, next skill deals 30% more damage'
    ],
    background: 'Yvonne is a swift and agile Kuranta warrior who serves as a vanguard for Endfield Industries. Her lightning-fast attacks and electric-infused spear make her a formidable initiator.'
  },
  {
    id: 'gilberta',
    name: 'Gilberta',
    rarity: 5,
    class: 'Striker',
    element: 'Heat',
    weapon: 'Flame Daggers',
    weaponType: 'Sword',
    faction: 'Rhodes Island',
    quote: "Dance with me in the flames!",
    image: '/characters/gilberta.webp',
    weaponImage: '/characters/weapon-sword.png',
    dateOfBirth: 'August 8',
    race: 'Feline',
    gender: 'Female',
    height: '162cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 70,
      atk: 90,
      def: 55,
      str: 75,
      agl: 95,
      intel: 65,
      wil: 70
    },
    skills: [
      {
        name: 'Flame Slash',
        type: 'Basic',
        description: 'Swift dagger strikes that leave burning wounds.',
        damage: '110% ATK + Burn'
      },
      {
        name: 'Fire Dance',
        type: 'Battle',
        description: 'A graceful dance of flames that damages all nearby enemies.',
        damage: '190% ATK',
        cooldown: '10s'
      },
      {
        name: 'Backstab',
        type: 'Combo',
        description: 'Teleports behind an enemy for a devastating critical strike.',
        damage: '300% ATK (Guaranteed Crit from behind)'
      },
      {
        name: 'Inferno',
        type: 'Ultimate',
        description: 'Creates a massive explosion of flames around herself.',
        damage: '420% ATK',
        cost: '100 SP'
      }
    ],
    talents: [
      'Feline Grace: Evasion increased by 15%',
      'Burning Passion: Burn damage increased by 30%'
    ],
    background: 'Gilberta is a fiery Feline striker from Rhodes Island. Her dual flame daggers and acrobatic fighting style make her a deadly opponent who dances through the battlefield.'
  },
  {
    id: 'avywenna',
    name: 'Avywenna',
    rarity: 5,
    class: 'Support',
    element: 'Nature',
    weapon: 'Healing Staff',
    weaponType: 'Arts Unit',
    faction: 'Rhodes Island',
    quote: "Nature provides for those in need.",
    image: '/characters/avywenna-official.webp',
    weaponImage: '/characters/weapon-jet.png',
    dateOfBirth: 'May 5',
    race: 'Cautus',
    gender: 'Female',
    height: '155cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 62,
      atk: 68,
      def: 52,
      str: 45,
      agl: 70,
      intel: 90,
      wil: 82
    },
    skills: [
      {
        name: 'Nature\'s Touch',
        type: 'Basic',
        description: 'Heals an ally and removes one debuff.',
        damage: 'Heals 75% ATK'
      },
      {
        name: 'Growth',
        type: 'Battle',
        description: 'Plants healing seeds that bloom over time, restoring HP.',
        damage: 'Heals 150% ATK over 5s',
        cooldown: '12s'
      },
      {
        name: 'Vine Bind',
        type: 'Combo',
        description: 'Entangles enemies with vines, immobilizing them.',
        damage: '150% ATK + Root'
      },
      {
        name: 'Nature\'s Wrath',
        type: 'Ultimate',
        description: 'Summons nature spirits to heal all allies and damage enemies.',
        damage: 'Heals 300% ATK + Deals 200% ATK to enemies',
        cost: '100 SP'
      }
    ],
    talents: [
      'Herbal Knowledge: Healing over time effects last 30% longer',
      'Nature\'s Protection: Allies healed gain a shield equal to 20% of healing'
    ],
    background: 'Avywenna is a gentle Cautus healer from Rhodes Island. Her deep connection to nature allows her to harness its power for both healing allies and controlling enemies.'
  },
  {
    id: 'catcher',
    name: 'Catcher',
    rarity: 4,
    class: 'Striker',
    element: 'Physical',
    weapon: 'Hunting Bow',
    weaponType: 'Sniper',
    faction: 'Endfield Industries',
    quote: "I never miss my mark.",
    image: '/characters/catcher.jpg',
    weaponImage: '/characters/weapon-longroad.png',
    dateOfBirth: 'September 15',
    race: 'Lupo',
    gender: 'Male',
    height: '178cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 65,
      atk: 88,
      def: 50,
      str: 70,
      agl: 85,
      intel: 65,
      wil: 68
    },
    skills: [
      {
        name: 'Precise Shot',
        type: 'Basic',
        description: 'Fires an arrow at the enemy\'s weak point.',
        damage: '130% ATK'
      },
      {
        name: 'Piercing Arrow',
        type: 'Battle',
        description: 'Fires an arrow that pierces through multiple enemies.',
        damage: '180% ATK (pierces)',
        cooldown: '10s'
      },
      {
        name: 'Trap Shot',
        type: 'Combo',
        description: 'Fires an arrow that explodes, damaging and slowing enemies.',
        damage: '200% ATK + Slow'
      },
      {
        name: 'Hunter\'s Mark',
        type: 'Ultimate',
        description: 'Marks an enemy, increasing damage taken and dealing massive damage.',
        damage: '380% ATK + 30% increased damage taken',
        cost: '100 SP'
      }
    ],
    talents: [
      'Eagle Eye: Range increased by 20%',
      'Critical Hunter: Critical hits have 50% chance to not consume ammo'
    ],
    background: 'Catcher is a skilled hunter from Endfield Industries who specializes in long-range combat. His precision and tracking abilities make him invaluable for reconnaissance missions.'
  },
  {
    id: 'estella',
    name: 'Estella',
    rarity: 4,
    class: 'Caster',
    element: 'Cryo',
    weapon: 'Ice Wand',
    weaponType: 'Arts Unit',
    faction: 'Endfield Industries',
    quote: "The frost is my ally.",
    image: '/characters/estella.webp',
    weaponImage: '/characters/weapon-jet.png',
    dateOfBirth: 'January 3',
    race: 'Anaty',
    gender: 'Female',
    height: '152cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 58,
      atk: 85,
      def: 48,
      str: 45,
      agl: 70,
      intel: 88,
      wil: 72
    },
    skills: [
      {
        name: 'Ice Spike',
        type: 'Basic',
        description: 'Summons ice spikes from the ground to pierce enemies.',
        damage: '120% ATK'
      },
      {
        name: 'Frost Nova',
        type: 'Battle',
        description: 'Releases a wave of cold that damages and slows enemies.',
        damage: '160% ATK + Slow',
        cooldown: '12s'
      },
      {
        name: 'Glacial Prison',
        type: 'Combo',
        description: 'Traps an enemy in ice, immobilizing them.',
        damage: '180% ATK + Freeze'
      },
      {
        name: 'Blizzard Storm',
        type: 'Ultimate',
        description: 'Summons a devastating ice storm in a large area.',
        damage: '360% ATK over 5s',
        cost: '100 SP'
      }
    ],
    talents: [
      'Frost Affinity: Cryo damage increased by 15%',
      'Frozen Heart: Enemies hit by skills have 20% reduced movement speed'
    ],
    background: 'Estella is a young but talented cryo caster from Endfield Industries. Despite her small stature, her control over ice arts is impressive and continues to grow.'
  },
  {
    id: 'lifeng',
    name: 'Lifeng',
    rarity: 5,
    class: 'Guard',
    element: 'Heat',
    weapon: 'Flame Katana',
    weaponType: 'Sword',
    faction: 'Endfield Industries',
    quote: "My blade burns with honor.",
    image: '/characters/lifeng.webp',
    weaponImage: '/characters/weapon-sword.png',
    dateOfBirth: 'October 10',
    race: 'Lung',
    gender: 'Male',
    height: '180cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 82,
      atk: 89,
      def: 72,
      str: 88,
      agl: 78,
      intel: 68,
      wil: 80
    },
    skills: [
      {
        name: 'Flame Slash',
        type: 'Basic',
        description: 'A swift katana strike wreathed in flames.',
        damage: '125% ATK + Burn'
      },
      {
        name: 'Dragon Breath',
        type: 'Battle',
        description: 'Unleashes a cone of fire from the blade.',
        damage: '190% ATK',
        cooldown: '12s'
      },
      {
        name: 'Blazing Dance',
        type: 'Combo',
        description: 'A series of swift strikes that build up flame energy.',
        damage: '250% ATK over 5 hits'
      },
      {
        name: 'Inferno Blade',
        type: 'Ultimate',
        description: 'Channels intense heat into the blade for a devastating strike.',
        damage: '450% ATK + Burn',
        cost: '100 SP'
      }
    ],
    talents: [
      'Flame Mastery: Heat damage increased by 20%',
      'Burning Spirit: ATK increases by 5% for each burning enemy (max 25%)'
    ],
    background: 'Lifeng is a disciplined Lung swordsman from Endfield Industries. His flame katana and martial prowess make him a formidable frontline warrior.'
  },
  {
    id: 'snowshine',
    name: 'Snowshine',
    rarity: 4,
    class: 'Support',
    element: 'Cryo',
    weapon: 'Frost Scepter',
    weaponType: 'Arts Unit',
    faction: 'Rhodes Island',
    quote: "Let me cool things down.",
    image: '/characters/snowshine.webp',
    weaponImage: '/characters/weapon-jet.png',
    dateOfBirth: 'December 12',
    race: 'Vulpo',
    gender: 'Female',
    height: '156cm',
    infectionStatus: 'Non-Infected',
    stats: {
      hp: 60,
      atk: 72,
      def: 50,
      str: 45,
      agl: 75,
      intel: 85,
      wil: 70
    },
    skills: [
      {
        name: 'Frost Touch',
        type: 'Basic',
        description: 'Applies a chilling effect that slows enemy attacks.',
        damage: '100% ATK + Attack Speed Slow'
      },
      {
        name: 'Ice Barrier',
        type: 'Battle',
        description: 'Creates a protective ice shield for an ally.',
        damage: 'Absorbs 200% ATK',
        cooldown: '15s'
      },
      {
        name: 'Snow Blind',
        type: 'Combo',
        description: 'Blinds enemies with a burst of snow, reducing their accuracy.',
        damage: '120% ATK + Blind'
      },
      {
        name: 'Aurora Veil',
        type: 'Ultimate',
        description: 'Creates a beautiful but deadly aurora that buffs allies and damages enemies.',
        damage: 'Allies: +30% ATK, Enemies: 250% ATK damage',
        cost: '100 SP'
      }
    ],
    talents: [
      'Chilling Presence: Enemies near Snowshine have 10% reduced attack speed',
      'Frost Shield: Ice barriers last 20% longer'
    ],
    background: 'Snowshine is a cheerful Vulpo support specialist from Rhodes Island. Her cryo abilities provide excellent crowd control and protection for her allies.'
  }
];

export const factions = [
  {
    id: 'endfield-industries',
    name: 'Endfield Industries',
    description: 'The leading industrial conglomerate pioneering Protocol-Originium technology and the primary defense force of the Civilization Band.',
    color: '#06B6D4',
    members: ['Endministrator', 'Perlica', 'Chen Qianyu', 'Estella', 'Yvonne', 'Lifeng', 'Catcher']
  },
  {
    id: 'rhodes-island',
    name: 'Rhodes Island',
    description: 'A Terra-based pharmaceutical company dedicated to treating the Infected, now operating in Talos-II through the Reconvener program.',
    color: '#10B981',
    members: ['Laevatain', 'Ardelia', 'Pogranichnik', 'Gilberta', 'Snowshine', 'Wulfgard', 'Avywenna']
  },
  {
    id: 'order-of-steel-oath',
    name: 'Order of Steel Oath',
    description: 'Warriors who fight the Aggeloi on the fringes of civilization, bound by sacred oaths to protect humanity.',
    color: '#F59E0B',
    members: ['Ember']
  },
  {
    id: 'sesqa',
    name: 'Seš\'qa',
    description: 'A faction based atop a mysterious floating city, home to Sarkaz who colonized Talos-II and masters of Witchcraft Arts.',
    color: '#7C3AED',
    members: ['Last Rite']
  }
];

export const elements = [
  { id: 'physical', name: 'Physical', color: '#F97316', description: 'Raw power and stagger effects' },
  { id: 'heat', name: 'Heat', color: '#EF4444', description: 'Burning damage and combustion' },
  { id: 'electric', name: 'Electric', color: '#FCD34D', description: 'Electrification and chain reactions' },
  { id: 'cryo', name: 'Cryo', color: '#60A5FA', description: 'Freezing and solidification' },
  { id: 'nature', name: 'Nature', color: '#10B981', description: 'Corrosion and healing' }
];

export const classes = [
  { id: 'guard', name: 'Guard', icon: 'Sword', description: 'Frontline DPS with stagger capabilities' },
  { id: 'caster', name: 'Caster', icon: 'Sparkles', description: 'Arts damage and elemental infliction' },
  { id: 'striker', name: 'Striker', icon: 'Zap', description: 'Burst damage exploiting vulnerabilities' },
  { id: 'vanguard', name: 'Vanguard', icon: 'Shield', description: 'SP recovery and team support' },
  { id: 'defender', name: 'Defender', icon: 'ShieldCheck', description: 'Tank and protection' },
  { id: 'support', name: 'Support', icon: 'Heart', description: 'Healing and buffs' }
];

export const tierList = {
  S: ['Laevatain', 'Last Rite', 'Pogranichnik', 'Ember'],
  A: ['Endministrator', 'Yvonne', 'Gilberta', 'Avywenna', 'Catcher', 'Lifeng', 'Perlica', 'Wulfgard'],
  B: ['Chen Qianyu', 'Snowshine', 'Estella', 'Ardelia'],
  C: []
};
