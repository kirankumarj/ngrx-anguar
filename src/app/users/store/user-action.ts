import { Action } from '@ngrx/store';
import { User } from '../module';

export const CREATE_USER = '[User] create';
export const DELETE_USER = '[User] delete';
export const UPDATE_USER = '[User] update';


export class CreateUser implements Action {
  readonly type = CREATE_USER;
  constructor(public payload: User) {

  }
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: number) {

  }
}


export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: User) {

  }
}

export type All = CreateUser | DeleteUser | UpdateUser;
