import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/models/news.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { getStandarDateFormat, getStandardTimeFormat } from 'src/app/helpers';

@Component({
  selector: 'app-full-news-piece-page',
  templateUrl: './full-news-piece-page.component.html',
  styleUrls: ['./full-news-piece-page.component.scss']
})
export class FullNewsPiecePageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }, { name: "Obavještenja", link: "/obavjestenja" }]
  newsPiece: News;
  currentRoute: string = "";
  additionalRoutes: Route[] = [];
  currentRouteIndex: number;
  date: string;

  constructor(private newsService: NewsService, private route: ActivatedRoute, private router: Router) { }

  private initialize(id: number) {
    window.scroll(0, 0);
    const news = this.newsService.getNewsPieceByIdWithAdjacent(id);
    if (!news) {
      this.router.navigateByUrl("404");
      return;
    }
    this.newsPiece = news.newsPiece;
    this.additionalRoutes = news.adjacentNews
      .map(newsPiece =>
        ({
          name: newsPiece.title.length >= 50 ?
            newsPiece.title.substr(0, 50) + "..." : newsPiece.title,
          link: `/obavjestenja/${newsPiece.id}`
        }));
    this.currentRouteIndex = news.index;
    this.currentRoute = `Obavijest #${this.newsPiece.id}`;
    this.date = `${getStandarDateFormat(this.newsPiece.date)}, ${getStandardTimeFormat(this.newsPiece.date)}`
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params.id)
    ).subscribe(value => { !Number.isNaN(Number(value)) ? this.initialize(Number(value)) : this.router.navigateByUrl("404") });
  }
}
