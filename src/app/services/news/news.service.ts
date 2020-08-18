import { Injectable } from '@angular/core';
import { News } from '../../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: News[] = [
    {
      id: 1,
      title: "Prijava na Konkurs za upis u prvu godinu drugog ciklusa studija na Elektrotehničkom fakultetu u Sarajevu u studijskoj 2020/2021. godini",
      text: `Prijava na Konkurs za upis u prvu godinu drugog ciklusa studija na Elektrotehničkom fakultetu u Sarajevu u studijskoj 2020/2021. godini
      \nPRIJAVA SE VRŠI OD
      \n31. 08. 2020. − 04. 10. 2020. godine
      \nPrijava kandidata na Konkurs za upis studenata u prvu godinu drugog ciklusa studija na Elektrotehničkom fakultetu u Sarajevu u studijskoj 2020/2021. godini, podnosi se isključivo online putem Informacionog sistema eUNSA (www.upis.unsa.ba).
      \nTroškovi za polaganje prijemnog ispita iznose 40,00 KM (uputstvo za plaćanje/popunjavanje uplatnice možete preuzeti kao prilog ovog obavještenja). Prilikom online prijave na Konkurs, potrebno je poslati (upload) skeniran dokaz o plaćanju (uplatnicu).
      \nSaglasno uvjetima Konkursa, kandidati koji ne pristupe polaganju prijemnog ispita, smatraće se da su odustali od upisa, odnosno njihova prijava neće biti razmatrana.
      \nDatum polaganja prijemnog ispita će biti naknadno oglašen na službenoj internet stranici Elektrotehničkog fakulteta u Sarajevu.`,
      date: new Date(2020, 6, 30, 6, 43),
      attachments: [{ id: 0, title: "uplatnica-prijemni_2_.png" }]
    },
    {
      id: 2,
      title: "Drugi prijavni rok na Konkurs za upis u prvu godinu prvog ciklusa studija i prvu godinu stručnog studija na Elektrotehničkom fakultetu u Sarajevu u studijskoj 2020/2021. godini",
      text: `Drugi prijavni rok na Konkurs za upis u prvu godinu prvog ciklusa studija i prvu godinu stručnog studija na Elektrotehničkom fakultetu u Sarajevu u studijskoj 2020/2021. godini
      \nPRIJAVA SE VRŠI OD
      \n31. 08. 2020. − 06. 09. 2020. godine
      \nPrijava kandidata na Konkurs za upis studenata u prvu godinu prvog ciklusa studija i prvu godinu stručnog studija na Elektrotehničkom fakultetu u Sarajevu u studijskoj 2020/2021. godini, podnosi se isključivo online putem Informacionog sistema eUNSA (www.upis.unsa.ba).
      \nPrijemni ispit iz matematike za upis studenata u prvu godinu prvog ciklusa studija i prvu godinu stručnog studija na Elektrotehničkom fakultetu u Sarajevu u studijskoj 2020/2021. godini, održaće se u ponedjeljak, 07.09.2020. godine u prostorijama Elektrotehničkog fakulteta, Kampus Univerziteta u Sarajevu, Zmaja od Bosne bb, Sarajevo.
      \nTroškovi za polaganje prijemnog ispita iznose 40,00 KM (uputstvo za plaćanje/popunjavanje uplatnice možete preuzeti kao prilog ovog obavještenja). Prilikom online prijave na Konkurs, potrebno je poslati (upload) skeniran dokaz o plaćanju (uplatnicu).
      \nSaglasno uvjetima Konkursa, kandidati koji ne pristupe polaganju prijemnog ispita, smatraće se da su odustali od upisa, odnosno njihova prijava neće biti razmatrana.`,
      date: new Date(2020, 6, 30, 6, 37),
      attachments: [
        { id: 0, title: "Odluka_o__vrednovanju_rezultata_1_.pdf" },
        { id: 1, title: "Odluka_o_kriterijima_za_rangiranje_1_.pdf" },
        { id: 2, title: "uplatnica-prijemni_1_.png" }
      ]
    },
    {
      id: 3,
      title: "Odbrana magistarskog rada - Muamer Imamović",
      text: `UNIVERZITET U SARAJEVU
      \nELEKTROTEHNIČKI FAKULTET U SARAJEVU
      \nZmaja od Bosne bb
      \nS a r a j e v o
      \nO B A V J E Š T E N J E
      \nMUAMER IMAMOVIĆ
      \nbranit će magistarski rad pod naslovom
      \n"Poboljšanje kvalitete video streaminga preko WLAN-a"
      \n17. septembra 2020. godine (četvrtak), sa početkom u 12,00 sati
      \nu prostorijama Elektrotehničkog fakulteta u Sarajevu, sala S1 - prizemlje
      \nPristup odbrani je slobodan
      \nMagistarski rad može se pregledati u prostorijama Elektrotehničkog fakulteta u Sarajevu, svakog radnog dana od 10 do 13 sati, a najkasnije osam dana prije odbrane magistarskog rada.`,
      date: new Date(2020, 6, 30, 6, 32),
      attachments: []
    },
    {
      id: 4,
      title: "Izvještaj Komisije za pripremanje prijedloga za izbor akademskog osoblja u naučnonastavno zvanje vanredni profesor za naučnu oblast \"Računarstvo i informatika\"",
      text: `U skladu sa članom 108. stav (2) Zakona o visokom obrazovanju ("Službene novine Kantona Sarajevo", broj: 33/17), dekan Elektrotehničkog fakulteta u Sarajevu objavljuje dio izvještaja Komisije za pripremanje prijedloga za izbor akademskog osoblja u naučnonastavno zvanje vanredni profesor za naučnu oblast "Računarstvo i informatika" na Odsjeku za računarstvo i informatiku (prijem jednog izvršioca u radni odnos s punim radnim vremenom), za prijavljenog kandidata, dr. Vedrana Ljubovića, docenta na Elektrotehničkom fakultetu u Sarajevu.
      \nPredmetni konkurs je objavljen 10. juna 2020. godine u dnevnom listu "Oslobođenje" i na internet stranici Elektrotehničkog fakulteta u Sarajevu.
      \nIzvještaj se objavljuje u dijelu koji se odnosi na ispunjavanje propisanih uslova za izbor u naučnonastavno zvanje od strane prijavljenog kandidata.`,
      date: new Date(2020, 6, 29, 8, 52),
      attachments: [
        { id: 0, title: "IZVOD_izbor_Vedran_Ljubovic.doc" }
      ]
    },
    {
      id: 5,
      title: "Odluka o direktnom sporazumu",
      text: `Odluka o direktnom sporazumu`,
      date: new Date(2020, 6, 28, 13, 0),
      attachments: [
        { id: 0, title: "Odluka_direktni_sporazum_nabavka_elektricnih_potrepstina_i_pribora_za_2020._godinu.pdf" }
      ]
    },
    {
      id: 6,
      title: "Odluka o izboru najpovoljnijeg ponuđača po otvorenom postupku za dostavu ponuda",
      text: `Odluka o izboru najpovoljnijeg ponuđača po otvorenom postupku za dostavu ponuda`,
      date: new Date(2020, 6, 24, 10, 38),
      attachments: [
        { id: 0, title: "Odluka_o_izboru_generatorski_agregat_2020._godine.pdf" }
      ]
    },
    {
      id: 7,
      title: "Odbrana magistarskog rada",
      text: `UNIVERZITET U SARAJEVU
      \nELEKTROTEHNIČKI FAKULTET U SARAJEVU
      \nZmaja od Bosne bb
      \nS a r a j e v o
      \nADNAN SALKANOVIĆ
      \nbranit će magistarski rad pod naslovom
      \n"Modeliranje, analiza i upravljanje klasom procesa u prehrambenoj industriji"
      \n09. septembra 2020. godine (srijeda)
      \nsa početkom u 10,00 sati
      \nu prostorijama Elektrotehničkog fakulteta u Sarajevu, sala S1 - prizemlje
      \nPristup odbrani je slobodan
      \nMagistarski rad može se pregledati u prostorijama Elektrotehničkog fakulteta u Sarajevu, svakog radnog dana od 10 do 13 sati, a najkasnije osam dana prije odbrane magistarskog rada.`,
      date: new Date(2020, 6, 22, 10, 1),
      attachments: []
    },
    {
      id: 8,
      title: "Odluka o izboru najpovoljnijeg ponuđača po konkurentskom zahtjevu za dostavu ponuda - Elektronske potrepštine - set energetskih pretvarača",
      text: `Odluka o izboru najpovoljnijeg ponuđača po konkurentskom zahtjevu za dostavu ponuda - Elektronske potrepštine - set energetskih pretvarača`,
      date: new Date(2020, 6, 21, 13, 3),
      attachments: [
        { id: 0, title: "Odluka_o_izboru_elektronske_potrepstine_-_set_energetskih_pretvaraca_2020._godine.pdf" }
      ]
    },
    {
      id: 9,
      title: "Odluka o izboru najpovoljnijeg ponuđača po konkurentskom zahtjevu za dostavu ponuda - Laboratorijska oprema - upravljačka ploča",
      text: `Odluka o izboru najpovoljnijeg ponuđača po konkurentskom zahtjevu za dostavu ponuda - Laboratorijska oprema - upravljačka ploča`,
      date: new Date(2020, 6, 24, 13, 2),
      attachments: [
        { id: 0, title: "Odluka_o_izboru_Laboratorijska_oprema_-_upravljacka_ploca_2020._godine.pdf" }
      ]
    },
    {
      id: 10,
      title: "Izvještaj Komisije za pripremanje prijedloga za izbor akademskog osoblja u naučnonastavno zvanje redovni profesor za naučnu oblast \"Računarstvo i informatika\"",
      text: `U skladu sa članom 108. stav (2) Zakona o visokom obrazovanju ("Službene novine Kantona Sarajevo", broj: 33/17), dekan Elektrotehničkog fakulteta u Sarajevu objavljuje dio izvještaja Komisije za pripremanje prijedloga za izbor akademskog osoblja u naučnonastavno zvanje redovni profesor za naučnu oblast "Računarstvo i informatika" na Odsjeku za računarstvo i informatiku (prijem jednog izvršioca u radni odnos s punim radnim vremenom), za prijavljenog kandidata, dr. Sašu Mrdovića, vanrednog profesora na Elektrotehničkom fakultetu u Sarajevu.
      \nPredmetni konkurs je objavljen 13. juna 2020. godine u dnevnom listu "Oslobođenje" i na internet stranici Elektrotehničkog fakulteta u Sarajevu.
      \nIzvještaj se objavljuje u dijelu koji se odnosi na ispunjavanje propisanih uslova za izbor u naučnonastavno zvanje od strane prijavljenog kandidata.`,
      date: new Date(2020, 6, 24, 9, 14),
      attachments: [
        { id: 0, title: "IZVOD_izbor_Sasa_Mrdovic.doc" }
      ]
    },
  ]
  constructor() { }

  public getNews(): News[] {
    return this.news;
  }

  public getNewsPieceById(id: number): News {
    const newsPiece = this.news.find(newsPiece => newsPiece.id === id);
    return newsPiece ? newsPiece : null;
  }

  public getNewsPieceByIdWithAdjacent(id: number) {
    const newsPieceIndex = this.news.findIndex(newsPiece => newsPiece.id === id);
    if (newsPieceIndex === -1) return null;
    let adjacentNews = [];
    let newIndex = 0;
    if (newsPieceIndex === 0 || newsPieceIndex === 1) {
      adjacentNews = this.news.slice(0, 5);
      newIndex = newsPieceIndex === 0 ? 0 : 1;
    }
    else if (newsPieceIndex === this.news.length - 1 || newsPieceIndex === this.news.length - 2) {
      adjacentNews = this.news.slice(this.news.length - 5, this.news.length);
      newIndex = newsPieceIndex === this.news.length - 1 ? 4 : 3;
    }
    else {
      adjacentNews = this.news.slice(newsPieceIndex - 2, newsPieceIndex + 3);
      newIndex = 2;
    }

    return { newsPiece: this.news[newsPieceIndex], adjacentNews, index: newIndex }
  }

  public getTopNews(): News[] {
    return this.news.slice(0, 3);
  }
}
