import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-overview',
  templateUrl: './news-overview.component.html',
  styleUrls: ['./news-overview.component.scss']
})
export class NewsOverviewComponent implements OnInit {
  current: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  handleNewsChange(direction: string) {
    if(direction === 'left') this.current = this.current === 1 ? 3 : this.current - 1;
    else this.current = this.current === 3 ? 1 : this.current + 1;
  }

}
