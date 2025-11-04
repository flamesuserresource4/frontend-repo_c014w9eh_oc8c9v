import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      {/* Background glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>Creative Tech Enthusiast</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            Hey, I’m Bimo <span role="img" aria-label="wave">👋</span>
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Building playful, modern web experiences
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-600 dark:text-slate-300 md:text-lg">
            I design and code interactive, aesthetic interfaces with a Gen Z vibe — smooth animations, neon pastels, and crisp UX.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 px-6 py-3 text-white shadow-lg shadow-pink-500/30 transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <Rocket className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              View My Work
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-slate-300/60 px-6 py-3 text-slate-700 backdrop-blur-md transition hover:border-slate-400 hover:bg-white/50 dark:border-white/20 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Spline canvas */}
        <div className="relative z-10 h-[380px] w-full rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md dark:border-white/10 md:h-[520px]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
