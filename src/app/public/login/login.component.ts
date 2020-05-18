import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Plugins
import { AuthService, SocialUser } from 'angularx-social-login';
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
  userData: SocialUser;

  constructor(private authService: AuthService, public showErrorService: ShowErrorService,
    public localStorageService: LocalStorageService, private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.userData = user;
      console.log(user);
    });
  }

  signInWithGoogle(): void {
    console.log('clicked ');

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }

  // signInWithLinkedIn(): void {
  //   this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(x => console.log(x));
  // }

  signOut(): void {
    this.authService.signOut();
  }

  /*************************************************************
  @Purpose     : Login
  @Parameter   : form, user
  @Return      : NA
  /*************************************************************/
  user: any = {};
  submitted = false;
  login(form, user) {
    this.submitted = true;
    if (form.valid) {
      this.commonService.callApi(this.callAPIConstants.Login, user, 'post', true, false).then((success) => {
        if (success.status === 1) {
          this.showErrorService.popToast('success', success.message);
          this.localStorageService.setToken('accessToken', success.access_token);
          this.router.navigate([this.URLConstants.HOMEPAGE]);
        } else {
          this.showErrorService.popToast('error', success.message);
        }
      });
    }
  }
  /*************************************************************/
}
