import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-national-projects-page',
  templateUrl: './national-projects-page.component.html',
  styleUrls: ['./national-projects-page.component.scss']
})
export class NationalProjectsPageComponent implements OnInit {
  routes: Route[] = [{ name: "Početna", link: "" }, { name: "Naučni rad", link: "/naucni-rad" },]
  additionalRoutes: Route[] = [
    { name: "Nacionalni projekti", link: "/naucni-rad/nacionalni-projekti", },
    { name: "Međunarodni projekti", link: "/naucni-rad/medjunarodni-projekti", },
    { name: "Projekti mobilnosti", link: "http://www.erasmus.unsa.ba/", }
  ]

  projects: Project[] = [];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getNationalProjects();
  }

}
