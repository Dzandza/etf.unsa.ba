import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-program-overview',
  templateUrl: './program-overview.component.html',
  styleUrls: ['./program-overview.component.scss']
})

export class ProgramOverviewComponent implements OnInit {
  shouldRenderLinkOnImage: boolean = window.innerWidth > 768;
  @Input() program: any = {};

  constructor() { }

  @HostListener('window:resize', ['$event'])
  resizeListener() {
    if (window.innerWidth > 768) this.shouldRenderLinkOnImage = true;
    else this.shouldRenderLinkOnImage = false;
  }

  ngOnInit(): void {
  }

}
