import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  routes: any = [{ name: "Početna", link: "" }]
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
