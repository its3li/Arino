import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isArabic, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { path: '/', label: 'الرئيسية', labelEn: 'Home' },
    { path: '/portfolio', label: 'استعراض مشاريع', labelEn: 'Portfolio' },
    { path: '/about', label: 'من نحن', labelEn: 'About Us' },
    { path: '/services', label: 'بنعمل ايه', labelEn: 'Services' },
    { path: '/contact', label: 'تواصل معنا', labelEn: 'Contact' },
  ];

  // Only use transparent navbar on homepage
  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHomePage && !scrolled
            ? 'bg-transparent'
            : 'bg-[#1a3a52] shadow-lg'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Arino" className="h-12" />
            </Link>

            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#d4a574] ${location.pathname === link.path
                    ? 'text-[#d4a574]'
                    : 'text-[#f5f1e8]'
                    }`}
                >
                  {isArabic ? link.label : link.labelEn}
                </Link>
              ))}

              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 bg-[#d4a574]/20 hover:bg-[#d4a574]/40 rounded-full text-[#f5f1e8] text-sm font-medium transition-all"
                aria-label="Toggle language"
              >
                <Globe size={16} />
                <span>{isArabic ? 'EN' : 'عربي'}</span>
              </button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 bg-[#d4a574]/20 hover:bg-[#d4a574]/40 rounded-full text-[#f5f1e8] text-xs font-medium transition-all"
                aria-label="Toggle language"
              >
                <Globe size={14} />
                <span>{isArabic ? 'EN' : 'عربي'}</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#f5f1e8] hover:text-[#d4a574] transition-colors"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} h-full w-72 bg-[#1a3a52] z-[70] transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : isArabic ? '-translate-x-full' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#d4a574]/20">
          <img src="/logo.png" alt="Arino" className="h-10" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#f5f1e8] hover:text-[#d4a574] transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${location.pathname === link.path
                ? 'bg-[#d4a574]/10 text-[#d4a574]'
                : 'text-[#f5f1e8] hover:bg-[#f5f1e8]/5'
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

