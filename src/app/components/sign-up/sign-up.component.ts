import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  title="AngularFirebase-Sandbox"
  isSignedIn = false;

  constructor(
    public fbAuth: AuthService
  ) { }

  ngOnInit(): void {
  }

  async onSignUp(email: string, password: string) {
    await this.fbAuth.emailSignUp(email, password);
    if (this.fbAuth.isLoggedIn){
      this.isSignedIn = true;

      setTimeout('console.clear()',2);
    }
  }

}
