import { NewsletterModalComponent } from './pages/newsletter-modal/newsletter-modal.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { FeaturesComponent } from './pages/features/features.component';
import { VideoComponent } from './pages/video/video.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MyresumeComponent } from './pages/myresume/myresume.component';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './../app/shared/guard/auth.guard';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { TableBasicMd } from './components/table-basic-md/table-basic-md';
import { TableOverviewExample } from './components/table-overview-example/table-overview-example';
import { TablePaginationExample } from './components/table-pagination-example/table-pagination-example';


const routes: Routes = [
  //{path: '', redirectTo: '/Login', pathMatch: 'full' },
  //{path: '', component: LoginComponent},
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '', //This will make sure that we are always redirected to the login page
    pathMatch: 'full'
  },
  {path: 'Login', component:LoginComponent},
  {path: 'Logout', component:LogoutComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Features', component: FeaturesComponent},
  {path: 'Youtube', component: VideoComponent},
  {path: 'Blog', component: BlogComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'Edit-Profile', component: EditProfileComponent},
  {path: 'Sign-in', component: SignInComponent},
  {path: 'Sign-up', component: SignUpComponent},
  // {path: 'newsletter', component: NewsletterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'verify-email-address', component: VerifyEmailComponent},
  {path: 'Myresume', component: MyresumeComponent},
  {path: 'tableMd', component: TableBasicMd},
  {path: 'newsletter', component:TablePaginationExample },
  {path: 'newsletter-modal', component: NewsletterModalComponent},
  {path: 'tablePaginate', component:TablePaginationExample },

  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
