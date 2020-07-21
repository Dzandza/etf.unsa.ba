import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-additional-navigation',
  templateUrl: './additional-navigation.component.html',
  styleUrls: ['./additional-navigation.component.scss']
})
export class AdditionalNavigationComponent implements OnInit {
  @Input() routes: any = [];
  @Input() currentRouteIndex: number;
  constructor() { }

  ngOnInit(): void {
  }

}
