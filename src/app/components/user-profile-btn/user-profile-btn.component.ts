import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile-btn',
  templateUrl: './user-profile-btn.component.html',
  styleUrls: ['./user-profile-btn.component.css']
})
export class UserProfileBtnComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  userProfile() {
    this.router.navigate(['/profile']);
  }

}
