import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean | undefined;

  constructor(
    public afAuth: AuthService,
    public nbService: NavbarService
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = true;
    this.nbService.show();

  }

  handleLogout() {
    this.afAuth.logout();
    this.isLoggedIn = false;
  }

}
