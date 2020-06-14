import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-other-links',
  templateUrl: './nav-other-links.component.html',
  styleUrls: ['./nav-other-links.component.scss']
})
export class NavOtherLinksComponent implements OnInit {
  @Output() navClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleNavClick(): void {
    this.navClick.emit();

  }

}
