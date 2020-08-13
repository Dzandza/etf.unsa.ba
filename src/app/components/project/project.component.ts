import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { getFullMonthName } from 'src/app/helpers';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  project: Project;
  duration: string = "";

  constructor() { }

  ngOnInit(): void {
    this.duration = `${getFullMonthName(this.project.start.getMonth())}, 
                      ${this.project.start.getFullYear()} - 
                      ${getFullMonthName(this.project.end.getMonth())}, 
                      ${this.project.end.getFullYear()}`
  }

}
