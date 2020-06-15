import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-logos',
  templateUrl: './footer-logos.component.html',
  styleUrls: ['./footer-logos.component.scss']
})
export class FooterLogosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  handleLogoClick(path: string): void {
    if (path === "") {
      this.router.navigateByUrl(path);
    } else window.location.href = path;
  }
}
