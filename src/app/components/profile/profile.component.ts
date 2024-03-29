import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: Observable<any> | undefined;
  type: string | undefined;

  email = 'pwelby@gmail.com';
  website = 'https://www.i-am-paul.com';
  phone = '619-629-3770';

  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public router: Router,
    public topNBService: NavbarService
    ) { }

  ngOnInit(): void {
    // this.afAuth.authState.subscribe(user => {
    //     console.log('Dashboard: user', user);

    //     if (user) {
    //         let emailLower = user.email.toLowerCase();
    //         this.user = this.firestore.collection('users').doc(emailLower).valueChanges();
    //     }
    // });
    this.topNBService.show();
  }

  logout(): void {
    this.afAuth.signOut();
    window.location.reload();
  }

}
