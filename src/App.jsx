import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkAndContact from './components/WorkAndContact';

const App = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-900 transition-colors dark:from-slate-950 dark:to-slate-900 dark:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur dark:bg-slate-900/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 shadow-[0_0_18px_rgba(236,72,153,0.6)]" />
            <span className="font-semibold">bimo.dev</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="opacity-80 transition hover:opacity-100">About</a>
            <a href="#projects" className="opacity-80 transition hover:opacity-100">Projects</a>
            <a href="#contact" className="opacity-80 transition hover:opacity-100">Contact</a>
          </nav>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-3 py-2 backdrop-blur transition hover:bg-white/80 dark:bg-white/10"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="hidden text-xs md:inline">{dark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <WorkAndContact />
      </main>
    </div>
  );
};

export default App;
