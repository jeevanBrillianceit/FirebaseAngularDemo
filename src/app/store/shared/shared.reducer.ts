import { Action, createReducer, on } from '@ngrx/store';
import { setErrorMesage, setloadingSpinner } from './shared.action';
import { initialstate, sharedState } from './shared.state';

const _sharedReducer = createReducer(
  initialstate,
  on(setloadingSpinner, (state, action) => {
    return {
      ...state,
      showloading: action.status,
    };
  }),
  on(setErrorMesage, (state, action) => {
    return {
      ...state,
      message: action.message,
    };
  })
);

export function sharedReducer(state: sharedState | undefined, action: Action) {
  return _sharedReducer(state, action);
}
