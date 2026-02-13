import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Briefcase, Users, Wrench, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isArabic, toggleLanguage } = useLanguage();

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'الرئيسية', labelEn: 'Home' },
    { path: '/portfolio', label: 'استعراض مشاريع', labelEn: 'Portfolio', icon: Briefcase },
    { path: '/about', label: 'من نحن', labelEn: 'About Us', icon: Users },
    { path: '/services', label: 'بنعمل ايه', labelEn: 'Services', icon: Wrench },
    { path: '/contact', label: 'تواصل معنا', labelEn: 'Contact', icon: Mail }
  ];

  return (
    <>
      <nav className="fixed top-3 left-0 right-0 z-50 px-3">
        <div className="relative h-16 sm:h-18 md:h-20 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-1 rounded-2xl border border-[#f5f1e8]/20 bg-[#071725]/75 backdrop-blur-xl px-2 py-1.5 shadow-lg">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center gap-2 rounded-xl py-2 text-sm font-medium transition-all duration-200 ${link.path === '/' ? 'px-2 py-1' : 'px-3.5'} ${
                    active
                      ? 'bg-[#d4a574]/20 text-[#d4a574]'
                      : 'text-[#f5f1e8]/90 hover:bg-[#f5f1e8]/10 hover:text-[#f5f1e8]'
                  }`}
                >
                  {link.path === '/' ? (
                    <img
                      src="https://i.ibb.co/ZRjJwkwB/Chat-GPT-Image-Feb-13-2026-01-44-24-AM.png"
                      alt="Home"
                      className="h-9 w-9 rounded-md object-cover"
                    />
                  ) : (
                    (() => {
                      const Icon = link.icon;
                      return Icon ? <Icon size={17} /> : null;
                    })()
                  )}
                  {link.path !== '/' && (
                    <span className="whitespace-nowrap">{isArabic ? link.label : link.labelEn}</span>
                  )}
                </Link>
              );
            })}

            <div className="mx-1 h-6 w-px bg-[#f5f1e8]/15" />
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-xl border border-[#f5f1e8]/25 px-3.5 py-2 text-sm font-medium text-[#f5f1e8] hover:bg-[#f5f1e8]/10"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              <span>{isArabic ? 'EN' : 'عربي'}</span>
            </button>
          </div>

          <div className="md:hidden ml-auto flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-[#d4a574]/30 text-[#f5f1e8] bg-[#071725]/75"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span className="text-xs font-medium">{isArabic ? 'EN' : 'عربي'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-[#d4a574]/30 text-[#f5f1e8] bg-[#071725]/75"
              aria-label="Toggle menu"
            >
              <Menu size={22} />
            </button>
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
