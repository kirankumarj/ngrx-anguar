import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { CREATE_USER } from '../store/user-action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromUser from '../store/user-action';

@Injectable()
export class CreateUserEffect {

  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  user$: Observable<Action> = this.actions$.pipe(
    ofType(CREATE_USER),
    mergeMap(action =>
      this.http.post('http://localhost:3000/adduser', action.payload ).pipe(
        // If successful, dispatch success action with result
        map(data => new fromUser.CreateUser(data)),
        // If request fails, dispatch failed action
        catchError(() => of({ type: 'LOGIN_FAILED' }))
      )
    )
  );
}
