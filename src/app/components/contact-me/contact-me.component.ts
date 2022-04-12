import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {

  constructor(private snackBar: MatSnackBar) { }

  onLinkedinClick(): void {
    window.open('https://www.linkedin.com/in/francesco-clemeno', '_blank');
  }

  onInstagramClick(): void {
    window.open('https://www.instagram.com/therealciccioclemeno', '_blank');
  }

  onFacebookClick(): void {
    window.open('https://www.facebook.com/ciccio.clemeno', '_blank');
  }

  onYoutubeClick(): void {
    this.snackBar.open('Coming Soon', 'OK', { duration: 1500 });
  }

  onTwitchClick(): void {
    this.snackBar.open('Coming Soon', 'OK', { duration: 1500 });
  }

}
