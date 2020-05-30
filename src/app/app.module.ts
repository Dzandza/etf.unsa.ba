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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LogosComponent,
    NavMainLinksComponent,
    NavOtherLinksComponent,
    MenuIconComponent
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
