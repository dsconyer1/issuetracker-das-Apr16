import { Component, OnInit } from '@angular/core';
import { DeveloperListItem } from '../../models';

@Component({
  selector: 'app-devloper-list',
  templateUrl: './devloper-list.component.html',
  styleUrls: ['./devloper-list.component.css']
})
export class DevloperListComponent implements OnInit {

  developers: DeveloperListItem[] = [
    { id: '1', firstName: 'Lee', lastName: 'Cooper', team: 'Commercial Lines'},
    { id: '2', firstName: 'Daryl', lastName: 'Sconyers', team: 'ERO'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
