import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { DefectListItem, DeveloperListItem } from '../models';
import * as fromDefects from './defects.reducer';
import * as fromDevelopers from './developers.reducer';
import * as fromSorters from './sorters.reducer';
import * as fromUiDefectHints from './ui-defect-hints.reducer';
import * as fromUiHints from './ui-hints.reduer';

export const featureName = 'issuesFeature';

export interface State {
  defects: fromDefects.State;
  developers: fromDevelopers.State;
  sorters: fromSorters.State;
  uiHints: fromUiHints.State;
  uiDefectHints: fromUiDefectHints.State;
}

export const reducers: ActionReducerMap<State> = {
  defects: fromDefects.reducer,
  developers: fromDevelopers.reducer,
  sorters: fromSorters.reducer,
  uiHints: fromUiHints.reducer,
  uiDefectHints: fromUiDefectHints.reducer
};

// create a feature reducer
export const _selectIssuesFeature = createFeatureSelector<State> (featureName);

// create a reducer per branch
export const _selectDefectsBranch = createSelector(_selectIssuesFeature, b => b.defects);
export const _selectDevelopersBranch = createSelector(_selectIssuesFeature, b => b.developers);
export const _selectSortersBranch = createSelector(_selectIssuesFeature, b => b.sorters);
export const _selectUiHintBranch = createSelector(_selectIssuesFeature, b => b.uiHints);
export const _selectUiDefectHintBranch = createSelector(_selectIssuesFeature, b => b.uiDefectHints);

// create optional helpers
export const {selectAll: _selectDefectsEntities} = fromDefects.adapter.getSelectors(_selectDefectsBranch);
export const selectDefectListItems = createSelector(_selectDefectsEntities, defects => defects as DefectListItem[]);
export const {selectAll: _selectDevelopersEntities} = fromDevelopers.adapter.getSelectors(_selectDevelopersBranch);
export const _selectDeveloperListItemsUnsorted = createSelector(_selectDevelopersEntities, devs => devs as DeveloperListItem[]);


// create the reducers you select from in your components/etc.
export const selectDefectsLoaded = createSelector(_selectUiDefectHintBranch, b => b.defectsLoaded);
export const selectDevelopersLoaded = createSelector(_selectUiHintBranch, b => b.developersLoaded);

// export const selectDefectListItems = createSelector(_selectDefectListItemsUnsorted);

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

export const selectUnassignedDefectListItems = createSelector(selectDefectListItems,
  defects => defects.filter((defect: DefectListItem) => defect.status.toLowerCase() === 'new'));

export const selectAssignedDefectListItems = createSelector(selectDefectListItems,
  defects => defects.filter((defect: DefectListItem) => defect.status.toLowerCase() === 'in process'));

export const selectCompletedDefectListItems = createSelector(selectDefectListItems,
  defects => defects.filter((defect: DefectListItem) => defect.status.toLowerCase() === 'completed'));
