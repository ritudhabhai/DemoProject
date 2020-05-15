import { Component, OnInit } from '@angular/core';

// Constants
import { URLConstants } from '../../common/constants/routerLink-constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  URLConstants = URLConstants;
  constructor() { }

  ngOnInit(): void {
  }

}
