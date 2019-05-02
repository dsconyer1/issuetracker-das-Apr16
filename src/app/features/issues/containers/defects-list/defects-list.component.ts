import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DefectListItem } from '../../models';

@Component({
  selector: 'app-defects-list',
  templateUrl: './defects-list.component.html',
  styleUrls: ['./defects-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefectsListComponent implements OnInit {

  @Input() defects: DefectListItem[];

  constructor() { }

  ngOnInit() {
  }

}
