import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../modules/app-state';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count$ = store.select('count');
   }

  ngOnInit() {
  }

}
