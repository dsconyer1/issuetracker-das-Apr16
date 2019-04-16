import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeveloperListItem } from '../../models';
import { selectDeveloperListItems, State } from '../../reducers';

@Component({
  selector: 'app-devlopers',
  templateUrl: './devlopers.component.html',
  styleUrls: ['./devlopers.component.css']
})
export class DevlopersComponent implements OnInit {

  devs$: Observable<DeveloperListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.devs$ = this.store.select(selectDeveloperListItems);
  }

}
