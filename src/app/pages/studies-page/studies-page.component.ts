import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';

@Component({
  selector: 'app-studies-page',
  templateUrl: './studies-page.component.html',
  styleUrls: ['./studies-page.component.scss']
})
export class StudiesPageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }]
  additionalRoutes: Route[] = [
    { name: "Bologna", link: "bologna", },
    { name: "Ekvivalencija zvanja", link: "ekvivalencija-zvanja", },
    { name: "Nostrifikacija i ekvivalencija", link: "nostrifikacija-i-ekvivalencija", },
    { name: "Nastavni kalendar", link: "http://old.unsa.ba/s/index.php?option=com_content&task=blogcategory&id=116&Itemid=171", }
  ]
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
