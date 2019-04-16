import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { DeveloperListItem } from '../models';
import * as fromDevelopers from './developers.reducer';
import * as fromSorters from './sorters.reducer';

export const featureName = 'issuesFeature';

export interface State {
  developers: fromDevelopers.State;
  sorters: fromSorters.State;
}

export const reducers: ActionReducerMap<State> = {
  developers: fromDevelopers.reducer,
  sorters: fromSorters.reducer
};

// create a feature reducer
export const _selectIssuesFeature = createFeatureSelector<State> (featureName);

// create a reducer per branch
export const _selectDevelopersBranch = createSelector(_selectIssuesFeature, b => b.developers);
export const _selectSortersBranch = createSelector(_selectIssuesFeature, b => b.sorters);

// create optional helpers
export const {selectAll: _selectDevelopersEntities} = fromDevelopers.adapter.getSelectors(_selectDevelopersBranch);
export const _selectDeveloperListItemsUnsorted = createSelector(_selectDevelopersEntities, devs => devs as DeveloperListItem[]);


// create the reducers you select from in your components/etc.
export const selectSortDeveloperListBy = createSelector(_selectSortersBranch, b => b.sortDevelopersBy);
export const selectDeveloperListItems = createSelector(
  _selectDeveloperListItemsUnsorted,
  selectSortDeveloperListBy,
  (list, sortKey) => {
    return [...list.sort((lhs: DeveloperListItem, rhs: DeveloperListItem) => {
      if (lhs[sortKey] < rhs[sortKey]) {
        return -1;
      }
      if (lhs[sortKey] > rhs[sortKey]) {
        return 1;
      }
      return 0;
    })];
  }
);
