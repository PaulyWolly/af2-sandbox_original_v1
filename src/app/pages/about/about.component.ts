import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isLoggedIn = false;

  constructor(
    public afAuth: AuthService,
    public nbService: NavbarService
    ) { }

  ngOnInit(): void {
    this.nbService.show();
  }

  handleLogout() {
    this.afAuth.logout();
    this.isLoggedIn = false;
  }

}
