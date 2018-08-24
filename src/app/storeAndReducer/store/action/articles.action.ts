import { Action } from '@ngrx/store';
import { Article } from '../../modules/article';

export const JAVA = 'JAVA';
export const ANGULAR = 'ANGULAR';
export const MY_ARTICLES = 'Favorite_Articles';


export class JavaArticleAction implements Action {
  readonly type = JAVA;
}

export class AngularArticleAction implements Action {
  readonly type = ANGULAR;
  constructor (public payload: Article[]) {

  }
}
