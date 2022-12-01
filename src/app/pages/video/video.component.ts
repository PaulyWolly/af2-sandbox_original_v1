import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavbarService } from 'src/app/shared/services/navbar.service';

const spot = document.getElementsByTagName("spot");

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videoId = "KGHY9jJQSiE";
  description = "Marco Cirillo plays a Lava guitar";
  contentPlacement = "This simple delay hack can add so much rhythm to a simple chord progression. This is the one and only \"U2 - The Edge's\" sound. Just set the delay with a dotted quaver. Then, play the chords in quavers (two notes per beat). The delay I used in the Precision Delay from UAD.";

  content1 = "This simple delay hack can add so much rhythm to a simple chord progression. This is the one and only \"U2 - The Edge's\" sound. Just set the delay with a dotted quaver. Then, play the chords in quavers (two notes per beat). The delay I used in the Precision Delay from UAD.";

  content2 = "See how easy it is to create beautiful sounds with just 3 chords. Bm, A, and G go very well in a musical progression. See how Marco creates the delicate flow of the notes in the chords from one to the next. Music is such a beautiful & creative artistic expression."

  videoId1 = "KGHY9jJQSiE";
  videoDescr1 = "Marco Cirillo plays a Lava guitar";
  videoId2 = "rNgqbV3Ht8I";
  videoDescr2 = "Marco Cirillo plays only 3 chords in this composition";

  isLoggedIn: boolean | undefined;

  constructor(
    public afAuth: AuthService,
    public nbService: NavbarService) { }

  ngOnInit(): void {
    this.nbService.show();
    this.isLoggedIn = true;
  }

  playVideo1() {
    this.videoId = this.videoId1;
    this.description = this.videoDescr1;
    this.contentPlacement = this.content1;
  }
  playVideo2() {
    this.videoId = this.videoId2;
    this.description = this.videoDescr2;
    this.contentPlacement = this.content2;
  }

  handleLogout() {
    this.afAuth.logout();
    this.isLoggedIn = false;
  }

}
