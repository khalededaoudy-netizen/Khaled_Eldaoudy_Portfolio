import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CompetitionsSection } from './components/CompetitionsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EntrepreneurialSection } from './components/EntrepreneurialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { sound } from './utils/soundEffects';

export const App: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    sound.enabled = nextState;
  };

  const toggleLang = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = lang === 'en' 
      ? 'Khaled Eldaoudy — Mechatronics Engineering & Embedded Robotics'
      : 'خالد الداودي — هندسة الميكاترونكس والأنظمة المدمجة والروبوتات';
  }, [lang]);

  useEffect(() => {
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  return (
    <div className={`min-h-screen bg-dark-950 text-steel-100 ${lang === 'ar' ? 'font-sans' : 'font-sans'} overflow-x-hidden w-full relative`}>
      {/* Skip to Content for Keyboard and Screen-Reader Users */}
      <a href="#main-content" className="skip-link">
        {lang === 'en' ? 'Skip to main content' : 'الانتقال إلى المحتوى الرئيسي'}
      </a>

      {/* Cybernetic Custom Cursor */}
      <CustomCursor />

      {/* Main HUD Navigation Bar */}
      <Navbar
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        lang={lang}
        toggleLang={toggleLang}
      />

      {/* Main Landmark */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero lang={lang} />
        <AboutSection lang={lang} />
        <SkillsSection lang={lang} />
        <ProjectsSection lang={lang} />
        <CompetitionsSection lang={lang} />
        <LeadershipSection lang={lang} />
        <CertificationsSection lang={lang} />
        <EntrepreneurialSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      {/* Engineering Footer */}
      <Footer lang={lang} />
    </div>
  );
};

export default App;
