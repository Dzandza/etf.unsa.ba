import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-other-links',
  templateUrl: './nav-other-links.component.html',
  styleUrls: ['./nav-other-links.component.scss']
})
export class NavOtherLinksComponent implements OnInit {
  language: string;
  @Output() navClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    this.language = "EN"
  }

  ngOnInit(): void {
  }

  handleNavClick(): void {
    this.navClick.emit();
  }

  changeLanguage(): void {
    if(this.language === "EN") this.language = "BS";
    else this.language = "EN";
  }

}
