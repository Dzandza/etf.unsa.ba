import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  resizeListener(event: any) {
    if(window.innerWidth > 768) this.isMenuOpen = false;
  }

  toggleMenu(event: any): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navClick(event: any): void {
    if(this.isMenuOpen) this.isMenuOpen = false;
  }
}
