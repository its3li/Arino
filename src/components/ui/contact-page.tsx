import React from 'react';
import { cn } from '@/lib/utils';
import {
  Check,
  Copy,
  LucideIcon,
  Mail,
  Phone,
  FacebookIcon,
  InstagramIcon,
} from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const APP_EMAIL = 'arinosuppor2@gmail.com';
const APP_PHONE = '01021388768';
const APP_PHONE_2 = '01120952576';

export function ContactPage() {
  const { isArabic } = useLanguage();

  const socialLinks = [
    {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/profile.php?id=61588207162139',
      label: 'Facebook'
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/aniroofficial',
      label: 'Instagram'
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#071725] pt-28 pb-16 text-[#cfe3ff]">
      <div aria-hidden className="pointer-events-none absolute inset-0 isolate -z-10 opacity-80">
          <div className="absolute -top-16 left-0 h-80 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,.16),transparent_70%)]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,197,253,.12),transparent_70%)]" />
        </div>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="flex grow flex-col justify-center pt-8 pb-10">
          <h1 className="text-4xl font-bold md:text-5xl">{isArabic ? 'تواصل معنا' : 'Contact Us'}</h1>
          <p className="mb-5 mt-3 text-base text-[#cfe3ff]/75" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic ? 'تواصل مع فريق الدعم في أرينو.' : 'Contact the support team at Arino.'}
          </p>
        </div>


        <div className="rounded-2xl border border-[#2a4f73]/45 bg-[#0d2236]/45 overflow-hidden">
          <div className="grid md:grid-cols-2">
          <Box
            icon={Mail}
            title={isArabic ? 'البريد الإلكتروني' : 'Email'}
            description={isArabic ? 'نرد على جميع الرسائل خلال 24 ساعة.' : 'We respond to all emails within 24 hours.'}
          >
            <a href={`mailto:${APP_EMAIL}`} className="font-mono text-base font-medium tracking-wide hover:underline">
              {APP_EMAIL}
            </a>
            <CopyButton className="size-6" test={APP_EMAIL} />
          </Box>

          <Box
            icon={Phone}
            title={isArabic ? 'الهاتف' : 'Phone'}
            description={isArabic ? 'متاحون للرد طوال أيام الأسبوع.' : "We're available all week for your inquiries."}
            className="border-b-0 md:border-e-0"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-x-2">
                <a href={`tel:${APP_PHONE}`} className="block font-mono text-base font-medium tracking-wide hover:underline">
                  {APP_PHONE}
                </a>
                <CopyButton className="size-6" test={APP_PHONE} />
              </div>
              <div className="flex items-center gap-x-2">
                <a href={`tel:${APP_PHONE_2}`} className="block font-mono text-base font-medium tracking-wide hover:underline">
                  {APP_PHONE_2}
                </a>
                <CopyButton className="size-6" test={APP_PHONE_2} />
              </div>
            </div>
          </Box>
          </div>
        </div>


        <div className="relative mt-8 flex min-h-[280px] items-center justify-center rounded-2xl border border-[#2a4f73]/45 bg-[#0d2236]/45 px-6 py-12">
          <div
            className={cn(
              'absolute inset-0 size-full',
              'bg-[radial-gradient(rgba(147,197,253,.22)_1px,transparent_1px)] bg-[size:26px_26px]',
              '[mask-image:radial-gradient(ellipse_at_center,black_34%,transparent)]'
            )}
          />

          <div className="relative z-10 space-y-6">
            <h2 className="text-center text-3xl font-bold md:text-4xl">{isArabic ? 'تابعنا أونلاين' : 'Find us online'}</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 rounded-full border border-[#60a5fa]/30 bg-[#071725]/80 px-4 py-2 hover:bg-[#60a5fa] hover:text-[#071725]"
                >
                  <link.icon className="size-4" />
                  <span className="font-mono text-sm font-medium tracking-wide">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


type ContactBox = React.ComponentProps<'div'> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

function Box({ title, description, className, children, ...props }: ContactBox) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between border-b border-[#60a5fa]/25 md:border-e md:border-b-0',
        className
      )}
    >
      <div className="flex items-center gap-x-3 bg-[#071725]/70 p-4">
        <props.icon className="size-5 text-[#93c5fd]" strokeWidth={1} />
        <h2 className="text-lg font-medium tracking-wider">{title}</h2>
      </div>
      <div className="flex min-h-[134px] items-center gap-x-2 p-5 md:p-6">{children}</div>
      <div className="p-4">
        <p className="text-sm text-[#cfe3ff]/70">{description}</p>
      </div>
    </div>
  );
}

type CopyButtonProps = ButtonProps & {
  test: string;
};

function CopyButton({ className, variant = 'ghost', size = 'icon', test, ...props }: CopyButtonProps) {
  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(test);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('relative border border-[#60a5fa]/25 text-[#cfe3ff] hover:bg-[#60a5fa]/20 disabled:opacity-100', className)}
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      disabled={copied || props.disabled}
      {...props}
    >
      <div className={cn('transition-all', copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0')}>
        <Check className="size-3.5 stroke-emerald-400" aria-hidden="true" />
      </div>
      <div className={cn('absolute transition-all', copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100')}>
        <Copy aria-hidden="true" className="size-3.5" />
      </div>
    </Button>
  );
}
