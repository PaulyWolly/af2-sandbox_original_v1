import { Component, OnInit } from '@angular/core';
import { NavbarService } from './shared/services/navbar.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngularFirebase-Sandbox';
  isLoggedIn: boolean | undefined;
  input: any;

  constructor(
    public nbService: NavbarService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.showStatus(this.isLoggedIn);
  }

  // listenForKeypress() {
  //   const input = document.getElementById("myInput");
  //   input.addEventListener("keyup", function(event) {
  //       if (event.keyCode === 13) {
  //           event.preventDefault();
  //           document.getElementById("myBtn").click();
  //       }
  //   });
  // }



}
