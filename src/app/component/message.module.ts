import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../material.module';
import { PostEffect } from '../store/post.effect';
import { PostReducer } from '../store/post.reducer';
import { MessageComponent } from './message/message.component';
import { MessagedialogComponent } from './messagedialog/messagedialog.component';

const route: Routes = [
  { path: '', component: MessageComponent },
  { path: 'message', component: MessageComponent },
  { path: 'messagedialog', component: MessagedialogComponent },
];

@NgModule({
  declarations: [MessageComponent, MessagedialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    StoreModule.forFeature('post', PostReducer),
    EffectsModule.forFeature([PostEffect]),
  ],
})
export class MessageModule {}
