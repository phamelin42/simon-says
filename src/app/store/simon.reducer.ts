import { createReducer, on } from '@ngrx/store';
import { addColorToSequence, incrementScore, resetGame } from './simon.actions';
import { SimonState } from './simon.selectors';

export const initialState: SimonState = {
  score: 0,
  colorSequence: [],
};

export const simonReducer = createReducer(
  initialState,
  on(incrementScore, (state) => ({...state, score: state.score + 1})),
  on(addColorToSequence, (state) => ({...state, colorSequence: [...state.colorSequence, Math.floor(Math.random() * 4)]})),
  on(resetGame, (state) => ({...state, colorSequence: [], score: 0})),
);
