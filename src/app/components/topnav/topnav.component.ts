import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  isLoggedIn:boolean | undefined;

  user: Observable<any> | undefined;
  email: any;
  password: any;
  userLoggedIn = false;


  menuItems = [
    {linkId: 1, linkName: 'Home', linkUrl: 'Home'},
    {linkId: 2, linkName: 'About', linkUrl: 'About'},
    {linkId: 3, linkName: 'Youtube', linkUrl: 'Youtube'},
    {linkId: 4, linkName: 'Features', linkUrl: 'Features'},
    {linkId: 5, linkName: 'Blog', linkUrl: 'Blog'},
    {linkId: 6, linkName: 'Contact', linkUrl: 'Contact'},
    {linkId: 7, linkName: '', linkUrl: 'Logout'}
  ];

  constructor(
    public topNBService: NavbarService,
    public fbAuth: AuthService,
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public route: Router
    ) {
      this.userLoggedIn = false;

      this.afAuth.onAuthStateChanged((user) => {
        // set up a subscription to always know the login status of the user
          if (user) {
              this.userLoggedIn = true;
          } else {
              this.userLoggedIn = false;
          }
      });
        console.log('Auth Service: loginUser: success' + this.email);
     }

    ngOnInit(): void {
      this.afAuth.authState.subscribe(user => {
          console.log('Dashboard: user', user);

          if (user) {
              //let emailLower = user.email.toLowerCase();
              //this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
          }
      });

  }

}
