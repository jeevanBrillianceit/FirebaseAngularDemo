import { Component, Inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
import { UserService } from 'src/app/services/user.service';
import { AppState } from 'src/app/store/appstate.state';
import { addNewPost } from 'src/app/store/post.action';
import { setloadingSpinner } from 'src/app/store/shared/shared.action';

@Component({
  selector: 'app-messagedialog',
  templateUrl: './messagedialog.component.html',
  styleUrls: ['./messagedialog.component.css'],
})
export class MessagedialogComponent {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    public userService: UserService,
    public dialogRef: MatDialogRef<MessagedialogComponent>,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  public submit() {
    const post: Post = {
      name: this.form.value.name,
      message: this.form.value.message,
    };
    this.store.dispatch(setloadingSpinner({ status: true }));
    this.store.dispatch(addNewPost({ post }));
    this.dialogRef.close();
  }

  get formdata() {
    return this.form.controls;
  }

  public close() {
    this.dialog.closeAll();
  }
}
