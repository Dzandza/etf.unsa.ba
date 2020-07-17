import { Component, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-other-links',
  templateUrl: './nav-other-links.component.html',
  styleUrls: ['./nav-other-links.component.scss']
})
export class NavOtherLinksComponent implements OnInit {
  language: string = "BS";
  shouldRenderLanguageIcon: boolean = window.innerWidth >= 768;
  @Output() navClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  resizeListener() {
    if (window.innerWidth < 768) this.shouldRenderLanguageIcon = false;
    else this.shouldRenderLanguageIcon = true;
  }

  handleNavClick(): void {
    this.navClick.emit();
  }

  changeLanguage(): void {
    if(this.language === "EN") this.language = "BS";
    else this.language = "EN";
  }

}
