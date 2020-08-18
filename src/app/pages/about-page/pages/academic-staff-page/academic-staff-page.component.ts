import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';
import { StaffService } from 'src/app/services/staff/staff.service';
import { StaffMember } from 'src/app/models/staff-member.model';

@Component({
  selector: 'app-academic-staff-page',
  templateUrl: './academic-staff-page.component.html',
  styleUrls: ['./academic-staff-page.component.scss']
})
export class AcademicStaffPageComponent implements OnInit {
  routes: Route[] = [
    { name: "Početna", link: "" },
    { name: "O Fakultetu", link: "/o-fakultetu" }
  ];
  additionalRoutes: Route[] = [
    { name: "Službe", link: "/o-fakultetu/sluzbe", },
    { name: "Akademsko osoblje", link: "/o-fakultetu/akademsko-osoblje", },
    { name: "Propisi", link: "/o-fakultetu/propisi", },
    { name: "Kontakt", link: "/o-fakultetu/kontakt", }
  ]
  deansOfficeMembers: StaffMember[] = []
  emeritusProfessors: StaffMember[] = []
  professors: StaffMember[] = []
  associateProfessors: StaffMember[] = []
  assistantProfessors: StaffMember[] = []
  seniorAssistants: StaffMember[] = []
  teachingAssistants: StaffMember[] = []
  industryExperts: StaffMember[] = []


  constructor(private staffService: StaffService) {

  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.deansOfficeMembers = this.staffService.getDeanOfficeMembers();
    const members = this.staffService.getStaffMembers();
    this.emeritusProfessors = members.emeritusProfessors;
    this.professors = members.professors;
    this.associateProfessors = members.associateProfessors;
    this.assistantProfessors = members.assistantProfessors;
    this.seniorAssistants = members.seniorAssistants;
    this.teachingAssistants = members.teachingAssistants;
    this.industryExperts = members.industryExperts;
    
  }

}
