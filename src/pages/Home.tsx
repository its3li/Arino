import { Link } from 'react-router-dom';
import { AuroraBackground } from '@/components/ui/aurora-background';

export default function Home() {
  return (
    <AuroraBackground className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in flex flex-col items-center">
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/67GWSTLC/Chat-GPT-Image-Feb-13-2026-02-03-18-AM.png"
              alt="Arino"
              className="w-96 sm:w-[27rem] md:w-[30rem] lg:w-[33rem] h-auto mx-auto drop-shadow-2xl rounded-2xl"
            />
            <p className="-mt-32 sm:-mt-36 md:-mt-40 lg:-mt-44 text-xl sm:text-2xl text-[#d4a574] font-light text-center w-full" dir="rtl">
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
    </AuroraBackground>
  );
}
