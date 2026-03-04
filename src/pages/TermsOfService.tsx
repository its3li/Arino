import { useLanguage } from '../contexts/LanguageContext';

export default function TermsOfService() {
  const { isArabic } = useLanguage();

  return (
    <div className="min-h-screen bg-[#071725] pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071725] rounded-3xl shadow-xl p-8 md:p-12 border border-[#2a4f73]/50">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#cfe3ff] mb-6">
            {isArabic ? 'شروط الاستخدام' : 'Terms of Service'}
          </h1>
          <div className="space-y-4 text-[#cfe3ff]/80 leading-relaxed" dir={isArabic ? 'rtl' : 'ltr'}>
            <p>
              {isArabic
                ? 'باستخدام هذا الموقع، فإنك توافق على استخدامه بشكل قانوني ومسؤول.'
                : 'By using this website, you agree to use it lawfully and responsibly.'}
            </p>
            <p>
              {isArabic
                ? 'المحتوى المعروض هو لأغراض تعريفية وخدمية فقط وقد يتم تحديثه في أي وقت.'
                : 'The content is provided for informational and service purposes only and may be updated at any time.'}
            </p>
            <p>
              {isArabic
                ? 'نحن لا نجمع أي بيانات شخصية عبر هذا الموقع.'
                : 'We do not collect any personal data through this website.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
