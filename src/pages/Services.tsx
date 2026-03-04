import { Code, Palette, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { isArabic } = useLanguage();

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      titleAr: 'تطوير المواقع',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and user experience.',
      descriptionAr: 'تطبيقات ويب مخصصة مبنية بأحدث التقنيات لأداء مثالي وتجربة مستخدم رائعة.',
      features: [
        { en: 'Responsive Design', ar: 'تصميم متجاوب' },
        { en: 'Modern Frameworks', ar: 'أطر عمل حديثة' },
        { en: 'SEO Optimized', ar: 'محسن لمحركات البحث' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      titleAr: 'تطبيقات الجوال',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      descriptionAr: 'تطبيقات جوال أصلية ومتعددة المنصات تجذب المستخدمين وتدفع نمو الأعمال.',
      features: [
        { en: 'iOS & Android', ar: 'iOS و Android' },
        { en: 'User-Friendly', ar: 'سهل الاستخدام' },
        { en: 'High Performance', ar: 'أداء عالي' }
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      titleAr: 'تصميم واجهات',
      description: 'Beautiful, intuitive designs that create memorable experiences and convert visitors into customers.',
      descriptionAr: 'تصاميم جميلة وبديهية تخلق تجارب لا تُنسى وتحول الزوار إلى عملاء.',
      features: [
        { en: 'User Research', ar: 'بحث المستخدم' },
        { en: 'Wireframing', ar: 'النماذج الأولية' },
        { en: 'Prototyping', ar: 'النماذج التجريبية' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#071725] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#cfe3ff] mb-4">
            {isArabic ? 'ماذا نقدم' : 'What We Do'}
          </h1>
          <p className="text-lg text-[#cfe3ff]/70 max-w-2xl mx-auto" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic
              ? 'حلول رقمية شاملة مصممة خصيصًا لاحتياجات عملك'
              : 'Comprehensive digital solutions tailored to your business needs'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-corners bg-[#071725] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#60a5fa]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#071725] transition-colors duration-300">
                <service.icon className="text-[#cfe3ff] group-hover:text-[#cfe3ff] transition-colors duration-300" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-[#cfe3ff] mb-3">
                {isArabic ? service.titleAr : service.title}
              </h3>

              <p className="text-[#cfe3ff]/70 leading-relaxed mb-6" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic ? service.descriptionAr : service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#60a5fa] rounded-full" />
                    <span className="text-sm text-[#cfe3ff]/80">
                      {isArabic ? feature.ar : feature.en}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 bg-[#071725] text-[#cfe3ff] rounded-lg font-medium hover:bg-[#60a5fa] hover:text-[#cfe3ff] transition-colors duration-300">
                {isArabic ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
          ))}
        </div>

        <div className="card-corners bg-gradient-to-r from-[#0d2236] to-[#0d2236]/90 rounded-3xl p-12 text-center shadow-2xl border border-[#60a5fa]/20">
          <h2 className="text-3xl font-bold text-[#cfe3ff] mb-4">
            {isArabic ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-[#cfe3ff]/80 text-lg mb-8 max-w-2xl mx-auto" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic
              ? 'دعنا نناقش كيف يمكننا المساعدة في تحقيق رؤيتك من خلال خدماتنا المتخصصة'
              : "Let's discuss how we can help bring your vision to life with our expert services"}
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#60a5fa] text-[#cfe3ff] rounded-lg font-semibold hover:bg-[#93c5fd]/20 transition-all transform hover:scale-105 shadow-xl"
          >
            {isArabic ? 'تواصل معنا' : 'Get In Touch'}
          </Link>
        </div>
      </div>
    </div>
  );
}
