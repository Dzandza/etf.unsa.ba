import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-icon',
  templateUrl: './language-icon.component.html',
  styleUrls: ['./language-icon.component.scss']
})
export class LanguageIconComponent implements OnInit {
  language: string = "BS";

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(): void {
    if (this.language === "EN") this.language = "BS";
    else this.language = "EN";
  }

}
