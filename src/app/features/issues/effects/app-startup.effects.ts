import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concatMap } from 'rxjs/operators';
import * as appActions from '../../../actions/app.actions';
import { LoadDevelopers } from '../actions/developer.actions';

@Injectable()
export class AppStartUpEffects {

  @Effect() startup$ = this.actions$
    .pipe(
      ofType(appActions.APP_START),
      concatMap(() => [
        new LoadDevelopers()
      ])
    );
  constructor(private actions$: Actions) { }
}
