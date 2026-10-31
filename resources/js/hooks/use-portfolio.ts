import { useCallback, useEffect, useState } from 'react';

/** Applies the saved theme (or system preference) and returns a toggle function. */
export function useTheme() {
    useEffect(() => {
        let t: string | null = null;
        try {
            t = localStorage.getItem('theme');
        } catch {
            /* storage blocked */
        }
        if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', t === 'dark');
    }, []);

    return useCallback(() => {
        const dark = document.documentElement.classList.toggle('dark');
        try {
            localStorage.setItem('theme', dark ? 'dark' : 'light');
        } catch {
            /* storage blocked */
        }
    }, []);
}

/** Fades sections in as they scroll into view. */
export function useReveal() {
    useEffect(() => {
        const root = document.documentElement;
        root.classList.add('js');
        const els = document.querySelectorAll('.reveal');

        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('in'));
            return () => root.classList.remove('js');
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('in');
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.1 },
        );
        els.forEach((el) => io.observe(el));

        return () => {
            io.disconnect();
            root.classList.remove('js');
        };
    }, []);
}

/** Highlights the nav link of the section currently on screen. */
export function useScrollSpy() {
    useEffect(() => {
        const links = document.querySelectorAll<HTMLAnchorElement>('a.nl[href^="#"]');
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (!e.isIntersecting) return;
                    links.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + e.target.id)));
                });
            },
            { rootMargin: '-40% 0px -55% 0px' },
        );
        document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
        return () => spy.disconnect();
    }, []);
}

/** Typing effect for the hero. */
export function useTyping(phrases: string[]) {
    const [text, setText] = useState('');

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setText(phrases[0]);
            return;
        }
        let pi = 0;
        let ci = 0;
        let deleting = false;
        let timer = 0;

        const tick = () => {
            const full = phrases[pi];
            ci += deleting ? -1 : 1;
            setText(full.slice(0, ci));
            let delay = deleting ? 35 : 70;
            if (!deleting && ci === full.length) {
                deleting = true;
                delay = 1600;
            } else if (deleting && ci === 0) {
                deleting = false;
                pi = (pi + 1) % phrases.length;
                delay = 400;
            }
            timer = window.setTimeout(tick, delay);
        };
        tick();

        return () => window.clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return text;
}
