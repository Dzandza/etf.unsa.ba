import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {
  @Input() isMenuOpen: boolean;
  @Output() navClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogoClick(path: string): void {
    if (path === "") {
      this.navClick.emit(path);
      this.router.navigateByUrl(path);
    } else window.location.href = path;
  }

}
