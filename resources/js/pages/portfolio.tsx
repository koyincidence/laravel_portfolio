import { Head } from '@inertiajs/react';
import About from '@/components/portfolio/about';
import Achievements from '@/components/portfolio/achievements';
import Contact from '@/components/portfolio/contact';
import Education from '@/components/portfolio/education';
import Hero from '@/components/portfolio/hero';
import { IconSprite } from '@/components/portfolio/icons';
import Navbar from '@/components/portfolio/navbar';
import ProjectsSection from '@/components/portfolio/projects-section';
import Skills from '@/components/portfolio/skills';
import { useReveal, useScrollSpy, useTheme } from '@/hooks/use-portfolio';
import type { Project } from '@/types/project';

/** Public page: GET /  (PortfolioController@index passes the projects from the database). */
export default function Portfolio({ projects }: { projects: Project[] }) {
    const toggleTheme = useTheme();
    useReveal();
    useScrollSpy();

    return (
        <>
            <Head title="Jiane Carlo Lorenzo | Portfolio">
                <meta name="description" content="Portfolio of Jiane Carlo Lorenzo, an IT student building web and mobile apps with Laravel, Flutter and Vue." />
                <link rel="icon" type="image/png" href="/assets/koy1.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&display=swap" rel="stylesheet" />
            </Head>

            <div
                className="min-h-svh bg-white text-black antialiased transition-colors duration-300 dark:bg-black dark:text-white"
                style={{ fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" }}
            >
                <IconSprite />
                <Navbar onToggleTheme={toggleTheme} />

                <main id="main">
                    <Hero />
                    <About />
                    <Education />
                    <Skills />
                    <ProjectsSection projects={projects} />
                    <Achievements />
                    <Contact />
                </main>
            </div>
        </>
    );
}
