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
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
  };

  useEffect(() => {
    // Initial sound engine configuration
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  return (
    <div className={`min-h-screen bg-dark-950 text-steel-100 ${lang === 'ar' ? 'font-sans' : 'font-sans'}`}>
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Main HUD Navigation Bar */}
      <Navbar
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        lang={lang}
        toggleLang={toggleLang}
      />

      {/* Main Layout Stream */}
      <main>
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

      {/* Engineering Blueprint Footer */}
      <Footer lang={lang} />
    </div>
  );
};

export default App;
