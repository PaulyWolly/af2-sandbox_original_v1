import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  isLoggedIn: boolean | undefined;

  constructor(
    public afAuth: AuthService,
    public nbService: NavbarService,
    public route: Router
  ) { }

  ngOnInit(): void {
    this.nbService.show();
    this.isLoggedIn = true;
  }

  handleLogout() {
    this.afAuth.logout();
    this.isLoggedIn = false;
    this.route.navigate(['/Login']);
  }

}
