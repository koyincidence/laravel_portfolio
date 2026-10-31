<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Project extends Model
{
    // Only these columns can be mass-assigned (Project::create($data) / ->update($data)).
    protected $fillable = [
        'title',
        'description',
        'tech_stack',
        'project_url',
        'repo_url',
        'image',
        'date_completed',
        'display_order',
        'client'
    ];

    // Sent to React together with the normal columns.
    protected $appends = ['image_url'];

    protected function casts(): array
    {
        return [
            'date_completed' => 'date:Y-m-d',
            'display_order' => 'integer',
        ];
    }

    /**
     * Full URL of the screenshot.
     * - "assets/..." files live in public/ (the original portfolio images)
     * - everything else was uploaded and lives in storage/app/public
     */
    protected function imageUrl(): Attribute
    {
        return Attribute::get(function () {
            if (! $this->image) {
                return null;
            }

            return Str::startsWith($this->image, 'assets/')
                ? asset($this->image)
                : asset('storage/'.$this->image);
        });
    }
}
