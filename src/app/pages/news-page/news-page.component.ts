import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  routes: any = [{ name: "Početna", link: "" }]
  news: any = [
    {
      title: "Upis u prvu godinu prvog ciklusa studija i prvu godinu stručnog studija u studijskoj 2020/2021. godini",
      brief: "Upis počinje od 16.07.2020. godine i traje do 24.07.2020. godine. Kandidat koji je ostvario pravo na upis je obavezan da u navedenom terminu dostavi originale uploadovanih dokumenata i izvrši upis, u suprotnom smatra se da je...",
      date: "Wednesday 15. of July 2020"
    },
    {
      title: "Konačne rang-liste kandidata za upis na ETF-Sarajevo u akademskoj 2020/2021 godini",
      brief: "Objavljene su konačne rang-liste kandidata za upis na prvu godinu Prvog ciklusa studija (studijski programi Automatika i elektronika, Elektroenergetika, Računarstvo i informatika i Telekominikacije) i na prvu godinu Stručnog...",
      date: "Tuesday 14. of July 2020"
    },
    {
      title: "Konkurs za izbor akademskog osoblja",
      brief: "Na osnovu člana 103. stav (1) Zakona o visokom obrazovanju (\"Službene novine Kantona Sarajevo\", broj: 33/17), člana 201. st. (1), (2) i (5) Statuta Univerziteta u Sarajevu (broj: 01-1093-3-1/18 od 28.11.2018. godine), Odluke...",
      date: "Monday 13. of July 2020"
    },
    {
      title: "Izvještaj Komisije za pripremanje prijedloga za izbor akademskog osoblja u naučnonastavno zvanje redovni profesor za naučnu oblast \"Elektroenergetika\"",
      brief: "U skladu sa članom 108. stav (2) Zakona o visokom obrazovanju (\"Službene novine Kantona Sarajevo\", broj: 33/17), dekan Elektrotehničkog fakulteta u Sarajevu objavljuje dio izvještaja Komisije za pripremanje prijedloga za izbor...",
      date: "Friday 10. of July 2020"
    },
    {
      title: "Ispiti iz predbolonjskih predmeta Matematika 1 i Matematika 2",
      brief: "Ispiti iz predmeta Matematika 1 i Matematika 2 održat će se u terminima, kako slijedi:\n\n-Matematika 1 (pismeni): 21.07. 2020. u 10.00;\n-Matematika 1 (usmeni): 22.07.2020. u 09.00;-Matematika 2 (pismeni): 22.07.2020. u...",
      date: "Thursday 09. of July 2020"
    },
    {
      title: "Preliminarne rang-liste kandidata za upis na ETF-Sarajevo u akadmskoj 2020/2021 godini",
      brief: "Na preliminarnu rang-listu kandidati imaju pravo prigovora u roku od tri dana od dana objave iste (8, 9. i 10. juli 2020. godine). Odluku o prigovorima kandidata na preliminarnu rang-listu donosi vijeće fakulteta/akademije u roku...",
      date: "Tuesday 07. of July 2020"
    },
    {
      title: "Poziv za dostavljanje ponuda za nabavku usluga - sistematski ljekarski i santirarni pregled",
      brief: "Poziv za dostavljanje ponuda za nabavku usluga - sistematski ljekarski i santirarni pregled",
      date: "Tuesday 07. of July 2020"
    },
    {
      title: "On-LIne uvid u prigovore na rezultate prijemnog ispita iz matematike za upis na ETF-Sarajevo",
      brief: "Kandidati koji su uputili prigovor (putem online forme) Komisji za organizovanje prijemnog ispita za upis na ETF-Sarajevo u akademskoj 2020/2021. godini, na rezultate prijemnog ispita koji je održan 01.07.2020. godine, mogu...",
      date: "Monday 06. of July 2020"
    },
  ]
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
