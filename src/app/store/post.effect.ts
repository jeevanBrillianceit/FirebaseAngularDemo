import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs';
import { UserService } from '../services/user.service';
import {
  addNewPost,
  addNewPostSuccess,
  loadPost,
  loadPostSuccess,
} from './post.action';
import { setloadingSpinner } from './shared/shared.action';
import { sharedState } from './shared/shared.state';

@Injectable()
export class PostEffect {
  constructor(
    private userService: UserService,
    private action$: Actions,
    private store: Store<sharedState>,
    private _snackBar: MatSnackBar
  ) {}

  loadPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPost),
      mergeMap(() => {
        return this.userService.loadPostData().pipe(
          map((post) => {
            this._snackBar.open('Get Posts Successfully!');
            this.store.dispatch(setloadingSpinner({ status: false }));
            return loadPostSuccess({ post });
          }),
          catchError((errResponse) => {
            this._snackBar.open(errResponse?.message || 'Some error occurred');
            throw errResponse
          })
        );
      })
    );
  });

  addNewPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addNewPost),
      mergeMap((action) => {
        return this.userService.addNewPostData(action.post).pipe(
          map((posts) => {
            this._snackBar.open('Post Created Successfully!');
            this.store.dispatch(setloadingSpinner({ status: false }));
            const post = { ...action.post, id: posts.name };
            return addNewPostSuccess({ post });
          }),
          catchError((errResponse) => {
            this._snackBar.open(errResponse?.message || 'Some error occurred');
            throw errResponse
          })
        );
      })
    );
  });
}
