import { Route } from '@angular/router';
import { DashboardComponent } from './football/dashboard/dashboard.component';
import { LastTenGamesResultsComponent } from './football/last-ten-games-results/last-ten-games-results.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

export const appRoutes: Route[] = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'lastTen/:teamId', component: LastTenGamesResultsComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];
