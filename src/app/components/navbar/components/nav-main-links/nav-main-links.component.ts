import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-main-links',
  templateUrl: './nav-main-links.component.html',
  styleUrls: ['./nav-main-links.component.scss']
})
export class NavMainLinksComponent implements OnInit {
  @Output() navClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleNavClick(path): void {
    this.navClick.emit(path);
  }

}
