import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-piece',
  templateUrl: './news-piece.component.html',
  styleUrls: ['./news-piece.component.scss']
})
export class NewsPieceComponent implements OnInit {
  @Input() newsPiece: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
