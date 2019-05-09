import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { DefectListItem, DeveloperListItem } from '../../models';
import { selectAssignedDefectListItems, selectCompletedDefectListItems, selectDefectListItems, selectDefectsLoaded, selectDeveloperListItems, selectDevelopersLoaded, selectUnassignedDefectListItems, State } from '../../reducers';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  devsLoaded$: Observable<boolean>;
  devs$: Observable<DeveloperListItem[]>;

  defectsLoaded$: Observable<boolean>;
  defects$: Observable<DefectListItem[]>;
  unassignedDefects$: Observable<DefectListItem[]>;
  assignedDefects$: Observable<DefectListItem[]>;
  completedDefects$: Observable<DefectListItem[]>;

  unsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<State>) { }



  ngOnInit() {
    this.defectsLoaded$ = this.store.select(selectDefectsLoaded);
    this.devsLoaded$ = this.store.select(selectDevelopersLoaded);

    this.devs$ = this.store.select(selectDeveloperListItems);
    this.defects$ = this.store.select(selectDefectListItems);

    this.unassignedDefects$ = this.store.select(selectUnassignedDefectListItems);
    this.assignedDefects$ = this.store.select(selectAssignedDefectListItems);
    this.completedDefects$ = this.store.select(selectCompletedDefectListItems);

  }

}
