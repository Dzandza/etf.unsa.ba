import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.scss']
})
export class NewsOverviewComponent implements OnInit {
  current: number = 0;
  news: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.getTopNews();
  }

  handleNewsChange(direction: string) {
    if(direction === 'left') this.current = this.current === 0 ? this.news.length - 1 : this.current - 1;
    else this.current = this.current === this.news.length - 1 ? 0 : this.current + 1;
  }

}
