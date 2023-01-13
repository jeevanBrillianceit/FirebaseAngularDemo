import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.state";

export const POST_STATE_NAME = 'post'

const getPostsState = createFeatureSelector<PostState>(POST_STATE_NAME)

export const getPosts = createSelector(getPostsState, state =>{
    return state.post;
});