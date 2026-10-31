import type { Project } from '@/types/project';
import ProjectCard from './project-card';
import SectionTitle from './section-title';

export default function ProjectsSection({ projects }: { projects: Project[] }) {
    return (
        <section id="projects" className="reveal px-6 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
                <SectionTitle>Projects</SectionTitle>

                {projects.length === 0 ? (
                    <p className="opacity-60">No projects yet.</p>
                ) : (
                    <ul className="grid gap-6 md:grid-cols-2">
                        {projects.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
