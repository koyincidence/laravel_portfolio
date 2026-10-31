import AdminLayout from '@/components/admin-layout';
import ProjectForm from '@/components/project-form';
import type { Project } from '@/types/project';

/** GET /projects/{project}/edit */
export default function Edit({ project }: { project: Project }) {
    return (
        <AdminLayout title="Edit project">
            <ProjectForm project={project} />
        </AdminLayout>
    );
}
