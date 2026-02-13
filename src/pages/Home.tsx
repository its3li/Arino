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
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/67RhGBk1/Make-it-a-2k-202602130044.jpg"
              alt="Arino"
              className="w-32 sm:w-36 md:w-40 lg:w-44 h-auto mx-auto drop-shadow-2xl rounded-2xl"
            />
            <p className="mt-4 text-xl sm:text-2xl text-[#d4a574] font-light text-center w-full" dir="rtl">
              علمٌ يُستفاد، ونورٌ يُستزاد
            </p>
          </div>

          <p className="mt-6 text-lg sm:text-xl text-[#f5f1e8]/90 max-w-2xl mx-auto mb-10 text-center leading-[1.65]">
            <span className="block mb-2">Illuminating Excellence Through Creative Innovation</span>
            <span className="block text-base" dir="rtl">
              نحول أفكارك إلى واقع رقمي مبتكر
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
            <Link
              to="/portfolio"
              className="min-w-[190px] px-7 py-3.5 bg-[#d4a574] text-[#1a3a52] rounded-xl text-base font-semibold hover:bg-[#d4a574]/90 transition-all transform hover:scale-[1.02] shadow-xl"
            >
              <span className="rtl:hidden">View Our Work</span>
              <span className="ltr:hidden">استعراض أعمالنا</span>
            </Link>
            <Link
              to="/contact"
              className="min-w-[190px] px-7 py-3.5 bg-transparent border-2 border-[#f5f1e8] text-[#f5f1e8] rounded-xl text-base font-semibold hover:bg-[#f5f1e8] hover:text-[#1a3a52] transition-all transform hover:scale-[1.02]"
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
