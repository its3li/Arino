import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const navLinks = [
    { path: '/', label: 'الرئيسية', labelEn: 'Home' },
    { path: '/portfolio', label: 'استعراض مشاريع', labelEn: 'Portfolio' },
    { path: '/about', label: 'من نحن', labelEn: 'About Us' },
    { path: '/services', label: 'بنعمل ايه', labelEn: 'Services' },
    { path: '/contact', label: 'تواصل معنا', labelEn: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a3a52] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#f5f1e8]">Arino</div>
            <div className="text-xs text-[#d4a574] hidden sm:block">علمٌ يُستفاد، ونورٌ يُستزاد</div>
          </Link>

          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#d4a574] ${
                  location.pathname === link.path
                    ? 'text-[#d4a574]'
                    : 'text-[#f5f1e8]'
                }`}
              >
                <span className="rtl:hidden">{link.labelEn}</span>
                <span className="ltr:hidden">{link.label}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#f5f1e8] hover:text-[#d4a574] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1a3a52] border-t border-[#d4a574]/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-[#d4a574]/10 text-[#d4a574]'
                    : 'text-[#f5f1e8] hover:bg-[#f5f1e8]/5'
                }`}
              >
                <span className="rtl:hidden">{link.labelEn}</span>
                <span className="ltr:hidden">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
