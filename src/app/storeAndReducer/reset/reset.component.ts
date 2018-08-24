import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { AppState } from '../modules/app-state';
import { Store } from '../../../../node_modules/@ngrx/store';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<AppState>) {
      this.count$ = store.select('count');
   }

  ngOnInit() {
  }

}
