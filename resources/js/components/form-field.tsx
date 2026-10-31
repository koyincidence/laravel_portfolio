import type { ReactNode } from 'react';

/** Shared input look; pass hasError to turn the border red. */
export const inputClass = (hasError?: boolean) =>
    `w-full rounded-2xl border bg-transparent px-4 py-3 outline-none transition focus:border-current ${
        hasError ? 'border-red-500' : 'line'
    }`;

/**
 * Reusable wrapper: label + input (children) + the validation error shown right under it.
 * Used by every field in ProjectForm so the error markup is written only once.
 */
export default function FormField({
    label,
    name,
    error,
    hint,
    required,
    children,
}: {
    label: string;
    name: string;
    error?: string;
    hint?: string;
    required?: boolean;
    children: ReactNode;
}) {
    return (
        <div>
            <label htmlFor={name} className="mb-2 block text-sm font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
            {hint && !error && <p className="mt-1 text-xs opacity-60">{hint}</p>}
            {error && (
                <p id={`${name}-error`} role="alert" className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}
