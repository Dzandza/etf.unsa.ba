import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StudiesPageComponent } from './pages/studies-page/studies-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ProgramsPageComponent } from './pages/programs-page/programs-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'o-fakultetu', component: AboutPageComponent },
  { path: 'studij', component: StudiesPageComponent },
  { path: 'odsjeci', component: ProgramsPageComponent },
  { path: 'naucni-rad', component: ResearchPageComponent },
  { path: 'obavjestenja', component: NewsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
