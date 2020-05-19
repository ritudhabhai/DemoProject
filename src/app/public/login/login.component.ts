import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Plugins
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

// Constants
import { callAPIConstants } from '../../common/constants/callAPI-constants';
import { URLConstants } from '../../common/constants/routerLink-constants';

// Service
import { CommonService } from '../../common/services/service/common.service';
import { ShowErrorService } from '../../common/services/service/show-error.service';
import { LocalStorageService } from '../../common/services/service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  callAPIConstants = callAPIConstants;
  URLConstants = URLConstants;

  constructor(private authService: AuthService, public showErrorService: ShowErrorService,
    public localStorageService: LocalStorageService, private commonService: CommonService, private router: Router) { }

  ngOnInit() { }

  /*************************************************************
  @Purpose     : Social Login
  @Parameter   : type
  @Return      : NA
  /*************************************************************/
  async socialLogin(type) {
    const userData: any = {};
    let provider;
    if (type === 'facebook') {
      provider = FacebookLoginProvider.PROVIDER_ID;
      userData.socialKey = 'fbId';
    } else if (type === 'goggle') {
      provider = GoogleLoginProvider.PROVIDER_ID;
      userData.socialKey = 'googleId';
    } else {
      // this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then((data) => console.log(data));
    }
    const user = await this.authService.signIn(provider).then((data) => {
      userData.socialId = data.id;
      userData.lastname = data.lastName;
      userData.firstname = data.firstName;
      userData.username = data.name;
      userData.emailId = data.email;
      return userData;
    });
    this.callAPItoLogin(this.callAPIConstants.Social_Login, user);
  }
  /*************************************************************/

  /*************************************************************
  @Purpose     : Normal Login
  @Parameter   : form, user
  @Return      : NA
  /*************************************************************/
  user: any = {};
  submitted = false;
  login(form, user) {
    this.submitted = true;
    if (form.valid) { this.callAPItoLogin(this.callAPIConstants.Login, user); }
  }
  /*************************************************************/

  /*************************************************************
  @Purpose     : Call API to Login ( normal / social login )
  @Parameter   : getMethodName, data
  @Return      : NA
  /*************************************************************/
  callAPItoLogin(getMethodName, data) {
    this.commonService.callApi(getMethodName, data, 'post', true, false).then((success) => {
      if (success.status === 1) {
        this.showErrorService.popToast('success', success.message);
        this.localStorageService.setToken('accessToken', success.access_token);
        this.localStorageService.setToken('username', success.data.username);
        this.router.navigate([this.URLConstants.HOMEPAGE]);
      } else {
        this.showErrorService.popToast('error', success.message);
      }
    });
  }
  /*************************************************************/
}
