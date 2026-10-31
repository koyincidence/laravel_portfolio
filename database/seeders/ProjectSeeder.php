<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /** Puts your 4 original projects into the database (images come from public/assets/projects). */
    public function run(): void
    {
        $projects = [
            ['title' => 'Hiram', 'tech_stack' => 'Flutter, mobile app', 'image' => 'assets/projects/hiram.png', 'date_completed' => '2026-03-01', 'display_order' => 1,
                'description' => 'A Flutter mobile app for borrowing and lending items.'],
            ['title' => 'Mantaho POS and Inventory System', 'tech_stack' => 'TypeScript, Laravel', 'image' => 'assets/projects/badge2.png', 'date_completed' => '2026-02-01', 'display_order' => 2,
                'description' => 'A point-of-sale and inventory system built with Laravel.'],
            ['title' => 'Daily Spark', 'tech_stack' => 'Flutter, Firebase', 'image' => 'assets/projects/daily-spark.png', 'date_completed' => '2025-09-01', 'display_order' => 3,
                'description' => 'A Flutter and Firebase app that sends a daily dose of motivation.'],
            ['title' => 'Weather App', 'tech_stack' => 'JavaScript, weather API', 'image' => 'assets/projects/weather-app.png', 'date_completed' => '2025-05-01', 'display_order' => 4,
                'description' => 'A JavaScript weather app that shows live data from a weather API.'],
        ];

        foreach ($projects as $project) {
            Project::updateOrCreate(['title' => $project['title']], $project);
        }
    }
}
