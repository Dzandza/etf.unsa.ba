import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  routes: any = [
    { name: "Početna", link: "" },
    { name: "O Fakultetu", link: "/o-fakultetu" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
