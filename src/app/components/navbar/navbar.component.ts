import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = false;
  isDropDownOpen: boolean = false;
  shouldRenderLanguageIcon: boolean = window.innerWidth < 768;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  resizeListener() {
    if (window.innerWidth > 768) { this.isMenuOpen = false; this.shouldRenderLanguageIcon = false }
    else this.shouldRenderLanguageIcon = true;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropDown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  closeDropDown() {
    this.isDropDownOpen = false;
  }

  public navClick(): void {
    if (this.isMenuOpen) this.isMenuOpen = false;
  }
}
