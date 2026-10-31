import type { Project } from '@/types/project';

/** One project on the public portfolio. Data comes from the database. */
export default function ProjectCard({ project }: { project: Project }) {
    const href = project.project_url ?? project.repo_url ?? '#';
    const external = href !== '#';

    return (
        <li>
            <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="line group block h-full overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-1 hover:bg-black/5 dark:hover:bg-white/5"
            >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5 dark:bg-white/5">
                    <span className="absolute inset-0 flex items-center justify-center text-sm opacity-40">Project image</span>
                    {project.image_url && (
                        <img
                            src={project.image_url}
                            alt={`Screenshot of ${project.title}`}
                            width={1280}
                            height={800}
                            loading="lazy"
                            onError={(e) => (e.currentTarget.style.display = 'none')}
                            className="relative h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    )}
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
                        <p className="mt-1 text-sm opacity-60">{project.tech_stack}</p>
                    </div>
                    <span className="text-sm opacity-60">{project.date_completed.slice(0, 4)}</span>
                </div>
            </a>
        </li>
    );
}
