import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-main-links',
  templateUrl: './nav-main-links.component.html',
  styleUrls: ['./nav-main-links.component.scss']
})
export class NavMainLinksComponent implements OnInit {
  @Output() navClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  handleNavClick(event): void {
    this.navClick.emit(false);
  }

}
