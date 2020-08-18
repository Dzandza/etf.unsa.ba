import { Component, OnInit, Input } from '@angular/core';
import { StaffMember } from 'src/app/models/staff-member.model';

@Component({
  selector: 'app-deans-office-member',
  templateUrl: './deans-office-member.component.html',
  styleUrls: ['./deans-office-member.component.scss']
})
export class DeansOfficeMemberComponent implements OnInit {
  @Input()
  member: StaffMember;
  constructor() { }

  ngOnInit(): void {
  }

}
