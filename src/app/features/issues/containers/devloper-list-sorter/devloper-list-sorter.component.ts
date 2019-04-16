import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeveloperListSorted } from '../../actions/sorters.actions';
import { selectSortDeveloperListBy, State } from '../../reducers';
import { NameSortKey } from '../../reducers/sorters.reducer';

@Component({
  selector: 'app-devloper-list-sorter',
  templateUrl: './devloper-list-sorter.component.html',
  styleUrls: ['./devloper-list-sorter.component.css']
})
export class DevloperListSorterComponent implements OnInit {

  constructor(private store: Store<State>) { }
  sortKey$: Observable<NameSortKey>;

  ngOnInit() {
    this.sortKey$ = this.store.select(selectSortDeveloperListBy);
  }

  sortByFirstName() {
    this.store.dispatch(new DeveloperListSorted('firstName'));
  }

  sortByLastName() {
    this.store.dispatch(new DeveloperListSorted('lastName'));
  }

}
