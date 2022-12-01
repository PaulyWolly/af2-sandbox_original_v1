/* import { Injectable, NgZone } from '@angular/core';
import { User } from "./user";
import { Auth } from 'firebase/compat/auth/dist/auth/';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore/document/document';
import { Router } from "@angular/router";
import { sendEmailVerification, user } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userState: any; // Save logged in user data
  emailVerified = false;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning

  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
  /*   this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        //JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', '');
        //JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Sign in with email/password
  async SignIn(email: any, password: any) {
    try {
          const result = await this.afAuth.signInWithEmailAndPassword(email, password);
          this.ngZone.run(() => {
              this.router.navigate(['dashboard']);
          });
          this.SetUserData(user);
      } catch (error) {
          window.alert(error);
      }
  }

  // Sign up with email/password
  async SignUp(email: any, password: any) {
    try {
          const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
          /* Call the SendVerificaitonMail() function when new user sign
          up and returns promise */
/*           this.SendVerificationMail();
          this.SetUserData(user);
      } catch (error) {
          window.alert(error);
      }
  } */

  // Email verification when new user register
/*   async SendVerificationMail() {
    return this.afAuth.currentUser
    .then(u => sendEmailVerification(user))
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }
 */
  // Reset Forggot password
 /*  async ForgotPassword(passwordResetEmail: any) {
    try {
          await this.afAuth.sendPasswordResetEmail(passwordResetEmail);/*  */
/*           window.alert('Password reset email sent, check your inbox.');
      } catch (error) {
          window.alert(error);
      }
  } */ */

  // Returns true when user is looged in and email is verified
  /* get isLoggedIn(): boolean {

    const user = localStorage.getItem('user');
    return (user !== null && this.emailVerified !== false) ? true : false;
    return (user !== null) ? true : false;
  } */ */

/*   this.afAuth.authState.subscribe(user => {
    if (user) {
      this.userState = user;
      localStorage.setItem('user', JSON.stringify(this.userState));
      //JSON.parse(localStorage.getItem('user'));
    } else {
      localStorage.setItem('user', '');
      //JSON.parse(localStorage.getItem('user'));
    }
  }) */

  // Sign in with Google
//   GoogleAuth() {
//     return this.AuthLogin(new GoogleAuthProvider());
//   }

  // Auth logic to run auth providers
 /*  async AuthLogin(provider: any) {
    try {
          const result = await this.afAuth.signInWithPopup(provider);
          this.ngZone.run(() => {
              this.router.navigate(['dashboard']);
          });
          this.SetUserData(user);
      } catch (error) {
          window.alert(error);
      }
  } */

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
/*   SetUserData(user: { uid: any; email: any; displayName: any; photoURL: any; emailVerified: any; }) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  } */

  // Sign out
  /* async SignOut() {
    await this.afAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
  } */

  /* actionCodeSettings(user: User, actionCodeSettings: any) {
    throw new Error('Function not implemented.');
  }

}
 */ */