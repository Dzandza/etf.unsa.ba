import { Component, OnInit, Input } from '@angular/core';
import { StaffMember } from 'src/app/models/staff-member.model';

@Component({
  selector: 'app-staff-members-list',
  templateUrl: './staff-members-list.component.html',
  styleUrls: ['./staff-members-list.component.scss']
})
export class StaffMembersListComponent implements OnInit {
  @Input() title: string;
  @Input() members: StaffMember[] = [];
  isExpanded: boolean = false;
  minWidth: boolean = this.members.findIndex(member => member.title) !== -1;

  constructor() { }

  ngOnInit(): void {
    this.minWidth = this.members.findIndex(member => member.title) !== -1;
  }

  handleClick(): void {
    this.isExpanded = !this.isExpanded;
  }
}
