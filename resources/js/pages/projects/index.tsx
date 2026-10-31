import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import AdminLayout from '@/components/admin-layout';
import ConfirmDialog from '@/components/confirm-dialog';
import type { Project } from '@/types/project';

/** GET /projects : table of all records with Edit / Delete. */
export default function Index({ projects, flash }: { projects: Project[]; flash?: string | null }) {
    const [toDelete, setToDelete] = useState<Project | null>(null);
    const [deleting, setDeleting] = useState(false);

    function confirmDelete() {
        if (!toDelete) return;
        router.delete(`/projects/${toDelete.id}`, {
            preserveScroll: true,
            onStart: () => setDeleting(true),
            onFinish: () => {
                setDeleting(false);
                setToDelete(null);
            },
        });
    }

    return (
        <AdminLayout title="Projects">
            {flash && (
                <div role="status" className="mb-6 rounded-2xl border border-green-500/40 px-4 py-3 text-sm text-green-600 dark:text-green-400">
                    {flash}
                </div>
            )}

            <div className="mb-6 flex items-center justify-between">
                <p className="text-sm opacity-60">{projects.length} project{projects.length === 1 ? '' : 's'}</p>
                <Link href="/projects/create" className="pill bg-black! text-white! hover:bg-transparent! hover:text-current! dark:bg-white! dark:text-black! dark:hover:bg-transparent! dark:hover:text-current!">
                    + Add project
                </Link>
            </div>

            <div className="line overflow-x-auto rounded-3xl border">
                <table className="w-full text-left text-sm">
                    <thead className="line border-b text-xs tracking-widest uppercase opacity-60">
                        <tr>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Tech stack</th>
                            <th className="px-4 py-3">Completed</th>
                            <th className="px-4 py-3">Order</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-4 py-10 text-center opacity-60">No projects yet. Click “Add project”.</td>
                            </tr>
                        )}
                        {projects.map((p) => (
                            <tr key={p.id} className="line border-b last:border-b-0">
                                <td className="px-4 py-3">
                                    {p.image_url ? (
                                        <img src={p.image_url} alt="" className="h-12 w-20 rounded-lg object-cover" />
                                    ) : (
                                        <div className="h-12 w-20 rounded-lg bg-black/5 dark:bg-white/10" />
                                    )}
                                </td>
                                <td className="px-4 py-3 font-semibold">{p.title}</td>
                                <td className="px-4 py-3 opacity-70">{p.tech_stack}</td>
                                <td className="px-4 py-3 whitespace-nowrap opacity-70">{p.date_completed}</td>
                                <td className="px-4 py-3">{p.display_order}</td>
                                <td className="px-4 py-3">
                                    <div className="flex justify-end gap-2">
                                        <Link href={`/projects/${p.id}/edit`} className="pill py-1! text-xs">Edit</Link>
                                        <button type="button" onClick={() => setToDelete(p)} className="pill border-red-500/60! py-1! text-xs text-red-500">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ConfirmDialog
                open={toDelete !== null}
                title="Delete this project?"
                message={`“${toDelete?.title ?? ''}” will be removed from your portfolio. This cannot be undone.`}
                processing={deleting}
                onConfirm={confirmDelete}
                onCancel={() => setToDelete(null)}
            />
        </AdminLayout>
    );
}
