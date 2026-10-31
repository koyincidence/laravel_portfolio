<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;

// Public portfolio (replaces the old welcome page)
Route::get('/', [PortfolioController::class, 'index'])->name('home');

// Projects CRUD: index, create, store, edit, update, destroy
Route::resource('projects', ProjectController::class)->except(['show']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';