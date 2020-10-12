import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Constants
import { URLConstants } from '../../../common/constants/routerLink-constants';

// Service
import { LocalStorageService } from '../../../common/services/service/local-storage.service';
import { ShowErrorService  } from '../../../common/services/service/show-error.service';
import { LogoutService } from '../../../common/services/service/logout.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: [],
})
export class HeaderComponent implements OnInit {
	URLConstants = URLConstants;
	CHECK_INTERVAL: number = 3600000 // in ms
	
	constructor(public router: Router, public localStorageService: LocalStorageService, public logoutService: LogoutService,public showErrorService: ShowErrorService) {
	}

	ngOnInit() { 
		setInterval(() => {
			this.initInterval();
		},this.CHECK_INTERVAL);
		
	}

	initInterval() {
		if(this.localStorageService.getToken('username') && this.localStorageService.getToken('accessToken')){
			this.showErrorService.popToast('warning', 'Your session has been timeout. Please login to continue.');
		  	this.logoutService.logout();
		}
	}
}
