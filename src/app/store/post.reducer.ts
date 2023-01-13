import { Action, createReducer, on } from '@ngrx/store';
import { addNewPostSuccess, loadPostSuccess } from './post.action';
import { initialstate, PostState } from './post.state';

export const _PostReducer = createReducer(
  initialstate,
  on(addNewPostSuccess, (state, action) => {
    let posts = { ...action.post };
    return {
      ...state,
      post: [...state.post, posts],
    };
  }),
  on(loadPostSuccess, (state, action) => {
    return {
      ...state,
      post: action.post,
    };
  })
);

export function PostReducer(state: PostState | undefined, action: Action) {
  return _PostReducer(state, action);
}
