import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavbarService } from 'src/app/shared/services/navbar.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
