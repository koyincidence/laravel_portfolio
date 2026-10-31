<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    /** GET /projects : list of all records (the admin table). */
    public function index(): Response
    {
        return Inertia::render('projects/index', [
            'projects' => Project::orderBy('display_order')->orderByDesc('date_completed')->get(),
            // Set by ->with('success', ...) in store/update/destroy after the redirect.
            'flash' => session('success'),
        ]);
    }

    /** GET /projects/create : empty form. */
    public function create(): Response
    {
        return Inertia::render('projects/create');
    }

    /** POST /projects : validate, save, redirect. */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate($this->rules(), $this->messages());

        unset($data['image']);
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        Project::create($data);

        return redirect()->route('projects.index')->with('success', 'Project added successfully.');
    }

    /** GET /projects/{project}/edit : form filled with the current values. */
    public function edit(Project $project): Response
    {
        return Inertia::render('projects/edit', ['project' => $project]);
    }

    /** PUT /projects/{project} : validate (unique ignores this record), save, redirect. */
    public function update(Request $request, Project $project): RedirectResponse
    {
        $data = $request->validate($this->rules($project), $this->messages());

        // An empty file input must never wipe the existing image.
        unset($data['image']);
        if ($request->hasFile('image')) {
            $this->deleteImage($project->image);
            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        $project->update($data);

        return redirect()->route('projects.index')->with('success', 'Project updated successfully.');
    }

    /** DELETE /projects/{project} */
    public function destroy(Project $project): RedirectResponse
    {
        $this->deleteImage($project->image);
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully.');
    }

    /**
     * Validation rules shared by store() and update().
     * Passing the current $project makes the unique rule ignore its own row,
     * so saving a project without changing its title still works.
     */
    private function rules(?Project $project = null): array
    {
        return [
            'title' => ['required', 'string', 'min:3', 'max:100', Rule::unique('projects', 'title')->ignore($project?->id)],
            'description' => ['required', 'string', 'min:20', 'max:1000'],
            'tech_stack' => ['required', 'string', 'max:150'],
            'project_url' => ['nullable', 'url', 'max:255'],
            'repo_url' => ['nullable', 'url', 'max:255'],
            'image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'], // KB, so 2 MB
            'date_completed' => ['required', 'date', 'before_or_equal:today'],
            'display_order' => ['required', 'integer', 'between:0,9999'],
            'client' => ['nullable', 'string', 'max:80'],
        ];
    }

    private function messages(): array
    {
        return [
            'title.required' => 'Please give your project a title.',
            'title.unique' => 'You already have a project with this title.',
            'description.min' => 'Describe the project in at least 20 characters.',
            'tech_stack.required' => 'List at least one technology (e.g. Laravel, React).',
            'project_url.url' => 'The project link must be a valid URL, e.g. https://example.com',
            'repo_url.url' => 'The repository link must be a valid URL, e.g. https://github.com/you/repo',
            'image.image' => 'The file must be an image.',
            'image.mimes' => 'Only JPG, PNG or WEBP images are allowed.',
            'image.max' => 'The image is too large. Maximum size is 2 MB.',
            'date_completed.before_or_equal' => 'The completion date cannot be in the future.',
            'display_order.between' => 'Display order must be a number from 0 to 9999.',
        ];
    }

    /** Only delete files we uploaded; never the original assets/ images in public/. */
    private function deleteImage(?string $path): void
    {
        if ($path && ! Str::startsWith($path, 'assets/')) {
            Storage::disk('public')->delete($path);
        }
    }
}
