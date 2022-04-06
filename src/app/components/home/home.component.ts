import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  intervalJob: any;
  jobs = ['web developer', 'ux designer', 'software engineer', 'samurai'];
  currentJobIndex = 0;

  constructor(private router: Router) {
    this.intervalJob = setInterval(() => {
      this.currentJobIndex = this.currentJobIndex + 1;
      if (this.currentJobIndex === this.jobs.length) {
        this.currentJobIndex = 0;
      }
    }, 3000);
  }

  ngOnDestroy(): void {
      clearInterval(this.intervalJob);
  }

  goAboutMe(): void {
    this.router.navigate(['about-me']).then();
  }

}
