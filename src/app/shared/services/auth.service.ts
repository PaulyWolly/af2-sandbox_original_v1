import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean | undefined;
  userLoggedIn: boolean;      // other components can check on this variable for the login status of the user

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
      this.userLoggedIn = false;

        this.afAuth.onAuthStateChanged((user) => {
          // set up a subscription to always know the login status of the user
            if (user) {
                this.userLoggedIn = true;
                console.clear();
                console.log('LOGGED IN VIA fb SERVICE');
                console.log('loggedInEmail: ' + user.email)
                let usersEmail:any = user.email;
                localStorage.setItem('usersEmail', usersEmail)
                return;
            } else
            if (!user) {
                this.userLoggedIn = false;
                console.clear();
                console.log('NOT LOGGED IN VIA fb SERVICE');
                this.router.navigate(['/Login']);
                return;
            }
        });
    }

  // User login
  async emailSignIn(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password)
      .then(res => {

        this.isLoggedIn = true;
        this.showStatus(true);
        console.log('Nice... you are now logged in!');
        this.router.navigate(['/Home']);
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('userEmail', JSON.stringify(res.user?.email));

    }).catch(err => {
      console.log('Error: ' + err)
    })
  }

  // New user sign up
  async emailSignUp(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        console.log('Success. You have signed up!', res);
        this.showStatus(true);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/Home']);
    })
  }

  // Reset Forggot password
  async ForgotPassword(passwordResetEmail: any) {
    try {
        await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
          window.alert('Password reset email sent, check your inbox.');
          this.router.navigate(['/Login']);
      } catch (error) {
          window.alert(error);
      }
  }

  showStatus(status: boolean | undefined){
    if (status = true) {
      //console.log("LOGGED IN - showStatus");
    } else {
      //console.log("LOGGED OUT - showStatus");
    }
  }
  /* login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/profile');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  } */

  /* emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  } */

  /* googleLogin() {
    const provider = new firebase.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
     console.log('Sucess', value),
     this.router.navigateByUrl('/profile');
   })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  } */

  logout() {
    this.afAuth.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['/Login']);
  }

 /*  logout() {
    this.afAuth.signOut()
    .then(() => {
      this.router.navigate(['/Login']);
    });
  } */

  /* private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  } */

}
