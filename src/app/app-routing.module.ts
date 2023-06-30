import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "signin",
    component: SignInComponent,
    title: "Angular | Login",
  },
  {
    path: "signup",
    component: SignUpComponent,
    title: "Angular | Sign Up",
  },
  {  
    path: "",
    component: AuthenticatedLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "home",
        component: HomeComponent,
        title: "Angular | Home",
      },
      {
        path: "about",
        component: AboutComponent,
        title: "Angular | About",
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
