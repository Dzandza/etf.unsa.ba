import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';

@Component({
  selector: 'app-title-equivalence-page',
  templateUrl: './title-equivalence-page.component.html',
  styleUrls: ['./title-equivalence-page.component.scss']
})
export class TitleEquivalencePageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }, { name: "Studij", link: "/studij" }]
  additionalRoutes: Route[] = [
    { name: "Bologna", link: "/studij/bologna", },
    { name: "Ekvivalencija zvanja", link: "/studij/ekvivalencija-zvanja", },
    { name: "Nostrifikacija i ekvivalencija", link: "/studij/nostrifikacija-i-ekvivalencija", },
    { name: "Nastavni kalendar", link: "http://old.unsa.ba/s/index.php?option=com_content&task=blogcategory&id=116&Itemid=171", }
  ]
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
