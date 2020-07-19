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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
