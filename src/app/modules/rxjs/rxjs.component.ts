import { Component, OnInit } from '@angular/core';
import {
  of,
  map,
  from,
  tap,
  BehaviorSubject,
  Subscription,
  concat,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class RxjsComponent {
  // streamData = new BehaviorSubject();
}
