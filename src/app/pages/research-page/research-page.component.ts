import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.scss']
})
export class ResearchPageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }]
  additionalRoutes: Route[] = [
    { name: "Nacionalni projekti", link: "nacionalni-projekti", },
    { name: "Međunarodni projekti", link: "medjunarodni-projekti", },
    { name: "Projekti mobilnosti", link: "http://www.erasmus.unsa.ba/", }
  ]
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
