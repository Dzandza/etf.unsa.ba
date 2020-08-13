import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';

@Component({
  selector: 'app-organisations-page',
  templateUrl: './organisations-page.component.html',
  styleUrls: ['./organisations-page.component.scss']
})
export class OrganisationsPageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }]
  additionalRoutes: Route[] = [
    { name: "Studentski portal", link: "https://etfba.slack.com/" },
    { name: "EESTEC", link: "http://eestec-sa.ba/" },
    { name: "STELEKS", link: "https://www.facebook.com/STELEKS/"}
  ]
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
