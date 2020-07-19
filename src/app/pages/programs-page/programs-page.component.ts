import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs-page',
  templateUrl: './programs-page.component.html',
  styleUrls: ['./programs-page.component.scss']
})
export class ProgramsPageComponent implements OnInit {
  routes: any = [{ name: "Početna", link: "" }]

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
