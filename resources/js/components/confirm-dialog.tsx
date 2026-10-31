/** Simple modal used to confirm a delete before anything is sent to the server. */
export default function ConfirmDialog({
    open,
    title,
    message,
    confirmLabel = 'Delete',
    processing,
    onConfirm,
    onCancel,
}: {
    open: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    processing?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <div className="line w-full max-w-md rounded-3xl border bg-white p-6 shadow-2xl dark:bg-black">
                <h2 id="confirm-title" className="text-xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-2 text-sm opacity-70">{message}</p>
                <div className="mt-6 flex justify-end gap-2">
                    <button type="button" onClick={onCancel} className="pill text-sm">Cancel</button>
                    <button type="button" onClick={onConfirm} disabled={processing} className="pill border-red-500! bg-red-600! text-sm text-white! hover:bg-red-700! disabled:opacity-50">
                        {processing ? 'Deleting…' : confirmLabel}
                    </button>
                </div>
            </div>
        </div>
    );
}
