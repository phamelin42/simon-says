import { createAction, props } from '@ngrx/store';

export const incrementScore = createAction(
  '[Simon Says] Increment Score',
);

export const addColorToSequence = createAction(
  '[Simon Says] Add Color to Sequence',
);

export const resetGame = createAction(
  '[Simon Says] Restart game',
);
