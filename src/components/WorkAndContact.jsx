import React, { useMemo } from 'react';
import { Github, Linkedin, Instagram, Mail, Send, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Glow UI Kit',
    desc: 'A neon pastel component set with glassmorphism and playful motion.',
    img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo1',
    code: 'https://github.com/',
  },
  {
    title: 'Parallax Portfolio',
    desc: 'A smooth-scrolling portfolio with Spline 3D and framer-motion.',
    img: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo2',
    code: 'https://github.com/',
  },
  {
    title: 'API Playground',
    desc: 'FastAPI + React starter with auth, testing, and clean DX.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    demo: 'https://example.com/demo3',
    code: 'https://github.com/',
  },
];

const WorkAndContact = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 flex items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Projects</h2>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 bg-white/40 px-4 py-2 text-sm text-slate-800 backdrop-blur transition hover:bg-white/70 dark:bg-white/10 dark:text-white"
        >
          See more on GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group overflow-hidden rounded-2xl border border-white/20 bg-white/60 shadow-sm backdrop-blur transition hover:shadow-xl dark:bg-white/10"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 px-4 py-2 text-white shadow-md shadow-pink-500/30 transition hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-slate-800 backdrop-blur transition hover:bg-white/70 dark:text-white dark:hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div id="contact" className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Let’s build something fun</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Projects, collabs, or just vibes — my DMs are open. Drop a message and I’ll get back soon.
          </p>

          <div className="mt-5 flex items-center gap-4 text-slate-700 dark:text-slate-300">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="group rounded-full border border-white/20 bg-white/50 p-2.5 text-slate-800 backdrop-blur transition hover:scale-105 dark:bg-white/10 dark:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="group rounded-full border border-white/20 bg-white/50 p-2.5 text-slate-800 backdrop-blur transition hover:scale-105 dark:bg-white/10 dark:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="group rounded-full border border-white/20 bg-white/50 p-2.5 text-slate-800 backdrop-blur transition hover:scale-105 dark:bg-white/10 dark:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:hello@example.com" className="group rounded-full border border-white/20 bg-white/50 p-2.5 text-slate-800 backdrop-blur transition hover:scale-105 dark:bg-white/10 dark:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/20 bg-white/60 p-5 shadow-sm backdrop-blur dark:bg-white/10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-white/30 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-pink-400/30 placeholder:text-slate-400 focus:ring-2 dark:bg-white/10 dark:text-white" placeholder="Bimo" />
            </div>
            <div>
              <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-white/30 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-pink-400/30 placeholder:text-slate-400 focus:ring-2 dark:bg-white/10 dark:text-white" placeholder="you@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
            <textarea name="message" rows={4} required className="mt-1 w-full rounded-xl border border-white/30 bg-white/80 px-3 py-2 text-slate-900 outline-none ring-pink-400/30 placeholder:text-slate-400 focus:ring-2 dark:bg-white/10 dark:text-white" placeholder="Tell me about your idea..." />
          </div>
          <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 px-5 py-2.5 text-white shadow-md shadow-pink-500/30 transition hover:scale-[1.02]">
            <Send className="h-4 w-4" /> Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/20 pt-6 text-sm text-slate-600 dark:text-slate-300">
        <p>© {year} Bimo — "Stay curious, ship playful."</p>
      </footer>
    </section>
  );
};

export default WorkAndContact;
