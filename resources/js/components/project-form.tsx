import { Link, useForm } from '@inertiajs/react';
import { useEffect, useMemo, type FormEvent } from 'react';
import FormField, { inputClass } from '@/components/form-field';
import type { Project } from '@/types/project';

/**
 * One form for BOTH Create and Edit.
 * - no `project` prop  -> POST /projects
 * - `project` prop     -> POST /projects/{id} with _method=put (needed because files can't be sent with a real PUT)
 */
export default function ProjectForm({ project }: { project?: Project }) {
    const isEdit = Boolean(project);

    // useForm keeps what the user typed, so nothing is lost when the server returns validation errors.
    const form = useForm({
        _method: isEdit ? 'put' : 'post',
        title: project?.title ?? '',
        description: project?.description ?? '',
        tech_stack: project?.tech_stack ?? '',
        project_url: project?.project_url ?? '',
        repo_url: project?.repo_url ?? '',
        date_completed: project?.date_completed ?? '',
        display_order: String(project?.display_order ?? 0),
        client: project?.client ?? '',
        image: null as File | null,
    });
    const { data, setData, errors, processing } = form;

    const preview = useMemo(
        () => (data.image ? URL.createObjectURL(data.image) : (project?.image_url ?? null)),
        [data.image, project?.image_url],
    );
    useEffect(() => () => {
        if (preview?.startsWith('blob:')) URL.revokeObjectURL(preview);
    }, [preview]);

    function submit(e: FormEvent) {
        e.preventDefault();
        form.post(isEdit ? `/projects/${project!.id}` : '/projects', { forceFormData: true, preserveScroll: true });
    }

    return (
        <form onSubmit={submit} noValidate className="grid gap-6">
            <FormField label="Title" name="title" error={errors.title} required>
                <input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} className={inputClass(!!errors.title)} placeholder="e.g. Daily Spark" />
            </FormField>

            <FormField label="Description" name="description" error={errors.description} hint="20 to 1000 characters." required>
                <textarea id="description" rows={4} value={data.description} onChange={(e) => setData('description', e.target.value)} className={inputClass(!!errors.description)} />
            </FormField>

            <FormField label="Tech stack" name="tech_stack" error={errors.tech_stack} hint="Comma separated, e.g. Flutter, Firebase" required>
                <input id="tech_stack" value={data.tech_stack} onChange={(e) => setData('tech_stack', e.target.value)} className={inputClass(!!errors.tech_stack)} />
            </FormField>

            <FormField label="Client" name="client" error={errors.client} hint="Optional. Maximum of 80 characters.">
                <input id="client" value={data.client} onChange={(e) => setData('client', e.target.value)} className={inputClass(!!errors.client)} />
            </FormField>

            <div className="grid gap-6 md:grid-cols-2">
                <FormField label="Project URL" name="project_url" error={errors.project_url} hint="Optional live demo link.">
                    <input id="project_url" value={data.project_url} onChange={(e) => setData('project_url', e.target.value)} className={inputClass(!!errors.project_url)} placeholder="https://" />
                </FormField>
                <FormField label="Repository URL" name="repo_url" error={errors.repo_url} hint="Optional GitHub link.">
                    <input id="repo_url" value={data.repo_url} onChange={(e) => setData('repo_url', e.target.value)} className={inputClass(!!errors.repo_url)} placeholder="https://github.com/" />
                </FormField>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <FormField label="Date completed" name="date_completed" error={errors.date_completed} required>
                    <input id="date_completed" type="date" value={data.date_completed} onChange={(e) => setData('date_completed', e.target.value)} className={inputClass(!!errors.date_completed)} />
                </FormField>
                <FormField label="Display order" name="display_order" error={errors.display_order} hint="Smaller numbers appear first." required>
                    <input id="display_order" type="text" inputMode="numeric" value={data.display_order} onChange={(e) => setData('display_order', e.target.value)} className={inputClass(!!errors.display_order)} />
                </FormField>
            </div>

            <FormField label="Screenshot" name="image" error={errors.image} hint="JPG, PNG or WEBP, up to 2 MB.">
                <input id="image" type="file" accept="image/*" onChange={(e) => setData('image', e.target.files?.[0] ?? null)} className={`${inputClass(!!errors.image)} file:mr-4 file:rounded-full file:border-0 file:bg-black file:px-4 file:py-1.5 file:text-white dark:file:bg-white dark:file:text-black`} />
                {preview && <img src={preview} alt="Preview" className="line mt-3 aspect-[16/10] w-full max-w-xs rounded-2xl border object-cover" />}
            </FormField>

            <div className="flex gap-3">
                <button type="submit" disabled={processing} className="pill bg-black! text-white! hover:bg-transparent! hover:text-current! disabled:opacity-50 dark:bg-white! dark:text-black! dark:hover:bg-transparent! dark:hover:text-current!">
                    {processing ? 'Saving…' : isEdit ? 'Update project' : 'Save project'}
                </button>
                <Link href="/projects" className="pill">Cancel</Link>
            </div>
        </form>
    );
}
