import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { getFullDayName, getStandarDateFormat } from 'src/app/helpers';

@Component({
  selector: 'app-news-piece',
  templateUrl: './news-piece.component.html',
  styleUrls: ['./news-piece.component.scss']
})
export class NewsPieceComponent implements OnInit {
  @Input() newsPiece: News;
  brief: string[] = [];
  date: string = "";

  constructor() { }

  ngOnInit(): void {
    this.brief = this.newsPiece.text
      .substr(0, 230).split("\n");

    this.date = `${getFullDayName(this.newsPiece.date.getDay())}, ${getStandarDateFormat(this.newsPiece.date)}`
  }

}
