import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check, Send, Terminal, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface ContactProps {
  lang: 'en' | 'ar';
}

export const ContactSection: React.FC<ContactProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitting(true);
    sound.playClick();
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sound.playSuccess();
      const mailtoUri = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formState.subject || 'Engineering Inquiry from Portfolio'
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUri;
    }, 800);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-dark-950 border-t border-steel-800/80" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2" aria-hidden="true">
              <span>{lang === 'en' ? '// 08. INITIATE TRANSMISSION & COLLABORATION' : '// 08. بدء التواصل وقنوات التعاون'}</span>
            </div>
            <h2 id="contact-heading" className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
              {lang === 'en' ? (
                <>Let's Build <span className="text-lime">Together.</span></>
              ) : (
                <>فلنبتكر <span className="text-lime">معاً.</span></>
              )}
            </h2>
          </div>
          <p className="font-mono text-xs text-steel-400 max-w-md">
            {lang === 'en'
              ? 'SEEKING GRADUATION R&D SPONSORSHIPS · EMBEDDED & ROBOTICS INTERNSHIPS · DIRECT DIALOGUE'
              : 'متاح لرعاية مشاريع التخرج والبحث والتطوير · فرص التدريب لأنظمة التحكم والروبوتات'}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          
          {/* Left Column: Direct Communication Channels & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {lang === 'en'
                  ? 'Open to High-Impact Engineering Challenges & Opportunities'
                  : 'مستعد للمشاركة في التحديات والفرص الهندسية المتميزة'}
              </h3>
              <p className="text-steel-300 text-sm leading-relaxed">
                {lang === 'en'
                  ? 'Whether you represent a robotics company, an industrial automation facility, or an academic research lab looking for a driven mechatronics engineering senior with real-world competition experience and leadership—let us connect.'
                  : 'سواء كنت تمثل شركة روبوتات متطورة، أو مصنعاً للأتمتة الصناعية، أو معملاً بحثياً يبحث عن طالب هندسة ميكاترونكس متميز بخبرة تنافسية وقيادية عملية—يسعدني التواصل والتعاون معك.'}
              </p>

              {/* Direct Channels Cards */}
              <div className="space-y-3 pt-2">
                
                {/* Email with 1-Click Copy */}
                <div className="p-3.5 sm:p-4 rounded bg-dark-900 border border-steel-800 hover:border-steel-700 transition-colors flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded bg-dark-850 text-lime flex-shrink-0" aria-hidden="true">
                      <Mail size={18} />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-steel-400 uppercase block">{lang === 'en' ? 'DIRECT EMAIL' : 'البريد الإلكتروني'}</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-mono text-white hover:text-lime transition-colors truncate block focus-visible:ring-1 focus-visible:ring-lime"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="min-h-[44px] min-w-[44px] px-3 py-2 rounded hover:bg-dark-850 text-steel-400 hover:text-lime transition-colors flex items-center justify-center gap-1.5 text-[11px] font-mono focus-visible:ring-2 focus-visible:ring-lime flex-shrink-0"
                    title={lang === 'en' ? 'Copy Email to Clipboard' : 'نسخ البريد الإلكتروني'}
                    aria-label={copied ? (lang === 'en' ? 'Email copied to clipboard' : 'تم نسخ البريد بنجاح') : (lang === 'en' ? 'Copy email address to clipboard' : 'نسخ البريد الإلكتروني للحافظة')}
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-lime" aria-hidden="true" />
                        <span className="text-lime">{lang === 'en' ? 'COPIED' : 'تم النسخ'}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} aria-hidden="true" />
                        <span>{lang === 'en' ? 'COPY' : 'نسخ'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone & WhatsApp */}
                <div className="p-3.5 sm:p-4 rounded bg-dark-900 border border-steel-800 hover:border-steel-700 transition-colors flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded bg-dark-850 text-cyan-telemetry flex-shrink-0" aria-hidden="true">
                      <Phone size={18} />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-steel-400 uppercase block">{lang === 'en' ? 'PHONE & WHATSAPP' : 'الهاتف والواتساب'}</span>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-mono text-white hover:text-cyan-telemetry transition-colors truncate block focus-visible:ring-1 focus-visible:ring-lime"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] px-3.5 py-2 rounded bg-dark-850 text-[10px] font-mono text-steel-300 hover:text-white border border-steel-700 hover:border-steel-500 transition-colors flex items-center justify-center flex-shrink-0 focus-visible:ring-2 focus-visible:ring-lime"
                    aria-label={lang === 'en' ? 'WHATSAPP - Open chat with Khaled' : 'واتساب - محادثة عبر تطبيق واتساب'}
                  >
                    WHATSAPP
                  </a>
                </div>

                {/* Location */}
                <div className="p-3.5 sm:p-4 rounded bg-dark-900 border border-steel-800 flex items-center gap-3">
                  <div className="p-2 rounded bg-dark-850 text-steel-400 flex-shrink-0" aria-hidden="true">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-steel-400 uppercase block">{lang === 'en' ? 'LOCATION' : 'المقر الأكاديمي والسكني'}</span>
                    <span className="text-xs sm:text-sm font-mono text-steel-200 block">
                      {lang === 'en' ? PERSONAL_INFO.location : PERSONAL_INFO.locationAr}
                    </span>
                    <span className="text-[10px] font-mono text-steel-400 block">
                      {lang === 'en' ? PERSONAL_INFO.university : PERSONAL_INFO.universityAr}
                    </span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="min-h-[44px] p-3 rounded bg-dark-900 border border-steel-800 hover:border-lime/60 transition-colors flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-lime"
                    aria-label="LINKEDIN - Khaled Eldaoudy profile (opens in new tab)"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin size={16} className="text-steel-400 group-hover:text-lime transition-colors" aria-hidden="true" />
                      <span className="text-xs font-mono font-medium text-steel-200 group-hover:text-white">
                        LINKEDIN
                      </span>
                    </div>
                    <ExternalLink size={12} className="text-steel-400 group-hover:text-lime" aria-hidden="true" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="min-h-[44px] p-3 rounded bg-dark-900 border border-steel-800 hover:border-lime/60 transition-colors flex items-center justify-between group focus-visible:ring-2 focus-visible:ring-lime"
                    aria-label="GITHUB - Khaled Eldaoudy repository profile (opens in new tab)"
                  >
                    <div className="flex items-center gap-2">
                      <Github size={16} className="text-steel-400 group-hover:text-lime transition-colors" aria-hidden="true" />
                      <span className="text-xs font-mono font-medium text-steel-200 group-hover:text-white">
                        GITHUB
                      </span>
                    </div>
                    <ExternalLink size={12} className="text-steel-400 group-hover:text-lime" aria-hidden="true" />
                  </a>
                </div>

              </div>
            </div>

            {/* Offline CV Download Link */}
            <div className="p-3.5 sm:p-4 rounded bg-dark-900/60 border border-steel-800/80 font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span className="text-steel-400">{lang === 'en' ? 'NEED AN OFFICIAL COPY?' : 'هل تحتاج لنسخة رسمية؟'}</span>
              <a
                href={PERSONAL_INFO.cvFile}
                download="Khaled_Hamdy_Eldaoudy_CV.pdf"
                className="text-lime font-bold hover:underline min-h-[44px] inline-flex items-center"
              >
                {lang === 'en' ? 'DOWNLOAD PDF (160KB) →' : 'تحميل السيرة الذاتية (PDF) ←'}
              </a>
            </div>
          </div>

          {/* Right Column: Accessible Message Transmission Form */}
          <div className="lg:col-span-7 bg-dark-900/90 border border-steel-800 rounded-lg p-5 sm:p-8 tech-bracket shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-steel-800 pb-3 mb-6 text-xs font-mono">
                <span className="text-lime flex items-center gap-2 font-bold">
                  <Terminal size={14} aria-hidden="true" />
                  {lang === 'en' ? 'DIRECT TRANSMISSION PROTOCOL' : 'بروتوكول إرسال رسالة مباشرة'}
                </span>
                <span className="text-steel-400">{lang === 'en' ? 'ENCRYPTED • DIRECT' : 'مباشر ومعتمد'}</span>
              </div>

              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-4" role="status" aria-live="polite">
                  <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime text-lime mx-auto flex items-center justify-center">
                    <Check size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {lang === 'en' ? 'TRANSMISSION DISPATCHED' : 'تم إعداد الرسالة بنجاح'}
                  </h3>
                  <p className="text-xs font-mono text-steel-300 max-w-md mx-auto leading-relaxed">
                    {lang === 'en'
                      ? 'Your message client has been triggered. If it did not launch automatically, please email directly to '
                      : 'تم فتح تطبيق البريد الخاص بك. إذا لم يُفتح تلقائياً، يمكنك إرسال بريدك مباشرة إلى '}
                    <span className="text-lime font-bold block sm:inline mt-1 sm:mt-0">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="min-h-[44px] px-5 py-2.5 rounded bg-steel-800 hover:bg-steel-700 text-steel-200 text-xs font-mono mt-4 focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    {lang === 'en' ? 'SEND ANOTHER MESSAGE' : 'إرسال رسالة أخرى'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs" noValidate={false}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-sender-name" className="text-steel-300 uppercase text-[10px] font-bold block">
                        {lang === 'en' ? 'Sender Identity / Full Name *' : 'اسم المرسل بالكامل *'}
                      </label>
                      <input
                        id="contact-sender-name"
                        type="text"
                        required
                        aria-required="true"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={lang === 'en' ? 'Dr. / Eng. Jane Doe' : 'م. فلان الفلاني'}
                        className="w-full min-h-[44px] bg-dark-950 border border-steel-700 rounded px-3.5 py-2.5 text-steel-100 placeholder:text-steel-400 focus:outline-none focus:border-lime focus-visible:ring-2 focus-visible:ring-lime transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-sender-email" className="text-steel-300 uppercase text-[10px] font-bold block">
                        {lang === 'en' ? 'Direct Email Address *' : 'البريد الإلكتروني للتواصل *'}
                      </label>
                      <input
                        id="contact-sender-email"
                        type="email"
                        required
                        aria-required="true"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="contact@organization.com"
                        className="w-full min-h-[44px] bg-dark-950 border border-steel-700 rounded px-3.5 py-2.5 text-steel-100 placeholder:text-steel-400 focus:outline-none focus:border-lime focus-visible:ring-2 focus-visible:ring-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-steel-300 uppercase text-[10px] font-bold block">
                      {lang === 'en' ? 'Transmission Subject' : 'موضوع الرسالة'}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder={lang === 'en' ? 'Graduation Project / Internship Opportunity' : 'فرصة تدريب / مشروع تخرج'}
                      className="w-full min-h-[44px] bg-dark-950 border border-steel-700 rounded px-3.5 py-2.5 text-steel-100 placeholder:text-steel-400 focus:outline-none focus:border-lime focus-visible:ring-2 focus-visible:ring-lime transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-steel-300 uppercase text-[10px] font-bold block">
                      {lang === 'en' ? 'Payload Message *' : 'نص الرسالة *'}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      aria-required="true"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={lang === 'en' ? 'Specify your technical requirements, research proposal, or internship scope...' : 'اكتب تفاصيل الفرصة الهندسية أو المقترح التقني هنا...'}
                      className="w-full min-h-[120px] bg-dark-950 border border-steel-700 rounded px-3.5 py-2.5 text-steel-100 placeholder:text-steel-400 focus:outline-none focus:border-lime focus-visible:ring-2 focus-visible:ring-lime transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onMouseEnter={() => sound.playHover()}
                      className="w-full min-h-[48px] py-3.5 rounded bg-lime hover:bg-lime-bright text-dark-950 font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(200,242,2,0.25)] hover:shadow-[0_0_30px_rgba(200,242,2,0.45)] disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-white"
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>{lang === 'en' ? 'TRANSMITTING SIGNAL...' : 'جارٍ معالجة الإرسال...'}</span>
                      ) : (
                        <>
                          <Send size={15} aria-hidden="true" />
                          <span>{lang === 'en' ? 'DISPATCH TRANSMISSION' : 'إرسال الرسالة الآن'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-steel-800 text-[10px] font-mono text-steel-400 flex items-center justify-between mt-6">
              <span>{lang === 'en' ? 'RESPONSE LATENCY: < 24 HOURS' : 'الرد عادة خلال أقل من 24 ساعة'}</span>
              <span className="text-lime">{lang === 'en' ? 'STATUS: INBOX ACTIVE' : 'الحالة: نشط ومتابع'}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
