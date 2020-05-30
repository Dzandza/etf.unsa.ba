import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-other-links',
  templateUrl: './nav-other-links.component.html',
  styleUrls: ['./nav-other-links.component.scss']
})
export class NavOtherLinksComponent implements OnInit {
  @Output() navClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  handleNavClick(event): void {
    this.navClick.emit(false);
  }

}
