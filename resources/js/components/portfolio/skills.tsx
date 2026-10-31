import type { ReactNode } from 'react';
import { S } from './icons';
import SectionTitle from './section-title';

type Chip = { name: string; icon: ReactNode };

const dev = (slug: string) => (
    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`} alt="" width={28} height={28} className="h-7 w-7" />
);

const techStack: Chip[] = [
    { name: 'Laravel', icon: dev('laravel') },
    { name: 'Flutter', icon: dev('flutter') },
    { name: 'TypeScript', icon: dev('typescript') },
    { name: 'JavaScript', icon: dev('javascript') },
    { name: 'React', icon: dev('react') },
    { name: 'Firebase', icon: dev('firebase') },
    { name: 'Tailwind CSS', icon: dev('tailwindcss') },
];

const i6 = 'h-6 w-6';
const beyondCode: Chip[] = [
    { name: 'Cooking', icon: (<S className={i6}><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" /><line x1="6" x2="18" y1="17" y2="17" /></S>) },
    { name: 'Singing', icon: (<S className={i6}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></S>) },
    { name: 'Bass Guitar', icon: (<S className={i6}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></S>) },
    { name: '3D Modeling', icon: (<S className={i6}><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></S>) },
    { name: 'Problem Solving', icon: (<S className={i6}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></S>) },
    { name: 'Teamwork', icon: (<S className={i6}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></S>) },
    { name: 'Public Speaking', icon: (<S className={i6}><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></S>) },
    { name: 'UI Design', icon: (<S className={i6}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></S>) },
    { name: 'Video Editing', icon: (<S className={i6}><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 3v18" /><path d="M3 7.5h4" /><path d="M3 12h18" /><path d="M3 16.5h4" /><path d="M17 3v18" /><path d="M17 7.5h4" /><path d="M17 16.5h4" /></S>) },
    { name: 'Photography', icon: (<S className={i6}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></S>) },
    { name: 'Gaming', icon: (<S className={i6}><line x1="6" x2="10" y1="12" y2="12" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="15" x2="15.01" y1="13" y2="13" /><line x1="18" x2="18.01" y1="11" y2="11" /><rect width="20" height="12" x="2" y="6" rx="2" /></S>) },
];

/** One chip in a carousel. */
function SkillChip({ chip }: { chip: Chip }) {
    return (
        <li className="line flex items-center gap-3 rounded-2xl border p-3 pr-6 whitespace-nowrap transition duration-300 hover:bg-black/5 dark:hover:bg-white/5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/5 dark:bg-white/10">{chip.icon}</span>
            <span className="font-medium">{chip.name}</span>
        </li>
    );
}

/** Carousel: the list is rendered twice so the -50% animation loops seamlessly. */
function Marquee({ label, chips, reverse = false, className = '' }: { label: string; chips: Chip[]; reverse?: boolean; className?: string }) {
    return (
        <div className={`marquee ${reverse ? 'marquee-reverse' : ''} ${className}`} aria-label={label}>
            <div className="marquee-track">
                <ul className="marquee-group">
                    {chips.map((c) => <SkillChip key={c.name} chip={c} />)}
                </ul>
                <ul className="marquee-group" aria-hidden="true">
                    {chips.map((c) => <SkillChip key={c.name} chip={c} />)}
                </ul>
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="reveal px-6 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionTitle>Skills</SectionTitle>

                <p className="mb-4 text-sm font-medium tracking-widest uppercase opacity-60">Tech stack</p>
                <Marquee label="Tech stack" chips={techStack} className="mb-12" />

                <p className="mb-4 text-sm font-medium tracking-widest uppercase opacity-60">Beyond code</p>
                <Marquee label="Beyond code skills" chips={beyondCode} reverse />
            </div>
        </section>
    );
}
