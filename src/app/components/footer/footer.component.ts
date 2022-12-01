import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isLoggedInFooter: boolean = false;

  footerMenuItems = [
    {linkId: 1, linkName: 'Home', linkUrl: 'Home'},
    {linkId: 2, linkName: 'About', linkUrl: 'About'},
    {linkId: 3, linkName: 'Youtube', linkUrl: 'Youtube'},
    {linkId: 4, linkName: 'Features', linkUrl: 'Features'},
    {linkId: 5, linkName: 'Blog', linkUrl: 'Blog'},
    {linkId: 6, linkName: 'Contact', linkUrl: 'Contact'}
  ];

  constructor(
    public FooterNBService: NavbarService,
    public fbAuth: AuthService
  ) {

    // if (this.fbAuth.userLoggedIn) {
    //   console.log('User is logged in - footer')
    //   this.isLoggedInFooter = !this.isLoggedInFooter;
    // }
  }

  ngOnInit(): void {

    this.FooterNBService.hide();


  }

}
