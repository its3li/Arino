import { useState, FormEvent } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const contactEmail = 'salaf-ai.vercel.app@gmail.com';

export default function Contact() {
  const { isArabic } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      isArabic ? `رسالة جديدة من ${formData.name}` : `New message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `${isArabic ? 'الاسم' : 'Name'}: ${formData.name}\n${isArabic ? 'البريد الإلكتروني' : 'Email'}: ${formData.email}\n\n${isArabic ? 'الرسالة' : 'Message'}:\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      titleAr: 'البريد الإلكتروني',
      value: contactEmail,
      link: `mailto:${contactEmail}`
    },
    {
      icon: Phone,
      title: 'Phone',
      titleAr: 'الهاتف',
      value: '01120952576',
      link: 'tel:01120952576'
    }
  ];

  return (
    <div className="min-h-screen bg-[#071725] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#cfe3ff] mb-4">
            {isArabic ? 'تواصل معنا' : 'Get In Touch'}
          </h1>
          <p className="text-lg text-[#cfe3ff]/70 max-w-2xl mx-auto" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic
              ? 'دعنا نناقش كيف يمكننا المساعدة في تحقيق رؤيتك'
              : "Let's discuss how we can help bring your vision to life"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-[#071725] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-[#60a5fa]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="text-[#cfe3ff]" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#cfe3ff] mb-2">{isArabic ? info.titleAr : info.title}</h3>
              <a href={info.link} className="text-[#cfe3ff]/70 hover:text-[#93c5fd] transition-colors">
                {info.value}
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#071725] rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold text-[#cfe3ff] mb-6">{isArabic ? 'أرسل لنا رسالة' : 'Send Us a Message'}</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#cfe3ff] mb-2">
                  {isArabic ? 'الاسم' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#2a4f73]/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#93c5fd] focus:border-transparent transition-all"
                  placeholder={isArabic ? 'اسمك' : 'John Doe'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#cfe3ff] mb-2">
                  {isArabic ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#2a4f73]/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#93c5fd] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#cfe3ff] mb-2">
                  {isArabic ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#2a4f73]/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#93c5fd] focus:border-transparent transition-all resize-none"
                  placeholder={isArabic ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#071725] text-[#cfe3ff] rounded-lg font-semibold hover:bg-[#60a5fa] hover:text-[#cfe3ff] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>{isArabic ? 'إرسال الرسالة' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-[#071725] rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-2xl font-bold text-[#cfe3ff] mb-6">{isArabic ? 'وسائل التواصل' : 'Social Media'}</h2>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61588207162139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-lg bg-[#071725] text-[#cfe3ff] hover:bg-[#60a5fa] hover:text-[#cfe3ff] transition-colors"
                >
                  {isArabic ? 'فتح فيسبوك' : 'Open Facebook'}
                </a>
                <a
                  href="https://www.instagram.com/aniroofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-lg bg-[#071725] text-[#cfe3ff] hover:bg-[#60a5fa] hover:text-[#cfe3ff] transition-colors"
                >
                  {isArabic ? 'فتح انستجرام' : 'Open Instagram'}
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0d2236] to-[#0d2236]/90 rounded-3xl p-8 md:p-12 shadow-xl text-[#cfe3ff]">
              <h3 className="text-xl font-bold mb-4">{isArabic ? 'جاهز للتعاون؟' : 'Ready to Collaborate?'}</h3>
              <p className="text-[#cfe3ff]/80 leading-relaxed mb-6" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic
                  ? 'سواء كان لديك مشروع في ذهنك أو تريد فقط استكشاف الإمكانيات، نحن هنا للمساعدة. دعنا نصنع شيئًا مذهلاً معًا.'
                  : "Whether you have a project in mind or just want to explore possibilities, we're here to help. Let's create something amazing together."}
              </p>
              <div className="text-[#60a5fa] font-medium" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic ? 'علمٌ يُستفاد، ونورٌ يُستزاد' : 'Knowledge to be gained, and light to be increased'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
