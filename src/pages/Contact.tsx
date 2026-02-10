import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { isArabic } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // TODO: Implement your own backend/email service here
      console.log('Contact form submitted:', formData);

      // Simulate a small delay
      await new Promise(resolve => setTimeout(resolve, 500));

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(isArabic ? 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.' : 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      titleAr: 'البريد الإلكتروني',
      value: 'hello@arino.com',
      link: 'mailto:hello@arino.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      titleAr: 'الهاتف',
      value: '+20 123 456 7890',
      link: 'tel:+201234567890'
    },
    {
      icon: MapPin,
      title: 'Address',
      titleAr: 'العنوان',
      value: 'Cairo, Egypt',
      valueAr: 'القاهرة، مصر'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f1e8] pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3a52] mb-4">
            {isArabic ? 'تواصل معنا' : 'Get In Touch'}
          </h1>
          <p className="text-lg text-[#1a3a52]/70 max-w-2xl mx-auto" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic
              ? 'دعنا نناقش كيف يمكننا المساعدة في تحقيق رؤيتك'
              : "Let's discuss how we can help bring your vision to life"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-[#d4a574]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="text-[#1a3a52]" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#1a3a52] mb-2">
                {isArabic ? info.titleAr : info.title}
              </h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-[#1a3a52]/70 hover:text-[#d4a574] transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-[#1a3a52]/70">
                  {isArabic ? (info.valueAr || info.value) : info.value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold text-[#1a3a52] mb-6">
              {isArabic ? 'أرسل لنا رسالة' : 'Send Us a Message'}
            </h2>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800" dir={isArabic ? 'rtl' : 'ltr'}>
                  {isArabic
                    ? 'تم إرسال الرسالة بنجاح! سنتواصل معك قريبًا.'
                    : "Message sent successfully! We'll get back to you soon."}
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1a3a52] mb-2">
                  {isArabic ? 'الاسم' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#1a3a52]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all"
                  placeholder={isArabic ? 'اسمك' : 'John Doe'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a3a52] mb-2">
                  {isArabic ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#1a3a52]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a3a52] mb-2">
                  {isArabic ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#1a3a52]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4a574] focus:border-transparent transition-all resize-none"
                  placeholder={isArabic ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-[#1a3a52] text-[#f5f1e8] rounded-lg font-semibold hover:bg-[#d4a574] hover:text-[#1a3a52] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <span>{isArabic ? 'جاري الإرسال...' : 'Sending...'}</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{isArabic ? 'إرسال الرسالة' : 'Send Message'}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-2xl font-bold text-[#1a3a52] mb-6">
                {isArabic ? 'ساعات العمل' : 'Office Hours'}
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-[#1a3a52]/10">
                  <span className="text-[#1a3a52] font-medium">
                    {isArabic ? 'الإثنين - الخميس' : 'Monday - Thursday'}
                  </span>
                  <span className="text-[#1a3a52]/70">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-[#1a3a52]/10">
                  <span className="text-[#1a3a52] font-medium">
                    {isArabic ? 'الجمعة' : 'Friday'}
                  </span>
                  <span className="text-[#1a3a52]/70">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1a3a52] font-medium">
                    {isArabic ? 'السبت - الأحد' : 'Saturday - Sunday'}
                  </span>
                  <span className="text-[#1a3a52]/70">
                    {isArabic ? 'مغلق' : 'Closed'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a3a52] to-[#1a3a52]/90 rounded-3xl p-8 md:p-12 shadow-xl text-[#f5f1e8]">
              <h3 className="text-xl font-bold mb-4">
                {isArabic ? 'جاهز للتعاون؟' : 'Ready to Collaborate?'}
              </h3>
              <p className="text-[#f5f1e8]/80 leading-relaxed mb-6" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic
                  ? 'سواء كان لديك مشروع في ذهنك أو تريد فقط استكشاف الإمكانيات، نحن هنا للمساعدة. دعنا نصنع شيئًا مذهلاً معًا.'
                  : "Whether you have a project in mind or just want to explore possibilities, we're here to help. Let's create something amazing together."}
              </p>
              <div className="text-[#d4a574] font-medium" dir={isArabic ? 'rtl' : 'ltr'}>
                {isArabic ? 'علمٌ يُستفاد، ونورٌ يُستزاد' : 'Knowledge to be gained, and light to be increased'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
