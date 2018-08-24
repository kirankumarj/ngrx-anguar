import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../modules/app-state';
import { INCREMENT } from '../../counter';
import { DECREMENT, RESET } from '../store/action/action-num';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }

  incrementValue() {
    this.store.dispatch({type: INCREMENT});
  }

  decrementValue() {
    this.store.dispatch({type: DECREMENT});
  }

  resetValue() {
    this.store.dispatch({type: RESET});
  }

}
