import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import{canActivate,redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { CodeComponent } from './components/code/code.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const redirectToLogin=()=>redirectUnauthorizedTo(['/login']);
const redirectToHome=()=>redirectLoggedInTo(['/home']);
const routes: Routes = [
  {path:'',pathMatch:'full',component:LandingComponent},
  {path:'login',component:LoginComponent,...canActivate(redirectToHome)},
  {path:'signup',component:SignupComponent,},
  {path:'dashboard',component:DashboardComponent,},
  {path:'home',component:HomeComponent,},
  {path:'code',component:CodeComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
