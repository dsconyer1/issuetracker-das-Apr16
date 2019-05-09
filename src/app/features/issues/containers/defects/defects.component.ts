import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DefectListItem, DeveloperListItem } from '../../models';
import { selectDefectListItems, selectDefectsLoaded, selectDeveloperListItems, selectDevelopersLoaded, State } from '../../reducers';

@Component({
  selector: 'app-defects',
  templateUrl: './defects.component.html',
  styleUrls: ['./defects.component.css']
})
export class DefectsComponent implements OnInit {

  defectsLoaded$: Observable<boolean>;
  defects$: Observable<DefectListItem[]>;
  devsLoaded$: Observable<boolean>;
  devs$: Observable<DeveloperListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.defectsLoaded$ = this.store.select(selectDefectsLoaded);
    this.defects$ = this.store.select(selectDefectListItems);
    this.devsLoaded$ = this.store.select(selectDevelopersLoaded);
    this.devs$ = this.store.select(selectDeveloperListItems);
  }

}
