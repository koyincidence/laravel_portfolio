import AdminLayout from '@/components/admin-layout';
import ProjectForm from '@/components/project-form';

/** GET /projects/create */
export default function Create() {
    return (
        <AdminLayout title="Add project">
            <ProjectForm />
        </AdminLayout>
    );
}
