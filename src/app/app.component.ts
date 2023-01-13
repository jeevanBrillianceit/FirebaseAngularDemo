import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/appstate.state';
import { getsharedLoading } from './store/shared/shared.selector';
import { sharedState } from './store/shared/shared.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dummy';
  showloading!:Observable<boolean>;
  constructor(private store:Store<AppState>){}

  ngOnInit(): void {
    this.showloading = this.store.select(getsharedLoading);
    
  }
}
