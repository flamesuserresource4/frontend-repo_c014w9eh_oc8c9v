import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-cyan-400 text-white shadow-md shadow-pink-500/30">
          <User className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">About Me</h2>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-tr from-purple-500/40 to-cyan-400/40 p-1 shadow-xl shadow-purple-500/20 backdrop-blur-md md:h-48 md:w-48">
            <img
              src="https://i.pravatar.cc/300?img=13"
              alt="Bimo avatar"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            I’m Bimo — a curious builder who loves mixing code, design, and motion to craft delightful digital experiences. I’m passionate about creative technology, interactive 3D, and human-centered products.
          </p>
          <p className="mt-4 text-slate-700 dark:text-slate-300">
            When I’m not shipping features, you’ll find me exploring playful UI ideas, tweaking color palettes, or learning something new. My vibe: minimal, modern, and a little bit extra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
