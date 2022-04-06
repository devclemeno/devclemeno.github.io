import { Component, ChangeDetectorRef, OnDestroy, ViewChild, HostListener } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher,
              private router: Router,
              private snackBar: MatSnackBar) {
    // Detect mobile device
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.sidenav.close();
  }

  goHome(): void {
    this.router.navigate(['home']).then();
  }

  goAboutMe(): void {
    this.router.navigate(['about-me']).then();
  }

  goContactMe(): void {
    this.router.navigate(['contact-me']).then();
  }

  goBlog(): void {
    this.snackBar.open('Coming Soon', 'OK', { duration: 1500 });
  }


}
