import type { ReactNode } from 'react';
import { PulseDot } from './hero';
import { PinIcon, S } from './icons';
import SectionTitle from './section-title';

type Item = { period: string; title: string; school: string; icon: ReactNode; current?: boolean };

// TODO: ayusin ang mga taon at pangalan ng school
const items: Item[] = [
    {
        period: '2023 – Present',
        title: 'Bachelor of Science in Information Technology',
        school: 'Urdaneta City University',
        current: true,
        icon: (
            <S>
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </S>
        ),
    },
    {
        period: '2022 – 2024',
        title: 'Senior High School, STEM',
        school: 'Urdaneta National High School',
        icon: (
            <S>
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </S>
        ),
    },
    {
        period: '2019 – 2022',
        title: 'Junior High School',
        school: 'Labit National High School',
        icon: (
            <S>
                <path d="m4 6 8-4 8 4" />
                <path d="m18 10 4 2v8H2v-8l4-2" />
                <path d="M14 22v-4a2 2 0 0 0-4 0v4" />
                <path d="M18 5v17" />
                <path d="M6 5v17" />
                <circle cx="12" cy="9" r="2" />
            </S>
        ),
    },
    {
        period: '2014 – 2019',
        title: 'Elementary',
        school: 'Parang Mangga Elementary School',
        icon: (
            <S>
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
            </S>
        ),
    },
];

export default function Education() {
    return (
        <section id="education" className="reveal px-6 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionTitle>Education</SectionTitle>

                <ol className="line relative ml-5 border-l">
                    {items.map((item, i) => (
                        <li key={item.title} className={`relative pl-10 md:pl-14 ${i < items.length - 1 ? 'pb-8' : ''}`}>
                            <span
                                className={`absolute top-0 -left-5 flex h-10 w-10 items-center justify-center rounded-full ${
                                    item.current ? 'bg-black text-white dark:bg-white dark:text-black' : 'line border bg-white dark:bg-black'
                                }`}
                            >
                                {item.icon}
                            </span>
                            <div className="line rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:bg-black/5 md:p-8 dark:hover:bg-white/5">
                                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                                    <span className="line rounded-full border px-3 py-1">{item.period}</span>
                                    {item.current && (
                                        <span className="flex items-center gap-2 rounded-full border border-green-500/40 px-3 py-1 text-green-600 dark:text-green-400">
                                            <PulseDot />
                                            Currently studying
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{item.title}</h3>
                                <p className="mt-3 flex items-center gap-2 text-sm opacity-60">
                                    <PinIcon />
                                    {item.school}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
