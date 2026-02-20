import { useEffect, useRef, useState } from 'react';
import { Twitter, MessageCircle, Youtube, ExternalLink, Send } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const quickLinks = [
    { label: 'Operators', href: '#characters' },
    { label: 'Factions', href: '#factions' },
    { label: 'Tier List', href: '#tierlist' },
    { label: 'Elements', href: '#elements' }
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: MessageCircle, label: 'Discord', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: ExternalLink, label: 'Reddit', href: '#' }
  ];

  return (
    <footer 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #0A0F1C 0%, #050810 100%)'
      }}
    >
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #06B6D420, #7C3AED20, #06B6D420)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 10s ease infinite'
        }}
      />

      {/* Content */}
      <div className={`relative z-10 max-w-6xl mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <h3 
              className="text-2xl font-black mb-4"
              style={{ 
                background: 'linear-gradient(135deg, #06B6D4, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ARKNIGHTS ENDFIELD
            </h3>
            <p className="text-gray-400 mb-6">
              The future of Talos-II awaits. Join the fight against the Aggeloi threat 
              and discover the secrets of Protocol-Originium technology.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-colors group"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-cyan-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Send className="w-5 h-5 text-cyan-400" />
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get the latest updates on new operators and game features.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                required
              />
              <button
                type="submit"
                className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-2">
            © 2026 Arknights Endfield Database. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Arknights Endfield is a trademark of Hypergryph. This is a fan-made database 
            and is not affiliated with Hypergryph or Griffin Games.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
