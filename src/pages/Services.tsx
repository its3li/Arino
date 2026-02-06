import { Code, Palette, Megaphone, LineChart, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
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
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      titleAr: 'التسويق الرقمي',
      description: 'Strategic marketing campaigns that increase visibility and drive meaningful engagement.',
      descriptionAr: 'حملات تسويقية استراتيجية تزيد من الوضوح وتدفع التفاعل الهادف.',
      features: [
        { en: 'Social Media', ar: 'وسائل التواصل' },
        { en: 'Content Strategy', ar: 'استراتيجية المحتوى' },
        { en: 'Analytics', ar: 'التحليلات' }
      ]
    },
    {
      icon: LineChart,
      title: 'Brand Strategy',
      titleAr: 'استراتيجية العلامة',
      description: 'Comprehensive brand development that establishes your unique identity in the market.',
      descriptionAr: 'تطوير شامل للعلامة التجارية يثبت هويتك الفريدة في السوق.',
      features: [
        { en: 'Brand Identity', ar: 'هوية العلامة' },
        { en: 'Visual Guidelines', ar: 'إرشادات بصرية' },
        { en: 'Market Positioning', ar: 'تموضع السوق' }
      ]
    },
    {
      icon: Globe,
      title: 'E-Commerce',
      titleAr: 'التجارة الإلكترونية',
      description: 'Full-featured online stores that provide seamless shopping experiences and maximize conversions.',
      descriptionAr: 'متاجر إلكترونية متكاملة توفر تجارب تسوق سلسة وتزيد من التحويلات.',
      features: [
        { en: 'Payment Integration', ar: 'تكامل الدفع' },
        { en: 'Inventory Management', ar: 'إدارة المخزون' },
        { en: 'Secure Checkout', ar: 'دفع آمن' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e8] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3a52] mb-4">
            <span className="rtl:hidden">What We Do</span>
            <span className="ltr:hidden">بنعمل ايه</span>
          </h1>
          <p className="text-lg text-[#1a3a52]/70 max-w-2xl mx-auto">
            <span className="rtl:hidden">Comprehensive digital solutions tailored to your business needs</span>
            <span className="ltr:hidden" dir="rtl">حلول رقمية شاملة مصممة خصيصًا لاحتياجات عملك</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#d4a574]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1a3a52] transition-colors duration-300">
                <service.icon className="text-[#1a3a52] group-hover:text-[#f5f1e8] transition-colors duration-300" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-[#1a3a52] mb-3">
                <span className="rtl:hidden">{service.title}</span>
                <span className="ltr:hidden">{service.titleAr}</span>
              </h3>

              <p className="text-[#1a3a52]/70 leading-relaxed mb-6">
                <span className="rtl:hidden">{service.description}</span>
                <span className="ltr:hidden" dir="rtl">{service.descriptionAr}</span>
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#d4a574] rounded-full" />
                    <span className="text-sm text-[#1a3a52]/80">
                      <span className="rtl:hidden">{feature.en}</span>
                      <span className="ltr:hidden">{feature.ar}</span>
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 bg-[#1a3a52] text-[#f5f1e8] rounded-lg font-medium hover:bg-[#d4a574] hover:text-[#1a3a52] transition-colors duration-300">
                <span className="rtl:hidden">Learn More</span>
                <span className="ltr:hidden">اعرف المزيد</span>
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1a3a52] to-[#1a3a52]/90 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-[#f5f1e8] mb-4">
            <span className="rtl:hidden">Ready to Start Your Project?</span>
            <span className="ltr:hidden">جاهز لبدء مشروعك؟</span>
          </h2>
          <p className="text-[#f5f1e8]/80 text-lg mb-8 max-w-2xl mx-auto">
            <span className="rtl:hidden">
              Let's discuss how we can help bring your vision to life with our expert services
            </span>
            <span className="ltr:hidden" dir="rtl">
              دعنا نناقش كيف يمكننا المساعدة في تحقيق رؤيتك من خلال خدماتنا المتخصصة
            </span>
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#d4a574] text-[#1a3a52] rounded-lg font-semibold hover:bg-[#f5f1e8] transition-all transform hover:scale-105 shadow-xl"
          >
            <span className="rtl:hidden">Get In Touch</span>
            <span className="ltr:hidden">تواصل معنا</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
