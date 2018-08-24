import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppUser } from '../app-user';
import { Observable } from '../../../../node_modules/rxjs';
import { User } from '../module';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: Observable<User>;
  constructor(private store: Store<AppUser>) { }

  ngOnInit() {
    this.users = this.store.select('user');
  }

}
