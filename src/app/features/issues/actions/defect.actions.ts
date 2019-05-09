import { Action } from '@ngrx/store';
import { DefectEntity, DefectUpdateEntity } from '../reducers/defects.reducer';

export const LOAD_DEFECTS = '[issues] load the defects';
export class LoadDefects implements Action {
  readonly type = LOAD_DEFECTS;
  constructor() { }
}

export const LOAD_DEFECTS_SUCCESS = '[issues] load the defects succeeded';
export class LoadedDefectsSuccessfully implements Action {
  readonly type = LOAD_DEFECTS_SUCCESS;
  constructor(public payload: DefectEntity[]) {}
}

let currentId = 0;

export const ADDED_DEFECT = '[issues] defect added';
export class AddedDefect implements Action {
  readonly type = ADDED_DEFECT;
  public payload: DefectEntity;
  constructor(title: string, dateSubmitted: Date, description: string, status: string, developerId: string, fixCommit: string) {
    this.payload = {
      id: 'T' + (++currentId),
      title,
      dateSubmitted,
      description,
      status,
      developerId,
      fixCommit
    };
   }
}

export const ADDED_DEFECT_SUCCESS = '[issues] added defect successfully';
export class SuccessfullyAddedADefect implements Action {
  readonly type = ADDED_DEFECT_SUCCESS;
  constructor(public oldId: string, public defect: DefectEntity) { }
}

export const ADDED_DEFECT_FAILURE = '[issues] added defect failure';
export class FailedAddingDefect implements Action {
  readonly type = ADDED_DEFECT_FAILURE;
  constructor(public errorMessage: string, public defect: DefectEntity) { }
}

export const UPDATE_DEFECT = '[issues] defect update';
export class UpdateDefect implements Action {
  readonly type = UPDATE_DEFECT;
  public payload: DefectUpdateEntity;
  constructor(id: string, status: string, developerId: string, fixCommit: string) {
    this.payload = {
      id,
      changes: {
        status,
        developerId,
        fixCommit
      }
    };
   }
}

export const UPDATE_DEFECT_SUCCESS = '[issues] update defect successfully';
export class SuccessfullyUpdatedDefect implements Action {
  readonly type = UPDATE_DEFECT_SUCCESS;
  constructor(public oldId: string, public defect: DefectUpdateEntity) { }
}

export const UPDATE_DEFECT_FAILURE = '[issues] update defect failure';
export class FailedUpdatingDefect implements Action {
  readonly type = UPDATE_DEFECT_FAILURE;
  constructor(public errorMessage: string, public defect: DefectUpdateEntity) { }
}

export type DefectActions =
    LoadDefects
    | LoadedDefectsSuccessfully
    | AddedDefect
    | SuccessfullyAddedADefect
    | FailedAddingDefect
    | UpdateDefect
    | SuccessfullyUpdatedDefect
    | FailedUpdatingDefect;
