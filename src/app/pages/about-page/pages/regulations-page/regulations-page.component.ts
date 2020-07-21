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
  additionalRoutes: any = [
    { name: "Službe", link: "/o-fakultetu/sluzbe", },
    { name: "Akademsko osoblje", link: "/o-fakultetu/akademsko-osoblje", },
    { name: "Propisi", link: "/o-fakultetu/propisi", },
    { name: "Kontakt", link: "/o-fakultetu/kontakt", }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
