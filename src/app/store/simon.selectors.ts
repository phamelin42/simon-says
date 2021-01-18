import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface SimonState {
  score: number;
  colorSequence: Array<number>;
}

export const selectSimonState = createFeatureSelector<SimonState>('simon');
export const selectScore = createSelector(selectSimonState, (state: SimonState) => state.score);
export const selectColorSequence = createSelector(selectSimonState, (state: SimonState) => state.colorSequence);
