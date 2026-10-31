<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->unique();      // project name, must not repeat
            $table->text('description');                  // short explanation of the project
            $table->string('tech_stack', 150);            // e.g. "Flutter, Firebase"
            $table->string('project_url')->nullable();    // live demo link
            $table->string('repo_url')->nullable();       // GitHub / GitLab link
            $table->string('image')->nullable();          // screenshot path
            $table->date('date_completed');               // used for the year badge
            $table->unsignedSmallInteger('display_order')->default(0); // sort order on the portfolio
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
