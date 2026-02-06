import { Users, Target, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      titleAr: 'التأسيس',
      description: 'Arino was founded with a vision to transform digital experiences',
      descriptionAr: 'تأسست أرينو برؤية لتحويل التجارب الرقمية'
    },
    {
      year: '2020',
      title: 'Expansion',
      titleAr: 'التوسع',
      description: 'Expanded our services to include comprehensive digital solutions',
      descriptionAr: 'توسعنا لنشمل حلول رقمية شاملة'
    },
    {
      year: '2022',
      title: 'Recognition',
      titleAr: 'التقدير',
      description: 'Received industry recognition for innovation and excellence',
      descriptionAr: 'حصلنا على تقدير صناعي للابتكار والتميز'
    },
    {
      year: '2024',
      title: 'Innovation',
      titleAr: 'الابتكار',
      description: 'Leading the way in cutting-edge digital solutions',
      descriptionAr: 'نقود الطريق في الحلول الرقمية المتطورة'
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
      name: 'Ahmed Hassan',
      nameAr: 'أحمد حسن',
      role: 'Founder & CEO',
      roleAr: 'المؤسس والرئيس التنفيذي',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Sara Mohammed',
      nameAr: 'سارة محمد',
      role: 'Creative Director',
      roleAr: 'المديرة الإبداعية',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg'
    },
    {
      name: 'Omar Ali',
      nameAr: 'عمر علي',
      role: 'Tech Lead',
      roleAr: 'قائد التقنية',
      image: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg'
    },
    {
      name: 'Layla Mansour',
      nameAr: 'ليلى منصور',
      role: 'Marketing Director',
      roleAr: 'مديرة التسويق',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e8] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3a52] mb-4">
            <span className="rtl:hidden">About Us</span>
            <span className="ltr:hidden">من نحن</span>
          </h1>
          <p className="text-xl text-[#1a3a52]/70 max-w-3xl mx-auto leading-relaxed" dir="rtl">
            علمٌ يُستفاد، ونورٌ يُستزاد
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <Users className="text-[#d4a574]" size={40} />
              <h2 className="text-3xl font-bold text-[#1a3a52]">
                <span className="rtl:hidden">Our Story</span>
                <span className="ltr:hidden">قصتنا</span>
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#1a3a52]/80 leading-relaxed mb-4">
                <span className="rtl:hidden">
                  At Arino, we believe in the power of knowledge and continuous growth. Our journey began with a simple yet powerful vision: to illuminate the path to digital excellence for businesses of all sizes. We combine cutting-edge technology with creative thinking to deliver solutions that not only meet but exceed expectations.
                </span>
                <span className="ltr:hidden" dir="rtl">
                  في أرينو، نؤمن بقوة المعرفة والنمو المستمر. بدأت رحلتنا برؤية بسيطة لكن قوية: إنارة الطريق نحو التميز الرقمي للشركات بجميع أحجامها. نجمع بين التكنولوجيا المتطورة والتفكير الإبداعي لتقديم حلول لا تلبي التوقعات فحسب، بل تتجاوزها.
                </span>
              </p>
              <p className="text-[#1a3a52]/80 leading-relaxed">
                <span className="rtl:hidden">
                  Every project we undertake is an opportunity to learn, grow, and add more light to our collective knowledge. We are passionate about what we do, and it shows in the quality of our work and the satisfaction of our clients.
                </span>
                <span className="ltr:hidden" dir="rtl">
                  كل مشروع نقوم به هو فرصة للتعلم والنمو وإضافة المزيد من النور إلى معرفتنا الجماعية. نحن شغوفون بما نفعله، وهذا يظهر في جودة عملنا ورضا عملائنا.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
            <span className="rtl:hidden">Our Values</span>
            <span className="ltr:hidden">قيمنا</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#d4a574]/20 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="text-[#1a3a52]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">
                  <span className="rtl:hidden">{value.title}</span>
                  <span className="ltr:hidden">{value.titleAr}</span>
                </h3>
                <p className="text-[#1a3a52]/70 leading-relaxed">
                  <span className="rtl:hidden">{value.description}</span>
                  <span className="ltr:hidden" dir="rtl">{value.descriptionAr}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
            <span className="rtl:hidden">Our Journey</span>
            <span className="ltr:hidden">رحلتنا</span>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#d4a574]/30 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1" />
                  <div className="relative z-10 w-20 h-20 bg-[#1a3a52] rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-2xl font-bold text-[#f5f1e8]">{milestone.year}</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">
                        <span className="rtl:hidden">{milestone.title}</span>
                        <span className="ltr:hidden">{milestone.titleAr}</span>
                      </h3>
                      <p className="text-[#1a3a52]/70">
                        <span className="rtl:hidden">{milestone.description}</span>
                        <span className="ltr:hidden" dir="rtl">{milestone.descriptionAr}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
            <span className="rtl:hidden">Meet Our Team</span>
            <span className="ltr:hidden">تعرف على فريقنا</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52] to-transparent opacity-60" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-1">
                    <span className="rtl:hidden">{member.name}</span>
                    <span className="ltr:hidden">{member.nameAr}</span>
                  </h3>
                  <p className="text-[#d4a574] font-medium">
                    <span className="rtl:hidden">{member.role}</span>
                    <span className="ltr:hidden">{member.roleAr}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
