import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon'
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
import { BannerComponent } from './components/banner/banner.component';
import { NewsOverviewComponent } from './components/news-overview/news-overview.component';
import { LanguageIconComponent } from './components/navbar/components/language-icon/language-icon.component';
import { HelpfulLinksComponent } from './components/helpful-links/helpful-links.component';
import { OrganisationsPageComponent } from './pages/organisations-page/organisations-page.component';
import { DropdownMenuComponent } from './components/navbar/components/dropdown-menu/dropdown-menu.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AdditionalNavigationComponent } from './components/additional-navigation/additional-navigation.component';
import { ServicesPageComponent } from './pages/about-page/pages/services-page/services-page.component';
import { AcademicStaffPageComponent } from './pages/about-page/pages/academic-staff-page/academic-staff-page.component';
import { RegulationsPageComponent } from './pages/about-page/pages/regulations-page/regulations-page.component';
import { ContactPageComponent } from './pages/about-page/pages/contact-page/contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProgramOverviewComponent } from './components/program-overview/program-overview.component';
import { BolognaStudiesPageComponent } from './pages/studies-page/pages/bologna-studies-page/bologna-studies-page.component';
import { TitleEquivalencePageComponent } from './pages/studies-page/pages/title-equivalence-page/title-equivalence-page.component';
import { NostrificationAndEquivalencePageComponent } from './pages/studies-page/pages/nostrification-and-equivalence-page/nostrification-and-equivalence-page.component';
import { NewsPieceComponent } from './components/news-piece/news-piece.component';
import { FullNewsPiecePageComponent } from './pages/news-page/pages/full-news-piece-page/full-news-piece-page.component';
import { NationalProjectsPageComponent } from './pages/research-page/pages/national-projects-page/national-projects-page.component';
import { InternationalProjectsPageComponent } from './pages/research-page/pages/international-projects-page/international-projects-page.component';
import { ProjectComponent } from './components/project/project.component';
import { DeansOfficeMemberComponent } from './components/deans-office-member/deans-office-member.component';
import { StaffMemberPageComponent } from './pages/about-page/pages/academic-staff-page/pages/staff-member-page/staff-member-page.component';
import { StaffMembersListComponent } from './components/staff-members-list/staff-members-list.component';

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
    AddressComponent,
    BannerComponent,
    NewsOverviewComponent,
    LanguageIconComponent,
    HelpfulLinksComponent,
    OrganisationsPageComponent,
    DropdownMenuComponent,
    BreadcrumbsComponent,
    AdditionalNavigationComponent,
    ServicesPageComponent,
    AcademicStaffPageComponent,
    RegulationsPageComponent,
    ContactPageComponent,
    NotFoundPageComponent,
    ProgramOverviewComponent,
    BolognaStudiesPageComponent,
    TitleEquivalencePageComponent,
    NostrificationAndEquivalencePageComponent,
    NewsPieceComponent,
    FullNewsPiecePageComponent,
    NationalProjectsPageComponent,
    InternationalProjectsPageComponent,
    ProjectComponent,
    DeansOfficeMemberComponent,
    StaffMemberPageComponent,
    StaffMembersListComponent,
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
