import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { loadPost } from 'src/app/store/post.action';
import { getPosts } from 'src/app/store/post.selector';
import { PostState } from 'src/app/store/post.state';
import { MessagedialogComponent } from '../messagedialog/messagedialog.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    private store: Store<PostState>,
    private _liveAnnouncer: LiveAnnouncer
  ) {}
  displayedColumns: string[] = ['ID', 'name', 'message', 'date'];
  dataSource: any = new MatTableDataSource([]);

  ngOnInit(): void {
    this.store.select(getPosts).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
    this.store.dispatch(loadPost());
  }

  openDialog() {
    const dialogRef = this.dialog.open(MessagedialogComponent, {});
    dialogRef.afterClosed().subscribe((result) => {});
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
