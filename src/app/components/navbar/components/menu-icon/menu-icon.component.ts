import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {
  @Input() isMenuOpen: boolean;
  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  handleToggleMenu(): void {
    this.toggleMenu.emit(!this.isMenuOpen);
  }

}
