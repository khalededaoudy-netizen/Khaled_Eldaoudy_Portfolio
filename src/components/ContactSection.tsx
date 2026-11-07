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
    
    // Create mailto link as fallback & simulation
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
    }, 900);
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-950 border-t border-steel-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-lime tracking-[0.2em] uppercase font-semibold flex items-center gap-2">
              <span>{lang === 'en' ? '// 08. INITIATE TRANSMISSION & COLLABORATION' : '// 08. بدء التواصل وقنوات التعاون'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase">
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

        {/* 2-Column Layout: Direct Channels / Interactive Message Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Credentials & Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                Open to High-Impact Engineering Challenges
              </h3>
              <p className="text-steel-300 text-sm leading-relaxed">
                Whether you represent an innovative robotics startup, an industrial automation plant, or an academic research lab looking for an ambitious mechatronics engineer with real-world competition grit and leadership — let's connect.
              </p>

              {/* Direct Channels Cards */}
              <div className="space-y-3 pt-2">
                
                {/* Email with 1-Click Copy */}
                <div className="p-4 rounded bg-dark-900 border border-steel-800 hover:border-steel-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-dark-850 text-lime">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-steel-500 uppercase block">DIRECT EMAIL</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-mono text-white hover:text-lime transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded hover:bg-dark-850 text-steel-400 hover:text-lime transition-colors flex items-center gap-1 text-[11px] font-mono"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-lime" />
                        <span className="text-lime">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone / WhatsApp */}
                <div className="p-4 rounded bg-dark-900 border border-steel-800 hover:border-steel-700 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-dark-850 text-cyan-telemetry">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-steel-500 uppercase block">PHONE & WHATSAPP</span>
                      <a
                        href="tel:+201025602440"
                        className="text-xs sm:text-sm font-mono text-white hover:text-cyan-telemetry transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/201025602440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-dark-850 text-[10px] font-mono text-steel-300 hover:text-white border border-steel-700 hover:border-steel-500 transition-colors"
                  >
                    WHATSAPP
                  </a>
                </div>

                {/* Location */}
                <div className="p-4 rounded bg-dark-900 border border-steel-800 flex items-center gap-3">
                  <div className="p-2 rounded bg-dark-850 text-steel-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-steel-500 uppercase block">LOCATION</span>
                    <span className="text-xs sm:text-sm font-mono text-steel-200">
                      {PERSONAL_INFO.location}
                    </span>
                    <span className="text-[10px] font-mono text-steel-500 block">
                      GPS: {PERSONAL_INFO.coordinates}
                    </span>
                  </div>
                </div>

                {/* Social Profiles: LinkedIn & GitHub */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="p-3.5 rounded bg-dark-900 border border-steel-800 hover:border-lime/60 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin size={16} className="text-steel-400 group-hover:text-lime transition-colors" />
                      <span className="text-xs font-mono font-medium text-steel-200 group-hover:text-white">
                        LINKEDIN
                      </span>
                    </div>
                    <ExternalLink size={12} className="text-steel-500 group-hover:text-lime" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="p-3.5 rounded bg-dark-900 border border-steel-800 hover:border-lime/60 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2">
                      <Github size={16} className="text-steel-400 group-hover:text-lime transition-colors" />
                      <span className="text-xs font-mono font-medium text-steel-200 group-hover:text-white">
                        GITHUB
                      </span>
                    </div>
                    <ExternalLink size={12} className="text-steel-500 group-hover:text-lime" />
                  </a>
                </div>

              </div>
            </div>

            {/* Quick CV Download Block */}
            <div className="p-4 rounded bg-dark-900/60 border border-steel-800/80 font-mono text-xs flex items-center justify-between">
              <span className="text-steel-400">NEED AN OFFLINE COPY?</span>
              <a
                href={PERSONAL_INFO.cvFile}
                download="Khaled_Hamdy_Eldaoudy_CV.pdf"
                className="text-lime font-bold hover:underline"
              >
                DOWNLOAD PDF (160KB) &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Transmission Dispatcher */}
          <div className="lg:col-span-7 bg-dark-900/90 border border-steel-800 rounded-lg p-6 sm:p-8 tech-bracket shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-steel-800 pb-3 mb-6 text-xs font-mono">
                <span className="text-lime flex items-center gap-2 font-bold">
                  <Terminal size={14} />
                  TRANSMISSION DISPATCH PROTOCOL // PORT: 443
                </span>
                <span className="text-steel-500">ENCRYPTED &bull; DIRECT</span>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime text-lime mx-auto flex items-center justify-center">
                    <Check size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    TRANSMISSION DISPATCHED
                  </h4>
                  <p className="text-xs font-mono text-steel-300 max-w-md mx-auto">
                    Your message packet has been formatted. If your mail client didn't launch automatically, please email directly to <span className="text-lime font-bold">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded bg-steel-800 hover:bg-steel-700 text-steel-200 text-xs font-mono mt-4"
                  >
                    SEND ANOTHER PACKET
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-steel-400 uppercase text-[10px] font-bold block">
                        Sender Identity / Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. / Eng. Jane Doe"
                        className="w-full bg-dark-950 border border-steel-700 rounded px-3.5 py-2.5 text-steel-100 placeholder:text-steel-600 focus:outline-none focus:border-lime transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-steel-400 uppercase text-[10px] font-bold block">
                        Direct Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="contact@organization.com"
                        className="w-full bg-dark-950 border border-steel-700 rounded px-3.5 py-2.5 text-steel-100 placeholder:text-steel-600 focus:outline-none focus:border-lime transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-steel-400 uppercase text-[10px] font-bold block">
                      Transmission Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Graduation Project Collaboration / Internship Opportunity"
                      className="w-full bg-dark-950 border border-steel-700 rounded px-3.5 py-2.5 text-steel-100 placeholder:text-steel-600 focus:outline-none focus:border-lime transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-steel-400 uppercase text-[10px] font-bold block">
                      Payload Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Specify your technical requirements, research proposal, or internship scope..."
                      className="w-full bg-dark-950 border border-steel-700 rounded px-3.5 py-2.5 text-steel-100 placeholder:text-steel-600 focus:outline-none focus:border-lime transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onMouseEnter={() => sound.playHover()}
                      className="w-full py-3.5 rounded bg-lime hover:bg-lime-bright text-dark-950 font-bold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(200,242,2,0.25)] hover:shadow-[0_0_30px_rgba(200,242,2,0.45)] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING SIGNAL...</span>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>DISPATCH TRANSMISSION</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-steel-800 text-[10px] font-mono text-steel-500 flex items-center justify-between mt-6">
              <span>RESPONSE LATENCY: TYPICALLY &lt; 24 HOURS</span>
              <span className="text-lime">STATUS: MONITORING INBOX</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
