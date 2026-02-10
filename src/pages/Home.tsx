import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hls from 'hls.js';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/592747c6820f3774a1ce343ef4782769/manifest/video.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(err => console.log('Autoplay prevented:', err));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(err => console.log('Autoplay prevented:', err));
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-[center_88%] md:object-[center_84%]"
        autoPlay
        muted
        loop
        playsInline
      />


      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in flex flex-col items-center">
          <div className="mb-0 flex w-full flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/zhxmRXMd/upscalemedia-transformed-1.png"
              alt="Arino"
              className="w-80 sm:w-[26rem] md:w-[32rem] lg:w-[38rem] xl:w-[42rem] h-auto mx-auto mb-0 drop-shadow-2xl"
            />
            <p className="text-xl sm:text-2xl text-[#d4a574] font-light text-center -mt-8 sm:-mt-10 md:-mt-12 w-full" dir="rtl">
              علمٌ يُستفاد، ونورٌ يُستزاد
            </p>
          </div>

          <p className="text-lg sm:text-xl text-[#f5f1e8]/90 max-w-2xl mx-auto mb-12 text-center leading-[1.65]">
            <span className="block mb-3">Illuminating Excellence Through Creative Innovation</span>
            <span className="block text-base" dir="rtl">نحول أفكارك إلى واقع رقمي مبتكر</span>
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
