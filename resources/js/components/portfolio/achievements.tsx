import { S } from './icons';
import SectionTitle from './section-title';

const card = 'line flex flex-col justify-between rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:bg-black/5 dark:hover:bg-white/5';
const iconBox = 'flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/10';
const year = 'line rounded-full border px-3 py-1 text-xs';

// TODO: palitan ng totoong achievements mo
export default function Achievements() {
    return (
        <section id="achievements" className="reveal px-6 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionTitle>Achievements</SectionTitle>

                <ul className="grid gap-3 md:grid-cols-3">
                    {/* Featured */}
                    <li className="line group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:bg-black/5 md:col-span-2 md:p-8 dark:hover:bg-white/5">
                        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:18px_18px] opacity-[0.07] [mask-image:linear-gradient(to_bottom_left,#000,transparent_70%)]"></div>
                        <div className="relative">
                            <div className="mb-8 flex items-center justify-between">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                                    <S className="h-6 w-6">
                                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                        <path d="M4 22h16" />
                                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                                    </S>
                                </span>
                                <span className={year}>2026</span>
                            </div>
                            <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">Award or recognition title</h3>
                            <p className="mt-3 max-w-md opacity-70">Maikling paglalarawan: ano ang ginawa mo at bakit ka nanalo o kinilala.</p>
                        </div>
                        <div className="relative mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm">
                            <span className="opacity-60">Organization or event</span>
                            <a href="#" className="flex shrink-0 items-center gap-1 font-medium whitespace-nowrap transition hover:gap-2">
                                View certificate
                                <S className="h-4 w-4"><path d="M5 12h14M13 6l6 6-6 6" /></S>
                            </a>
                        </div>
                    </li>

                    {/* Hackathon / competition */}
                    <li className={card}>
                        <div>
                            <div className="mb-8 flex items-center justify-between">
                                <span className={iconBox}>
                                    <S className="h-6 w-6"><path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></S>
                                </span>
                                <span className={year}>2025</span>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Hackathon, competition or certification</h3>
                        </div>
                        <p className="mt-6 text-sm opacity-60">Organization or event</p>
                    </li>

                    {/* Dean's List */}
                    <li className={card}>
                        <div>
                            <div className="mb-8 flex items-center justify-between">
                                <span className={iconBox}>
                                    <S className="h-6 w-6"><circle cx="12" cy="8" r="6" /><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" /></S>
                                </span>
                                <span className={year}>2024</span>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Dean's List or scholarship</h3>
                        </div>
                        <p className="mt-6 text-sm opacity-60">UCU</p>
                    </li>

                    {/* Certification */}
                    <li className={`${card} md:col-span-2`}>
                        <div>
                            <div className="mb-8 flex items-center justify-between">
                                <span className={iconBox}>
                                    <S className="h-6 w-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z" /><path d="M14 2v6h6" /><path d="m9 15 2 2 4-4" /></S>
                                </span>
                                <span className={year}>2024</span>
                            </div>
                            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Certificate or training completed</h3>
                        </div>
                        <p className="mt-6 text-sm opacity-60">Organization or platform</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
