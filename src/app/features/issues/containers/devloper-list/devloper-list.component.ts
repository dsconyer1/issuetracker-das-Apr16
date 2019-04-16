import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DeveloperListItem } from '../../models';

@Component({
  selector: 'app-devloper-list',
  templateUrl: './devloper-list.component.html',
  styleUrls: ['./devloper-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevloperListComponent implements OnInit {

  @Input() developers: DeveloperListItem[];

  constructor() { }

  ngOnInit() {
  }

}
