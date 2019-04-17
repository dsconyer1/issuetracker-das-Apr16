import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeveloperListItem } from '../../models';
import { selectDeveloperListItems, selectDevelopersLoaded, State } from '../../reducers';

@Component({
  selector: 'app-devlopers',
  templateUrl: './devlopers.component.html',
  styleUrls: ['./devlopers.component.css']
})
export class DevlopersComponent implements OnInit {

  developersLoaded$: Observable<boolean>;
  devs$: Observable<DeveloperListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.developersLoaded$ = this.store.select(selectDevelopersLoaded);
    this.devs$ = this.store.select(selectDeveloperListItems);
  }

}
