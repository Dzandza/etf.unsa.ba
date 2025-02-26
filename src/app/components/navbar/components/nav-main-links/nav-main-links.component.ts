import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-main-links',
  templateUrl: './nav-main-links.component.html',
  styleUrls: ['./nav-main-links.component.scss']
})
export class NavMainLinksComponent implements OnInit {
  shoudHaveHomePageLink: boolean = window.innerWidth < 768;;
  @Output() navClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  resizeListener() {
    if (window.innerWidth < 768) this.shoudHaveHomePageLink = true;
    else this.shoudHaveHomePageLink = false;
  }

  handleNavClick(): void {
    this.navClick.emit();
  }

}
