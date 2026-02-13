import { Link } from 'react-router-dom';
import ShadowOverlayBackground from '../components/ShadowOverlayBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <ShadowOverlayBackground
          color="rgba(20, 52, 76, 1)"
          animation={{ scale: 65, speed: 45 }}
          noise={{ opacity: 0.2, scale: 0.55 }}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#06121bcc] via-[#10293c99] to-[#071725cc]" />

      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in flex flex-col items-center">
          <div className="mb-0 flex w-full flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/ZRjJwkwB/Chat-GPT-Image-Feb-13-2026-01-44-24-AM.png"
              alt="Arino"
              className="w-28 sm:w-32 md:w-36 lg:w-40 h-auto mx-auto mb-0 drop-shadow-2xl"
            />
            <p
              className="text-xl sm:text-2xl text-[#d4a574] font-light text-center -mt-14 sm:-mt-16 md:-mt-20 w-full"
              dir="rtl"
            >
              علمٌ يُستفاد، ونورٌ يُستزاد
            </p>
          </div>

          <p className="text-lg sm:text-xl text-[#f5f1e8]/90 max-w-2xl mx-auto mb-12 text-center leading-[1.65]">
            <span className="block mb-3">Illuminating Excellence Through Creative Innovation</span>
            <span className="block text-base" dir="rtl">
              نحول أفكارك إلى واقع رقمي مبتكر
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-[#d4a574] text-[#1a3a52] rounded-lg font-semibold hover:bg-[#d4a574]/90 transition-all transform hover:scale-105 shadow-xl"
            >
              <span className="rtl:hidden">View Our Work</span>
              <span className="ltr:hidden">استعراض أعمالنا</span>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-[#f5f1e8] text-[#f5f1e8] rounded-lg font-semibold hover:bg-[#f5f1e8] hover:text-[#1a3a52] transition-all transform hover:scale-105"
            >
              <span className="rtl:hidden">Get In Touch</span>
              <span className="ltr:hidden">تواصل معنا</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
