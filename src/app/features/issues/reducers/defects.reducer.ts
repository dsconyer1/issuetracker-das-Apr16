import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as actions from '../actions/defect.actions';
import { DeveloperListItem } from '../models';

export interface DefectEntity {
  id: string;
  title: string;
  dateSubmitted: Date;
  description: string;
  status: string;
  developerId: DeveloperListItem;
  fixCommit: string;
}
export interface DefectUpdateEntity {
  id: string;
  changes: Partial<DefectEntity>;
}

export interface State extends EntityState<DefectEntity> {

}

export const adapter = createEntityAdapter<DefectEntity>();
const initialState: State = adapter.getInitialState();

export function reducer(state: State = initialState, action: actions.DefectActions): State {
  switch (action.type) {
    case actions.ADDED_DEFECT_FAILURE: {
      return adapter.removeOne(action.defect.id, state);
    }
    case actions.ADDED_DEFECT_SUCCESS: {
      const tempState = adapter.removeOne(action.oldId, state);
      return adapter.addOne(action.defect, tempState);
    }
    case actions.ADDED_DEFECT: {
      return adapter.addOne(action.payload, state);
    }
    case actions.UPDATE_DEFECT: {
      return adapter.updateOne({id: action.payload.id, changes: action.payload.changes}, state);
    }
    case actions.LOAD_DEFECTS_SUCCESS: {
      return adapter.addAll(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
