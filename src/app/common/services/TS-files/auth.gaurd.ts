import { APP_ID, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate,
  CanActivateChild, CanDeactivate, CanLoad, Router, RouterStateSnapshot,
} from '@angular/router';

// Constants
import { URLConstants } from '../../constants/routerLink-constants';

// Service
import { LocalStorageService } from '../service/local-storage.service';

/****************************************************************************
@PURPOSE      : Dont allow public pages to get accessed. (After Login)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
@Injectable()
export class CanLoginActivate implements CanActivate {
  URLConstants = URLConstants;
  constructor(public localStorageService: LocalStorageService, public router: Router) { }
  canActivate() {
    if (!this.localStorageService.getToken('accessToken')) {
      return true;
    }
    this.router.navigate([this.URLConstants.HOMEPAGE]);
    return false;
  }
}
/****************************************************************************/

/****************************************************************************
@PURPOSE      : Dont allow authorized pages to get accessed.  (Before Login)
@PARAMETERS   : N/A
@RETURN       : <boolean>
/****************************************************************************/
// tslint:disable-next-line: max-classes-per-file
@Injectable()
export class CanAuthActivate implements CanActivate {
  URLConstants = URLConstants;
  constructor(public localStorageService: LocalStorageService, public router: Router) { }
  canActivate() {
    if (this.localStorageService.getToken('accessToken')) {
      return true;
    }
    this.router.navigate([this.URLConstants.HOMEPAGE]);
    return false;
  }
}
/****************************************************************************/
