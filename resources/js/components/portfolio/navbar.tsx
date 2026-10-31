import { useEffect, useState } from 'react';

const links = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar({ onToggleTheme }: { onToggleTheme: () => void }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black">
                Skip to content
            </a>

            {/* Desktop: floating, top-center */}
            <nav aria-label="Main" className="fixed top-6 left-1/2 z-50 hidden w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 lg:block">
                <ul className="line flex items-center gap-1 rounded-full border bg-white/70 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl dark:bg-black/70 dark:shadow-white/5">
                    <li>
                        <a href="#home" className="block rounded-full px-4 py-2 text-lg font-bold tracking-tight">Home</a>
                    </li>
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="nl">{l.label}</a>
                        </li>
                    ))}
                    <li>
                        <button type="button" onClick={onToggleTheme} className="nl ml-1 border border-current/0 text-xs" style={{ opacity: 1 }} aria-label="Toggle light or dark theme">
                            Light / Dark
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Mobile: top-left, expands */}
            <nav aria-label="Main" className="line fixed top-4 left-4 z-50 max-h-[calc(100svh-2rem)] w-56 overflow-x-hidden overflow-y-auto rounded-3xl border bg-white/70 shadow-2xl shadow-black/20 backdrop-blur-xl lg:hidden dark:bg-black/70">
                <div className="flex items-center justify-between px-5 py-3">
                    <a href="#home" aria-label="Home" className="flex items-center">
                        <img src="/assets/koy1.png" alt="Logo" className="h-10 w-10 rounded-lg object-contain" />
                    </a>
                    <button
                        id="burger"
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        aria-controls="menu"
                        onClick={() => setOpen((v) => !v)}
                        className="relative h-6 w-7 before:absolute before:-inset-3 before:content-['']"
                    >
                        <span id="b1"></span>
                        <span id="b2"></span>
                    </button>
                </div>
                <div id="menu" className={open ? 'open' : ''}>
                    <ul>
                        {links.map((l) => (
                            <li key={l.href} className="line border-t">
                                <a href={l.href} className="mlink" onClick={() => setOpen(false)}>{l.label}</a>
                            </li>
                        ))}
                        <li className="line border-t px-5 py-3">
                            <button type="button" onClick={onToggleTheme} className="pill py-1.5! text-sm" aria-label="Toggle light or dark theme">
                                Light / Dark
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Logo (desktop: top-left) */}
            <a href="#home" aria-label="Home" className="fixed top-6 left-6 z-50 hidden lg:block">
                <img src="/assets/koy1.png" alt="Logo" className="h-20 w-20 rounded-xl object-contain" />
            </a>
        </>
    );
}
