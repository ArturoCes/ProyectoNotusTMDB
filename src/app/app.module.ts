import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";


// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

// components for views and layouts

import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ActorComponent } from './components/actor/actor.component';
import { LoginAPIComponent } from './components/login-api/login-api.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavMoviesComponent } from './components/fav-movies/fav-movies.component';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { PopularMoviesComponent } from "./components/popular-movies/popular-movies.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgCircleProgressModule } from "ng-circle-progress";
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { ApprovedComponent } from './components/approved/approved.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardTableComponent,
    HeaderStatsComponent,
    IndexNavbarComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ProfileComponent,
    ActorComponent,
    LoginAPIComponent,
    FavMoviesComponent,
    ActorDetailsComponent,
    PopularMoviesComponent,
    DetailsMoviesComponent,
    ApprovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C00",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    })

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
