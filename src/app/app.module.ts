import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogosComponent } from './components/navbar/components/logos/logos.component';
import { NavMainLinksComponent } from './components/navbar/components/nav-main-links/nav-main-links.component';
import { NavOtherLinksComponent } from './components/navbar/components/nav-other-links/nav-other-links.component';
import { MenuIconComponent } from './components/navbar/components/menu-icon/menu-icon.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StudiesPageComponent } from './pages/studies-page/studies-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterLogosComponent } from './components/footer/components/footer-logos/footer-logos.component';
import { ContactComponent } from './components/footer/components/contact/contact.component';
import { AddressComponent } from './components/footer/components/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LogosComponent,
    NavMainLinksComponent,
    NavOtherLinksComponent,
    MenuIconComponent,
    AboutPageComponent,
    StudiesPageComponent,
    ResearchPageComponent,
    NewsPageComponent,
    ProgramsPageComponent,
    FooterComponent,
    FooterLogosComponent,
    ContactComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
