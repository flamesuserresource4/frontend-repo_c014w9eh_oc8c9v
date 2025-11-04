import React from 'react';
import { Code, Sparkles, Star } from 'lucide-react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Framer Motion', level: 85 },
  { name: 'Three/Spline', level: 70 },
  { name: 'FastAPI', level: 75 },
];

const Skills = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-cyan-400 text-white shadow-md shadow-pink-500/30">
          <Code className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Skills</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="rounded-2xl border border-white/20 bg-white/50 p-5 shadow-sm backdrop-blur dark:bg-white/5">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
              <span className="text-sm text-slate-600 dark:text-slate-300">{skill.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200/70 dark:bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_2px_rgba(168,85,247,0.35)]"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
        <Sparkles className="h-4 w-4 text-yellow-300" />
        <span>Always learning and experimenting with new tools</span>
        <Star className="h-4 w-4 text-pink-400" />
        <span>Obsessed with performance and polish</span>
      </div>
    </section>
  );
};

export default Skills;
