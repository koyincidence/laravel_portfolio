<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    /** GET / : the public portfolio. Projects now come from the database. */
    public function index(): Response
    {
        return Inertia::render('portfolio', [
            'projects' => Project::orderBy('display_order')->orderByDesc('date_completed')->get(),
        ]);
    }
}
