import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'Dobrodošli na web stranicu Elektrotehničkog fakulteta u Sarajevu!';

  constructor() { }

  ngOnInit(): void {
  }

}
