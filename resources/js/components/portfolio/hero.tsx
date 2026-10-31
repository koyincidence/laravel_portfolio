import { useTyping } from '@/hooks/use-portfolio';
import { Icon, type IconName } from './icons';

const phrases = ['I build web apps.', 'I build mobile apps.', 'I build things that work (eventually).'];

// TODO: replace # with your real profile links
const socials: { name: IconName; label: string; href: string }[] = [
    { name: 'github', label: 'GitHub', href: '#' },
    { name: 'linkedin', label: 'LinkedIn', href: '#' },
    { name: 'facebook', label: 'Facebook', href: '#' },
    { name: 'instagram', label: 'Instagram', href: '#' },
    { name: 'phone', label: 'Phone', href: 'tel:+639XXXXXXXXX' },
    { name: 'mail', label: 'Email', href: 'mailto:jianecarlolorenzo@example.com' },
];

const hide = (e: React.SyntheticEvent<HTMLImageElement>) => (e.currentTarget.style.display = 'none');

export function PulseDot() {
    return (
        <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
    );
}

export default function Hero() {
    const typed = useTyping(phrases);

    return (
        <section id="home" className="flex min-h-svh items-end px-6 pt-28 pb-10">
            <div className="mx-auto grid w-full max-w-6xl items-end gap-12 md:grid-cols-[1.3fr_1fr] md:gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
                <div>
                    <p className="mb-6 max-w-md opacity-70">
                        IT student who enjoys learning new tools, solving problems and turning ideas into real projects. Always curious, always improving, and always one commit away from something better.
                    </p>
                    <h1 className="text-[clamp(3.2rem,9vw,8rem)] leading-[0.9] font-extrabold tracking-tighter md:text-[clamp(3rem,8vw,8rem)] lg:text-[clamp(3.2rem,9vw,8rem)]">
                        Jiane Carlo
                        <span className="outline-text block">Lorenzo</span>
                    </h1>
                    <div className="mt-10 flex flex-wrap gap-3">
                        <a href="#projects" className="pill bg-black! text-white! hover:bg-transparent! hover:text-current! dark:bg-white! dark:text-black! dark:hover:bg-transparent! dark:hover:text-current!">View work</a>
                        <a href="#contact" className="pill">Get in touch</a>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-sm md:mx-0 md:ml-auto">
                    <div className="tag mb-4 ml-auto flex w-fit items-center gap-2 py-1.5">
                        <PulseDot />
                        Open to work opportunities
                    </div>

                    <p className="mb-3 text-right text-sm font-medium opacity-60">Mobile Developer, Pangasinan, PH</p>

                    <div className="mb-5 text-right">
                        <p className="text-xl font-semibold tracking-tight md:text-2xl">Kumusta! Hi, I'm Jiane</p>
                        <p className="mt-1 min-h-[1.5em] text-sm opacity-70">
                            <span>{typed}</span>
                            <span className="cursor ml-0.5 inline-block animate-pulse" aria-hidden="true">|</span>
                        </p>
                    </div>

                    <figure tabIndex={0} className="hero-photo line group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border bg-black/5 dark:bg-white/5">
                        <span className="absolute inset-0 flex items-center justify-center text-sm opacity-40">Your photo here</span>
                        <img src="/assets/blackandwhite.png" alt="Portrait of Jiane Carlo Lorenzo" width={800} height={1000} fetchPriority="high" onError={hide} className="relative h-full w-full object-cover" />
                        {/* Hover / tap image */}
                        <img src="/assets/tulog.png" alt="" aria-hidden="true" width={1024} height={1024} loading="eager" onError={hide} className="absolute inset-0 h-full w-full object-cover object-[50%_20%] opacity-0 transition-opacity duration-500 group-focus:opacity-100 group-hover:opacity-100" />
                    </figure>

                    <div className="mt-4 flex flex-wrap justify-end gap-2">
                        {socials.map((s) => (
                            <a key={s.name} href={s.href} aria-label={s.label} className="icon-btn">
                                <Icon name={s.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
