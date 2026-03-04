import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { isArabic } = useLanguage();
  const year = new Date().getFullYear();

  const company = [
    { title: isArabic ? 'من نحن' : 'About Us', href: '/about' },
    { title: isArabic ? 'الخصوصية' : 'Privacy Policy', href: '/privacy-policy' },
    { title: isArabic ? 'الشروط' : 'Terms of Service', href: '/terms-of-service' }
  ];

  const resources = [
    { title: isArabic ? 'تواصل معنا' : 'Contact', href: '/contact' },
    { title: isArabic ? 'الخدمات' : 'Services', href: '/services' },
    { title: isArabic ? 'المشاريع' : 'Portfolio', href: '/portfolio' }
  ];

  const socialLinks = [
    { icon: <FacebookIcon className="size-4" />, link: 'https://www.facebook.com/profile.php?id=61588207162139' },
    { icon: <InstagramIcon className="size-4" />, link: 'https://www.instagram.com/aniroofficial' }
  ];

  return (
    <footer className="relative text-[#cfe3ff] bg-[#071725]">
      <div className="bg-[radial-gradient(35%_80%_at_30%_0%,rgba(96,165,250,0.12),transparent)] mx-auto max-w-4xl md:border-x border-[#60a5fa]/20">
        <div className="bg-[#60a5fa]/20 absolute inset-x-0 h-px w-full" />

        <div className="grid max-w-4xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link to="/" className="w-max opacity-90 flex items-center gap-2">
              <img
                src="https://i.ibb.co/ZRjJwkwB/Chat-GPT-Image-Feb-13-2026-01-44-24-AM.png"
                alt="Arino"
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-sm font-mono text-sm text-balance text-[#cfe3ff]/70" dir={isArabic ? 'rtl' : 'ltr'}>
              {isArabic
                ? 'منصة رقمية متكاملة لبناء منتجات تقنية حديثة بتجربة استخدام عالية الجودة.'
                : 'A comprehensive digital technology platform built for modern product experiences.'}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-[#60a5fa]/20 rounded-md border border-[#60a5fa]/25 p-1.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-[#cfe3ff]/60">{isArabic ? 'الموارد' : 'Resources'}</span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                <Link key={i} className="w-max py-1 text-sm duration-200 hover:underline" to={href}>
                  {title}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-[#cfe3ff]/60">{isArabic ? 'الشركة' : 'Company'}</span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <Link key={i} className="w-max py-1 text-sm duration-200 hover:underline" to={href}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#60a5fa]/20 absolute inset-x-0 h-px w-full" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 pt-2 pb-5">
          <p className="text-center font-thin text-[#cfe3ff]/65" dir={isArabic ? 'rtl' : 'ltr'}>
            © Arino. {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved'} {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
