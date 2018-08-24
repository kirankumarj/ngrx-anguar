import { Component, OnInit } from '@angular/core';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppUser } from './app-user';
import * as fromActions from './store/user-action';
import { Observable } from '../../../node_modules/rxjs';
import { User } from './module';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isEditableTrue: boolean;
  users: Observable<User>;
  updateUserVal = {
    id: '',
    name: '',
    age: 0,
    salary: 0
  };
  constructor(private store: Store<AppUser>) { }

  ngOnInit() {
    this.users = this.store.select('user');
    console.log(this.users);
    this.isEditableTrue = true;
  }

  sendData(name, age, salary) {
    this.store.dispatch(new fromActions.CreateUser({id: '1', name: name, age: age, salary: salary}));
  }

  removeUser(index) {
    this.store.dispatch(new fromActions.DeleteUser(index));
  }

  updateUser(index, user)  {
    this.isEditableTrue = false;
    // console.log(index, ' + ', user);
    this.updateUserVal.name = user.name;
    this.updateUserVal.id = user.id;
    this.updateUserVal.age = user.age;
    this.updateUserVal.salary = user.salary;
  }

  okComfireUpdate(index, user) {
    this.store.dispatch(new fromActions.UpdateUser(
      {
        id: this.updateUserVal.id,
        name: this.updateUserVal.name,
        age: this.updateUserVal.age,
        salary: this.updateUserVal.salary
      }
      )
    );
    this.isEditableTrue = true;
  }
}
