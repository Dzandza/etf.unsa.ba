import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { StaffService } from 'src/app/services/staff/staff.service';
import { StaffMember } from 'src/app/models/staff-member.model';

@Component({
  selector: 'app-staff-member-page',
  templateUrl: './staff-member-page.component.html',
  styleUrls: ['./staff-member-page.component.scss']
})
export class StaffMemberPageComponent implements OnInit {
  routes: Route[] = [
    { name: "Početna", link: "" },
    { name: "O Fakultetu", link: "/o-fakultetu" },
    { name: "Akademsko osoblje", link: "/o-fakultetu/akademsko-osoblje" }
  ];
  additionalRoutes: Route[] = [
    { name: "Službe", link: "/o-fakultetu/sluzbe", },
    { name: "Akademsko osoblje", link: "/o-fakultetu/akademsko-osoblje", },
    { name: "Propisi", link: "/o-fakultetu/propisi", },
    { name: "Kontakt", link: "/o-fakultetu/kontakt", }
  ]
  member: StaffMember;

  constructor(private staffService: StaffService, private route: ActivatedRoute, private router: Router) { }

  private initialize(id: number) {
    window.scroll(0, 0);
    this.member = this.staffService.getStaffMemberById(id);
    if(!this.member) this.router.navigateByUrl("404");
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params.id)
    ).subscribe(value => { !Number.isNaN(Number(value)) ? this.initialize(Number(value)) : this.router.navigateByUrl("404") });
  }

}
