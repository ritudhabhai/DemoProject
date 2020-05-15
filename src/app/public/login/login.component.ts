import { Component, OnInit } from '@angular/core';

// Constants
import { URLConstants } from '../../common/constants/routerLink-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  URLConstants = URLConstants;
  constructor() { }

  ngOnInit(): void {
    // document.querySelector('.img__btn').addEventListener('click', function () {
    //   document.querySelector('.cont').classList.toggle('s--signup');
    // });
  }

}
