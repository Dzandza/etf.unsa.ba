import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }]
  additionalRoutes: Route[] = [
    { name: "Službe", link: "sluzbe", },
    { name: "Akademsko osoblje", link: "akademsko-osoblje", },
    { name: "Propisi", link: "propisi", },
    { name: "Kontakt", link: "kontakt", }
  ]

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
