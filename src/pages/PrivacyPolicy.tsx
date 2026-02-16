import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { isArabic } = useLanguage();

  return (
    <div className="min-h-screen bg-[#071725] pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071725] rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#cfe3ff] mb-6">
            {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
          <div className="space-y-4 text-[#cfe3ff]/80 leading-relaxed" dir={isArabic ? 'rtl' : 'ltr'}>
            <p>
              {isArabic
                ? 'نحن لا نجمع أو نخزن أو نشارك أي بيانات شخصية من زوار هذا الموقع.'
                : 'We do not collect, store, or share any personal data from visitors of this website.'}
            </p>
            <p>
              {isArabic
                ? 'جميع النماذج والروابط في الموقع تُستخدم فقط لتوجيهك إلى وسائل تواصل خارجية مثل البريد الإلكتروني.'
                : 'All forms and links on this site are used only to direct you to external communication channels such as email.'}
            </p>
            <p>
              {isArabic
                ? 'باستخدامك للموقع، فأنت توافق على هذه السياسة.'
                : 'By using this website, you agree to this policy.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
