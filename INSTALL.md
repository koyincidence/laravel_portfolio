# Install steps (run inside the laravel_portfolio folder)

1. Copy everything from this zip into the project, same folders (merge, no overwriting needed).
2. Copy your old portfolio `assets` folder to `public/assets` (koy1.png, blackandwhite.png, tulog.png, projects/*.png).
3. `resources/css/app.css`: add this line right after the `@import 'tailwindcss';` line

       @import './portfolio.css';

4. `routes/web.php`:
   - add at the top:
         use App\Http\Controllers\PortfolioController;
         use App\Http\Controllers\ProjectController;
   - DELETE the old welcome route, `Route::inertia('/', 'welcome', ...)->name('home');`
   - add:
         Route::get('/', [PortfolioController::class, 'index'])->name('home');
         Route::resource('projects', ProjectController::class)->except(['show']);
         // Bonus (login protection): wrap the resource line in  Route::middleware('auth')->group(function () { ... });

5. Terminal:

       php artisan migrate
       php artisan db:seed --class=ProjectSeeder
       php artisan storage:link
       composer run dev

6. Open http://localhost:8000 (portfolio) and http://localhost:8000/projects (manage).
