import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './redux/app.state';
import { Cars } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  carState$: Observable<Cars>;
  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.carState$ = this.store.select('carPage');
  }
}
