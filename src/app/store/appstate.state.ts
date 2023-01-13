import { PostState } from '../store/post.state';
import { sharedReducer } from '../store/shared/shared.reducer';
import { SHARED_STATE_NAME } from '../store/shared/shared.selector';
import { sharedState } from '../store/shared/shared.state';
import { PostReducer } from './post.reducer';
import { POST_STATE_NAME } from './post.selector';

export interface AppState {
  [SHARED_STATE_NAME]: sharedState;
  [POST_STATE_NAME]: PostState;
}

export const AppReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [POST_STATE_NAME]: PostReducer,
};
