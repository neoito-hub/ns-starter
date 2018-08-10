import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState, GetUserDetails$ } from '~/src/store/authentication';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  name = 'sasi';
  constructor(private authStore: Store<AuthState>) {}
  ngOnInit() {
    this.authStore.select(GetUserDetails$).subscribe(u => {
      console.log(u);
      this.name = u.name;
    });
  }
}
