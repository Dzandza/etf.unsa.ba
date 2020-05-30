import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {
  @Input() isMenuOpen: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
