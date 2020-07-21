import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisations-page',
  templateUrl: './organisations-page.component.html',
  styleUrls: ['./organisations-page.component.scss']
})
export class OrganisationsPageComponent implements OnInit {
  routes: any = [{ name: "Početna", link: "" }]
  additionalRoutes: any = [
    { name: "Studentski portal", link: "https://etfba.slack.com/" },
    { name: "EESTEC", link: "http://eestec-sa.ba/" },
    { name: "STELEKS", link: "https://www.facebook.com/STELEKS/"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
