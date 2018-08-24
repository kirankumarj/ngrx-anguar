import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../module';
import { CREATE_USER, DELETE_USER, UPDATE_USER } from './user-action';
import { AppUser } from '../app-user';

const initialState: User[] = [{
  id: '1',
  name: 'Initial Tutorial',
  age: 30,
  salary: 30000
}];

// export const ADD_USER = '[AddUser]';

export function userReducer(state = initialState, action): User[] {
  switch (action.type) {
    case CREATE_USER:
        console.log(action.payload);
        return [...state, action.payload];
    case UPDATE_USER:
    console.log(action.payload);
        const updatedItems = state.map(item => {
          console.log(item);
          if ( item.name === action.payload.name) {
            return { ...item, ...action.payload };
          }
          return item;
        });
        return updatedItems;
        // return state.map(item => {
        //   return item.name === action.payload.name
        //     ? Object.assign({}, item, { value: action.payload.age })
        //     : item;
        // });
    case DELETE_USER:
            state.splice(action.payload, 1);
          return state;
    default:
        return state;
    }
}


// export const getUsers = createFeatureSelector<User>('users');

// export const getUsersvalues = createSelector(
//   getUsers,
//   (state: User) => state
// );
