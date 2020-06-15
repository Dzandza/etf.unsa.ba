import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  shouldRenderBannerText: boolean;

  constructor() {
    this.shouldRenderBannerText = window.innerWidth >= 768;
  }

  ngOnInit(): void {
  }


  @HostListener('window:resize', ['$event'])
  resizeListener() {
    if (window.innerWidth >= 768) this.shouldRenderBannerText = true;
    else this.shouldRenderBannerText = false;
  }
}
