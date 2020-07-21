import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StudiesPageComponent } from './pages/studies-page/studies-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';
import { OrganisationsPageComponent } from './pages/organisations-page/organisations-page.component';
import { AcademicStaffPageComponent } from './pages/about-page/pages/academic-staff-page/academic-staff-page.component';
import { ContactPageComponent } from './pages/about-page/pages/contact-page/contact-page.component';
import { RegulationsPageComponent } from './pages/about-page/pages/regulations-page/regulations-page.component';
import { ServicesPageComponent } from './pages/about-page/pages/services-page/services-page.component';
import { BolognaStudiesPageComponent } from './pages/studies-page/pages/bologna-studies-page/bologna-studies-page.component';
import { TitleEquivalencePageComponent } from './pages/studies-page/pages/title-equivalence-page/title-equivalence-page.component';
import { NostrificationAndEquivalencePageComponent } from './pages/studies-page/pages/nostrification-and-equivalence-page/nostrification-and-equivalence-page.component';
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'o-fakultetu', component: AboutPageComponent },
  { path: 'o-fakultetu/akademsko-osoblje', component: AcademicStaffPageComponent },
  { path: 'o-fakultetu/kontakt', component: ContactPageComponent },
  { path: 'o-fakultetu/propisi', component: RegulationsPageComponent },
  { path: 'o-fakultetu/sluzbe', component: ServicesPageComponent },
  { path: 'studij', component: StudiesPageComponent },
  { path: 'studij/bologna', component: BolognaStudiesPageComponent },
  { path: 'studij/ekvivalencija-zvanja', component: TitleEquivalencePageComponent },
  { path: 'studij/nostrifikacija-i-ekvivalencija', component: NostrificationAndEquivalencePageComponent },
  { path: 'odsjeci', component: ProgramsPageComponent },
  { path: 'naucni-rad', component: ResearchPageComponent },
  { path: 'obavjestenja', component: NewsPageComponent },
  { path: 'organizacije', component: OrganisationsPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
