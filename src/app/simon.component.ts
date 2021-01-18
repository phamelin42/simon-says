import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addColorToSequence, incrementScore, resetGame } from './store/simon.actions';
import { selectColorSequence, selectScore, SimonState } from './store/simon.selectors';
import { EMPTY, from, fromEvent, generate, interval, merge, noop, Observable, timer } from 'rxjs';
import {
  map,
  pluck,
  scan,
  sequenceEqual,
  switchMap,
  take,
  tap
} from 'rxjs/operators';
@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss']
})
export class SimonComponent implements OnInit {

  public score: Observable<number>;
  public colorSequence: Array<number> = [];
  public gameStarted: boolean;
  public highlightedColor: number;
  public sequenceIndex: number;
  public colorInterval: any;
  public newSequenceIndex: number;
  title = 'simon-says';

  constructor(private store: Store<SimonState>) {
    this.highlightedColor = 9;
    this.sequenceIndex = 0;
    this.gameStarted = false;
    this.newSequenceIndex = 0;
    this.score = this.store.pipe(select(selectScore));
  }

  ngOnInit(): void {
    this.store.pipe(select(selectColorSequence)).subscribe(colorSequence => {
      colorSequence.map(color => timer(1000,1000).subscribe(() => this.highlightedColor = color))
    }
    //   interval(1000).pipe(
    //     take(colorSequence.length),
    //     map(index => colorSequence[index]),
    //     tap(value => this.highlightedColor = value),
    //     tap(x => console.log(x))
    //   );
    // });
    );
  }
  startSimon(): void {
    this.gameStarted = true;
    this.store.dispatch(addColorToSequence());
  }

  guess(color: number): void {
    console.log('color = ' + this.colorSequence);
    console.log(this.colorSequence[this.newSequenceIndex]);
    if (this.colorSequence[this.newSequenceIndex] !== color) {
      this.store.dispatch(resetGame());
      this.highlightedColor = 9;
      this.sequenceIndex = 0;
      this.gameStarted = false;
      this.newSequenceIndex = 0;
    } else {
      this.store.dispatch(addColorToSequence());
      console.log('good');
    }
    this.newSequenceIndex++;
  }

}
