import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

// plugins
import swal from 'sweetalert2';

// constants
import { URLConstants } from '../../constants/routerLink-constants';

// environment
import { environment } from 'src/environments/environment';

// service
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  authorised: any = false;
  public API_URL = '';

  constructor(public router: Router, public Http: HttpClient, public localStorageService: LocalStorageService) {
    this.API_URL = environment.apiUrl;
  }

  /*******************************************************************************************
  @PURPOSE      	: Call api.
  @Parameters 	  : {
                      url : <url of api>
                      data : <data object (JSON)>
                      method : String (get, post)
                      isForm (Optional) : Boolean - to call api with form data
                      isPublic (Optional) : Boolean - to call api without auth header
                    }
  @RETURN         : Data obtain for API
  /*****************************************************************************************/
  public showSkeletonLoader: boolean;
  callApi(url, data, method, isPublic?, isForm?, html?): Promise<any> {
    this.showSkeletonLoader = true;
    let headers;
    if (isPublic) {
      headers = new HttpHeaders({ 'content-Type': 'application/json' });
    } else if (html) {
      headers = new HttpHeaders({ 'content-Type': 'text/html', 'Authorization': this.localStorageService.getToken('accessToken') });
    } else {
      headers = new HttpHeaders({ 'content-Type': 'application/json', 'Authorization': this.localStorageService.getToken('accessToken') });
    }
    if (isForm) {
      headers = new HttpHeaders({ Authorization: this.localStorageService.getToken('accessToken') });
    }
    return new Promise((resolve, reject) => {
      if (method === 'post') {
        this.Http.post(this.API_URL + url, data, { headers }).subscribe((value) => {
          this.showSkeletonLoader = false;
          resolve(value);
        }, (error) => {
          this.error(error);
        });
      } else if (method === 'get') {
        this.Http.get(this.API_URL + url, { headers, params: data }).subscribe((value) => {
          this.showSkeletonLoader = false;
          resolve(value);
        }, (error) => {
          this.error(error);
        });
      } else if (method === 'put') {
        this.Http.put(this.API_URL + url, data, { headers }).subscribe((value) => {
          this.showSkeletonLoader = false;
          resolve(value);
        }, (error) => {

        });
      } else if (method === 'delete') {
        this.Http.delete(this.API_URL + url, { headers }).subscribe((value) => {
          this.showSkeletonLoader = false;
          resolve(value);
        }, (error) => {
          this.error(error);
        });
      }
    });

  }

  callApiObservable(url, data) {
    const headers = new HttpHeaders({ Authorization: this.localStorageService.getToken('accessToken') });
    return this.Http.post(this.API_URL + url, data, { headers }).pipe(map((rsp) => rsp));
  }
  /*****************************************************************************************/

  /*****************************************************************************************
  @PURPOSE      : To Show session LogOut popup
  @PARAMETERS   : NA
  @RETURN       : NA
  /*****************************************************************************************/
  sessionLogOut() {
    this.localStorageService.clearToken();
    swal({
      position: 'center',
      type: 'error',
      text: 'Session Timeout',
      showConfirmButton: false,
      timer: 1800,
      customClass: 'custom-toaster',
    });
    // this.router.navigate([URLConstants.LOGIN]);
  }
  /****************************************************************************************/

  /*****************************************************************************************
  @PURPOSE      : To Show error on status 401, 422 or any other error
  @PARAMETERS   : NA
  @RETURN       : NA
  /*****************************************************************************************/
  error(error) {
    if (error.status === 401) {
      this.sessionLogOut();
    } else if (error.status === 422) {
      swal({
        position: 'center',
        type: 'error',
        text: 'Login Failed. Invalid credentials!',
        showConfirmButton: false,
        timer: 1800,
        customClass: 'custom-toaster',
      });
    } else {
      swal({
        position: 'center',
        type: 'error',
        text: 'Internal Server Error',
        showConfirmButton: false,
        timer: 1800,
        customClass: 'custom-toaster',
      });
    }
  }
  /*****************************************************************************************/
}
