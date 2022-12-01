import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isSignedIn = false;
  constructor(
    public fbAuth: AuthService
  ) { }

  ngOnInit(): void {
  }

  async onSignIn(email: string, password: string) {
    await this.fbAuth.emailSignUp(email, password);
    if (this.fbAuth.isLoggedIn){
      this.isSignedIn = true;
      console.log('Signed Up & isSignedIn = true!');
    }
  }

}
