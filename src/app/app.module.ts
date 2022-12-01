
import { TableBasicMd } from './components/table-basic-md/table-basic-md';
import { LogoutComponent } from './components/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatCheckboxModule }  from '@angular/material/checkbox';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { VideoComponent } from './pages/video/video.component';
import { FeaturesComponent } from './pages/features/features.component';
import { BlogComponent } from './pages/blog/blog.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
//import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthService } from './shared/services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarService } from './shared/services/navbar.service';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MaterialModule } from './material.module';
import { TableOverviewExample } from './components/table-overview-example/table-overview-example';
import { TablePaginationExample } from './components/table-pagination-example/table-pagination-example';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { UserProfileBtnComponent } from './components/user-profile-btn/user-profile-btn.component';
import { NewsletterModalComponent } from './pages/newsletter-modal/newsletter-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ProfileComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
    VideoComponent,
    FeaturesComponent,
    BlogComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    TopnavComponent,
    FooterComponent,
    EditProfileComponent,
    NewsletterComponent,
    TableBasicMd,
    TableOverviewExample,
    TablePaginationExample,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    UserProfileBtnComponent,
    NewsletterModalComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MatCheckboxModule,
    RouterModule,
    YouTubePlayerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    MaterialModule,
    MatInputModule,
    MatFormFieldModule,
    AuthModule.forRoot({
      domain: 'pwelby.auth0.com',
      clientId: '9JDK1S8f8Xinr0aMPCZZ0dbNyrxZLpHn'
    }),
  ],
  providers: [
    AuthService,
    NavbarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
