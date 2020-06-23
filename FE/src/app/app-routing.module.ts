import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./components/search/search.component";
import {CreditsComponent} from "./components/credits/credits.component";
import {NotFoundPageComponent} from "./components/not-found-page/not-found-page.component";

/**
 * Routing module
 * '' -> Redirect to search page
 * 'search' -> Search page
 * 'credits' -> Credits for web app creator
 * '**' -> For not existing redirect page
 */
const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'search', component: SearchComponent, pathMatch: 'full'},
  { path: 'credits', component: CreditsComponent, pathMatch: 'full'},
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
