import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
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
    { path: '/portfolio', label: 'استعراض مشاريع', labelEn: 'Portfolio' },
    { path: '/about', label: 'من نحن', labelEn: 'About Us' },
    { path: '/services', label: 'بنعمل ايه', labelEn: 'Services' },
    { path: '/contact', label: 'تواصل معنا', labelEn: 'Contact' }
  ];

  return (
    <>
      <nav className="fixed top-3 left-0 right-0 z-50 px-3">
        <div className="relative h-16 sm:h-18 md:h-20 flex items-center justify-center">
          <div className="hidden md:flex items-center gap-1 rounded-2xl border border-[#2a4f73]/50 bg-[#071725]/90 backdrop-blur-xl px-2 py-1.5 shadow-lg">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center justify-center rounded-xl py-2 px-3.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-[#60a5fa]/20 text-[#93c5fd] border border-[#60a5fa]/35'
                      : 'text-[#cfe3ff]/90 hover:bg-[#cfe3ff]/10 hover:text-[#cfe3ff] border border-transparent'
                  }`}
                >
                  <span className="whitespace-nowrap">{isArabic ? link.label : link.labelEn}</span>
                </Link>
              );
            })}

            <div className="mx-1 h-6 w-px bg-[#2a4f73]/70" />
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-xl border border-[#2a4f73] px-3.5 py-2 text-sm font-medium text-[#cfe3ff] hover:bg-[#cfe3ff]/10"
              aria-label="Toggle language"
            >
              <Globe size={16} />
              <span>{isArabic ? 'EN' : 'عربي'}</span>
            </button>
          </div>

          <div className="md:hidden ml-auto flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-[#2a4f73] text-[#cfe3ff] bg-[#071725]/90"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span className="text-xs font-medium">{isArabic ? 'EN' : 'عربي'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-[#2a4f73] text-[#cfe3ff] bg-[#071725]/90"
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
        className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} h-full w-72 bg-[#071725]/95 border-l border-[#2a4f73]/70 z-[70] transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : isArabic ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#2a4f73]/50">
          <span className="text-[#cfe3ff] font-semibold">ARINO</span>
          <button onClick={() => setIsOpen(false)} className="text-[#cfe3ff] hover:text-[#93c5fd]" aria-label="Close menu">
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
                  ? 'bg-[#60a5fa]/15 text-[#93c5fd] border border-[#60a5fa]/35'
                  : 'text-[#cfe3ff] hover:bg-[#cfe3ff]/5 border border-transparent'
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
