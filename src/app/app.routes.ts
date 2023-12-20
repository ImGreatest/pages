import {RouterModule, Routes} from '@angular/router';
import {SchemasComponent} from "./schemas/schemas.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {ProfileUserComponent} from "./profile-user/profile-user.component";
import {ConstructorComponent} from "./constructor/constructor.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {RecoverComponent} from "./recover/recover.component";

export const routes: Routes = [
  { path: '', component: HomeComponent }, // main page
  { path: 'projects', component: ProjectsComponent }, // projects page
  { path: 'schemas', component: SchemasComponent }, // page of schemas
  { path: 'reg', component: RegistrationComponent }, // registration
  { path: 'login', component: LoginComponent }, //login
  { path: 'recover', component: RecoverComponent }, // recover profile
  { path: 'profile', component: ProfileUserComponent }, // user profile
  { path: 'constructor', component: ConstructorComponent }, // layout grapes.js
  { path: 'projects', component: ProjectsComponent }, // projects profile
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
