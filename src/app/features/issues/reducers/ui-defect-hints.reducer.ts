import { Action } from '@ngrx/store';
import * as fromDefectActions from '../actions/defect.actions';


export interface State {
  defectsLoaded: boolean;
}

const initialState: State = {
  defectsLoaded: false
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case fromDefectActions.LOAD_DEFECTS: {
      return {
        defectsLoaded: false
      };
    }
    case fromDefectActions.LOAD_DEFECTS_SUCCESS: {
      return {
        defectsLoaded: true
      };
    }
    default: {
      return state;
    }
  }
}
