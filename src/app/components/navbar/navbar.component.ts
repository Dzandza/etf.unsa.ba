import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = false;
  shouldRenderLanguageIcon: boolean = window.innerWidth < 768;
  constructor(private router: Router) { }

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

  public navClick(): void {
    if (this.isMenuOpen) this.isMenuOpen = false;
  }
}
