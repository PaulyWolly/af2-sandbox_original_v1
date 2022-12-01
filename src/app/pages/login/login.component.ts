import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title="AngularFirebase-Sandbox"
  isLoggedIn: boolean | undefined;
  user: any;
  email: any;
  password: any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;

  constructor(
    public fbAuth: AuthService,
    public route: Router,
    public nbService: NavbarService,
    public auth: Auth0Service
  ) {}

  ngOnInit(): void {

    if (this.fbAuth.userLoggedIn) {
      // if the user's logged in, navigate them to the dashboard
      //(NOTE: don't use afAuth.currentUser -- it's never null)
      this.route.navigate(['/Home']);
      let email = this.user.email;

      //console.log('USER LOGGED IN')
    } else [
      //console.log('USER NOT LOGGED IN')
    ]

    this.nbService.hide();
    this.isLoggedIn = false;
    this.fbAuth.showStatus(false);
  }

  async onSignUp(email: string, password: string) {
    this.route.navigate(['/Sign-up']);
    await this.fbAuth.emailSignUp(email, password);
    if (this.fbAuth.isLoggedIn){
      this.isLoggedIn = true;
      this.fbAuth.showStatus(true);

    }
  }

  async onSignIn(email: string, password: string) {
    await this.fbAuth.emailSignIn(email, password);

    if (!this.email) {
      alert('Email missing or malformed')
      return;
    }
    if (!this.password) {
      alert('Password missing or not correct')
      return;
    }
    if (!this.email || !this.password) {
      alert('Email and/or Password incorrect or missing!')
      return;
    }

    if (this.fbAuth.isLoggedIn){
      this.isLoggedIn = true;
      this.fbAuth.showStatus(true);
      //localStorage.setItem('userEmail1', 'email')
    }
  }

  handleLogout() {
    this.fbAuth.logout();
    this.isLoggedIn = false;
    this.route.navigate(['/Login']);
  }

  handleSubmit(e:any){
    e.preventDefault();
    this.onSignIn(this.email, this.password)
  }

  handleKeyUp(e:any){
     if(e.keyCode === 13){
        this.handleSubmit(e)

     }
  }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

}

