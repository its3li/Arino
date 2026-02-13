import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Home, Briefcase, Users, Wrench, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isArabic, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'الرئيسية', labelEn: 'Home', icon: Home },
    { path: '/portfolio', label: 'استعراض مشاريع', labelEn: 'Portfolio', icon: Briefcase },
    { path: '/about', label: 'من نحن', labelEn: 'About Us', icon: Users },
    { path: '/services', label: 'بنعمل ايه', labelEn: 'Services', icon: Wrench },
    { path: '/contact', label: 'تواصل معنا', labelEn: 'Contact', icon: Mail }
  ];

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav className="fixed top-3 left-0 right-0 z-50 px-2 sm:px-3">
        <div
          className={`w-full transition-all duration-300 rounded-2xl border ${
            isHomePage && !scrolled
              ? 'bg-[#1a3a52]/35 border-[#f5f1e8]/15 backdrop-blur-sm'
              : 'bg-[#0e2537]/80 border-[#d4a574]/35 backdrop-blur-xl shadow-[0_0_30px_rgba(212,165,116,0.2)]'
          }`}
        >
          <div className="h-20 pl-1 pr-2 sm:pl-2 sm:pr-3 flex items-center justify-between gap-2">
            <Link to="/" className="shrink-0 h-full flex items-center justify-center px-2">
              <img
                src="https://i.ibb.co/ZRjJwkwB/Chat-GPT-Image-Feb-13-2026-01-44-24-AM.png"
                alt="Arino"
                className="h-10 sm:h-11 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center gap-1 rounded-2xl border border-[#f5f1e8]/10 bg-[#071725]/55 p-1.5">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                const Icon = link.icon;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      active
                        ? 'bg-[#d4a574]/20 text-[#d4a574]'
                        : 'text-[#f5f1e8]/85 hover:bg-[#f5f1e8]/10 hover:text-[#f5f1e8]'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="whitespace-nowrap">{isArabic ? link.label : link.labelEn}</span>
                  </Link>
                );
              })}

              <div className="mx-1 h-6 w-px bg-[#f5f1e8]/15" />
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-[#f5f1e8] hover:bg-[#f5f1e8]/10"
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span>{isArabic ? 'EN' : 'عربي'}</span>
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-[#d4a574]/30 text-[#f5f1e8] bg-[#d4a574]/10"
                aria-label="Toggle language"
              >
                <Globe size={14} />
                <span className="text-xs font-medium">{isArabic ? 'EN' : 'عربي'}</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg border border-[#d4a574]/30 text-[#f5f1e8] bg-[#d4a574]/10"
                aria-label="Toggle menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} h-full w-72 bg-[#081a28]/95 border-l border-[#d4a574]/25 z-[70] transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : isArabic ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#d4a574]/20">
          <img src="https://i.ibb.co/ZRjJwkwB/Chat-GPT-Image-Feb-13-2026-01-44-24-AM.png" alt="Arino" className="h-14 w-auto" />
          <button onClick={() => setIsOpen(false)} className="text-[#f5f1e8] hover:text-[#d4a574]" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                location.pathname === link.path
                  ? 'bg-[#d4a574]/15 text-[#d4a574] border border-[#d4a574]/35'
                  : 'text-[#f5f1e8] hover:bg-[#f5f1e8]/5 border border-transparent'
              }`}
            >
              {isArabic ? link.label : link.labelEn}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
