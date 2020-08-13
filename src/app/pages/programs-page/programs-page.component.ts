import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';
import { Program } from 'src/app/models/program.model';

@Component({
  selector: 'app-programs-page',
  templateUrl: './programs-page.component.html',
  styleUrls: ['./programs-page.component.scss']
})
export class ProgramsPageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }]
  programs: Program[] = [{
    title: "Automatika i Elektronika",
    brief: `Odsjek za automatiku i elektroniku pruža vrhunsko obrazovanje u oblasti teorije, strukture i projektovanja sistema automatskog upravljanja procesa, sistema upravljanja i zaštite u elektroenergetici i elektroničkih struktura i sistema. Poseban akcenat je stavljen na razmatranje elektroničkih komponenata te analognih i digitalnih integriranih krugova. Duboko razumijevanje struktura organizacije računara, softvera i poznavanje elektronike takođe omogućavaju inženjerima koji završe studij na ovome Odsjeku, sintetiziranje svih elektronički baziranih struktura i sistema, projektovanje računarskih sistema i aplikacije u realnom vremenu ili off-line.`,
    imgPosition: "left",
    img: "aie-img.jpg",
  },
  {
    title: "Elektroenergetika",
    brief: `Osim obrazovanja, aktivnosti na Odjelu za elektroenergetiku su prijenosni, distributivni i industrijski sustavi (protok opterećenja, kratki spojevi, prolazna stabilnost, uvjeti kvara za određivanje nazivne vrijednosti rasklopnih uređaja, s doprinosom na motorima za ubrizgavanje; studije pokretanja motora; proizvodnja releja; procjena pouzdanosti različitih konfiguracija elektroenergetske mreže).
    Elektromagnetski prolazni elementi u elektroenergetskom sustavu (prebacivanje i prenaponi groma; postupci koordinacije izolacije. 
    Ekonomska upotreba korekcije faktora snage i dizajn kondenzatorskih banaka u sistemima sa problemima izobličenja napona. 
    Električne mašine i pogoni. 
    Katodni sustavi zaštite (cjevovodi cjevovoda, pumpne stanice u području vodoopskrbe, opskrbe plinom, rafinerije nafte, hemijske industrije, skladišta itd.). 
    Elektrohemija i elektrostatika.`,
    imgPosition: "right",
    img: "ee-img.jpg",
  }, {
    title: "Računarstvo i Informatika",
    brief: `Tokom školske 1967/68. godine iz smjera za automatiku izdvaja se smjer za računare, kao poseban novi smjer na Elektrotehničkom fakultetu u Sarajevu. Na taj način učinjeni su prvi koraci ka oblasti računarskih nauka. Reformom visokog obrazovanja u Bosni i Hercegovini od 1971. god. nastava se organizuje kroz rad sa četiri odsjeka među kojima je i Odsjek za informatiku. Kao prelazni studij, organizovan je 1973/74. šk. godine poseban smjer Računari na Odsjeku za Upravljanje i elektroniku (ranije automatika). Potpuni studij informatike i računarstva počeo je 1974/75. šk. godine na 3. godini poslije zajedničkog dijela studija za sve odsjeke.`,
    imgPosition: "left",
    img: "ri-img.jpg",
  }, {
    title: "Telekomunikacije",
    brief: `Odsjek za telekomunikacije (DOTFEESA) osnovan je 1976. godine i jedan je od ukupno četiri odsjeka Elektrotehničkog fakulteta Univerziteta u Sarajevu. Od 2005. godine, nastavni proces usklađen je sa bolonjskom deklaracijom, a studij je podjeljen na bachelor, master i doktorski studij. Bachleor studij, u trajanju od 3 godine, orijentisan je ka sticanju fundamenata inžinjerske prakse i telekomunikacijskih znanja, a o njegovom kvalitetu govori i činjenica da je program akreditiran od strane ASIIN-a – njemačke članice europske asocijacije za osiguranje kvaliteta u visokom obrazovanju (ENQA). S druge strane, master studij, u trajanju od 2 godine, orijentisan je praktičnom inžinjerskom radu i naučno-istraživačkim aktivnostima.`,
    imgPosition: "right",
    img: "tk-img.jpg",
    href: "https://www.tk.etf.unsa.ba/"
  },
  {
    title: "Razvoj Softvera",
    brief: `Stručni studij "Razvoj softvera" je tzv. studij kratkog ciklusa (short cycle) predviđen Evropskim kvalifikacijskim okvirom. Studij nosi 120 ECTS kredita, a njime se stiče V stepen stručne spreme, odnosno peti nivo EKO (EQF). Zvanje koje se stiče završetkom ovog studija je u Bolonjskom sistemu prepoznato kao zvanje stručnog specijaliste (eng. associate degree, u Hrvatskoj: stručni pristupnik).`,
    imgPosition: "left",
    img: "rs-img.jpg",
    href: "https://www.rs.etf.unsa.ba/"
  },]
  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
