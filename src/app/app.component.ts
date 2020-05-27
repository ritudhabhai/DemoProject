import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Constants
import { URLConstants } from './common/constants/routerLink-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  URLConstants = URLConstants;
  constructor(public router: Router) { }
}
