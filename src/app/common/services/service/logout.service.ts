import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// constants
import { callAPIConstants } from '../../constants/callAPI-constants';
import { URLConstants } from '../../constants/routerLink-constants';

// service
import { CommonService } from './common.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
	providedIn: 'root',
})
export class LogoutService {
	URLConstants = URLConstants;
	callAPIConstants = callAPIConstants;

	constructor(public localstorage: LocalStorageService, private router: Router, private commonService: CommonService) { }

	/*************************************************************
	@PURPOSE      : Logout
	@PARAMETERS   : NA
	@RETURN       : NA
	/*************************************************************/
	logout() {
		this.commonService.callApi(this.callAPIConstants.Logout, '', 'get', false, false, false).then((success) => {
			if (success.status === 1) {
				this.localstorage.clearToken();
			}
		});
	}
	/*************************************************************/
}
