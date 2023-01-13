import { createAction, props } from "@ngrx/store"
import { Post } from "../model/post.model";

export const ADD_POST_ACTION = '[post] add new post';
export const ADD_POST_ACTION_SUCCESS = '[post] add new post success';

export const addNewPost = createAction(ADD_POST_ACTION, props<{post : Post}>());
export const addNewPostSuccess = createAction(ADD_POST_ACTION_SUCCESS, props<{post : Post}>());

export const LOAD_POSTS = '[posts] load post';
export const LOAD_POSTS_SUCCESS = '[posts] load post success';

export const loadPost = createAction(LOAD_POSTS);
export const loadPostSuccess = createAction(LOAD_POSTS_SUCCESS, props<{post : Post[]}>());



