import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Constants
import { URLConstants } from '../../common/constants/routerLink-constants';
// Service
import { ShowErrorService } from '../../common/services/service/show-error.service';
import { LocalStorageService } from '../../common/services/service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  URLConstants = URLConstants;
  passView: boolean = false;

  constructor(public showErrorService: ShowErrorService,public localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() { }

  /*************************************************************
  @Purpose     : Toggle view password
  @Parameter   : type
  @Return      : NA
  /*************************************************************/
  toggleView(){
    this.passView = !this.passView;
  }
  /*************************************************************/

  /*************************************************************
  @Purpose     : Normal Login
  @Parameter   : form, user
  @Return      : NA
  /*************************************************************/
  user: any = {};
  submitted = false;
  isServerValidated = true;
  login(form, user) {
    this.submitted = true;
    if (form.valid) {
      this.isServerValidated = true;
      const admin     = "admin@mailinator.com";
      const password  = "System@123";
      if (user.email === admin && user.password === password) {
        this.showErrorService.popToast('success', 'You have logged in successfully');
        this.localStorageService.setToken('accessToken', Date.now().toString());
        this.localStorageService.setToken('username', 'Test User');
        this.router.navigate([this.URLConstants.HOMEPAGE]);
      } else {
        this.isServerValidated = false;
      }
    }
  }
  /*************************************************************/
}
