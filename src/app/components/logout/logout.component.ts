import { User } from './../../shared/services/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isLoggedIn: boolean | undefined;
  showNewsLink: boolean | undefined;
  user: any;
  loggedInEmail: any;
  emailLogged: any;
  userEmail: any;



  constructor(
    public fbAuth: AuthService,
    public nbService: NavbarService,
    public route: Router,
    public afAuth: AngularFireAuth
    ) {}

  ngOnInit(): void {
    if (this.isLoggedIn = true) {

      // show navbar menu items
      this.nbService.show();
      this.isAuthorizedUser();

    } else {
      this.nbService.hide();
    }

    this.emailLogged = localStorage.getItem('usersEmail');
    console.log('LoggedInEmail @ logout: '  + this.emailLogged);

    const emailLogged: any = localStorage.getItem("usersEmail");
    const validEmail = "pwelby@gmail.com";

    if (emailLogged === validEmail) {
      console.log('values are an exact match');
      this.showNewsLink = true;
    } else {
      console.log('emailLogged != validEmail');
      this.showNewsLink = false;
    }


  }

  isAuthorizedUser() {



    // if (emailLogged.localeCompare(validEmail) === 0) {
    //   console.log('values are an exact match');
    // }

    /* Expected Returns:

    0:  exact match

    -1:  string_a < string_b

    1:  string_a > string_b

    */

    // if (emailLogged == validEmail) {
    //   console.log('isAuthorized: ' + emailLogged);
    //   return this.showNewsLink = true;
    // } else {
    //   console.log('isNotAuthorized: ' + emailLogged);
    //   return this.showNewsLink = false;
    // }
  }

  handleLogout() {
    this.isLoggedIn = false;
    this.fbAuth.logout();
    //this.route.navigate(['/Login']);
  }

  openProfile() {
    this.route.navigate(['/Profile']);
  }
}
