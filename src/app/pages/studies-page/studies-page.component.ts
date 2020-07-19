import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies-page',
  templateUrl: './studies-page.component.html',
  styleUrls: ['./studies-page.component.scss']
})
export class StudiesPageComponent implements OnInit {
  routes: any = [{ name: "Početna", link: "" }]
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
