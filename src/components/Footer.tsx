import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
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
    { icon: <InstagramIcon className="size-4" />, link: 'https://www.instagram.com/aniroofficial' },
    { icon: <LinkedinIcon className="size-4" />, link: 'https://www.linkedin.com' },
    { icon: <YoutubeIcon className="size-4" />, link: 'https://www.youtube.com' }
  ];

  return (
    <footer className="relative text-[#f5f1e8] bg-[#071725]">
      <div className="bg-[radial-gradient(35%_80%_at_30%_0%,rgba(245,241,232,0.1),transparent)] mx-auto max-w-4xl md:border-x border-[#d4a574]/20">
        <div className="bg-[#d4a574]/20 absolute inset-x-0 h-px w-full" />

        <div className="grid max-w-4xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link to="/" className="w-max opacity-90 flex items-center gap-2">
              <img
                src="https://i.ibb.co/ZRjJwkwB/Chat-GPT-Image-Feb-13-2026-01-44-24-AM.png"
                alt="Arino"
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-sm font-mono text-sm text-balance text-[#f5f1e8]/70" dir={isArabic ? 'rtl' : 'ltr'}>
              {isArabic
                ? 'منصة رقمية متكاملة لبناء منتجات تقنية حديثة بتجربة استخدام عالية الجودة.'
                : 'A comprehensive digital technology platform built for modern product experiences.'}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="hover:bg-[#d4a574]/20 rounded-md border border-[#d4a574]/25 p-1.5"
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
            <span className="mb-1 text-xs text-[#f5f1e8]/60">{isArabic ? 'الموارد' : 'Resources'}</span>
            <div className="flex flex-col gap-1">
              {resources.map(({ href, title }, i) => (
                <Link key={i} className="w-max py-1 text-sm duration-200 hover:underline" to={href}>
                  {title}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-3 w-full md:col-span-1">
            <span className="mb-1 text-xs text-[#f5f1e8]/60">{isArabic ? 'الشركة' : 'Company'}</span>
            <div className="flex flex-col gap-1">
              {company.map(({ href, title }, i) => (
                <Link key={i} className="w-max py-1 text-sm duration-200 hover:underline" to={href}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#d4a574]/20 absolute inset-x-0 h-px w-full" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 pt-2 pb-5">
          <p className="text-center font-thin text-[#f5f1e8]/65" dir={isArabic ? 'rtl' : 'ltr'}>
            © Arino. {isArabic ? 'جميع الحقوق محفوظة' : 'All rights reserved'} {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
