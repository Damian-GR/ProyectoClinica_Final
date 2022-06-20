import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './service/services.component';


const routes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: 'main', 
  component: MainComponent,
   ...canActivate(()=> redirectUnauthorizedTo(['/register']))},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'help', component: HelpComponent},
  { path: "**", redirectTo: '/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
