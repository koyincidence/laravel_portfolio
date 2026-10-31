import { Head, Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import { useTheme } from '@/hooks/use-portfolio';

/** Shared page frame for the Projects management pages (Index, Create, Edit). */
export default function AdminLayout({ title, children }: { title: string; children: ReactNode }) {
    const toggleTheme = useTheme();

    return (
        <>
            <Head title={title} />
            <div
                className="min-h-svh bg-white text-black antialiased dark:bg-black dark:text-white"
                style={{ fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" }}
            >
                <header className="line border-b">
                    <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
                        <Link href="/projects" className="text-lg font-bold tracking-tight">Manage Projects</Link>
                        <div className="flex gap-2">
                            <Link href="/" className="pill py-1.5! text-sm">View portfolio</Link>
                            <button type="button" onClick={toggleTheme} className="pill py-1.5! text-sm">Light / Dark</button>
                        </div>
                    </div>
                </header>

                <main className="mx-auto max-w-5xl px-6 py-10">
                    <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
                    {children}
                </main>
            </div>
        </>
    );
}
