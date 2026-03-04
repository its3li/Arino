import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { isArabic } = useLanguage();

  const milestones = [
    {
      year: '2025',
      title: 'The Idea',
      titleAr: 'الفكرة'
    },
    {
      year: '2026',
      title: 'Execution',
      titleAr: 'بداية التطبيق'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      titleAr: 'مهمتنا',
      description: 'To illuminate paths to success through innovative digital solutions that empower businesses',
      descriptionAr: 'إنارة الطريق للنجاح من خلال حلول رقمية مبتكرة تمكن الأعمال'
    },
    {
      icon: Award,
      title: 'Excellence',
      titleAr: 'التميز',
      description: 'We pursue excellence in every project, delivering quality that exceeds expectations',
      descriptionAr: 'نسعى للتميز في كل مشروع ونقدم جودة تفوق التوقعات'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      titleAr: 'النمو',
      description: 'We grow with our clients, building long-term partnerships based on trust and results',
      descriptionAr: 'ننمو مع عملائنا ونبني شراكات طويلة الأمد قائمة على الثقة والنتائج'
    }
  ];

  const team = [
    {
      name: 'Ali Mahmoud',
      nameAr: 'علي محمود',
      role: 'Founder',
      roleAr: 'مؤسس'
    },
    {
      name: 'Youssef Amr',
      nameAr: 'يوسف عمرو',
      role: 'Founder',
      roleAr: 'مؤسس'
    }
  ];

  return (
    <div className="min-h-screen bg-[#071725] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#cfe3ff] mb-4">
            {isArabic ? 'من نحن' : 'About Us'}
          </h1>
          <p className="text-xl text-[#cfe3ff]/70 max-w-3xl mx-auto leading-relaxed" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic ? 'علمٌ يُستفاد، ونورٌ يُستزاد' : 'Knowledge to be gained, and light to be increased'}
          </p>
        </div>

        <div className="mb-20">
          <div className="card-corners bg-[#071725] rounded-3xl shadow-xl p-8 md:p-12 border border-[#60a5fa]/20">
            <div className="flex items-center gap-4 mb-6">
              <Users className="text-[#60a5fa]" size={40} />
              <h2 className="text-3xl font-bold text-[#cfe3ff]">{isArabic ? 'قصتنا' : 'Our Story'}</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#cfe3ff]/80 leading-relaxed mb-4">
                {isArabic ? (
                  <span dir="rtl">
                    في أرينو، نؤمن بقوة المعرفة والنمو المستمر. بدأت رحلتنا برؤية بسيطة لكن قوية: إنارة الطريق نحو التميز الرقمي للشركات بجميع أحجامها. نجمع بين التكنولوجيا المتطورة والتفكير الإبداعي لتقديم حلول لا تلبي التوقعات فحسب، بل تتجاوزها.
                  </span>
                ) : (
                  'At Arino, we believe in the power of knowledge and continuous growth. Our journey began with a simple yet powerful vision: to illuminate the path to digital excellence for businesses of all sizes. We combine cutting-edge technology with creative thinking to deliver solutions that not only meet but exceed expectations.'
                )}
              </p>
              <p className="text-[#cfe3ff]/80 leading-relaxed">
                {isArabic ? (
                  <span dir="rtl">
                    كل مشروع نقوم به هو فرصة للتعلم والنمو وإضافة المزيد من النور إلى معرفتنا الجماعية. نحن شغوفون بما نفعله، وهذا يظهر في جودة عملنا ورضا عملائنا.
                  </span>
                ) : (
                  'Every project we undertake is an opportunity to learn, grow, and add more light to our collective knowledge. We are passionate about what we do, and it shows in the quality of our work and the satisfaction of our clients.'
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#cfe3ff] text-center mb-12">{isArabic ? 'قيمنا' : 'Our Values'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-corners bg-[#071725] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#60a5fa]/20"
              >
                <div className="w-16 h-16 bg-[#60a5fa]/20 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="text-[#cfe3ff]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#cfe3ff] mb-3">{isArabic ? value.titleAr : value.title}</h3>
                <p className="text-[#cfe3ff]/70 leading-relaxed" dir={isArabic ? 'rtl' : 'ltr'}>
                  {isArabic ? value.descriptionAr : value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#cfe3ff] text-center mb-12">{isArabic ? 'رحلتنا' : 'Our Journey'}</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#60a5fa]/20 via-[#60a5fa] to-[#60a5fa]/20 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1" />
                  <div className="relative z-10 w-20 h-20 bg-[#071725] rounded-full flex items-center justify-center shadow-xl border-4 border-[#60a5fa]/30">
                    <span className="text-xl font-bold text-[#cfe3ff]">{milestone.year}</span>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="card-corners bg-[#071725] rounded-2xl p-6 shadow-lg border border-[#60a5fa]/20">
                      <h3 className="text-xl font-bold text-[#cfe3ff]" dir={isArabic ? 'rtl' : 'ltr'}>
                        {isArabic ? milestone.titleAr : milestone.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#cfe3ff] text-center mb-12">{isArabic ? 'تعرف على فريقنا' : 'Meet Our Team'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="card-corners bg-[#071725] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-[#60a5fa]/20"
              >
                <h3 className="text-xl font-bold text-[#cfe3ff] mb-1">{isArabic ? member.nameAr : member.name}</h3>
                <p className="text-[#60a5fa] font-medium">{isArabic ? member.roleAr : member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
