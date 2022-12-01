import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isLoggedIn: boolean | undefined;

  constructor(
    public afAuth: AuthService,
    public nbService: NavbarService) { }

  ngOnInit(): void {
    this.nbService.show();
    this.isLoggedIn = true;
  }

  handleLogout() {
    this.afAuth.logout();
    this.isLoggedIn = false;
  }
}
