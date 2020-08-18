import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/models/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }]
  news: News[];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.getNews();
    window.scroll(0, 0);
  }

}
