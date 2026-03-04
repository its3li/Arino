import { Link } from 'react-router-dom';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { isArabic } = useLanguage();
  return (
    <AuroraBackground className="relative min-h-screen overflow-hidden bg-[#071725]">
      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="text-center animate-fade-in flex flex-col items-center gap-6 sm:gap-7">
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <img
              src="https://i.ibb.co/67GWSTLC/Chat-GPT-Image-Feb-13-2026-02-03-18-AM.png"
              alt="Arino"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-80 sm:w-[24rem] md:w-[28rem] lg:w-[31rem] h-auto mx-auto drop-shadow-2xl rounded-2xl"
            />
            <p
              className="text-xl sm:text-2xl text-[#93c5fd] font-light text-center w-full"
              dir={isArabic ? 'rtl' : 'ltr'}
            >
              {isArabic ? 'علمٌ يُستفاد، ونورٌ يُستزاد' : 'Knowledge to Benefit, Light to Grow'}
            </p>
          </div>

          <p
            className="text-lg sm:text-xl text-[#cfe3ff]/90 max-w-2xl mx-auto mb-2 text-center leading-[1.65]"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            <span className="block mb-2">
              {isArabic ? 'نضيء التميز عبر الابتكار الإبداعي' : 'Illuminating Excellence Through Creative Innovation'}
            </span>
            <span className="block text-base">
              {isArabic ? 'نحول أفكارك إلى واقع رقمي مبتكر' : 'We turn your ideas into an innovative digital reality'}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto pt-1">
            <Link
              to="/portfolio"
              className="w-full sm:w-auto min-w-[190px] px-7 py-3.5 bg-[#60a5fa] text-[#071725] rounded-xl text-base font-semibold hover:bg-[#93c5fd] transition-all transform hover:scale-[1.02] shadow-xl"
            >
              {isArabic ? 'استعراض أعمالنا' : 'View Our Work'}
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto min-w-[190px] px-7 py-3.5 bg-transparent border-2 border-[#cfe3ff] text-[#cfe3ff] rounded-xl text-base font-semibold hover:bg-[#cfe3ff] hover:text-[#071725] transition-all transform hover:scale-[1.02]"
            >
              {isArabic ? 'تواصل معنا' : 'Get In Touch'}
            </Link>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
