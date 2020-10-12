import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// constants
import { URLConstants } from '../../constants/routerLink-constants';

// service
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root',
})
export class LogoutService {
	URLConstants = URLConstants;

	constructor(public localstorage: LocalStorageService, private router: Router) { }

	/*************************************************************
	@PURPOSE      : Logout
	@PARAMETERS   : NA
	@RETURN       : NA
	/*************************************************************/
	logout() {
		this.localstorage.clearToken();
		this.router.navigate([URLConstants.LOGIN]);
	}
	/*************************************************************/
}
