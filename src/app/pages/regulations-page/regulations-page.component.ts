import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regulations-page',
  templateUrl: './regulations-page.component.html',
  styleUrls: ['./regulations-page.component.scss']
})
export class RegulationsPageComponent implements OnInit {
  routes: any = [
    { name: "Početna", link: "" },
    { name: "O Fakultetu", link: "/o-fakultetu" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
