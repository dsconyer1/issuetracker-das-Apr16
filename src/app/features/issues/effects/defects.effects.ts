import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as defectActions from '../actions/defect.actions';
import { DefectEntity } from '../reducers/defects.reducer';

@Injectable()
export class DefectEffects {
  readonly uri = 'http://localhost:3000/defects';

  @Effect() addDefects$ = this.actions$
    .pipe(
      ofType(defectActions.ADDED_DEFECT),
      map(a => a as defectActions.AddedDefect),
      switchMap(originalAction => this.http.post<DefectEntity>(this.uri, originalAction.payload)
        .pipe(
          map(defectFromServer => new defectActions.SuccessfullyAddedADefect(originalAction.payload.id, defectFromServer)),
          catchError(r =>
            of(new defectActions.FailedAddingDefect('Cannot Add That Defect', originalAction.payload ))
          )
        )
      )
    );

  @Effect() loadDefects$ = this.actions$
    .pipe(
      ofType(defectActions.LOAD_DEFECTS),
      switchMap(() => this.http.get<{ data: DefectEntity[] }>(this.uri)
        .pipe(
          map(r => r.data),
          map(d => new defectActions.LoadedDefectsSuccessfully(d))
        )
      )
    );

  constructor(private actions$: Actions, private http: HttpClient) {

  }
}
