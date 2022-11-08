import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsMoviesComponent } from "./components/details-movies/details-movies.component";
import { ActorDetailsComponent } from "./components/actor-details/actor-details.component";
import { ApprovedComponent } from "./components/approved/approved.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { PopularMoviesComponent } from "./components/popular-movies/popular-movies.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent ,pathMatch: "full"},
  { path: "landing", component: LandingComponent ,pathMatch: "full"},
  { path: "", component: IndexComponent ,pathMatch: "full"},
  { path: "popular", component: PopularMoviesComponent ,pathMatch: "full"},
  { path: "details/:id", component: DetailsMoviesComponent,pathMatch: "full" },
  { path: "", component: IndexComponent, pathMatch: 'full' },
  { path: "approved", component: ApprovedComponent },
  { path: "actor-details/:id", component: ActorDetailsComponent},
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
