import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post.model';
import { UserService } from 'src/app/services/user.service';
import { loadPost } from 'src/app/store/post.action';
import { getPosts } from 'src/app/store/post.selector';
import { PostState } from 'src/app/store/post.state';
import { MessagedialogComponent } from '../messagedialog/messagedialog.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    private store: Store<PostState>
  ) {}
  displayedColumns: string[] = ['ID', 'name', 'message'];
  dataSource!: Observable<Post[]>;

  ngOnInit(): void {
    this.dataSource = this.store.select(getPosts);
    this.store.dispatch(loadPost());
  }

  openDialog() {
    const dialogRef = this.dialog.open(MessagedialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
