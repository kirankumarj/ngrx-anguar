import { Component } from '@angular/core';
import { Store , select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from './counter';

interface AppState {
  count: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }
  decrementValue() {
    this.store.dispatch({type: DECREMENT});
  }

  incrementValue() {
    this.store.dispatch({type: INCREMENT});
  }

  resetValue() {
    this.store.dispatch({type: RESET});
  }
}
