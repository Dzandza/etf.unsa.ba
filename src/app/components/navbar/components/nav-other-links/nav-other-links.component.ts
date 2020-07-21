import { Component, HostListener, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav-other-links',
  templateUrl: './nav-other-links.component.html',
  styleUrls: ['./nav-other-links.component.scss']
})
export class NavOtherLinksComponent implements OnInit {
  language: string = "BS";
  shouldRenderIcons: boolean = window.innerWidth > 768;
  @Input() isDropDownOpen: boolean;

  @Output() navClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleDropDown: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  resizeListener() {
    if (window.innerWidth < 768) this.shouldRenderIcons = false;
    else this.shouldRenderIcons = true;
  }

  handleNavClick(): void {
    this.navClick.emit();
  }

  handleDropDownClick(event) {
    event.stopPropagation();
    this.toggleDropDown.emit();
  }

  changeLanguage(): void {
    if(this.language === "EN") this.language = "BS";
    else this.language = "EN";
  }

}
