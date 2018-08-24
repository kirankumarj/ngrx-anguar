import { Action } from '@ngrx/store';
import { INCREMENT, DECREMENT } from '../action/action-num';
import { RESET } from '../../../counter';

const initialVal = 0;
export function numReducer(state: number = initialVal, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default: return state;
  }
}
