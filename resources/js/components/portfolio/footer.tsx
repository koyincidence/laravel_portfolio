import { S } from './icons';

export default function Footer() {
    return (
        <footer className="line mt-24 flex flex-col gap-4 border-t pt-6 text-sm opacity-70 md:flex-row md:items-center md:justify-between">
            <span>© 2026 Jiane Carlo Lorenzo. Built with Laravel, Inertia, React and Tailwind CSS.</span>
            <a href="#home" className="flex w-fit items-center gap-2 transition hover:opacity-60">
                Back to top
                <S className="h-4 w-4"><path d="M12 19V5M5 12l7-7 7 7" /></S>
            </a>
        </footer>
    );
}
