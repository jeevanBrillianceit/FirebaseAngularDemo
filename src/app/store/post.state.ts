import { Post } from "../model/post.model";

export interface PostState{
    post : Post[];
}

export const initialstate : PostState ={
     post :[],
}