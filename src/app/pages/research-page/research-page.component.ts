import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.scss']
})
export class ResearchPageComponent implements OnInit {
  routes: any = [{ name: "Početna", link: "" }]

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
