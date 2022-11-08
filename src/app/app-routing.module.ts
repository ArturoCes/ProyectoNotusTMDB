import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsMoviesComponent } from "./components/details-movies/details-movies.component";
import { ActorDetailsComponent } from "./components/actor-details/actor-details.component";
import { ApprovedComponent } from "./components/approved/approved.component";
import { PopularMoviesComponent } from "./components/popular-movies/popular-movies.component";

// no layouts views
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { RateMoviesComponent } from "./components/rate-movies/rate-movies.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

const routes: Routes = [

  // auth views

  // no layout views
  {path: "tables", component: TablesComponent, pathMatch: "full"},
  {path: "rated", component: RateMoviesComponent, pathMatch: "full"},
  { path: "profile", component: ProfileComponent ,pathMatch: "full"},
  { path: "landing", component: LandingComponent ,pathMatch: "full"},
  { path: "popular", component: PopularMoviesComponent ,pathMatch: "full"},
  { path: "details/:id", component: DetailsMoviesComponent,pathMatch: "full" },
  { path: "", component: ProfileComponent, pathMatch: 'full' },
  { path: "approved", component: ApprovedComponent },
  { path: "actor-details/:id", component: ActorDetailsComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
