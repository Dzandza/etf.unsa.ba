import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-staff-page',
  templateUrl: './academic-staff-page.component.html',
  styleUrls: ['./academic-staff-page.component.scss']
})
export class AcademicStaffPageComponent implements OnInit {
  routes: any = [
    { name: "Početna", link: "" },
    { name: "O Fakultetu", link: "/o-fakultetu" }
  ];
  additionalRoutes: any = [
    { name: "Službe", link: "/o-fakultetu/sluzbe", },
    { name: "Akademsko osoblje", link: "/o-fakultetu/akademsko-osoblje", },
    { name: "Propisi", link: "/o-fakultetu/propisi", },
    { name: "Kontakt", link: "/o-fakultetu/kontakt", }
  ]


  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
